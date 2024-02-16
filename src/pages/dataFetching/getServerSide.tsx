import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getServerSideProps: GetServerSideProps<{
  number: number;
}> = async () => {
  // Fetch data from external API
  const res = await fetch(
    "https://www.random.org/integers/?num=100&min=1&max=100&col=5&base=10&format=plain&rnd=new"
  );
  const number = await res.text();
  // Pass data to the page via props
  return { props: { number: parseInt(number) } };
};

export default function Page({
  number,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <h1>Server</h1>
      <p>Number : {number}</p>
    </main>
  );
}
