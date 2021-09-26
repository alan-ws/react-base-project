/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Title } from './Typography';
import { style } from '../../lib/styleTheme';

jest.mock('goober');

describe('PageTitle', () => {
  it('renders title', async () => {
    render(<Title title="Page title to test" />);

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: style.bp.sm,
    });
    await waitFor(
      () => {
        expect(screen.getByText('Page title to test')).toBeInTheDocument();
      },
      { timeout: 1000 },
    );
  });
});
