/**
 * gamehub/
│
├── public/
│   ├── favicon.ico
│   └── index.html
│
├── src/
│   │
│   ├── assets/              # Images, icons
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/          # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── GameCard.jsx
│   │   ├── Loader.jsx
│   │   └── PrivateRoute.jsx
│   │
│   ├── layouts/             # Layout system
│   │   ├── MainLayout.jsx
│   │   └── AuthLayout.jsx
│   │
│   ├── pages/               # All pages
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   ├── Banner.jsx
│   │   │   ├── PopularGames.jsx
│   │   │   └── Newsletter.jsx
│   │   │
│   │   ├── GameDetails/
│   │   │   └── GameDetails.jsx
│   │   │
│   │   ├── Auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ForgotPassword.jsx
│   │   │
│   │   ├── Profile/
│   │   │   ├── MyProfile.jsx
│   │   │   └── UpdateProfile.jsx
│   │   │
│   │   ├── Extra/
│   │   │   └── TopGames.jsx   # additional route
│   │   │
│   │   └── Error/
│   │       └── NotFound.jsx
│   │
│   ├── routes/              # Router config
│   │   └── router.jsx
│   │
│   ├── context/             # Auth context
│   │   └── AuthProvider.jsx
│   │
│   ├── hooks/               # Custom hooks
│   │   └── useAuth.js
│   │
│   ├── services/            # Firebase / API
│   │   └── firebase.config.js
│   │
│   ├── data/                # JSON data
│   │   └── games.json
│   │
│   ├── utils/               # Helper functions
│   │   └── validation.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env                     # Firebase keys (IMPORTANT)
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
 */