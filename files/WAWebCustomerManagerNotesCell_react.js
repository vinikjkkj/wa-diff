__d(
  "WAWebCustomerManagerNotesCell.react",
  ["fbt", "WDSText.react", "react", "useWAWebNoteValues"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.chatJid,
        o = r("useWAWebNoteValues")(n),
        a = (t = o.value) == null ? void 0 : t.content;
      return o.loading
        ? null
        : a == null || a === ""
          ? u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDeemphasized",
              maxLines: 1,
              children: s._(/*BTDS*/ "\u2014"),
            })
          : u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "contentDefault",
              maxLines: 1,
              children: a,
            });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
