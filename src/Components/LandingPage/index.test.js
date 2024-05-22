import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LandingPage from './LandingPage';

describe('LandingPage component', () => {
  test('generates referral link when "Generate Referral Code" button is clicked', async () => {
   
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ link: 'http://localhost:8000/api/referral/signup/?code=abcd1234' }),
    });
    render(<LandingPage />);
    fireEvent.click(screen.getByText('Generate Referral Code'));
    await waitFor(() => screen.getByText('Your referral link: http://localhost:8000/api/referral/signup/?code=abcd1234'));
    expect(screen.getByText('Your referral link: http://localhost:8000/api/referral/signup/?code=abcd1234')).toBeInTheDocument();
    expect(screen.getByText('Copy Link')).toBeInTheDocument();
  });
});
