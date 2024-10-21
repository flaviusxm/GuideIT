import React, { useState } from 'react'; 
import { View, useWindowDimensions,Text } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { CheckBox } from 'react-native-elements'; 
import tw from 'twrnc';
import YoutubePlayer from 'react-native-youtube-iframe';
const GitControl = () => {
  const { width } = useWindowDimensions();
  const [isChecked, setIsChecked] = useState(false);

  const htmlContent = {
    html: `
     <h2>7. Version Control with Git 🗃️</h2>
<p>Version control is crucial for managing changes in code and facilitating collaboration among team members. Git has become the industry standard for version control, enabling developers to track changes, revert to previous versions, and work seamlessly with others. Below are key concepts you should master to effectively utilize Git:</p>

 <h3 style="margin-top: 10px; margin-bottom: 5px;">📍 <strong>Branches:</strong></h3>
        <p>Understanding how to work with branches in Git is essential for maintaining an organized workflow and enabling parallel development.</p>
        <ul>
            <li>🌱 <strong>Feature Branches:</strong>
                <p>Create separate branches for new features or bug fixes. This allows you to develop without affecting the main codebase until your work is ready to be merged.</p>
            </li>
            <li>📊 <strong>Develop and Master Branches:</strong>
                <p>Know the purpose of the <code>develop</code> branch for ongoing development and the <code>master</code> (or <code>main</code>) branch as the stable production version. This separation helps maintain code stability while facilitating new development.</p>
            </li>
            <li>🔄 <strong>Branch Management:</strong>
                <p>Learn best practices for naming branches and regularly deleting old branches to keep your repository clean and organized.</p>
            </li>
        </ul>

 <h3 style="margin-top: 10px; margin-bottom: 5px;">Branches (commands):</h3>
        <ul> <li><strong>Creating a new branch </strong>
                 <p>' git branch "branch_name" '</p>
        </li>
        <li><strong>Switching to a branch </strong>
                 <p>' git checkout "branch_name"  or git switch "branch_name" '</p>
        </li>
         <li><strong>Listing all branches </strong>
                 <p>' git branch -a '</p>
        </li>
         <li><strong>Deleting a branch </strong>
                 <p>' git branch -d "branch_name" '</p>
        </li>
           
        </ul>

    
  <h3 style="margin-top: 10px; margin-bottom: 5px;">🔀 <strong>Merging and Rebase:</strong></h3>
        <p>Mastering the concepts of merging and rebasing will help you incorporate changes from one branch to another effectively.</p>
        <ul>
            <li>🛠️ <strong>Merging:</strong>
                <p>Understand how to combine changes from different branches. Use <code>git merge</code> to bring feature branches into the main branch while preserving the commit history.</p>
            </li>
            <li>🔄 <strong>Rebasing:</strong>
                <p>Learn when to use <code>git rebase</code> to create a linear commit history. This can simplify the project history but requires careful management to avoid conflicts.</p>
            </li>
            <li>⚖️ <strong>When to Merge vs. Rebase:</strong>
                <p>Know the scenarios where merging is preferable (preserving history) versus rebasing (creating a cleaner history) to make informed decisions during collaboration.</p>
            </li>
        </ul>

<h3 style="margin-top: 10px; margin-bottom: 5px;">Merging and Rebase (commands):</h3>
        <ul> <li><strong>Merging a branch into the current one</strong>
                 <p>' git merge "branch_name" '</p>
        </li>
        <li><strong>Rebasing a branch </strong>
                 <p>' git rebase "branch_name" '</p>
        </li>
         <li><strong>Aborting a rebase (if conflicts occur) </strong>
                 <p>' git rebase --abort '</p>
        </li>
        </ul>
    </li>

   <h3 style="margin-top: 10px; margin-bottom: 5px;">💡 <strong>Pull Requests:</strong></h3>
        <p>Submitting pull requests is a key part of collaborative development and code review processes.</p>
        <ul>
            <li>🔍 <strong>Submitting a Pull Request:</strong>
                <p>Learn the steps for creating a pull request, including selecting the correct base and compare branches and providing a clear description of the changes made.</p>
            </li>
            <li>📝 <strong>Code Reviews:</strong>
                <p>Understand the importance of code reviews for improving code quality. Encourage constructive feedback and be open to suggestions from peers to foster a collaborative environment.</p>
            </li>
            <li>🔧 <strong>Conflict Resolution:</strong>
                <p>Become adept at resolving merge conflicts that may arise during the merging process. Learn strategies for identifying conflicting changes and working with your team to find solutions.</p>
            </li>
        </ul>
        
        <h3 style="margin-top: 10px; margin-bottom: 5px;">Pull Requests/Conflict Resolution:</h3>
        <ul> 
        <li><strong>While GitHub or GitLab is usually used for this, locally, you can create a PR using </strong>
                 <p>' git push origin "branch_name" '</p>
        </li>
        <li><strong>Viewing conflicts </strong>
                 <p>' git diff '</p>
        </li>
         <li><strong>Aborting a rebase (if conflicts occur)  </strong>
                 <p>' git add "file_with_conflict" '</p>
        </li>
        </ul>
 
 <h3 style="margin-top: 10px; margin-bottom: 5px;">HowTo's: 🗃️</h3>
 <p>(using the Terminal)</p>
<ul>
    <li>📍 <strong>Initialize Git in Your Project:</strong>
      
            <p> 'git init '</p>
        </li>   
        <li>
        <strong>Stage Files for Commit:</strong>
                <p>' git add .'</p>
        </li>
        <li>
        <strong>Commit Your Code:</strong>
        
            <p>' git commit -m "Initial commit" '</p>          
        </li>        
        <li>
        <strong>Connect to a Remote Repository (GitHub):</strong>
        
        <p>' git remote add origin "repository-url" ' </p> 
                     </li>
        <li>
        <strong>Push Code to Github:</strong>
            <p>' git push -u origin main/master '</p>  
                      </li>        
        <li>
        <strong>Pull and Sync Changes:</strong>
       <p>' git pull origin main '</p>  
                      </li>        
        <li>
        <strong>Making changes/Editing files:</strong>
        
            <p>' git push -u origin main/master '</p>      
            
        </li>        
        <li>
        <strong>Code,edit,compile and then repeat:</strong>
        <ul>
            <li>🌱 ' git add . ' </li> 
            <li>🌱 ' git commit -m "Your message" '</li>        
            <li>🌱 ' git push ' </li>     
        </ul>
        
    </li>
    </ul>
    
<p>🚀 Mastering version control with Git will not only streamline your development process but also enhance your ability to work effectively within a team, making you a more valuable asset in any software development environment.</p>
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
      <Text style={tw`mt-4 text-lg font-bold`}>Git/Git Control Crash Course</Text>
      <View style={tw`h-50 mb-2 rounded-2xl border-2 border-gray-300 p-2 overflow-hidden`}>
            <YoutubePlayer
                height={200}
                play={false}
                videoId={'zTjRZNkhiEU'}
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
  export default GitControl;
  