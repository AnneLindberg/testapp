// QuestionCard.tsx
import React, { useState, useRef  } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Animated  } from "react-native";
import { RouteProp } from "@react-navigation/core";
import { MainStackParamList } from "../NavigationParamList";

type QuestionCardProps = {
    route: RouteProp<MainStackParamList, "QuestionCard">;
};

const questions = [
{ id: 1, text: "What's your best memory between us?", categories: ["The Friendly Talks", "The Love Talks"] },
{ id: 2, text: "What's your favorite thing about me?", categories: ["The Friendly Talks", "The Love Talks", "The Deep Talks"] },
{ id: 3, text: "What was your first impression of me?", categories: ["The First Talks"] },
{ id: 4, text: "What's the most important thing in a relationship for you?", categories: ["The Deep Talks", "The Love Talks"] },
{ id: 5, text: "What's your biggest fear in life?", categories: ["The Deep Talks"] },
{ id: 6, text: "What's your favorite way to spend time together?", categories: ["The Friendly Talks", "The Love Talks"] },
{ id: 7, text: "What's the most adventurous thing you've ever done?", categories: ["The Friendly Talks", "The First Talks"] },
{ id: 8, text: "What's your life philosophy?", categories: ["The Deep Talks"] },
{ id: 9, text: "What's your idea of a perfect date?", categories: ["The Love Talks", "The First Talks"] },
{ id: 10, text: "What's the most important lesson you've learned in life?", categories: ["The Deep Talks"] },
{ id: 11, text: "What's a memory that always makes you laugh?", categories: ["The Friendly Talks"] },
{ id: 12, text: "If you could have any superpower, what would it be?", categories: ["The Friendly Talks"] },
{ id: 13, text: "What's the most interesting place you've visited?", categories: ["The Friendly Talks"] },
{ id: 14, text: "Who inspires you the most?", categories: ["The Friendly Talks"] },
{ id: 15, text: "If you could meet any historical figure, who would it be and why?", categories: ["The Friendly Talks"] },
{ id: 16, text: "What's your favorite holiday and why?", categories: ["The Friendly Talks"] },
{ id: 17, text: "What's the best compliment you've ever received?", categories: ["The Friendly Talks"] },
{ id: 18, text: "If you could instantly learn a new skill, what would it be?", categories: ["The Friendly Talks"] },
{ id: 19, text: "What's one thing you love to do in your free time?", categories: ["The Friendly Talks"] },
{ id: 20, text: "If you had to eat one cuisine for the rest of your life, what would it be?", categories: ["The Friendly Talks"] },
{ id: 21, text: "What's the most fun thing we've ever done together?", categories: ["The Friendly Talks"] },
{ id: 22, text: "What's your go-to karaoke song?", categories: ["The Friendly Talks"] },
{ id: 23, text: "Who was your childhood hero?", categories: ["The Friendly Talks"] },
{ id: 24, text: "What's your favorite movie of all time?", categories: ["The Friendly Talks"] },
{ id: 25, text: "If you won the lottery, what would be the first thing you'd buy?", categories: ["The Friendly Talks"] },
{ id: 26, text: "What's one thing on your bucket list?", categories: ["The Friendly Talks"] },
{ id: 27, text: "What's a random act of kindness you've done?", categories: ["The Friendly Talks"] },
{ id: 28, text: "What's the best gift you've ever received?", categories: ["The Friendly Talks"] },
{ id: 29, text: "What's your favorite way to unwind?", categories: ["The Friendly Talks"] },
{ id: 30, text: "What's your favorite season and why?", categories: ["The Friendly Talks"] },
{ id: 31, text: "What's your favorite thing about our relationship?", categories: ["The Love Talks"] },
{ id: 32, text: "What's one thing I do that always makes you smile?", categories: ["The Love Talks"] },
{ id: 33, text: "What's a romantic gesture you'd love to experience?", categories: ["The Love Talks"] },
{ id: 34, text: "How do you define love?", categories: ["The Love Talks", "The Deep Talks"] },
{ id: 35, text: "What's one thing you never want to change about us?", categories: ["The Love Talks"] },
{ id: 36, text: "What does your ideal day with me look like?", categories: ["The Love Talks"] },
{ id: 37, text: "How has our relationship changed you?", categories: ["The Love Talks", "The Deep Talks"] },
{ id: 38, text: "What's your favorite memory of us?", categories: ["The Love Talks"] },
{ id: 39, text: "What's a song that reminds you of me?", categories: ["The Love Talks"] },
{ id: 40, text: "What's something you want us to do together in the future?", categories: ["The Love Talks"] },
{ id: 41, text: "How would you describe our first date in one word?", categories: ["The Love Talks", "The First Talks"] },
{ id: 42, text: "What's the most thoughtful thing anyone's done for you?", categories: ["The Love Talks"] },
{ id: 43, text: "What's the best thing about being in a relationship?", categories: ["The Love Talks"] },
{ id: 44, text: "What's your favorite way to spend time with me?", categories: ["The Love Talks"] },
{ id: 45, text: "What's one adventure you'd like us to go on together?", categories: ["The Love Talks"] },
{ id: 46, text: "What's the sweetest thing someone could say to you?", categories: ["The Love Talks"] },
{ id: 47, text: "What's something you'd like us to try as a couple?", categories: ["The Love Talks"] },
{ id: 48, text: "How do you feel when we're apart?", categories: ["The Love Talks"] },
{ id: 49, text: "What's something you hope never changes about us?", categories: ["The Love Talks"] },
{ id: 50, text: "What's a small thing that I do that means a lot to you?", categories: ["The Love Talks"] },
{ id: 51, text: "What was your first impression of me?", categories: ["The First Talks"] },
{ id: 52, text: "What did you think of me after our first conversation?", categories: ["The First Talks"] },
{ id: 53, text: "What was the first thing that attracted you to me?", categories: ["The First Talks", "The Love Talks"] },
{ id: 54, text: "What's the first thing you noticed about me?", categories: ["The First Talks"] },
{ id: 55, text: "What was your first impression of our relationship?", categories: ["The First Talks"] },
{ id: 56, text: "What did you expect from me on our first date?", categories: ["The First Talks", "The Love Talks"] },
{ id: 57, text: "What do you remember most about our first meeting?", categories: ["The First Talks"] },
{ id: 58, text: "How did you feel when we first held hands?", categories: ["The First Talks", "The Love Talks"] },
{ id: 59, text: "What was your favorite part of our first date?", categories: ["The First Talks"] },
{ id: 60, text: "What's a funny memory from our early days?", categories: ["The First Talks"] },
{ id: 61, text: "When did you first realize you liked me?", categories: ["The First Talks", "The Love Talks"] },
{ id: 62, text: "What's one thing that stood out about me initially?", categories: ["The First Talks"] },
{ id: 63, text: "What did you think of my friends or family when you first met them?", categories: ["The First Talks"] },
{ id: 64, text: "What were you nervous about when we first met?", categories: ["The First Talks"] },
{ id: 65, text: "What was a surprising thing you learned about me early on?", categories: ["The First Talks"] },
{ id: 66, text: "What's a memorable place we went to together early on?", categories: ["The First Talks"] },
{ id: 67, text: "How did you feel after our first date?", categories: ["The First Talks"] },
{ id: 68, text: "Did you have any expectations for us when we first started dating?", categories: ["The First Talks"] },
{ id: 69, text: "What was the moment that made you want to get closer to me?", categories: ["The First Talks", "The Love Talks"] },
{ id: 70, text: "What was the first big thing you learned about me?", categories: ["The First Talks"] },
{ id: 81, text: "What's your proudest accomplishment?", categories: ["The Deep Talks"] },
{ id: 82, text: "What's one thing you want to achieve before you die?", categories: ["The Deep Talks"] },
{ id: 83, text: "How do you view failure?", categories: ["The Deep Talks"] },
{ id: 84, text: "What's the most significant experience that has shaped who you are?", categories: ["The Deep Talks"] },
{ id: 85, text: "What's one mistake you'll never make again?", categories: ["The Deep Talks"] },
{ id: 86, text: "Who is the most important person in your life?", categories: ["The Deep Talks"] },
{ id: 87, text: "What is something you've struggled to forgive yourself for?", categories: ["The Deep Talks"] },
{ id: 88, text: "What legacy do you want to leave behind?", categories: ["The Deep Talks"] },
{ id: 89, text: "How do you handle criticism?", categories: ["The Deep Talks"] },
{ id: 90, text: "What do you value most in a friend?", categories: ["The Deep Talks"] },
{ id: 91, text: "How do you deal with regret?", categories: ["The Deep Talks"] },
{ id: 92, text: "What are the values you hold most dear?", categories: ["The Deep Talks"] },
{ id: 93, text: "What role does spirituality or religion play in your life?", categories: ["The Deep Talks"] },
{ id: 94, text: "How would you define a good life?", categories: ["The Deep Talks"] },
{ id: 95, text: "What's something you would want to change about the world?", categories: ["The Deep Talks"] },
{ id: 96, text: "How do you want to be remembered?", categories: ["The Deep Talks"] },
{ id: 97, text: "What do you think is the key to happiness?", categories: ["The Deep Talks"] },
{ id: 98, text: "What's one piece of advice you'd give your younger self?", categories: ["The Deep Talks"] },
{ id: 99, text: "What's a personal challenge that changed you?", categories: ["The Deep Talks"] },
{ id: 100, text: "What do you think happens after we die?", categories: ["The Deep Talks"] },
{ id: 101, text: "Have you ever pretended to be sick to get out of work?", categories: ["The Fun Talks"] },
{ id: 102, text: "What is your party trick?", categories: ["The Fun Talks"] },
{ id: 103, text: "What do you always forget when packing for a trip?", categories: ["The Fun Talks"] },
{ id: 104, text: "Have you ever pretended to be someone else for fun?", categories: ["The Fun Talks"] },
{ id: 105, text: "What's the weirdest thing you've ever eaten?", categories: ["The Fun Talks"] },
{ id: 106, text: "If you were a superhero, what would your sidekick's name be?", categories: ["The Fun Talks"] },
{ id: 107, text: "Have you ever accidentally sent a text to the wrong person? What happened?", categories: ["The Fun Talks"] },
{ id: 108, text: "What's your funniest talent or party trick?", categories: ["The Fun Talks"] },
{ id: 109, text: "What's the most embarrassing thing you've done in public?", categories: ["The Fun Talks"] },
{ id: 110, text: "If animals could talk, which one would be the rudest?", categories: ["The Fun Talks"] },
{ id: 111, text: "What's the most unusual compliment you've ever received?", categories: ["The Fun Talks"] },
{ id: 112, text: "What's a strange fact about you that most people don't know?", categories: ["The Fun Talks"] },
{ id: 113, text: "What's your go-to karaoke song, even if you're terrible at singing?", categories: ["The Fun Talks"] },
{ id: 114, text: "What's the most bizarre thing you've seen someone do in public?", categories: ["The Fun Talks"] },
{ id: 115, text: "What's something you've tried once but will never try again?", categories: ["The Fun Talks"] },
{ id: 116, text: "Have you ever given yourself a funny nickname?", categories: ["The Fun Talks"] },
{ id: 117, text: "What is the silliest reason you've ever cried?", categories: ["The Fun Talks"] },
{ id: 118, text: "If you could have dinner with a fictional character, who would it be?", categories: ["The Fun Talks"] },
{ id: 119, text: "What's the strangest way you've ever met someone?", categories: ["The Fun Talks"] },
{ id: 120, text: "What's your favorite way to spend a lazy day?", categories: ["The Fun Talks"] },
{ id: 121, text: "If you could only wear one color for the rest of your life, what would it be?", categories: ["The Fun Talks"] },
{ id: 122, text: "Have you ever accidentally walked into the wrong room or building?", categories: ["The Fun Talks"] },
{ id: 123, text: "What's the most creative excuse you've ever given to avoid something?", categories: ["The Fun Talks"] },
{ id: 124, text: "What's a hobby you've always wanted to try but haven't yet?", categories: ["The Fun Talks"] },
{ id: 125, text: "If you could be an expert at any random skill, what would you choose?", categories: ["The Fun Talks"] },
{ id: 126, text: "What's your favorite childhood game that you'd still play today?", categories: ["The Fun Talks"] },
{ id: 127, text: "What food combination do you love that others find strange?", categories: ["The Fun Talks"] },
{ id: 128, text: "What's a song that instantly puts you in a good mood?", categories: ["The Fun Talks"] },
{ id: 129, text: "What's the funniest lie you told as a kid?", categories: ["The Fun Talks"] },
{ id: 130, text: "What's one app on your phone you'd be embarrassed to admit you have?", categories: ["The Fun Talks"] },

];

const { width, height } = Dimensions.get("window");
const cardWidth = width * 0.8;
const cardHeight = height * 0.5;

export function QuestionCard({ route }: QuestionCardProps) {
    const { category } = route.params;
    const [currentQuestion, setCurrentQuestion] = useState(getRandomQuestion(category));
    const [nextQuestion, setNextQuestion] = useState(getRandomQuestion(category));
    const slideAnim = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(1)).current;
    const handleTap = () => {
        setCurrentQuestion(getRandomQuestion(category));
    };

    function getRandomQuestion(category: string) {
        const filteredQuestions = questions.filter(q => q.categories.includes(category));
        return filteredQuestions.length > 0 
            ? filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)]
            : { id: 0, text: "No questions available for this category.", categories: [category] };
    }
    

    const handlePress = () => {
        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue: -width,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setCurrentQuestion(nextQuestion);
            setNextQuestion(getRandomQuestion(category));
            slideAnim.setValue(width);
            fadeAnim.setValue(0);

            Animated.parallel([
                Animated.timing(slideAnim, {
                    toValue: 0,
                    duration: 300,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 300,
                    useNativeDriver: true,
                }),
            ]).start();
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
                <Animated.View
                    style={[
                        styles.card,
                        {
                            transform: [{ translateX: slideAnim }],
                            opacity: fadeAnim,
                        },
                    ]}
                >
                    <Text style={styles.questionText}>{currentQuestion.text}</Text>
                </Animated.View>
            </TouchableOpacity>
            <Text style={styles.instructionText}>Tap the card for a new question</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: 20,
    },
    card: {
        width: cardWidth,
        height: cardHeight,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    questionText: {
        fontSize: 24,
        textAlign: "center",
        color: "#333",
    },
    instructionText: {
        marginTop: 20,
        fontSize: 16,
        color: "#666",
    },
});