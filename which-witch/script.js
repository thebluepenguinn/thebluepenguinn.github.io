$(function() {
  //first, create a set of questions, answers and results
  var personalityQuiz = {
    questions: [
      {
        title: "What would you do in a situation where you got bombarded with a lot of stressful events and then everyone blames you for reacting in a certain way?",
        answers: [
          {answer: "Take the pain and turn it into art", result: "Stevie Nicks"},
          {answer: " Disappear like a shadow in the night, unbothered. They may blame me but I answer to no one", result: "Rhiannon"},
          {answer: "Become overwhelmed with grief and emotion and lose control", result: "Scarlet Witch"},
          {answer: "Reflect on the situations that occurred and find the best way to move forward", result: "Agatha (Comics)"},
          {answer: "Try and get revenge by taking things that other people hold dearly, or trying to act better than everyone else and look like nothing bothers you", result: "Agatha (MCU)"},
          {answer: "Try to understand the claims and address them with kindness and empathy", result: "Glinda (Oz)" },
          {answer: "Try to fight the claims to preserve my image", result: "Glinda (Wicked)"},
          {answer: "Kill all those that oppose", result: "Elphaba (Oz)"},
          {answer: "Run away and plot a way to turn the tide", result: "Elphaba (Wicked)"}
          ]
      },
     {
        title: "What is something you value in life?",
        answers: [
          {answer: "Love, art, and the ability to create art that speaks to the soul", result: "Stevie Nicks"},
          {answer: "Material things do not concern me. My gift is what the universe has already promised me", result: "Rhiannon"},
          {answer: "Being able to show people that you aren’t the same person you were in the past", result: "Scarlet Witch"},
          {answer: "Being able to guide people and help them in their life, whether that be through good times or bad", result: "Agatha (Comics)"},
          {answer: "Gain as much power as possible because that will gain you respect from others", result: "Agatha (MCU)"},
          {answer: "Kindness and compassion", result: "Glinda (Oz)"},
          {answer: "The opinion and love of others", result: "Glinda (Wicked)"},
          {answer: "Ultimate power and domination", result: "Elphaba (Oz)"},
          {answer: "Knowledge, freedom, and acceptance", result: "Elphaba (Wicked)"}
          ]
      },
        {
        title: "How do you react when other people receive gifts that you wanted?",
        answers: [
          {answer: "Smile, wish them well, and find my own way to get what I want", result: "Stevie Nicks"},
          {answer: "Material things do not concern me. My gift is what the universe has already promised me", result: "Rhiannon"},
          {answer: "Be slightly upset but figure out a way to obtain it on my own", result: "Scarlet Witch"},
          {answer: "I tend not to get jealous with that kind of stuff as I like to see people be happy", result: "Agatha (Comics)"},
          {answer: "Try and take it from them by whatever means necessary", result: "Agatha (MCU)"},
          {answer: "I am happy for them, I hope they find happiness in the gift. Honestly, I probably gave them the gift", result: "Glinda (Oz)"},
          {answer: "I’d be shocked if I didn’t get my way and complain about it to my friends", result: "Glinda (Wicked)"},
          {answer: "I would hunt them down and pry it from their (maybe dead) hands", result: "Elphaba (Oz)"},
          {answer: "I would be upset but keep the hurt to myself", result: "Elphaba (Wicked)"}
          ]
      },
        {
        title: "What color best represents you?",
        answers: [
          {answer: "Black sparkles", result: "Stevie Nicks"},
          {answer: "Midnight blue", result: "Rhiannon"},
          {answer: "Red", result: "Scarlet Witch"},
          {answer: "Purple", result: "Agatha (Comics)"},
          {answer: "Moody Purple", result: "Agatha (MCU)"},
          {answer: "Pink", result: "Glinda (Oz)"},
          {answer: "Pink Sparkles", result: "Glinda (Wicked)"},
          {answer: "Black", result: "Elphaba (Oz)"},
          {answer: "Green", result: "Elphaba (Wicked)"}
          ]
      },
        {
        title: "What are you most afraid of?",
        answers: [
          {answer: "Losing my voice, both literally and figuratively", result: "Stevie Nicks"},
          {answer: "Being caged and confined", result: "Rhiannon"},
          {answer: "Reverting back to who I was and letting down the people around me, but also not being able to protect the people whom I care for", result: "Scarlet Witch"},
          {answer: "Not being able to successfully guide people and help them be their best", result: "Agatha (Comics)"},
          {answer: "Not being able to attain enough status in the world and not making it to the top", result: "Agatha (MCU)"},
          {answer: "Not being able to protect others", result: "Glinda (Oz)"},
          {answer: "Not being famous and loved by all", result: "Glinda (Wicked)"},
          {answer: "A little girl and her rat dog", result: "Elphaba (Oz)"},
          {answer: "Not changing the world", result: "Elphaba (Wicked)"}
          ]
      },
        {
        title: "How would you react if you saw someone being bullied?",
        answers: [
          {answer: "Step in and tell them to stand tall, to know their own worth, and to let the world hear their song", result: "Stevie Nicks"},
          {
            answer: "Whisper words of strength to the one being bullied and make them believe in their own power",
            result: "Rhiannon"
          },
          {
            answer: "Go and defend the person being bullied, possibly start an altercation if the instigator doesn't cease",
            result: "Scarlet Witch"
          },
          {
            answer: "Go over and figure out what the situation is and try to de-escalate in a calm manner and come to a mutual agreement",
            result: "Agatha (Comics)"
          },
          {
            answer: "Sit there and watch to see what happens", 
            result: "Agatha (MCU)"
          },
          {
            answer: "Stand up for them, unless they were ugly, then I would just ignore it",
            result: "Glinda (Oz)"
          },
          {
            answer: "Stand up for them so others will see me as kind",
            result: "Glinda (Wicked)"
          },
          {
            answer: "I don’t care, it has nothing to do with me and my work",
            result: "Elphaba (Oz)"
          },
          {
            answer: "Stand up for them because I know what it is like to be an outsider",
            result: "Elphaba (Wicked)"
          }
          ]
      },
        {
        title: "What is your go-to accessory?",
        answers: [
          {
            answer: "My flowing shawl",
            result: "Stevie Nicks"
          },
          {
            answer: "None, I don't need any accessories",
            result: "Rhiannon"
          },
          {
            answer: "My book",
            result: "Scarlet Witch"
          },
          {
            answer: "My broach",
            result: "Agatha (Comics)"
          },
          {
            answer: "My rabbit", 
            result: "Agatha (MCU)"
          },
          {
            answer: "My tiara",
            result: "Glinda (Oz)"
          },
          {
            answer:" My magic wand",
            result: "Glinda (Wicked)"
          },
          {
            answer:"My broom",
            result: "Elphaba (Oz)"
          },
          {
            answer:"My pointed hat my friend gifted me",
            result: "Elphaba (Wicked)"
          }
          ]
      },
        {
        title: "How do you interact with someone when arguing something?",
        answers: [
          {
            answer: "Speak my truth, let my heart guide my words, and let the music say the rest",
            result: "Stevie Nicks"
          },
          {
            answer: "I do not argue, I let them argue with the air",
            result: "Rhiannon"
          },
          {
            answer: "Say what I think and be brutally honest and defend myself when needed",
            result: "Scarlet Witch"
          },
          {
            answer: "Try and guide them to see why they are thinking in a particular way and ask insightful questions",
            result: "Agatha (Comics)"
          },
          {
            answer: "Judge them internally and make undermining comments", 
            result: "Agatha (MCU)"
          },
          {
            answer: "De-escalate the situation to make both sides happy",
            result: "Glinda (Oz)"
          },
          {
            answer:"Try to find a way to make the conversation about me",
            result: "Glinda (Wicked)"
          },
          {
            answer:"People are talking to me? On purpose?",
            result: "Elphaba (Oz)"
          },
          {
            answer:"Listen attentively and butt in with my personal opinions, even when no one cares",
            result: "Elphaba (Wicked)"
          }
          ]
      },
        {
        title: "How do you calm yourself down?",
        answers: [
          {answer: "I light a candle, close my eyes, and let the music take me where it needs to go", result: "Stevie Nicks"},
          {answer: "I wander into the wild, feel the earth beneath me, and let the moonlight take over", result: "Rhiannon"},
          {answer: "Hang out with the people I love", result: "Scarlet Witch"},
          {answer: "Meditate", result: "Agatha (Comics)"},
          {answer: "Scheming against other", result: "Agatha (MCU)"},
          {answer: "Try to breathe and stay mindful", result: "Glinda (Oz)"},
          {answer: "I can’t help it, I’ll freak out with my friends", result: "Glinda (Wicked)"},
          {answer: "Why do I need to calm down? I’m going to express my feelings", result: "Elphaba (Oz)"},
          {answer: "I would isolate myself and think rationally", result: "Elphaba (Wicked)"}
        ]
      },
        {
        title: "What do you think of children?",
        answers: [
          {answer: "I love them in their own way, but I never wanted to have children myself. My music and my freedom are my children", result: "Stevie Nicks"},
          {answer: "I love them dearly. They’re full of magic and untold secrets", result: "Rhiannon"},
          {answer: "I love them and want some of my own", result: "Scarlet Witch"},
          {answer: "I am indifferent about them", result: "Agatha (Comics)"},
          {answer: "Love them dearly", result: "Agatha (MCU)"},
          {answer: "I love all people, especially children", result: "Glinda (Oz)"},
          {answer:"Kind of grimey but I’ll be nice because that is what is expected", result: "Glinda (Wicked)"},
          {answer:"I hate them, they are gross", result: "Elphaba (Oz)"},
          {answer:"I have no feelings as long as they don’t cross me", result: "Elphaba (Wicked)"}
        ]
      },
        {
        title: "What type of music do you like to listen to?",
        answers: [
          {answer: "Spiritual music with hidden meanings, something that tells a story", result: "Stevie Nicks"},
          {answer: "Ominous music that whispers secrets and makes you feel something deep inside", result: "Rhiannon"},
          {answer: "Ominous music that has a hidden meaning", result: "Scarlet Witch"},
          {answer: "Spiritual music.", result: "Agatha (Comics)"},
          {answer: "Dark gothic music", result: "Agatha (MCU)"},
          {answer: "Sweet and comforting melodies", result: "Glinda (Oz)"},
          {answer:"Beautiful operatic music", result: "Glinda (Wicked)"},
          {answer:"Music is gross", result: "Elphaba (Oz)"},
          {answer:"Powerful belting", result: "Elphaba (Wicked)"}
        ]
      },
        {
        title: "How would your close friends describe you?",
        answers: [
          {answer: "A mystical force, always dancing with the wind", result: "Stevie Nicks"},
          {answer: "Strong, independent, a little hard to read, but someone they can always count on", result: "Rhiannon"},
          {answer: "Strong, independent, and doesn’t get walked over by others", result: "Scarlet Witch"},
          {answer: "A helper and filled with wisdom", result: "Agatha (Comics)"},
          {answer: "It's hard for me to make friends, I’m skeptical of a lot of people", result: "Agatha (MCU)"},
          {answer: "Beautiful and kind", result: "Glinda (Oz)"},
          {answer:"Popular and perfect", result: "Glinda (Wicked)"},
          {answer:"Friends are for the weak", result: "Elphaba (Oz)"},
          {answer:"Hardheaded and determined", result: "Elphaba (Wicked)"}
        ]
      },
        {
        title: "What word or words best describe you?",
        answers: [
          {answer: "Enigmatic. Free-spirited. A bit of a poet in the dark", result: "Stevie Nicks"},
          {answer: "Mysterious and untamed", result: "Rhiannon"},
          {answer: "Strong and independent", result: "Scarlet Witch"},
          {answer: "Calm and smart", result: "Agatha (Comics)"},
          {answer: "Observant and think things through", result: "Agatha (MCU)"},
          {answer: "Goodness", result: "Glinda (Oz)"},
          {answer:"Perfection", result: "Glinda (Wicked)"},
          {answer:"Evil", result: "Elphaba (Oz)"},
          {answer:"Myself", result: "Elphaba (Wicked)"}
        ]
      },
    {
        title: "What's the biggest red flag in another person?",
        answers: [
          {answer: "Not telling the truth and making me look like the bad guy", result: "Stevie Nicks"},
          {answer: "Someone who’s afraid of the unknown or too afraid to live fully", result: "Rhiannon"},
          {answer: "Not telling the truth and making me look like the bad guy", result: "Scarlet Witch"},
          {answer: "Not knowing how your actions affect you in life", result: "Agatha (Comics)"},
          {answer: "Not wanting to be the best at everything you do", result: "Agatha (MCU)"},
          {answer: "Being ugly", result: "Glinda (Oz)"},
          {answer:"Not loving me", result: "Glinda (Wicked)"},
          {answer:"Being pesky", result: "Elphaba (Oz)"},
          {answer:"Not being truthful", result: "Elphaba (Wicked)"}
        ]
      },
       {
        title: "What is your fashion sense like?",
        answers: [
          {answer: "I wear a lot of black; flowy, ethereal outfits", result: "Stevie Nicks"},
          {answer: "Flowing, dark, and mysterious. I dress for the moon and the night", result: "Rhiannon"},
          {answer: "Like clothes that pop in color and make me feel elegant (reds, and maroons)", result: "Scarlet Witch"},
          {answer: "More calming tones (blues and whites)", result: "Agatha (Comics)"},
          {answer: "Dark and sleek (black, grey, purple)", result: "Agatha (MCU)"},
          {answer: "Elegant", result: "Glinda (Oz)"},
          {answer:"Preppy and expensive", result: "Glinda (Wicked)"},
          {answer:"Whatever I have around", result: "Elphaba (Oz)"},
          {answer:"Why would I care for fashion when more important things are happening?", result: "Elphaba (Wicked)"}
        ]
      },
       {
        title: "How would you act if a stranger walked up to you and seemed to be lost?",
        answers: [
          {answer: "I’d offer guidance with a song in my heart, but I’m still watching", result: "Stevie Nicks"},
          {answer: "I’d give them directions, but I’d keep my guard up and watch closely", result: "Rhiannon"},
          {answer: "Give directions but be skeptical about their intentions when they walk up to me", result: "Scarlet Witch"},
          {answer: "Happily guide them to the place they need to be, maybe even walk with them so they end up in the right place", result: "Agatha (Comics)"},
          {answer: "Ignore them", result: "Agatha (MCU)"},
          {answer: "Direct them to where they need to go", result: "Glinda (Oz)"},
          {answer:"Help them if others are around so I seem kind", result: "Glinda (Wicked)"},
          {answer:"Find a way to hurt or scare them", result: "Elphaba (Oz)"},
          {answer:"Offer my help, if they would take it", result: "Elphaba (Wicked)"}
        ]
      },
       {
        title: "How would you react if someone did you dirty?",
        answers: [
          {answer: "I’d keep it inside, let it fester, then write a song about it.", result: "Stevie Nicks"},
          {answer: "I’d keep my calm, but eventually, it will come back to them. The wind always balances things out", result: "Rhiannon"},
          {answer: "Don't do anything in the moment and bottle it up until eventually it becomes too much and you break", result: "Scarlet Witch"},
          {answer: "Forgive and try to help them not do it again", result: "Agatha (Comics)"},
          {answer: "Act as if you forgave them but are plotting against them", result: "Agatha (MCU)"},
          {answer: "Forgive them with grace", result: "Glinda (Oz)"},
          {answer:"Get my friends to support me and restore my image", result: "Glinda (Wicked)"},
          {answer:"Find a way to get back at them, using violence if possible", result: "Elphaba (Oz)"},
          {answer:"I am used to it, I would do nothing", result: "Elphaba (Wicked)"}
        ]
      },
       {
        title: "If you had a super power what would it be?",
        answers: [
          {answer: "To travel through time and space, collecting memories and stories", result: "Stevie Nicks"},
          {answer: "To disappear into the night, to move through dreams, and to change shape at will", result: "Rhiannon"},
          {answer: "Being able to get into other peoples heads", result: "Scarlet Witch"},
          {answer: "Being able to help people control the path they walk in life", result: "Agatha (Comics)"},
          {answer: "Being able to gain power for my benefit", result: "Agatha (MCU)"},
          {answer: "Power to go anywhere I want", result: "Glinda (Oz)"},
          {answer:"Power to repair goods for others", result: "Glinda (Wicked)"},
          {answer:"Ultimate control over others", result: "Elphaba (Oz)"},
          {answer:"Something to protect myself and those less fortunate", result: "Elphaba (Wicked)"}
        ]
      },
       {
        title: "What is your best friend like?",
        answers: [
          {answer: "A soul like mine, wild and free, but they ground me when I’m floating too high", result: "Stevie Nicks"},
          {answer: "Fiery, strong, and someone who understands my wild side", result: "Rhiannon"},
          {answer: "Someone who is strong minded", result: "Scarlet Witch"},
          {answer: "Someone who can help guide me to my best self", result: "Agatha (Comics)"},
          {answer: "I stay to myself", result: "Agatha (MCU)"},
          {answer: "Beautiful", result: "Glinda (Oz)"},
          {answer:"Someone who worships me", result: "Glinda (Wicked)"},
          {answer:"I don’t need friends, I have my subordinates though", result: "Elphaba (Oz)"},
          {answer:"Someone who truly understands me and cares for what I care for", result: "Elphaba (Wicked)"}
        ]
      },
       {
        title: "What do you like to do for fun?",
        answers: [
          {answer: "Dance under the moon, sing with my soul, and live in the moment", result: "Stevie Nicks"},
          {answer: "Wander, dance under the stars, and listen to the whispers of the world around me", result: "Rhiannon"},
          {answer: "Learn about new things", result: "Scarlet Witch"},
          {answer: "Meditate", result: "Agatha (Comics)"},
          {answer: "People watch", result: "Agatha (MCU)"},
          {answer: "Check in on my friends", result: "Glinda (Oz)"},
          {answer:"Talk about fashion with my friends", result: "Glinda (Wicked)"},
          {answer:"Make my servants do things for me", result: "Elphaba (Oz)"},
          {answer:"Spend time with my cat and study", result: "Elphaba (Wicked)"}
        ]
      },
       {
        title: "What is your ideal way to spend a day off?",
        answers: [
          {
            answer: "Wandering through nature and brainstorming lyrics for my next song",
            result: "Stevie Nicks"
          },
          {
            answer: "Drifting from place to place, never tied down, always searching for something unseen",
            result: "Rhiannon"
          },
          {
            answer: "Stay in and chill, maybe take a calming bath",
            result: "Scarlet Witch"
          },
          {
            answer: "Be out in nature",
            result: "Agatha (Comics)"
          },
          {
            answer: "Stay in the dark and sleep", 
            result: "Agatha (MCU)"
          },
          {
            answer: "Spend time meeting new people",
            result: "Glinda (Oz)"
          },
          {
            answer:"Invite all my friends to some place beautiful",
            result: "Glinda (Wicked)"
          },
          {
            answer:"Continue plotting",
            result: "Elphaba (Oz)"
          },
          {
            answer:"There are no breaks in life, I would continue my tasks",
            result: "Elphaba (Wicked)"
          }
          ]
      },
       {
        title: "How do you handle betrayal?",
        answers: [
          {
            answer: "Turn my heartbreak into poetry and let the world hear my sorrow in song",
            result: "Stevie Nicks"
          },
          {
            answer: "Disappear into the sky like I was never there to begin with, leaving them to wonder if  was even real",
            result: "Rhiannon"
          },
          {
            answer: "Stop trusting people and do it myself",
            result: "Scarlet Witch"
          },
          {
            answer: "Forgive and try to help the individual",
            result: "Agatha (Comics)"
          },
          {
            answer: "Seek revenge", 
            result: "Agatha (MCU)"
          },
          {
            answer: "I forgive all and hope they find clarity in the future",
            result: "Glinda (Oz)"
          },
          {
            answer:"I would make sure no one is kind to them again",
            result: "Glinda (Wicked)"
          },
          {
            answer:"Kill all those who cross me",
            result: "Elphaba (Oz)"
          },
          {
            answer:"Feel the emotions inside but never project them unless they become too much",
            result: "Elphaba (Wicked)"
          }
          ]
      },
       {
        title: "What is your greatest strength?",
        answers: [
          {
            answer: "My ability to turn pain into beauty and share it with the world",
            result: "Stevie Nicks"
          },
          {
            answer: "My mystery, no one ever truly knows me, and that is my power",
            result: "Rhiannon"
          },
          {
            answer: "Being able to stand on my own",
            result: "Scarlet Witch"
          },
          {
            answer: "My knowledge",
            result: "Agatha (Comics)"
          },
          {
            answer: "Being able to read people's intentions", 
            result: "Agatha (MCU)"
          },
          {
            answer: "My kindness",
            result: "Glinda (Oz)"
          },
          {
            answer:"My influence",
            result: "Glinda (Wicked)"
          },
          {
            answer:"My broom",
            result: "Elphaba (Oz)"
          },
          {
            answer:"My brain",
            result: "Elphaba (Wicked)"
          }
          ]
      },
       {
        title: "If you had unlimited power for one day, what would you do?",
        answers: [
          {
            answer: "Create a dream world where everyone can feel the music in their soul",
            result: "Stevie Nicks"
          },
          {
            answer: "Run wild through the night sky, traveling between planes of reality",
            result: "Rhiannon"
          },
          {
            answer: "Try and save those I love",
            result: "Scarlet Witch"
          },
          {
            answer: "Use it to spread knowledge and guide people",
            result: "Agatha (Comics)"
          },
          {
            answer: "Make myself better than everyone", 
            result: "Agatha (MCU)"
          },
          {
            answer: "Resolve all the pain and anguish in the world",
            result: "Glinda (Oz)"
          },
          {
            answer:"Solve world hunger, but make sure everyone knew it was me",
            result: "Glinda (Wicked)"
          },
          {
            answer:"Take control of the entire world",
            result: "Elphaba (Oz)"
          },
          {
            answer:"Focus on saving those who need help the most",
            result: "Elphaba (Wicked)"
          }
          ]
      },
       {
        title: "What kind of reputation do you want?",
        answers: [
          {
            answer: "A legend, someone whose words and voice live on forever in people’s hearts",
            result: "Stevie Nicks"
          },
          {
            answer: "An enigma, someone no one can ever fully grasp, yet they dream of me forever",
            result: "Rhiannon"
          },
          {
            answer: "Known for trying to help those I love deeply",
            result: "Scarlet Witch"
          },
          {
            answer: "Known for helping others achieve the best version of themselves",
            result: "Agatha (Comics)"
          },
          {
            answer: "Feared for my power", 
            result: "Agatha (MCU)"
          },
          {
            answer: "To be beautiful and kind",
            result: "Glinda (Oz)"
          },
          {
            answer:"To be the perfect one, kind to others",
            result: "Glinda (Wicked)"
          },
          {
            answer:"To be so feared, no one would dare cross me",
            result: "Elphaba (Oz)"
          },
          {
            answer:"To be the one who stands up for others and does what is right, even when everyone is against me",
            result: "Elphaba (Wicked)"
          }
          ]
      },
    {
        title: "What’s your leadership style?",
        answers: [
          {
            answer: "Gentle yet firm, leading with creativity and intuition rather than control",
            result: "Stevie Nicks"
          },
          {
            answer: "I lead by being untamed, inspiring others to find their own freedom",
            result: "Rhiannon"
          },
          {
            answer: "I tend to find working alone is better",
            result: "Scarlet Witch"
          },
          {
            answer: "Calm and insightful to new paths",
            result: "Agatha (Comics)"
          },
          {
            answer: "Just tell people what to do and not take suggestions", 
            result: "Agatha (MCU)"
          },
          {
            answer: "Help guide people to the correct answer, don’t give away the answers",
            result: "Glinda (Oz)"
          },
          {
            answer:"Just follow me and everything will be great! I don’t need anyone else’s opinions",
            result: "Glinda (Wicked)"
          },
          {
            answer:"Command others. There is no room for failure",
            result: "Elphaba (Oz)"
          },
          {
            answer:"I work by myself, there is no one that would help me anyways",
            result: "Elphaba (Wicked)"
          }
          ]
      },
      {
        title: "What word or words best describes you?",
        answers: [
          {
            answer: "Influential",
            result: "Stevie Nicks"
          },
          {
            answer: "Free-spirited",
            result: "Rhiannon"
          },
          {
            answer: "Outcast",
            result: "Scarlet Witch"
          },
          {
            answer: "Spiritual",
            result: "Agatha (Comics)"
          },
          {
            answer: "Judgemental", 
            result: "Agatha (MCU)"
          },
          {
            answer: "Kind",
            result: "Glinda (Oz)"
          },
          {
            answer:"Evil",
            result: "Glinda (Wicked)"
          },
          {
            answer:"Evil",
            result: "Elphaba (Oz)"
          },
          {
            answer:"Independent",
            result: "Elphaba (Wicked)"
          }
          ]
      },
      {
        title: "What role do you play in your friend group?",
        answers: [
          {
            answer: "The mom friend",
            result: "Stevie Nicks"
          },
          {
            answer: "The hipster friend",
            result: "Rhiannon"
          },
          {
            answer: "I give brutally honest advice no matter what",
            result: "Scarlet Witch"
          },
          {
            answer: "The therapist",
            result: "Agatha (Comics)"
          },
          {
            answer: "I sit back and watch", 
            result: "Agatha (MCU)"
          },
          {
            answer: "The mother of the group, making sure everyone is safe",
            result: "Glinda (Oz)"
          },
          {
            answer:"The leader",
            result: "Glinda (Wicked)"
          },
          {
            answer:"I don’t need friends",
            result: "Elphaba (Oz)"
          },
          {
            answer:"The argumentative one",
            result: "Elphaba (Wicked)"
          }
          ]
      },
      {
        title: "What do you do when faced with a difficult choice?",
        answers: [
          {
            answer: "Trust my heart, even if it leads me into sorrow, because emotions are meant to be felt",
            result: "Stevie Nicks"
          },
          {
            answer: "I don’t make choices, I let fate decide for me",
            result: "Rhiannon"
          },
          {
            answer: "Act with power and effectiveness to get the situation finished",
            result: "Scarlet Witch"
          },
          {
            answer: "Think it out thoroughly",
            result: "Agatha (Comics)"
          },
          {
            answer: "Execute the first thing that comes to mind", 
            result: "Agatha (MCU)"
          },
          {
            answer: "Choose the one best for all",
            result: "Glinda (Oz)"
          },
          {
            answer:"Can I not have both?",
            result: "Glinda (Wicked)"
          },
          {
            answer:"Get both no matter what",
            result: "Elphaba (Oz)"
          },
          {
            answer:"Make the best choice for those less privileged",
            result: "Elphaba (Wicked)"
          }
          ]
      },
      {
        title: "What kind of magic would you specialize in?",
        answers: [
          {
            answer: "Magic brought to life through song, enchanting those who listen",
            result: "Stevie Nicks"
          },
          {
            answer: "The magic of illusion and flight",
            result: "Rhiannon"
          },
          {
            answer: "Destroying things and creating new things",
            result: "Scarlet Witch"
          },
          {
            answer: "Healing people",
            result: "Agatha (Comics)"
          },
          {
            answer: "Draining others of their power", 
            result: "Agatha (MCU)"
          },
          {
            answer: "Protecting and guiding others",
            result: "Glinda (Oz)"
          },
          {
            answer:"Fixing broken things",
            result: "Glinda (Wicked)"
          },
          {
            answer:"Fire",
            result: "Elphaba (Oz)"
          },
          {
            answer:"Moving things with my mind",
            result: "Elphaba (Wicked)"
          }
          ]
      },
      {
        title: "What is your ultimate goal in life?",
        answers: [
          {
            answer: "To create beauty from my soul and leave behind a legacy of music that people will sing long after I’m gone",
            result: "Stevie Nicks"
          },
          {
            answer: "To remain free, untethered, and always just out of reach",
            result: "Rhiannon"
          },
          {
            answer: "Have a family",
            result: "Scarlet Witch"
          },
          {
            answer: "Help people become the best version of themselves",
            result: "Agatha (Comics)"
          },
          {
            answer: "To get as much success and power as possible", 
            result: "Agatha (MCU)"
          },
          {
            answer: "To help serve others",
            result: "Glinda (Oz)"
          },
          {
            answer:"Be the best",
            result: "Glinda (Wicked)"
						
          },
          {
            answer:"Rule over others",
            result: "Elphaba (Oz)"
          },
          {
            answer:"Protect those that need help the most",
            result: "Elphaba (Wicked)"
          }
          ]
      },
    ],
    results: ["Stevie Nicks", "Rhiannon", "Scarlet Witch", "Agatha (Comics)", "Agatha (MCU)", "Glinda (Oz)", "Glinda (Wicked)", "Elphaba (Oz)", "Elphaba (Wicked)"],
    descriptions: [
      "You are Stevie Nicks",
      "You are Rhiannon",
      "You are Scarlet Witch",
      "You are Agatha (Comics)",
      "You are Agatha (MCU)",
      "You are Glinda (Oz)",
      "You are Glinda (Wicked)",
      "You are Elphaba (Oz)",
      "You are Elphaba (Wicked)",
    ]
  };
	//end of quiz
	
	 function randomize(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  let index = 0;
  let collectedAnswers = [];
  const startingBtn = $("#start");

  startingBtn.on("click", function () {
    $(this).remove();
    $("body").append('<div id="testBoard" class="board"></div>');

    // Randomize and keep only 15 questions
    personalityQuiz.questions = randomize(personalityQuiz.questions).slice(0, 15);

    createQuestion();
  });

  function createQuestion() {
    if (index < personalityQuiz.questions.length) {
      const question = personalityQuiz.questions[index];
      const answers = randomize([...question.answers]);

      const testBoard = $("#testBoard").empty();
      testBoard.append(`<h5 class='title'>${question.title}</h5><div class='quizDiv'></div>`);
      const quizDiv = testBoard.find(".quizDiv");

      answers.forEach((ans, idx) => {
        const inputId = `answer-${index}-${idx}`;
        quizDiv.append(`
          <input type='radio' id='${inputId}' name='question' value='${ans.result}' ${collectedAnswers[index] === ans.result ? "checked" : ""}>
          <label for='${inputId}'>${ans.answer}</label><br>
        `);
      });

      quizDiv.append(`
        <div class="buttonContainer">
          ${index > 0 ? "<button class='backButton'>Back</button>" : ""}
          <button class='quizButton'>Next</button>
        </div>
      `);
    } else {
      showResults();
    }
  }

  function showResults() {
    const resultsBoard = $("<div>", { class: "resultsBoard" }).appendTo("body");
    $("body").children().not(resultsBoard).hide();

    const resultCounts = personalityQuiz.results.map(result => ({
      name: result,
      count: collectedAnswers.filter(item => item === result).length
    })).sort((a, b) => b.count - a.count);

    const winner = resultCounts[0];
    const isTie = resultCounts[1] && winner.count === resultCounts[1].count;

    resultsBoard.append(`
      <p class='resultsParagraph'>
        ${personalityQuiz.descriptions[isTie ? 3 : personalityQuiz.results.indexOf(winner.name)]}
      </p>
    `);
  }

  $("body").on("click", ".quizButton", function () {
    const checkedInput = $("input[name='question']:checked");
    if (!checkedInput.length) {
      alert("Before moving forward, choose an answer!");
      return;
    }
    collectedAnswers[index] = checkedInput.val();
    index++;
    createQuestion();
  });

  $("body").on("click", ".backButton", function () {
    index--;
    createQuestion();
  });
});
