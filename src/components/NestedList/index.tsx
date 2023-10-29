import { ReactNode, useState } from "react";
import { Container, Item, ItemContent, ItemTitle, List } from "./styles";
import ExpandLess from "./../../assets/expand-less.svg?react";
import ExpandMore from "./../../assets/expand-more.svg?react";

interface Item {
  key: string;
  title: ReactNode;
  content?: ReactNode;
}

interface NestedListProps {
  items: Item[];
}

export function NestedList({ items }: NestedListProps) {
  const [itemsActivation, setItemsActivation] = useState<{
    [key: string]: boolean;
  }>(
    items.reduce((acc, item) => {
      return {
        ...acc,
        [item.key]: false,
      };
    }, {})
  );

  function handleItemActivation(key: string) {
    setItemsActivation((prevState) => {
      return {
        ...prevState,
        [key]: !prevState[key],
      };
    });
  }

  return (
    <Container>
      <List>
        {items.map((item) => {
          return (
            <Item key={item.key}>
              <ItemTitle onClick={() => handleItemActivation(item.key)}>
                {item.title}
                {itemsActivation[item.key] ? <ExpandLess /> : <ExpandMore />}
              </ItemTitle>
              <ItemContent isOpen={itemsActivation[item.key]}>
                {item.content}
              </ItemContent>
            </Item>
          );
        })}
      </List>
    </Container>
  );
}
