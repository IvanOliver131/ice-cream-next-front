import { Box, ChakraProvider, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import { StyleHook as themeMode} from '../hooks/StyleHook';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false // Desliga o serverSideRendering
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false
  },
  // xasis da erro no deploy
  xasis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-04-14T00:00:00.000Z',
      '2022-04-15T00:00:00.000Z',
      '2022-04-16T00:00:00.000Z',
      '2022-04-17T00:00:00.000Z',
      '2022-04-18T00:00:00.000Z',
      '2022-04-19T00:00:00.000Z',
      '2022-04-20T00:00:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
};

const series = [
  { name: 'series1', data: [31, 120, 10, 28, 61, 18, 189] }
];
export default function Dashboard() {
  return (
    <ChakraProvider theme={themeMode}>
      <Flex direction="column" h="100vh">
        <Header />

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          <Sidebar />

          <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth="320px"
            alignItems="flex-start"
          >
            <Box
              p={["6", "8"]}
              bg="gray.800"
              borderRadius={8}
              pb="4"
            >
              <Text
                fontSize="lg"
                mb="4"
              >
                Inscritos da semana              
              </Text>
              <Chart 
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>

            <Box
              p={["6", "8"]}
              bg="gray.800"
              borderRadius={8}
              pb="4"
            >
              <Text
                fontSize="lg"
                mb="4"
              >
                Taxa de abertura              
              </Text>
              <Chart 
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex> 
    </ChakraProvider>
  );
}