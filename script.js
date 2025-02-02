const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const okBtn = document.querySelector(".ok-btn");
const questionone = document.querySelector(".question-one");
const page = document.querySelector(".page");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "I love you too hehe <3";
    gif.src = "https://media.tenor.com/mxg1RwQmzQQAAAAj/peach-goma-love-pat-head-cheek.gifhttps://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";
    yesBtn.style.display = "ok";
    okBtn.style.display = "ok";

    // Next Page without buttons
    okBtn.addEventListener("click", () => {
        question.innerHTML = "Beware: Long Message Ahead";
        //questionone.innerHTML = "Bawal mag-cringe magkakavirus ka &#x1FAF5&#x1F60E;";
        //questionone.innerHTML = "<p style=\"text-align: left;\">This text is aligned to the left.</p>";
        gif.src = "https://media.tenor.com/WXjpEaRaK54AAAAM/heart.gif";
        //gif.style.display = "none";

        yesBtn.style.display = "none";
        //okBtn.style.display = "none";

        
        // 4th PAGE
        okBtn.addEventListener("click", () => {
            question.innerHTML = "&#128154;&#x1FA77;";
            //questionone.innerHTML = "Express Your Feelings: Start by expressing your love and the emotions you feel when you think of the person. Use personal anecdotes and memories to illustrate your points. <br><br> For example, you might write, \"Thinking about spending my whole life with you, enjoying life’s wonderful moments, and growing old together makes me very happy and excited.\" Be Specific: Mention specific qualities or actions that the person does that make you feel loved and cherished. This could be something as simple as the way they smile or a particular habit they have. <br>Use Metaphors and Analogies: Comparing your feelings to natural phenomena or other relatable concepts can make your letter more vivid and memorable. For instance, you might say, \"You are the sun that lights up my day, and the moon that guides me through the night.\" Reflect on Shared Experiences: Recall special moments you've shared and how they have shaped your relationship. This not only shows that you value the time you've spent together but also helps to deepen the bond between you. Look to the Future: Express your hopes and dreams for the future together. This can be as simple as saying, \"I eagerly await the chapters we will write together.\" Use Quality Stationery: Consider using nice paper and perhaps even a wax seal to add a touch of elegance and thoughtfulness to your letter. Keep It Honest and Personal: Avoid clichés and generic phrases. Write from the heart and let your true feelings come through. Here is a sample structure for your letter";
            questionone.innerHTML = "<p>To my love,</p> Korni na agad yung greeting sorry HAHAHAH you know I’m not good with this kind of stuff so don’t judge me. But I still want to write this letter because I want to express myself and for you to know how much I love and admire you. <br><br> Do you remember when I said that I don’t want to be with anyone in this lifetime? I’ll never thought I’ll do something like this for someone but you helped me change my mind. By knowing you little by little you slowly yet surely engraved yourself in my heart. The more I know about you the more my feelings for you deepens. <br><br> Honestly speaking I wasn’t expecting anything from the start. I have my days when I want to turn away and just end it, because it all feels so unfamiliar to me and I don’t know what to do. I feel like I can’t give you the love you deserve because of how I am, how I’m not very affectionate or romantic compared to others, that I might be a boring partner. I can’t help but compare myself to others even though I know I shouldn’t. Yet I still don’t want to see you end up with someone else so I’m sorry for being selfish. That’s why I’m doing my best to express myself more and doing things I don’t normally do. To go out my comfort zone and also grow as a person. You helped me realize that I shouldn’t look at everything in a logical way that I can also be in tune with my own emotions and be vulnerable to others. That I should also think about what I feel and want. Knowing you is a blessing and I want you to know that.";
            gif.style.display = "none";
            page.innerHTML = "1/4";
    
            yesBtn.style.display = "none";

        // 5th PAGE
        okBtn.addEventListener("click", () => {
            question.innerHTML = "&#128154;&#x1FA77;";
            questionone.innerHTML = "The more I know you the more I admire you as a person. I can’t believe there’s a person as strong, hardworking, kind and loving as you. Maybe you think you are weak because of what you’ve gone through and how you’re saying you’re being emotionally unstable. But for me those things just made you look stronger. The way that you’re still doing your best despite everything. Working hard at your jobs so you can help your family and save money for your tuition fees, studying hard so you can maintain your scholarship in the past, looking out for your brothers and mom to the point that you feel angry for their sake when they are wronged. I admire everything. I don’t know how you did it but you still did it. <br><br> Yet I am also worried about you how you seem to neglect your health along the way. Not only physically but also mentally. All those stresses piling up and how you gotten sick twice now in just a month. I feel helpless I want to scold you for not taking care of yourself but I just can’t get mad at you. At the same time, I feel powerless since I can’t take care of you myself due to distance and I’m not sure what I can do. That’s why I want to be there for you always when you need someone to listen to you, since I know that’s what I’m good at. I want you to open up to me and share your problems with me to lighten your load. <br><br> It doesn’t have to be just problems either, I also want to know when your head gets caught up in overthinking or whenever you feel down. I might not understand fully what goes in your mind or what you are feeling but just know that I will never judge you or think less of you no matter what you say or do. I will always listen to you patiently and be gentle with you. You can lean on me and don’t ever think that you’re a burden to me. Because you’re not. I will never get tired of you because you’re not hard to love as you might think.";
            page.innerHTML = "2/4";
    
        // 6th PAGE
        okBtn.addEventListener("click", () => {
            question.innerHTML = "&#128154;&#x1FA77;";
            questionone.innerHTML = "I might not show it much but I really do love you. I love when you talk about things that you enjoy, including the little stories you say like that one time when a random woman fell asleep beside you in the bus xD. No matter how big or small I enjoy listening to you it’s like seeing the world in your eyes. But don’t worry I also love you even when you don’t feel like talking. I’m not a talkative person either so I understand. I also enjoy just being silent with you watching movies or playing games (kahit talo minsan sa ML HAHHAHAH) I just love spending time with you no matter what we do. <br><br> I love when you share your achievements with me, I don’t know why but I also feel very happy and proud of you when you achieve something. I love seeing you enjoy your hobbies, reigniting your passion no matter if its in drawing, writing or others. That’s why I feel unhappy when you belittle your skills since for me what you create is beautiful because you made it out of enjoyment and fun. I want to see you happy doing things that you love. I want you to enjoy life, to make you smile and make you laugh with my corny jokes. I want to see you thrive and achieve your dreams, you don’t have to feel down if you feel you’re left behind in college because this might sound cliché but we really do have our own time. And if you feel like you’re struggling just tell me I’m always there to support you. I want to take care of you to be gentle with you as long as you let me. You can tell me anything, be clingy with me, be comfortable around me you don’t have to worry a thing because you’re already special to me. That’s why I won’t leave. As long as you still love me, I’m not leaving. Because I love you.";
            page.innerHTML = "3/4";
    
        // 7th PAGE
        okBtn.addEventListener("click", () => {
            question.innerHTML = "&#128154;&#x1FA77;";
            questionone.innerHTML = "I’m also not a perfect person so I hope you can be patient with me too. I’m sorry if I’m not that talkative about myself I’m just used to being like this for so long but I promise I’m also trying to be vulnerable to you. I always look forward spending time together with you and I look forward for our future together. I hope with this letter you can see how much you matter to me and how deep my feelings for you are. I love you Dannah and I wish you can see yourself in my eyes so you can love yourself as deeply as I do. <p style=\"text-align: right;\">Yours always,<br>Ky</p>";
            page.innerHTML = "4/4";
    
            okBtn.style.display = "none";
            
        })
            
        })
        })
        })
    })
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});