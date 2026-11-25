__d(
  "MAIBAGP8PageIGConnectOutcome",
  ["errorCode"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 1373074,
      u = new Map([
        [2825001, "page_access"],
        [1752297, "page_access"],
        [2825012, "portfolio_access"],
        [2198012, "page_access"],
        [2455027, "new_access"],
        [1752298, "not_professional"],
        [1752299, "not_professional"],
        [1690154, "already_connected"],
        [1373098, "instagram_attention"],
        [2825058, "unavailable"],
        [2825054, "unavailable"],
        [1690114, "limit"],
        [2859043, "verification"],
        [2825051, "integrity"],
        [2446325, "integrity"],
        [2859015, "integrity"],
        [1818164, "integrity"],
        [2825059, "integrity"],
      ]);
    function c(t, n) {
      var r,
        o = { errorCode: t, opStatus: n };
      if (t === e)
        return babelHelpers.extends({}, o, { outcome: "connected_elsewhere" });
      var a =
        (r = t != null ? u.get(t) : null) != null
          ? r
          : n === "BLOCKED"
            ? "integrity"
            : null;
      return a != null
        ? babelHelpers.extends({}, o, { outcome: "blocked", reason: a })
        : t == null
          ? babelHelpers.extends({}, o, {
              outcome: "error",
              reason: "unconfirmed",
            })
          : babelHelpers.extends({}, o, { outcome: "error" });
    }
    l.default = c;
  },
  98,
);
