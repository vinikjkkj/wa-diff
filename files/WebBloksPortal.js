__d(
  "WebBloksPortal",
  ["ReactDOM", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        r = e.target,
        a = r === void 0 ? document.body : r;
      if (a != null) {
        var i;
        return (
          t[0] !== n || t[1] !== a
            ? ((i = o("ReactDOM").createPortal(n, a)),
              (t[0] = n),
              (t[1] = a),
              (t[2] = i))
            : (i = t[2]),
          i
        );
      }
    }
    l.default = u;
  },
  98,
);
