__d(
  "CometAudioManagerNoop.react",
  ["CometAudioManagerContexts", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useMemo;
    function c(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = { register: p, unregister: m, update: d }), (t[0] = r))
        : (r = t[0]);
      var a = r,
        i;
      return (
        t[1] !== n
          ? ((i = s.jsx(
              o("CometAudioManagerContexts").AudioApiContext.Provider,
              { value: a, children: n },
            )),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    function d() {}
    function m() {}
    function p() {}
    l.default = c;
  },
  98,
);
