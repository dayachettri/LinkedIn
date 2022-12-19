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
    image:
      'https://media.licdn.com/dms/image/C4D22AQFKNFv2mgGjmA/feedshare-shrink_2048_1536/0/1670493795453?e=1674086400&v=beta&t=AE8klLZhPP9CbCfIo660l0Uo4m8dLJIwg8441zTnwv8',
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
      'https://media.licdn.com/dms/image/C5622AQFu-p2mWaErfA/feedshare-shrink_800/0/1671038385950?e=1674086400&v=beta&t=qnGBtbgp5s8kw-PucLQqbBUp2lkhup-w6KaaAR44SC0',
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
      'https://media.licdn.com/dms/image/C4D22AQHTVYkDIsYQVw/feedshare-shrink_800/0/1671038752999?e=1674086400&v=beta&t=S6A1dB-SmclrnRQRFYS-6Wqt-Cowzqqq5oBuLxiWcbM',
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
    image:
      'https://media.licdn.com/dms/image/D4D22AQE3gRkb5Z_pRg/feedshare-shrink_800/0/1670643324698?e=1674086400&v=beta&t=vZQQmVNYc4fZMusY3Rm19ViTi3w8i-g8bYCjt5qk2Ps',
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
      'https://media.licdn.com/dms/image/C4E22AQFV8v1Wu2ZxLQ/feedshare-shrink_2048_1536/0/1669821529476?e=1674086400&v=beta&t=DMhFFcercFoN13QFlL3ZVKWFvRXAqmdMz1b-BAWTsbA',
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
      'https://media.licdn.com/dms/image/C4E22AQGj_7DTrCKhng/feedshare-shrink_800/0/1669721039747?e=1674086400&v=beta&t=5IsRSPpjBp_x2Z1iXVU3GE3SDE4A_E2ATq_hmKhj7wE',
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
      'https://media.licdn.com/dms/image/C4D22AQG79HDVB3dh0Q/feedshare-shrink_2048_1536/0/1670234398370?e=1674086400&v=beta&t=jOCqIZysRIMb38F4T9W4Dops-N7VX5N5DBPWSMC8Q9A',
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
      'https://media.licdn.com/dms/image/C4D22AQFBNSM7qttfgw/feedshare-shrink_800/0/1670350511807?e=1674086400&v=beta&t=5ujl7Q0vSUO-XUnXC3M3JD0lwZbr3XqGrC0pfTpDOBA',
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
      'https://media.licdn.com/dms/image/C5622AQEgHiPWkLZ0CA/feedshare-shrink_800/0/1670181563864?e=1674086400&v=beta&t=zbKP3wz4xmQTSxmFP5xiiohIW7Kb1snY3sYtykJN5So',
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
      'https://media.licdn.com/dms/image/C5622AQEUuNsBprGS2g/feedshare-shrink_800/0/1671129680330?e=1674086400&v=beta&t=Kb2khLGpDDagJjtIfP2F_FBy4p7oVaxiyq58kZl-19A',
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
      'https://media.licdn.com/dms/image/C4D22AQE-SrzHHlr6ww/feedshare-shrink_800/0/1669299312647?e=1674086400&v=beta&t=oUW8s8jnKDyCoY2EdSIIu4vRsz_FCX5WvRYp1Wy5LFw',
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
      'https://media.licdn.com/dms/image/C4D22AQEmf57pm5HICw/feedshare-shrink_800/0/1669216956413?e=1674086400&v=beta&t=m3fGG1p9KR7Dtdl0GwVV-T15Kq-H_yGPm2kOP6e6nJ8',
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
      'https://media.licdn.com/dms/image/sync/D5618AQECaZwu4Kfi0Q/companyUpdate-article-image-shrink_627_1200/0/1671098591768/Dell-deadline_800x400-04png?e=1674086400&v=beta&t=w2KoPvB9VOZeIrPqiIIdSeYHs81nbVwvQttufIuUQBk',
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
      'https://media.licdn.com/dms/image/sync/C4D27AQEA4tAeB37Ywg/articleshare-shrink_1280_800/0/1670312112170?e=1671807600&v=beta&t=LNoClDMVKZuPrC8d5EzLDc6jZiCNShvEW3g3yl-XVRQ',
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
      'https://media.licdn.com/dms/image/sync/D4D18AQF1gUF9aDxZZw/companyUpdate-article-image-shrink_627_1200/0/1653563177325/050422FBAD-TIIBrandAwareness-TalentThrivesHere-01png?e=1674086400&v=beta&t=nePBBvf6OYe18aG-PCzYnp5_GnMHncD8_G-NhuraD2c',
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
      'https://media.licdn.com/dms/image/C4D22AQETPD_MN6jyCg/feedshare-shrink_800/0/1670264343107?e=1674086400&v=beta&t=6s51nrd8s8sqGDLpvD8D7D1nmDuVj36dKlQouVbSL0U',
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
      'https://media.licdn.com/dms/image/sync/C5627AQFE1rUKHPWg7Q/articleshare-shrink_800/0/1670863599163?e=1671807600&v=beta&t=8B38Zp3qCr9iJJhAVuyT1U_q9Wp2OO-rd-rmihSMpyM',
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
    image:
      'https://media.licdn.com/dms/image/D4D22AQHPKe-LFd38LA/feedshare-shrink_2048_1536/0/1670753009045?e=1674086400&v=beta&t=YO1P0vImoOH2s_xYXJGt2M27zaVyqkudLJqizA4isL8',
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
    image:
      'https://media.licdn.com/dms/image/C4D22AQHxx98eI9RbzQ/feedshare-shrink_800/0/1670589804515?e=1674086400&v=beta&t=5VAAM17xkJX9s8IWVJsWfYcLUyjK9zstTQtP9Tc9f6c',
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
      'https://media.licdn.com/dms/image/sync/D4D18AQEkk17u7CDY9A/companyUpdate-article-image-shrink_627_1200/0/1666855999141/AdvisorySM1jpg?e=1674086400&v=beta&t=4bs8coL7vsJHF0qhIWwlIZukdEgAWJtAuVYrvU65zFY',
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
      'https://media.licdn.com/dms/image/C4D22AQHy5_rn7CFD2Q/feedshare-shrink_800/0/1670315519449?e=1674086400&v=beta&t=I5bI9I9fkInKKd5BP4N0Gig5ZZpJI5A3oN7EoZxbFU8',
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
      'https://media.licdn.com/dms/image/C5622AQG2gnIkLazEnw/feedshare-shrink_800/0/1669558599009?e=1674086400&v=beta&t=_CTtHNHF3CnaeID1oSDx7QSaiKaUawWEuvylcu77NsQ',
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
      'https://media.licdn.com/dms/image/sync/C4D27AQEA4tAeB37Ywg/articleshare-shrink_1280_800/0/1670312112170?e=1671872400&v=beta&t=CG9c_DxiU7g341w9sduIS7ZIFC6cwMiVEaSRWS8zlA8',
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
    image:
      'https://media.licdn.com/dms/image/C4D22AQHXHFzvcF9rTA/feedshare-shrink_800/0/1670294693205?e=1674086400&v=beta&t=XtLsJ6RIEtgGtFqxPALo-RPKYLYNH5icLrpkkEFc0Bo',
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
      'https://media.licdn.com/dms/image/C4D22AQHfnS7yhjgtaA/feedshare-shrink_800/0/1670341598946?e=1674086400&v=beta&t=bOz_w14rq4X63mtChlb6JljtXsb8Grd8CLlTa6hYdrw',
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
      'https://media.licdn.com/dms/image/C4D22AQGe-tTurzN5Qg/feedshare-shrink_800/0/1661342566682?e=1674086400&v=beta&t=B2atVJlTX4is3IJjZsp88lXTz-DZ2nFD31GIvOnlkoo',
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
      'https://media.licdn.com/dms/image/D4D1DAQHyX-_Gb6l_wA/ssu-carousel-card-shrink_400_400/0/1668617177961?e=1671872400&v=beta&t=T38uvvbpDhGaKGKpGxU-yjluP1q-sT0QzuliLh147Tw',
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
      'https://media.licdn.com/dms/image/C4D22AQETPD_MN6jyCg/feedshare-shrink_800/0/1670264343107?e=1674086400&v=beta&t=6s51nrd8s8sqGDLpvD8D7D1nmDuVj36dKlQouVbSL0U',
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
      'https://media.licdn.com/dms/image/sync/D5618AQHXiEvyC0x-kA/companyUpdate-article-image-shrink_627_1200/0/1670883780017/SF-22-14_Developer-Paid-Media_Final_I-UTAMpng?e=1674086400&v=beta&t=_qGZ_V1SMdJ4kL5sas2QJCP1ruIvqA5wwaR37YzksZs',
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
      'https://media.licdn.com/dms/image/sync/D4E18AQE8MjVNrrvXqQ/companyUpdate-article-image-shrink_1280/0/1666957817125/Operationalleadgenbpng?e=1674086400&v=beta&t=B2h0L3noSyN-UnwwIYaVqnwYZiPBy7mhaHg8ffo-I1Y',
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
      'https://media.licdn.com/dms/image/C5622AQFX2lMYAm9jag/feedshare-shrink_800/0/1670394023904?e=1674086400&v=beta&t=c1ICo1OLRIEOBly4D0FyMHOkZuu9nyTrAJj4S4xUHMM',
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
      'https://media.licdn.com/dms/image/C5622AQFcQz-Z_NCc5Q/feedshare-shrink_800/0/1670394023016?e=1674086400&v=beta&t=4j1VfzVW-lP1JsaEe5EHAIIZtUigk7_sKquZP05CQZg',
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
      'https://media.licdn.com/dms/image/C5622AQEJDNNhIbzt0w/feedshare-shrink_800/0/1670394022119?e=1674086400&v=beta&t=5c85wfv_XMIL-rYVYvjeaTnk9ptTq2vxydP2-KD3Taw',
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
      'https://media.licdn.com/dms/image/C4E22AQEYNPXOn7aIGw/feedshare-shrink_800/0/1671112100822?e=1674086400&v=beta&t=MQEPUNdbwY2q3RWdRtaZahWos2i_ZuhIi-89o456yW4',
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
      'https://media.licdn.com/dms/image/C5622AQGH5al2UtRBlg/feedshare-shrink_800/0/1670510032238?e=1674086400&v=beta&t=wmXaby-qPexJyWSfVtOxsx4OTqx6ZZQfCD9jqs11sjY',
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
      'https://media.licdn.com/dms/image/C5622AQHiLaOt_DXsPA/feedshare-shrink_800/0/1670510032302?e=1674086400&v=beta&t=9txiTypL4-cThNEsMv0Om37bej0W6A52NV_3CxEf2uE',
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
      'https://media.licdn.com/dms/image/C4D22AQGgLLGusk5xIw/feedshare-shrink_800/0/1670496647886?e=1674086400&v=beta&t=w7TV52s0lvG2yw5De9F9jIgREKd1E_byUW_YjG8cPQE',
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
    image:
      'https://media.licdn.com/dms/image/sync/C5627AQFE1rUKHPWg7Q/articleshare-shrink_800/0/1670863599163?e=1671872400&v=beta&t=GV-cm1eZ8mZ73S0m8bw4AlIVP8td6e7YDOwZMazFBqE',
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
      'https://media.licdn.com/dms/image/sync/D5618AQECaZwu4Kfi0Q/companyUpdate-article-image-shrink_627_1200/0/1671098591768/Dell-deadline_800x400-04png?e=1674086400&v=beta&t=w2KoPvB9VOZeIrPqiIIdSeYHs81nbVwvQttufIuUQBk',
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
    postDescription:
      'I’m happy to share that I’m starting a new position as Serial Killer at Aircampus',
    image:
      'https://images.hindustantimes.com/img/2022/10/13/550x309/Twitter_Video_Chucky_Dog_1665650427991_1665650440939_1665650440939.PNG',
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
  console.log(e.target);
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

//# ------------------------------- POST POPUP ------------------------------- */
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

let count = 0;
btnPost.addEventListener('click', () => {
  const html = `
          <div class="post">
          <div class="reactor-box flex">
            <div class="reactor flex">
              <img src="${userData[count].reactorImage}" alt="reactor-image">
              <p>${userData[count].reactBy} <span>likes this</span></p>
            </div>
            <i class="ph-dots-three-bold"></i>
          </div>

          <div class="poster-box flex">
            <div class="poster-info flex">
              <img src="${userData[count].authorImage}" alt="">
              <div class="poster-text flex">
                <p class="poster-name">${userData[count].authorName}</p>
                <p class="poster-job">${userData[count].jobTitle}</p>
                <p class="posted-time flex">
                  <span>${userData[count].postTime}</span>
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
            <img
              src="${userData[count].image}"
              alt="">
          </div>

          <div class="reaction-count-box flex">
            <div class="left">
              <p>${userData[count].reactBy} and ${userData[count].reactionCount} others</p>
            </div>

            <div class="right flex">
              <p>${userData[count].commentCount} comments</p>
              &middot;
              <p>${userData[count].repostCount} reposts</p>
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
        </div>
  `;
  //todo:
  // const fragment = document.createRange().createContextualFragment(html);
  //todo:

  postBox.insertAdjacentHTML('afterbegin', html);
  postPopup.classList.add('display_block');
  overlay.classList.add('hidden');
  document.body.classList.remove('disable-scroll');
  postText.value = '';
  count === userData.length - 1 ? (count = 0) : count++;
});

//# --------------------------------- OVERLAY -------------------------------- */
