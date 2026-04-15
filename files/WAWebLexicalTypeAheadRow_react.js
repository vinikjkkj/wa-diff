__d(
  "WAWebLexicalTypeAheadRow.react",
  [
    "ReactDOM",
    "WAWebAccessibility.react",
    "WAWebUISpacing",
    "WAWebUnstyledButton.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebLexicalTypeAheadContainer",
    "useWAWebLexicalTypeAheadKeyboardNavigation",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useMemo,
      p = c.useRef,
      _ = 10,
      f = 7,
      g = {
        itemsContainer: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          backgroundColor: "x1311tq3",
          boxShadow: "xvh3i5d",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          overflowX: "x14aock7",
          $$css: !0,
        },
      };
    function h(t) {
      var n = o("react-compiler-runtime").c(29),
        a = t.itemHeight,
        i = t.items,
        l = t.itemWidth,
        s = t.leadOffset,
        c = t.onCancel,
        m = i.length,
        h;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = []), (n[0] = h))
        : (h = n[0]);
      var C = p(h),
        b;
      e: {
        if (m > f) {
          var v = l / 2 + _;
          b = l * f - v + _ * 2;
          break e;
        }
        b = l * m + _ * 2;
      }
      var S = b,
        R = i.length === 0 ? 0 : S,
        L = a + _ * 2,
        E = o("useWAWebLexicalTypeAheadContainer").useLexicalTypeAheadContainer(
          s,
          R,
          L,
        ),
        k = E.containerEle,
        I = E.hideContainer,
        T;
      n[1] !== I || n[2] !== c
        ? ((T = {
            onSelect: y,
            onCancel: function () {
              (I(), c());
            },
          }),
          (n[1] = I),
          (n[2] = c),
          (n[3] = T))
        : (T = n[3]);
      var D = o(
          "useWAWebLexicalTypeAheadKeyboardNavigation",
        ).useLexicalTypeAheadKeyboardNavigation(i, 0, "row", T),
        x = D.activeIndex,
        $ = D.setActiveIndex,
        P,
        N;
      (n[4] !== x
        ? ((P = function () {
            var e = C.current[x];
            e && e.scrollIntoView();
          }),
          (N = [x]),
          (n[4] = x),
          (n[5] = P),
          (n[6] = N))
        : ((P = n[5]), (N = n[6])),
        d(P, N));
      var M;
      n[7] !== x || n[8] !== i || n[9] !== $
        ? ((M = i.map(function (e, t) {
            return u.jsx(
              r("WAWebUnstyledButton.react"),
              {
                ref: function (n) {
                  return (C.current[t] = n);
                },
                "aria-label": e.ariaLabel,
                onClick: function (n) {
                  (n.preventDefault(), n.stopPropagation(), e.onSelect());
                },
                onMouseEnter: function () {
                  $(t);
                },
                children: e.renderFn(t === x),
              },
              t,
            );
          })),
          (n[7] = x),
          (n[8] = i),
          (n[9] = $),
          (n[10] = M))
        : (M = n[10]);
      var w = M;
      if (w.length === 0) return null;
      var A, F, O, B;
      if (n[11] !== x || n[12] !== I || n[13] !== i) {
        var W,
          q = [g.itemsContainer, o("WAWebUISpacing").uiPadding.all10],
          U = i[x];
        ((A = (W = U == null ? void 0 : U.ariaLabel) != null ? W : ""),
          (B = o("ReactDOM").createPortal),
          (F = I),
          (O = (e || (e = r("stylex"))).props(q)),
          (n[11] = x),
          (n[12] = I),
          (n[13] = i),
          (n[14] = A),
          (n[15] = F),
          (n[16] = O),
          (n[17] = B));
      } else ((A = n[14]), (F = n[15]), (O = n[16]), (B = n[17]));
      var V;
      n[18] !== A
        ? ((V = u.jsx(o("WAWebAccessibility.react").InvisibleAnnouncement, {
            text: A,
            assertive: !0,
          })),
          (n[18] = A),
          (n[19] = V))
        : (V = n[19]);
      var H;
      n[20] !== w || n[21] !== V || n[22] !== F || n[23] !== O
        ? ((H = u.jsxs(
            "div",
            babelHelpers.extends({ onClick: F }, O, { children: [w, V] }),
          )),
          (n[20] = w),
          (n[21] = V),
          (n[22] = F),
          (n[23] = O),
          (n[24] = H))
        : (H = n[24]);
      var G;
      return (
        n[25] !== k || n[26] !== H || n[27] !== B
          ? ((G = B(H, k)), (n[25] = k), (n[26] = H), (n[27] = B), (n[28] = G))
          : (G = n[28]),
        G
      );
    }
    function y(e) {
      e.onSelect();
    }
    l.default = h;
  },
  98,
);
