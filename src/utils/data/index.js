export const poseInstructions = {
    Tree: [
        'Start by standing straight with a long, tall back and your feet aligned and touching. Your arms should be straight along either side of your body.',
        'Take a few breaths and find a place or object in the room to focus your attention. Slowly shift your weight to your left leg and begin to raise your right foot off the floor. Align the sole of your right foot with the inside of your left thigh. The toes should be pointing down and your pelvis should be completely straight.',
        'Hold and repeat. Hold the pose for as long as necessary, making sure to breathe properly. When you’re ready to switch legs, exhale, and return to mountain pose to start again.',
        'Source: classpass - https://classpass.com/movements/tree-pose'
        ],
    cobra: [
        'Lie prone on the floor. Stretch your legs back, tops of the feet on the floor. Spread your hands on the floor under your shoulders. Hug the elbows back into your body.',
        'On an inhalation, begin to straighten the arms to lift the chest off the floor, going only to the height at which you can maintain a connection through your pubis to your legs. Press the tailbone toward the pubis and lift the pubis toward the navel. Narrow the hip points. Firm but don’t harden the buttocks.',
        'Firm the shoulder blades against the back, puffing the side ribs forward. Lift through the top of the sternum but avoid pushing the front ribs forward, which only hardens the lower back. Distribute the backbend evenly throughout the entire spine.',    
        'Hold the pose anywhere from 15 to 30 seconds, breathing easily. Release back to the floor with an exhalation.',
        'Source: Yoga Journal - https://www.yogajournal.com/poses/types/cobra-pose-2/'
    ],
    downdog: [
        'Come onto your hands and knees, with your hands a tiny bit in front of your shoulders and your knees directly below your hips. Spread your palms, rooting down through all four corners of your hands, and turn your toes under.',
        'Exhale and lift your knees from the floor, at first keeping your knees slightly bent and your heels lifted off the floor. Lengthen your tailbone away from the back of your pelvis, lift the sitting bones toward the ceiling, and draw your inner legs from your inner ankles up through your groins.',
        'On an exhalation, push your top thighs back and stretch your heels toward the floor. Straighten your knees without locking them.',
        'Firm your outer arms and press the bases of your index fingers actively into the floor. Lift along your inner arms from the wrists to the tops of the shoulders. Firm your shoulder blades against your back, then widen them and draw them toward your tailbone. Keep your head between your upper arms.',
        'Stay in the pose for 10 or more breaths, then bend your knees on an exhalation and lower yourself into Child’s Pose',
        'Source: Yoga Journal - https://www.yogajournal.com/poses/types/downward-facing-dog/'
    
    ],
    chair: [
        'Stand straight and tall with your feet slightly wider than hip­-width apart and your arms at your sides.',
        'Inhale and lift your arms next to your ears, stretching them straight and parallel with wrists and fingers long. Keep your shoulders down and spine neutral.',
        'Exhale as you bend your knees, keeping your thighs and knees parallel. Lean your torso forward to create a right angle with the tops of your thighs. Keep your neck and head in line with your torso and arms. Hold for 30 seconds to 1 minute.',
        'Source: classpass - https://classpass.com/movements/chair-pose'
    ],
    warrior: [
        'Stand in a wide position with your feet parallel and approximately three feet apart. ',
        'Turn your left foot out 90 degrees, then bend your knee into a lunge.',
        'Be sure to keep your knee above your ankle and pointing over your toes.',
        'Extend your arms straight out from your sides. Relax your shoulders away from your ears.',
        'Turn your head to the left and look over your fingers. Repeat on the other side.',
        'Source classpass - https://classpass.com/movements/warrior-pose'
    ],
    triangle: [
        'Begin standing, then lightly jump your feet apart to a wide position about three to four feet apart. Turn your left foot out and turn to face that direction. Take a slight bend in your left leg and raise your arms out on your sides, forming a “T” shape.',
        'Straighten through your left leg, then hinge and reach your torso over your left leg as your hips jut back. Rotate your left palm so it faces the ceiling, and gaze out over your left arm.',
        'Maintain a long, straight spine as you reach your left hand to the mat, placing it in front of your left foot. If you feel off balance, bring in your back leg closer to shorten your stance. Gaze towards your right arm, which should be extended overhead. Hold and repeat on the other side.',
        'Source classpass - https://classpass.com/movements/triangle-pose'
    ],
    goddess: [
        'From a standing position with the feet 3 feet apart, bend the elbows at shoulder height and turn the palms facing each other. Turn the feet out 45 degrees facing the corners of the room, and as you exhale bend the knees over the toes squatting down.',
        'Press the hips forward, press the knees back. Drop the shoulders down and back and press the chest toward the front of the room. Keep the arms active, as if they were holding a big ball over your head. Look straight ahead with the chin parallel to the floor.',
        "Breathe and hold for 3-6 breaths.",
        "To release: inhale and straighten the legs, reaching the fingertips to the ceiling, then exhale the arms to the sides.",
        'Source: yogabasics - https://www.yogabasics.com/asana/goddess-squat/'
    ]
    
}

export const POINTS = {
    NOSE : 0,
    LEFT_EYE : 1,
    RIGHT_EYE : 2,
    LEFT_EAR : 3,
    RIGHT_EAR : 4,
    LEFT_SHOULDER : 5,
    RIGHT_SHOULDER : 6,
    LEFT_ELBOW : 7,
    RIGHT_ELBOW : 8,
    LEFT_WRIST : 9,
    RIGHT_WRIST : 10,
    LEFT_HIP : 11,
    RIGHT_HIP : 12,
    LEFT_KNEE : 13,
    RIGHT_KNEE : 14,
    LEFT_ANKLE : 15,
    RIGHT_ANKLE : 16,
}

export const keypointConnections = {
    nose: ['left_ear', 'right_ear'],
    left_ear: ['left_shoulder'],
    right_ear: ['right_shoulder'],
    left_shoulder: ['right_shoulder', 'left_elbow', 'left_hip'],
    right_shoulder: ['right_elbow', 'right_hip'],
    left_elbow: ['left_wrist'],
    right_elbow: ['right_wrist'],
    left_hip: ['left_knee', 'right_hip'],
    right_hip: ['right_knee'],
    left_knee: ['left_ankle'],
    right_knee: ['right_ankle']
}