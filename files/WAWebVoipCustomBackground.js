__d(
  "WAWebVoipCustomBackground",
  [
    "Promise",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebNoop",
    "WAWebVoipBackgroundImageStore",
    "WAWebVoipBackgroundPreview",
    "WAWebVoipCustomBackgroundPicture",
    "WAWebVoipVideoEffectsODS",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = "custom-",
      _ = 3e4,
      f = 1e4,
      g = 2e3,
      h = null,
      y = null,
      C = 0,
      b = new Set(),
      v = new Set();
    function S(e) {
      return e.startsWith(p);
    }
    function R() {
      return y;
    }
    function L(e) {
      return (
        b.add(e),
        function () {
          b.delete(e);
        }
      );
    }
    function E(e) {
      return (
        v.add(e),
        function () {
          v.delete(e);
        }
      );
    }
    function k() {
      var e = M();
      e.then(function (t) {
        h === e && t != null && w(t.id) && A(t);
      }, r("WAWebNoop"));
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAPromiseTimeout").promiseTimeout(
            M(),
            g,
            "took over " + g + " ms to read",
          );
          return t != null && t.id === e
            ? { columns: 1, rows: 1, tiles: [t.picture] }
            : null;
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t;
          try {
            t = yield o("WAPromiseTimeout").promiseTimeout(
              o("WAWebVoipCustomBackgroundPicture").makeCustomBackgroundPicture(
                e,
              ),
              _,
              "took over " + _ + " ms",
            );
          } catch (e) {
            (o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [effects] could not make a custom background: ",
                  "",
                ])),
              r("getErrorSafe")(e).message,
            ),
              (t = { status: "unreadable" }));
          }
          return (
            t.status !== "made" &&
              (o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] custom background turned down: ",
                    "",
                  ])),
                t.status,
              ),
              o("WAWebVoipVideoEffectsODS").logVideoEffects(
                t.status === "not_a_picture"
                  ? "custom_background_rejected_not_a_picture"
                  : t.status === "too_large"
                    ? "custom_background_rejected_too_large"
                    : t.status === "too_many_pixels"
                      ? "custom_background_rejected_too_many_pixels"
                      : t.status === "unreadable"
                        ? "custom_background_rejected_unreadable"
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                t.status,
                            );
                          })(),
              )),
            t
          );
        })),
        x.apply(this, arguments)
      );
    }
    function $(t) {
      C = Math.max(Date.now(), C + 1);
      var r = { id: "" + p + C, picture: t };
      return (
        (h = (m || (m = n("Promise"))).resolve(r)),
        A(r),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [effects] custom background ",
              " added",
            ])),
          r.id,
        ),
        o("WAWebVoipVideoEffectsODS").logVideoEffects(
          "custom_background_added",
        ),
        o("WAWebVoipBackgroundImageStore")
          .storeCustomBackground(r.id, r.picture)
          .then(function (e) {
            e ||
              o("WAWebVoipVideoEffectsODS").logVideoEffects(
                "custom_background_not_kept",
              );
          }),
        r.id
      );
    }
    function P(e) {
      var t = y;
      t == null ||
        t.id !== e ||
        (t.preview.state === "ready" && URL.revokeObjectURL(t.preview.url),
        (h = (m || (m = n("Promise"))).resolve(null)),
        F(null),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [effects] custom background ",
              " removed",
            ])),
          e,
        ),
        o("WAWebVoipVideoEffectsODS").logVideoEffects(
          "custom_background_removed",
        ),
        o("WAWebVoipBackgroundImageStore")
          .forgetStoredCustomBackground()
          .then(function (e) {
            e ||
              o("WAWebVoipVideoEffectsODS").logVideoEffects(
                "custom_background_not_removed",
              );
          }));
    }
    function N(e, t) {
      var n,
        r,
        o = (n = y) == null ? void 0 : n.preview;
      ((r = y) == null ? void 0 : r.id) === e &&
        (o == null ? void 0 : o.state) === "ready" &&
        o.url === t &&
        (URL.revokeObjectURL(t), F({ id: e, preview: { state: "failed" } }));
    }
    function M() {
      if (h != null) return h;
      var e = o("WAWebVoipBackgroundImageStore")
        .readStoredCustomBackground()
        .then(function (t) {
          if (t.status === "unreadable")
            throw (
              h === e && (h = null),
              r("err")("custom background: the device could not be read")
            );
          return t.status === "kept" ? { id: t.id, picture: t.picture } : null;
        });
      return (
        (h = e),
        e.then(function (t) {
          t != null &&
            h === e &&
            v.forEach(function (e) {
              return e(t.id);
            });
        }, r("WAWebNoop")),
        e
      );
    }
    function w(e) {
      return y == null || y.id !== e || y.preview.state === "failed";
    }
    function A(e) {
      var t,
        n = (t = y) == null ? void 0 : t.preview;
      ((n == null ? void 0 : n.state) === "ready" && URL.revokeObjectURL(n.url),
        F({ id: e.id, preview: { state: "loading" } }),
        o("WAPromiseTimeout")
          .promiseTimeout(
            o("WAWebVoipBackgroundPreview").makeBackgroundPreview({
              columns: 1,
              rows: 1,
              tiles: [e.picture],
            }),
            f,
            "took over " + f + " ms",
          )
          .then(
            function (t) {
              var n;
              ((n = y) == null ? void 0 : n.id) === e.id &&
                F({
                  id: e.id,
                  preview: { state: "ready", url: URL.createObjectURL(t) },
                });
            },
            function (t) {
              var n;
              (o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] could not make custom background ",
                    "'s preview: ",
                    "",
                  ])),
                e.id,
                r("getErrorSafe")(t).message,
              ),
                ((n = y) == null ? void 0 : n.id) === e.id &&
                  F({ id: e.id, preview: { state: "failed" } }));
            },
          ));
    }
    function F(e) {
      ((y = e),
        b.forEach(function (e) {
          return e();
        }));
    }
    ((l.isCustomBackgroundId = S),
      (l.getCustomBackground = R),
      (l.subscribeToCustomBackground = L),
      (l.subscribeToCustomBackgroundRead = E),
      (l.loadCustomBackground = k),
      (l.getCustomBackgroundImage = I),
      (l.makeCustomBackground = D),
      (l.addCustomBackground = $),
      (l.removeCustomBackground = P),
      (l.failCustomBackgroundPreview = N));
  },
  98,
);
