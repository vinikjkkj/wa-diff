__d(
  "WAWebEmojiPanelSearchResultsAnnouncement.react",
  [
    "fbt",
    "WAWebAccessibility.react",
    "WAWebPanelsDisplayLocation",
    "react",
    "react-compiler-runtime",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useMemo;
    function d(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.data,
        a = e.displayLocation,
        i;
      t[0] !== n
        ? ((i = r("sumBy")(n, m)), (t[0] = n), (t[1] = i))
        : (i = t[1]);
      var l = i,
        c;
      if (a === o("WAWebPanelsDisplayLocation").DisplayLocation.Reactions) {
        var d;
        (t[2] !== l
          ? ((d =
              l === 0
                ? s._(/*BTDS*/ "No reactions found")
                : s._(
                    /*BTDS*/ '_j{"*":"{number_of_reactions} reactions found","_1":"1 reaction found"}',
                    [s._plural(l, "number_of_reactions")],
                  )),
            (t[2] = l),
            (t[3] = d))
          : (d = t[3]),
          (c = d));
      } else {
        var p;
        (t[4] !== l
          ? ((p =
              l === 0
                ? s._(/*BTDS*/ "No emoji found")
                : s._(
                    /*BTDS*/ '_j{"*":"{number_of_results} results found","_1":"1 result found"}',
                    [s._plural(l, "number_of_results")],
                  )),
            (t[4] = l),
            (t[5] = p))
          : (p = t[5]),
          (c = p));
      }
      var _;
      return (
        t[6] !== c
          ? ((_ = u.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
              text: c,
            })),
            (t[6] = c),
            (t[7] = _))
          : (_ = t[7]),
        _
      );
    }
    function m(e) {
      return e.emojis.length;
    }
    l.default = d;
  },
  226,
);
