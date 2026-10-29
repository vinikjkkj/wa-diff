__d(
  "WAWebLockScreen.story",
  ["WAWebLockScreen.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        storyName: "WAWebLockScreen",
        component: r("WAWebLockScreen.react"),
        description: "Lock Screen Component",
        examples: [
          {
            example: function () {
              return s.jsx(r("WAWebLockScreen.react"), {});
            },
            templateStyle: {
              padding: 0,
              minWidth: "90%",
              backgroundImage:
                "-webkit-linear-gradient(270deg, var(--app-background-stripe) 222px, var(--app-background) 0%)",
            },
            title: "Simple Lock Screen Example",
          },
        ],
      };
    l.default = u;
  },
  98,
);
