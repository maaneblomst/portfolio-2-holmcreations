import Heading from "../../Heading";
import { FiBriefcase, FiBook } from "react-icons/fi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <>
      <Heading size="4" content="Experience" />
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(242, 242, 242)", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
          date="2020 - present"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FiBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Web & Marketing – Body Green AS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Asker, Norway</h4>
          <p>
            Moving up the latter! From my previous role working in the storage,
            I am now happy to be working with web, design and marketing at{" "}
            <a href="www.bodygreen.no" target="_blank">
              Body Green AS
            </a>
            . Body Green is a supplier of beauty salons and private customers
            all over Norway, specializing in nail design and waxing products.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          contentStyle={{ background: "rgb(242, 242, 242)", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(233, 30, 99)" }}
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FiBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Designer – Marketwell AS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Asker, Norway</h4>
          <p>
            For the past couple of years, I have been lucky enough to join
            Kerstin Krohg on her start-up business Marketwell as a web designer.
            You can read more about what I do on my Marketwell project site.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - oct 2021"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FiBook />}
        >
          <h3 className="vertical-timeline-element-title">
            Front-End Development – Noroff School of Digital Technology and
            Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Studies</h4>
          <p>
            In october 2019 I started my journey in becoming a front-end
            developer. I study online at Noroff School of Digital Technology and
            Media. It is a two year higher professional degree, where I am
            expected to graduate october 2021. All our classes and projects are
            online. If you are interested in learning more about the programme
            and courses, you can read more{" "}
            <a
              href="https://www.noroff.no/studier/fagskole/frontend-utvikling"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2019"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FiBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Office Manager – Norli Libris AS
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Oslo, Norway</h4>
          <p>
            As an Office Manager at Norli Libris, I was responsible for Facility
            Management at Norli Libris' head office in Nydalen. I was also a
            part of the management team for finance and corporate governance. A
            lot of my tasks consited of following up service deliveries,
            reception and switchboard, contract management and accounting tasks.
            I was a GDPR representative, and did supporting tasks for the
            marketing department. It was in the marketing department I really
            felt inspired, since I got to work with the launch of their{" "}
            <a
              href="https://www.norli.no/"
              rel="noopener noreferrer"
              target="_blank"
            >
              new website
            </a>
            . This is where I started thinking about heading back to school.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2018"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FiBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">
            Site Manager – Toma Facility Services
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Oslo, Norway</h4>
          <p>
            As a Site Manager I was responsible for service contract delivery
            on-site with the client. My overall task was to coordinate cleaning,
            canteen and reception services. I had to ensure that the agreed
            level of service was delivered to the client every day. Daily work
            tasks included follow-up of the client and their suppliers,
            handeling the front desk, invoice processing and project support
            when needed.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2016"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FiBook />}
        >
          <h3 className="vertical-timeline-element-title">
            Facility Management - OsloMET
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>
          <p>
            Finance, administration and management subjects associated with
            Facility Management and development, operation and management of
            services. You can read more about the programme and it's content{" "}
            <a
              href="https://student.oslomet.no/studier/-/studieinfo/programplan/FMAN/2016/HØST"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
}
