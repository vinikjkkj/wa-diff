__d(
  "WebBloksAssetRenderer",
  [
    "CometVisualCompletionAttributes",
    "URI",
    "WebBloksStyle",
    "coerceImageishSprited",
    "coerceImageishURL",
    "getImageSourceURLFromImageish",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["ref"],
      s = ["src"],
      u = ["src", "style"],
      c,
      d,
      m = d || (d = o("react"));
    function p(e) {
      return e instanceof (c || (c = r("URI"))) ? e.toString() : e;
    }
    function _(t) {
      var n = o("react-compiler-runtime").c(29),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, c, d, _, f;
      if (n[3] !== a || n[4] !== i) {
        f = Symbol.for("react.early_return_sentinel");
        e: {
          c = o("WebBloksStyle").classNames(a.className, "img");
          var g = p(a.src);
          if (g == null) {
            var h;
            if (n[10] !== a) {
              var y = a,
                C = y.src,
                b = babelHelpers.objectWithoutPropertiesLoose(y, s);
              ((h = b), (n[10] = a), (n[11] = h));
            } else h = n[11];
            f = m.jsx("img", babelHelpers.extends({}, h, { className: c }));
            break e;
          }
          var v = r("coerceImageishSprited")(g);
          if (
            ((l =
              v && a.alt != null && String(a.alt) !== ""
                ? m.jsx("u", { children: a.alt })
                : null),
            typeof g == "string")
          ) {
            f = m.jsx(
              "img",
              babelHelpers.extends({}, a, {
                className: c,
                src: g,
                children: l,
              }),
            );
            break e;
          }
          if (v) {
            var S, R;
            if (n[12] !== a) {
              var L = a,
                E = L.src,
                k = L.style,
                I = babelHelpers.objectWithoutPropertiesLoose(L, u);
              ((R = k), (S = I), (n[12] = a), (n[13] = S), (n[14] = R));
            } else ((S = n[13]), (R = n[14]));
            f = m.jsx(
              "i",
              babelHelpers.extends(
                {},
                S,
                r("CometVisualCompletionAttributes").CSS_IMG,
                {
                  className: o("WebBloksStyle").classNames(
                    c,
                    v.type === "css" ? v.className : void 0,
                  ),
                  ref: i,
                  style:
                    v.type === "cssless"
                      ? babelHelpers.extends({}, R, v.style)
                      : R,
                  children: l,
                },
              ),
            );
            break e;
          }
          ((d = r("getImageSourceURLFromImageish")(g)),
            (_ = r("coerceImageishURL")(g)));
        }
        ((n[3] = a),
          (n[4] = i),
          (n[5] = l),
          (n[6] = c),
          (n[7] = d),
          (n[8] = _),
          (n[9] = f));
      } else ((l = n[5]), (c = n[6]), (d = n[7]), (_ = n[8]), (f = n[9]));
      if (f !== Symbol.for("react.early_return_sentinel")) return f;
      var T = _;
      if (a.width === void 0 && a.height === void 0 && T) {
        var D;
        return (
          n[15] !== l ||
          n[16] !== c ||
          n[17] !== d ||
          n[18] !== a ||
          n[19] !== i ||
          n[20] !== T.height ||
          n[21] !== T.width
            ? ((D = m.jsx(
                "img",
                babelHelpers.extends({}, a, {
                  className: c,
                  height: T.height,
                  src: d,
                  ref: i,
                  width: T.width,
                  children: l,
                }),
              )),
              (n[15] = l),
              (n[16] = c),
              (n[17] = d),
              (n[18] = a),
              (n[19] = i),
              (n[20] = T.height),
              (n[21] = T.width),
              (n[22] = D))
            : (D = n[22]),
          D
        );
      }
      var x;
      return (
        n[23] !== l || n[24] !== c || n[25] !== d || n[26] !== a || n[27] !== i
          ? ((x = m.jsx(
              "img",
              babelHelpers.extends({}, a, {
                className: c,
                ref: i,
                src: d,
                children: l,
              }),
            )),
            (n[23] = l),
            (n[24] = c),
            (n[25] = d),
            (n[26] = a),
            (n[27] = i),
            (n[28] = x))
          : (x = n[28]),
        x
      );
    }
    l.default = _;
  },
  98,
);
