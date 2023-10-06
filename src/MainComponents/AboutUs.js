import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function AboutUs() {
  const groupMembers = [
    {
      name: "Michael Allan Lomugdang",
      avatar: 'https://i.pinimg.com/originals/5d/d7/7c/5dd77c01ea425a9865da77cb2d7f5f82.jpg'
      //task: "CSS & ETC..."
    },
    {
      name: "Aidan Keller",
      avatar: 'https://cdn.discordapp.com/avatars/340627577175670786/98de2ea80d6d47fde1b15acd029e25ed'
      //task: "CSS & ETC..."
    },
    {
      name: "Elias Jammal",
      avatar: 'https://cdn.discordapp.com/avatars/300145285274009640/ae16de3d214ce26eacd94c239e0740dd'
      //task: "CSS & ETC..."
    },
    {
      name: "Joshua Dedeigbo",
      avatar: 'https://cdn.discordapp.com/avatars/235114404151164938/290e85e2bc59ec1663dfbafe9dfb1c69'
      //task: "CSS & ETC..."
    }
  ];
  return (
    <div class="aboutUs-wrapper">
      <div class="proj-title">
        <h3>Group Members</h3>
      </div>
      <div class="aboutUs-container">
        {groupMembers.map((member) => (
          <div class="box">
            <div class="pfp-icon">
              <img src={member.avatar} />
            </div>
            <div class="pfp-info">
              <h3>{member.name}</h3>
              <h5>{member.task}</h5>
            </div>
            <div class="socials-icon">
              <FaInstagram class="icons " />
              <FaTwitter class="icons " />
              <FaEnvelope class="icons " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
