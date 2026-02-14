
2026-02-15 02:06

Status: on going

Tags:

# [[Use WebRTC to establish a direct peer-to-peer connection]]

1. [[WebRTC process recap and .md file]]
2. [[STAGE 1 - setting up STUN configuration servers]]
3. [[Triggering the WebRTC process]]
4. [[Updating UI and displaying buttons]]
5. [[Creating a peer connection object]]
6. [[The connectionstatechange and signalingstatechange event listeners]]
7. [[Completing event handler logic]]
8. [[Updating UI after a user clicks a button]]
9. [[Testing out code]]
10. [[Trigger a function to create a Data Channel]]
11. [[WebRTC Data Channel Overview]]
12. [[Creating a WebRTC data channel, and setting up ondatachannel event listener]]
13. [[Testing and viewing Chrome's webrtc-internals]]
14. [[Creating a WebRTC offer]]
15. [[Set local description and listen for ice candidates]]
16. [[Testing ice generation]]
17. [[Setting up function to send an offer]]
18. [[Sending an offer to the signaling server (end of Stage 1)]]
19. [[Stage 2 - setting up function routes, and sending offer to PEER2]]
20. [[Stage 3 - begins - PEER2 receiving an offer]]
21. [[Fixing a bug, and confirming that PEER2 has received the offer]]
22. [[Showing PEER2 buttons]]
23. [[Create PEER2's peer connection object]]
24. [[Registering the ondatachannel listener on the pc object]]
25. [[Set remote description with PEER1's offer]]
26. [[Create WebRTC answer, and set local session description with that answer]]
27. [[Touchups]]
28. [[Send WebRTC answer to signaling server]]
29. [[Send ice candidates to signaling server]]
30. [[Stage 4 begins - server receiving answer and ice candidates]]
31. [[Creating a generic signaling message function for WebRTC messages]]
32. [[Stage 5 begins - PEER1 receiving an answer and ice candidates]]
33. [[Timeout - testing code]]
34. [[Sending ice candidates to PEER2]]
35. [[Handle ice candidates received]]
36. [[Setting remote description with the answer, and looping through ice buffer]]
37. [[MILESTONE - testing the WebRTC connection]]
38. [[Update UI and show message input elements]]
39. [[Add outgoing messages to the sender's UI]]
40. [[Sending a message on a WebRTC Data Channel]]
41. [[Listen for incoming messages on the dataChannel, and update UI]]
42. [[Closing a peer connection and data channel when exiting a room]]
43. [[Testing WebRTC closure for the user exiting the room]]
44. [[Using webrtc-internals to analyze the entire WebRTC process]]
45. [[Closing the second peer's connection]]
46. [[WebRTC can work without the server]]
47. [[Analyzing WebRTC in Wireshark]]
48. [[Use WebRTC to establish a direct peer-to-peer connection - Assessment]]
49. [[Full Course Practice Assessment]]
50. [[full Course Assessment]]




---

#References