__d(
  "WAWebTextLineClamp.react",
  [
    "invariant",
    "WAWebClassnames",
    "WAWebLineHeight",
    "react",
    "useWAWebPrevious",
    "useWAWebWindowSize",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useState;
    function p(e) {
      var t = e.children,
        n = e.dir,
        a = e.maxLines,
        i = e.style,
        l = a,
        c = i == null ? void 0 : i.singleLine,
        p = i == null ? void 0 : i.multipleLine,
        _ = m(c),
        f = _[0],
        g = _[1],
        h = r("useWAWebPrevious")(f),
        y = r("useWAWebWindowSize")(),
        C = y.width,
        b = r("useWAWebPrevious")(C),
        v = d(
          function (e) {
            if (!(e == null || !(C > 0)) && !(l === 1 || p == null)) {
              var t = o("WAWebLineHeight").getNumberOfLines(e);
              if (f === c && h === p && t > 1) {
                g(p);
                return;
              }
              if (f !== p && (b == null || C < b) && t > 1) {
                g(p);
                return;
              }
              if (f !== c && (b == null || C > b) && t === 1) {
                g(c);
                return;
              }
            }
          },
          [l, c, p, f, h, C, b],
        );
      l >= 1 || s(0, 56351);
      var S;
      return (
        l === 1
          ? (S = {
              display: "block",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            })
          : (S = {
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: l,
            }),
        u.jsx("span", {
          ref: v,
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "x1n2onr6 x6ikm8r x10wlt62",
            f,
          ),
          style: S,
          dir: n,
          children: t,
        })
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
