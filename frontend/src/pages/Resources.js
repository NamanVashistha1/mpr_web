
import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Docs(){
    return(
        <>
        <div
        style={{
          backgroundColor: "black",
          fontFamily: "monospace",
          textAlign: "center",
          color: "#fff",
          padding: "20px",
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', margin: '0 auto', border: '2px double #ff6b00'
        }}
      >
        <h2 style={{ fontSize: "39px", marginBottom: "20px" }}>
          Our Comprehensive Documentation Page
        </h2>
        <p
          style={{ fontSize: "17px", lineHeight: "1.5", marginBottom: "20px" }}
        >
          Embark on a journey through the world of programming with our
          comprehensive documentation. Discover & master five key languages:
        </p>
        <ul style={{ listStyle: "none", padding: "0" }}>
          <li style={{ fontSize: "20px", marginBottom: "10px" }}>
            🧠 C: Power for system programming & embedded systems.
          </li>
          <li style={{ fontSize: "20px", marginBottom: "10px" }}>
            🌐 C++: Versatility for performance-critical applications.
          </li>
          <li style={{ fontSize: "20px", marginBottom: "10px" }}>
            🤖 JavaScript: Fuel for modern web development.
          </li>
          <li style={{ fontSize: "20px", marginBottom: "10px" }}>
            💼 Python: Engine behind AI, machine learning, & data science.
          </li>
          <li style={{ fontSize: "20px", marginBottom: "0" }}>
            🛠️ Java: Strength for enterprise solutions.
          </li>
        </ul>
        <p style={{ fontSize: "17px", lineHeight: "1.5" }}>
          Explore the basics, web development, AI, enterprise apps, & system
          programming. Let's code the future together! 🚀
        </p>
      </div>
      <br /> <br />

        <div className="container">
      <div className="row text-center justify-content-center">

      <div className="col-lg-4 col-sm-12">
            <Card className="h-100">
                <div className="text-center">
            <Card.Img variant="top" src="https://cdn.iconscout.com/icon/free/png-512/java-43-569305.png" style={{ width: '230px' }}/>
            </div>
            <Card.Body>
            <Card.Title>Java programming language</Card.Title>
            <Card.Text>
            Java: A robust, cross-platform language for building a wide range of applications. It's known for its portability and extensive libraries, making it a popular choice in enterprise software development.         </Card.Text>
            <Button variant="outline-dark" style={{ marginRight: '12px' }}>
                <a href="https://www.tutorialspoint.com/java/index.htm" style={{textDecoration:'none'}}>Read more</a>
            </Button>
            <Button variant="outline-dark">
                <a href="https://youtu.be/rV_3Lewxx6o" style={{textDecoration:'none'}}>Watch here</a>
            </Button>
            </Card.Body>
            </Card>
            </div>

            <div className="col-lg-4 col-sm-12">
            <Card className="h-100">
                <div className="text-center">
            <Card.Img variant="top" src="https://cdn.picpng.com/logo/language-logo-python-44976.png" style={{ width: '230px' }}/>
            </div>
            <Card.Body>
            <Card.Title>Python programming language</Card.Title>
            <Card.Text>
            Python: A versatile, high-level language celebrated for its simplicity and readability. Python is widely used in web development, data science, and automation.            </Card.Text>
            <Button variant="outline-dark" style={{ marginRight: '12px' }}>
                <a href="https://docs.python.org/3/" style={{textDecoration:'none'}}>Read more</a>
            </Button>
            <Button variant="outline-dark">
                <a href="https://youtu.be/ihk_Xglr164" style={{textDecoration:'none'}}>Watch here</a>
            </Button>
            </Card.Body>
            </Card>
            </div>
            
            <div className="col-lg-4 col-sm-12">
            <Card className="h-100">
                <div className="text-center">
            <Card.Img variant="top" src="https://logospng.org/download/javascript/logo-javascript-1024.png" style={{ width: '230px' }}/>
            </div>
            <Card.Body>
            <Card.Title>JavaScript programming language</Card.Title>
            <Card.Text>
            JavaScript: The universal language of the web, enabling dynamic and interactive web applications. Its versatility extends from the frontend to server-side development.            </Card.Text>
            <Button variant="outline-dark" style={{ marginRight: '12px' }}>
                <a href="https://devdocs.io/javascript/" style={{textDecoration:'none'}}>Read more</a>
            </Button>
            <Button variant="outline-dark">
                <a href="https://youtu.be/hKB-YGF14SY" style={{textDecoration:'none'}}>Watch here</a>
            </Button>
            </Card.Body>
            </Card>
            </div>
      </div>
      </div>

      <br />
        <div className="container">
      <div className="row text-center justify-content-center" >

           <div className="col-lg-4 col-sm-12">
            <Card className="h-100">
                <div className="text-center">
            <Card.Img variant="top" src="https://www.pngkit.com/png/full/101-1010012_download-png.png" style={{ width: '230px'}}/>
            </div>
            <Card.Body>
            <Card.Title>C programming language</Card.Title>
            <Card.Text>
                C: An efficient language from the '70s, ideal for systems, embedded, and OS development. Standardized for compatibility, it's a cornerstone in software with a lasting legacy in C++, C#, Objective-C.
            </Card.Text>
            <Button variant="outline-dark" style={{ marginRight: '12px' }}>
                <a href="https://devdocs.io/c/" style={{textDecoration:'none'}}>Read more</a>
            </Button>
            <Button variant="outline-dark">
                <a href="https://youtu.be/YXcgD8hRHYY?si=1c6msNWN8G98XYiF" style={{textDecoration:'none'}}>Watch here</a>
            </Button>
            </Card.Body>
            </Card>
            </div>

            <div className="col-lg-4 col-sm-12">
            <Card className="h-100">
            <div className="text-center">
            <Card.Img variant="top" src="https://2.bp.blogspot.com/-S9X0kdII8wA/XEc379OE4eI/AAAAAAAAAF8/joUY66Bgzeo-1XftGrFmZUnDo8Jv6BAaQCLcBGAs/s1600/800px-ISO_C%252B%252B_Logo.svg.png" style={{ width: '230px' }}/>
            </div>
            <Card.Body>
            <Card.Title>C++ programming language</Card.Title>
            <Card.Text>
            C++: A powerful language for systems and applications, offering efficiency and versatility. It's the foundation for modern software development and shares a lineage with C.            </Card.Text>
            <Button variant="outline-dark" style={{ marginRight: '12px' }}>
                <a href="https://devdocs.io/cpp/" style={{textDecoration:'none'}}>Read more</a>
            </Button>
            <Button variant="outline-dark">
                <a href="https://youtu.be/yGB9jhsEsr8?si=g20ncNC1eT5rxdVQ" style={{textDecoration:'none'}}>Watch here</a>
            </Button>
            </Card.Body>
            </Card>
            </div>
      </div>
      </div>
        </>
    );
}

export default Docs;




