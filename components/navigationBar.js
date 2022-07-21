import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Navbar, Nav, Dropdown, Badge } from "react-bootstrap";
import { languageIdToName } from "../data/languageConversion";
import { useCookies } from "react-cookie";

export default function NavigationBar({ selectedLibrary, setSelectedLibrary }) {
  const [surveyCookies, setSurveyCookies] = useCookies(["selectedLibrary"]);

  function handleIframeMessage(event) {
    // Do we trust the sender of this message?
    const { NEXT_PUBLIC_SERVER_NAME } = process.env;
    if (event.origin == `https://${NEXT_PUBLIC_SERVER_NAME}.usable-tpm.site:5000`) {
      const data = event.data;
      if (data && data.includes("New language selected")) {
        const newLanguageId = parseInt(
          data.replace("New language selected: ", "")
        );
        const newSelectedLibrary = languageIdToName[newLanguageId];
        setSelectedLibrary(newSelectedLibrary);
        setSurveyCookies("selectedLibrary", newSelectedLibrary);
      }
    }
  }

  useEffect(() => {
    window.addEventListener("message", handleIframeMessage);
  }, []);

  const router = useRouter();

  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      style={{ backgroundColor: "#1ab394" }}
    >
      <Link href="/">
        <Navbar.Brand href="/">TPM Libraries Study</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="navigation-bar" />
      <Navbar.Collapse id="navigation-bar">
        <Nav activeKey={router.pathname} className="mr-auto">
          <Link href="/">
            <Nav.Link as="a" href="/">
              Survey
            </Nav.Link>
          </Link>
          <Link href="/faqs">
            <Nav.Link as="a" href="/faqs">
              FAQs
            </Nav.Link>
          </Link>
          <Link href="/terms">
            <Nav.Link as="a" href="/terms">
              Terms and policies
            </Nav.Link>
          </Link>
          <Link href="/contact">
            <Nav.Link as="a" href="/contact">
              Contact us
            </Nav.Link>
          </Link>
        </Nav>
        <Navbar.Text>
          <h5>
            Selected library:{" "}
            <Badge variant="secondary" pill>
              {selectedLibrary}
            </Badge>
          </h5>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
