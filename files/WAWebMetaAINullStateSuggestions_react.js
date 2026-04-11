__d(
  "WAWebMetaAINullStateSuggestions.react",
  [
    "WAWebChatEntryPoint",
    "WAWebGetRotatedNullStateSuggestions",
    "WAWebKeyboardHotKeys.react",
    "WAWebMetaAISuggestion.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useImperativeHandle,
      m = c.useMemo,
      p = c.useRef,
      _ = {
        container: { paddingBottom: "x1a8lsjc", $$css: !0 },
        wrapper: {
          paddingBottom: "x1a8lsjc",
          borderBottomStyle: "x1q0q8m5",
          borderBottomWidth: "xso031l",
          borderTopColor: "xx42vgk",
          borderInlineEndColor: "xbogo7e",
          borderBottomColor: "x120ee7l",
          borderInlineStartColor: "x1vb5itz",
          $$css: !0,
        },
      };
    function f(t) {
      var n = o("react-compiler-runtime").c(39),
        a = t.fetchedSuggestions,
        i = t.onBlur,
        l = t.onKeyDown,
        s = t.onSearchFocus,
        c = t.onSuggestionClick,
        m = t.ref,
        f;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = []), (n[0] = f))
        : (f = n[0]);
      var g = p(f),
        h = p(null),
        y = p(null),
        C;
      n[1] !== a
        ? ((C = o(
            "WAWebGetRotatedNullStateSuggestions",
          ).getRotatedNullStateSuggestions(a)),
          (n[1] = a),
          (n[2] = C))
        : (C = n[2]);
      var b = C,
        v;
      n[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function () {
            var e;
            ((h.current = 0), (e = g.current[0]) == null || e.focus());
          }),
          (n[3] = v))
        : (v = n[3]);
      var S = v,
        R;
      if (
        (n[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = function () {
              return {
                focus: S,
                getElement: function () {
                  return y.current;
                },
              };
            }),
            (n[4] = R))
          : (R = n[4]),
        d(m, R),
        b.length === 0)
      )
        return null;
      var L, E, k, I, T, D, x;
      if (n[5] !== i || n[6] !== l || n[7] !== s || n[8] !== c || n[9] !== b) {
        var $ = function (t, n) {
            g.current[n] = t;
          },
          P;
        n[17] !== l || n[18] !== b.length
          ? ((P = function (t) {
              var e,
                n,
                r = ((e = h.current) != null ? e : -1) + 1;
              if (r >= b.length) {
                l == null || l(t);
                return;
              }
              ((h.current = r), (n = g.current[r]) == null || n.focus());
            }),
            (n[17] = l),
            (n[18] = b.length),
            (n[19] = P))
          : (P = n[19]);
        var N = P,
          M;
        n[20] !== s || n[21] !== b.length
          ? ((M = function () {
              var e,
                t,
                n = ((e = h.current) != null ? e : b.length) - 1;
              if (n < 0) {
                s();
                return;
              }
              ((h.current = n), (t = g.current[n]) == null || t.focus());
            }),
            (n[20] = s),
            (n[21] = b.length),
            (n[22] = M))
          : (M = n[22]);
        var w = M,
          A;
        n[23] !== N || n[24] !== w
          ? ((A = { down: N, up: w }), (n[23] = N), (n[24] = w), (n[25] = A))
          : (A = n[25]);
        var F = A,
          O;
        n[26] !== i
          ? ((O = function (t) {
              var e = y.current,
                n = t.relatedTarget;
              e != null &&
                n != null &&
                n instanceof HTMLElement &&
                !e.contains(n) &&
                (i == null || i());
            }),
            (n[26] = i),
            (n[27] = O))
          : (O = n[27]);
        var B = O;
        ((L = o("WAWebKeyboardHotKeys.react").HotKeys),
          (T = y),
          (D = B),
          (x = _.container),
          (E = F),
          n[28] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = (e || (e = r("stylex"))).props([
                _.wrapper,
                o("WAWebUISpacing").uiPadding.bottom10,
              ])),
              (n[28] = k))
            : (k = n[28]),
          (I = b.map(function (e, t) {
            return u.jsx(
              r("WAWebMetaAISuggestion.react"),
              {
                ref: function (n) {
                  return $(n, t);
                },
                suggestion: e,
                chatEntryPoint: o("WAWebChatEntryPoint").ChatEntryPoint
                  .MetaAINullStateSuggestion,
                onClick: function () {
                  return c == null ? void 0 : c(t, b.length);
                },
              },
              t,
            );
          })),
          (n[5] = i),
          (n[6] = l),
          (n[7] = s),
          (n[8] = c),
          (n[9] = b),
          (n[10] = L),
          (n[11] = E),
          (n[12] = k),
          (n[13] = I),
          (n[14] = T),
          (n[15] = D),
          (n[16] = x));
      } else
        ((L = n[10]),
          (E = n[11]),
          (k = n[12]),
          (I = n[13]),
          (T = n[14]),
          (D = n[15]),
          (x = n[16]));
      var W;
      n[29] !== k || n[30] !== I
        ? ((W = u.jsx("div", babelHelpers.extends({}, k, { children: I }))),
          (n[29] = k),
          (n[30] = I),
          (n[31] = W))
        : (W = n[31]);
      var q;
      return (
        n[32] !== L ||
        n[33] !== E ||
        n[34] !== W ||
        n[35] !== T ||
        n[36] !== D ||
        n[37] !== x
          ? ((q = u.jsx(L, {
              ref: T,
              onBlur: D,
              xstyle: x,
              handlers: E,
              children: W,
            })),
            (n[32] = L),
            (n[33] = E),
            (n[34] = W),
            (n[35] = T),
            (n[36] = D),
            (n[37] = x),
            (n[38] = q))
          : (q = n[38]),
        q
      );
    }
    l.default = f;
  },
  98,
);
