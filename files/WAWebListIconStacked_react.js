__d(
  "WAWebListIconStacked.react",
  ["react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = 2,
      d = 12,
      m = 9,
      p = {
        container: {
          display: "x3nfvp2",
          alignItems: "x6s0dn4",
          position: "x1n2onr6",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
      };
    function _(t) {
      var n = t.colors,
        o = t.size,
        a = o === void 0 ? d : o,
        i = t.horizontalOffset,
        l = i === void 0 ? m : i,
        s = t.xstyle;
      if (n.length === 0) return null;
      var _ = n.slice(0, c),
        f = _.length === 1 ? a : a + (_.length - 1) * l;
      if (_.length === 1)
        return u.jsx(
          "span",
          babelHelpers.extends(
            { "data-testid": void 0 },
            (e || (e = r("stylex"))).props(p.container, s),
            {
              style: { width: f, height: a },
              children: u.jsx("span", {
                className:
                  "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x10l6tqk xhtitgo",
                style: { backgroundColor: _[0], width: a, height: a, left: 0 },
              }),
            },
          ),
        );
      var g = a / 2 - l,
        h = a / 2,
        y = a / 2 + 2.5;
      return u.jsxs(
        "span",
        babelHelpers.extends(
          { "data-testid": void 0 },
          (e || (e = r("stylex"))).props(p.container, s),
          {
            style: { width: f, height: a },
            children: [
              u.jsx("span", {
                className:
                  "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x10l6tqk x1vjfegm",
                style: {
                  backgroundColor: _[1],
                  width: a,
                  height: a,
                  left: l,
                  maskImage:
                    "radial-gradient(circle at " +
                    g +
                    "px " +
                    h +
                    "px, transparent 0, transparent " +
                    y +
                    "px, black " +
                    y +
                    "px)",
                  WebkitMaskImage:
                    "radial-gradient(circle at " +
                    g +
                    "px " +
                    h +
                    "px, transparent 0, transparent " +
                    y +
                    "px, black " +
                    y +
                    "px)",
                },
              }),
              u.jsx("span", {
                className:
                  "x1c9tyrk xeusxvb x1pahc9y x1ertn4p x2lah0s x10l6tqk xhtitgo",
                style: { backgroundColor: _[0], width: a, height: a, left: 0 },
              }),
            ],
          },
        ),
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = _));
  },
  98,
);
