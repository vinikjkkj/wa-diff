__d(
  "WAWebUseGroupParticipantContextMenu",
  [
    "WAWebBotProfileGetters",
    "react-compiler-runtime",
    "useWAWebOptionalBotProfileValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = o("react-compiler-runtime").c(12),
        r = e == null ? void 0 : e.contactId,
        a;
      if (
        (n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = [
              o("WAWebBotProfileGetters").getProduct,
              o("WAWebBotProfileGetters").getIsDeprecated,
              o("WAWebBotProfileGetters").getIsDeleted,
            ]),
            (n[0] = a))
          : (a = n[0]),
        o("useWAWebOptionalBotProfileValues").useOptionalBotProfileValues(
          (r == null ? void 0 : r.isBot()) === !0 ? r : null,
          a,
        ),
        e == null)
      )
        return null;
      var i;
      if (n[1] !== e.contactId || n[2] !== t) {
        var l = t == null ? void 0 : t.get(e.contactId);
        ((i = l != null && (t == null ? void 0 : t.canPromote(l)) === !1),
          (n[1] = e.contactId),
          (n[2] = t),
          (n[3] = i));
      } else i = n[3];
      var s = i,
        u;
      n[4] !== e || n[5] !== s
        ? ((u = babelHelpers.extends({}, e)),
          s && (u.menu = e.menuWithoutPromotion),
          (n[4] = e),
          (n[5] = s),
          (n[6] = u))
        : (u = n[6]);
      var c;
      n[7] !== e.contactId
        ? ((c = e.contactId.toString()), (n[7] = e.contactId), (n[8] = c))
        : (c = n[8]);
      var d = c + ":" + (s ? "without-promotion" : "with-promotion"),
        m;
      return (
        n[9] !== u || n[10] !== d
          ? ((m = { key: d, options: u }), (n[9] = u), (n[10] = d), (n[11] = m))
          : (m = n[11]),
        m
      );
    }
    l.useCurrentParticipantContextMenu = e;
  },
  98,
);
