import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { CheckBox } from 'react-native-elements';
import YoutubePlayer from 'react-native-youtube-iframe';
import tw from 'twrnc';
const IntroCard = () => {
  const { width } = useWindowDimensions();
  const [isChecked, setIsChecked] = useState(false);

  const htmlContent = {
    html: `
      <h2>Welcome to GuideIT.school! 🎉</h2>
      <p>Greetings, and welcome to GuideIT! My name is Flavius, and I am here to facilitate your journey toward mastering the essential skills required for success in software engineering interviews. Through a structured and scientifically grounded approach, this guide aims to enhance your cognitive readiness and technical proficiency for the rigors of real-world coding challenges. My objective is to foster your intellectual confidence and methodological readiness, equipping you with the necessary tools for solving complex problems in high-pressure environments. 😊</p>

      <h2 style="margin-top: 10px; margin-bottom: 5px;">What is this guide about? 📚</h2>
      <p>This platform serves as a comprehensive preparatory resource that systematically addresses the multifaceted demands of software engineering interviews. By leveraging pedagogical principles such as incremental learning, spaced repetition, and problem-based learning (PBL), we deliver both theoretical knowledge and practical application in an accessible, structured format. This guide encompasses everything from resume optimization strategies to a deep dive into algorithmic thinking and complexity analysis, ensuring that you approach technical interviews with both conceptual clarity and problem-solving agility. 💪</p>

      <h2 style="margin-top: 10px; margin-bottom: 5px;">By the end of this course, you will: 🏆</h2>
      <ul>
        <li>Develop a well-crafted, polished, and professional resume tailored to meet the scrutiny of software engineering recruiters, utilizing industry standards and best practices. ✨</li>
        <li>Gain an analytical understanding of the structure, expectations, and psychological dynamics inherent in various types of software engineering interviews (e.g., behavioral, technical, system design). 🔍</li>
        <li>Achieve mastery over core algorithms and data structures, which are not only foundational for technical interviews but also serve as building blocks for efficient software design and implementation. 📊</li>
        <li>Engage in mock interviews simulating real-world coding environments, thereby developing fluency in problem-solving under time constraints and high-pressure scenarios, an essential skill for technical interviews. 🛠️</li>
      </ul>

      <h2 style="margin-top: 10px; margin-bottom: 5px;">What to Expect? 🌟</h2>
      <p>Each section of this guide is designed with a pedagogical structure that progressively introduces theoretical concepts followed by hands-on exercises and self-assessment checkpoints. These checkpoints utilize formative assessment strategies to reinforce key principles, ensuring a robust understanding of the material. This scientifically-backed feedback mechanism aids in retention, helps you gauge your progress quantitatively, and promotes adaptive learning strategies. 📈</p>

      <h2 style="margin-top: -20px; margin-bottom: 5px;">Resources and Programming Languages to Focus On 🖥️</h2>
      <p>To optimize your preparation for software engineering interviews, it is critical to concentrate on specific programming languages that are not only prevalent in the industry but also offer diverse strengths in algorithmic implementation and performance optimization. The following programming languages are recommended based on their utility, learning curve, and industry relevance:</p>
      <ul>
        <li><strong>Python 🐍:</strong> Python is a dynamically typed, high-level programming language, renowned for its readability and extensive standard library, making it ideal for algorithmic problem-solving. The simplicity of its syntax reduces cognitive overhead, enabling developers to focus on problem decomposition and algorithmic efficiency, making it particularly suited for coding interviews.</li>
           `
  };
  const htmlContentMiddle = {
    html: `<ul>
        <li><strong>C++ ⚙️:</strong> C++ offers direct memory manipulation and high-performance execution, characteristics that make it indispensable for applications where efficiency and resource control are paramount. Its extensive use in competitive programming and systems-level development makes it a common choice in performance-oriented interview problems.</li>
        </ul>
    `
  };
  const htmlContentLeastMiddle = {
    html: `<ul>
         <li><strong>Java ☕:</strong> Java, with its object-oriented design and robust ecosystem, is widely used in enterprise-level applications. Its strong typing, garbage collection, and concurrency features make it a staple for interview questions focused on scalability and architectural design patterns.</li>
      </ul>
`
  };
  const htmlContentEnd={
    html:` <h2 style="margin-top: 10px; margin-bottom: 5px;">Ready to Get Started? 🚀</h2>
      <p>The path to becoming proficient in software engineering is a journey that requires both persistence and intellectual curiosity. Let us embark on this intellectually stimulating endeavor together. Remember, expertise is cultivated through deliberate practice and a deep-seated passion for solving complex problems. 💪</p>
      <p>"Programming is not just about writing code; it is about creating solutions that shape the future. 🧠 Embrace the challenge, and the rewards will follow!" 🌟</p>
     <p>Let's embark on this exciting journey together. Remember, every expert was once a beginner! 💪</p>`
  }
  return (
    <View style={tw`bg-white p-5 rounded-lg shadow-lg mb-12`}>
      <RenderHTML
        contentWidth={width}
        source={htmlContent}
        tagsStyles={{
          b: { fontWeight: '900', color: 'black' },
          p: { fontWeight: '400', color: 'black' },
          li: { fontWeight: '400', color: 'black' },
        }}
      />
      
      <Text style={tw`mt-4 text-lg font-bold`}>Python Crash Course</Text>
<View style={tw`h-50 mb-2 rounded-2xl border-2 border-gray-300 p-2 overflow-hidden`}>
        <YoutubePlayer
          height={200}
          play={false}
          videoId={'ix9cRaBkVe0'} 
        />
      </View>

      <RenderHTML
        contentWidth={width}
        source={htmlContentMiddle}
        tagsStyles={{
          b: { fontWeight: '900', color: 'black' },
          p: { fontWeight: '400', color: 'black' },
          li: { fontWeight: '400', color: 'black' },
        }}
      />

<Text style={tw`mt-4 text-lg font-bold`}>C++ Crash Course</Text>
<View style={tw`h-50 mb-2 rounded-2xl border-2 border-gray-300 p-2 overflow-hidden`}>
        <YoutubePlayer
          height={200}
          play={false}
          videoId={'2bSuuzMwda8'} 
        />
      </View>

      <RenderHTML
        contentWidth={width}
        source={htmlContentLeastMiddle}
        tagsStyles={{
          b: { fontWeight: '900', color: 'black' },
          p: { fontWeight: '400', color: 'black' },
          li: { fontWeight: '400', color: 'black' },
        }}
      />

<Text style={tw`mt-4 text-lg font-bold`}>Java Crash Course</Text>
<View style={tw`h-50 mb-2 rounded-2xl border-2 border-gray-300 p-2 overflow-hidden`}>
  <YoutubePlayer
    height={200}
    play={false}
    videoId={'xk4_1vDrzzo'} 
  />
</View>
      <RenderHTML
        contentWidth={width}
        source={htmlContentEnd}
        tagsStyles={{
          b: { fontWeight: '900', color: 'black' },
          p: { fontWeight: '400', color: 'black' },
          li: { fontWeight: '400', color: 'black' },
        }}
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

export default IntroCard;