import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReferralStatus from './ReferralStatus';

describe('ReferralStatus component', () => {
  test('displays referral status fetched from the API', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ referrals: 5, rewards: 100 }),
    });

    render(<ReferralStatus />);
    await waitFor(() => screen.getByText('Referrals: 5'));
    expect(screen.getByText('Referrals: 5')).toBeInTheDocument();
    expect(screen.getByText('Rewards: 100')).toBeInTheDocument();
  });
});
