__d(
  "ZenonReceiverRenderedResolutionUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      if (e === t) return !0;
      var n = Object.keys(e),
        r = Object.keys(t);
      if (n.length !== r.length) return !1;
      for (var o of n) {
        if (!r.includes(o)) return !1;
        var a = e[o],
          i = t[o];
        for (var l of Object.keys(a)) if (a[l] !== i[l]) return !1;
      }
      return !0;
    }
    function l(e) {
      return !e || !e.renderWidth || !e.renderHeight
        ? 0
        : e.renderWidth * e.renderHeight;
    }
    function s(t, n) {
      if (t === n) return !0;
      var r = Object.keys(t),
        o = Object.keys(n);
      if (r.length !== o.length) return !1;
      for (var a of r)
        if (!Object.prototype.hasOwnProperty.call(n, a) || !e(t[a], n[a]))
          return !1;
      return !0;
    }
    function u(e, t) {
      if (!e || !t) return 0;
      var n = 0,
        r = Object.keys(e);
      for (var o of r) {
        var a = e[o],
          i = t[o];
        if (a && i) {
          var s = Object.keys(a);
          for (var u of s) {
            var c = a[u],
              d = i[u],
              m = 0;
            if (c && d) {
              var p = l(c),
                _ = l(d);
              p > 0 && _ > 0 ? (m = p > _ ? p / _ : _ / p) : (m = p + p);
            }
            m > n && (n = m);
          }
        }
      }
      return n;
    }
    ((i.areEqualRenderResolutionMaps = s),
      (i.getMaxResolutionChangeMultiplier = u));
  },
  66,
);
