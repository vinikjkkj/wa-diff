__d(
  "useContainerBreakpoints",
  [
    "$InternalEnum",
    "gkx",
    "react",
    "react-compiler-runtime",
    "useResizeObserver",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useState,
      d = n("$InternalEnum")({
        BiggerContainerSmallerChild: 0,
        BiggerContainerBiggerChild: 1,
      });
    function m(e, t) {
      var n = e[0],
        r = n.maxContainerWidth,
        o = n.width,
        a = babelHelpers.arrayLikeToArray(e).slice(1);
      if (r === 1 / 0 || a.length === 0) return o;
      switch (t) {
        case d.BiggerContainerSmallerChild: {
          var i = "calc((" + r + "px - 100%) * 9999)",
            l = m(a, t);
          return (
            typeof l == "number" &&
              (l = "min(" + l + "px, (100% - " + (r + 0.1) + "px) * 9999)"),
            "max(" + l + ", min(" + o + ", " + i + "))"
          );
        }
        case d.BiggerContainerBiggerChild: {
          var s = "calc((100% - " + r + "px) * 9999)",
            u = m(a, t);
          return "min(" + u + ", max(" + o + ", " + s + "))";
        }
      }
    }
    function p(e, t) {
      var n = o("react-compiler-runtime").c(5),
        a = c(null),
        i = a[0],
        l = a[1],
        s;
      n[0] !== e
        ? ((s = function (n) {
            var t = n.width,
              r;
            for (var o of e)
              if (!(t > o.maxContainerWidth)) {
                r = o.width;
                break;
              }
            l(r);
          }),
          (n[0] = e),
          (n[1] = s))
        : (s = n[1]);
      var u = s,
        d = r("useResizeObserver")(u),
        m;
      return (
        n[2] !== i || n[3] !== d
          ? ((m = [d, i]), (n[2] = i), (n[3] = d), (n[4] = m))
          : (m = n[4]),
        m
      );
    }
    function _(e, t) {
      var n = o("react-compiler-runtime").c(5),
        r;
      n[0] !== e || n[1] !== t
        ? ((r = m(e, t)), (n[0] = e), (n[1] = t), (n[2] = r))
        : (r = n[2]);
      var a = r,
        i;
      return (
        n[3] !== a ? ((i = [void 0, a]), (n[3] = a), (n[4] = i)) : (i = n[4]),
        i
      );
    }
    var f = r("gkx")("24318") ? _ : p;
    ((l.BreakpointRelationship = d), (l.useContainerBreakpoints = f));
  },
  98,
);
