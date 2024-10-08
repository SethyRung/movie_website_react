import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function DefaultLayout({ children }: { children: JSX.Element }) {
  return (
    <div className="bg-secondary-500 relative">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
