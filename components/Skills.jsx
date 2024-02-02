import Styles from "./../public/styles/skills.module.css"

export default function Skills() {
    return (
        <>
            <div className={Styles.Skills}>
                <h1>Skills</h1>

                <div className={[Styles.fullstack]}>
                    <h2>full-stack developer</h2>
                </div>

                <div className={Styles.containerSkillsCenter}>
                    <div className={Styles.network}> 
                        <h2>computer network</h2>
                    </div>
                </div>

                <div className={Styles.containerSkillsSpace}>
                    <div className={Styles.DBA}>
                        <h2>DBA</h2>
                    </div>
                    <div className={Styles.Mobile}>
                        <h2>Mobile Developer</h2>
                    </div>
                </div>

                <div className={Styles.containerSkillsCenter}>
                    <div className={Styles.DevOps}> 
                        <h2>DevOps</h2>
                    </div>
                </div>

            </div>
        </>
    )
}