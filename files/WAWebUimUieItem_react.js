__d(
  "WAWebUimUieItem.react",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useImperativeHandle,
      d = u.useRef;
    function m(e) {
      var t = e.children,
        n = e.ref,
        r = d();
      return (
        c(n, function () {
          return {
            getElement: function () {
              return r.current;
            },
          };
        }),
        s.jsx("div", { ref: r, children: t })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
