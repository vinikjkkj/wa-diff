__d(
  "useWAWebActiveSelection",
  ["WAWebDomScroll", "WAWebFocusTracer", "react", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useRef,
      c = s.useState;
    function d(e, t, n) {
      var a =
          n != null
            ? n
            : function (n) {
                return (
                  (e == null || e.getter == null ? void 0 : e.getter(n)) === t
                );
              },
        i = u(null),
        l = c(!1),
        s = l[0],
        d = l[1],
        m = (e == null ? void 0 : e.value) != null ? a(e.value) : !1;
      s !== m && d(m);
      var p = function (t, n) {
        if (t === "focus") {
          var e = i.current;
          e &&
            (r("WAWebFocusTracer").focus(e),
            n && o("WAWebDomScroll").scrollIntoViewIfNeeded(e));
        }
        d(!!t);
      };
      return (o("useWAWebListener").useListener(e, t, p), [i, s]);
    }
    l.default = d;
  },
  98,
);
