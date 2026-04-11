__d(
  "WAWebVoipUiDocPip.react",
  [
    "ReactDOM",
    "WALogger",
    "WAWebVoipPopoutModalManagerWrapper.react",
    "WAWebVoipTooSmallOverlay.react",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiLoadable",
    "WAWebVoipUiPopoutWindowContext",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebVoipWindowSetup",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useMemo,
      f = d.useState,
      g = 350,
      h = 300,
      y = 370,
      C = 320,
      b = { width: 503, height: 400 };
    function v(t) {
      var a = o("react-compiler-runtime").c(30),
        i = t.callLogMsg,
        l = t.onWindowReady,
        u = f(null),
        d = u[0],
        m = u[1],
        _ = f(null),
        v = _[0],
        S = _[1],
        R = f(!1),
        L = R[0],
        E = R[1],
        k;
      a[0] !== d
        ? ((k = function () {
            d == null || d.resizeTo(b.width, b.height);
          }),
          (a[0] = d),
          (a[1] = k))
        : (k = a[1]);
      var I = k,
        T;
      a[2] !== d
        ? ((T = d
            ? {
                targetWindow: d,
                popoverPortalId: o("WAWebVoipUiDocPipPortalContainer.react")
                  .VOIP_DOCPIP_POPOVER_PORTAL_ID,
                logContext: "doc pip",
              }
            : null),
          (a[2] = d),
          (a[3] = T))
        : (T = a[3]);
      var D = T,
        x;
      a[4] !== l
        ? ((x = function (t) {
            (S(t.document), l == null || l(t));
          }),
          (a[4] = l),
          (a[5] = x))
        : (x = a[5]);
      var $ = o("useWAWebVoipWindowSetup").useVoipWindowSetup(D, x),
        P,
        N;
      (a[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = function () {
            if (!("documentPictureInPicture" in window)) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: DocPiP API not supported",
                    ])),
                )
                .sendLogs("voip: DocPiP API not supported");
              return;
            }
            var t = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    var e = window.documentPictureInPicture;
                    if (!e || e.window) return;
                    var t = yield e.requestWindow(b);
                    m(t);
                  } catch (e) {
                    o("WALogger")
                      .ERROR(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "voip: Failed to open Document Picture in Picture",
                          ])),
                      )
                      .sendLogs(
                        "voip: Failed to open Document Picture in Picture",
                      );
                  }
                },
              );
              function t() {
                return e.apply(this, arguments);
              }
              return t;
            })();
            t();
          }),
          (N = []),
          (a[6] = P),
          (a[7] = N))
        : ((P = a[6]), (N = a[7])),
        p(P, N));
      var M, w;
      (a[8] !== d
        ? ((M = function () {
            if (d) {
              var e = function () {
                E(function (e) {
                  var t = d.innerWidth,
                    n = d.innerHeight;
                  return e ? !(t >= y && n >= C) : t < g || n < h;
                });
              };
              return (
                d.addEventListener("resize", e),
                e(),
                function () {
                  d.removeEventListener("resize", e);
                }
              );
            }
          }),
          (w = [d]),
          (a[8] = d),
          (a[9] = M),
          (a[10] = w))
        : ((M = a[9]), (w = a[10])),
        p(M, w));
      var A;
      a[11] !== v
        ? ((A =
            v == null
              ? void 0
              : v.getElementById(
                  o("WAWebVoipUiDocPipPortalContainer.react")
                    .VOIP_DOCPIP_POPOVER_PORTAL_ID,
                )),
          (a[11] = v),
          (a[12] = A))
        : (A = a[12]);
      var F;
      a[13] !== d || a[14] !== v || a[15] !== A
        ? ((F = {
            isContextInPopoutWindow: !0,
            popoverPortalEl: A,
            documentEl: v,
            windowEl: d,
            isDocPip: !0,
          }),
          (a[13] = d),
          (a[14] = v),
          (a[15] = A),
          (a[16] = F))
        : (F = a[16]);
      var O = F;
      if (!$ || !v) return null;
      var B;
      a[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = c.jsx(
            o("WAWebVoipPopoutModalManagerWrapper.react")
              .VoipPopoutModalManagerWrapper,
            { type: o("WAWebVoipPopoutModalManagerWrapper.react").ModalType },
          )),
          (a[17] = B))
        : (B = a[17]);
      var W;
      a[18] !== i
        ? ((W = c.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
            callLogMsg: i,
          })),
          (a[18] = i),
          (a[19] = W))
        : (W = a[19]);
      var q;
      a[20] !== I || a[21] !== L
        ? ((q = c.jsx(
            o("WAWebVoipTooSmallOverlay.react").WAWebVoipTooSmallOverlay,
            { isVisible: L, onRestoreSize: I },
          )),
          (a[20] = I),
          (a[21] = L),
          (a[22] = q))
        : (q = a[22]);
      var U;
      a[23] !== O || a[24] !== W || a[25] !== q
        ? ((U = c.jsxs(r("WAWebVoipUiPopoutWindowContext").Provider, {
            value: O,
            children: [B, W, q],
          })),
          (a[23] = O),
          (a[24] = W),
          (a[25] = q),
          (a[26] = U))
        : (U = a[26]);
      var V;
      return (
        a[27] !== $ || a[28] !== U
          ? ((V = o("ReactDOM").createPortal(U, $)),
            (a[27] = $),
            (a[28] = U),
            (a[29] = V))
          : (V = a[29]),
        V
      );
    }
    l.WAWebVoipUiDocPip = v;
  },
  98,
);
