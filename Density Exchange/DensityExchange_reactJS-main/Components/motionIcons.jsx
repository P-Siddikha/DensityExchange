import { Box, border, Image, Flex, Text, Heading } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import ResizableDiv from './changingmobiledivsize';
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

const RotatingBoxes = () => {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            });
        }, options);

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <Flex className="rotating-container" ref={containerRef} borderRadius={"12px"} w={"70%"} m={"auto"} pl={"40px"} pr={"40px"}>
            <Box h={"100%"} w={"50%"} overflow={"hidden"}>
                <Box ml={"40px"} className="rotate" bg={"green"} border={"1px solid green"} w={"100px"} h={"10px"} mt={"25px"} borderTopRadius={"100%"} >

                </Box>
                <Text fontWeight={"bold"} mt={"40%"}>Ahead app</Text>
                <Box
                    overflow={"hidden"}
                    position="relative"
                >
                    <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
                        {() => (
                            <Flex alignItems="center">
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{
                                        opacity: isVisible ? 1 : 0,
                                        x: isVisible ? 0 : -100,
                                    }}
                                    transition={{ duration: 0.8 }}
                                    style={{ position: "relative", left: 0 }}
                                >
                                    <Heading fontSize={"45px"} textAlign={"start"}>Master your life</Heading>
                                    <Heading fontSize={"45px"} textAlign={"start"}>
                                        by mastering
                                    </Heading>
                                    <Heading fontSize={"45px"} textAlign={"start"}>
                                        emotions
                                    </Heading>
                                </motion.div>
                            </Flex>
                        )}
                    </VisibilitySensor>
                </Box>
                <Flex mt={"30px"} justifyContent={"flex-start"} alignItems={"center"} gap={"10px"}>
                    <Image w={"120px"} h={"35px"} src='/images/appstoreimg.png' alt='err' />
                    <Box>
                        <Text>
                            ⭐ ⭐ ⭐ ⭐ ⭐
                        </Text>
                        <Text>100+ Appstore reviews</Text>
                    </Box>
                </Flex>
            </Box>

            <Box>
                <Box padding={"3%"} borderRadius={"50%"} h={"400px"} w={"400px"} border={"5px dashed white"} className={`rotating-box red ${isVisible ? 'active' : ''}`}>
                    <Box w={"20%"} ml={"-20px"} ><Image w={"100%"} h={"10%"} src='/images/emogi1.png' alt='error' /></Box>
                    <Box mt={"30%"} w={"20%"} h={"20%"} ml={"100%"} ><Image w={"100%"} h={"100%"} src='/images/emogi2.png' alt='error' /></Box>
                    <Box mt={"20%"} w={"20%"} ml={"10%"}  ><Image w={"100%"} h={"10%"} src='/images/emogi3.png' alt='error' /></Box>
                </Box>

                <ResizableDiv />
            </Box>
            {/* <Box className={`rotating-box green ${isVisible ? 'active' : ''}`}></Box>
      <Box className={`rotating-box blue ${isVisible ? 'active' : ''}`}></Box> */}
        </Flex>
    );
};

export default RotatingBoxes;
