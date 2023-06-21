import { Card } from "@nextui-org/react";
import React, { useState } from "react";

import { motion } from "framer-motion";
import Test from "../../pages/home/views/Test";

const CardGeneric = ({ user }) => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <motion.div key={user.id} initial={{ y: -100 }} animate={{ y: 0 }}>
      <Card
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        css={{
          backgroundImage: `url(https://picsum.photos/seed/${user.id}/200/300)`,
          backgroundSize: "cover",
          height: "150px",
          width: "300px",
        }}
      >
        <Card.Header
          css={{
            bgBlur: "10px",
          }}
        >
          {user.name}
        </Card.Header>
        <Card.Body></Card.Body>
        <Test isHovered={isHovered}>
          <Card.Footer
            css={{
              bgBlur: "10px",
            }}
          >
            {user.email} - {user.phone}
          </Card.Footer>
        </Test>
      </Card>
    </motion.div>
  );
};

export default CardGeneric;
