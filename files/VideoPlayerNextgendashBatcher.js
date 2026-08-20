__d(
  "VideoPlayerNextgendashBatcher",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      var o = [],
        a = null;
      function i() {
        var e,
          t = o;
        ((o = []), (e = a) == null || e.cancel(), (a = null), r(t));
      }
      function s(r) {
        (o.push(r), a == null && (a = l(e, i, n)), o.length >= t && a.run());
      }
      return { push: s };
    }
    function l(e, t, n) {
      var r = !1,
        o = t,
        a = e.setTimeout(function () {
          ((r = !0), l());
        }, n);
      function i() {
        (a != null && e.clearTimeout(a), (a = null));
      }
      function l() {
        if ((i(), o != null)) {
          var e = o;
          ((o = null), e(r));
        }
      }
      return { cancel: i, run: l };
    }
    i.createBatcher = e;
  },
  66,
);
