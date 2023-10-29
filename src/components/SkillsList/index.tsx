import { Container, Item, List } from "./styles";

interface SkillsListProps {
  skills: string[];
}

export function SkillsList({ skills }: SkillsListProps) {
  return (
    <Container>
      <List>
        {skills.map((skill) => {
          return <Item key={skill}>{skill}</Item>;
        })}
      </List>
    </Container>
  );
}
