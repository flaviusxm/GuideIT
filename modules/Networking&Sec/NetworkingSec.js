import React, { useState } from 'react'; 
import { View, useWindowDimensions,Text } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { CheckBox } from 'react-native-elements';
import YoutubePlayer from 'react-native-youtube-iframe';
import tw from 'twrnc';
const NetworkingSec = () => {
  const { width } = useWindowDimensions();
  

  const [isChecked, setIsChecked] = useState(false);

  const htmlContent = {
    html: `
      <h2>🚀 Mastering Software & IT Concepts</h2>
<p>Let’s break it down into key areas!</p>

<h2>6. Networking & Security 🌐</h2>
<p>Software is often deployed across networks, so knowledge of networking protocols and security concepts is vital.</p>

<ul>
  <li>🖧 <strong>HTTP/HTTPS Protocol:</strong>
    <p>HTTP (Hypertext Transfer Protocol): Defines how data is exchanged between a browser and a web server. It uses methods like GET, POST, and PUT in the request-response cycle.</p>
    <p>HTTPS (Secure HTTP): Adds encryption using SSL/TLS, ensuring secure data transfer. For example, while visiting a bank's website, HTTPS ensures your transactions remain encrypted and protected from eavesdroppers.</p>
    <p><strong>Example</strong>:When you visit a website like example.com, your browser sends an HTTP request to the server. If using HTTPS, your browser encrypts this request, and the server decrypts it, sending back the response over a secure channe.</p>
  <li>🔐 <strong>Encryption & Authentication:</strong>
    <p>Learn key cryptography concepts to protect data:</p>
    <ul>
      <li><strong>Symmetric Encryption (e.g., AES):</strong> Both sender and receiver share the same key. It’s fast but less secure if the key is compromised.</li>
      <li><strong>Asymmetric Encryption (RSA):</strong> Uses a pair of public and private keys. The public key encrypts the data, while the private key decrypts it, enhancing security.</li>
      <li><strong>Hashing (SHA-256):</strong>One-way encryption used for data integrity. Hashes ensure data, like passwords, is stored securely without revealing the original data.</li>
      <li><strong>Authentication Protocols (e.g., OAuth):</strong> Used for secure access control. OAuth, for example, allows users to log into apps using accounts like Google without sharing credentials.</li>
    </ul>
    <p><strong>Example:</strong> When you log in using Google, the app receives an OAuth token, not your Google password, reducing the risk of credential leaks.</p>
  </li>

  <li>⚠️ <strong>Firewalls & Load Balancing:</strong>
    <p>These technologies play key roles in security and performance:</p>
    <ul>
      <li><strong>Firewalls:</strong> Act as a barrier between a secure internal network and untrusted external networks, controlling incoming and outgoing traffic based on predefined rules (e.g., blocking access from suspicious IP addresses).</li>
      <li><strong>Load Balancing:</strong> Distributes incoming network traffic across multiple servers, ensuring no single server is overwhelmed. This improves system reliability and prevents downtime.</li>
    </ul>
    <p><strong>Example:</strong> In a cloud-based app, a load balancer distributes user requests across several servers. Firewalls protect each server by filtering traffic and preventing unauthorized access.</p>
  </li>

  <li>🌐 <strong>IP Addresses and DNS:</strong>
    <p>Understand how devices are identified on networks:</p>
    <ul>
      <li><strong>IP Addresses:</strong> Unique identifiers for devices on a network. IPv4 uses 32-bit addresses (e.g., 192.168.1.1), while IPv6 offers a larger range with 128-bit addresses (e.g., 2001:0db8:85a3::7334).</li>
      <li><strong>DNS (Domain Name System):</strong> Translates domain names like example.com into IP addresses so browsers can load websites.</li>
    </ul>
    <p><strong>Example:</strong> When you type example.com, DNS servers translate this into an IP address, allowing your browser to locate the server and display the website.</p>
  </li>
</ul>

<h2>Network and Security Interview Questions</h2>

<ol>
    <li>
        <strong>What is the OSI Model? Explain its layers.</strong>
        <p>Response: The OSI (Open Systems Interconnection) model is a conceptual framework that standardizes communication functions across different systems without regard to underlying technology. The seven layers are:</p>
        <ul>
            <li><strong>Physical:</strong> Manages hardware transmission (e.g., cables, switches).</li>
            <li><strong>Data Link:</strong> Error detection/correction, and MAC addressing (e.g., Ethernet).</li>
            <li><strong>Network:</strong> Routes data (e.g., IP).</li>
            <li><strong>Transport:</strong> Ensures reliable data transfer (e.g., TCP/UDP).</li>
            <li><strong>Session:</strong> Manages sessions between applications.</li>
            <li><strong>Presentation:</strong> Data translation and encryption (e.g., SSL/TLS).</li>
            <li><strong>Application:</strong> Interface for user interaction (e.g., HTTP/FTP).</li>
        </ul>
    </li>

    <li>
        <strong>What is the difference between TCP and UDP?</strong>
        <p>Response:</p>
        <ul>
            <li><strong>TCP (Transmission Control Protocol):</strong> Connection-oriented, ensuring reliable communication through error correction and flow control. It guarantees that packets arrive in order and retransmits lost packets.</li>
            <li><strong>UDP (User Datagram Protocol):</strong> Connectionless and faster than TCP, but it doesn't guarantee packet delivery, order, or error correction. It's used where speed is critical, like in video streaming or VoIP.</li>
        </ul>
    </li>

    <li>
        <strong>What is a firewall, and how does it work?</strong>
        <p>Response: A firewall acts as a security barrier between trusted and untrusted networks, monitoring and controlling incoming and outgoing traffic based on predefined security rules. It can operate at different OSI layers, filtering traffic by IP address, port, or application, and it can block malicious data or unauthorized access attempts.</p>
    </li>

    <li>
        <strong>Explain the difference between symmetric and asymmetric encryption.</strong>
        <p>Response:</p>
        <ul>
            <li><strong>Symmetric encryption:</strong> Uses a single secret key for both encryption and decryption (e.g., AES). It's fast but requires secure key distribution.</li>
            <li><strong>Asymmetric encryption:</strong> Uses a pair of keys (public and private). The public key encrypts, and the private key decrypts (e.g., RSA). It’s more secure for key exchange but slower than symmetric encryption.</li>
        </ul>
    </li>

    <li>
        <strong>What is SSL/TLS and how does it secure web traffic?</strong>
        <p>Response: SSL/TLS (Secure Sockets Layer/Transport Layer Security) secures data transmitted over the internet by encrypting the communication between a client (e.g., browser) and a server. SSL/TLS uses both asymmetric encryption for the initial handshake to securely exchange keys and symmetric encryption for fast data transfer. It ensures data confidentiality, integrity, and authentication.</p>
    </li>

    <li>
        <strong>What are VPNs, and why are they used?</strong>
        <p>Response: A VPN (Virtual Private Network) establishes a secure and encrypted connection over a public network (usually the internet). It provides anonymity by masking the user’s IP address and secures data in transit, making it critical for remote workers or users accessing sensitive data. VPNs prevent data interception and provide privacy by encrypting all transmitted traffic.</p>
    </li>

    <li>
        <strong>What is a load balancer?</strong>
        <p>Response: A load balancer distributes incoming network traffic across multiple servers to ensure no single server becomes overwhelmed. It enhances application availability, improves fault tolerance, and helps manage high traffic volumes. Load balancers can operate at the network (Layer 4) or application level (Layer 7) to distribute traffic efficiently, and they support redundancy.</p>
    </li>

    <li>
        <strong>How do IDS and IPS differ?</strong>
        <p>Response:</p>
        <ul>
            <li><strong>IDS (Intrusion Detection System):</strong> Monitors network traffic for suspicious activities and alerts administrators but does not take direct action.</li>
            <li><strong>IPS (Intrusion Prevention System):</strong> Actively prevents malicious traffic by detecting and blocking suspicious activities in real-time, acting as a proactive defense system.</li>
        </ul>
    </li>

    <li>
        <strong>What is two-factor authentication (2FA), and why is it important?</strong>
        <p>Response: 2FA (Two-Factor Authentication) adds an extra layer of security by requiring two forms of identification: something the user knows (password) and something they have (e.g., a phone or hardware token). It reduces the risk of unauthorized access even if a password is compromised, providing enhanced security for accounts.</p>
    </li>

    <li>
        <strong>What is DNS, and how does DNS spoofing work?</strong>
        <p>Response:</p>
        <ul>
            <li><strong>DNS (Domain Name System):</strong> Translates human-readable domain names (like www.example.com) into IP addresses (e.g., 192.0.2.1), allowing users to access websites easily.</li>
            <li><strong>DNS spoofing (DNS cache poisoning):</strong> Involves corrupting a DNS resolver's cache to return an incorrect IP address, redirecting users to malicious websites without their knowledge. It’s a common attack used to steal sensitive information like login credentials.</li>
        </ul>
    </li>
</ol>


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
       <Text style={tw`mt-4 text-lg font-bold`}>Python Crash Course</Text>
<View style={tw`h-50 mb-2 rounded-2xl border-2 border-gray-300 p-2 overflow-hidden`}>
        <YoutubePlayer
          height={200}
          play={false}
          videoId={'ix9cRaBkVe0'} 
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
  export default NetworkingSec;
  