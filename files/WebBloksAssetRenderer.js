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
      var n = o("react-compiler-runtime").c(26),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, c, d, _;
      if (n[3] !== a || n[4] !== i) {
        _ = Symbol.for("react.early_return_sentinel");
        e: {
          l = o("WebBloksStyle").classNames(a.className, "img");
          var f = p(a.src);
          if (f == null) {
            var g;
            if (n[9] !== a) {
              var h = a,
                y = h.src,
                C = babelHelpers.objectWithoutPropertiesLoose(h, s);
              ((g = C), (n[9] = a), (n[10] = g));
            } else g = n[10];
            _ = m.jsx("img", babelHelpers.extends({}, g, { className: l }));
            break e;
          }
          var b = r("coerceImageishSprited")(f),
            v =
              b && a.alt != null && String(a.alt) !== ""
                ? m.jsx("u", { children: a.alt })
                : null;
          if (typeof f == "string") {
            _ = m.jsx(
              "img",
              babelHelpers.extends({}, a, { className: l, src: f }),
            );
            break e;
          }
          if (b) {
            var S, R;
            if (n[11] !== a) {
              var L = a,
                E = L.src,
                k = L.style,
                I = babelHelpers.objectWithoutPropertiesLoose(L, u);
              ((R = k), (S = I), (n[11] = a), (n[12] = S), (n[13] = R));
            } else ((S = n[12]), (R = n[13]));
            _ = m.jsx(
              "i",
              babelHelpers.extends(
                {},
                S,
                r("CometVisualCompletionAttributes").CSS_IMG,
                {
                  className: o("WebBloksStyle").classNames(
                    l,
                    b.type === "css" ? b.className : void 0,
                  ),
                  ref: i,
                  style:
                    b.type === "cssless"
                      ? babelHelpers.extends({}, R, b.style)
                      : R,
                  children: v,
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
          (n[6] = c),
          (n[7] = d),
          (n[8] = _));
      } else ((l = n[5]), (c = n[6]), (d = n[7]), (_ = n[8]));
      if (_ !== Symbol.for("react.early_return_sentinel")) return _;
      var T = d;
      if (a.width === void 0 && a.height === void 0 && T) {
        var D;
        return (
          n[14] !== l ||
          n[15] !== c ||
          n[16] !== a ||
          n[17] !== i ||
          n[18] !== T.height ||
          n[19] !== T.width
            ? ((D = m.jsx(
                "img",
                babelHelpers.extends({}, a, {
                  className: l,
                  height: T.height,
                  src: c,
                  ref: i,
                  width: T.width,
                }),
              )),
              (n[14] = l),
              (n[15] = c),
              (n[16] = a),
              (n[17] = i),
              (n[18] = T.height),
              (n[19] = T.width),
              (n[20] = D))
            : (D = n[20]),
          D
        );
      }
      var x;
      return (
        n[21] !== l || n[22] !== c || n[23] !== a || n[24] !== i
          ? ((x = m.jsx(
              "img",
              babelHelpers.extends({}, a, { className: l, ref: i, src: c }),
            )),
            (n[21] = l),
            (n[22] = c),
            (n[23] = a),
            (n[24] = i),
            (n[25] = x))
          : (x = n[25]),
        x
      );
    }
    l.default = _;
  },
  98,
);
