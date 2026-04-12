__d(
  "WAWebStaticCanvas.react",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.memo;
    function c(e) {
      var t = e.className,
        n = e.ref;
      return s.jsx("canvas", { className: t, ref: n });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = u(c, function (t, n) {
      return t.className === n.className;
    });
    l.default = d;
  },
  98,
);
