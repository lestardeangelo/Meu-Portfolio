// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/Meu-Portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Olá, meu nome é {userData.nameUser}.</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              <Text as="span" type="heading1" color="brand1">
                Desenvolvedor Back-end
              </Text>{" "}
            </Text>
            <Text type="body1" color="grey2">
            Meu interesse pela tecnologia começou aos 12 anos, onde comecei a estudar design, e sistemas. 
            Iniciei minha carreira em áreas administrativas, onde sempre tive a liberdade de apresentar algo a mais com o que sabia,
            e isso me motivou a buscar algo novo para me aprimorar. 
            Aos 16 anos tive interesse na área de programação, e logo dei início aos estudos.
            </Text>
            <Text type="body1" color="grey2">
            Com o objetivo de aprimorar ainda mais meus conhecimentos em programação, no ano de 2021 ingressei na Kenzie Academy Brasil,
            e após minha formação decidi seguir na área de desenvolvimento Back-end.
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="https://drive.google.com/file/d/1lgaY3-poFowcSGeI-xoB7ZWyfAa3u9HB/view?usp=sharing">
                Ver Currículo
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Veja o código-fonte do meu portfólio
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Alguns dos meus projetos{" "}
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
