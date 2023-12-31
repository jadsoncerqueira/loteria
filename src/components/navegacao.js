"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/utils";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./navegacao.css";
import { useState } from "react";

export default function Navegacao() {
  let router = usePathname();
  router = router.split("/");
  router = router[router.length - 1];

  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const selected = "selected";

  return (
    <header>
      <div className="logo-amburger">
        <button
          onClick={() => {
            setIsActiveMenu(!isActiveMenu);
          }}
          className="menu-amburger"
        >
          {!isActiveMenu ? (
            <MenuIcon sx={{ color: "white" }} />
          ) : (
            <CloseIcon sx={{ color: "white" }} />
          )}
        </button>
        <h1>Logo</h1>
      </div>
      <nav className={`${isActiveMenu && "active"}`}>
        <ul>
          {navLinks.map((link, index) => {
            const pat = link.path.split("/");
            return (
              <li key={index}>
                <Link
                  className={`links ${
                    router === pat[pat.length - 1] ? selected : ""
                  }`}
                  href={link.path}
                  onClick={() => setIsActiveMenu(false)}
                >
                  {link.nome}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
