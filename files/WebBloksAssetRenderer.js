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
      s = ["src", "style"],
      u,
      c,
      d = c || (c = o("react"));
    function m(e) {
      return e instanceof (u || (u = r("URI"))) ? e.toString() : e;
    }
    function p(t) {
      var n = o("react-compiler-runtime").c(27),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l, u, c, p, _;
      if (n[3] !== a || n[4] !== i) {
        _ = Symbol.for("react.early_return_sentinel");
        e: {
          u = o("WebBloksStyle").classNames(a.className, "img");
          var f = m(a.src);
          if (f == null) {
            _ = d.jsx("img", babelHelpers.extends({}, a, { className: u }));
            break e;
          }
          var g = r("coerceImageishSprited")(f);
          if (
            ((l =
              g && a.alt != null && String(a.alt) !== ""
                ? d.jsx("u", { children: a.alt })
                : null),
            typeof f == "string")
          ) {
            _ = d.jsx(
              "img",
              babelHelpers.extends({}, a, {
                className: u,
                src: f,
                children: l,
              }),
            );
            break e;
          }
          if (g) {
            var h, y;
            if (n[10] !== a) {
              var C = a,
                b = C.src,
                v = C.style,
                S = babelHelpers.objectWithoutPropertiesLoose(C, s);
              ((y = v), (h = S), (n[10] = a), (n[11] = h), (n[12] = y));
            } else ((h = n[11]), (y = n[12]));
            _ = d.jsx(
              "i",
              babelHelpers.extends(
                {},
                h,
                r("CometVisualCompletionAttributes").CSS_IMG,
                {
                  className: o("WebBloksStyle").classNames(
                    u,
                    g.type === "css" ? g.className : void 0,
                  ),
                  ref: i,
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
            (p = r("coerceImageishURL")(f)));
        }
        ((n[3] = a),
          (n[4] = i),
          (n[5] = l),
          (n[6] = u),
          (n[7] = c),
          (n[8] = p),
          (n[9] = _));
      } else ((l = n[5]), (u = n[6]), (c = n[7]), (p = n[8]), (_ = n[9]));
      if (_ !== Symbol.for("react.early_return_sentinel")) return _;
      var R = p;
      if (a.width === void 0 && a.height === void 0 && R) {
        var L;
        return (
          n[13] !== l ||
          n[14] !== u ||
          n[15] !== c ||
          n[16] !== a ||
          n[17] !== i ||
          n[18] !== R.height ||
          n[19] !== R.width
            ? ((L = d.jsx(
                "img",
                babelHelpers.extends({}, a, {
                  className: u,
                  height: R.height,
                  src: c,
                  ref: i,
                  width: R.width,
                  children: l,
                }),
              )),
              (n[13] = l),
              (n[14] = u),
              (n[15] = c),
              (n[16] = a),
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
        n[21] !== l || n[22] !== u || n[23] !== c || n[24] !== a || n[25] !== i
          ? ((E = d.jsx(
              "img",
              babelHelpers.extends({}, a, {
                className: u,
                ref: i,
                src: c,
                children: l,
              }),
            )),
            (n[21] = l),
            (n[22] = u),
            (n[23] = c),
            (n[24] = a),
            (n[25] = i),
            (n[26] = E))
          : (E = n[26]),
        E
      );
    }
    l.default = p;
  },
  98,
);
