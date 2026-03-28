# Planning and Design Document

## REQUIREMENTS

- Users must be able to enter a list of courses

## DESIGN

### Front End - UI

#### Landing page - Form

- Select Home University

- Enter program

- Target Term

- Continue to Requirements (submit)

#### Loading screen - Intermitent

- h1: Matching your major requirements...

- h3: This might take a moment. We're searching through thousands of courses to find your perfect match.

#### Requirements builder

- Categories of courses
  a. Max number of courses field

- Course codes
  Course titles

- Generate matches button

#### Loading screen

- Header: We found {numMatches} matches for your journey
- University cards: Name, City, Categories breakdown, % match score, Picture

### Back End

#### Server - FastAPI

- Routes:
  "/api":
  - "/courses" (POST): post university courses
  - "/university/{name}": get uni info (name, city, ranking, image)

- Integrate functions with Playwright (async)

#### Deploy - Cloudflare Page functions / google cloud functions / lambda functions

- Use pyodide to compile python to wasm.
