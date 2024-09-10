import Cards from "@/components/cards/Cards";
import Form, {UserType} from "@/components/form/Form";
import {Main} from "@/components/main/Main";

type ResponseType = {
    results: UserType[]
}
export default async function Home() {
    const res = await fetch('https://randomuser.me/api/?results=3');
    const users: ResponseType = await res.json();

  return (
    <div>
      <Main />
      <Cards />
      <Form users={users.results} />
    </div>
  );
}
