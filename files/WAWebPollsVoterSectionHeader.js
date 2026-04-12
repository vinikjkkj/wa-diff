__d(
  "WAWebPollsVoterSectionHeader",
  ["WAWebFbtCommon", "WAWebFlex.react", "WAWebText.react", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = { itemKey: "contacts", section: "contacts", kind: "section" },
      c = { itemKey: "others", section: "others", kind: "section" };
    function d(e) {
      var t = e.sectionType;
      return s.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        className: "x5yr21d x4tra6z x1j8ymqv",
        children: s.jsx(o("WAWebText.react").WAWebTextMuted, {
          children: m(t),
        }),
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
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
