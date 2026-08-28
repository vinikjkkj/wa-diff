__d(
  "BillingContextUtils",
  ["Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(e, t, n, r, o) {
      o === void 0 && (o = !0);
      var a = n == null ? void 0 : n[t];
      return a == null
        ? !1
        : (e[t].enableExposureLogging === !0 && o && r(t), a.gkValue);
    }
    function s(t, r, o, a, i) {
      var s = Object.keys(t).reduce(function (a, i) {
          var s,
            u = function (n) {
              return (
                n === void 0 &&
                  (n = { do_not_log_exposure_iknowwhatimdoing: !1 }),
                l(t, i, o, r, !n.do_not_log_exposure_iknowwhatimdoing)
              );
            };
          return babelHelpers.extends(
            {},
            a,
            ((s = {}),
            (s[i] = {
              get: function (r) {
                return (e || (e = n("Promise"))).resolve(u(r));
              },
              getOrDefaultIfPromise: u,
              read: u,
            }),
            s),
          );
        }, {}),
        u = function (t) {
          t !== a && i(t);
        };
      return babelHelpers.extends({}, s, { updatePaymentAccountID: u });
    }
    function u(e, t, n, r, o, a) {
      a === void 0 && (a = !0);
      var i = e[t].params[n],
        l = e[t].products,
        s = r == null ? void 0 : r[t],
        u = typeof i.defaultValue == "boolean" ? i.defaultValue : !1;
      if (s != null) {
        var c;
        if (i.launched) {
          o(t, n, e[t].holdout);
          var d = s[n];
          return typeof d == "boolean" ? d : s.holdout ? u : !u;
        }
        if (
          l == null ||
          l.includes(
            (c = r == null ? void 0 : r.product) != null ? c : "DEFAULT",
          )
        ) {
          var m = s[n];
          if (typeof m == "boolean") return (a && o(t, n), m);
        }
      }
      return u;
    }
    function c(e) {
      if (e == null) return null;
      var t = typeof e == "number" ? e : Number(e);
      return Number.isFinite(t) ? t : null;
    }
    function d(e, t, n, r, o, a) {
      a === void 0 && (a = !0);
      var i = e[t].params[n],
        l = e[t].products,
        s = r == null ? void 0 : r[t],
        u = typeof i.defaultValue == "number" ? i.defaultValue : 0;
      if (s != null) {
        var d;
        if (i.launched) {
          var m;
          return (o(t, n, e[t].holdout), (m = c(s[n])) != null ? m : u);
        }
        if (
          l == null ||
          l.includes(
            (d = r == null ? void 0 : r.product) != null ? d : "DEFAULT",
          )
        ) {
          var p = c(s[n]);
          if (p != null) return (a && o(t, n), p);
        }
      }
      return u;
    }
    function m(t, r, o, a, i) {
      var l = Object.keys(t).reduce(function (a, i) {
          var l;
          return babelHelpers.extends(
            {},
            a,
            ((l = {}),
            (l[i] = babelHelpers.extends(
              {},
              Object.keys(t[i].params).reduce(function (a, l) {
                var s,
                  c = function (n) {
                    return (
                      n === void 0 &&
                        (n = { do_not_log_exposure_iknowwhatimdoing: !1 }),
                      u(t, i, l, o, r, !n.do_not_log_exposure_iknowwhatimdoing)
                    );
                  },
                  m = function (n) {
                    return (
                      n === void 0 &&
                        (n = { do_not_log_exposure_iknowwhatimdoing: !1 }),
                      d(t, i, l, o, r, !n.do_not_log_exposure_iknowwhatimdoing)
                    );
                  };
                return babelHelpers.extends(
                  {},
                  a,
                  ((s = {}),
                  (s[l] = {
                    get: function (r) {
                      return (e || (e = n("Promise"))).resolve(c(r));
                    },
                    getOrDefault: c,
                    log: function () {
                      return r(i, l);
                    },
                    read: c,
                    readInt: m,
                  }),
                  s),
                );
              }, {}),
            )),
            l),
          );
        }, {}),
        s = function (t) {
          t !== a && i(t);
        };
      return babelHelpers.extends({}, l, { updatePaymentAccountID: s });
    }
    ((i.buildGKContext = s), (i.readQEValue = u), (i.buildQEContext = m));
  },
  66,
);
