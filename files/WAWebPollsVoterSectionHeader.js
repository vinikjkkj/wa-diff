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
      u = {
        root: { height: "x5yr21d", $$css: !0 },
        paddingHoriz28: {
          paddingInlineStart: "xdylf7x",
          paddingInlineEnd: "x5s3kwk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        paddingHoriz2: {
          paddingInlineStart: "x4tra6z",
          paddingInlineEnd: "x1j8ymqv",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      },
      c = { itemKey: "contacts", section: "contacts", kind: "section" },
      d = { itemKey: "others", section: "others", kind: "section" };
    function m(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.sectionType,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = [u.root, u.paddingHoriz28, u.paddingHoriz2]), (t[0] = r))
        : (r = t[0]);
      var a;
      t[1] !== n ? ((a = p(n)), (t[1] = n), (t[2] = a)) : (a = t[2]);
      var i;
      return (
        t[3] !== a
          ? ((i = s.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: r,
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
    function p(e) {
      switch (e) {
        case "contacts":
          return r("WAWebFbtCommon")("In your contacts");
        case "others":
          return r("WAWebFbtCommon")("Not in your contacts");
        default:
          return "";
      }
    }
    ((l.ContactSection = c),
      (l.OthersSection = d),
      (l.PollsVoterSectionHeader = m));
  },
  98,
);
