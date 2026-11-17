__d(
  "WAWebVoipBackgroundPick",
  [
    "WALogger",
    "WAWebVoipBackgroundImages",
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
        h({ id: e, state: "unusable" });
        return;
      }
      var i = o("WAWebVoipVideoEffectsState").getVideoEffectsSnapshot(),
        l = i.image,
        c = i.requested;
      if (a && c && l === e) {
        h(null);
        return;
      }
      var d = { id: e, state: "loading" };
      h(d);
      var m = o("WAWebVoipVideoEffectsState").subscribeToVideoEffectsStop(
        function () {
          u === d && h(null);
        },
      );
      a
        ? self.setTimeout(function () {
            u === d ? _(d, m) : m();
          }, s)
        : _(d, m);
    }
    function _(t, n) {
      var a = t.id;
      o("WAWebVoipBackgroundImages")
        .getBackgroundImage(a)
        .then(
          function () {
            if (u === t) {
              h(null);
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
                h({
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
    function f() {
      h(null);
    }
    function g() {
      ((u = null), c.clear());
    }
    function h(e) {
      e !== u &&
        ((u = e),
        c.forEach(function (e) {
          return e();
        }));
    }
    ((l.getBackgroundPick = d),
      (l.subscribeToBackgroundPick = m),
      (l.pickBackground = p),
      (l.clearBackgroundPick = f),
      (l.resetBackgroundPickForTesting = g));
  },
  98,
);
