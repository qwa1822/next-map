import type { InferGetStaticPropsType, GetStaticProps } from "next";

export default function Page({
  number,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1>Hello World</h1>
      <h1>number ${number}</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  number: number;
}> = async context => {
  const num = await fetch(
    "https://www.random.org/integers/?num=100&min=1&max=100&col=5&base=10&format=plain&rnd=new" // format=plain으로 수정하여 JSON 대신 plain text 형식으로 받습니다.
  );
  const number = await num.text(); // plain text로 받은 데이터를 그대로 사용합니다.
  return { props: { number: parseInt(number) } }; // 받은 plain text를 숫자로 파싱하여 반환합니다.
};
