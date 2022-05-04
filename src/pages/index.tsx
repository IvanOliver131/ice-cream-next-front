import { Flex, Button, Stack, Box, ChakraProvider } from '@chakra-ui/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';

// Resolvi colocar o logo pra ficar mais bonito
import { Logo } from '../components/Header/Logo';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useDarkmodeContext } from '../contexts/DarkmodeContext';
import { dark, light } from '../styles';

// import { useContext } from 'react';
// import { AuthContext } from '../contexts/AuthContext';

type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

// A propriedade align sinaliza erro porem não esta com erro
export default function SignIn() {
  const router = useRouter();
  const { mode } = useDarkmodeContext();
  const theme = mode === 'dark' ? dark : light;

  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  });

  // const { signIn } = useContext(AuthContext);

  const { errors } = formState;
  
  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values.email, values.password);

    // await signIn(values);

    router.push('/dashboard');
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex 
        w="100vw" 
        h="100vh" 
        align="center" 
        justify="center"
      >
        <Flex 
          as="form"
          width="100%"
          maxWidth={320}
          bg="gray.800"
          p="8" 
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        > 
          <Box mb="3" textAlign={'center'}>
            <Logo />
          </Box>      
          
          <Stack spacing="4">
            <Input 
              type="email" 
              label="E-mail"
              error={errors.email}
              {...register('email')}
            >
            </Input>
            
            <Input 
              type="password" 
              label="Senha"
              error={errors.password}
              {...register("password")}
            >
            </Input>      
          </Stack>
          
          <Button 
            type="submit" 
            mt="6" 
            colorScheme="pink" 
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}
