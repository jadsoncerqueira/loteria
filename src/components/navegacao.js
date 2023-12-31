"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/utils";
import "./navegacao.css";

export default function Navegacao() {
  let router = usePathname();
  router = router.split("/");
  router = router[router.length - 1];

  const selected = "selected";

  return (
    <header>
      <h1>Logo</h1>
      <nav>
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
