__d(
  "WAWebVoipBackgroundPreviewLoader",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebVoipBackgroundImageStore",
    "WAWebVoipBackgroundImages",
    "WAWebVoipBackgroundPreview",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 8,
      m = 1e4,
      p = new Map(),
      _ = new Set(),
      f = new Set(),
      g = [],
      h = new Set(),
      y = new Set(),
      C = Promise.resolve(),
      b = 0,
      v = null;
    function S(e) {
      v == null &&
        (v = o("WAWebVoipBackgroundImages").subscribeToBackgroundImageReady(T));
      var t = { ids: e };
      h.add(t);
      var n = e.filter(function (e) {
        return f.has(e);
      });
      for (var r of e
        .filter(function (e) {
          return !f.has(e);
        })
        .concat(n)) {
        var a;
        ((a = p.get(r)) == null ? void 0 : a.state) !== "ready" &&
          !_.has(r) &&
          (_.add(r), p.has(r) || M(r, { state: "loading" }), k(r));
      }
      return (
        D(),
        function () {
          h.delete(t);
        }
      );
    }
    function R(t, n) {
      var r = p.get(t);
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
        f.add(t),
        M(t, { state: "failed" }));
    }
    function L() {
      return p;
    }
    function E(e) {
      return (
        y.add(e),
        function () {
          y.delete(e);
        }
      );
    }
    function k(e) {
      C = C.then(function () {
        return I(e);
      }).catch(function (t) {
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
          f.add(e),
          N(e, { state: "failed" }));
      });
    }
    async function I(e) {
      var t = await o(
        "WAWebVoipBackgroundImageStore",
      ).readStoredBackgroundPreview(e);
      if (t != null) {
        (f.delete(e), N(e, { state: "ready", url: URL.createObjectURL(t) }));
        return;
      }
      var n = o("WAWebVoipBackgroundImages").peekBackgroundImage(e);
      if (n != null) {
        x(e, n);
        return;
      }
      var r = await o(
        "WAWebVoipBackgroundImages",
      ).readStoredBackgroundImageForPreview(e);
      if (r != null) {
        await x(e, Promise.resolve(r));
        return;
      }
      (g.push(e), D());
    }
    function T(e) {
      var t,
        n = g.indexOf(e);
      if (n >= 0) g.splice(n, 1);
      else {
        if (
          _.has(e) ||
          ((t = p.get(e)) == null ? void 0 : t.state) !== "failed"
        )
          return;
        _.add(e);
      }
      x(e, o("WAWebVoipBackgroundImages").getBackgroundImageForPreview(e));
    }
    function D() {
      for (
        var e = function () {
            var e = g.findIndex($);
            if (e < 0) return { v: void 0 };
            var t = g.splice(e, 1),
              n = t[0];
            (b++,
              x(
                n,
                o("WAWebVoipBackgroundImages").getBackgroundImageForPreview(n),
              )
                .then(function (e) {
                  if (
                    !e &&
                    !o("WAWebVoipBackgroundImages").isBackgroundImageUnusable(n)
                  )
                    for (var t of g.splice(0)) N(t, { state: "failed" });
                })
                .finally(function () {
                  (b--, D());
                }));
          },
          t;
        b < P();
      )
        if (((t = e()), t)) return t.v;
    }
    async function x(e, t) {
      try {
        var n = await t,
          a = self.performance.now(),
          i = await o("WAPromiseTimeout").promiseTimeout(
            o("WAWebVoipBackgroundPreview").makeBackgroundPreview(n),
            m,
            "took over " + m + " ms",
          );
        return (
          o("WAWebVoipBackgroundImageStore").storeBackgroundPreview(e, i),
          f.delete(e),
          N(e, { state: "ready", url: URL.createObjectURL(i) }),
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
          f.add(e),
          N(e, { state: "failed" }),
          !1
        );
      }
    }
    function $(e) {
      for (var t of h) {
        var n = t.ids;
        if (n.includes(e)) return !0;
      }
      return !1;
    }
    function P() {
      return self.navigator.hardwareConcurrency >= d ? 2 : 1;
    }
    function N(e, t) {
      (_.delete(e), M(e, t));
    }
    function M(e, t) {
      ((p = new Map(p).set(e, t)),
        y.forEach(function (e) {
          return e();
        }));
    }
    ((l.requestBackgroundPreviews = S),
      (l.failBackgroundPreview = R),
      (l.getBackgroundPreviews = L),
      (l.subscribeToBackgroundPreviews = E));
  },
  98,
);
