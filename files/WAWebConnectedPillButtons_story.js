__d(
  "WAWebConnectedPillButtons.story",
  ["WAWebConnectedPillButtons.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        storyName: "WAWebConnectedPillButtons",
        component: r("WAWebConnectedPillButtons.react"),
        description:
          "The component with pill buttons adjacent to one another, with the whole unit forming a pill shape",
        examples: [
          {
            example: function () {
              return s.jsx(d, {
                pills: [
                  { id: "all", title: "All" },
                  { id: "contacts", title: "Contacts" },
                ],
              });
            },
            title: "Connected Pill Buttons, 2 Pills",
          },
          {
            example: function () {
              return s.jsx(d, {
                pills: [
                  { id: "all", title: "All" },
                  { id: "contacts", title: "Contacts" },
                  { id: "other", title: "Other" },
                ],
              });
            },
            title: "Connected Pill Buttons, 3 Pills",
          },
        ],
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.pills,
        a = u("all"),
        i = a[0],
        l = a[1],
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = function (t) {
            return l(t.toString());
          }),
          (t[0] = c))
        : (c = t[0]);
      var d;
      return (
        t[1] !== i || t[2] !== n
          ? ((d = s.jsx(r("WAWebConnectedPillButtons.react"), {
              currentlySelected: i,
              pills: n,
              onChange: c,
            })),
            (t[1] = i),
            (t[2] = n),
            (t[3] = d))
          : (d = t[3]),
        d
      );
    }
    var m = c;
    l.default = m;
  },
  98,
);
