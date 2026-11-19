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
        b({ id: e, state: "unusable" });
        return;
      }
      var i = o("WAWebVoipVideoEffectsState").getVideoEffectsSnapshot(),
        l = i.image,
        c = i.requested;
      if (a && c && l === e) {
        b(null);
        return;
      }
      var d = { id: e, state: "loading" };
      b(d);
      var m = o("WAWebVoipVideoEffectsState").subscribeToVideoEffectsStop(
        function () {
          u === d && b(null);
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
      b(t);
      var n = o("WAWebVoipVideoEffectsState").subscribeToVideoEffectsStop(
        function () {
          u === t && b(null);
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
                : b({ state: e.status })));
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
      (t === e && b(null),
        o("WAWebVoipCustomBackground").removeCustomBackground(e),
        o("WAWebVoipVideoEffectsState").getVideoEffectsSnapshot().image === e &&
          o("WAWebVoipVideoEffectsState").blurInsteadOfBackgroundImage());
    }
    function g(t, n) {
      var a = t.id;
      o("WAWebVoipBackgroundImages")
        .getBackgroundImage(a)
        .then(
          function () {
            u === t &&
              (b(null),
              o("WAWebVoipVideoEffectsState").chooseBackgroundImage(a));
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
                b({
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
      b(null);
    }
    function y() {
      var e;
      ((e = u) == null ? void 0 : e.state) === "loading" && b(null);
    }
    function C() {
      ((u = null), c.clear());
    }
    function b(e) {
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
      (l.dropLoadingBackgroundPick = y),
      (l.resetBackgroundPickForTesting = C));
  },
  98,
);
