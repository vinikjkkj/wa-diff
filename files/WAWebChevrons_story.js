__d(
  "WAWebChevrons.story",
  [
    "WAWebChevronCustomIcons",
    "WAWebShowroomStory.react",
    "WDSIconIcChevronRight.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.direction;
      switch (n) {
        case "right": {
          var a;
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = s.jsx(r("WDSIconIcChevronRight.react"), {
                  height: 24,
                  width: 24,
                })),
                (t[0] = a))
              : (a = t[0]),
            a
          );
        }
        case "down": {
          var i;
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = s.jsx(
                  o("WAWebChevronCustomIcons").ChevronDownCustomIcon,
                  { height: 24, width: 24 },
                )),
                (t[1] = i))
              : (i = t[1]),
            i
          );
        }
        case "left": {
          var l;
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = s.jsx(
                  o("WAWebChevronCustomIcons").ChevronLeftCustomIcon,
                  { height: 24, width: 24 },
                )),
                (t[2] = l))
              : (l = t[2]),
            l
          );
        }
        case "up": {
          var u;
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = s.jsx(o("WAWebChevronCustomIcons").ChevronUpCustomIcon, {
                  height: 24,
                  width: 24,
                })),
                (t[3] = u))
              : (u = t[3]),
            u
          );
        }
      }
    }
    var c = {
      storyName: "WAWebChevrons",
      section: o("WAWebShowroomStory.react").StorySectionType.ATOM,
      component: u,
      description: "Shows the chevrons we have available in the app",
      examples: [
        {
          title: "Chevron Right",
          example: function () {
            return s.jsx(u, { direction: "right" });
          },
          description: "This is the default chevron icon direction",
        },
        {
          title: "Chevron Down",
          example: function () {
            return s.jsx(u, { direction: "down" });
          },
          description:
            "Custom component <ChevronDownCustomIcon /> can be used here",
        },
        {
          title: "Chevron Left",
          example: function () {
            return s.jsx(u, { direction: "left" });
          },
          description:
            "Custom component <ChevronLeftCustomIcon /> can be used here",
        },
        {
          title: "Chevron Up",
          example: function () {
            return s.jsx(u, { direction: "up" });
          },
          description:
            "Custom component <ChevronUpCustomIcon /> can be used here",
        },
      ],
    };
    l.default = c;
  },
  98,
);
