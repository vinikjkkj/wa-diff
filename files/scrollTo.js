__d(
  "scrollTo",
  ["debounce", "emptyFunction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["onScrollComplete", "onScrollStart"];
    function s(t) {
      var n,
        o,
        a = t.onScrollComplete,
        i = t.onScrollStart,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s = (n = t.top) != null ? n : window.pageYOffset,
        u = (o = t.left) != null ? o : window.pageXOffset;
      if ((i && i(), window.pageYOffset === s && window.pageXOffset === u))
        return (a && a(), { dispose: r("emptyFunction") });
      var c = !1;
      try {
        var d = document.documentElement;
        if (d == null) return (a && a(), { dispose: r("emptyFunction") });
        var m = "scrollBehavior" in d.style;
        m ? window.scrollTo(l) : (c = !0);
      } catch (e) {
        c = !0;
      }
      if (c)
        return (
          window.scrollTo(u, s),
          a && a(),
          { dispose: r("emptyFunction") }
        );
      var p,
        _ = !1;
      return (
        a != null &&
          ((p = r("debounce")(function () {
            ((_ = !0), window.removeEventListener("scroll", p), a());
          }, 200)),
          window.addEventListener("scroll", p, { passive: !0 }),
          window.dispatchEvent(new Event("scroll"))),
        {
          dispose: function () {
            _ ||
              (p && p.reset(),
              window.removeEventListener("scroll", p),
              window.scrollTo(window.pageYOffset, window.pageXOffset));
          },
        }
      );
    }
    l.default = s;
  },
  98,
);
