__d(
  "WAWebVoipCustomBackground",
  [
    "WALogger",
    "WAPromiseTimeout",
    "WAWebNoop",
    "WAWebVoipBackgroundImageStore",
    "WAWebVoipBackgroundPreview",
    "WAWebVoipCustomBackgroundPicture",
    "WAWebVoipVideoEffectsODS",
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
      m = "custom-",
      p = 3e4,
      _ = 1e4,
      f = 2e3,
      g = null,
      h = null,
      y = 0,
      C = new Set(),
      b = new Set();
    function v(e) {
      return e.startsWith(m);
    }
    function S() {
      return h;
    }
    function R(e) {
      return (
        C.add(e),
        function () {
          C.delete(e);
        }
      );
    }
    function L(e) {
      return (
        b.add(e),
        function () {
          b.delete(e);
        }
      );
    }
    function E() {
      var e = $();
      e.then(function (t) {
        g === e && t != null && P(t.id) && N(t);
      }, r("WAWebNoop"));
    }
    async function k(e) {
      var t = await o("WAPromiseTimeout").promiseTimeout(
        $(),
        f,
        "took over " + f + " ms to read",
      );
      return t != null && t.id === e
        ? { columns: 1, rows: 1, tiles: [t.picture] }
        : null;
    }
    async function I(t) {
      var n;
      try {
        n = await o("WAPromiseTimeout").promiseTimeout(
          o("WAWebVoipCustomBackgroundPicture").makeCustomBackgroundPicture(t),
          p,
          "took over " + p + " ms",
        );
      } catch (t) {
        (o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [effects] could not make a custom background: ",
              "",
            ])),
          r("getErrorSafe")(t).message,
        ),
          (n = { status: "unreadable" }));
      }
      return (
        n.status !== "made" &&
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [effects] custom background turned down: ",
                "",
              ])),
            n.status,
          ),
          o("WAWebVoipVideoEffectsODS").logVideoEffects(
            n.status === "not_a_picture"
              ? "custom_background_rejected_not_a_picture"
              : n.status === "too_large"
                ? "custom_background_rejected_too_large"
                : n.status === "too_many_pixels"
                  ? "custom_background_rejected_too_many_pixels"
                  : n.status === "unreadable"
                    ? "custom_background_rejected_unreadable"
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            n.status,
                        );
                      })(),
          )),
        n
      );
    }
    function T(e) {
      y = Math.max(Date.now(), y + 1);
      var t = { id: "" + m + y, picture: e };
      return (
        (g = Promise.resolve(t)),
        N(t),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: [effects] custom background ",
              " added",
            ])),
          t.id,
        ),
        o("WAWebVoipVideoEffectsODS").logVideoEffects(
          "custom_background_added",
        ),
        o("WAWebVoipBackgroundImageStore")
          .storeCustomBackground(t.id, t.picture)
          .then(function (e) {
            e ||
              o("WAWebVoipVideoEffectsODS").logVideoEffects(
                "custom_background_not_kept",
              );
          }),
        t.id
      );
    }
    function D(e) {
      var t = h;
      t == null ||
        t.id !== e ||
        (t.preview.state === "ready" && URL.revokeObjectURL(t.preview.url),
        (g = Promise.resolve(null)),
        M(null),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
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
    function x(e, t) {
      var n,
        r,
        o = (n = h) == null ? void 0 : n.preview;
      ((r = h) == null ? void 0 : r.id) === e &&
        (o == null ? void 0 : o.state) === "ready" &&
        o.url === t &&
        (URL.revokeObjectURL(t), M({ id: e, preview: { state: "failed" } }));
    }
    function $() {
      if (g != null) return g;
      var e = o("WAWebVoipBackgroundImageStore")
        .readStoredCustomBackground()
        .then(function (t) {
          if (t.status === "unreadable")
            throw (
              g === e && (g = null),
              r("err")("custom background: the device could not be read")
            );
          return t.status === "kept" ? { id: t.id, picture: t.picture } : null;
        });
      return (
        (g = e),
        e.then(function (t) {
          t != null &&
            g === e &&
            b.forEach(function (e) {
              return e(t.id);
            });
        }, r("WAWebNoop")),
        e
      );
    }
    function P(e) {
      return h == null || h.id !== e || h.preview.state === "failed";
    }
    function N(e) {
      var t,
        n = (t = h) == null ? void 0 : t.preview;
      ((n == null ? void 0 : n.state) === "ready" && URL.revokeObjectURL(n.url),
        M({ id: e.id, preview: { state: "loading" } }),
        o("WAPromiseTimeout")
          .promiseTimeout(
            o("WAWebVoipBackgroundPreview").makeBackgroundPreview({
              columns: 1,
              rows: 1,
              tiles: [e.picture],
            }),
            _,
            "took over " + _ + " ms",
          )
          .then(
            function (t) {
              var n;
              ((n = h) == null ? void 0 : n.id) === e.id &&
                M({
                  id: e.id,
                  preview: { state: "ready", url: URL.createObjectURL(t) },
                });
            },
            function (t) {
              var n;
              (o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] could not make custom background ",
                    "'s preview: ",
                    "",
                  ])),
                e.id,
                r("getErrorSafe")(t).message,
              ),
                ((n = h) == null ? void 0 : n.id) === e.id &&
                  M({ id: e.id, preview: { state: "failed" } }));
            },
          ));
    }
    function M(e) {
      ((h = e),
        C.forEach(function (e) {
          return e();
        }));
    }
    ((l.isCustomBackgroundId = v),
      (l.getCustomBackground = S),
      (l.subscribeToCustomBackground = R),
      (l.subscribeToCustomBackgroundRead = L),
      (l.loadCustomBackground = E),
      (l.getCustomBackgroundImage = k),
      (l.makeCustomBackground = I),
      (l.addCustomBackground = T),
      (l.removeCustomBackground = D),
      (l.failCustomBackgroundPreview = x));
  },
  98,
);
