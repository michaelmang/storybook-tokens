# Storybook Tokens

Simplify the creation of Style Dictionary-friendly tokens

⚛️ React/JSX support

Here's a potential workflow for using this addon:

- 📝 Create stories in Storybook
- 🧺 Use addon to extract raw design tokens from each story
- 🏷 Copy raw design tokens to Style Dictionary
- 📦 Format design tokens in Style Dictionary
- 🚢 Release formatted design tokens for others to consume

## Why?
1) For documentation (without having to jump back and forth between Style Dictionary).

2) For allowing teams to build UI components as usual, copy and paste the underlying, agnostic tokens into a tool like Style Dictionary, and then format them for sharing with other teams.

This flips the traditional approach to a design tokens pipeline. Instead of generating your tokens first, and then consuming them in your UI library, you can create the UI library first and then extract the tokens.

In a word, you can reverse engineer a design tokens pipeline.

This may not be an ideal use case or best practice, but it could be helpful in SOME cases (i.e. a team that only has a UI component library, no formal design system team, and wants to quickly get a Style Dictionary pipeline going.)

## How Do I Use This?
Click the "paintbrush" in the toolbar labeled "Extract Tokens".

This will display the extracted design that you can copy and paste into Style Dictionary:

![screenshot](https://res.cloudinary.com/dpzpn0xkz/image/upload/v1637018020/rbe43rdjsrg7ijn698ya.png)
