__d(
  "WAWebDefaultAddProfilePicture.react",
  ["WAWebDefaultProfilePicture.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["backgroundStyles", "foregroundStyles"],
      s,
      u = s || (s = o("react")),
      c = {
        backgroundColor: { backgroundColor: "xfn3atn", $$css: !0 },
        foregroundColor: { color: "x1pse0pq", $$css: !0 },
      };
    function d(t) {
      var n = t.backgroundStyles,
        o = t.foregroundStyles,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return u.jsx(
        r("WAWebDefaultProfilePicture.react"),
        babelHelpers.extends(
          {
            backgroundStyles: [n, c.backgroundColor],
            foregroundStyles: [o, c.foregroundColor],
          },
          a,
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
