import React, { useState } from 'react'; 
import { View, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { CheckBox } from 'react-native-elements'; 
import tw from 'twrnc';
const DatabasesSql = () => {
  const { width } = useWindowDimensions();
  const [isChecked, setIsChecked] = useState(false);
  const htmlContent = {
    html: `
   <h2>SQL Interview Questions</h2>

<strong>1. What is the difference between INNER JOIN and LEFT JOIN?</strong>
<p>An <strong>INNER JOIN</strong> returns only the rows that have matching values in both tables. A <strong>LEFT JOIN</strong> returns all rows from the left table and the matched rows from the right table. If there is no match, NULL values are returned for columns from the right table.</p>
<pre>
SELECT a.id, a.name, b.order_date
FROM customers a
INNER JOIN orders b ON a.id = b.customer_id;

SELECT a.id, a.name, b.order_date
FROM customers a
LEFT JOIN orders b ON a.id = b.customer_id;
</pre>

<strong>2. How do you find the second highest salary from the Employees table?</strong>
<p>One way to do this is to use the <code>LIMIT</code> clause in combination with <code>ORDER BY</code>:</p>
<pre>
SELECT DISTINCT salary 
FROM Employees 
ORDER BY salary DESC 
LIMIT 1 OFFSET 1;
</pre>
<p>Alternatively, you can use a subquery:</p>
<pre>
SELECT MAX(salary) 
FROM Employees 
WHERE salary < (SELECT MAX(salary) FROM Employees);
</pre>

<strong>3. What are ACID properties in a database? Why are they important?</strong>
<p><strong>ACID</strong> properties are critical for maintaining database integrity. They ensure that transactions are processed reliably:</p>
<ul>
    <li><strong>Atomicity:</strong> Ensures that all parts of a transaction are completed or none at all.</li>
    <li><strong>Consistency:</strong> Ensures the database remains in a valid state after transactions.</li>
    <li><strong>Isolation:</strong> Ensures that transactions do not interfere with each other.</li>
    <li><strong>Durability:</strong> Ensures that once a transaction is committed, it remains so, even in the event of a failure.</li>
</ul>

<strong>4. Write a SQL query to retrieve the names of employees who have the highest salary in each department.</strong>
<p>This can be achieved using a common table expression (CTE) or a subquery:</p>
<pre>
SELECT department_id, name, salary
FROM Employees e
WHERE salary = (
    SELECT MAX(salary)
    FROM Employees
    WHERE department_id = e.department_id
);
</pre>

<strong>5. What is the purpose of indexing in a database? How does it work?</strong>
<p>Indexing speeds up the retrieval of rows from a table by creating a data structure (index) that allows the database engine to find data without scanning the entire table. While indexes can significantly improve query performance, they can slow down write operations (like <code>INSERT</code> and <code>UPDATE</code>) since the index must also be updated.</p>

<strong>6. How can you delete duplicate rows in a table?</strong>
<p>To delete duplicate rows, you can use a common table expression (CTE) with the <code>ROW_NUMBER()</code> function:</p>
<pre>
WITH CTE AS (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY column1, column2 ORDER BY (SELECT NULL)) AS rn
    FROM table_name
)
DELETE FROM CTE WHERE rn > 1;
</pre>

<strong>7. What is a foreign key, and why is it used?</strong>
<p>A <strong>foreign key</strong> is a column or group of columns in a table that provides a link between data in two tables. It is a reference to the primary key in another table, enforcing referential integrity. It ensures that the value in the foreign key column corresponds to a valid row in the referenced table.</p>

<strong>8. Explain the difference between UNION and UNION ALL.</strong>
<p><strong>UNION</strong> combines the result sets of two or more SELECT statements and removes duplicate records, while <strong>UNION ALL</strong> combines the results without removing duplicates. This can affect performance since UNION requires additional processing to eliminate duplicates.</p>
<pre>
SELECT column_name FROM table1
UNION
SELECT column_name FROM table2;

SELECT column_name FROM table1
UNION ALL
SELECT column_name FROM table2;
</pre>

<strong>9. How can you retrieve unique values from a column in a table?</strong>
<p>You can retrieve unique values from a column using the <code>DISTINCT</code> keyword:</p>
<pre>
SELECT DISTINCT column_name 
FROM table_name;
</pre>

<strong>10. What are stored procedures, and how do they differ from functions?</strong>
<p><strong>Stored procedures</strong> are precompiled collections of SQL statements that can be executed as a single unit. They can accept parameters and can perform complex operations including INSERT, UPDATE, and DELETE. Functions, on the other hand, are designed to return a single value and cannot modify the database state.</p>
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
  export default DatabasesSql;
  