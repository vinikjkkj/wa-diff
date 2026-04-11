__d(
  "BaseSVGIcon.react",
  ["BaseIsDecorativeContext", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useContext,
      d = {
        color: function (t) {
          return [
            { color: t != null ? "x14rh7hd" : t, $$css: !0 },
            { "--x-color": t != null ? t : void 0 },
          ];
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(11),
        a = t.alt,
        i = t.color,
        l = t.icon,
        s = t.id,
        m = t.size,
        p = t.testid,
        _ = t.xstyle,
        f = m === void 0 ? 8 : m,
        g = c(r("BaseIsDecorativeContext")),
        h = a == null || a === "",
        y = h && g === !0 ? !0 : void 0,
        C = h ? void 0 : a,
        b;
      n[0] !== i || n[1] !== _
        ? ((b = (e || (e = r("stylex"))).props([i != null && d.color(i), _])),
          (n[0] = i),
          (n[1] = _),
          (n[2] = b))
        : (b = n[2]);
      var v;
      return (
        n[3] !== l ||
        n[4] !== s ||
        n[5] !== y ||
        n[6] !== f ||
        n[7] !== C ||
        n[8] !== b ||
        n[9] !== p
          ? ((v = u.jsx(
              l,
              babelHelpers.extends(
                {
                  "aria-hidden": y,
                  "data-testid": void 0,
                  height: f,
                  id: s,
                  title: C,
                  width: f,
                },
                b,
              ),
            )),
            (n[3] = l),
            (n[4] = s),
            (n[5] = y),
            (n[6] = f),
            (n[7] = C),
            (n[8] = b),
            (n[9] = p),
            (n[10] = v))
          : (v = n[10]),
        v
      );
    }
    l.default = m;
  },
  98,
);
