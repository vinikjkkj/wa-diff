__d(
  "WAWebBox.react",
  [
    "WAWebFlexStyles",
    "WAWebStructureStyles",
    "react",
    "stylex",
    "useWAWebHandlerProps",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = {
        ellipsis: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          whiteSpace: "xuxw1ft",
          textOverflow: "xlyipyv",
          $$css: !0,
        },
        nowrap: { whiteSpace: "xuxw1ft", $$css: !0 },
        wrap: { whiteSpace: "x126k92a", $$css: !0 },
        initial: { whiteSpace: "xti2ec1", $$css: !0 },
      };
    function m(e) {
      return {
        "aria-label": e.ariaLabel,
        "aria-pressed": e.ariaPressed,
        "aria-checked": e.ariaChecked,
      };
    }
    function p(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.as,
        l = i === void 0 ? "div" : i,
        u = a.children,
        p = a.dir,
        _ = a.labelFor,
        f = a.style,
        g = a.testid,
        h = a.textWrap,
        y = a.title,
        C = a.xstyle,
        b = o("WAWebFlexStyles").getFlexStyles(a),
        v = o("WAWebStructureStyles").getStructureStyles(a),
        S = o("useWAWebHandlerProps").useHandlerProps(a),
        R = m(a),
        L;
      return (
        l === "label" && (L = _),
        c.jsx(
          l,
          babelHelpers.extends(
            {
              ref: n,
              className: (s || (s = r("stylex")))([
                b.xstyle,
                v,
                h != null && d[h],
                C,
              ]),
              style: babelHelpers.extends({}, f, b.inline),
              dir: p,
              title: y,
              "data-testid": void 0,
              htmlFor: L,
            },
            R,
            S,
            { children: u },
          ),
        )
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
