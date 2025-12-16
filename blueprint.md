# Blueprint: Pen and Paper Game

## Overview

This document outlines the design and features of a web-based, retro-style RPG game. The game is built with HTML, CSS, and JavaScript, and it runs entirely in the browser. It features a dynamically generated, linear world, a class selection system, and a robust interaction model.

## Core Gameplay

*   **Linear Exploration:** The game consists of a series of single-row, horizontal hallways. Players navigate from room to room through doors at either end.
*   **Class Selection:** Players can choose from a variety of character classes at the start of the game, each with unique stats and a distinct color.
*   **Loot & Interaction:** Players can interact with objects in the hallways by pressing the 'A' button. Doing so will grant them a pre-determined item, which is then removed from the map. A message log provides feedback on what was found.

## Technical Implementation

*   **Frontend:** The game is built with vanilla HTML, CSS, and JavaScript. The game's display is rendered directly into the DOM.
*   **State Management:** The game's state, including the player's position, class, inventory, current room number, and the game map, is managed by a set of JavaScript variables and functions in `game_data.js`.
*   **Dynamic Hallway Generation:** A `generateRoom()` function creates a new 3x20 hallway with walls, a playable floor, and doors (`D`) at the far left and right ends. It randomly places the player and four interactive objects (`1`, `2`, `3`, `4`) within the playable area.
*   **Item Generation:** The `Generation()` function pre-rolls a list of items for each of the 10 rooms at the start of the game, which are then assigned to the interactive objects.
*   **Interaction & Navigation:** The `Game_Command()` function handles player input. It processes left/right movement, triggers item interactions with the 'A' button, and handles room transitions when the player moves onto a door tile.
*   **Item Effects:** The `applyItemEffect()` function contains the logic for what happens when an item is acquired (e.g., adding gold, healing, equipping gear).
*   **Rendering:** A dedicated `updateGameView()` function handles rendering the game state to the screen and updating the message log.

## Implemented Features

*   **Dynamic Room Generation:** The game no longer uses a static, hardcoded map. A new room is generated every time `initializeMap()` is called.
*   **Object Interaction System:** Players can now interact with numbered objects on the map using the 'A' button.
*   **Loot System:** Interacting with an object rewards the player with an item (Gold, Food, Potion, Armor, Weapon, etc.) based on the pre-rolled data from the `Generation()` function.
*   **Comprehensive Item Effects:** All item types defined in the plan have been implemented, including random gold amounts, health/stat boosts, and random gear.
*   **Player Inventory:** The `player` object has been expanded to track equipped weapons, armor, and shields, as well as consumables like arrows and bullets.
*   **Message Log:** A new UI element, the `message_log`, displays feedback to the player, such as what items they have found.
*   **Collision:** Players can no longer walk through interactive objects.
*   **Stable Core:** All previous features, including class selection, dynamic player icon colors, and keyboard/gamepad controls, remain fully functional.

## Current Plan

**Transition to Linear Hallway Design.**

1.  **Redesign `generateRoom()`:** Rebuild the function to create a 3x20 horizontal hallway with doors (`D`) at each end.
2.  **Update Object Placement:** Ensure objects are placed randomly within the hallway, avoiding the doors.
3.  **Implement Door Travel:** Modify `Game_Command()` to handle player movement through doors, loading the next or previous room (`room` variable) and repositioning the player.
4.  **Disable Vertical Movement:** Restrict player movement to left and right only.
