__d(
  "WAWebDefaultAddProfilePicture.react",
  ["WAWebDefaultProfilePicture.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["backgroundStyles", "foregroundStyles"],
      s,
      u = s || (s = o("react")),
      c = {
        backgroundColor: { backgroundColor: "xfn3atn", $$css: !0 },
        foregroundColor: { color: "x1pse0pq", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(12),
        a,
        i,
        l;
      n[0] !== t
        ? ((a = t.backgroundStyles),
          (i = t.foregroundStyles),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l))
        : ((a = n[1]), (i = n[2]), (l = n[3]));
      var s;
      n[4] !== a
        ? ((s = [a, c.backgroundColor]), (n[4] = a), (n[5] = s))
        : (s = n[5]);
      var d;
      n[6] !== i
        ? ((d = [i, c.foregroundColor]), (n[6] = i), (n[7] = d))
        : (d = n[7]);
      var m;
      return (
        n[8] !== l || n[9] !== s || n[10] !== d
          ? ((m = u.jsx(
              r("WAWebDefaultProfilePicture.react"),
              babelHelpers.extends(
                { backgroundStyles: s, foregroundStyles: d },
                l,
              ),
            )),
            (n[8] = l),
            (n[9] = s),
            (n[10] = d),
            (n[11] = m))
          : (m = n[11]),
        m
      );
    }
    l.default = d;
  },
  98,
);
