__d(
  "WAWebUseFocusSyncOnActiveItemChange",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e, t, n) {
      var r = c(e);
      u(
        function () {
          if (r.current !== e) {
            r.current = e;
            var o = t.current;
            o != null && o.contains(document.activeElement) && n();
          }
        },
        [e, t, n],
      );
    }
    l.useFocusSyncOnActiveItemChange = d;
  },
  98,
);
