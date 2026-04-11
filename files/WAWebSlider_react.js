__d(
  "WAWebSlider.react",
  [
    "$InternalEnum",
    "WAWebFlex.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["displayValue", "theme", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useRef,
      p = d.useState,
      _ = {
        bar: {
          WebkitAppearance: "x1lugfcp",
          backgroundColor: "x1ailiqk",
          width: "xh8yej3",
          height: "x1fwsm1s",
          borderStartStartRadius: "x1fqc64z",
          borderStartEndRadius: "xs83zq4",
          borderEndEndRadius: "xt6ovg4",
          borderEndStartRadius: "x1ru8ea5",
          outline: "x1a2a7pz",
          "::-webkit-slider-thumb_WebkitAppearance": "x1hzk0bc",
          "::-webkit-slider-thumb_backgroundColor": "xh18d09",
          "::-webkit-slider-thumb_width": "xgzf28c",
          "::-webkit-slider-thumb_height": "x7wbnsr",
          "::-webkit-slider-thumb_borderStartStartRadius": "x1th4nss",
          "::-webkit-slider-thumb_borderStartEndRadius": "x1rizj1e",
          "::-webkit-slider-thumb_borderEndEndRadius": "x1y66t81",
          "::-webkit-slider-thumb_borderEndStartRadius": "xpx3ic3",
          "::-moz-range-thumb_backgroundColor": "xwa9bx0",
          "::-moz-range-thumb_width": "xjz7cho",
          "::-moz-range-thumb_height": "xm8lljt",
          "::-moz-range-thumb_borderStartStartRadius": "xwuopey",
          "::-moz-range-thumb_borderStartEndRadius": "x3xuhg7",
          "::-moz-range-thumb_borderEndEndRadius": "x1myhkec",
          "::-moz-range-thumb_borderEndStartRadius": "xkl7mu5",
          "::-ms-thumb_backgroundColor": "x1yor4gt",
          "::-ms-thumb_width": "x1vvv04b",
          "::-ms-thumb_height": "x13wl5o1",
          "::-ms-thumb_borderStartStartRadius": "xb6vld1",
          "::-ms-thumb_borderStartEndRadius": "xn30xcg",
          "::-ms-thumb_borderEndEndRadius": "xis6u53",
          "::-ms-thumb_borderEndStartRadius": "x1ld7pix",
          $$css: !0,
        },
        crescendoBarContainer: {
          position: "x1n2onr6",
          "::before_content": "x1cpjm7i",
          "::before_position": "x1hmns74",
          "::before_top": "x1knuo7r",
          "::before_transform": "xkjykve",
          "::before_width": "x1rmj1tg",
          "::before_height": "x17zp9gg",
          "::before_background": "xsjmkkv",
          "::before_clipPath": "xrhovct",
          $$css: !0,
        },
        crescendoBar: {
          WebkitAppearance: "x1lugfcp",
          appearance: "xjyslct",
          width: "xh8yej3",
          background: "x1md70p1",
          outline: "x1a2a7pz",
          position: "x1n2onr6",
          "::-webkit-slider-thumb_WebkitAppearance": "x1hzk0bc",
          "::-webkit-slider-thumb_backgroundColor": "xh18d09",
          "::-webkit-slider-thumb_width": "xgzf28c",
          "::-webkit-slider-thumb_height": "x7wbnsr",
          "::-webkit-slider-thumb_cursor": "x5pni9w",
          "::-webkit-slider-thumb_borderStartStartRadius": "x1th4nss",
          "::-webkit-slider-thumb_borderStartEndRadius": "x1rizj1e",
          "::-webkit-slider-thumb_borderEndEndRadius": "x1y66t81",
          "::-webkit-slider-thumb_borderEndStartRadius": "xpx3ic3",
          "::-moz-range-thumb_backgroundColor": "xwa9bx0",
          "::-moz-range-thumb_width": "xjz7cho",
          "::-moz-range-thumb_height": "xm8lljt",
          "::-moz-range-thumb_cursor": "xvs8oyn",
          "::-moz-range-thumb_borderStartStartRadius": "xwuopey",
          "::-moz-range-thumb_borderStartEndRadius": "x3xuhg7",
          "::-moz-range-thumb_borderEndEndRadius": "x1myhkec",
          "::-moz-range-thumb_borderEndStartRadius": "xkl7mu5",
          "::-ms-thumb_backgroundColor": "x1yor4gt",
          "::-ms-thumb_width": "x1vvv04b",
          "::-ms-thumb_height": "x13wl5o1",
          "::-ms-thumb_cursor": "x1mdmqyy",
          "::-ms-thumb_borderStartStartRadius": "xb6vld1",
          "::-ms-thumb_borderStartEndRadius": "xn30xcg",
          "::-ms-thumb_borderEndEndRadius": "xis6u53",
          "::-ms-thumb_borderEndStartRadius": "x1ld7pix",
          $$css: !0,
        },
        label: {
          width: "xvy4d1p",
          fontSize: "x1f6kntn",
          color: "xhslqc4",
          $$css: !0,
        },
      },
      f = n("$InternalEnum").Mirrored(["Default", "Crescendo"]);
    function g(t) {
      var n = o("react-compiler-runtime").c(27),
        a,
        i,
        l,
        u;
      n[0] !== t
        ? ((i = t.displayValue),
          (l = t.theme),
          (u = t.width),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u))
        : ((a = n[1]), (i = n[2]), (l = n[3]), (u = n[4]));
      var d = i === void 0 ? !1 : i,
        g = l === void 0 ? f.Default : l,
        h = u === void 0 ? 128 : u,
        y = m(!1),
        C = p(a.value),
        b = C[0],
        v = C[1],
        S;
      n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function (t) {
            y.current = !0;
          }),
          (n[5] = S))
        : (S = n[5]);
      var R = S,
        L;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function (t) {
            y.current = !1;
          }),
          (n[6] = L))
        : (L = n[6]);
      var E = L,
        k;
      n[7] !== a
        ? ((k = function (t) {
            (t.preventDefault(),
              a.onChange(parseInt(t.target.value, 10), y.current),
              v(parseInt(t.target.value, 10)),
              (y.current = !1));
          }),
          (n[7] = a),
          (n[8] = k))
        : (k = n[8]);
      var I = k,
        T = g === f.Crescendo && _.crescendoBarContainer,
        D;
      n[9] !== g
        ? ((D = (s || (s = r("stylex")))([
            g === f.Default && _.bar,
            g === f.Crescendo && _.crescendoBar,
          ])),
          (n[9] = g),
          (n[10] = D))
        : (D = n[10]);
      var x;
      n[11] !== h
        ? ((x = { width: h }), (n[11] = h), (n[12] = x))
        : (x = n[12]);
      var $;
      n[13] !== b ||
      n[14] !== I ||
      n[15] !== a.max ||
      n[16] !== a.min ||
      n[17] !== D ||
      n[18] !== x
        ? (($ = c.jsx("input", {
            type: "range",
            className: D,
            style: x,
            min: a.min,
            max: a.max,
            value: b,
            onMouseDown: R,
            onMouseUp: E,
            onChange: I,
          })),
          (n[13] = b),
          (n[14] = I),
          (n[15] = a.max),
          (n[16] = a.min),
          (n[17] = D),
          (n[18] = x),
          (n[19] = $))
        : ($ = n[19]);
      var P;
      n[20] !== b || n[21] !== d
        ? ((P = d
            ? c.jsx(
                "span",
                babelHelpers.extends(
                  {},
                  (s || (s = r("stylex"))).props([
                    _.label,
                    o("WAWebUISpacing").uiMargin.start10,
                    o("WAWebUISpacing").uiMargin.bottom1,
                  ]),
                  { children: b },
                ),
              )
            : null),
          (n[20] = b),
          (n[21] = d),
          (n[22] = P))
        : (P = n[22]);
      var N;
      return (
        n[23] !== $ || n[24] !== P || n[25] !== T
          ? ((N = c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: T,
              children: [$, P],
            })),
            (n[23] = $),
            (n[24] = P),
            (n[25] = T),
            (n[26] = N))
          : (N = n[26]),
        N
      );
    }
    ((l.SliderTheme = f), (l.Slider = g));
  },
  98,
);
