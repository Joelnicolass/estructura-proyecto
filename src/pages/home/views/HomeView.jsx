import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import useSWR from "swr";
import { getUserById } from "./services/jsonplaceholder.service";

const HomeView = () => {
  const [userId, setUserId] = useState(1);

  const { data, error, isLoading } = useSWR(`getUserById${userId}`, () =>
    getUserById(userId)
  );

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>

      <h3>userId: {userId}</h3>

      <div>
        {
          <div key={data?.id}>
            <h1>{data?.name}</h1>
            <h2>{data?.email}</h2>
          </div>
        }
      </div>

      <button
        onClick={() =>
          setUserId((prev) => {
            if (prev === 9) return 1;
            return prev + 1;
          })
        }
      >
        cambiar usuario
      </button>
    </div>
  );
};

export default HomeView;
