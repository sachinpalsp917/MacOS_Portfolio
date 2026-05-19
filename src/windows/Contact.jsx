import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/sachin.jpg"
          alt="Sachin"
          className="w-20 rounded-full"
        />

        <h3>Let&rsquo;s Connect</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? I&rsquo;m in.</p>
        <p>sachinpalsp917@gmail.com</p>
        <p>+91 90231 54545</p>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target={link.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
