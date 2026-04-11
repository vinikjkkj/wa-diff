__d(
  "ImageCore.react",
  [
    "CometVisualCompletionAttributes",
    "URI",
    "coerceImageishSprited",
    "coerceImageishURL",
    "getImageSourceURLFromImageish",
    "joinClasses",
    "react",
    "react-compiler-runtime",
    "warnUnsupportedProp",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["forwardedRef"],
      s = ["src", "style"],
      u = ["ref"],
      c,
      d,
      m = d || (d = o("react"));
    function p(e) {
      return e instanceof (c || (c = r("URI"))) ? e.toString() : e;
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(27),
        a,
        i;
      n[0] !== t
        ? ((a = t.forwardedRef),
          (i = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, u, c, d, _;
      if (n[3] !== a || n[4] !== i) {
        _ = Symbol.for("react.early_return_sentinel");
        e: {
          u = r("joinClasses")(i.className, "img");
          var f = p(i.src);
          if (f == null) {
            _ = m.jsx(
              "img",
              babelHelpers.extends({}, i, { className: u, ref: a }),
            );
            break e;
          }
          var g = r("coerceImageishSprited")(f);
          if (
            ((l =
              g && i.alt != null && String(i.alt) !== ""
                ? m.jsx("u", { children: i.alt })
                : null),
            typeof f == "string")
          ) {
            _ = m.jsx(
              "img",
              babelHelpers.extends({}, i, {
                className: u,
                ref: a,
                src: f,
                children: l,
              }),
            );
            break e;
          }
          if (g) {
            var h, y;
            if (n[10] !== i) {
              var C = i,
                b = C.src,
                v = C.style,
                S = babelHelpers.objectWithoutPropertiesLoose(C, s);
              ((y = v), (h = S), (n[10] = i), (n[11] = h), (n[12] = y));
            } else ((h = n[11]), (y = n[12]));
            _ = m.jsx(
              "i",
              babelHelpers.extends(
                {},
                h,
                r("CometVisualCompletionAttributes").CSS_IMG,
                {
                  className: r("joinClasses")(
                    u,
                    g.type === "css" ? g.className : void 0,
                  ),
                  ref: a,
                  style:
                    g.type === "cssless"
                      ? babelHelpers.extends({}, y, g.style)
                      : y,
                  children: l,
                },
              ),
            );
            break e;
          }
          ((c = r("getImageSourceURLFromImageish")(f)),
            (d = r("coerceImageishURL")(f)));
        }
        ((n[3] = a),
          (n[4] = i),
          (n[5] = l),
          (n[6] = u),
          (n[7] = c),
          (n[8] = d),
          (n[9] = _));
      } else ((l = n[5]), (u = n[6]), (c = n[7]), (d = n[8]), (_ = n[9]));
      if (_ !== Symbol.for("react.early_return_sentinel")) return _;
      var R = d;
      if (i.width === void 0 && i.height === void 0 && R) {
        var L;
        return (
          n[13] !== l ||
          n[14] !== u ||
          n[15] !== a ||
          n[16] !== c ||
          n[17] !== i ||
          n[18] !== R.height ||
          n[19] !== R.width
            ? ((L = m.jsx(
                "img",
                babelHelpers.extends({}, i, {
                  className: u,
                  height: R.height,
                  src: c,
                  ref: a,
                  width: R.width,
                  children: l,
                }),
              )),
              (n[13] = l),
              (n[14] = u),
              (n[15] = a),
              (n[16] = c),
              (n[17] = i),
              (n[18] = R.height),
              (n[19] = R.width),
              (n[20] = L))
            : (L = n[20]),
          L
        );
      }
      var E;
      return (
        n[21] !== l || n[22] !== u || n[23] !== a || n[24] !== c || n[25] !== i
          ? ((E = m.jsx(
              "img",
              babelHelpers.extends({}, i, {
                className: u,
                ref: a,
                src: c,
                children: l,
              }),
            )),
            (n[21] = l),
            (n[22] = u),
            (n[23] = a),
            (n[24] = c),
            (n[25] = i),
            (n[26] = E))
          : (E = n[26]),
        E
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(8),
        n,
        a,
        i;
      (t[0] !== e
        ? ((a = e.ref),
          (n = babelHelpers.objectWithoutPropertiesLoose(e, u)),
          (i = Object.prototype.hasOwnProperty.call(n, "source")),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a),
          (t[3] = i))
        : ((n = t[1]), (a = t[2]), (i = t[3])),
        i &&
          r("warnUnsupportedProp")(
            "ImageCore",
            "source",
            "Did you mean `src`?",
          ));
      var l = n.alt === void 0 ? "" : n.alt,
        s;
      return (
        t[4] !== n || t[5] !== a || t[6] !== l
          ? ((s = m.jsx(
              _,
              babelHelpers.extends({}, n, { alt: l, forwardedRef: a }),
            )),
            (t[4] = n),
            (t[5] = a),
            (t[6] = l),
            (t[7] = s))
          : (s = t[7]),
        s
      );
    }
    ((f.displayName = "ImageCore"), (l.default = f));
  },
  98,
);
