__d(
  "WAWebiFrameWrapper.react",
  [
    "SecureMessageListener",
    "WAWebErrorBoundary.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebGalaxyFlowIframeReadyTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useCallback,
      m = c.useEffect,
      p = c.useMemo,
      _ = c.useState;
    function f(t) {
      var n = o("react-compiler-runtime").c(46),
        a = t.containerXStyle,
        i = t.fallback,
        l = t.id,
        s = t.iframeLoadedEvent,
        c = t.iframeRef,
        d = t.innerXStyle,
        p = t.messageEventHandler,
        f = t.onClose,
        g = t.onError,
        h = t.onLoad,
        y = t.sandbox,
        C = t.supportedOrigins,
        b = t.uri,
        v = _(!1),
        S = v[0],
        R = v[1],
        L;
      n[0] !== i || n[1] !== f || n[2] !== g
        ? ((L = {
            onTimeout: function () {
              (g == null || g(), i(f));
            },
          }),
          (n[0] = i),
          (n[1] = f),
          (n[2] = g),
          (n[3] = L))
        : (L = n[3]);
      var E = r("useWAWebGalaxyFlowIframeReadyTimeout")(L),
        k = E.markIframeReady,
        I;
      n[4] !== s || n[5] !== k || n[6] !== p || n[7] !== h || n[8] !== C
        ? ((I = function () {
            var e = new (r("SecureMessageListener"))(window);
            return (
              e
                .setSupportedOrigins(C)
                .setEventHandler(function (e) {
                  if (e.data != null && typeof e.data == "string") {
                    var t = JSON.parse(e.data),
                      n = t.eventName;
                    if (n === s) {
                      (k(), h == null || h(), R(!0));
                      return;
                    }
                  }
                  p(e);
                })
                .beginListening(),
              function () {
                e.stopListening();
              }
            );
          }),
          (n[4] = s),
          (n[5] = k),
          (n[6] = p),
          (n[7] = h),
          (n[8] = C),
          (n[9] = I))
        : (I = n[9]);
      var T;
      (n[10] !== s ||
      n[11] !== k ||
      n[12] !== p ||
      n[13] !== h ||
      n[14] !== C ||
      n[15] !== b
        ? ((T = [s, k, p, h, C, b]),
          (n[10] = s),
          (n[11] = k),
          (n[12] = p),
          (n[13] = h),
          (n[14] = C),
          (n[15] = b),
          (n[16] = T))
        : (T = n[16]),
        m(I, T));
      var D = S ? 1 : 0,
        x;
      n[17] !== D
        ? ((x = { opacity: D }), (n[17] = D), (n[18] = x))
        : (x = n[18]);
      var $ = x,
        P;
      n[19] !== i || n[20] !== f
        ? ((P = function () {
            return i(f);
          }),
          (n[19] = i),
          (n[20] = f),
          (n[21] = P))
        : (P = n[21]);
      var N = P,
        M;
      n[22] !== a
        ? ((M = (e || (e = r("stylex"))).props(a)), (n[22] = a), (n[23] = M))
        : (M = n[23]);
      var w;
      n[24] !== i || n[25] !== S || n[26] !== f
        ? ((w = !S && i(f)), (n[24] = i), (n[25] = S), (n[26] = f), (n[27] = w))
        : (w = n[27]);
      var A;
      n[28] !== d
        ? ((A = (e || (e = r("stylex"))).props(d)), (n[28] = d), (n[29] = A))
        : (A = n[29]);
      var F;
      n[30] !== l || n[31] !== c || n[32] !== y || n[33] !== A || n[34] !== b
        ? ((F = u.jsx(
            "iframe",
            babelHelpers.extends(
              { frameBorder: "0", sandbox: y, src: b, ref: c, id: l, title: l },
              A,
            ),
          )),
          (n[30] = l),
          (n[31] = c),
          (n[32] = y),
          (n[33] = A),
          (n[34] = b),
          (n[35] = F))
        : (F = n[35]);
      var O;
      n[36] !== $ || n[37] !== F
        ? ((O = u.jsx("div", { style: $, children: F })),
          (n[36] = $),
          (n[37] = F),
          (n[38] = O))
        : (O = n[38]);
      var B;
      n[39] !== O || n[40] !== M || n[41] !== w
        ? ((B = u.jsxs(
            "div",
            babelHelpers.extends({}, M, { children: [w, O] }),
          )),
          (n[39] = O),
          (n[40] = M),
          (n[41] = w),
          (n[42] = B))
        : (B = n[42]);
      var W;
      return (
        n[43] !== N || n[44] !== B
          ? ((W = u.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
              name: "iframe-wrapper",
              fallback: N,
              children: B,
            })),
            (n[43] = N),
            (n[44] = B),
            (n[45] = W))
          : (W = n[45]),
        W
      );
    }
    l.default = f;
  },
  98,
);
