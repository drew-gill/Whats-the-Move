## Inspiration
It's nearly a daily occurrence, especially during the long periods of staying at home, where my roommates and I ask ourselves, what's the move? And we can never think of an answer or at least enough answers such that everyone is satisfied with it. Plus, even in Gainesville we've realized that there's a lot of hidden gems in the community waiting to be discovered, and having a medium to share these experiences would be awesome!

## What it does
What's the Move? is a centralized database that anyone can contribute to, that will suggest nearby activities that have been suggested by others in the community! These can include restaurants, landmarks, physical activities, or any other notable locations! Users can filter by two main categories: cost and distance (from where they currently are), as well as a few other "advanced" categories to narrow it down. From there, they'll just press a button, and if they like the idea, they can be directed to get more info about it; otherwise, they'll just go through a randomized list of ideas.

## How we built it
Our front-end was built in React with MaterialUI, and we collaborated through a shared GitHub repository. Most of the functionality that wasn't bundled with React comes from the Google Cloud Platform, where we used the Firebase Cloud Firestore NoSQL database, Firebase Hosting (along with a custom domain where you can [Find the Move, Online](https://findthemove.online/) from Domain.com), and Google Maps API. 

## Challenges we ran into
Initially, we were looking to use the Google Places API to retrieve info about nearby locations but had a lot of trouble getting it to work with React for whatever reason. Also, two of our three members have not developed with any object-oriented language since high school, so learning React was a steep learning curve!

## Accomplishments that we're proud of
Getting a genuinely useful application up and running, as well as having it hosted online so that it's extremely easy for anyone to access! We'll definitely be using this app whenever we can't decide what to do from now on.

## What we learned
REACT REACT REACT! All of our members had very limited to no experience with React, so getting hands-on experience with it was rewarding (and extremely frustrating at times)!

## What's next for What's the Move?
Implementing the Google Places API would do wonders for getting an initial dataset of options to choose from, all across the country, even if it wasn't quite as personalized as the user-submitted options. Having both would be the best of both worlds.

## More Info
[View more info here!](https://devpost.com/software/what-s-the-move-5lmqed)
