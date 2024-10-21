import React, { useState } from 'react'; 
import { View,  useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { CheckBox } from 'react-native-elements'; 
import tw from 'twrnc';
const OperatingSystems = () => {
  const { width } = useWindowDimensions();
  
  const [isChecked, setIsChecked] = useState(false);

  const htmlContent = {
    html: `
     <h2>4. Operating Systems 🖥️</h2>
<p>Understanding the workings of an operating system (OS) is crucial for grasping how computers manage resources, execute processes, and allocate memory efficiently. Below are key concepts in operating systems:</p>

<ul>
    <li>🧵 <strong>Multithreading & Concurrency:</strong> 
        <p>Master how threads and processes work together. Multithreading allows multiple threads to execute concurrently within a single process, improving efficiency and responsiveness.</p>
        <ul>
            <li>🔒 <strong>Deadlocks:</strong> A situation where two or more processes are unable to proceed because each is waiting for the other to release resources. Understanding deadlocks involves knowing how to detect, prevent, and resolve them.</li>
            <li>⚡ <strong>Race Conditions:</strong> Occur when multiple threads or processes access shared data concurrently, leading to unpredictable outcomes. Techniques like locks, semaphores, and monitors are used to synchronize access and prevent race conditions.</li>
            <li>🌐 <strong>Thread Pools:</strong> A design pattern that manages a collection of reusable threads, optimizing resource usage and improving performance in concurrent applications.</li>
        </ul>
    </li>
    <li>🔄 <strong>Scheduling Algorithms:</strong> 
        <p>Study various CPU scheduling techniques that determine the order of process execution, influencing overall system performance and responsiveness.</p>
        <ul>
            <li>⏱️ <strong>First-Come-First-Serve (FCFS):</strong> 
                <p>This simple scheduling method executes processes in the order they arrive. While easy to implement, it can lead to inefficiencies and increased waiting time (convoy effect).</p>
            </li>
            <li>🔢 <strong>Shortest Job Next (SJN):</strong> 
                <p>Prioritizes jobs with the smallest execution time. While it minimizes average waiting time, it can lead to starvation for longer processes.</p>
            </li>
            <li>📈 <strong>Round Robin (RR):</strong> 
                <p>Each process is assigned a fixed time slice in a cyclic order. This approach ensures fair CPU time allocation and is suitable for time-sharing systems.</p>
            </li>
            <li>🔀 <strong>Priority Scheduling:</strong> 
                <p>Processes are scheduled based on priority levels. This allows critical tasks to be executed first, but it can lead to starvation of lower-priority processes.</p>
            </li>
            <li>🗓️ <strong>Multilevel Queue Scheduling:</strong>
                <p>Processes are grouped into different queues based on their priority and scheduling algorithms. Each queue can have its own scheduling strategy, optimizing overall system performance.</p>
            </li>
        </ul>
    </li>
    <li>🗄️ <strong>Memory Management:</strong> 
        <p>Learn how an operating system handles memory through various strategies, ensuring efficient use of resources.</p>
        <ul>
            <li>📦 <strong>Paging:</strong> 
                <p>Dividing memory into fixed-size pages allows the OS to manage memory more flexibly. Pages can be mapped to physical memory, reducing fragmentation and allowing processes to use more memory than is physically available (paging techniques include demand paging and page replacement algorithms).</p>
            </li>
            <li>📜 <strong>Segmentation:</strong> 
                <p>This approach breaks memory into variable-sized segments based on logical divisions (e.g., code, data, stack). It allows processes to access memory more intuitively, but can lead to external fragmentation.</p>
            </li>
            <li>🌌 <strong>Virtual Memory:</strong> 
                <p>Using disk space as an extension of physical memory allows larger applications to run on limited physical resources. Virtual memory enables a system to run multiple applications simultaneously without exhausting physical RAM, implementing techniques like swapping and paging.</p>
            </li>
            <li>📈 <strong>Memory Allocation Strategies:</strong> 
                <p>Learn about various strategies, such as:
                    <ul>
                        <li>🎯 <strong>First Fit:</strong> Allocates the first block of memory that is large enough for the request.</li>
                        <li>🛡️ <strong>Best Fit:</strong> Searches for the smallest free block that meets the requirement, minimizing waste but potentially increasing fragmentation.</li>
                        <li>🔍 <strong>Worst Fit:</strong> Allocates the largest available block, aiming to leave larger leftover segments, but can also lead to fragmentation.</li>
                    </ul>
                </p>
            </li>
        </ul>
    </li>
</ul>
<p>🌟 Understanding these core concepts will equip you with a solid foundation in operating systems, which is essential for system design, application development, and troubleshooting.</p>

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
    
    <View style={tw`mt-5 flex-row items-center `}>
      <CheckBox
        title='Mark as completed'
        checked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
      />
    </View>
  </View>
  );
};
  export default OperatingSystems;
  