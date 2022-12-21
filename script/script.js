'use strict';

const userData = [
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Devik roy',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Rahul Singh',
    jobTitle: 'Marketing | startup',
    postTime: '1w',
    postDescription:
      'Being disabled should not mean being disqualified from having access',
    image: 'https://media.tenor.com/xX9Vw2oazLQAAAAC/hera-pheri.gif',
    reactionCount: 688,
    commentCount: 103,
    repostCount: 82,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Avantika Saklani',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Banita thakur',
    jobTitle: 'Human Resources Executives',
    postTime: '4d',
    postDescription:
      'HR is someone who is equally hated by the management as well as the employees.',
    image:
      'https://media.tenor.com/jYXFcawrWYoAAAAd/hera-pheri-fir-hera-pheri.gif',
    reactionCount: 14630,
    commentCount: 334,
    repostCount: 1,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Parikshit Chauhan',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Madan k',
    jobTitle: 'Accountant Developer',
    postTime: 'Complete mobile responsive web',
    postDescription:
      'HR is someone who is equally hated by the management as well as the employees.',
    image:
      'https://i.pinimg.com/originals/7c/a4/38/7ca438ffb31e762e6f359cbb2d1c5bb7.gif',
    reactionCount: 31,
    commentCount: 21,
    repostCount: 4,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Vishnu G Prabhu',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Madan k',
    jobTitle: 'Accountant Developer',
    postTime: 'Complete mobile responsive web',
    postDescription:
      'Please do like share and subscribe to our YouTube channel guide me through for career guidance and job updates.',
    image: 'https://media.tenor.com/q62aZ99xd4EAAAAC/hera-pheri-baburao.gif',
    reactionCount: 31,
    commentCount: 121,
    repostCount: 69,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Vishnu G Prabhu',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Shraddha Bharuka',
    jobTitle: 'Backend Developer NodeJs',
    postTime: '1w',
    postDescription:
      'Im beyond thrilled to announce that I have been selected to join the BVEC Code',
    image:
      'https://i.pinimg.com/originals/58/f3/10/58f310fabc2682ac5a6ff3ad1027d8af.gif',
    reactionCount: 24,
    commentCount: 3,
    repostCount: 1,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Anubha Sachan',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Swen Mehra',
    jobTitle: 'Senior UX/UI Designer at Auspicious',
    postTime: '1w',
    postDescription: 'What do you think about it',
    image:
      'https://media.tenor.com/Rw1hAv1o_6sAAAAC/phir-hera-pheri-rajpal-yadav.gif',
    reactionCount: 10,
    commentCount: 12,
    repostCount: 54,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Himashu Malviya',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Shraddha Bharuka',
    jobTitle: 'Backend Developer',
    postTime: '6h',
    postDescription:
      'The database is an important part of software and management solution',
    image:
      'https://i.pinimg.com/originals/7b/7d/a0/7b7da0e5fef735db6649e6e34b98a520.gif',
    reactionCount: 327,
    commentCount: 39,
    repostCount: 29,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Priyansh Sharma',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Martin Harbech',
    jobTitle: 'LinkedIn Top in Technology',
    postTime: '1w',
    postDescription:
      'With so much hype around the Metaverse, it’s easy to be sceptical.',
    image:
      'https://media.tenor.com/vOq7Ylk9gwQAAAAC/phir-hera-pheri-tere-pass-koi-aur-rasta-hai.gif',
    reactionCount: 2421,
    commentCount: 124,
    repostCount: 237,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Sourav Rajput',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Akash Kanojiya',
    jobTitle: 'Open for Promotions',
    postTime: '1w',
    postDescription: '2000 + interview questions for programmers !!!!',
    image:
      'https://media.tenor.com/f-LAF4ntdpgAAAAC/hera-pheri-maal-kidhar-hai.gif',
    reactionCount: 279,
    commentCount: 76,
    repostCount: 32,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Uttam Patra',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Anmol Garg',
    jobTitle: 'Stand Comedian',
    postTime: '1w',
    postDescription: 'Thats where the money is 😂😂',
    image:
      'https://i.pinimg.com/originals/d5/ac/65/d5ac653c3cbbb49cbdc181955e7f4680.gif',
    reactionCount: 8024,
    commentCount: 241,
    repostCount: 39,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Deepesh K',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Rahul Singh',
    jobTitle: 'Marketing | startup',
    postTime: '1w',
    postDescription:
      'Being disabled should not mean being disqualified from having access',
    image:
      'https://media.tenor.com/IGYZtNLXHIwAAAAC/sunda-ko-aa-mast-naha-dho-ke-aa-paresh-rawal-baburao.gif',
    reactionCount: 689,
    commentCount: 103,
    repostCount: 82,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Thurpati Nainesh',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Saswath Singh',
    jobTitle: 'Node JS Developer at Oneclick it Consultancy',
    postTime: '2d',
    postDescription:
      'I’m happy to share that I’m starting a new position as SDE - I at OneClick IT Consultancy Pvt Ltd!',
    image:
      'https://i.pinimg.com/originals/14/6d/7d/146d7db866c3bb11747121d8c0bbe11e.gif',
    reactionCount: 106,
    commentCount: 49,
    repostCount: 2,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Shweta Verma',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Madhulika Agrawal',
    jobTitle: 'Test Lead| Functional| Agile|Api',
    postTime: '2w',
    postDescription:
      'Brains, like hearts, go where they are appreciated.Thank you GalaxE.Solutions',
    image:
      'https://media.tenor.com/09RWWOCKGNAAAAAM/hera-pheri-phir-hera-pheri.gif',
    reactionCount: 275,
    commentCount: 15,
    repostCount: 10,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Tech Mahindra',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Preeti Kaskar',
    jobTitle: 'Group Manager Human Resources at Tech Mahindra',
    postTime: '1w',
    postDescription:
      'Happiness = Contributing towards society... we can create a better and beautiful world for all of us, its just a matter of choice.',
    image: 'https://media.tenor.com/i18SeImsrXgAAAAM/abell46s-reface.gif',
    reactionCount: 934,
    commentCount: 2,
    repostCount: 1,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Nikunj patel',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Rutul sedani',
    jobTitle: 'Assistant General Manager at justDial Ltd',
    postTime: '1w',
    postDescription:
      'I’m happy to share that I’m starting a new position as Assistant General Manager at Justdial!',
    image:
      'https://media.tenor.com/vKMxaaYIiHYAAAAM/sitting-at-home-remembering-the-school-memories-alone.gif',
    reactionCount: 24,
    commentCount: 4,
    repostCount: 2,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Priti Verma',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Anjali Bhardwaj',
    jobTitle: 'Trainer-Learning and Development',
    postTime: '6d',
    postDescription:
      'Thank you for always supporting me and appreciating my hardwork , special thanks to Renuka Singh for helping me achieve every milestone with your guidance 🙌🙇🏻‍♀️',
    image: 'https://media.tenor.com/zF0k07v-v_kAAAAM/vasooli-golmaal3.gif',
    reactionCount: 46,
    commentCount: 9,
    repostCount: 5,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Tata Consultancy Services',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Arun Kumar',
    jobTitle: 'Marketing | startup',
    postTime: '1w',
    postDescription:
      'I got my TCS NQT scorecard held in Oct, 2022. Please let me know Tata Consultancy Services',
    image: 'https://media.tenor.com/CbRC449ZYIIAAAAM/welcome-nana-patekar.gif',
    reactionCount: 1377,
    commentCount: 33,
    repostCount: 3,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Nikita Verma',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Indira Sarkar',
    jobTitle: 'Human Resource Specialist',
    postTime: '4d',
    postDescription: 'Designation- Senior HR Operation Specialist',
    image: 'https://media.tenor.com/iXhV4Mntu74AAAAM/welcome-control-uday.gif',
    reactionCount: 114,
    commentCount: 89,
    repostCount: 2,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Deepesh K',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Tushar Arora',
    jobTitle: 'Manager at Better.com',
    postTime: '6d',
    postDescription:
      'It’s unfortunate that my time at Better has come to an end.',
    image: 'https://media.tenor.com/7_ghqmrR_EkAAAAM/golmaal3-johnny-lever.gif',
    reactionCount: 1275,
    commentCount: 113,
    repostCount: 21,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Shivam Singh',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Harikesh chaudhary',
    jobTitle: 'Backend Developer | Mern | Html | Css',
    postTime: '1w',
    postDescription:
      'I’m happy to share that I’m starting a new position as Backend Developer at',
    image:
      'https://media.tenor.com/lhc3dKiwaPMAAAAM/dhamaal-javed-jaffrey-mama-will-be-so-proud-of-you.gif',
    reactionCount: 7358,
    commentCount: 32,
    repostCount: 25,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Devik roy',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Rahul Singh',
    jobTitle: 'Marketing | startup',
    postTime: '1w',
    postDescription:
      'Being disabled should not mean being disqualified from having access',
    image:
      'https://media.tenor.com/lhc3dKiwaPMAAAAM/dhamaal-javed-jaffrey-mama-will-be-so-proud-of-you.gif',
    reactionCount: 688,
    commentCount: 103,
    repostCount: 82,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Avantika Saklani',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Banita thakur',
    jobTitle: 'Human Resources Executives',
    postTime: '4d',
    postDescription:
      'HR is someone who is equally hated by the management as well as the employees.',
    image: 'https://media.tenor.com/12flE7vVhe4AAAAM/dhamaal-javed-jaffrey.gif',
    reactionCount: 14630,
    commentCount: 334,
    repostCount: 1,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Parikshit Chauhan',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Madan k',
    jobTitle: 'Accountant Developer',
    postTime: 'Complete mobile responsive web',
    postDescription:
      'HR is someone who is equally hated by the management as well as the employees.',
    image: 'https://media.tenor.com/miw2XTvexPkAAAAM/dhamaal-javed-jaffrey.gif',
    reactionCount: 31,
    commentCount: 21,
    repostCount: 4,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Vishnu G Prabhu',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Madan k',
    jobTitle: 'Accountant Developer',
    postTime: 'Complete mobile responsive web',
    postDescription:
      'Please do like share and subscribe to our YouTube channel guide me through for career guidance and job updates.',
    image: 'https://media.tenor.com/RTMrNfb1gicAAAAM/atank-babubhai.gif',
    reactionCount: 31,
    commentCount: 121,
    repostCount: 69,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Vishnu G Prabhu',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Shraddha Bharuka',
    jobTitle: 'Backend Developer NodeJs',
    postTime: '1w',
    postDescription:
      'Im beyond thrilled to announce that I have been selected to join the BVEC Code',
    image:
      'https://media.tenor.com/Di10Y9EicDAAAAAd/rajpal-yadav-chup-chup-ke.gif',
    reactionCount: 24,
    commentCount: 3,
    repostCount: 1,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Anubha Sachan',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Swen Mehra',
    jobTitle: 'Senior UX/UI Designer at Auspicious',
    postTime: '1w',
    postDescription: 'What do you think about it',
    image:
      'https://media.tenor.com/eRcEkwojxqAAAAAM/bhagam-bhag-aurtein-chahiye-aurtein.gif',
    reactionCount: 10,
    commentCount: 12,
    repostCount: 54,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Himashu Malviya',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Shraddha Bharuka',
    jobTitle: 'Backend Developer',
    postTime: '6h',
    postDescription:
      'The database is an important part of software and management solution',
    image:
      'https://media.tenor.com/Id_bKoaBGkcAAAAM/bhagam-bhag-akshay-kumar-naughty.gif',
    reactionCount: 327,
    commentCount: 39,
    repostCount: 29,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Priyansh Sharma',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Martin Harbech',
    jobTitle: 'LinkedIn Top in Technology',
    postTime: '1w',
    postDescription:
      'With so much hype around the Metaverse, it’s easy to be sceptical.',
    image: 'https://media.tenor.com/9IVmLRYNCrQAAAAM/bhagam-bhag-aeyy-heyy.gif',
    reactionCount: 2421,
    commentCount: 124,
    repostCount: 237,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Sourav Rajput',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Akash Kanojiya',
    jobTitle: 'Open for Promotions',
    postTime: '1w',
    postDescription: '2000 + interview questions for programmers !!!!',
    image:
      'https://media.tenor.com/9BxykLhnhV8AAAAM/liyo-lyo-lyo-suna-kya-ye-bhi-meri-galati-hai-johnny-lever.gif',
    reactionCount: 279,
    commentCount: 76,
    repostCount: 32,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Uttam Patra',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Anmol Garg',
    jobTitle: 'Stand Comedian',
    postTime: '1w',
    postDescription: 'Thats where the money is 😂😂',
    image:
      'https://media.tenor.com/8AsAUiBOEvMAAAAM/iski-guarantee-mai-nahi-de-sakta-johnny-lever.gif',
    reactionCount: 8024,
    commentCount: 241,
    repostCount: 39,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Deepesh K',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Rahul Singh',
    jobTitle: 'Marketing | startup',
    postTime: '1w',
    postDescription:
      'Being disabled should not mean being disqualified from having access',
    image:
      'https://media.tenor.com/59ECh-JCpfUAAAAM/abhi-theek-karke-deta-hoon-johnny-lever.gif',
    reactionCount: 689,
    commentCount: 103,
    repostCount: 82,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Thurpati Nainesh',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Saswath Singh',
    jobTitle: 'Node JS Developer at Oneclick it Consultancy',
    postTime: '2d',
    postDescription:
      'I’m happy to share that I’m starting a new position as SDE - I at OneClick IT Consultancy Pvt Ltd!',
    image:
      'https://media.tenor.com/tYaTvtWlTF4AAAAM/abhi-mereko-samajh-me-aaya-iska-actually-problem-kya-hai-johnny-lever.gif',
    reactionCount: 106,
    commentCount: 49,
    repostCount: 2,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Shweta Verma',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Madhulika Agrawal',
    jobTitle: 'Test Lead| Functional| Agile|Api',
    postTime: '2w',
    postDescription: 'CHALTI KYA KHANDALA!!!',
    image:
      'https://media.tenor.com/JB3FAWvWU-QAAAAM/dhol-rajpal-yadav-maru-stares-at-ritu-tanushree-dutta.gif',
    reactionCount: 275,
    commentCount: 15,
    repostCount: 10,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Tech Mahindra',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Preeti Kaskar',
    jobTitle: 'Group Manager Human Resources at Tech Mahindra',
    postTime: '1w',
    postDescription:
      'Happiness = Contributing towards society... we can create a better and beautiful world for all of us, its just a matter of choice.',
    image:
      'https://media.tenor.com/uOX8Fn7teA4AAAAM/accha-acting-hai-rajpal-yadav.gif',
    reactionCount: 934,
    commentCount: 2,
    repostCount: 1,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Nikunj patel',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Rutul sedani',
    jobTitle: 'Assistant General Manager at justDial Ltd',
    postTime: '1w',
    postDescription:
      'I’m happy to share that I’m starting a new position as Assistant General Manager at Justdial!',
    image:
      'https://media.tenor.com/tXx67mRIfVkAAAAM/chup-chup-ke-rajpal-yadav-bandya.gif',
    reactionCount: 24,
    commentCount: 4,
    repostCount: 2,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Priti Verma',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Anjali Bhardwaj',
    jobTitle: 'Trainer-Learning and Development',
    postTime: '6d',
    postDescription:
      'Thank you for always supporting me and appreciating my hardwork , special thanks to Renuka Singh for helping me achieve every milestone with your guidance 🙌🙇🏻‍♀️',
    image:
      'https://media.tenor.com/C6EVEgx5PqsAAAAM/main-expert-chup-chupke.gif',
    reactionCount: 46,
    commentCount: 9,
    repostCount: 5,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Tata Consultancy Services',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Arun Kumar',
    jobTitle: 'Marketing | startup',
    postTime: '1w',
    postDescription:
      'I got my TCS NQT scorecard held in Oct, 2022. Please let me know Tata Consultancy Services',
    image:
      'https://media.tenor.com/bQGoG03a2OYAAAAM/chup-chup-ke-rajpal-yadav-bandya-aap-do-na.gif',
    reactionCount: 137,
    commentCount: 53,
    repostCount: 7,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Nikita Verma',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Indira Sarkar',
    jobTitle: 'Human Resource Specialist',
    postTime: '4d',
    postDescription: 'Designation- Senior HR Operation Specialist',
    image: 'https://media.tenor.com/V0nk86I79BQAAAAM/rajpal-yadav.gif',
    reactionCount: 17,
    commentCount: '',
    repostCount: '',
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Deepesh K',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Tushar Arora',
    jobTitle: 'Manager at Better.com',
    postTime: '6d',
    postDescription:
      'It’s unfortunate that my time at Better has come to an end.',
    image:
      'https://media.tenor.com/0YTbbLG-4uIAAAAM/gazab-bezzati-hai-yaar-panchayat.gif',
    reactionCount: 1132,
    commentCount: 3,
    repostCount: 1,
  },
  {
    reactorImage:
      'https://media.licdn.com/dms/image/C4E03AQEgiylGPPDJHQ/profile-displayphoto-shrink_400_400/0/1589355915977?e=1676505600&v=beta&t=j9BclcehrATV_hDgGruYX0IACrLRVy8kZgJyJBiQJ_g',
    reactBy: 'Parkasss naade',
    authorImage: 'https://avatars.githubusercontent.com/u/19223819?v=4',
    authorName: 'Baibhav Aggrabal',
    jobTitle: 'Backend Developer | Mern | Html | Css',
    postTime: '1w',
    postDescription: 'NAMASTE BHAI LOOG!!!!!! KYA BOLTI PUBLIC!',
    // image:
    //   'https://images.hindustantimes.com/img/2022/10/13/550x309/Twitter_Video_Chucky_Dog_1665650427991_1665650440939_1665650440939.PNG',
    // image:
    image: 'https://media.tenor.com/fMBqeMeMLFEAAAAM/chutiya-katan.gif',
    reactionCount: 7358,
    commentCount: 32,
    repostCount: 25,
  },
];

const postContainer = document.querySelector('.posts');
// userData

const renderHTML = function () {
  for (let i = 0; i < userData.length; i++) {
    const html = `
          <div class="post">
          <div class="reactor-box flex">
            <div class="reactor flex">
              <img src="${userData[i].reactorImage}" alt="reactor-image">
              <p>${userData[i].reactBy} <span>likes this</span></p>
            </div>
            <i class="ph-dots-three-bold"></i>
          </div>

          <div class="poster-box flex">
            <div class="poster-info flex">
              <img src="${userData[i].authorImage}" alt="">
              <div class="poster-text flex">
                <p class="poster-name">${userData[i].authorName}</p>
                <p class="poster-job">${userData[i].jobTitle}</p>
                <p class="posted-time flex">
                  <span>${userData[i].postTime}</span>
                  <span class="middot">&middot;</span>
                  <i class="ph-globe-hemisphere-east-fill"></i>
                </p>
              </div>
            </div>
            <div class="follow flex">
              <i class="ph-plus-bold"></i>
              <p>Follow</p>
            </div>
          </div>

          <div class="post-description">
            <p>${userData[i].postDescription}</p>
          </div>

          <div class="post-image">
            <img
              src="${userData[i].image}"
              alt="">
          </div>

          <div class="reaction-count-box flex">
            <div class="left">
              <p>${userData[i].reactBy} and ${userData[i].reactionCount} others</p>
            </div>

            <div class="right flex">
              <p>${userData[i].commentCount} comments</p>
              &middot;
              <p>${userData[i].repostCount} reposts</p>
            </div>
          </div>

          <ul class="react-box flex">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
</svg>
              <span>Like</span>
            </li>
            <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
</svg>
              <span>Comment</span>
            </li>
            <li class="repost-li">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="24" height="24"
viewBox="0 0 24 24">
    <path d="M 7.1601562 3 L 8.7617188 5 L 18 5 C 18.551 5 19 5.448 19 6 L 19 15 L 16 15 L 20 20 L 24 15 L 21 15 L 21 6 C 21 4.346 19.654 3 18 3 L 7.1601562 3 z M 4 4 L 0 9 L 3 9 L 3 18 C 3 19.654 4.346 21 6 21 L 16.839844 21 L 15.238281 19 L 6 19 C 5.449 19 5 18.552 5 18 L 5 9 L 8 9 L 4 4 z"></path>
</svg>
              <span>Repost</span>
            </li>
            <li>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
</svg>
              <span>Send</span>
            </li>
          </ul>
          
          <section class="create_comment_box">
          <div class="cmnt_box">
            <img class="cmnt_img" src="https://avatars.githubusercontent.com/u/91982512?v=4" alt="">
            <div class="cmnt_area">
              <input class="add_comment" placeholder="Add a comment...">
              <div class="emoji">
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                    fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                    <path
                      d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z">
                    </path>
                  </svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                    fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                    <path
                      d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z">
                    </path>
                  </svg></div>
              </div>
            </div>

          </div>
        </section>

                        <section class="read_comment" style="margin-bottom:2rem";>
          <div class="read_cmnt_box">
            <div class="cmntr_img">
              <img
                src="https://media.licdn.com/dms/image/C4E03AQHW3HLJtdGhQw/profile-displayphoto-shrink_400_400/0/1633442742765?e=1677110400&v=beta&t=dx6ycycpl9Vg_Z_chW6KcMvIqIX6XuF-5jbeRivk0c4"
                alt="">
            </div>

            <div class="cmnt_text_box">

              <div class="cmnt_text">
                <div class="flex">
                  <div class="cmntr_name">
                    <h4>Souvik Deb</h4> <span>• 3rd+</span>
                  </div>
                  <div class="time">27m •••</div>
                </div>
                <p class="occupation">Software Developer | 19k + followers </p>
                <p class="cmnt_msg_text">Great opportunity ✅💥</p>
              </div>
              <div class="cmnt_reaction">
                <p class="like">Like</p>
                <p>|</p>
                <p class="reply">Reply</p>
              </div>
            </div>
          </div>
          <p class="load_more">Load more comments</p>
        </section>
        </div>
        

  `;
    // userData.push(userData[i]);
    postContainer.insertAdjacentHTML('afterbegin', html);
  }
};

window.addEventListener('load', renderHTML);

//# -------------------------- Message popup toggle -------------------------- */

const togglerDown = document.querySelector('.downArrow');
const togglerUp = document.querySelector('.upArrow');
const messageBlock = document.querySelector('.message_complete_block');

togglerUp.addEventListener('click', function () {
  messageBlock.classList.remove('display_block');
});

togglerDown.addEventListener('click', function () {
  messageBlock.classList.add('display_block');
});

//# ------------------------------- WORK POPUP ------------------------------- */

const togglerWork = document.querySelector('.ph-x');
const workPopup = document.querySelector('.work_popup');
const workIcon = document.querySelector('.nine-dots');

document.body.addEventListener('click', e => {
  if (e.target.parentElement.classList.contains('nine-dots')) {
    workPopup.classList.remove('display_block');
    overlay.classList.remove('hidden');
    document.body.classList.add('disable-scroll');
  }
});

togglerWork.addEventListener('click', function () {
  workPopup.classList.add('display_block');
  overlay.classList.add('hidden');
  document.body.classList.remove('disable-scroll');
});

//# ------------------------------- POST POPUP------------------------------- */
const overlay = document.querySelector('.overlay');
const postInput = document.querySelector('.start-post');
const postPopup = document.querySelector('.post-popup');
const closePostPopup = document.querySelector('.close-postPopup');

postInput.addEventListener('click', function () {
  postPopup.classList.remove('display_block');
  overlay.classList.remove('hidden');
  document.body.classList.add('disable-scroll');
});

closePostPopup.addEventListener('click', function () {
  postPopup.classList.add('display_block');
  overlay.classList.add('hidden');
  document.body.classList.remove('disable-scroll');
});

//# ------------------------------- CREATE POST ------------------------------ */
const postBox = document.querySelector('.posts');
const btnPost = document.querySelector('.footer-post');
const postText = document.querySelector('.talk-about');
const imageInput = document.querySelector('#image-input');
let uploadedImage = '';

imageInput.addEventListener('change', function (e) {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploadedImage = reader.result;
  });
  reader.readAsDataURL(this.files[0]);
});
let count = 0;
let postData = [];
btnPost.addEventListener('click', () => {
  if (postText.value) {
    const html = `
    <div class="post" data-id="${count}">
      <div class="poster-box flex">
        <div class="poster-info flex">
          <img
            src="https://avatars.githubusercontent.com/u/91982512?v=4"
            alt=""
          />
          <div class="poster-text flex">
            <p class="poster-name">Prakasss lal</p>
            <p class="poster-job">Senior Web Developer</p>
            <p class="posted-time flex">
              <span>1s ago</span>
              <span class="middot">&middot;</span>
              <i class="ph-globe-hemisphere-east-fill"></i>
            </p>
          </div>
        </div>
        <div class="follow flex">
          <i class="ph-plus-bold"></i>
          <p>Follow</p>
        </div>
      </div>

      <div class="post-description">
        <p>${postText.value}</p>
      </div>

      <div class="post-image">
        <img src="${uploadedImage}" alt="" />
      </div>

      <div class="reaction-count-box flex">
        <div class="left">
          <p class="likes-count"></p>
        </div>

        <div class="right flex">
          <p></p>
          &middot;
          <p></p>
        </div>
      </div>

      <ul class="react-box flex">
        <li>
          <svg
            class="btn-like"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"
            ></path>
          </svg>
          <span class="btn-like" style="user-select: none;">Like</span>
        </li>
        <li>
          <svg class="btn-comment"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"
            ></path>
          </svg>
          <span class="btn-comment" style="user-select: none;">Comment</span>
        </li>
        <li class="repost-li">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M 7.1601562 3 L 8.7617188 5 L 18 5 C 18.551 5 19 5.448 19 6 L 19 15 L 16 15 L 20 20 L 24 15 L 21 15 L 21 6 C 21 4.346 19.654 3 18 3 L 7.1601562 3 z M 4 4 L 0 9 L 3 9 L 3 18 C 3 19.654 4.346 21 6 21 L 16.839844 21 L 15.238281 19 L 6 19 C 5.449 19 5 18.552 5 18 L 5 9 L 8 9 L 4 4 z"
            ></path>
          </svg>
          <span style="user-select: none;">Repost</span>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
          </svg>
          <span style="user-select: none;">Send</span>
        </li>
      </ul>
    </div>
  `;
    //todo:
    // const fragment = document.createRange().createContextualFragment(html);
    //todo:
    const obj = {
      id: count++,
      likesCount: 0,
      commentCount: 0,
      comments: [],
      // image: uploadedImage, //useuful when connected to backend.
    };
    postData.push(obj);
    postBox.insertAdjacentHTML('afterbegin', html);
    postPopup.classList.add('display_block');
    overlay.classList.add('hidden');
    document.body.classList.remove('disable-scroll');
    postText.value = '';
  } else {
    alert('Post description cannot be empty.');
  }
});

//# --------------------------------- LIKE FN -------------------------------- */
document.body.addEventListener('click', function (e) {
  if (
    e.target.classList.contains('btn-like') &&
    e.target.closest('.post').classList.contains('post')
  ) {
    for (let i = 0; i < postData.length; i++) {
      if (e.target.closest('.post').dataset.id == postData[i].id) {
        postData[i].likesCount++;
        e.target.parentElement.parentElement.previousElementSibling.children[0].children[0].textContent = `Parkasss nadee and ${postData[i].likesCount} others`;
      }
    }
  }
});

//# ----------------------------------- COMMENT INPUT RENDER FN ----------------------------------- */
document.body.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-comment')) {
    if (e.target.parentElement.parentElement.nextElementSibling) return;
    else {
      e.target.classList.add('active');
      const html = `
            <section class="create_comment_box">
          <div class="cmnt_box">
            <img class="cmnt_img" src="https://avatars.githubusercontent.com/u/91982512?v=4" alt="">
            <div class="cmnt_area">
              <input class="add_comment" placeholder="Add a comment...">
              <div class="emoji">
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                    fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                    <path
                      d="M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z">
                    </path>
                  </svg></div>
                <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24"
                    fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                    <path
                      d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z">
                    </path>
                  </svg></div>
              </div>
            </div>
          </div>
          <button class="btn-post-comment hidden">Post</button>
        </section>
    `;
      e.target.parentElement.parentElement.parentElement.insertAdjacentHTML(
        'beforeend',
        html
      );
    }
  }
});

//# --------------------- COMMENT POST BUTTON HIDE AND SHOW FN -------------------- */
const postsContainer = document.querySelector('.posts'); //# DONT TOUCH THIS.
postContainer.addEventListener('input', function (e) {
  if (e.target.classList.contains('add_comment') && e.target.value.length > 0) {
    e.target.parentElement.parentElement.nextElementSibling.classList.remove(
      'hidden'
    );
  } else e.target.parentElement.parentElement.nextElementSibling.classList.add('hidden');
});

//# --------------------------- ADD COMMENT FN --------------------------- */

document.body.addEventListener('click', function (e) {
  if (e.target.classList.contains('btn-post-comment')) {
    for (let i = 0; i < postData.length; i++) {
      if (e.target.parentElement.parentElement.dataset.id == postData[i].id) {
        postData[i].comments.push(
          e.target.parentElement.children[0].children[1].children[0].value
        );
        postData[i].commentCount++;
        e.target.parentElement.parentElement.children[3].children[1].children[0].textContent = `${postData[i].commentCount} Comments.`;
      }
    }
    //# render comment html
    const html = `
            <section class="read_comment">
          <div class="read_cmnt_box">
            <div class="cmntr_img">
              <img
                src="${userData[0].reactorImage}"
                alt="">
            </div>


            <div class="cmnt_text_box">

              <div class="cmnt_text">
                <div class="flex">
                  <div class="cmntr_name">
                    <h4>Parkasss lal</h4> <span>• 3rd+</span>
                  </div>
                  <div class="time">1s •••</div>
                </div>
                <p class="occupation">Software Developer | 19k + followers </p>
                <p class="cmnt_msg_text">${e.target.parentElement.children[0].children[1].children[0].value}</p>
              </div>
              <div class="cmnt_reaction">
                <p class="like">Like</p>
                <p>|</p>
                <p class="reply">Reply</p>
              </div>
            </div>
          </div>
        </section>
    `;
    e.target.parentElement.parentElement.insertAdjacentHTML('beforeend', html);
    e.target.parentElement.children[0].children[1].children[0].value = '';
    e.target.classList.add('hidden');
  }
});

// #--------------------------Me(profile) popup---------------------------- */

const profilePopup = document.querySelector('.profile_popup');
document.body.addEventListener('click', e => {
  if (e.target.classList.contains('profile-img')) {
    profilePopup.classList.toggle('display_block');
  }
});

// #------------------------------- PHOTO POPUP--------------------------------- */

const photoPopup = document.querySelector('.photo_popup');
const imgAttachment = document.querySelector('.img_attachment');
const cross = document.querySelector('.cross');
const cancelBtn = document.querySelector('.btn-cancel');

imgAttachment.addEventListener('click', () => {
  photoPopup.classList.remove('display_block');
  overlay.classList.remove('hidden');
  document.body.classList.add('disable-scroll');
});

cross.addEventListener('click', function () {
  photoPopup.classList.add('display_block');
  overlay.classList.add('hidden');
  document.body.classList.remove('disable-scroll');
});

cancelBtn.addEventListener('click', function () {
  photoPopup.classList.add('display_block');
  overlay.classList.add('hidden');
  document.body.classList.remove('disable-scroll');
});
