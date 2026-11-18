__d(
  "WAWebVoipBackgroundPick",
  [
    "WALogger",
    "WAWebVoipBackgroundImages",
    "WAWebVoipCustomBackground",
    "WAWebVoipVideoEffectsState",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 400,
      u = null,
      c = new Set();
    function d() {
      return u;
    }
    function m(e) {
      return (
        c.add(e),
        function () {
          c.delete(e);
        }
      );
    }
    function p(e, t) {
      var n = t === void 0 ? {} : t,
        r = n.whileBrowsing,
        a = r === void 0 ? !1 : r;
      if (o("WAWebVoipBackgroundImages").isBackgroundImageUnusable(e)) {
        C({ id: e, state: "unusable" });
        return;
      }
      var i = o("WAWebVoipVideoEffectsState").getVideoEffectsSnapshot(),
        l = i.image,
        c = i.requested;
      if (a && c && l === e) {
        C(null);
        return;
      }
      var d = { id: e, state: "loading" };
      C(d);
      var m = o("WAWebVoipVideoEffectsState").subscribeToVideoEffectsStop(
        function () {
          u === d && C(null);
        },
      );
      a
        ? self.setTimeout(function () {
            u === d ? g(d, m) : m();
          }, s)
        : g(d, m);
    }
    function _(e) {
      var t = { state: "adding" };
      C(t);
      var n = o("WAWebVoipVideoEffectsState").subscribeToVideoEffectsStop(
        function () {
          u === t && C(null);
        },
      );
      o("WAWebVoipCustomBackground")
        .makeCustomBackground(e)
        .then(function (e) {
          (n(),
            u === t &&
              (e.status === "made"
                ? p(
                    o("WAWebVoipCustomBackground").addCustomBackground(
                      e.picture,
                    ),
                  )
                : C({ state: e.status })));
        });
    }
    function f(e) {
      var t = (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          "id" in e
        ) {
          var t = e.id;
          return t;
        }
        return null;
      })(u);
      (t === e && C(null),
        o("WAWebVoipCustomBackground").removeCustomBackground(e),
        o("WAWebVoipVideoEffectsState").getVideoEffectsSnapshot().image === e &&
          o("WAWebVoipVideoEffectsState").setBackgroundImage(null));
    }
    function g(t, n) {
      var a = t.id;
      o("WAWebVoipBackgroundImages")
        .getBackgroundImage(a)
        .then(
          function () {
            if (u === t) {
              C(null);
              var e = o("WAWebVoipVideoEffectsState").getVideoEffectsSnapshot(),
                n = e.image,
                r = e.requested;
              (n !== a && o("WAWebVoipVideoEffectsState").setBackgroundImage(a),
                r ||
                  o("WAWebVoipVideoEffectsState").setVideoEffectsRequested(!0));
            }
          },
          function (n) {
            (o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] picked background ",
                    " failed to load",
                  ])),
                a,
              )
              .catching(r("getErrorSafe")(n)),
              u === t &&
                C({
                  id: a,
                  state: o(
                    "WAWebVoipBackgroundImages",
                  ).isBackgroundImageUnusable(a)
                    ? "unusable"
                    : "failed",
                }));
          },
        )
        .finally(n);
    }
    function h() {
      C(null);
    }
    function y() {
      ((u = null), c.clear());
    }
    function C(e) {
      e !== u &&
        ((u = e),
        c.forEach(function (e) {
          return e();
        }));
    }
    ((l.getBackgroundPick = d),
      (l.subscribeToBackgroundPick = m),
      (l.pickBackground = p),
      (l.pickBackgroundPhoto = _),
      (l.removeBackgroundPhoto = f),
      (l.clearBackgroundPick = h),
      (l.resetBackgroundPickForTesting = y));
  },
  98,
);
