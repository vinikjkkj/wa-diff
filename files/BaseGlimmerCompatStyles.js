__d(
  "BaseGlimmerCompatStyles",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 200,
      s = "xvfaeil-B",
      u = { animationDelay: "xvo38ju", $$css: !0 },
      c = {
        animationDelay: function (n) {
          return [
            u,
            {
              "--x-animationDelay": (function (e) {
                return typeof e == "number" ? e + "ms" : e != null ? e : void 0;
              })(
                "calc(" +
                  (n % 10) +
                  " * var(--glimmer-stagger-time, " +
                  e +
                  "ms))",
              ),
            },
          ];
        },
        animationIterationCount: function (t) {
          return [
            { animationIterationCount: t != null ? "xx4hqgx" : t, $$css: !0 },
            { "--x-animationIterationCount": t != null ? t : void 0 },
          ];
        },
        paused: { animationPlayState: "xorstpt", $$css: !0 },
        root: {
          animationDirection: "x1iq0kzc",
          animationDuration: "x1i9sevy",
          animationIterationCount: "xa4qsjk",
          animationName: "x43zylw",
          animationTimingFunction: "x1ag7td9",
          opacity: "x11fwcs0",
          $$css: !0,
        },
      };
    l.styles = c;
  },
  98,
);
