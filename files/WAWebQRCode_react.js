__d(
  "WAWebQRCode.react",
  ["WAWeb-qrcode", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState;
    function _(t) {
      var n = t.colorDark,
        o = t.correctLevel,
        a = t.data,
        i = t.onChange,
        l = t.size,
        s = m(null),
        c = p(null),
        _ = c[0],
        f = c[1];
      return (
        d(
          function () {
            (a == null
              ? _ && _.clear()
              : _
                ? _.makeCode(a)
                : s.current &&
                  f(
                    new (r("WAWeb-qrcode"))(
                      s.current,
                      babelHelpers.extends(
                        {
                          correctLevel:
                            r("WAWeb-qrcode").CorrectLevel[o != null ? o : "L"],
                          height: l,
                          text: a,
                          width: l,
                        },
                        n != null && { colorDark: n },
                      ),
                    ),
                  ),
              i == null || i(s.current));
          },
          [a, _, l, i, n, o],
        ),
        t.children
          ? t.children(s)
          : u.jsx(
              "div",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props(t.xstyle),
                { ref: s },
              ),
            )
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
