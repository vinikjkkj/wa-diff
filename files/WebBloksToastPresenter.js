__d(
  "WebBloksToastPresenter",
  [
    "WebBloksFocusScopeQueries",
    "WebBloksScreen",
    "WebBloksScreenHost",
    "WebBloksStyle",
    "WebBloksTreeResources",
    "react",
    "react-compiler-runtime",
    "useWebBloksAccessibilityModule",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState,
      m = o("WebBloksStyle").createStyles({
        root: { display: "flex", justifyContent: "center" },
        defaultRoot: {
          bottom: 0,
          left: 0,
          position: "fixed !important",
          right: 0,
          width: "100%",
          zIndex: 100,
        },
        defaultInnerContainer: { transform: "translateY(0)" },
        defaultInnerContainerHidden: { transform: "translateY(100%)" },
        miniToastRoot: {
          alignItems: "center !important",
          boxSizing: "border-box",
          bottom: "50%",
          display: "flex",
          flexDirection: "column",
          left: 0,
          overflow: "hidden",
          position: "fixed !important",
          right: 0,
          zIndex: 100,
        },
        miniToastInnerContainer: {
          opacity: 1,
          transitionProperty: "opacity!important",
        },
        miniToastInnerContainerHidden: {
          opacity: 0,
          transitionProperty: "opacity!important",
        },
      });
    function p(e) {
      var t = o("react-compiler-runtime").c(41),
        n = e.objectSet,
        a = n.toastManager,
        i;
      t[0] !== a
        ? ((i = function () {
            return a.getEmptyState();
          }),
          (t[0] = a),
          (t[1] = i))
        : (i = t[1]);
      var l = d(i),
        u = l[0],
        p = l[1],
        _,
        f;
      (t[2] !== a
        ? ((_ = function () {
            var e = a.addListener(p);
            return function () {
              e.remove();
            };
          }),
          (f = [a]),
          (t[2] = a),
          (t[3] = _),
          (t[4] = f))
        : ((_ = t[3]), (f = t[4])),
        c(_, f));
      var g = r("useWebBloksAccessibilityModule")(),
        h = g.FocusRegion,
        y = u.currentToast,
        C = u.isToastHiding,
        b = (y == null || C) && m.defaultInnerContainerHidden,
        v;
      t[5] !== b
        ? ((v = o("WebBloksStyle").classNames(m.defaultInnerContainer, b)),
          (t[5] = b),
          (t[6] = v))
        : (v = t[6]);
      var S = v,
        R = (y == null || C) && m.miniToastInnerContainerHidden,
        L;
      t[7] !== R
        ? ((L = o("WebBloksStyle").classNames(m.miniToastInnerContainer, R)),
          (t[7] = R),
          (t[8] = L))
        : (L = t[8]);
      var E = L,
        k = null,
        I = null,
        T = 0,
        D = "ease-out";
      if (y != null) {
        e: switch (y.type) {
          case "simple": {
            k = y.component;
            break e;
          }
          case "bloksModel": {
            var x;
            t[9] !== y.model || t[10] !== n
              ? ((x = o("WebBloksScreen").WebBloksScreen.fromBloksModel(
                  n,
                  y.model,
                  o("WebBloksTreeResources").WebBloksTreeResources.empty(),
                  { isModal: !1, isEmbedded: !0 },
                )),
                (t[9] = y.model),
                (t[10] = n),
                (t[11] = x))
              : (x = t[11]);
            var $ = x,
              P;
            (t[12] !== $
              ? ((P = s.jsx(
                  r("WebBloksScreenHost"),
                  { screen: $ },
                  $.screenId,
                )),
                (t[12] = $),
                (t[13] = P))
              : (P = t[13]),
              (k = P));
            break e;
          }
          case "bloksParseResult": {
            var N;
            t[14] !== y.parseResult || t[15] !== n
              ? ((N = o("WebBloksScreen").WebBloksScreen.fromBloksParseResult(
                  n,
                  y.parseResult,
                  { isModal: !1, isEmbedded: !0 },
                )),
                (t[14] = y.parseResult),
                (t[15] = n),
                (t[16] = N))
              : (N = t[16]);
            var M = N,
              w;
            (t[17] !== M
              ? ((w = s.jsx(
                  r("WebBloksScreenHost"),
                  { screen: M },
                  M.screenId,
                )),
                (t[17] = M),
                (t[18] = w))
              : (w = t[18]),
              (k = w));
            break e;
          }
          case "mini":
            I = y.component;
        }
        C
          ? ((T = y.options.showAnimationDurationMs / 1e3),
            (D = y.options.showAnimationInterpolator))
          : ((T = y.options.dismissAnimationDurationMs / 1e3),
            (D = y.options.dismissAnimationInterpolator));
      }
      if (k != null) {
        var A;
        (t[19] !== h || t[20] !== k
          ? ((A = s.jsx(h, {
              autoFocusQuery: o("WebBloksFocusScopeQueries").tabbableScopeQuery,
              autoRestoreFocus: !0,
              containFocusQuery: o("WebBloksFocusScopeQueries")
                .tabbableScopeQuery,
              children: k,
            })),
            (t[19] = h),
            (t[20] = k),
            (t[21] = A))
          : (A = t[21]),
          (k = A));
      }
      if (I != null) {
        var F;
        (t[22] !== h || t[23] !== I
          ? ((F = s.jsx(h, {
              autoFocusQuery: o("WebBloksFocusScopeQueries").tabbableScopeQuery,
              autoRestoreFocus: !0,
              containFocusQuery: o("WebBloksFocusScopeQueries")
                .tabbableScopeQuery,
              children: I,
            })),
            (t[22] = h),
            (t[23] = I),
            (t[24] = F))
          : (F = t[24]),
          (I = F));
      }
      var O = C ? void 0 : "alert",
        B = "transform " + T + "s " + D,
        W;
      t[25] !== B
        ? ((W = { transition: B }), (t[25] = B), (t[26] = W))
        : (W = t[26]);
      var q;
      t[27] !== k || t[28] !== S || t[29] !== W
        ? ((q = s.jsx("div", {
            className: m.defaultRoot,
            children: s.jsx("div", { className: S, style: W, children: k }),
          })),
          (t[27] = k),
          (t[28] = S),
          (t[29] = W),
          (t[30] = q))
        : (q = t[30]);
      var U = "opacity " + T + "s " + D,
        V;
      t[31] !== U
        ? ((V = { transition: U }), (t[31] = U), (t[32] = V))
        : (V = t[32]);
      var H;
      t[33] !== I || t[34] !== E || t[35] !== V
        ? ((H = s.jsx("div", {
            className: m.miniToastRoot,
            children: s.jsx("div", { className: E, style: V, children: I }),
          })),
          (t[33] = I),
          (t[34] = E),
          (t[35] = V),
          (t[36] = H))
        : (H = t[36]);
      var G;
      return (
        t[37] !== q || t[38] !== H || t[39] !== O
          ? ((G = s.jsxs("div", {
              role: O,
              "aria-atomic": "true",
              name: "WebBloksToastPresenter",
              "data-testid": void 0,
              className: m.root,
              children: [q, H],
            })),
            (t[37] = q),
            (t[38] = H),
            (t[39] = O),
            (t[40] = G))
          : (G = t[40]),
        G
      );
    }
    l.default = p;
  },
  98,
);
