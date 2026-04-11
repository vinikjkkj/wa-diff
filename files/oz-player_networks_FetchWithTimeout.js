__d(
  "oz-player/networks/FetchWithTimeout",
  [
    "oz-player/shims/OzFetchAPI",
    "oz-player/shims/ozClearTimeout",
    "oz-player/shims/ozSetTimeoutAcrossTransitions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, n, a, i) {
      var l = null,
        s;
      if ("AbortController" in t && a != null && a != 0) {
        var u = new AbortController();
        ((l = r("oz-player/shims/ozSetTimeoutAcrossTransitions")(function () {
          return u.abort();
        }, a)),
          (s = babelHelpers.extends({}, n, { signal: u.signal })));
      } else s = babelHelpers.extends({}, n);
      return (
        i != null && (s = babelHelpers.extends({}, s, { referrer: i })),
        o("oz-player/shims/OzFetchAPI")
          .fetch(e, s)
          .then(function (e) {
            return (r("oz-player/shims/ozClearTimeout")(l), e);
          })
      );
    }
    l.default = e;
  },
  98,
);
