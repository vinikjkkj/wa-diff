__d(
  "adsFormatErrorMessage",
  ["AdsManagerErrorUtils", "FBLogger", "FbtResultBase", "cr:242"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      (t === void 0 && (t = !1), (e = e || {}));
      var a = e.error_user_msg || e.message || "Unknown error",
        i = [];
      if (
        (a instanceof r("FbtResultBase") && (a = a.toString()),
        typeof a != "string")
      ) {
        var l, s, u, c, d, m, p, _;
        r("FBLogger")("ads_format_error_message").mustfix(
          "Non-string message passed to adsFormatErrorMessage: type=%s, constructor=%s, errorCode=%s, errorKey=%s, errorSubcode=%s",
          typeof a,
          (l =
            (s = a) == null || (s = s.constructor) == null ? void 0 : s.name) !=
            null
            ? l
            : "unknown",
          (u = (c = e) == null ? void 0 : c.code) != null ? u : "none",
          (d = (m = e) == null ? void 0 : m.key) != null ? d : "none",
          (p = (_ = e) == null ? void 0 : _.error_subcode) != null ? p : "none",
        );
      }
      if (
        (e.code && !a.includes(e.code) && i.push(e.code),
        e.key && !a.includes(e.key) && i.push(e.key),
        e.error_subcode &&
          !a.includes(e.error_subcode) &&
          i.push(e.error_subcode),
        n("cr:242"))
      ) {
        var f,
          g =
            (f = o("AdsManagerErrorUtils").getOpesMIDs(e, !0)) == null
              ? void 0
              : f[0];
        if (g != null) {
          var h = n("cr:242").getLogviewMessage(g);
          i.push(h);
        }
      }
      return i.length === 0
        ? a
        : t
          ? "(#" + i.join(".") + ")"
          : a + " (#" + i.join(".") + ")";
    }
    l.default = e;
  },
  98,
);
