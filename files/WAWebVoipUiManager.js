__d(
  "WAWebVoipUiManager",
  [
    "WACommonTaskScheduler",
    "WALogger",
    "WAWebABProps",
    "WAWebCallCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebFullscreenDetection",
    "WAWebGuidePopup.react",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebPipController",
    "WAWebPwaDocumentMetadataUtils",
    "WAWebReleaseToEventLoop",
    "WAWebTimeSpentLoggingExternal",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallStateUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipWindowConstants",
    "WAWebWamEnumTsExternalEventSource",
    "fbs",
    "justknobx",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D = T || (T = o("react")),
      x = 3e3,
      $ = 3e3,
      P = !1,
      N = null,
      M = null,
      w = null,
      A = null,
      F = null;
    function O() {
      P ||
        (r("WAWebCallCollection").on(
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          U,
        ),
        (P = !0));
    }
    function B() {
      (r("WAWebCallCollection").off(
        o("WAWebVoipEventConstants").getChangeEvent(
          o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        U,
      ),
        (P = !1));
    }
    function W() {
      (N == null || N(),
        (N = o("WAWebTimeSpentLoggingExternal").beginTsExternalEvent(
          o("WAWebWamEnumTsExternalEventSource").TS_EXTERNAL_EVENT_SOURCE.CALL,
        )));
    }
    function q(e, t) {
      if (e.msg != null) return (t(), r("WAWebNoop"));
      var n = function () {
        e.msg != null &&
          (e.off(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
            ),
            n,
          ),
          t());
      };
      return (
        e.on(
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
          ),
          n,
        ),
        function () {
          e.off(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
            ),
            n,
          );
        }
      );
    }
    function U() {
      var t = r("WAWebCallCollection").activeCall;
      if (t == null) {
        var n, a;
        (F == null || F(),
          (F = null),
          M == null || M(),
          (M = null),
          w == null || w(),
          (w = null),
          N == null || N(),
          (N = null),
          r("WAWebCallCollection").setPendingCallLink(null));
        var i = r("WAWebCallCollection").lastActiveCall,
          l = (i == null ? void 0 : i.shouldShowPostCallSurvey) === !0;
        if (l) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call ended, keeping windows for survey",
              ])),
          ),
            B());
          return;
        }
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Active call ended, closing windows",
            ])),
        );
        var g = o(
            "WAWebVoipUiPopoutWindowPortalContainer.react",
          ).getIsCallActiveInPopoutWindow()
            ? 0
            : x,
          h =
            (n =
              (a = r("WAWebCallCollection").lastActiveCall) == null
                ? void 0
                : a.postCallSurveyInteracted) != null
              ? n
              : !1;
        ((A = window.setTimeout(function () {
          ((A = null), r("WAWebPipController").closePiP(), B());
        }, g)),
          Y({ callEnded: !0, surveyInteracted: h }),
          o(
            "WAWebVoipUiDocPipPortalContainer.react",
          ).WAWebVoipUiDocPipEventEmitter.trigger("closeDocPip", {
            surveyInteracted: h,
          }));
      } else {
        (A != null &&
          (window.clearTimeout(A),
          (A = null),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Cancelled pending PiP close due to new call starting",
              ])),
          ),
          r("WAWebPipController").closePiP(),
          B()),
          (r("WAWebCallCollection").lastActiveCall = t));
        var y = t.isInCallLinkPreview();
        if (y) {
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call link preview, opening PiP (no msg)",
              ])),
          ),
            r("WAWebPipController").openVoipUiPiPForCallLink(),
            o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_LAUNCHED,
            ),
            O());
          return;
        }
        var C = t.isInCallLinkLobby();
        if (C) {
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call link lobby, keeping PiP open",
              ])),
          ),
            r("WAWebPipController").openVoipUiPiPForCallLink(),
            O());
          return;
        }
        if (t.isCallLink && t.callLinkState != null) {
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call link in active state, keeping existing PiP",
              ])),
          ),
            w == null || w(),
            (w = q(t, function () {
              ((w = null),
                r("WAWebCallCollection").activeCall === t &&
                  o(
                    "WAWebVoipUiDocPipPortalContainer.react",
                  ).WAWebVoipUiDocPipEventEmitter.trigger("setDocPipProps", {
                    callLogMsg: t.msg,
                  }));
            })),
            O());
          return;
        }
        if (t.msg) {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Active call changed, opening PiP window",
              ])),
          );
          var b = t.msg,
            v = !t.outgoing,
            S = t.getState();
          if (v)
            if (o("WAWebVoipCallStateUtils").isCallActive(S))
              (F == null || F(), (F = null), W());
            else {
              var R,
                L = t.peerJid,
                E =
                  L != null
                    ? o("WAWebContactCollection").ContactCollection.get(L)
                    : null,
                k =
                  E != null
                    ? o("WAWebFrontendContactGetters").getDisplayName(E)
                    : "",
                I = (R = t.isVideo) != null ? R : !1,
                T = I
                  ? r("fbs")._(
                      /*BTDS*/ "Incoming video call from {caller_name}",
                      [r("fbs")._param("caller_name", k)],
                    )
                  : r("fbs")._(
                      /*BTDS*/ "Incoming voice call from {caller_name}",
                      [r("fbs")._param("caller_name", k)],
                    );
              (F == null || F(),
                (F = o("WAWebPwaDocumentMetadataUtils").startDocumentTitleFlash(
                  T.toString(),
                )),
                M == null || M());
              var D = function () {
                o("WAWebVoipCallStateUtils").isCallActive(t.getState()) &&
                  (F == null || F(),
                  (F = null),
                  W(),
                  M == null || M(),
                  (M = null));
              };
              (t.on(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                ),
                D,
              ),
                (M = function () {
                  t.off(
                    o("WAWebVoipEventConstants").getChangeEvent(
                      o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                    ),
                    D,
                  );
                }));
            }
          else W();
          (o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
            ? r("WACommonTaskScheduler").yield()
            : o("WAWebReleaseToEventLoop").releaseToEventLoop()
          ).then(function () {
            var e;
            ((e = o("WAWebVoipActivityTracker")).trackUiActivity(
              e.VoipUiActivity.VOIP_WINDOW_MOUNTING,
            ),
              r("WAWebPipController").openVoipUiPiP(b),
              e.trackUiActivity(e.VoipUiActivity.VOIP_WINDOW_LAUNCHED),
              o(
                "WAWebVoipUiDocPipPortalContainer.react",
              ).WAWebVoipUiDocPipEventEmitter.trigger("setDocPipProps", {
                callLogMsg: b,
              }),
              t.outgoing === !0 &&
                t.isVideo === !0 &&
                o("WAWebABProps").getABPropConfigValue(
                  "web_calling_auto_popout_video",
                ) &&
                !o(
                  "WAWebVoipUiPopoutWindowPortalContainer.react",
                ).getIsCallActiveInPopoutWindow() &&
                o("WAWebReleaseToEventLoop")
                  .releaseToEventLoop()
                  .then(function () {
                    X();
                  }));
          });
        } else {
          var $ = Date.now();
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call changed, msg not ready, waiting for PiP",
              ])),
          );
          var P = function () {
            var e = Date.now() - $;
            (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] msg became ready after ",
                  "ms, proceeding to open PiP",
                ])),
              e,
            ),
              t.off(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
                ),
                P,
              ),
              U());
          };
          t.on(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
            ),
            P,
          );
        }
        O();
      }
    }
    var V = 48,
      H = 16,
      G = 4 / 3,
      z = { left: 200, top: 200 },
      j = 640;
    function K(e, t) {
      t === void 0 && (t = !1);
      var n = o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth(),
        r = t
          ? Math.max(
              j,
              o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH_WITH_SIDEBAR,
            )
          : j,
        a = Math.max(r, n),
        i = a / e,
        l = Math.round(i + V + H);
      return {
        width: Math.max(a, o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH),
        height: Math.max(l, o("WAWebVoipWindowConstants").MIN_WINDOW_HEIGHT),
      };
    }
    function Q(e) {
      (e.document.write(
        "<!DOCTYPE html><html><head></head><body></body></html>",
      ),
        e.document.close());
    }
    function X() {
      var e;
      if (
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsCallActiveInPopoutWindow() ||
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsPopoutWindowOpening()
      ) {
        o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] openPopout skipped: popout already active or opening",
            ])),
        );
        return;
      }
      var t = r("WAWebCallCollection").activeCall,
        n = t == null ? void 0 : t.msg;
      if (!n) {
        o("WALogger").WARN(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] openPopout called without active call msg",
            ])),
        );
        return;
      }
      var a = K(G, (t == null ? void 0 : t.isGroup) === !0),
        i = a.height,
        l = a.width,
        s = babelHelpers.extends({ width: l, height: i }, z);
      (o("WAWebFullscreenDetection").isFullscreen() &&
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] openPopout in fullscreen \u2014 may open tab not popup",
            ])),
        ),
        (window.name = o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).MAIN_WINDOW_NAME),
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).setIsPopoutWindowOpening(!0));
      var u =
          !!((e = navigator.serviceWorker) != null && e.controller) &&
          r("justknobx")._("5541"),
        c = u
          ? window.location.origin + "/call/popout"
          : window.location.hostname;
      o("WALogger").LOG(
        C ||
          (C = babelHelpers.taggedTemplateLiteralLoose([
            "[voip] Opening popout window. SW enabled: ",
            ", url: ",
            "",
          ])),
        String(u),
        c,
      );
      var d = window.open(
        c,
        "",
        Object.keys(s)
          .map(function (e) {
            return e + "=" + s[e];
          })
          .join(","),
      );
      if (!d) {
        (o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).setIsPopoutWindowOpening(!1),
          o("WALogger").WARN(
            b ||
              (b = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI manager: Popout window failed to open",
              ])),
          ),
          o("WAWebModalManager").ModalManager.open(
            D.jsx(o("WAWebGuidePopup.react").GuidePopup, {
              messaging: o("WAWebGuidePopup.react").Messaging.POPUPS_BLOCKED,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            }),
          ));
        return;
      }
      var m = function () {
        o("WALogger").LOG(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] Popout document is ready, triggering React portal",
            ])),
        );
        try {
          o(
            "WAWebVoipUiPopoutWindowPortalContainer.react",
          ).WAWebVoipUiPopoutWindowEventEmitter.trigger(
            "setPopoutWindowProps",
            { callLogMsg: n, popoutWindow: d },
          );
        } finally {
          o(
            "WAWebVoipUiPopoutWindowPortalContainer.react",
          ).setIsPopoutWindowOpening(!1);
        }
      };
      if (!u) {
        (o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] SW disabled/gated, using manual doc bootstrap",
            ])),
        ),
          Q(d),
          m());
        return;
      }
      var p = null,
        _ = null,
        f = !1,
        T = function () {
          (p != null && (window.clearTimeout(p), (p = null)),
            _ != null && (window.clearInterval(_), (_ = null)),
            window.removeEventListener("message", x),
            d.closed
              ? o(
                  "WAWebVoipUiPopoutWindowPortalContainer.react",
                ).setIsPopoutWindowOpening(!1)
              : f || ((f = !0), m()));
        },
        x = function (t) {
          if (
            !(t.origin !== window.location.origin || typeof t.data != "string")
          ) {
            if (t.data.startsWith("voipPopoutReady")) {
              var e = "<unreadable>";
              try {
                e = d.location.href;
              } catch (t) {
                e = "<cross-origin: " + String(t) + ">";
              }
              var n = String(t.source === d),
                r = String(d.closed);
              o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] popout msg: data=",
                    " origin=",
                    " srcMatch=",
                    " closed=",
                    " href=",
                    "",
                  ])),
                t.data,
                t.origin,
                n,
                r,
                e,
              );
            }
            t.source === d &&
              t.data === "voipPopoutReady" &&
              (o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] Received voipPopoutReady from Service Worker",
                  ])),
              ),
              T());
          }
        };
      (window.addEventListener("message", x),
        (p = window.setTimeout(function () {
          if (
            (o("WALogger").WARN(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] SW ready timeout, firing fallback",
                ])),
            ),
            !d.closed)
          ) {
            var e = null;
            try {
              e = d.location.href;
            } catch (e) {}
            (e === "about:blank" || e === "") &&
              (o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] timeout fallback: bootstrap about:blank doc",
                  ])),
              ),
              Q(d));
          }
          T();
        }, $)),
        (_ = window.setInterval(function () {
          d.closed &&
            (o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] Popout window closed before loading finished",
                ])),
            ),
            T());
        }, 500)));
    }
    function Y(e) {
      o(
        "WAWebVoipUiPopoutWindowPortalContainer.react",
      ).WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", e);
    }
    ((l.setupVoipActiveCallChangeListener = O),
      (l.openVoipUiPopoutWindow = X),
      (l.closeVoipUiPopoutWindow = Y));
  },
  226,
);
