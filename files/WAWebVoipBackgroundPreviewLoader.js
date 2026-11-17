__d(
  "WAWebVoipBackgroundPreviewLoader",
  [
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebVoipBackgroundImageStore",
    "WAWebVoipBackgroundImages",
    "WAWebVoipBackgroundPreview",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 8,
      p = 1e4,
      _ = new Map(),
      f = new Set(),
      g = new Set(),
      h = [],
      y = new Set(),
      C = new Set(),
      b = (d || (d = n("Promise"))).resolve(),
      v = 0,
      S = null;
    function R(e) {
      S == null &&
        (S = o("WAWebVoipBackgroundImages").subscribeToBackgroundImageReady($));
      var t = { ids: e };
      y.add(t);
      var n = e.filter(function (e) {
        return g.has(e);
      });
      for (var r of e
        .filter(function (e) {
          return !g.has(e);
        })
        .concat(n)) {
        var a;
        ((a = _.get(r)) == null ? void 0 : a.state) !== "ready" &&
          !f.has(r) &&
          (f.add(r), _.has(r) || O(r, { state: "loading" }), T(r));
      }
      return (
        P(),
        function () {
          y.delete(t);
        }
      );
    }
    function L(t, n) {
      var r = _.get(t);
      (r == null ? void 0 : r.state) !== "ready" ||
        r.url !== n ||
        (o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [effects] background ",
              "'s preview didn't load",
            ])),
          t,
        ),
        URL.revokeObjectURL(n),
        o("WAWebVoipBackgroundImageStore").forgetStoredBackgroundPreview(t),
        g.add(t),
        O(t, { state: "failed" }));
    }
    function E() {
      return _;
    }
    function k(e) {
      return (
        C.add(e),
        function () {
          C.delete(e);
        }
      );
    }
    function I() {
      ((_ = new Map()),
        f.clear(),
        g.clear(),
        (h.length = 0),
        y.clear(),
        C.clear(),
        (b = (d || (d = n("Promise"))).resolve()),
        (v = 0),
        S == null || S(),
        (S = null));
    }
    function T(e) {
      b = b
        .then(function () {
          return D(e);
        })
        .catch(function (t) {
          (o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [effects] could not look up background ",
                  "'s preview",
                ])),
              e,
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("voip-effects-preview-lookup-failed"),
            g.add(e),
            F(e, { state: "failed" }));
        });
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebVoipBackgroundImageStore",
          ).readStoredBackgroundPreview(e);
          if (t != null) {
            (g.delete(e),
              F(e, { state: "ready", url: URL.createObjectURL(t) }));
            return;
          }
          var r = o("WAWebVoipBackgroundImages").peekBackgroundImage(e);
          if (r != null) {
            N(e, r);
            return;
          }
          var a = yield o(
            "WAWebVoipBackgroundImages",
          ).readStoredBackgroundImageForPreview(e);
          if (a != null) {
            yield N(e, (d || (d = n("Promise"))).resolve(a));
            return;
          }
          (h.push(e), P());
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
      var t,
        n = h.indexOf(e);
      if (n >= 0) h.splice(n, 1);
      else {
        if (
          f.has(e) ||
          ((t = _.get(e)) == null ? void 0 : t.state) !== "failed"
        )
          return;
        f.add(e);
      }
      N(e, o("WAWebVoipBackgroundImages").getBackgroundImageForPreview(e));
    }
    function P() {
      for (
        var e = function () {
            var e = h.findIndex(w);
            if (e < 0) return { v: void 0 };
            var t = h.splice(e, 1),
              n = t[0];
            (v++,
              N(
                n,
                o("WAWebVoipBackgroundImages").getBackgroundImageForPreview(n),
              )
                .then(function (e) {
                  if (
                    !e &&
                    !o("WAWebVoipBackgroundImages").isBackgroundImageUnusable(n)
                  )
                    for (var t of h.splice(0)) F(t, { state: "failed" });
                })
                .finally(function () {
                  (v--, P());
                }));
          },
          t;
        v < A();
      )
        if (((t = e()), t)) return t.v;
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield t,
              a = self.performance.now(),
              i = yield o("WAPromiseTimeout").promiseTimeout(
                o("WAWebVoipBackgroundPreview").makeBackgroundPreview(n),
                p,
                "took over " + p + " ms",
              );
            return (
              o("WAWebVoipBackgroundImageStore").storeBackgroundPreview(e, i),
              g.delete(e),
              F(e, { state: "ready", url: URL.createObjectURL(i) }),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] background ",
                    " preview made in ",
                    " ms, ",
                    " B",
                  ])),
                e,
                Math.round(self.performance.now() - a),
                i.size,
              ),
              !0
            );
          } catch (t) {
            return (
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] could not make background ",
                    "'s preview: ",
                    "",
                  ])),
                e,
                r("getErrorSafe")(t).message,
              ),
              g.add(e),
              F(e, { state: "failed" }),
              !1
            );
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      for (var t of y) {
        var n = t.ids;
        if (n.includes(e)) return !0;
      }
      return !1;
    }
    function A() {
      return self.navigator.hardwareConcurrency >= m ? 2 : 1;
    }
    function F(e, t) {
      (f.delete(e), O(e, t));
    }
    function O(e, t) {
      ((_ = new Map(_).set(e, t)),
        C.forEach(function (e) {
          return e();
        }));
    }
    ((l.requestBackgroundPreviews = R),
      (l.failBackgroundPreview = L),
      (l.getBackgroundPreviews = E),
      (l.subscribeToBackgroundPreviews = k),
      (l.resetBackgroundPreviewsForTesting = I));
  },
  98,
);
