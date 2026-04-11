__d(
  "WAWebBox.react",
  [
    "WAWebFlexStyles",
    "WAWebStructureStyles",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(17),
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.as,
        u = i.children,
        p = i.dir,
        _ = i.labelFor,
        f = i.style,
        g = i.testid,
        h = i.textWrap,
        y = i.title,
        C = i.xstyle,
        b = l === void 0 ? "div" : l,
        v = o("WAWebFlexStyles").getFlexStyles(i),
        S = o("WAWebStructureStyles").getStructureStyles(i),
        R = o("useWAWebHandlerProps").useHandlerProps(i),
        L;
      n[0] !== i ? ((L = m(i)), (n[0] = i), (n[1] = L)) : (L = n[1]);
      var E = L,
        k;
      b === "label" && (k = _);
      var I = (s || (s = r("stylex")))([v.xstyle, S, h != null && d[h], C]),
        T;
      n[2] !== v.inline || n[3] !== f
        ? ((T = babelHelpers.extends({}, f, v.inline)),
          (n[2] = v.inline),
          (n[3] = f),
          (n[4] = T))
        : (T = n[4]);
      var D;
      return (
        n[5] !== b ||
        n[6] !== E ||
        n[7] !== u ||
        n[8] !== p ||
        n[9] !== k ||
        n[10] !== R ||
        n[11] !== a ||
        n[12] !== I ||
        n[13] !== T ||
        n[14] !== g ||
        n[15] !== y
          ? ((D = c.jsx(
              b,
              babelHelpers.extends(
                {
                  ref: a,
                  className: I,
                  style: T,
                  dir: p,
                  title: y,
                  "data-testid": void 0,
                  htmlFor: k,
                },
                E,
                R,
                { children: u },
              ),
            )),
            (n[5] = b),
            (n[6] = E),
            (n[7] = u),
            (n[8] = p),
            (n[9] = k),
            (n[10] = R),
            (n[11] = a),
            (n[12] = I),
            (n[13] = T),
            (n[14] = g),
            (n[15] = y),
            (n[16] = D))
          : (D = n[16]),
        D
      );
    }
    l.default = p;
  },
  98,
);
