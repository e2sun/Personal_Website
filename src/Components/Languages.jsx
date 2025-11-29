function Languages(){
    const skills = [
        {name: "Python", level:90},
        {name: "Java", level:90},
        {name: "HTML/CSS", level:90},
        {name: "Javascript", level:80},
        {name: "ReactJs", level:80},
        {name: "MongoDB", level:80},
        {name: "Angular", level:80},
        {name: "C", level:70},
        {name: "Java Spring Boot", level:50},
        {name: "C++", level:40},
        {name: "Assembly", level:40},
        {name: "R", level:40},
        {name: "SQL", level:30}
    ];
    return(
        <div id="languages_section">
        <h1 className="languages_header">Languages</h1>
        {skills.map((skill, index) => (
          <div key={index} className="skill_bar_container">
            <span className="skill_label">{skill.name}</span>
            <div className="skill_bar">
              <div
                className="skill_fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  export default Languages;