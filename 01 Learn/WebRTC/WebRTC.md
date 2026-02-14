2026-02-15 01:00

Status: on going

Tags:

# [[WebRTC]]


## [[Introduction to WebRTC]]

1. Traditional HTTP has limitations
2. Resources 
3. WebRTC - Introduction
4. First WebRTC video call between Firefox and Chrome
5. WebRTC is governed by a specification (W3C) and many RFCs
6. WebRTC use cases
7. WebRTC Source Code
8. The RTCPeerConnection function, "new" and the 2 most important aspects of WebRTC

## [[WebRTC Theory]]

1. Accessing a user's video device(GUM)
2. Using the enumerateDevices() method to access a specific device ID
3. Displaying a media stream inside of a tag 
4. How do you identify yourself (ipconfig, netstat and public IPs)
5. What is NAT?
6. Introduction to HOST and STUN candidates
7. WebRTC workflow visualized
8. What is ice Framework and who is the ice Agent?
9. Examining the RTCPeerConnection object
10. Introduction to chrome://webrtc-terminals and about:webrtc
11. The onicecandidate event
12. Creating a Web RTC offer
13. The different ways to deal with Promises and functions in JavaScript
14. WebRTC is managed by session descriptions
15. Remote session description
16. JavaScript Session Establishment Protocol (JSEP)
17. Using getTrack() and setTrack() to add video media to your peer connection
18. What exactly does an OFFER indicate, and how to customize the SDP?
19. Generating HOST ice candidates
20. Listening for the onnegotiationneeded event
21. Explaining the candidate property, sdpMid, sdpMLineIndex, and more
22. What are STUN servers
23. Adding STUN configurations to our RTCPeerConnection object
24. Using Wireshark to analyze a STUN request and response
25. Why does STUN Sometimes fail?
26. What are TURN servers
27. Signaling servers and the different types (SIP, XMPP, WebSockets, AJAX, etc)
28. WebRTC Detailed Connection Overview
29. The final step - connectivity checks
30. Understanding the WebRTC Connection Establishment Process
31. WebRTC Theory - Assessment

## [[Prepare Environment and set up node]]

1. HTML Overview
2. Setting up folders, script, modules, and calculating a unique ID
3. Defining state on the frontend, and setters
4. Using JavaScript to enable the modal
5. Closing the modal by adding an event listener on the window object
6. Improving the naming of our modal element, and removing the hidden class
7. Server Code - initiating a Node project and installing dependencies
8. Spinning up Node's HTTP server, and serving the frontend files
9. Installing Nodemon, and setting up a "start script"
10. Listening for a WebSocket request on the client side using the native WebSocket API
11. Server side - disconnection logic and message event handler
12. Client side - updating state and registering WebSocket event listeners
13. Client side - define a custom logger
14. Client side - defining a constants file and testing custom logger
15. Client side - defining WebSocket frontend event listeners
16. Defining a getter for our state object
17. Setting up a WebSocket Server with Node.js and Express
18. Prepare environment and set up Node Server - Assessment

## [[Implement room connection logic before WebRTC]]

1. Create Room - set up frontend click event listener
2. Create Room - send a POST AJAX Fetch request to the server
3. Create Room - process chunks on the server and extract the req body
4. Create Room - dealing with the server response on the frontend 
5. Create Room - updating the user interface for the creator of a room
6. Adding a keypress event, and improving code
7. Fixing the bug (spoiler alert: it's the "return" keyword)
8. Destroy room - finishing logic on the frontend
9. Adding server logic for removing a room when a user disconnects
10. Fixing error
11. Fixing the favicon error by using the data URI scheme
12. Join Room - check whether the room exists, and if not, send a failure message
13. Define a generic WebSocket send function (also used for WebRTC)
14. Join Room - sending a successful response and notification message
15. Join Room - setting up switch statements to handle incoming WebSocket messages
16. Join Room - defining success logic on the frontend
17. Join Room - notifying the other user that a peer has joined their room
18. Join Room - fixing error and updating the message container
19. Exit Room - sending a WebSocket message to exit a room
20. Exit Room - process the exit request on the WebSocket server
21. Exit Room - handling the response from the server
22. Testing the application
23. Add disconnection logic on the server
24. Add disconnection logic on the frontend
25. Final touch-ups and source files
26. Implementing Room Creation and Deletion via AJAX
27. Implementation room connection logic before WebRTC - Assessment

## [[Use WebRTC to establish a direct peer-to-peer connection]]
1. WebRTC process recap and .md file
2. STAGE 1 - setting up STUN configuration servers
3. Triggering the WebRTC process
4. Updating UI and displaying buttons
5. Creating a peer connection object
6. The connectionstatechange and signalingstatechange event listeners
7. Completing event handler logic
8. Updating UI after a user clicks a button
9. Testing out code
10. Trigger a function to create a Data Channel
11. WebRTC Data Channel Overview
12. Creating a WebRTC data channel, and setting up ondatachannel event listener
13. Testing and viewing Chorme's webrtc-internals
14. Creating a WebRTC offer
15. Set local description and listen for ice candidates
16. Testing ice generation
17. Setting up function to send an offer
18. Sending an offer to the signaling server (end of Stage 1)
19. Stage 2 - setting up function routes, and sending offer to PEER2
20. Stage 3 - begins - PEER2 receiving an offer
21. Fixing a bug, and confirming that PEER2 has received the offer
22. Showing PEER2 buttons
23. Create PEER2's peer connection object
24. Registering the ondatachannel listener on the pc object
25. Set remote description with PEER1's offer
26. Create WebRTC answer, and set local session description with that answer
27. Touchups
28. Send WebRTC answer to signaling server
29. Send ice candidates to signaling server
30. Stage 4 begins - server receiving answer and ice candidates
31. Creating a generic signaling message function for WebRTC messages
32. Stage 5 begins - PEER1 receiving an answer and ice candidates
33. Timeout - testing code
34. Sending ice candidates to PEER2
35. Handle ice candidates received
36. Setting remote description with the answer, and looping through ice buffer
37. MILESTONE - testing the WebRTC connection
38. Update UI and show message input elements
39. Add outgoing messages to the sender's UI
40. Sending a message on a WebRTC Data Channel
41. Listen for incoming messages on the dataChannel, and update UI
42. Closing a peer connection and data channel when exiting a room
43. Testing WebRTC closure for the user exiting the room
44. Using webrtc-internals to analyze the entire WebRTC process
45. Closing the second peer's connection
46. WebRTC can work without the server
47. Analyzing WebRTC in Wireshark
48. Use WebRTC to establish a direct peer-to-peer connection - Assessment
49. Full Course Practice Assessment
50. full Course Assessment

---

#References