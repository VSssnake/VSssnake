## The Golden Rule:

π¦Έ π¦ΈββοΈ `Stop starting and start finishing.` π

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. **Make a drawing of your app. Simple "wireframes"**
1. **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1. **For each HTML element ask: Why do I need this?**
1. **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
1. **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1. **Think about how to validate each of your features according to a Definition of Done**
1. **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:

-   Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
-   Consider your data model.
    -   What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need?
    -   What are the key/value pairs?
    -   What arrays might you need?
    -   What needs to live in a persistence layer?
-   Is there some state we need to initialize?
-   Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)


-supabase setup 
-connect client 
-validate authentificaton and redirect()
-create all pages 


To do for game page:
-Set up page pathways.
-Set up buttons: Log out, Delete user, save game, score board (home).
-Set up another supabase table with 5 VS Code commands.
-

Basic game page HTML:
-Welcome message
-Rules section
-Shortcut cheat sheet
-Score div
-Game screen div
-Image place holder
-

-grab score-counter 
-let state
-render function for prompt div
-on document event handler
-if user input = answer, state++, alert 'u got it right' else, return alert 'ur wrong'

-Amaya-
Amaya, she/they, is a web engineer living in SE Portland. They are obsessed with cute critters, bees and hummingbirds alike! Find Amaya tending to her patio garden in hopes of recruiting the good bugs to help the hummingbirdsss find their next meal.
favorite arcade
game: Cruisin USA
-Kashi-
kashi tamang (they/them) is a software engineer in portland oregon whos favorite original video game is Buck Hunter.
-Kat-
KAT, SHE/HER, IS A SOFTWARE ENGINEER IN PROGRESS BASED IN PORTLAND, OR WHO HAS FOND MEMORIES OF PLAYING THE GAME SNAKE ON HER DADβS NOKIA CELLPHONE IN THE LATE NINETIES. HER FAVORITE VIDEO GAME IS MARIO KART ON N64. SHE LOVES LEARNING, CATS, EATING COCKTAIL ONIONS OUT OF THE JAR, AND ABOVE ALL, SHORTCUTS.
-Sebastian-
Sebastian
Snake Name: superSnake
I'm a software developer in progress from Portland, OR. I use he/him pronouns. My favorite snakes include but are not limited to, Pythons, Rattlesnakes and Garter snakes.
My favorite arcade game is space invaders.
-Pedro-
PythonPedro-
new python Pedro wanted to learn VS Code shortcuts, so he slithered through the tall grass in here to learn.
Favorite game: Crazy taxi