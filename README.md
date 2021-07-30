# Guardian
Guardian is a tower defense based game where you have to protect your farm animals from hungry predators.


Here's the live site !

## Technologies
* Javascript
* SCSS
* HTML
* Canvas

## MVP
### Board
* Board has standard route
* Valid positions where defense units are placed will be invalid for predators to walk on
* Valid positions for predator units to move will be invalid for defense unit placement
### Defense (User interaction) (2 days) 
* Have a couple/few different type of projectile protection systems to purchase with gold/currency, must have sufficient monies
* Left click on what what you want to purchase from the store and it'll be highlighted 
* Left click on where the board where you want to place defense unit
* Units will continually shoot out blasts, only shoots in one direction (tentative) 
### Predator Waves (1 day) 
* Spawning predators
* Increasing HP of predators after a certain amount of predators have spawned
  * example
     * first 10 predators will have 100 hp
     * next 10 predators will have 150 hp
     * and so on ...
* Predators take the same route every time
### Tracker (0.5 days) 
* Keeps track of monies
* Keeps track of predators killed

## Gameplay
* The objective of the game is to defend the farm animals from being eaten by the predators.
* Once the game starts, predators will come in waves. Coming from the *Predators Start Position*.
* Inside the farm, there will be a set amount of farm animals. The farm animals will be sheltered in the bottom left box(remain static and stored in that one location only) and the goal is to stop the predators in their tracks from ever reaching the shelter. 
* Each predator killed gives gold/currency.
* Gold/currency will be used to buy protection that shoots projectiles that damage the predators.
* Users functionality will be buying protection from the store and strategically placing them on the board in hopes to stop the predators from reaching the farm animals.
* As game progresses, predators get stronger with more HP and become more difficult to kill.
* The number of farm animals you have left is your life points. Once all your farm animals have been eaten, the game is over.
![gameplay](https://creatr-seed.s3.amazonaws.com/guardian_wireframe2.png)

## Timeline
### Day 1: (Board)
* Research and basic setup of wireframe board and instructions
### Day 2: (Predators) 
* Set up moving predators and static farm animals
### Day 3: Protection Unit
* Placed protection unit shoots out projectiles
### Day 4: (User interaction)
* Create a store that sells different defense protection
* Allows user to interact by left clicking and placing
### Day 5:
* Adding tracker followed up with styling
### Weekend:
* More styling
