export const SocialIcon = ({
  icon: Icon,
  hoverColor = "text-white",
  href = "#",
  text = "",
  label = "",
}) => (
  <a
    aria-label={label}
    href={href}
    hrefLang="en"
    target="_blank"
    rel="noreferrer"
    className="group relative p-4 flex items-center justify-center rounded-full bg-[#202025]"
  >
    <Icon
      size="28"
      variant="Bold"
      className={`${hoverColor} transition-all duration-300 group-hover:scale-110`}
    />
    {text && <p className="text-black font-medium">{text}</p>}
  </a>
);
