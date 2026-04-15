__d(
  "WAWebContact.MenuItem",
  [
    "WAWebContactCell",
    "WAWebMenuItems.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.contact,
        r = e.onSelect,
        a;
      t[0] !== n.id
        ? ((a = n.id.toString()), (t[0] = n.id), (t[1] = a))
        : (a = t[1]);
      var i = "contact-" + a,
        l;
      t[2] !== n
        ? ((l = o("WAWebContactCell").getContactCellContent(n)),
          (t[2] = n),
          (t[3] = l))
        : (l = t[3]);
      var u;
      return (
        t[4] !== r || t[5] !== i || t[6] !== l
          ? ((u = s.jsx(
              o("WAWebMenuItems.react").ActionMenuItem,
              babelHelpers.extends({ optionId: i, onSelect: r }, l),
            )),
            (t[4] = r),
            (t[5] = i),
            (t[6] = l),
            (t[7] = u))
          : (u = t[7]),
        u
      );
    }
    l.default = u;
  },
  98,
);
