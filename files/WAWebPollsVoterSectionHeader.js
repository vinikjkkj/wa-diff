__d(
  "WAWebPollsVoterSectionHeader",
  [
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { itemKey: "contacts", section: "contacts", kind: "section" },
      c = { itemKey: "others", section: "others", kind: "section" };
    function d(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.sectionType,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = "x5yr21d x4tra6z x1j8ymqv"), (t[0] = r))
        : (r = t[0]);
      var a;
      t[1] !== n ? ((a = m(n)), (t[1] = n), (t[2] = a)) : (a = t[2]);
      var i;
      return (
        t[3] !== a
          ? ((i = s.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              className: r,
              children: s.jsx(o("WAWebText.react").WAWebTextMuted, {
                children: a,
              }),
            })),
            (t[3] = a),
            (t[4] = i))
          : (i = t[4]),
        i
      );
    }
    function m(e) {
      switch (e) {
        case "contacts":
          return r("WAWebFbtCommon")("In your contacts");
        case "others":
          return r("WAWebFbtCommon")("Not in your contacts");
        default:
          return "";
      }
    }
    ((l.ContactSection = u),
      (l.OthersSection = c),
      (l.PollsVoterSectionHeader = d));
  },
  98,
);
