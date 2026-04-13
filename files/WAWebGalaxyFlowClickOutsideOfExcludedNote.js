__d(
  "WAWebGalaxyFlowClickOutsideOfExcludedNote",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useEffect;
    function d(e, t) {
      var n = o("react-compiler-runtime").c(10),
        r;
      n[0] !== e
        ? ((r = e === void 0 ? [] : e), (n[0] = e), (n[1] = r))
        : (r = n[1]);
      var a = r,
        i;
      n[2] !== a || n[3] !== t
        ? ((i = function (n) {
            if (n.target instanceof Node) {
              var e = n.target;
              a.some(function (t) {
                var n;
                return (n = t.current) == null ? void 0 : n.contains(e);
              }) || t();
            }
          }),
          (n[2] = a),
          (n[3] = t),
          (n[4] = i))
        : (i = n[4]);
      var l = i,
        s;
      n[5] !== l
        ? ((s = function (t) {
            var e = t === void 0 ? !1 : t;
            if (e) {
              document.addEventListener("mousedown", l);
              return;
            }
            document.removeEventListener("mousedown", l);
          }),
          (n[5] = l),
          (n[6] = s))
        : (s = n[6]);
      var u = s,
        d,
        m;
      (n[7] !== u
        ? ((d = function () {
            return (
              u(!0),
              function () {
                u();
              }
            );
          }),
          (m = [u]),
          (n[7] = u),
          (n[8] = d),
          (n[9] = m))
        : ((d = n[8]), (m = n[9])),
        c(d, m));
    }
    l.useClickOutsideOfExcludedNode = d;
  },
  98,
);
