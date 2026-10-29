__d(
  "WAWebLoadingScreen.story",
  ["WAWebLoadingScreen.react", "WAWebShowroomUtils", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        storyName: "WAWebLoadingScreen",
        component: o("WAWebLoadingScreen.react").LoadingScreen,
        description:
          "\n        The initial loading screen used to indicate that messages are being synced and decrypted in the background. This usually happens on 'resume', when refreshing the page.\n\n        Since users need to wait for sync to complete before they can begin using WhatsApp Web, this modal occupies the full viewport.\n    ",
        examples: [
          {
            templateStyle: o("WAWebShowroomUtils").bigPreview,
            example: function () {
              return s.jsx(o("WAWebLoadingScreen.react").LoadingScreen, {
                progress: 0,
                stage: o("WAWebLoadingScreen.react").Stage.CONNECTING,
              });
            },
            title: 'stage = "CONNECTING"',
            description: "Loading screen in connecting stage.",
          },
          {
            templateStyle: o("WAWebShowroomUtils").bigPreview,
            example: function () {
              return s.jsx(o("WAWebLoadingScreen.react").LoadingScreen, {
                progress: 40,
                stage: o("WAWebLoadingScreen.react").Stage.DOWNLOADING,
              });
            },
            title: 'stage = "DOWNLOADING"',
            description:
              "Loading screen in downloading stage with 40% progress.",
          },
          {
            templateStyle: o("WAWebShowroomUtils").bigPreview,
            example: function () {
              return s.jsx(o("WAWebLoadingScreen.react").LoadingScreen, {
                progress: 100,
                stage: o("WAWebLoadingScreen.react").Stage.ORGANIZING,
              });
            },
            title: 'stage = "ORGANIZING"',
            description: "Loading screen in organizing stage.",
          },
        ],
      };
    l.default = u;
  },
  98,
);
