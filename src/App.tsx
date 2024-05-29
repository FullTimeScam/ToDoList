import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const sampleData: ITodo[] = [
  {
    id: 1,
    content: "SCam78L8SLRPAXgBAHNAR3NN2KWU6EpyPp91qkYC3Em",
    isDone: false,
  },
  {
    id: 2,
    content: "SCame5XVxvp5zhczNjtvtmqQDXwdZNBTnGAE1gTmm7v",
    isDone: false,
  },
  {
    id: 3,
    content: "ScamVRJbani7kZovTMyvTCdwad8JFYB6Zcx2pVvjmoW",
    isDone: false,
  },
];

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(sampleData);

  return (
    <Flex flexDir="column" minH="100vh" bgColor={"yellow.400"}>
      화이트리스트 등록
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </Flex>
  );
};

export default App;
