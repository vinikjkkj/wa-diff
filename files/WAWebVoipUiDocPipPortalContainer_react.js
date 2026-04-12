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
      var e,
        t = d(null),
        n = t[0],
        r = t[1],
        a = d(!1),
        i = a[0],
        l = a[1],
        u = d(null),
        m = u[0],
        _ = u[1],
        f = o("useWAWebTimeout").useManualTimeout(function () {
          (l(!1), r(null), y(!1), m && m.close());
        }),
        C = f[0];
      return (
        (e = o("useWAWebListener")).useListener(
          g,
          "setDocPipProps",
          function (e) {
            var t = e.callLogMsg;
            r(t);
          },
        ),
        e.useListener(g, "closeDocPip", function (e) {
          var t = e.surveyInteracted;
          C(t !== !0 ? p : 0);
        }),
        e.useListener(g, "reopenDocPip", function () {
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
        e.useListener(
          o("WAWebVoipUiPopoutWindowPortalContainer.react")
            .WAWebVoipUiPopoutWindowEventEmitter,
          "popoutWindowVisibilityChanged",
          function () {
            var e = o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).getIsPopoutWindowActiveAndVisible();
            e && m && m.close();
          },
        ),
        c(
          function () {
            if (!n) {
              h(null);
              return;
            }
            return (
              h(function () {
                o(
                  "WAWebVoipUiPopoutWindowPortalContainer.react",
                ).getIsCallActiveInPopoutWindow() ||
                  o(
                    "WAWebVoipUiPopoutWindowPortalContainer.react",
                  ).getIsPopoutWindowOpening() ||
                  g.trigger("reopenDocPip");
              }),
              function () {
                h(null);
              }
            );
          },
          [n],
        ),
        c(
          function () {
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
          },
          [m],
        ),
        !n || !i
          ? null
          : s.jsx(o("WAWebVoipUiDocPipLoadable").WAWebVoipUiDocPipLoadable, {
              callLogMsg: n,
              onWindowReady: _,
            })
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.VOIP_DOCPIP_POPOVER_PORTAL_ID = m),
      (l.getIsDocPipWindowOpen = f),
      (l.WAWebVoipUiDocPipEventEmitter = g),
      (l.WAWebVoipUiDocPipPortalContainer = C));
  },
  98,
);
