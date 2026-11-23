__d(
  "WAWebUseGroupParticipantContextMenu",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (e == null) return null;
      var n = t == null ? void 0 : t.get(e.contactId),
        r = n != null && (t == null ? void 0 : t.canPromote(n)) === !1,
        o = babelHelpers.extends({}, e);
      return (
        r && (o.menu = e.menuWithoutPromotion),
        {
          key:
            e.contactId.toString() +
            ":" +
            (r ? "without-promotion" : "with-promotion"),
          options: o,
        }
      );
    }
    i.useCurrentParticipantContextMenu = e;
  },
  66,
);
