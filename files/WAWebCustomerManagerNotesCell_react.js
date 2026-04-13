__d(
  "WAWebCustomerManagerNotesCell.react",
  [
    "fbt",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
    "useWAWebNoteValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(3),
        a = e.chatJid,
        i = r("useWAWebNoteValues")(a),
        l = (t = i.value) == null ? void 0 : t.content;
      if (i.loading) return null;
      if (l == null || l === "") {
        var c;
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = u.jsx(r("WDSText.react"), {
                type: "Body2",
                colorName: "contentDeemphasized",
                maxLines: 1,
                children: s._(/*BTDS*/ "\u2014"),
              })),
              (n[0] = c))
            : (c = n[0]),
          c
        );
      }
      var d;
      return (
        n[1] !== l
          ? ((d = u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: l,
            })),
            (n[1] = l),
            (n[2] = d))
          : (d = n[2]),
        d
      );
    }
    l.default = c;
  },
  226,
);
