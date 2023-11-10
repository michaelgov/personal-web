import './styles/resume.css';
import { HiOutlineDownload } from 'react-icons/hi';

function Resume() {
    return  (
    <div className='resume'>
      <header>
        <div className="headerSection">
            <h1><strong>Michael Gov</strong></h1>
            <p id="icon">
                <a href="./MichaelGov_Resume.pdf" download={"MichaelGov_Resume.pdf"}><HiOutlineDownload /></a>
            </p>
        </div>
        <p className="contact-info">360-702-9556 | <a href="mailto:michcgov@gmail.com">michcgov@gmail.com</a> | <a href="https://linkedin.com/in/michael-gov">linkedin.com/in/michael-gov</a> | <a href="https://github.com/michaelgov">github.com/michaelgov</a></p>
      </header>

      <section>
        <h2><strong>Technical Skills</strong></h2>
        <hr />
        <ul>
          <li>
            <p className="skillSets"><strong>Languages</strong> JavaScript, HTML/CSS, Java, SQL, R, Python</p>
          </li>
          <li>
            <p className="skillSets"><strong>Technologies:</strong> React.js, Node.js, Leaflet, Plotly, D3.js</p>
          </li>
          <li>
            <p className="skillSets"><strong>Tools:</strong> Photoshop, Illustrator, Figma, Miro, VS Code, Git, Bash, GitHub, Tableau, SSMS, ATLAS.ti</p>
          </li>
        </ul>
      </section>
      
      <section>
        <h2><strong>Education</strong></h2>
        <hr />
        <ul>
          <li>
            <div className='sectionHead'>
                <h3>University of Washington</h3>
                <p><strong>June 2023</strong></p>
            </div>
            <p className='subHead'><em>Bachelor of Science in Informatics</em> <em>Seattle, WA</em></p>
            <p className="courseWork"><strong>Relevant Coursework: </strong>Web Programming, Value Sensitive Design, Cooperative Software Development, Design Methods</p>
          </li>
        </ul>
      </section>
      
      <section>
        <h2><strong>Projects</strong></h2>
        <hr />
        <ul>
          <li>
            <div className='sectionHead'>
                <h3>Parktopia</h3>
                <p><strong>April 2023 - June 2023</strong></p>
            </div>
            <p className='subHead'><em>JavaScript, Git, React.js, Figma, Leaflet.js</em></p>
            <ul className="desc">
              <li>Developed a web application using public data from the City of Seattle to find local parks with specific amenities around the Greater Seattle area.</li>
              <li>Mapped using Leaflet to display parks located on plots on an interactive map.</li>
              <li>Used React to build the website and filter for local parks based on specific amenities on the map.</li>
            </ul>
          </li>
          <li>
            <div className='sectionHead'>
                <h3>Gender Gap in Gaming</h3>
                <p><strong>Jan. 2023 - June 2023</strong></p>
            </div>
            <p className='subHead'><em>JavaScript, Power BI, React.js, Figma, Miro, Git</em></p>
            <ul className="desc">
              <li>Designed an analytical and informative website dedicated to exploring the experiences of women in the gaming space, both within the industry and in player bases.</li>
              <li>Fully designed via Figma and built on the web using React.</li>
              <li>Visualized data using PowerBI from research articles and responses from interviews and surveys.</li>
            </ul>
          </li>
          <li>
            <div className='sectionHead'>
                <h3>Blossom</h3>
                <p><strong>May 2023</strong></p>
            </div>
            <p className='subHead'><em>Figma, Illustrator, Photoshop, Miro</em></p>
            <ul className="desc">
              <li>Ideated and designed a mobile application to support new mothers in postpartum.</li>
              <li>Prototyped using Figma to replicate user experiences and resources available in the app.</li>
              <li>Created logos utilizing Adobe Photoshop and Illustrator.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section>
        <h2><strong>Experience</strong></h2>
        <hr />
        <ul>
          <li>
            <div className='sectionHead'>
              <h3>IT Student Assistant</h3>
                <p><strong>Nov. 2021 - June 2023</strong></p>
            </div>
            <p className='subHead'><em>University of Washington: Health Sciences and Academic Services</em><em>Seattle, WA</em></p>
            <ul className="desc">
              <li>Primary contact for troubleshooting software and equipment systems used in classrooms.</li>
              <li>Maintained inventory and upkeep of AV equipment used across campus.</li>
              <li>Managed front desk operations and provided reception services for faculty.</li>
            </ul>
          </li>
          <li>
            <div className='sectionHead'>
                <h3>Club President</h3>
                <p><strong>April 2020 - June 2023</strong></p>
            </div>
            <p className='subHead'><em>Gaming Association @ UW: Valorant (WGA Valorant)</em><em>Seattle, WA</em></p>
            <ul className="desc">
              <li>Co-founded and led a competitive gaming community with over 1,500 active members.</li>
              <li>Organized large-scale tournaments and events, and established partnerships with industry-leading brands such as Razer and Red Bull.</li>
              <li>Oversaw event staff and enriched the vibrancy of the gaming community at UW through my impactful leadership.</li>
            </ul>
          </li>
          <li>
            <div className='sectionHead'>
                <h3><strong>Undergraduate Research Assistant</strong></h3>
                <p><strong>Feb. 2022 - March 2022</strong></p>
            </div>
            <p className='subHead'><em>UW iSchool's GAMER Research Group</em><em>Remote</em></p>
            <ul className="desc">
              <li>Documented research interviews and examination results.</li>
              <li>Encoded video transcripts to study the relationship between mental wellness and gaming using ATLAS.ti.</li>
              <li>Presented research findings to Informatics faculty and fellow researchers.</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;