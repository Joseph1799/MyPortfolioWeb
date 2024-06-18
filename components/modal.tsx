"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

interface ModalComponentProps {
  modalContent: React.ReactNode;
  link: string;
}

export default function ModalComponent({
  modalContent,
  link,
}: ModalComponentProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button radius="full" size="sm" className="ml-2" onPress={onOpen}>
        Explore
      </Button>
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#203036]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#17202d] dark:bg-[#17202c] text-[#ffff]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={isOpen}
        radius="lg"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Technologies Used
              </ModalHeader>
              <ModalBody>{modalContent}</ModalBody>
              <ModalFooter>
                <Button color="warning" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  as="a"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0064D7] shadow-lg shadow-blue-500/20"
                  onPress={onClose}
                >
                  Go
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
