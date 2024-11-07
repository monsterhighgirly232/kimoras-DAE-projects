# Store the user's name and nickname (both are strings)
username = 'princesscookie'
nickname = 'princess cookie da realest'

# Store the user's age (integer)
age = 1000

# Store the bank account balance (float) and lottery winnings (float)
bank_account_balance = 2
lottery_account = 0

# Function to print the current account balance
def print_account_balance(balance):
    """Print the current bank account balance."""
    print("Your current account balance is: $", balance)

# Function to simulate adding lottery winnings to the bank account
def add_lottery_winnings(account_balance, winnings):
    """Add lottery winnings to the bank account."""
    account_balance += winnings  # Add lottery winnings to account balance
    print("Congratulations! You've won $", winnings, "in the lottery!")
    return account_balance  # Return the updated balance

# Check if the bank account balance is greater than 200
if bank_account_balance > 200:
    # If the balance is greater than 200, print a message calling the user rich
    print("Your account balance is $", bank_account_balance, "You're", username, "with the brick!!!")
else:
    # If the balance is less than or equal to 200, print a message calling the user broke
    print("Your account balance is $", bank_account_balance, "You're", username, "brokie with no dinero!!!")

# Print the current account balance using the function
print_account_balance(bank_account_balance)

# Add lottery winnings to the bank account and update the balance
bank_account_balance = add_lottery_winnings(bank_account_balance, lottery_account)

# Print the new account balance
print_account_balance(bank_account_balance)

# Create a list of sample transactions (some positive, some negative)
transactions = [100, -50, 200, -150, 500]  # List of transaction amounts (integers)

# Loop through the list of transactions and update the bank account balance
for transaction in transactions:
    bank_account_balance += transaction  # Add each transaction to the account balance
    print("Processed transaction of $", transaction)
    print_account_balance(bank_account_balance)  # Print the updated balance after each transaction

# Final message about user's account balance
if bank_account_balance > 200:
    print("You're", username, "still rolling in cash!")
else:
    print("You're", username, "and need to save more dinero!")
