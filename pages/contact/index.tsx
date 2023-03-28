import { MainLayout } from "@/components/Layouts/MainLayout";
import Link from "next/link";

const ContactPage = () => {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className="title">
        Ir a <Link href="/">Home</Link>
      </h1>

      <p className={"description"}>
        Get started by editing{" "}
        <code className={"code"}>pages/contact/index.tsx</code>
      </p>
    </MainLayout>
  );
};

export default ContactPage;
