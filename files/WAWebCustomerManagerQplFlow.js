__d(
  "WAWebCustomerManagerQplFlow",
  ["WAWebQplFlow"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = null;
      function r(n, r) {
        return s(
          o("WAWebQplFlow").startQplFlow(e, {
            annotations: n,
            timeoutInMs: r != null ? r : t,
          }),
        );
      }
      function a(e, t) {
        var o;
        ((o = n) == null || o.cancel(), (n = r(e, t)));
      }
      function i(e, t) {
        var r;
        (r = n) == null || r.pointOnce(e, t);
      }
      function l(e) {
        var t;
        return ((t = n) == null ? void 0 : t.hasFired(e)) === !0;
      }
      function u(e) {
        var t;
        (t = n) == null || t.annotate(e);
      }
      function c(e) {
        var t;
        (t = n) == null || t.endSuccess(e);
      }
      function d(e, t) {
        var r;
        (r = n) == null || r.endFail(e, t);
      }
      function m() {
        var e;
        (e = n) == null || e.cancel();
      }
      function p() {
        var e;
        return ((e = n) == null ? void 0 : e.isActive()) === !0;
      }
      return {
        annotate: u,
        cancel: m,
        endFail: d,
        endSuccess: c,
        hasFired: l,
        isActive: p,
        pointOnce: i,
        start: a,
        startRun: r,
      };
    }
    function s(e) {
      var t = e,
        n = new Set();
      function r(e) {
        var n = t;
        n != null && ((t = null), e(n));
      }
      return {
        annotate: function (n) {
          var e;
          (e = t) == null || e.addAnnotations(n);
        },
        cancel: function () {
          r(function (e) {
            return e.endCancel();
          });
        },
        endFail: function (t, n) {
          r(function (e) {
            return e.endFail(t, n);
          });
        },
        endSuccess: function (t) {
          r(function (e) {
            return e.endSuccess(t);
          });
        },
        hasFired: function (t) {
          return n.has(t);
        },
        isActive: function () {
          var e;
          return ((e = t) == null ? void 0 : e.isActive()) === !0;
        },
        pointOnce: function (r, o) {
          var e = t;
          e == null || n.has(r) || (n.add(r), e.addPoint(r, o));
        },
      };
    }
    l.createCustomerManagerQplFlow = e;
  },
  98,
);
