__d(
  "useWAWebDebouncedChanges",
  ["react", "useWAWebDebouncedCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = e.debounceMs,
        n = e.shouldDebounce,
        o = e.value,
        a = c(o),
        i = a[0],
        l = a[1],
        s = r("useWAWebDebouncedCallback")(function (e) {
          l(e);
        }, t);
      return (
        u(
          function () {
            n ? s(o) : (s.cancel(), l(o));
          },
          [o, n, s],
        ),
        i
      );
    }
    l.useDebouncedChanges = d;
  },
  98,
);
