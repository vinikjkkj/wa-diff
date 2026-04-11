__d(
  "WAWebUimUieTooltip.react",
  ["WAWebCmd", "react", "useWAWebUIM"],
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
        i = a.tooltip,
        l = p(null),
        s = r("useWAWebUIM")();
      d(function () {
        if (s != null)
          return (
            o("WAWebCmd").Cmd.openTooltip(
              { menuOptions: i, uim: s },
              function (e) {
                l.current = e;
              },
            ),
            function () {
              o("WAWebCmd").Cmd.closeTooltip(s);
            }
          );
      }, []);
      var u = function () {
        return l.current;
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
