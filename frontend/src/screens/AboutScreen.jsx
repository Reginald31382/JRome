import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineWork } from "react-icons/md";
import { FiStar } from "react-icons/fi";
import { GiBattleTank, GiTeacher, GiFuelTank } from "react-icons/gi";
import { GrUserManager } from "react-icons/gr";
import { IoMdSchool } from "react-icons/io";
import { LinkContainer } from "react-router-bootstrap";

const AboutScreen = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 style={{ color: "black", fontFamily: "fantasy" }}>
          My Experiences
        </h1>
      </div>
      <VerticalTimeline lineColor="">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            <a
              href="https://www.schoolcraft.edu/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schoolcraft College
            </a>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Livonia, MI</h4>
          <p>AS - General Studies</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(55, 156, 238)", color: "#fff" }}
          date="2021 - 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">
            <a
              href="https://launch.nttdata.com/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch(Nexient) by NTT DATA
            </a>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Ann Arbor, MI</h4>
          <p>React Developer / DevOps Engineer</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className="vertical-timeline-element-title">
            <a
              href="https://www.grandcircus.co/about/"
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Grand Circus
            </a>
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Detroit, MI</h4>
          <p>FrontEnd / FullStack Developer</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2023"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<GiFuelTank />}
        >
          <h3 className="vertical-timeline-element-title">U.S. Army</h3>
          <h4 className="vertical-timeline-element-subtitle">Livonia, MI</h4>
          <p>Petroleum Supply Specialist</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(192, 32, 32, 0.445)",
            color: "rgb(0, 0, 0)",
          }}
          date="2010"
          iconStyle={{ background: "rgb(192, 32, 32, 0.445)", color: "#fff" }}
          icon={<GrUserManager />}
        >
          <LinkContainer to="/">
            <h3
              className="vertical-timeline-element-title linkHover"
              style={{ color: "black" }}
            >
              CEO - j'Rome LLC
            </h3>
          </LinkContainer>

          <h4
            className="vertical-timeline-element-subtitle"
            style={{ color: "black" }}
          >
            Detroit, MI
          </h4>
          <p style={{ color: "black" }}>Entrepreneur</p>
          <p style={{ color: "black" }}>Owner and Operator</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2006 - 2010"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<GiTeacher />}
        >
          <h3 className="vertical-timeline-element-title">U.S. Army </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Ft. Jackson, S.C.
          </h4>
          <p>Army Instructor (Reserve)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2001 - 2004"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<GiBattleTank />}
        >
          <h3 className="vertical-timeline-element-title">
            U.S. Army (Active)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Ft. Carson, CO</h4>
          <p>M1A2 Armored Crewman</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FiStar />}
        />
      </VerticalTimeline>
    </>
  );
};

export default AboutScreen;
