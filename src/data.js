export const data = {
  files: {
    "./sample-express-codebase/test.js": {
      http_urls: [
        [
          21,
          [
            "http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df",
          ],
        ],
      ],
      internal_endpoints: {
        get: [],
        post: [],
        delete: [],
        put: [],
      },
    },
    "./sample-express-codebase/sampledata.js": {
      http_urls: [],
      internal_endpoints: {
        get: [],
        post: [],
        delete: [],
        put: [],
      },
    },
    "./sample-express-codebase/index.js": {
      http_urls: [[13, ["https://pokeapi.co/api/v2/pokemon/${name"]]],
      internal_endpoints: {
        get: ["/", "/pokemon/:name"],
        post: ["/pokemon/add"],
        delete: [],
        put: [],
      },
    },
    "./sample-express-codebase/package.json": {
      http_urls: [],
      internal_endpoints: {
        get: [],
        post: [],
        delete: [],
        put: [],
      },
    },
  },
  outdated_packages: [
    {
      pkg_name: "dotenv",
      curr_version: "11.0.0",
      latest_version: "16.0.3",
    },
  ],
  database: {
    mongo: true,
    sql: false,
  },
  external_libraries: {
    axios: "^1.1.3",
    dotenv: "^11.0.0",
    express: "^4.18.1",
    mongoose: "^6.7.2",
  },
  files_present: {
    total_files: 4240,
    files_type: {
      ".js": 1898,
      ".json": 255,
      ".md": 319,
      ".ts": 1280,
      ".map": 166,
      "": 237,
      ".txt": 23,
      ".yml": 33,
      ".html": 12,
      ".yaml": 2,
      ".lock": 1,
      ".tgz": 1,
      ".mjs": 2,
      ".bnf": 2,
      ".markdown": 2,
      ".bak": 1,
      ".cjs": 3,
      ".mem": 1,
      ".exe": 1,
      ".node": 1,
    },
  },
  secret_scan: {
    scan_results: [
      {
        policy_break_count: 2,
        policies: ["Secrets detection", "File extensions", "Filenames"],
        policy_breaks: [
          {
            type: "OpenWeatherMap Token",
            policy: "Secrets detection",
            validity: "valid",
            known_secret: false,
            matches: [
              {
                match: "6d055e39ee237af35ca066f35474e9df",
                type: "apikey",
                line_start: 18,
                line_end: 18,
                index_start: 532,
                index_end: 563,
              },
            ],
          },
          {
            type: "OpenWeatherMap Token",
            policy: "Secrets detection",
            validity: "valid",
            known_secret: false,
            matches: [
              {
                match: "6d055e39ee237af35ca066f35474e9df",
                type: "apikey",
                line_start: 21,
                line_end: 21,
                index_start: 680,
                index_end: 711,
              },
            ],
          },
        ],
      },
      {
        policy_break_count: 5,
        policies: ["Secrets detection", "File extensions", "Filenames"],
        policy_breaks: [
          {
            type: "GitHub Access Token",
            policy: "Secrets detection",
            validity: "invalid",
            known_secret: false,
            matches: [
              {
                match: "ghp_l18N4fzepVq7l2W6evTmGjTZUy4YxDbYk0eY",
                type: "apikey",
                line_start: 5,
                line_end: 5,
                index_start: 174,
                index_end: 213,
              },
            ],
          },
          {
            type: "GitHub Access Token",
            policy: "Secrets detection",
            validity: "invalid",
            known_secret: false,
            matches: [
              {
                match: "ghp_PQxOFGqn8M8PWXGxZePE7anwAjPD5BG11bWj",
                type: "apikey",
                line_start: 10,
                line_end: 10,
                index_start: 389,
                index_end: 428,
              },
            ],
          },
          {
            type: "GitHub Access Token",
            policy: "Secrets detection",
            validity: "invalid",
            known_secret: false,
            matches: [
              {
                match: "ghp_my2Frw55bqetm7c1gV3NEa30CqngvxXJUBSc",
                type: "apikey",
                line_start: 16,
                line_end: 16,
                index_start: 752,
                index_end: 791,
              },
            ],
          },
          {
            type: "GitHub Access Token",
            policy: "Secrets detection",
            validity: "invalid",
            known_secret: false,
            matches: [
              {
                match: "ghp_40T7ASbKD14bMJFrMvwM7F3EOO9BerhfgM8c",
                type: "apikey",
                line_start: 17,
                line_end: 17,
                index_start: 793,
                index_end: 832,
              },
            ],
          },
          {
            type: "GitHub Access Token",
            policy: "Secrets detection",
            validity: "invalid",
            known_secret: false,
            matches: [
              {
                match: "ghp_EdxsMFocVihkm59cgkUp2X84mrrHJQ824xhN",
                type: "apikey",
                line_start: 18,
                line_end: 18,
                index_start: 834,
                index_end: 873,
              },
            ],
          },
        ],
      },
      {
        policy_break_count: 0,
        policies: ["Secrets detection", "File extensions", "Filenames"],
        policy_breaks: [],
      },
      {
        policy_break_count: 0,
        policies: ["Secrets detection", "File extensions", "Filenames"],
        policy_breaks: [],
      },
    ],
  },
  total_files_scanned: 4,
};
