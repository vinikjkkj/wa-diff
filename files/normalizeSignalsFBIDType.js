__d(
  "normalizeSignalsFBIDType",
  ["SignalsValidationUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { rejectHashed: void 0 },
      s = "l:",
      u = /^[0-9]+$/,
      c = "18446744073709551615";
    function d(e) {
      if (e.length < c.length) return !0;
      if (e.length > c.length) return !1;
      for (var t = 0; t < e.length; t++) {
        if (e[t] < c[t]) return !0;
        if (e[t] > c[t]) return !1;
      }
      return !0;
    }
    function m(t, n, r) {
      n === void 0 && (n = e);
      var a = typeof t == "number" ? String(t) : t;
      if (typeof a != "string") return { normalizedValue: null };
      if (
        o("SignalsValidationUtils").looksLikeHashed(a) &&
        n.rejectHashed !== !0
      )
        return { normalizedValue: a };
      var i = a;
      if (
        (n.stripPrefix &&
          typeof i == "string" &&
          i.slice(0, s.length) === s &&
          (i = i.substring(s.length)),
        !u.test(i) || !d(i))
      )
        return { normalizedValue: null };
      if (n.scoped) {
        var l = r;
        return l != null &&
          Array.isArray(l) &&
          l.some(function (e) {
            return m(e, { rejectHashed: !0 }).normalizedValue != null;
          })
          ? { normalizedValue: i }
          : { normalizedValue: null };
      }
      return { normalizedValue: i };
    }
    l.default = m;
  },
  98,
);
