__d(
  "WAWebDefaultIcon.story",
  [
    "WAWebDetailImage.react",
    "WAWebShowroomUtils",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState;
    function c() {
      var e = o("react-compiler-runtime").c(5),
        t = [],
        n = u(1),
        r = n[0],
        a = n[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function (t) {
            var e = t.currentTarget.value;
            a(parseInt(e, 10));
          }),
          (e[0] = i))
        : (i = e[0]);
      for (var l = i, c = 1; c <= 17; c++) {
        var d = s.jsx("option", { children: c }, c);
        t.push(d);
      }
      var m = s.jsx("select", { onChange: l, children: t }),
        p;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { className: "x1anpbxc x1pju0fl x10wjd1d x10l6tqk" }),
          (e[1] = p))
        : (p = e[1]);
      var _;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = o("WAWebShowroomUtils").getRandomContact()), (e[2] = _))
        : (_ = e[2]);
      var f;
      return (
        e[3] !== r
          ? ((f = s.jsx(
              "div",
              babelHelpers.extends({}, p, {
                children: s.jsx(o("WAWebDetailImage.react").DefaultIcon, {
                  id: _.id,
                  theme: o("WAWebDetailImage.react").DefaultIconThemeType
                    .GroupChatProfilePicture,
                  authorColor: r,
                }),
              }),
            )),
            (e[3] = r),
            (e[4] = f))
          : (f = e[4]),
        s.jsxs("div", { children: [m, f] })
      );
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = {
      storyName: "WAWebDefaultIcon",
      component: o("WAWebDetailImage.react").DefaultIcon,
      description:
        "\n        Render placeholder for when user does not have profile picture\n    ",
      examples: [
        {
          example: function () {
            return s.jsx("div", {
              children: s.jsx("div", {
                className: "x1anpbxc x1pju0fl x10wjd1d x10l6tqk",
                children: s.jsx(o("WAWebDetailImage.react").DefaultIcon, {
                  id: o("WAWebShowroomUtils").getRandomContact().id,
                }),
              }),
            });
          },
          title: "Default icon",
          description: "This is the default placeholder",
        },
        {
          example: function () {
            return s.jsx(c, {});
          },
          title: "Default icon with color selection",
          description:
            "This is used in Group Chat Profile picture and add color",
        },
      ],
    };
    l.default = d;
  },
  98,
);
