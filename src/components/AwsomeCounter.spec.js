import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AwsomeCounter } from './AwsomeCounter';

test('it should have correct initial value when it set to 7', () => {
    render(<AwsomeCounter initialCountValue={7} />);
    const count = screen.queryByText(7);
    expect(count).toBeVisible();
});

test('it should have default initial value', () => {
    render(<AwsomeCounter />);
    const count = screen.queryByText(0);
    expect(count).toBeVisible();
});

test('it should increase the value correctly when add button is clicked', () => {
    render(<AwsomeCounter initialCountValue={0} />);
    const addButton = screen.getByText('Add');
    userEvent.click(addButton);
    const count = screen.queryByText(1);
    expect(count).toBeVisible();
});

test('it should increase the value correctly when add button is clicked twice', () => {
    render(<AwsomeCounter initialCountValue={0} />);
    const addButton = screen.getByText('Add');
    userEvent.click(addButton);
    userEvent.click(addButton);
    const count = screen.queryByText(2);
    expect(count).toBeVisible();
});

test('it should decrease the value correctly when remove button is clicked', () => {
    render(<AwsomeCounter initialCountValue={2} />);
    const removeButton = screen.getByText('Remove');
    userEvent.click(removeButton);
    const count = screen.queryByText(1);
    expect(count).toBeVisible();
});

test('it should decrease the value correctly when remove button is clicked twice', () => {
    render(<AwsomeCounter initialCountValue={2} />);
    const removeButton = screen.getByText('Remove');
    userEvent.click(removeButton);
    userEvent.click(removeButton);
    const count = screen.queryByText(0);
    expect(count).toBeVisible();
});

test('it should not have negative counter value when remove button is clicked with initial value is 0', () => {
    render(<AwsomeCounter initialCountValue={0} />);
    const removeButton = screen.getByText('Remove');
    userEvent.click(removeButton);
    const count = screen.queryByText(0);
    expect(count).toBeVisible();
});

test('it should not have negative counter value when remove button is clicked thrice with initial value is 2', () => {
    render(<AwsomeCounter initialCountValue={2} />);
    const removeButton = screen.getByText('Remove');
    userEvent.click(removeButton);
    userEvent.click(removeButton);
    userEvent.click(removeButton);
    const count = screen.queryByText(0);
    expect(count).toBeVisible();
});