import React, { useState } from 'react';
import { View,  useWindowDimensions,Text } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { CheckBox } from 'react-native-elements';
import tw from 'twrnc';
import YoutubePlayer from 'react-native-youtube-iframe';
const SystemDesign= () => {
  const { width } = useWindowDimensions();
  const [isChecked, setIsChecked] = useState(false);

  const htmlContent = {
    html: `
      <h2>System Design Patterns Overview 📊</h2>
      <p>System design patterns are crucial for building scalable and maintainable applications. They provide reusable solutions to common problems faced during system design. Below are some essential design patterns illustrated with real-world examples:</p>
      
      <h3 style="margin-top: 10px; margin-bottom: 5px;">1. Microservices Architecture 🚀</h3>
      <p>Microservices architecture is a design pattern where an application is structured as a collection of loosely coupled services. Each service is responsible for a specific function and can be developed, deployed, and scaled independently.</p>
      <p><strong>Example: Uber</strong> - Uber uses microservices to handle various functionalities like ride requests, payments, user profiles, and more, allowing them to scale each service independently based on demand.</p>

      <h3 style="margin-top: 10px; margin-bottom: 5px;">2. Event-Driven Architecture 🔄</h3>
      <p>This design pattern focuses on the production, detection, consumption of, and reaction to events. It enables systems to be highly responsive and decoupled.</p>
      <p><strong>Example: YouTube</strong> - YouTube utilizes an event-driven approach to manage video uploads, notifications, and recommendations in real-time, allowing users to interact seamlessly with the platform.</p>

      <h3 style="margin-top: 10px; margin-bottom: 5px;">3. Publish-Subscribe Pattern 📬</h3>
      <p>In this pattern, messages are sent by publishers and received by subscribers. It decouples the sender and receiver of the messages.</p>
      <p><strong>Example: WhatsApp</strong> - WhatsApp implements a publish-subscribe mechanism to manage message delivery and notifications. When a user sends a message, it is published, and the intended recipient subscribes to receive it.</p>

      <h2 style="margin-top: 10px; margin-bottom: 5px;">Why Learn System Design Patterns? 🤔</h2>
      <p>Understanding these design patterns is crucial for software engineers, as they provide the foundation for creating scalable, efficient, and maintainable systems. By mastering these patterns, you can enhance your system design skills and improve your problem-solving capabilities during technical interviews.</p>
      
      <h2 style="margin-top: 10px; margin-bottom: 5px;">Ready to Dive Deeper? 📚</h2>
      <p>As we proceed, we’ll cover each pattern in detail, explore their advantages and disadvantages, and see how they can be applied in various real-world scenarios. Let’s get started! 🚀</p>
    `
  };

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
       <Text style={tw`mt-4 text-lg font-bold`}>System Design Interview/Crash Course</Text>
      <View style={tw`h-50 mb-2 rounded-2xl border-2 border-gray-300 p-2 overflow-hidden`}>
            <YoutubePlayer
                height={200}
                play={false}
                videoId={'F2FmTdLtb_4'}
            />
        </View>
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

export default SystemDesign;
