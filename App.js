import React, { useState } from 'react';
import './App.css';
import BlogList from './components/BlogList';
import BlogDetails from './components/BlogDetails';
const blogPosts = [
  {
    id: 1,
    movie: "1.Mankatha",
    content: "Mankatha is a 2011 Indian Tamil-language action thriller film directed by Venkat Prabhu. It stars Ajith Kumar in the lead role, marking a departure from his usual romantic roles. The film revolves around Vinayak Mahadev (Ajith), a suspended police officer who joins a group of criminals to execute a heist at a luxurious casino,The films plot is filled with twists and turns, highlighting themes of trust, betrayal, and greed. Ajith delivers a charismatic performance as Vinayak, known for his stylish appearance and witty dialogues. The ensemble cast includes Arjun Sarja, Trisha Krishnan, and others who deliver strong performances.Mankatha is renowned for its fast-paced narrative, gripping action sequences, and catchy music composed by Yuvan Shankar Raja. The film's tagline, Game Begins, aptly captures its essence as a high-stakes cat-and-mouse chase between the police and criminals.Released in 2011, Mankatha was a commercial success and received praise for its unique storytelling and Ajith's portrayal of an antihero. It remains a popular and iconic film in Tamil cinema, celebrated by fans of the actor and the genre.",
    actor: "AjithKumar",
    comments: [
      "Thala Ajith sir Acting...Theater Blast",
      "Best Movie I ever seen...Love Thala ",
    ],
  },
  {
    id: 2,
    movie: "2.Manmadhan",
    content: "Manmadhan is a 2004 Tamil film featuring Simbu as Manmadhan, a charming playboy with a hidden dark side. Directed by A.J. Murugan, the movie combines romance and suspense as it unravels Manmadhan double life – a charismatic businessman by day and a serial killer of unfaithful women by night, driven by a traumatic past. His life takes a twist when he falls in love with Ambujam, played by Jyothika. The film explores themes of love, betrayal, and redemption and is celebrated for its gripping plot and memorable music. Simbu s performance in Manmadhan cemented his reputation as a versatile actor in the Tamil film industry",
    actor: "Silambaran TR",
    comments: [
      "Amazing Screenplay and Direction...Simbu you Rocked",
      "Most Love and Thriller Movie of the Year",
    ],
  },
  {
    id: 3,
    movie: "3.Thuppakki",
    content: "Thuppakki is a popular Indian film released in 2012. Directed by A.R. Murugadoss and starring Vijay and Kajal Aggarwal, it is an action-packed thriller. The story revolves around an Indian Army officer who discovers a terrorist plot in Mumbai. He embarks on a mission to thwart the impending attack and dismantle the terrorist network. The film combines gripping action sequences, emotional moments, and a strong patriotic theme. Thuppakki received critical acclaim for its storytelling, Vijay's performance, and Harris Jayaraj's music. It emerged as a box office hit and remains a favorite among fans of South Indian cinema.",
    actor: "Vijay",
    comments: [
      "Amazing Direction by AR Murugadoss",
      "One of the Best Movie in Thalapathy Vijay Career",
    ],
  },
  {
    id: 4,
    movie: "4.LEO",
    content: "Leo is an upcoming Indian Tamil-language action thriller film directed by Lokesh Kanagaraj, who co-wrote it with Rathna Kumar and Deeraj Vaidy. It is the third film in the Lokesh Cinematic Universe, and is produced by S. S. Lalit Kumar of Seven Screen Studio while Jagadish Palanisamy serves as co-producer. The film stars Vijay as the titular character, and Trisha, alongside Sanjay Dutt, Arjun Sarja, Gautham Vasudev Menon, Mansoor Ali Khan and Mysskin.",
    actor: "Vijay",
    comments: [
      "Most Wanted Director...Lokesh Kanagaraj",
      "Lokesh Cinematic Universe (LCU)..Thalapathy Entry",
    ],
  },
  {
    id: 5,
    movie: "5.Jil Jung Juk",
    content: "Jil Jung Juk is a 2016 Indian Tamil-language neo-Western post-apocalyptic black comedy film written and directed by debutant Deeraj Vaidy, who also co-wrote the script with Mohan Ramakrishnan. Siddharth produced the film under Etaki Entertainment banner, and also starred alongside Avinash Raghudevan and Sananth Reddy, playing the titular characters. In the film, Jil, Jung and Juk are assigned by a dreadful drug lord to transport drugs, where they faces struggles during their journey. The film explores the themes of butterfly effect, post-apocalyptic and futuristic fiction.",
    actor: "Siddharth",
    comments: [
      "Most underrated movie of Tamil cinema. Powerful dark comedy movie in Tamil.",
      "Dark comedy crime movie. One of the most underrated movie in Tamil cinema. Kudos to Siddharth for trying this out in his own production. 🙂",
    ],
  }
];
function App() {
  const [selectedPost, setSelectedPost] = useState(null);
  const handleClick = id => {
    setSelectedPost(blogPosts.find(post => post.id === id));
  };
  return (
    <div>
      <h1>Blog About Tamil Movies</h1>
      <h2>717821L149_Simbu M</h2>
      {!selectedPost ? (
        <BlogList posts={blogPosts} handleClick={handleClick} />
      ) : (
        <BlogDetails post={selectedPost} />
      )}
      
    </div>
  );
}
export default App;
