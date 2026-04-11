__d(
  "smoothScrollTo",
  ["ExecutionEnvironment", "UserAgent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("UserAgent").isBrowser("Firefox"),
      u =
        (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        window.matchMedia("(prefers-reduced-motion: reduce)"),
      c = u && u.matches,
      d =
        (e || (e = r("ExecutionEnvironment"))).canUseDOM &&
        document.documentElement != null &&
        "scrollBehavior" in document.documentElement.style,
      m = new WeakMap();
    function p(e, t, n) {
      var r = t.left,
        o = r === void 0 ? 0 : r,
        a = t.top,
        i = a === void 0 ? 0 : a;
      (s &&
        !m.get(e) &&
        o !== 0 &&
        ((e.scrollLeft += o / Math.abs(o)), m.set(e, !0)),
        d
          ? (e.scrollTo({ behavior: c ? "auto" : "smooth", left: o, top: i }),
            n != null &&
              "onscrollend" in window &&
              e.addEventListener("scrollend", n, { once: !0 }))
          : (e.scrollTo(o, i), n == null || n()));
    }
    l.default = p;
  },
  98,
);
