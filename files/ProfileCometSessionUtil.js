__d(
  "ProfileCometSessionUtil",
  ["ProfileCometRoutingUtils", "ProfileCometSessionConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.tracePolicy;
      if (o("ProfileCometRoutingUtils").isProfilePolicy(t)) {
        var n = e.params,
          r = n.profile_idorvanity,
          a = n.vanity;
        return typeof a == "string" ? a : typeof r == "string" ? r : null;
      }
      return null;
    }
    function s(e) {
      var t = e.tracePolicy;
      if (o("ProfileCometRoutingUtils").isProfilePolicy(t)) {
        var n = e.params,
          r = n.id,
          a = n.profile_idorvanity;
        if (typeof r == "string") return r;
        if (typeof a == "string") return a;
      }
      return null;
    }
    function u(t, n) {
      if (n == null) return !1;
      var r = n.tracePolicy;
      if (!o("ProfileCometRoutingUtils").isProfilePolicy(r)) return !1;
      if (t == null) return !0;
      var a = t.tracePolicy;
      if (!o("ProfileCometRoutingUtils").isProfilePolicy(a)) return !1;
      var i = e(n),
        l = e(t),
        u = s(n),
        c = s(t);
      return (i != null && i === l) || (u != null && u === c);
    }
    function c(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var r = e.key(n);
        r != null &&
          r.startsWith(o("ProfileCometSessionConfig").PREFIX) &&
          t.push(r);
      }
      return t;
    }
    ((l.isSameProfileSession = u), (l.getStorageKeys = c));
  },
  98,
);
