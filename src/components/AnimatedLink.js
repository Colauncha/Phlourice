const AnimatedLink = ({ children, href }) => (
  <NavLink 
    to={href}
    className="relative group inline-flex items-center text-green-600 font-medium"
  >
    {children}
    <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
  </NavLink>
);