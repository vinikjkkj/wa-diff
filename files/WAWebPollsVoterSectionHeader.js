__d(
  "WAWebPollsVoterSectionHeader",
  ["WAWebFbtCommon", "WAWebFlex.react", "WAWebText.react", "react"],
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
      var t = e.sectionType;
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        xstyle: [u.root, u.paddingHoriz28, u.paddingHoriz2],
        children: s.jsx(o("WAWebText.react").WAWebTextMuted, {
          children: p(t),
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
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
