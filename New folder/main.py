import random

attempts = 10

def display_rules():
    print("Welcome to Number Guessing Game!\n")
    print("I have selected a number between 1 and 100.")
    print("You have 10 attemps to guess it.\n")


def play_game(number, attempt=1):
    if attempt > attempts:
        print("\n Game Over!")
        print("The correct number was :", number)
        return

    guess = input(f"Attempt {attempt}/10 - Enter your guess:")

    try:
        guess = int(guess)
    except ValueError:
        print("Please enter a number between 1, 100")
        return play_game(number, attempt)

    if guess < 1 or guess > 100:
        print("/n I don't think you understand me")
        print("Pick a number BETWEEN 1 and 100\n")
        return play_game(number, attempt)

    check_guess = lambda number, guess : "correct" if number == guess else ("low" if guess < number else "high")

    result = check_guess(number, guess)

    if result == "correct":
        print("\n You got it, my number was", number) 
        print("You guessed it in", attempt, "attemp(s).")
        return

    if result == "low":
        print("My number is more than that, Guess Higher!\n")     
    else:
            print("My number is less then that, Guess Lower!\n")

    play_game(number, attempt + 1)


#Heres to start 
display_rules()
random_number = random.randint(1, 100) 
play_game(random_number)