__d(
  "useLazyRef",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useRef,
      u = {};
    function c(e) {
      var t = s(u);
      return (t.current === u && (t.current = e()), t);
    }
    l.default = c;
  },
  98,
);
