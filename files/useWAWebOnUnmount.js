__d(
  "useWAWebOnUnmount",
  ["react", "react-compiler-runtime", "useWAWebStableCallback"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = r("useWAWebStableCallback")(e),
        a,
        i;
      (t[0] !== n
        ? ((a = function () {
            return n;
          }),
          (i = [n]),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : ((a = t[1]), (i = t[2])),
        s(a, i));
    }
    l.default = u;
  },
  98,
);
