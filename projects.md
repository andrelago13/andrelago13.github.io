---
layout: projects
---

#### [Home](/) | Projects | [Blog](/blog)

# Personal Projects

These are some of the projects I developed on my own or for my degree. There are much more projects I was a part of, but these are the ones I believe better represent my skills and knowledge.

## Voice Interaction Personal Assistant (ongoing)

* Java application running on a Raspberry Pi to interact with voice commands. Some functionalities are setting alarms and timers, scheduling reminders, switching on/off lights and weather forecast.
* Challenges: using design patterns that allow expansibility and using adaptive natural language processing.
* Technologies: Mostly Java, may use Prolog in the future, ([GitHub](https://github.com/andrelago13/JARVIS-Pi)).

# Academic Projects

## Jarvis - Smart Space Management Conversational Assistant

* As my thesis dissertation project, I developed a conversational assistant for the management of IoT smart spaces, **Jarvis**,  that is capable of performing more complex tasks than those of equivalent tools such as the Google Assistant or Amazon Alexa. That project's code, as well as a scientific paper written about its results, can be found [here](https://github.com/andrelago13/jarvis).
* The project used Google's [Dialogflow](https://dialogflow.com/) to create the assistant interface and a JavaEE backend to perform the management tasks. Below are some samples of the supported queries:
    * "Turn on the light"
    * "Turn on the light in 5 minutes"
    * "Turn on the light everyday at 9am"
    * "Turn on the light everyday from 9am to 10am"
    * Edition of rules:
        * User: "What rules are defined for the light?"
        * Jarvis: "You told me to turn on the light everyday at 9am"
        * User: "Change that to 8am"
    * "Why did the light turn on?"
* **Technologies**: Java, Python, Dialogflow, [GitHub](https://github.com/andrelago13/jarvis).

## Highly-scalable IoT data simulator and collector (3 people team project)

* As part of the course of "Cloud and Service Oriented Computing" we developed a set of 2 highly scalable tools.
* One one hand, there was a Docker-ized application that would produce simulated data that represented a temperature or humidity sensor's values throughout a day (using a simple sinusoidal function). This application could then be scaled using Docker Swarm in order to create a huge ammount of constantly flowing data that should be analyzed.
* On the other hand, there was a Function-as-a-Service system that would collect such data, storing it in a MongoDB database and making statistical analysis of the data in order to produce an informative NodeJS dashboard.
* The goal of the project was to understand how such cloud-oriented scalable services work, which was possible both due to the use of Docker Swarm (which easily creates replicas of an application to possibly run on multiple machines) and FaaS techniques (which are called upon request, avoiding the need to have a single always-running server).
* **Technologies**: Java, Docker Swarm, MongoDB, GitLab.

## Public transport route optimizer (3 people team project)

![CAL](/assets/images/cal.jpg)

* Itinerary calculator for a urban city with several means of transport (walk, taxi, bus, underground), that allows the user to specify separate priorities for time, distance and price of the journey.
* Challenges: calculating the weight of edges for the algorithms to do an effective evaluation of paths
* Technologies: C++, [GitHub](https://github.com/gtugablue/CAL-Planeamento-de-itinerarios-multimodais).

## Multiplayer and multi-device pool game (2 people team project)

![LPOOL](/assets/images/lpool.jpg)

Demo on [YouTube](https://www.youtube.com/watch?v=Hgp11t09ssc).

* Billiards game with Android devices as controllers and a desktop server playing the game itself.
* Challenges: developing fast yet efficient communication protocols to improve gameplay quality.
* Most important break-through: using TCP and UDP simultaneously, and using a heartbeat response system to detect user disconnection and allow reconnection.
* Technologies: Java, Eclipse, Android Studio, [GitHub](https://github.com/gtugablue/LPOOL), LibGDX.

## Multi-application store counter manager (2 people team project)

* Two Linux applications using shared memory to manage a store with several counters and clients.
* Challenges: using synchronization methods to prevent data loss, deadlocks and race conditions.
* Technologies: C, Linux, Eclipse, [GitHub](https://github.com/gtugablue/SOPE-Loja-Virtual).