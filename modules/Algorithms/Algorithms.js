import React, { useState } from 'react'; 
import { View, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { CheckBox } from 'react-native-elements';
import tw from 'twrnc';
const Algorithms=()=>{
    const{width}=useWindowDimensions();
    const [isChecked, setIsChecked] = useState(false);
    const htmlContent={
        html:`
         <h2>🚀 Mastering Software & IT Concepts</h2>

         <h2>🧩 Algorithms</h2>
         <p>Data Structures are the backbone of most technical interviews. Understanding how to store, manipulate, and access data efficiently is crucial.</p>
<p>⚠️ WARNING ⚠️
    WHEN IT COMES TO SOLVING TECHNICAL PROBLEMS, THE BEST AND ONLY TWO WEBSITES YOU NEED ARE <strong>LEETCODE</strong> AND <strong>HACKERRANK</strong>.
    🔥 CODEFORCES IS MORE FOR COMPETITIVE PROGRAMMING! 🔥</p>
         <h3>⚖️ Sorting Algorithms</h3>
         <p>Sorting algorithms are foundational, and many problems require sorting data before performing further operations. Knowing when and how to apply different sorting techniques is crucial.</p>
         <ul>
            <li>🧮 <b>1. Merge Sort</b>: Learn how to efficiently divide and conquer large data sets.</li>
            <li>⚡ <b>2. Quick Sort</b>: Fast and efficient sorting method, often used in practice due to its speed.</li>
            <li>🎯 <b>3. Bucket Sort / Counting Sort</b>: Optimized for special use cases with limited ranges.</li>
            <li>🏗️ <b>4. Heap Sort</b>: Sorting with the structure of a binary heap, useful for priority queues.</li>
            <li>🔨 <b>5. Custom Sorting</b>: Tailor-made sorting for specific needs, using comparator functions.</li>
         </ul>
          
         <h3>🔍 Searching Algorithms</h3>
         <p>The ability to efficiently search for an element in a data set is critical in many interview questions.</p>
         <ul>
           <li>🎯 <b>1. Binary Search</b>: Efficiently search sorted arrays by dividing the search space.</li>
           <li>🔄 <b>2. Binary Search Variants</b>: Modifications for specific scenarios, like rotated arrays.</li>
           <li>🚀 <b>3. Exponential Search</b>: Ideal for unbounded searches, growing exponentially at each step.</li>
           <li>🌿 <b>4. Depth-First Search (DFS)</b>: Explore paths deeply in graphs or trees before backtracking.</li>
           <li>🛤️ <b>5. Breadth-First Search (BFS)</b>: Traverse level by level, useful for finding shortest paths.</li>
         </ul>

      
         <h3>🔗 Combined Problems: Searching and Sorting</h3>
         <p>Some problems combine sorting and searching, pushing your understanding further by applying both techniques together.</p>
         <ul>
           <li>🧭 <b>1. Two Pointers + Binary Search</b>: Common in problems involving arrays and finding pairs.</li>
           <li>🛠️ <b>2. Sorting + Greedy Algorithms</b>: Combine sorting with greedy approaches for optimization problems.</li>
           <li>⚔️ <b>3. Divide and Conquer + Binary Search</b>: Efficiently split and search within complex problem spaces.</li>
         </ul>

        <h3>🌀 Recursion and Backtracking Problems</h3>
        <ul>
        <li>♟️ <b>1. N-Queens Problem</b>: Use recursion and backtracking to place queens on a chessboard under constraints.</li>
        <li>   <b>2. N-Queens2 Problem</b>Why Important: Tests your ability to use recursion and backtracking to handle constraints. You must explore multiple placements and backtrack if a solution doesn’t work.</li>
        <li>🔁 <b>2. Permutations</b>: Generate all possible arrangements of elements recursively.</li>
        <li>📦 <b>4. Permutations2</b> Learn how to work with continuous memory storage, how to manipulate strings, and solve problems around them.</li>
        <li>🎲 <b>3. Combinations (Sum / Sum2)</b>: Solve problems by generating different combinations under constraints.</li>
        <li>🔡 <b>4. Word Search</b>: Use backtracking to find words in a matrix of letters.</li>
        <li>🧩 <b>5. Sudoku Solver</b>: Classic problem of solving a Sudoku puzzle with recursion and backtracking.</li>
        <li>📱  <b>6. Letter Combinations of a Phone Number</b>: Generate letter combinations from number inputs.</li>
        <li>🔀 <b>7. Palindrome Partitioning</b>: Divide strings into palindrome substrings.</li>
        <li>🔗 <b>8. Generate Parentheses</b>: Recursively generate all valid combinations of parentheses.</li>
        <li>🌐 <b>9. Restore IP Addresses</b>: Form valid IP addresses from a given string using recursion.</li>
        <li>🐁 <b>10. Rat in a Maze (Labyrinth)</b>: Solve pathfinding problems using recursion and backtracking.</li>
        </ul>

       <h3>📊 Dynamic Programming Problems</h3>
          <ul>
             <li>🔄 <b>1. Fibonacci Sequence</b>: Classical DP problem solved with memoization or tabulation.</li>
             <li>🏃‍♂️ <b>2. Climbing Stairs</b>: Count the number of ways to reach the top, similar to the Fibonacci problem.</li>
             <li>💰 <b>3. House Robber</b>: Optimize the amount of money you can steal from adjacent houses.</li>
             <li>🪙 <b>4. Coin Change</b>: Find the minimum number of coins needed to make a given amount.</li>
             <li>🎒 <b>5. Knapsack Problem</b>: Optimize item selection under weight constraints for maximum value.</li>
             <li>📈 <b>6. Longest Increasing Subsequence</b>: Find the longest subsequence in a given array that is in increasing order.</li>
             <li>🔠 <b>7. Levenshtein Distance</b>: Compute the minimum edit distance between two strings.</li>
             <li>🌍 <b>8. Unique Paths</b>: Count the number of unique ways to move from the top-left to the bottom-right in a grid.</li>
             <li>🎯 <b>9. Jump Game</b>: Determine if you can reach the last index from the first, with dynamic programming.</li>
             <li>🔀 <b>10. Palindromic Substrings</b>: Find the number of palindromic substrings in a string.</li>
             <li>🔑 <b>11. Decode Ways</b>: Count the number of ways to decode a string of numbers into letters.</li>
             <li>📉 <b>12. Maximum Subarray</b>: Find the contiguous subarray with the largest sum.</li>
             <li>🧠 <b>13. Word Break</b>: Determine if a string can be segmented into dictionary words.</li>
             <li>🛣️ <b>14. Minimum Path Sum</b>: Find the path with the minimum sum in a grid.</li>
             <li>🎈 <b>15. Burst Balloons</b>: Maximize the number of coins by strategically bursting balloons in a sequence.</li>
      </ul>
      <h3>🌐 Graph Programming Problems</h3>
      <ul>
        <li>🌳 <b>1. Binary Tree Level Order Traversal (BFS)</b>: Traverse the binary tree level by level.</li>
        <li>🏝️ <b>2. Number of Islands (DFS)</b>: Count the number of connected land masses in a grid.</li>
        <li>⏳ <b>3. Network Delay Time (Dijkstra)</b>: Calculate the time it takes for all nodes to receive a signal in a weighted graph.</li>
        <li>🔗 <b>4. Minimum Cost to Connect All Points (Prim)</b>: Find the minimum spanning tree of a graph.</li>
        <li>🗂️ <b>5. Course Schedule (Topological Sorting)</b>: Solve problems involving task dependencies using topological sort.</li>
        <li>🔀 <b>6. Redundant Connection (Union-Find)</b>: Detect and remove cycles in an undirected graph.</li>
        <li>🔥 <b>7. Critical Connections in a Network</b>: Identify connections in a network that are critical for maintaining connectivity.</li>
      </ul>

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
export default Algorithms;