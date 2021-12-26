import React from "react";

const SolutionIntro = () => {
  return (
    <>
      <section id="solution" className="solution">
        <h3 className="sub-heading">The Solution</h3>
        <h2 className="main-heading">Sustainable waste management</h2>
        <p className="desc">
          Waste is everybody's responsibility. Solving waste disposal problem
          requires a large-scale continuous effort. As Manufacturers, need to
          take responsibility for their waste by operating in a
          <strong>
            &ensp;
            <a
              className="refernce_links"
              target="_blank"
              rel="noreferrer"
              href="https://corporatefinanceinstitute.com/resources/knowledge/economics/circular-economy/"
            >
              circular economy
            </a>
          </strong>
          &ensp; as much as possible and find ways to adapt to modern tried and
          tested technologies beyond conventional methods of producing products.
        </p>
        <div className="img-container">
          <div className="image">
            <img src="./images/circular-economy.png" alt="Circular Economy" />
          </div>
          <div className="benefits">
            <h3>Benefits</h3>
            <ul>
              <li>Make better use of finite resources</li>
              <li>Reduce emissions</li>
              <li>Protect human health and biodiversity</li>
              <li>Boost economies</li>
              <li>Create more and better jobs</li>
            </ul>
            <p>
              For more information, read&ensp;
              <a
                className="refernce_links"
                target="_blank"
                rel="noreferrer"
                href="https://www.weforum.org/agenda/2021/02/change-five-key-areas-circular-economy-sustainability/"
              >
                here.
              </a>
            </p>
          </div>
        </div>
        <div className="content">
          <div className="content_left">
            <p className="desc second-para">
              While consumer can also play a role in this circular economy by
              incorporating the 5R principles -
              <strong>
                &ensp;
                <a
                  className="refernce_links"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.circlewaste.co.uk/2020/09/16/what-are-the-5-rs-of-waste-management/"
                >
                  Refuse, Reduce, Reuse, Repurpose and Recycle
                </a>
              </strong>
              ,&ensp;whether at home or at work. This will not only reduce the
              amount of solid waste going to landfill, but turn waste into a
              resource & also save our fast depleting natural resources.
            </p>
            <p className="desc third-para">
              Municipal governments can also do their share by working with
              industry and other stakeholders to expand the&ensp;
              <strong>
                <a
                  className="refernce_links"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.environmentalpollution.in/waste-management/waste-types-sources-and-impact-waste-management/4432"
                >
                  types of wastes
                </a>
              </strong>
              &ensp;that can be handled by local facilities and organise
              campaigns to raise awareness on proper waste management and
              effective disposal of waste.
            </p>
          </div>
          <div className="content_image">
            <img src="./images/5r-principles.png" alt="% R Principles" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionIntro;
