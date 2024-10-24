import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import Datatable from "@/components/datatable";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-1 md:py-3">
        <div className="">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>Registrese para obtener su turno</span>
          </Snippet>
        </div>
        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "secondary",
              radius: "full",
              variant: "shadow",
            })}
            href={"/register"}
          >
            Registrarse
          </Link>
          <Link
            className={buttonStyles({
              color: "primary",
              variant: "bordered",
              radius: "full",
            })}
            href={"/login"}
          >
            Iniciar Sesion
          </Link>
        </div>
        <div className="inline-block max-w-xl text-center justify-center pt-6">
          <Datatable />
        </div>
      </section>
    </DefaultLayout>
  );
}
