__d(
  "WAWebPdfPasswordDialog.react",
  [
    "fbt",
    "WAWebFlex.react",
    "WAWebKeyboardTabUtils",
    "WAWebPdfViewerEventEmitter",
    "WAWebPdfViewerTestIds",
    "WAWebStopEvent",
    "WAWebUsePasswordDialog",
    "WDSButton.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = {
        subtitle: { marginTop: "x1xmf6yo", $$css: !0 },
        error: { marginTop: "x1gslohp", $$css: !0 },
      };
    function f(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r,
        a;
      (n[0] !== e || n[1] !== t
        ? ((r = function () {
            if (t) {
              var n = function () {
                  var t = e.current;
                  if (t != null) {
                    var n,
                      r = o("WAWebKeyboardTabUtils").getTabbableElements(
                        t,
                        o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                      );
                    (n = r[0]) == null || n.focus();
                  }
                },
                r = function () {
                  var t = e.current;
                  if (t != null) {
                    var n,
                      r = o("WAWebKeyboardTabUtils").getTabbableElements(
                        t,
                        o("WAWebKeyboardTabUtils").FocusType.TABBABLE,
                      );
                    (n = r[r.length - 1]) == null || n.focus();
                  }
                };
              return (
                o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
                  "focus:firstInViewer",
                  n,
                ),
                o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.on(
                  "focus:lastInViewer",
                  r,
                ),
                function () {
                  (o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off(
                    "focus:firstInViewer",
                    n,
                  ),
                    o("WAWebPdfViewerEventEmitter").pdfViewerEventEmitter.off(
                      "focus:lastInViewer",
                      r,
                    ));
                }
              );
            }
          }),
          (a = [e, t]),
          (n[0] = e),
          (n[1] = t),
          (n[2] = r),
          (n[3] = a))
        : ((r = n[2]), (a = n[3])),
        d(r, a));
    }
    function g(e) {
      var t = o("react-compiler-runtime").c(31),
        n = e.onHide,
        a = e.onShow,
        i = e.viewer,
        l = p(""),
        c = l[0],
        d = l[1],
        g = m(null),
        h = o("WAWebUsePasswordDialog").usePasswordDialog(i, a, n),
        y = h.state,
        C = h.submitPassword;
      f(g, y.isVisible);
      var b;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function (t) {
            d(t.target.value);
          }),
          (t[0] = b))
        : (b = t[0]);
      var v = b,
        S;
      t[1] !== c || t[2] !== y.isSubmitting
        ? ((S = c.trim() !== "" && !y.isSubmitting),
          (t[1] = c),
          (t[2] = y.isSubmitting),
          (t[3] = S))
        : (S = t[3]);
      var R = S,
        L;
      t[4] !== R || t[5] !== c || t[6] !== C
        ? ((L = function () {
            R && C(c);
          }),
          (t[4] = R),
          (t[5] = c),
          (t[6] = C),
          (t[7] = L))
        : (L = t[7]);
      var E = L,
        k;
      t[8] !== R || t[9] !== c || t[10] !== C
        ? ((k = function (t) {
            t.key === "Enter" && R && C(c);
          }),
          (t[8] = R),
          (t[9] = c),
          (t[10] = C),
          (t[11] = k))
        : (k = t[11]);
      var I = k;
      if (!y.isVisible) return null;
      var T;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((T =
            "x10l6tqk x13vifvy x1o0tod xtijo5x x1ey2m1c x78zum5 x6s0dn4 xl56j7k x1h3rtpe"),
          (t[12] = T))
        : (T = t[12]);
      var D;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((D = u.jsx(r("WDSText.react"), {
            type: "Headline2",
            colorName: "contentDefault",
            children: s._(/*BTDS*/ "This file is password protected"),
          })),
          (t[13] = D))
        : (D = t[13]);
      var x, $;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = u.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            xstyle: _.subtitle,
            children: s._(/*BTDS*/ "Enter the password to open it"),
          })),
          ($ =
            "xqui205 xwklpps xnnr8r x13m54ha x1l2rt3b x5kalc8 xuqqiot x1lkg3h2 x17mbzc4 xcouhex x972fbf x10w94by x1qhh985 x14e42zd x1ejq31n x18oe1m7 x1sy0etr xstzfhl xojvex2 xaatb59 x1qgsegg x9f619 xyc5z6t x103yw6p x1280gxy xf7dkkf xv54qhq x1f6kntn x1fc57z9 x14ug900 x18aymmy"),
          (t[14] = x),
          (t[15] = $))
        : ((x = t[14]), ($ = t[15]));
      var P;
      t[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "Type password")), (t[16] = P))
        : (P = t[16]);
      var N;
      t[17] !== I || t[18] !== c
        ? ((N = u.jsx("input", {
            className: $,
            type: "password",
            "data-testid": void 0,
            placeholder: P,
            value: c,
            onChange: v,
            onKeyDown: I,
          })),
          (t[17] = I),
          (t[18] = c),
          (t[19] = N))
        : (N = t[19]);
      var M;
      t[20] !== y.error
        ? ((M =
            y.error != null &&
            u.jsx(r("WDSText.react"), {
              type: "Body2",
              colorName: "secondaryNegative",
              testid: void 0,
              xstyle: _.error,
              children: s._(/*BTDS*/ "Incorrect password. Try again."),
            })),
          (t[20] = y.error),
          (t[21] = M))
        : (M = t[21]);
      var w;
      t[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = "xqui205"), (t[22] = w))
        : (w = t[22]);
      var A;
      t[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s._(/*BTDS*/ "Open")), (t[23] = A))
        : (A = t[23]);
      var F = !R,
        O;
      t[24] !== E || t[25] !== F
        ? ((O = u.jsx("div", {
            className: w,
            children: u.jsx(r("WDSButton.react"), {
              label: A,
              onPress: E,
              size: "medium",
              variant: "filled",
              testid: void 0,
              disabled: F,
            }),
          })),
          (t[24] = E),
          (t[25] = F),
          (t[26] = O))
        : (O = t[26]);
      var B;
      return (
        t[27] !== N || t[28] !== M || t[29] !== O
          ? ((B = u.jsx("div", {
              ref: g,
              className: T,
              onClick: o("WAWebStopEvent").stopPropagation,
              "data-testid": void 0,
              children: u.jsxs(o("WAWebFlex.react").FlexColumn, {
                align: "center",
                children: [D, x, N, M, O],
              }),
            })),
            (t[27] = N),
            (t[28] = M),
            (t[29] = O),
            (t[30] = B))
          : (B = t[30]),
        B
      );
    }
    l.default = g;
  },
  226,
);
