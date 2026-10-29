__d(
  "WAWebWindowsLoginScreen.story",
  [
    "WAWebWindowsLinkScreenWrapper.react",
    "WAWebWindowsWelcomeScreenUtils",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = [
        { width: "600px", height: "600px" },
        { width: "800px", height: "600px" },
        { width: "1200px", height: "600px" },
      ],
      c = {
        storyName: "WAWebWindowsLoginScreen",
        component: r("WAWebWindowsLinkScreenWrapper.react"),
        description: "Windows native client login (welcome) screen",
        examples: u.flatMap(function (e) {
          var t = e.height,
            n = e.width,
            a = {
              padding: 0,
              minWidth: n,
              minHeight: t,
              maxWidth: n,
              maxHeight: t,
              width: n,
              height: t,
              boxSizing: "border-box",
            };
          return [
            {
              example: function () {
                return s.jsx(r("WAWebWindowsLinkScreenWrapper.react"), {});
              },
              templateStyle: a,
              title: "Windows Login Screen at " + t + " x " + n,
            },
            {
              example: function () {
                return s.jsx(r("WAWebWindowsLinkScreenWrapper.react"), {
                  forcedView: o("WAWebWindowsWelcomeScreenUtils").ViewType
                    .Signup,
                });
              },
              templateStyle: a,
              title: "Windows Signup Screen at " + t + " x " + n,
            },
          ];
        }),
      };
    l.default = c;
  },
  98,
);
