import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Map Index Page</h1>
      <ul>
        <li>
          <Link href="/stores">맛집목록</Link>
        </li>
        <li>
          <Link href="/stores/new">맛집 생성</Link>
        </li>

        <li>
          <Link href="/stores/1">맛집 상세페이지</Link>
        </li>
        <li>
          <Link href="/stores/1/edit">맛집 수정페이지</Link>
        </li>

        <li>
          <Link href="/users/login">로그인페이지</Link>
        </li>
        <li>
          <Link href="/users/mypage">마이페이지</Link>
        </li>

        <li>
          <Link href="/users/likes">찜한 맛집ㄴ</Link>
        </li>
      </ul>
    </div>
  );
}
