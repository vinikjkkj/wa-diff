__d(
  "WAWebCustomerManagerSearchInput.react",
  [
    "fbt",
    "WAWebClickable.react",
    "WAWebSearchRefreshedThinIcon.react",
    "WDSIconIcClose.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useCallback,
      m = c.useRef,
      p = c.useState,
      _ = {
        clearButton: {
          flexShrink: "x2lah0s",
          color: "xhslqc4",
          borderStartStartRadius: "xt8t1vi",
          borderStartEndRadius: "x1xc408v",
          borderEndEndRadius: "x129tdwq",
          borderEndStartRadius: "x15urzxu",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          marginInlineStart: "xdwrcjd",
          $$css: !0,
        },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.onChange,
        a = e.testid,
        i = e.value,
        l = m(null),
        c = p(!1),
        d = c[0],
        f = c[1],
        g;
      t[0] !== n
        ? ((g = function (t) {
            n(t.target.value);
          }),
          (t[0] = n),
          (t[1] = g))
        : (g = t[1]);
      var h = g,
        y;
      t[2] !== n
        ? ((y = function () {
            var e;
            (n(""), (e = l.current) == null || e.focus());
          }),
          (t[2] = n),
          (t[3] = y))
        : (y = t[3]);
      var C = y,
        b;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function () {
            return f(!0);
          }),
          (t[4] = b))
        : (b = t[4]);
      var v = b,
        S;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function () {
            return f(!1);
          }),
          (t[5] = S))
        : (S = t[5]);
      var R = S,
        L;
      t[6] !== d
        ? ((L = {
            0: {
              className:
                "x78zum5 x1q0g3np x6s0dn4 x1ekkm8c x1143rjc xum4auv xj21bgg x4wrhlh x10w6t97 x1g0dm76 x11lfxj5 xfb3i0g x1jkqq1h x19qpdui",
            },
            1: {
              className:
                "x78zum5 x1q0g3np x6s0dn4 x1ekkm8c x1143rjc xum4auv xj21bgg x10w6t97 x1g0dm76 x11lfxj5 xfb3i0g x1jkqq1h x1280gxy xu8d7ss",
            },
          }[!!d << 0]),
          (t[6] = d),
          (t[7] = L))
        : (L = t[7]);
      var E, k;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = u.jsx("div", {
            className: "x2lah0s xhslqc4 x78zum5 x6s0dn4 x1xegmmw",
            children: u.jsx(
              o("WAWebSearchRefreshedThinIcon.react").SearchRefreshedThinIcon,
              {},
            ),
          })),
          (k = {
            className:
              "x1iyjqo2 x972fbf x10w94by x1qhh985 x14e42zd x1a2a7pz xjbqb8w x14ug900 x1f6kntn x1fc57z9 xexx8yu xyri2b x18d9i69 x1c1uobl xeuugli x1hcheoe",
          }),
          (t[8] = E),
          (t[9] = k))
        : ((E = t[8]), (k = t[9]));
      var I;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = s._(/*BTDS*/ "Search customers")), (t[10] = I))
        : (I = t[10]);
      var T;
      t[11] !== h || t[12] !== i
        ? ((T = u.jsx(
            "input",
            babelHelpers.extends({}, k, {
              ref: l,
              type: "text",
              value: i,
              onChange: h,
              onFocus: v,
              onBlur: R,
              placeholder: I,
              "data-testid": void 0,
            }),
          )),
          (t[11] = h),
          (t[12] = i),
          (t[13] = T))
        : (T = t[13]);
      var D;
      t[14] !== C || t[15] !== i.length
        ? ((D =
            i.length > 0 &&
            u.jsx(o("WAWebClickable.react").Clickable, {
              ariaLabel: s._(/*BTDS*/ "Clear search"),
              dataTestId: "customer-manager-search-clear",
              onClick: C,
              xstyle: _.clearButton,
              children: u.jsx(r("WDSIconIcClose.react"), {}),
            })),
          (t[14] = C),
          (t[15] = i.length),
          (t[16] = D))
        : (D = t[16]);
      var x;
      return (
        t[17] !== D || t[18] !== L || t[19] !== T || t[20] !== a
          ? ((x = u.jsxs(
              "div",
              babelHelpers.extends({}, L, {
                "data-testid": void 0,
                children: [E, T, D],
              }),
            )),
            (t[17] = D),
            (t[18] = L),
            (t[19] = T),
            (t[20] = a),
            (t[21] = x))
          : (x = t[21]),
        x
      );
    }
    l.default = f;
  },
  226,
);
