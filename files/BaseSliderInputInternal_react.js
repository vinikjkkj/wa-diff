__d(
  "BaseSliderInputInternal.react",
  ["react", "react-compiler-runtime", "react-strict-dom", "useMergeRefs"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "ref",
        "max",
        "min",
        "mode",
        "onChange",
        "parent",
        "styles",
        "value",
      ],
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useRef,
      _ = {
        input: {
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          cursor: "xmper1u",
          display: "x1lliihq",
          height: "x5yr21d",
          marginTop: "xdj266r",
          marginInlineEnd: "x14z9mp",
          marginBottom: "xat24cr",
          marginInlineStart: "x1lziwak",
          opacity: "x1w3u9th",
          position: "x10l6tqk",
          width: "xh8yej3",
          $$css: !0,
        },
        rangeSlider: { overflowX: "x6ikm8r", overflowY: "x10wlt62", $$css: !0 },
        root: {
          height: "x5yr21d",
          overflowX: "x1plvlek",
          overflowY: "xryxfnj",
          position: "x1n2onr6",
          $$css: !0,
        },
      };
    function f(t) {
      var n,
        a,
        i,
        l,
        s = o("react-compiler-runtime").c(48),
        c,
        d,
        f,
        g,
        h,
        y,
        C,
        b,
        v;
      s[0] !== t
        ? ((h = t.ref),
          (c = t.max),
          (d = t.min),
          (b = t.mode),
          (f = t.onChange),
          (g = t.parent),
          (C = t.styles),
          (v = t.value),
          (y = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (s[0] = t),
          (s[1] = c),
          (s[2] = d),
          (s[3] = f),
          (s[4] = g),
          (s[5] = h),
          (s[6] = y),
          (s[7] = C),
          (s[8] = b),
          (s[9] = v))
        : ((c = s[1]),
          (d = s[2]),
          (f = s[3]),
          (g = s[4]),
          (h = s[5]),
          (y = s[6]),
          (C = s[7]),
          (b = s[8]),
          (v = s[9]));
      var S = b === void 0 ? "min" : b,
        R = S === "min",
        L = p(null),
        E = p(null),
        k = r("useMergeRefs")(h, E),
        I,
        T;
      if (
        s[10] !== c ||
        s[11] !== d ||
        s[12] !== f ||
        s[13] !== ((n = g) == null ? void 0 : n.max) ||
        s[14] !== ((a = g) == null ? void 0 : a.min) ||
        s[15] !== R
      ) {
        var D, x;
        I = function (t) {
          var e, n, r, o;
          (T({
            max: (e = (n = g) == null ? void 0 : n.max) != null ? e : c,
            min: (r = (o = g) == null ? void 0 : o.min) != null ? r : d,
            value: Number(t.currentTarget.value),
          }),
            f && f(t));
        };
        var $;
        (s[18] !== c || s[19] !== d || s[20] !== R
          ? (($ = function (t) {
              var e = L.current,
                n = E.current;
              if (e != null && n != null) {
                var r = R ? [t.value, c] : [d, t.value],
                  o = (r[0] + r[1]) / 2,
                  a = R ? r[1] : r[0],
                  i = t.max - t.min,
                  l = ((o - t.min) / i) * 100,
                  s = ((a - t.min) / i) * 100,
                  u = R ? l : 100 - l,
                  m = R ? s : 100 - s;
                ((e.style.width = u + "%"),
                  (n.style.width = (m / u) * 100 + "%"));
              }
            }),
            (s[18] = c),
            (s[19] = d),
            (s[20] = R),
            (s[21] = $))
          : ($ = s[21]),
          (T = $),
          (s[10] = c),
          (s[11] = d),
          (s[12] = f),
          (s[13] = (D = g) == null ? void 0 : D.max),
          (s[14] = (x = g) == null ? void 0 : x.min),
          (s[15] = R),
          (s[16] = I),
          (s[17] = T));
      } else ((I = s[16]), (T = s[17]));
      var P;
      if (
        s[22] !== c ||
        s[23] !== d ||
        s[24] !== ((i = g) == null ? void 0 : i.max) ||
        s[25] !== ((l = g) == null ? void 0 : l.min) ||
        s[26] !== T ||
        s[27] !== v
      ) {
        var N, M;
        ((P = function () {
          var e, t, n, r;
          T({
            max: (e = (t = g) == null ? void 0 : t.max) != null ? e : c,
            min: (n = (r = g) == null ? void 0 : r.min) != null ? n : d,
            value: Number(v != null ? v : 0),
          });
        }),
          (s[22] = c),
          (s[23] = d),
          (s[24] = (N = g) == null ? void 0 : N.max),
          (s[25] = (M = g) == null ? void 0 : M.min),
          (s[26] = T),
          (s[27] = v),
          (s[28] = P));
      } else P = s[28];
      var w;
      (s[29] !== c || s[30] !== d || s[31] !== g || s[32] !== T || s[33] !== v
        ? ((w = [c, d, g, T, v]),
          (s[29] = c),
          (s[30] = d),
          (s[31] = g),
          (s[32] = T),
          (s[33] = v),
          (s[34] = w))
        : (w = s[34]),
        m(P, w));
      var A = g != null && _.rangeSlider,
        F;
      s[35] !== C.root || s[36] !== A
        ? ((F = [_.root, C.root, A]),
          (s[35] = C.root),
          (s[36] = A),
          (s[37] = F))
        : (F = s[37]);
      var O;
      s[38] !== k ||
      s[39] !== c ||
      s[40] !== d ||
      s[41] !== I ||
      s[42] !== y ||
      s[43] !== v
        ? ((O = u.jsx(
            o("react-strict-dom").html.input,
            babelHelpers.extends(
              { max: c, min: d, onChange: I, ref: k, style: _.input },
              y,
              { type: "range", value: v },
            ),
          )),
          (s[38] = k),
          (s[39] = c),
          (s[40] = d),
          (s[41] = I),
          (s[42] = y),
          (s[43] = v),
          (s[44] = O))
        : (O = s[44]);
      var B;
      return (
        s[45] !== F || s[46] !== O
          ? ((B = u.jsx(o("react-strict-dom").html.div, {
              ref: L,
              style: F,
              children: O,
            })),
            (s[45] = F),
            (s[46] = O),
            (s[47] = B))
          : (B = s[47]),
        B
      );
    }
    l.default = f;
  },
  98,
);
