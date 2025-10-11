import Layout from "@/components/layout/Layout"
import teamMembers from "@/data/team"

export default function Team() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Equipo">
        <section className="team-section-4 section-padding">
          <div className="container">
            <div className="row g-4">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay={member.animationDelay}
                >
                  <div className="team-card-items mt-0">
                    <div className="team-image">
                      <img src={member.image} alt="team-img" />
                    </div>
                    <div className="team-content text-center blue-card">
                      <h3>
                        <span className="cursor-default text-decoration-none">{member.name}</span>
                      </h3>
                      <p>{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}
