__d(
  "WAFlowsCaretUtils",
  ["Promise", "getStyleValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 500,
      u = function (r) {
        return new (e || (e = n("Promise")))(function (e) {
          var t = d();
          if (r != null && t != null) {
            var n = m(r);
            (r.scrollBy(0, 1),
              t.style.setProperty("caret-color", n),
              r.scrollBy(0, -1),
              window.setTimeout(e, s));
          } else e();
        });
      },
      c = function () {
        var e = d();
        e != null && e.style.setProperty("caret-color", p());
      },
      d = function () {
        var e = document.activeElement;
        return e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement
          ? e
          : null;
      },
      m = function (t) {
        var e;
        return (e = o("getStyleValue").getStyleValue(
          "--waf-wds-accent-color",
          t,
        )) != null
          ? e
          : "auto";
      },
      p = function () {
        return "transparent";
      };
    ((l.showCaretOnActiveElement = u), (l.hideCaretOnActiveElement = c));
  },
  98,
);
