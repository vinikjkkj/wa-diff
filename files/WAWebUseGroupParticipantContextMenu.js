__d(
  "WAWebUseGroupParticipantContextMenu",
  ["react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("react-compiler-runtime").c(11);
      if (e == null) return null;
      var r;
      if (n[0] !== e.contactId || n[1] !== t) {
        var a = t == null ? void 0 : t.get(e.contactId);
        ((r = a != null && (t == null ? void 0 : t.canPromote(a)) === !1),
          (n[0] = e.contactId),
          (n[1] = t),
          (n[2] = r));
      } else r = n[2];
      var i = r,
        l;
      n[3] !== e || n[4] !== i
        ? ((l = babelHelpers.extends({}, e)),
          i && (l.menu = e.menuWithoutPromotion),
          (n[3] = e),
          (n[4] = i),
          (n[5] = l))
        : (l = n[5]);
      var s;
      n[6] !== e.contactId
        ? ((s = e.contactId.toString()), (n[6] = e.contactId), (n[7] = s))
        : (s = n[7]);
      var u = s + ":" + (i ? "without-promotion" : "with-promotion"),
        c;
      return (
        n[8] !== l || n[9] !== u
          ? ((c = { key: u, options: l }), (n[8] = l), (n[9] = u), (n[10] = c))
          : (c = n[10]),
        c
      );
    }
    l.useCurrentParticipantContextMenu = e;
  },
  98,
);
