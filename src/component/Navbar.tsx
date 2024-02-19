import Link from "next/link";
import React from "react";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircle } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <Link className="navbar__logo" href="/">
          nextMap
        </Link>
        <div className="navbar__list">
          <Link href="/stores" className="navbar__list--item">
            맛집 목록
          </Link>
          <Link href="/stores/new" className="navbar__list--item">
            맛집 등록
          </Link>
          <Link href="/stores/likes" className="navbar__list--item">
            찜한 가게
          </Link>
          <Link href="/users/login" className="navbar__list--item">
            로그인
          </Link>
        </div>

        {/* Mobile Button */}
        <div
          role="presentation"
          className="navbar__button"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {isOpen ? <IoIosCloseCircle /> : <GiHamburgerMenu />}
        </div>
      </div>
      {/* mobile NavBar */}
      {isOpen && (
        <div className="navbar__mobile">
          <div className="navbar__list--mobile">
            <Link href="/stores" className="navbar__list--item--mobile">
              맛집 목록
            </Link>
            <Link href="/stores/new" className="navbar__list--item--mobile">
              맛집 등록
            </Link>
            <Link href="/stores/likes" className="navbar__list--item--mobile">
              찜한 가게
            </Link>
            <Link href="/users/login" className="navbar__list--item--mobile">
              로그인
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
