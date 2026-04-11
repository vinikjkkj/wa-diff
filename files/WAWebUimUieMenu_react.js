__d(
  "WAWebUimUieMenu.react",
  ["WANullthrows", "WAWebCmd", "react", "useWAWebUIM"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useImperativeHandle,
      p = c.useRef;
    function _(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.contextMenu,
        l = r("useWAWebUIM")(),
        s = p(null);
      d(function () {
        return (
          o("WAWebCmd").Cmd.openContextMenu(
            { menuOptions: i, uim: r("WANullthrows")(l) },
            function (e) {
              s.current = e;
            },
          ),
          function () {
            o("WAWebCmd").Cmd.closeContextMenu(l);
          }
        );
      }, []);
      var u = function () {
        return s.current;
      };
      return (
        m(n, function () {
          return { getElement: u };
        }),
        null
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
