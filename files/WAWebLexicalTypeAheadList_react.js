__d(
  "WAWebLexicalTypeAheadList.react",
  [
    "ReactDOM",
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
      f = {
        itemsContainer: {
          display: "x78zum5",
          height: "x5yr21d",
          width: "xh8yej3",
          overflowX: "x6ikm8r",
          overflowY: "x1odjw0f",
          flexDirection: "xdt5ytf",
          backgroundColor: "x1280gxy",
          boxShadow: "xvh3i5d",
          boxSizing: "x9f619",
          borderStartStartRadius: "x6nvzda",
          borderStartEndRadius: "x4i4b9w",
          borderEndEndRadius: "xhl9efl",
          borderEndStartRadius: "xj65ea0",
          $$css: !0,
        },
      };
    function g(t) {
      var n = o("react-compiler-runtime").c(25),
        a = t.items,
        i = t.leadOffset,
        l = t.maxVisibleItems,
        s = t.onCancel,
        c = t.startingIndex,
        m = l === void 0 ? 7 : l,
        g = c === void 0 ? 0 : c,
        b;
      n[0] !== a || n[1] !== m
        ? ((b = a.slice(0, m).reduce(C, 0)), (n[0] = a), (n[1] = m), (n[2] = b))
        : (b = n[2]);
      var v = b,
        S = v + _ * 2,
        R = a.reduce(y, 0),
        L = a.length === 0 ? 0 : R + _ * 2,
        E = o("useWAWebLexicalTypeAheadContainer").useLexicalTypeAheadContainer(
          i,
          L,
          S,
        ),
        k = E.containerEle,
        I = E.hideContainer,
        T;
      n[3] !== I || n[4] !== s
        ? ((T = {
            onSelect: h,
            onCancel: function () {
              (I(), s());
            },
          }),
          (n[3] = I),
          (n[4] = s),
          (n[5] = T))
        : (T = n[5]);
      var D = o(
          "useWAWebLexicalTypeAheadKeyboardNavigation",
        ).useLexicalTypeAheadKeyboardNavigation(a, g, "column", T),
        x = D.activeIndex,
        $ = D.setActiveIndex,
        P = p(null),
        N;
      n[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((N = function () {
            var e;
            (e = P.current) == null || e.scrollIntoView({ block: "nearest" });
          }),
          (n[6] = N))
        : (N = n[6]);
      var M;
      if (
        (n[7] !== x ? ((M = [x]), (n[7] = x), (n[8] = M)) : (M = n[8]),
        d(N, M),
        a.length !== 0)
      ) {
        var w;
        n[9] !== x || n[10] !== a || n[11] !== $
          ? ((w = a.map(function (e, t) {
              return u.jsx(
                r("WAWebUnstyledButton.react"),
                {
                  ref: function (n) {
                    t === x && (P.current = n);
                  },
                  onClick: function () {
                    e.onSelect();
                  },
                  onMouseEnter: function () {
                    $(t);
                  },
                  children: e.renderFn(t === x),
                },
                t,
              );
            })),
            (n[9] = x),
            (n[10] = a),
            (n[11] = $),
            (n[12] = w))
          : (w = n[12]);
        var A = w,
          F,
          O,
          B;
        if (n[13] !== I) {
          var W = [f.itemsContainer, o("WAWebUISpacing").uiPadding.all10];
          ((F = o("ReactDOM").createPortal),
            (O = I),
            (B = (e || (e = r("stylex"))).props(W)),
            (n[13] = I),
            (n[14] = F),
            (n[15] = O),
            (n[16] = B));
        } else ((F = n[14]), (O = n[15]), (B = n[16]));
        var q;
        n[17] !== A || n[18] !== O || n[19] !== B
          ? ((q = u.jsx(
              "div",
              babelHelpers.extends({ onClick: O }, B, { children: A }),
            )),
            (n[17] = A),
            (n[18] = O),
            (n[19] = B),
            (n[20] = q))
          : (q = n[20]);
        var U;
        return (
          n[21] !== k || n[22] !== F || n[23] !== q
            ? ((U = F(q, k)),
              (n[21] = k),
              (n[22] = F),
              (n[23] = q),
              (n[24] = U))
            : (U = n[24]),
          U
        );
      }
    }
    function h(e) {
      e.onSelect();
    }
    function y(e, t) {
      return Math.max(e, t.width);
    }
    function C(e, t) {
      return e + t.height;
    }
    l.default = g;
  },
  98,
);
