import React, { useState } from 'react'; 
import { View, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { CheckBox } from 'react-native-elements'; 
import tw from 'twrnc';
const SoftSkills = () => {
  const { width } = useWindowDimensions();
  const [isChecked, setIsChecked] = useState(false);
  const htmlContent = {
    html: `
    <h2>8. Soft Skills 🗣️</h2>
<p>While technical skills are essential for any software engineer, soft skills are equally important in interviews and workplace success. Mastering these interpersonal skills can enhance collaboration, foster innovation, and improve your chances of securing a job. Below are key soft skills that every software professional should develop:</p>

   <h2 style="margin-top: 10px; margin-bottom: 5px;">🤝 <strong>Collaboration:</strong></h2>
        <p>Effective collaboration is essential in a software development environment, especially during brainstorming sessions and code reviews.</p>
        <ul>
            <li>🧩 <strong>Team Dynamics:</strong>
                <p>Understand different roles within a team and how to leverage each member's strengths. Foster an inclusive atmosphere where everyone's ideas are valued.</p>
            </li>
            <li>🔄 <strong>Agile Methodologies:</strong>
                <p>Familiarize yourself with Agile practices such as Scrum and Kanban. Participate in daily stand-ups and retrospectives to promote team communication and continuous improvement.</p>
            </li>
            <li>📋 <strong>Conflict Resolution:</strong>
                <p>Learn how to navigate disagreements constructively. Use active listening and empathy to understand different perspectives and find common ground.</p>
            </li>
        </ul>
    
   <h2 style="margin-top: 10px; margin-bottom: 5px;">🧠 <strong>Problem-Solving:</strong></h2>
        <p>Showcasing your problem-solving skills during interviews demonstrates your analytical thinking and adaptability in complex situations.</p>
        <ul>
            <li>🔍 <strong>Analytical Thinking:</strong>
                <p>Break down complex problems into smaller, manageable parts. Use techniques such as the 5 Whys or Fishbone Diagram to identify root causes and generate effective solutions.</p>
            </li>
            <li>🔧 <strong>Creativity:</strong>
                <p>Don’t hesitate to think outside the box! Use innovative approaches and alternative solutions when tackling challenges. This creativity can set you apart in both interviews and workplace projects.</p>
            </li>
            <li>🎯 <strong>Iterative Approach:</strong>
                <p>Embrace failure as part of the learning process. Develop solutions incrementally and refine them based on feedback and testing, ensuring continuous improvement.</p>
            </li>
        </ul>
    
<h2 style="margin-top: 10px; margin-bottom: 5px;">📢 <strong>Clear Communication:</strong></h2>
        <p>Being able to convey technical concepts in an easily understandable manner is crucial for effective collaboration within teams and with stakeholders.</p>
        <ul>
            <li>🗣️ <strong>Active Listening:</strong>
                <p>Practice active listening techniques by summarizing what others say and asking clarifying questions. This shows respect and ensures mutual understanding.</p>
            </li>
            <li>📊 <strong>Effective Presentation:</strong>
                <p>Enhance your ability to present technical information to non-technical audiences. Use visuals, analogies, and storytelling to make your points clear and engaging.</p>
            </li>
            <li>📝 <strong>Documentation Skills:</strong>
                <p>Develop clear and concise documentation practices. Good documentation fosters better communication and helps new team members onboard effectively.</p>
            </li>
        </ul>
    
<h1>Top 15 IT Interview Questions (Soft Skills)</h1>
<h2>1. Can you describe a time when you had to collaborate with others on a challenging project?</h2>
<p><strong>Answer:</strong><br> 
    "In my previous role, I worked on a critical software deployment with a cross-functional team. One of the challenges was miscommunication between developers and QA, which caused delays. I initiated daily check-ins and a shared task board using Agile practices to ensure transparency. This not only improved team dynamics but also allowed us to complete the project ahead of schedule."
</p>

<h2>2. How do you handle conflicts within a team?</h2>
<p><strong>Answer:</strong><br> 
    "I believe in addressing conflicts constructively by listening to all sides. During a disagreement over code structure, I facilitated a meeting where each developer shared their rationale. By focusing on project goals rather than personal opinions, we found a solution that satisfied everyone and aligned with the best technical practices."
</p>

<h2>3. Describe a situation where you had to solve a complex problem under pressure.</h2>
<p><strong>Answer:</strong><br> 
    "During a critical system outage, I had to quickly diagnose the issue while keeping stakeholders informed. I broke the problem down into smaller components, isolated the root cause in the network layer, and deployed a temporary fix while working on a long-term solution. Clear communication kept the team aligned, and the system was back online within two hours."
</p>

<h2>4. How do you ensure effective communication with non-technical stakeholders?</h2>
<p><strong>Answer:</strong><br> 
    "I tailor my communication to the audience. When discussing a database migration with a non-technical manager, for example, I used simple analogies to explain how the process would impact business operations. I also provided visual aids to illustrate the workflow, ensuring everyone understood the timeline and benefits."
</p>

<h2>5. How do you approach feedback, both giving and receiving?</h2>
<p><strong>Answer:</strong><br> 
    "I view feedback as an opportunity for growth. When giving feedback, I focus on constructive criticism, using specific examples. For instance, in a code review, I might say, 'This section could be optimized by using X algorithm.' When receiving feedback, I actively listen, ask clarifying questions, and thank the person for their input. This fosters a collaborative and open work environment."
</p>

<h2>6. Tell me about a time when you had to adapt to a significant change at work.</h2>
<p><strong>Answer:</strong><br> 
    "When our team transitioned from Waterfall to Agile methodologies, it was a major shift in how we managed projects. I took the initiative to learn Agile by attending workshops and actively participated in daily stand-ups. Over time, I became more comfortable with the iterative process, and I even helped other team members adjust by leading internal Agile training sessions."
</p>

<h2>7. How do you prioritize tasks when working on multiple projects with tight deadlines?</h2>
<p><strong>Answer:</strong><br> 
    "I prioritize tasks based on urgency and impact, using tools like Kanban or Jira to keep track of deadlines. For example, when working on two projects simultaneously, I break them down into smaller tasks, set milestones, and frequently check in with stakeholders to adjust timelines if necessary. This helps me stay organized and ensure that no project is neglected."
</p>

<h2>8. Give an example of how you have fostered a positive team environment.</h2>
<p><strong>Answer:</strong><br> 
    "In one of my projects, the team was feeling overwhelmed due to tight deadlines. I suggested weekly retrospectives where we celebrated small wins and discussed how we could improve. This boosted morale and encouraged a culture of continuous feedback and support. As a result, we became more efficient and motivated."
</p>

<h2>9. How do you approach problem-solving when you don’t immediately know the solution?</h2>
<p><strong>Answer:</strong><br> 
    "I approach unfamiliar problems with curiosity and a systematic methodology. I break the issue down into smaller components, research potential solutions, and consult team members with relevant expertise. Recently, I faced a bug that I couldn’t solve alone, so I reached out to colleagues and researched online. The collaborative effort helped us find an innovative solution quickly."
</p>

<h2>10. Can you provide an example of how you’ve communicated complex technical concepts to a junior team member?</h2>
<p><strong>Answer:</strong><br> 
    "When mentoring a junior developer on API integrations, I used real-world analogies, comparing an API to a restaurant menu—each function like a specific dish you can order. I also provided clear, well-documented code examples and encouraged them to ask questions. Over time, they gained a deeper understanding and became more confident in their work."
</p>

<h2>11. How do you maintain effective collaboration when working remotely?</h2>
<p><strong>Answer:</strong><br> 
    "Remote work can pose communication challenges, so I rely heavily on tools like Slack and Zoom for real-time communication. I also schedule regular team check-ins to discuss progress and ensure everyone feels connected. During a fully remote project, we maintained open communication, which helped us finish the project on time while keeping the team spirit intact."
</p>

<h2>12. What steps do you take when handling client dissatisfaction or difficult feedback?</h2>
<p><strong>Answer:</strong><br> 
    "I approach dissatisfied clients by first listening carefully to their concerns, then taking ownership of the issue and suggesting practical solutions. During a project where a client was unhappy with the UI, I acknowledged their frustration and proposed several design changes based on their feedback. This approach helped regain their trust and satisfaction."
</p>

<h2>13. Tell me about a time when you showed leadership in a project.</h2>
<p><strong>Answer:</strong><br> 
    "During a mobile app launch, I was designated to lead the backend integration. I organized the team, assigned roles, and ensured clear communication with other departments. By focusing on team collaboration and delivering updates regularly, we met our goals and delivered a seamless product."
</p>

<h2>14. How do you handle constructive criticism from your peers or supervisors?</h2>
<p><strong>Answer:</strong><br> 
    "I welcome constructive criticism because it helps me improve. I once received feedback that I needed to focus more on the readability of my code. I took it seriously, applied the suggestions, and asked for follow-up feedback. This experience helped me grow, and I became more detail-oriented in my work."
</p>

<h2>15. Why are you the perfect candidate for this role?</h2>
<p><strong>Answer:</strong><br> 
    "I believe I am the perfect candidate because I not only have the technical expertise you require but also possess strong collaboration and communication skills. I have consistently delivered projects under tight deadlines and have a proven track record of working effectively in diverse teams. My adaptability and eagerness to learn also make me confident that I can contribute positively to your organization."
</p>


<p>🌟 Cultivating these soft skills will not only enhance your interview performance but also contribute to your overall success in a collaborative software development environment.</p>

    `
  };

  return (
    <View style={tw`p-4 bg-white rounded-lg shadow-lg mb-5`}>
      <RenderHTML
        contentWidth={width}
        source={htmlContent}
        tagsStyles={{
          b:{fontWeight:'900',color:'black'},
          p:{fontWeight:'100',color:'black'},   
          li:{fontWeight:'100',color:'black'},               
        }
      }
      />
      <View style={tw`mt-5 flex-row items-center`}>
        <CheckBox
          title='Mark as completed'
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)} 
        />
           </View>
    </View>
  );
};
export default SoftSkills;
  