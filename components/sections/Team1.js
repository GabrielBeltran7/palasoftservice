"use client";
import Link from "next/link";
import { useEffect } from "react";
import teamMembers from "@/data/team";

export default function Team1() {
  const followImageCursor = (event, teamItem) => {
    const contentBox = teamItem.getBoundingClientRect();
    const dx = Math.min(
      Math.max(event.clientX - contentBox.x, 0),
      contentBox.width
    );
    const dy = Math.min(
      Math.max(event.clientY - contentBox.y, 0),
      contentBox.height
    );
    teamItem.children[2].style.transform = `translate(${dx}px, ${dy}px) rotate(0)`;
  };

  useEffect(() => {
    const teamItems = document.querySelectorAll(".team-items");

    const handleMouseMove = (event) => {
      teamItems.forEach((item) => {
        followImageCursor(event, item);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <>
      <section
        className="team-section section-padding pt-0 section-bg-2"
        id="team"
      >
        <div className="line-shape">
          <img src="/assets/img/team/line-shape.png" alt="shape-img" />
        </div>
        <div className="mask-shape">
          <img src="/assets/img/team/mask-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <br />
              <span className="text-white wow fadeInUp">GENTE EXPERTA</span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Miembros del Equipo Dedicados
              </h2>
            </div>
            <Link
              href="/team"
              className="theme-btn hover-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              Todos los Miembros
              <i className="fa-solid fa-arrow-right-long" />
            </Link>
          </div>
          <div className="team-wrapper">
            {teamMembers.map((member, index) => {
              const headlineLines = member.headline.split("\n");

              return (
                <div
                  key={member.id}
                  className={`team-items bor-bottom ${index === 0 ? "bor-top" : "pt-0"} wow fadeInUp`}
                  data-wow-delay={member.animationDelay}
                >
                  <div className="team-title">
                    <span>{member.role}</span>
                    <h4>
                      <Link href={member.profileUrl}>{member.name}</Link>
                    </h4>
                  </div>
                  <p>
                    {headlineLines.map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line}
                        {lineIndex < headlineLines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                  <div
                    className="team-hover d-none d-md-block bg-cover"
                    style={{ backgroundImage: `url("${member.hoverImage}")` }}
                  />
                  <div className="social-profile">
                    <ul>
                      {member.social.map((socialItem) => (
                        <li key={socialItem.id}>
                          <Link href={socialItem.url}>
                            <i className={socialItem.icon} />
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <span className="plus-btn">
                      <i className="fa-solid fa-plus" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
