__d(
  "WAWebMediaEditorEnumsFonts",
  ["fbt", "$InternalEnum"],
  function (t, n, r, o, a, i, l, s) {
    var e = n("$InternalEnum").Mirrored([
        "SANS_SERIF",
        "SERIF",
        "NORICAN_REGULAR",
        "BRYNDAN_WRITE",
        "OSWALD_HEAVY",
      ]),
      u = n("$InternalEnum").Mirrored(["LEFT", "CENTER", "RIGHT"]);
    function c() {
      return Array.from(e.members());
    }
    function d(t) {
      switch (t) {
        case e.SANS_SERIF:
          return { fontFamily: "sans-serif" };
        case e.SERIF:
          return { fontFamily: '"Droid Serif", serif' };
        case e.NORICAN_REGULAR:
          return { fontFamily: '"Norican"' };
        case e.BRYNDAN_WRITE:
          return { fontFamily: '"Bryndan-Write"' };
        case e.OSWALD_HEAVY:
          return { fontFamily: '"Oswald"', fontWeight: "bold" };
      }
    }
    function m(t) {
      switch (t) {
        case e.SANS_SERIF:
          return s._(/*BTDS*/ "Sans Serif");
        case e.SERIF:
          return s._(/*BTDS*/ "Serif");
        case e.NORICAN_REGULAR:
          return s._(/*BTDS*/ "Norican");
        case e.BRYNDAN_WRITE:
          return s._(/*BTDS*/ "Bryndan Write");
        case e.OSWALD_HEAVY:
          return s._(/*BTDS*/ "Oswald");
      }
    }
    ((l.FontType = e),
      (l.TextAlignment = u),
      (l.getAllFonts = c),
      (l.getFontStyle = d),
      (l.getFontTranslation = m));
  },
  226,
);
