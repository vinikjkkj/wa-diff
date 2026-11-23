__d(
  "WAWebContact.MenuItem",
  ["WAWebContactCell", "WAWebMenuItems.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.contact,
        n = e.onSelect;
      return s.jsx(
        o("WAWebMenuItems.react").ActionMenuItem,
        babelHelpers.extends(
          { optionId: "contact-" + t.id.toString(), onSelect: n },
          o("WAWebContactCell").getContactCellContent(t),
        ),
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
