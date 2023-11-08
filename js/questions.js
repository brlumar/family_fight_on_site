const cardData = [
    {
        phrase: 'Name a fruit that is sweet',
        answers: [
            {
                answer: 'pineapple',
                points: '30'
            },
            {
                answer: 'strawberry',
                points: '25'

            },
            {
                answer: 'orange',
                points: '20'

            }, 
            {
                answer: 'grape',
                points: '15'

            }, 
            {
                answer: 'mango',
                points: '10'

            }, 
            {
                answer: 'apple',
                points: '5'

            }, 
         

        ]
    },
    {
        phrase: 'When a baby is crying, what do you think is the problem?',
        answers: [
            {
                answer: 'hungry',
                points: '30'
            },
            {
                answer: 'dirty diaper',
                points: '25'

            },
            {
                answer: 'gas',
                points: '20'

            }, 
            {
                answer: 'sleepy',
                points: '15'

            }, 
            {
                answer: 'teething',
                points: '10'

            }, 
            {
                answer: 'pick me up',
                points: '5'

            }, 
         

        ]
    },
    {
        phrase: 'Name something a baby needs a lot of',
        answers: [
            { answer: 'diapers', points: '30' },
            { answer: 'milk/formula', points: '25' },
            { answer: 'sleep', points: '20' },
            { answer: 'attention', points: '15' },
            { answer: 'love', points: '10' },
            { answer: 'clothes', points: '5' }
        ]
    },
    {
        phrase: 'What is the hardest part about being a new mother?',
        answers: [
            { answer: 'lack of sleep', points: '30' },
            { answer: 'balancing time', points: '25' },
            { answer: 'feeding challenges', points: '20' },
            { answer: 'postpartum recovery', points: '15' },
            { answer: 'baby crying', points: '10' },
            { answer: 'isolation', points: '5' }
        ]
    },
    {
        phrase: 'Name a baby product new parents often receive as a gift',
        answers: [
            { answer: 'onesies', points: '30' },
            { answer: 'baby bottles', points: '25' },
            { answer: 'stroller', points: '20' },
            { answer: 'diaper bag', points: '15' },
            { answer: 'pacifier', points: '10' },
            { answer: 'baby monitor', points: '5' }
        ]
    },
    {
        phrase: 'What is the most common advice given to new mothers?',
        answers: [
            { answer: 'sleep when the baby sleeps', points: '30' },
            { answer: 'trust your instincts', points: '25' },
            { answer: 'take care of yourself', points: '20' },
            { answer: 'ask for help', points: '15' },
            { answer: 'enjoy every moment', points: '10' },
            { answer: 'stay patient', points: '5' }
        ]
    },
    {
        phrase: 'Name a baby milestone parents look forward to',
        answers: [
            { answer: 'first steps', points: '30' },
            { answer: 'first words', points: '25' },
            { answer: 'first tooth', points: '20' },
            { answer: 'potty training', points: '15' },
            { answer: 'first day of school', points: '10' },
            { answer: 'sleeping through the night', points: '5' }
        ]
    },
    {
        phrase: 'What is the most common craving for pregnant women?',
        answers: [
            { answer: 'chocolate', points: '30' },
            { answer: 'ice cream', points: '25' },
            { answer: 'pickles', points: '20' },
            { answer: 'pizza', points: '15' },
            { answer: 'fruit', points: '10' },
            { answer: 'spicy food', points: '5' }
        ]
    },
    {
        phrase: "Name something a baby can do that adults shouldn't",
        answers: [
            { answer: 'crawl', points: '30' },
            { answer: 'eat with hands', points: '25' },
            { answer: 'fit into small spaces', points: '20' },
            { answer: 'sleep anywhere', points: '15' },
            { answer: 'be carried everywhere', points: '10' },
            { answer: 'babble', points: '5' }
        ]
    },
    {
        phrase: 'Name something you need to baby-proof in a house',
        answers: [
            { answer: 'outlets', points: '30' },
            { answer: 'stairs', points: '25' },
            { answer: 'cabinets', points: '20' },
            { answer: 'sharp corners', points: '15' },
            { answer: 'doors', points: '10' },
            { answer: 'appliances', points: '5' }
        ]
    },
    {
        phrase: 'Name something parents do to get a baby to sleep',
        answers: [
            { answer: 'rocking', points: '30' },
            { answer: 'singing lullabies', points: '25' },
            { answer: 'swaddling', points: '20' },
            { answer: 'using a pacifier', points: '15' },
            { answer: 'feeding', points: '10' },
            { answer: 'give her to grandma', points: '5' }
        ]
    },
    {
        phrase: 'Name something a baby does that makes everyone smile',
        answers: [
            { answer: 'dance', points: '30' },
            { answer: 'laugh', points: '25' },
            { answer: 'smile', points: '20' },
            { answer: 'wave', points: '15' },
            { answer: 'play peek-a-boo', points: '10' },
            { answer: 'clap hands', points: '5' }
        ]
    },
    {
        phrase: 'What is the most common baby shower gift?',
        answers: [
            { answer: 'diapers', points: '30' },
            { answer: 'clothes', points: '25' },
            { answer: 'blankets', points: '20' },
            { answer: 'toys', points: '15' },
            { answer: 'baby monitor', points: '10' },
            { answer: 'stroller', points: '5' }
        ]
    },
    {
        phrase: 'Name a common phrase parents say to their baby',
        answers: [
            { answer: 'I love you', points: '30' },
            { answer: 'goodnight', points: '25' },
            { answer: 'sweet dreams', points: '20' },
            { answer: 'be careful', points: '15' },
            { answer: 'you are special', points: '10' },
            { answer: 'sleep tight', points: '5' }
        ]
    },
    {
        phrase: 'What is the most common baby food flavor?',
        answers: [
            { answer: 'banana', points: '30' },
            { answer: 'apple', points: '25' },
            { answer: 'sweet potato', points: '20' },
            { answer: 'peas', points: '15' },
            { answer: 'carrots', points: '10' },
            { answer: 'pear', points: '5' }
        ]
    },
    {
        phrase: 'Name a baby animal that is typically seen in nursery decoration',
        answers: [
            { answer: 'duckling', points: '30' },
            { answer: 'kitten', points: '25' },
            { answer: 'puppy', points: '20' },
            { answer: 'bunny', points: '15' },
            { answer: 'lion cub', points: '10' },
            { answer: 'elephant calf', points: '5' }
        ]
    },
];
