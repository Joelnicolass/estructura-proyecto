import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import useSWR from "swr";
import { getUsers } from "./services/jsonplaceholder.service";
import SwiperGeneric from "../../../components/SwiperGeneric/SwiperGeneric";
import { SwiperSlide } from "swiper/react";
import CardGeneric from "../../../components/CardGeneric/CardGeneric";
import { Modal, Spacer, Text } from "@nextui-org/react";
import { useModal } from "../../../context/ModalContext";

const HomeView = () => {
  const { data, error, isLoading } = useSWR(`getUsers`, () => getUsers());

  const { openModal } = useModal();

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>

      <div
        style={{
          background: "red",
          height: "80vh",
        }}
      >
        <Text h1>Banner</Text>
      </div>

      <button
        onClick={() => {
          openModal({
            content: (
              <div>
                <h1>Hola</h1>
              </div>
            ),
            config: {
              //config
            },
          });
        }}
      >
        open modal
      </button>

      <Spacer y={2} />

      <div>
        <Text h1>Usuarios</Text>
        <SwiperGeneric>
          {data?.map((user) => (
            <SwiperSlide key={user.id}>
              <CardGeneric user={user} />
            </SwiperSlide>
          ))}
        </SwiperGeneric>
      </div>

      <Spacer y={2} />

      <div>
        <Text h1>Usuarios</Text>
        <SwiperGeneric>
          {data?.map((user) => (
            <SwiperSlide key={user.id}>
              <CardGeneric user={user} />
            </SwiperSlide>
          ))}
        </SwiperGeneric>
      </div>

      <Spacer y={2} />

      <div>
        <Text h1>Usuarios</Text>
        <SwiperGeneric>
          {data?.map((user) => (
            <SwiperSlide key={user.id}>
              <CardGeneric user={user} />
            </SwiperSlide>
          ))}
        </SwiperGeneric>
      </div>
    </div>
  );
};

export default HomeView;
