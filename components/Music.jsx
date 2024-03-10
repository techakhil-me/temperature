import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Input } from "@nextui-org/react";

function Music() {
  // const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false); // Close the modal when the close button is clicked
  };

  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Music</ModalHeader>
              <ModalBody>
                <div className="flex gap-4">
                  <Input
                    //   size="sm"
                    //   value={newTodo}
                    //   onChange={handleChange}
                    placeholder="Lofi, Travis scott, Pian"
                    type="text"
                    variant="bordered"
                  />
                  <Button
                    color="primary"
                    radius="full"
                    //   size="sm"
                    variant={"solid"}
                    //   onPress={addTodo}
                  >
                    Play
                  </Button>
                </div>

                <div className="pt-4 font-bold">Genres</div>
                <div className="flex gap-4">
                  <Button className="w-full" color="secondary">
                    Classical
                  </Button>
                  <Button className="w-full" color="success">
                    Lofi
                  </Button>
                  <Button className="w-full" color="warning">
                    Chill
                  </Button>
                  <Button className="w-full" color="danger">
                    Jazz
                  </Button>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={handleClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Card className="shadow-none h-full p-0">
        <CardBody className="p-0">
          <iframe
            className="h-full w-full"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Zs7G1oB1W0c?si=Lky9g_lWgOLTV1I6&autoplay=1&muted=1"
            title="YouTube video player"
            frameborder="0"
            autoplay
            muted
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </CardBody>
      </Card>
    </>
  );
}

export default Music;
