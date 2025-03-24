import React from 'react';
import { FiSun } from "react-icons/fi";
import { GoMoon } from "react-icons/go";
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className=" hover:text-[#D8843B] dark:hover:text-[#D8843B] transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <FiSun className="mx-auto text-white hover:text-[#D8843B] transition-all duration-300 ease-in-out" size={24} />
      ) : (
        <GoMoon className="text-gray-700 hover:text-[#D8843B] transition-all duration-300 ease-in-ou" size={24} />
      )}
    </button>
  );
}