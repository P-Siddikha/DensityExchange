import { Box, Flex, Text, chakra,Image } from "@chakra-ui/react";

// import Image from "next/image";

export default function Greeting() {
    return (
        <Flex justifyContent={["left", "left", "left", "center", "center"]} >
            {/* <Image src="/images/img2.png" alt="dffd"/> */}
            <Box w={["100%", "100%", "100%", "50%", "50%"]} p={"14px"} >
                <Text fontSize={"21px"} color={"black"} mb={"17px"} >Hey all,</Text>
                <Text fontSize={"21px"} color={"black"} mb={"17px"} lineHeight={"30px"}>I've decided to make a redesign and animation for the Ahead app. Please review and happy to read your feedback!</Text>
                <Text fontSize={"21px"} color={"black"} lineHeight={"30px"}>Design — Figma</Text>
                <Text fontSize={"21px"} color={"black"} lineHeight={"30px"}>Illustrations — Adobe Illustrator</Text>
                <Text fontSize={"21px"} color={"black"} mb={"20px"} lineHeight={"30px"}>Animation — Adobe After Effects</Text>
                <Text fontSize={"21px"} color={"black"} mb={"4px"} lineHeight={"30px"}>*********</Text>
                <Text fontSize={"21px"} color={"black"} mb={"4px"} lineHeight={"30px"}>💌 I am open to new projects! {" "}
                    <chakra.span
                        as="span"
                        textDecoration="underline"
                        transition="color 0.3s"
                    >
                        hey@migulko.cz
                    </chakra.span>
                </Text>
                <Text fontSize={"21px"} lineHeight={"32px"} color={"black"} mb={"8px"}>*********</Text>
                <Text fontSize={"21px"} lineHeight={"32px"} color={"black"} mb={"4px"}>

                    <chakra.span
                        as="span"
                        textDecoration="underline"
                        transition="color 0.3s"
                    >
                        Instagram
                    </chakra.span>

                    {" "} |  {" "}
                    <chakra.span
                        as="span"
                        textDecoration="underline"
                        transition="color 0.3s"
                    >
                        Linkedin
                    </chakra.span>
                    {" "}|{" "}
                    <chakra.span
                        as="span"
                        textDecoration="underline"
                        transition="color 0.3s"
                    >
                        UI8
                    </chakra.span>

                </Text>

            </Box>
        </Flex>
    );
}