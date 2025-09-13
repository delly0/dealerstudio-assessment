import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Card from './Card';

// --- Mock card data ---
const mockCard = {
  id: 1,
  title: 'Test Card',
  description: 'This is a test card.',
  buttonText: 'Select',
  image: 'https://via.placeholder.com/150',
};

// --- Card component tests ---
describe('Card component', () => {
  it('renders card with correct title and description', () => {
    render(<Card data={mockCard} selected={false} onSelect={() => {}} />);

    expect(screen.getByText('Test Card')).toBeDefined();
    expect(screen.getByText('This is a test card.')).toBeDefined();
    expect(screen.getByText('Select')).toBeDefined();
  });

  it('shows border when selected prop is true', () => {
    render(<Card data={mockCard} selected={true} onSelect={() => {}} />);
    
    const card = screen.getByText('Test Card').closest('article');
    expect(card.classList.contains('ring-4')).toBe(true);
  });

  it('calls onSelect when button is clicked', () => {
    const handleSelect = vi.fn();
    render(<Card data={mockCard} selected={false} onSelect={handleSelect} />);

    const button = screen.getByText('Select');
    fireEvent.click(button);

    expect(handleSelect).toHaveBeenCalledTimes(1);
  });
});

// --- Middle-card selection logic (function test) ---
describe('Home page card selection logic', () => {
  function getMiddleCardId(cards) {
    return cards[Math.floor(cards.length / 2)].id;
  }

  it('selects the middle card correctly', () => {
    const cards = [
      { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
    ];
    expect(getMiddleCardId(cards)).toBe(3);
  });

  it('works with even number of cards', () => {
    const cards = [
      { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }
    ];
    // Should select the lower middle index (2)
    expect(getMiddleCardId(cards)).toBe(3);
  });
});

// --- Dark mode toggle logic (function test) ---
describe('Optional UI states', () => {
  function toggleDarkMode(isDark) {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }

  it('adds dark class when true', () => {
    document.documentElement.className = '';
    toggleDarkMode(true);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('removes dark class when false', () => {
    document.documentElement.className = 'dark';
    toggleDarkMode(false);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});