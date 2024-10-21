import React, { useState } from 'react'; 
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { CheckBox } from 'react-native-elements'; 
import tw from "twrnc";
const Chapters = () => {
  const { width } = useWindowDimensions();
  const [isChecked, setIsChecked] = useState(false);
  const htmlContent = {
    html: `
      <h2>🚀 Mastering Software & IT Concepts</h2>
      <p>Let’s break it down into key areas!</p>
      <h2>1. Data Structures 🧱</h2>
      <p>Data Structures are the backbone of most technical interviews. Understanding how to store, manipulate, and access data efficiently is crucial.</p>
      <ul>
        <li>📦 <strong>Arrays and Strings:</strong> Learn how to work with continuous memory storage, how to manipulate strings, and solve problems around them.</li>
        <li>🌲 <strong>Trees:</strong> Explore Binary Trees, Binary Search Trees (BST), AVL Trees, and Trie structures.</li>
        <li>🔄 <strong>Linked Lists:</strong> Master singly and doubly linked lists and solve traversal, insertion, and deletion problems.</li>
        <li>📊 <strong>HashMaps/HashTables:</strong> Essential for efficient searching and storing key-value pairs.</li>
        <li>📈 <strong>Heaps and Priority Queues:</strong> Perfect for optimizing tasks such as finding the largest or smallest element.</li>
      </ul>
      <h2>2. Algorithms 💻</h2>
      <p>Algorithms are the heart of problem-solving in computer science. Being able to devise an efficient solution is key in an interview setting.</p>
      <ul>
        <li>⚡ <strong>Sorting and Searching:</strong> Understand the pros and cons of algorithms like Merge Sort, Quick Sort, and Binary Search.</li>
        <li>🔍 <strong>Recursion and Backtracking:</strong> Master techniques for solving complex problems like N-Queens, permutations, and dynamic puzzles.</li>
        <li>📐 <strong>Dynamic Programming:</strong> Learn how to optimize recursive algorithms by breaking them into subproblems (e.g., Fibonacci, Knapsack Problem).</li>
        <li>📊 <strong>Graph Algorithms:</strong> Dive into BFS, DFS, Dijkstra's Algorithm, and Prim's Algorithm for pathfinding and traversal.</li>
      </ul>
      <h2>3. System Design 🛠️</h2>
      <p>System Design is a critical aspect for senior-level interviews, especially in tech giants. You need to know how to design scalable and maintainable systems.</p>
      <ul>
        <li>🌐 <strong>Scalability:</strong> Understand horizontal scaling, load balancing, and database sharding for high-traffic applications.</li>
        <li>🔗 <strong>APIs and Microservices:</strong> Learn how to design RESTful APIs, work with microservices architecture, and understand message queues (e.g., Kafka).</li>
        <li>🔐 <strong>Security:</strong> Master key security concepts like encryption, authentication (OAuth, JWT), and secure communication.</li>
        <li>💾 <strong>Database Design:</strong> Understand the pros and cons of relational (SQL) vs. non-relational (NoSQL) databases, including schema design and query optimization.</li>
      </ul>
      <h2>4. Operating Systems 🖥️</h2>
      <p>Knowing the workings of an operating system is crucial in understanding resource management, process scheduling, and memory allocation.</p>
      <ul>
        <li>🧵 <strong>Multithreading & Concurrency:</strong> Master how threads and processes work together, and understand concepts like deadlocks and race conditions.</li>
        <li>🔄 <strong>Scheduling Algorithms:</strong> Study various CPU scheduling techniques (e.g., First-Come-First-Serve, Shortest Job Next).</li>
        <li>🗄️ <strong>Memory Management:</strong> Learn how OS handles memory through paging, segmentation, and virtual memory.</li>
      </ul>
      <h2>5. Databases & SQL 💾</h2>
      <p>Knowledge of databases and SQL is fundamental. Interviewers often test how you design, query, and optimize databases.</p>
      <ul>
        <li>🗃️ <strong>SQL Queries:</strong> Master SELECT, INSERT, JOIN, and aggregate functions like COUNT, SUM, and GROUP BY.</li>
        <li>📊 <strong>Indexing:</strong> Understand how indexing can speed up query performance.</li>
        <li>⚙️ <strong>ACID Properties:</strong> Learn about transaction control and ensuring consistency, integrity, and isolation in databases.</li>
      </ul>
      <h2>6. Networking & Security 🌐</h2>
      <p>Software is often deployed across networks, so knowledge of networking protocols and security concepts is vital.</p>
      <ul>
        <li>🖧 <strong>HTTP/HTTPS Protocol:</strong> Know how the web works, including the request-response cycle, status codes, and headers.</li>
        <li>🔐 <strong>Encryption & Authentication:</strong> Learn key cryptography concepts like symmetric/asymmetric encryption, hashing (SHA-256), and secure authentication (e.g., OAuth).</li>
        <li>⚠️ <strong>Firewalls & Load Balancing:</strong> Understand the role of firewalls in security and how load balancers distribute traffic.</li>
      </ul>
      <h2>7. Version Control with Git 🗃️</h2>
      <p>Version control is essential for team collaboration. Git is the industry standard, and you must be familiar with it.</p>
      <ul>
        <li>📍 <strong>Branches:</strong> Understand how to work with Git branches, including concepts like feature, develop, and master branches.</li>
        <li>🔀 <strong>Merging and Rebase:</strong> Know the difference between merging and rebasing, and when to use them.</li>
        <li>💡 <strong>Pull Requests:</strong> Learn how to submit a proper pull request, including code reviews and conflict resolution.</li>
      </ul>
      <h2>8. Soft Skills 🗣️</h2>
      <p>Technical skills alone aren’t enough! During software interviews, your communication, problem-solving approach, and teamwork are equally important.</p>
      <ul>
        <li>🤝 <strong>Collaboration:</strong> Demonstrate how well you can work in a team, especially during whiteboarding sessions.</li>
        <li>🧠 <strong>Problem-Solving:</strong> Show how you approach and break down complex problems logically.</li>
        <li>📢 <strong>Clear Communication:</strong> Practice explaining technical concepts in simple terms. This skill is crucial for effective team collaboration.</li>
      </ul>
      <h2>🏁 The Foundation and Beyond</h2>
      <p>While these foundational concepts are crucial for any aspiring software engineer, it’s important to remember that different roles may require additional skills and specialization.</p>
      <ul>
        <li>⭐ <strong>Full Stack Developer:</strong> Master both front-end (React, Angular) and back-end (Node.js, Express) technologies to create seamless applications.</li>
        <li>⭐ <strong>Python Developer:</strong> Deepen your knowledge of Python frameworks (like Django or Flask) and libraries (such as Pandas and NumPy) for data manipulation and web development.</li>
        <li>⭐ <strong>Mobile Developer:</strong> Gain expertise in platforms like Android (Java/Kotlin) or iOS (Swift) along with an understanding of mobile UX/UI principles.</li>
        <li>⭐ <strong>Data Scientist:</strong> Acquire a strong grasp of statistics, data analysis tools, and machine learning algorithms, often using Python or R to derive insights from data.</li>
        <li>⭐ <strong>DevOps Engineer:</strong> Focus on automating and optimizing the development pipeline. Familiarity with CI/CD tools (like Jenkins) and cloud platforms (like AWS or Azure) is vital.</li>
        <li>⭐ <strong>Game Developer:</strong> Master game engines like Unity or Unreal Engine and gain knowledge of graphics programming.</li>
      </ul>
      <p>As you embark on your journey, keep in mind that each path has its unique requirements, and continuous learning will be your greatest ally in the ever-evolving world of technology! 🌟</p>
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
export default Chapters;