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
      var a = t.callLogMsg,
        i = t.onWindowReady,
        l = f(null),
        u = l[0],
        d = l[1],
        v = f(null),
        S = v[0],
        R = v[1],
        L = f(!1),
        E = L[0],
        k = L[1],
        I = m(
          function () {
            u == null || u.resizeTo(b.width, b.height);
          },
          [u],
        ),
        T = _(
          function () {
            return u
              ? {
                  targetWindow: u,
                  popoverPortalId: o("WAWebVoipUiDocPipPortalContainer.react")
                    .VOIP_DOCPIP_POPOVER_PORTAL_ID,
                  logContext: "doc pip",
                }
              : null;
          },
          [u],
        ),
        D = o("useWAWebVoipWindowSetup").useVoipWindowSetup(T, function (e) {
          (R(e.document), i == null || i(e));
        });
      (p(function () {
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
        function t() {
          return r.apply(this, arguments);
        }
        function r() {
          return (
            (r = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e = window.documentPictureInPicture;
                if (!e || e.window) return;
                var t = yield e.requestWindow(b);
                d(t);
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "voip: Failed to open Document Picture in Picture",
                      ])),
                  )
                  .sendLogs("voip: Failed to open Document Picture in Picture");
              }
            })),
            r.apply(this, arguments)
          );
        }
        t();
      }, []),
        p(
          function () {
            if (u) {
              var e = function () {
                k(function (e) {
                  var t = u.innerWidth,
                    n = u.innerHeight;
                  return e ? !(t >= y && n >= C) : t < g || n < h;
                });
              };
              return (
                u.addEventListener("resize", e),
                e(),
                function () {
                  u.removeEventListener("resize", e);
                }
              );
            }
          },
          [u],
        ));
      var x = _(
        function () {
          return {
            isContextInPopoutWindow: !0,
            popoverPortalEl:
              S == null
                ? void 0
                : S.getElementById(
                    o("WAWebVoipUiDocPipPortalContainer.react")
                      .VOIP_DOCPIP_POPOVER_PORTAL_ID,
                  ),
            documentEl: S,
            windowEl: u,
            isDocPip: !0,
          };
        },
        [S, u],
      );
      return !D || !S
        ? null
        : o("ReactDOM").createPortal(
            c.jsxs(r("WAWebVoipUiPopoutWindowContext").Provider, {
              value: x,
              children: [
                c.jsx(
                  o("WAWebVoipPopoutModalManagerWrapper.react")
                    .VoipPopoutModalManagerWrapper,
                  {
                    type: o("WAWebVoipPopoutModalManagerWrapper.react")
                      .ModalType,
                  },
                ),
                c.jsx(o("WAWebVoipUiLoadable").WAWebVoipUiLoadable, {
                  callLogMsg: a,
                }),
                c.jsx(
                  o("WAWebVoipTooSmallOverlay.react").WAWebVoipTooSmallOverlay,
                  { isVisible: E, onRestoreSize: I },
                ),
              ],
            }),
            D,
          );
    }
    ((v.displayName = v.name + " [from " + i.id + "]"),
      (l.WAWebVoipUiDocPip = v));
  },
  98,
);
