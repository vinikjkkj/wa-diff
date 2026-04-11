__d(
  "WAWebVoipUiDocPipPortalContainer.react",
  [
    "WAWebABProps",
    "WAWebTypedEventEmitter",
    "WAWebVoipActivityTracker",
    "WAWebVoipFocusTracker",
    "WAWebVoipUiDocPipLoadable",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
    "useWAWebTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useState,
      m = "wa-web-voip-docpip-popover-portal",
      p = 3e3,
      _ = !1;
    function f() {
      return _;
    }
    var g = new (r("WAWebTypedEventEmitter"))();
    function h(e) {
      try {
        "mediaSession" in navigator &&
          navigator.mediaSession.setActionHandler("enterpictureinpicture", e);
      } catch (e) {}
    }
    function y(e) {
      _ !== e &&
        ((_ = e),
        g.trigger("docPipOpenStateChanged"),
        o("WAWebVoipFocusTracker").notifyWindowModeChanged(e ? "pip" : "main"));
    }
    function C() {
      var e = o("react-compiler-runtime").c(17),
        t = d(null),
        n = t[0],
        r = t[1],
        a = d(!1),
        i = a[0],
        l = a[1],
        u = d(null),
        m = u[0],
        _ = u[1],
        f;
      e[0] !== m
        ? ((f = function () {
            (l(!1), r(null), y(!1), m && m.close());
          }),
          (e[0] = m),
          (e[1] = f))
        : (f = e[1]);
      var C = o("useWAWebTimeout").useManualTimeout(f),
        S = C[0],
        R;
      (e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = function (t) {
            var e = t.callLogMsg;
            r(e);
          }),
          (e[2] = R))
        : (R = e[2]),
        o("useWAWebListener").useListener(g, "setDocPipProps", R));
      var L;
      (e[3] !== S
        ? ((L = function (t) {
            var e = t.surveyInteracted;
            S(e !== !0 ? p : 0);
          }),
          (e[3] = S),
          (e[4] = L))
        : (L = e[4]),
        o("useWAWebListener").useListener(g, "closeDocPip", L));
      var E;
      (e[5] !== n
        ? ((E = function () {
            n &&
              !o(
                "WAWebVoipUiPopoutWindowPortalContainer.react",
              ).getIsCallActiveInPopoutWindow() &&
              (l(!0),
              y(!0),
              o("WAWebVoipActivityTracker").trackUiActivity(
                o("WAWebVoipActivityTracker").VoipUiActivity
                  .VOIP_WINDOW_MOVE_TO_DOC_PIP,
              ));
          }),
          (e[5] = n),
          (e[6] = E))
        : (E = e[6]),
        o("useWAWebListener").useListener(g, "reopenDocPip", E));
      var k;
      (e[7] !== m
        ? ((k = function () {
            var e = o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).getIsPopoutWindowActiveAndVisible();
            e && m && m.close();
          }),
          (e[7] = m),
          (e[8] = k))
        : (k = e[8]),
        o("useWAWebListener").useListener(
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .WAWebVoipUiPopoutWindowEventEmitter,
          "popoutWindowVisibilityChanged",
          k,
        ));
      var I, T;
      (e[9] !== n
        ? ((I = function () {
            if (!n) {
              h(null);
              return;
            }
            return (h(v), b);
          }),
          (T = [n]),
          (e[9] = n),
          (e[10] = I),
          (e[11] = T))
        : ((I = e[10]), (T = e[11])),
        c(I, T));
      var D, x;
      if (
        (e[12] !== m
          ? ((D = function () {
              if (m) {
                var e = function () {
                    (l(!1),
                      _(null),
                      y(!1),
                      o("WAWebVoipActivityTracker").trackUiActivity(
                        o("WAWebVoipActivityTracker").VoipUiActivity
                          .VOIP_WINDOW_MOVE_FROM_DOC_PIP,
                      ));
                  },
                  t = function () {
                    document.visibilityState === "visible" &&
                      (o("WAWebABProps").getABPropConfigValue(
                        "enable_web_voip_anr_optimizations",
                      )
                        ? window.setTimeout(function () {
                            return m.close();
                          }, 0)
                        : m.close());
                  };
                return (
                  m.addEventListener("pagehide", e),
                  document.addEventListener("visibilitychange", t),
                  function () {
                    (m.removeEventListener("pagehide", e),
                      document.removeEventListener("visibilitychange", t));
                  }
                );
              }
            }),
            (x = [m]),
            (e[12] = m),
            (e[13] = D),
            (e[14] = x))
          : ((D = e[13]), (x = e[14])),
        c(D, x),
        !n || !i)
      )
        return null;
      var $;
      return (
        e[15] !== n
          ? (($ = s.jsx(
              o("WAWebVoipUiDocPipLoadable").WAWebVoipUiDocPipLoadable,
              { callLogMsg: n, onWindowReady: _ },
            )),
            (e[15] = n),
            (e[16] = $))
          : ($ = e[16]),
        $
      );
    }
    function b() {
      h(null);
    }
    function v() {
      o(
        "WAWebVoipUiPopoutWindowPortalContainer.react",
      ).getIsCallActiveInPopoutWindow() ||
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsPopoutWindowOpening() ||
        g.trigger("reopenDocPip");
    }
    ((l.VOIP_DOCPIP_POPOVER_PORTAL_ID = m),
      (l.getIsDocPipWindowOpen = f),
      (l.WAWebVoipUiDocPipEventEmitter = g),
      (l.WAWebVoipUiDocPipPortalContainer = C));
  },
  98,
);
