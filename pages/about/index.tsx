import { DarkLayout } from "@/components/Layouts/DarkLayout";
import { MainLayout } from "@/components/Layouts/MainLayout";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
        <h1>About Page</h1>

        <h1 className="title">
          Ir a <Link href="/about">About</Link>
        </h1>

        <p className={"description"}>
          Get started by editing{" "}
          <code className={"code"}>pages/about/index.tsx</code>
        </p>
    </>
  );
}

AboutPage.getLayout = function(page: JSX.Element){
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}
