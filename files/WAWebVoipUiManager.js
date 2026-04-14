__d(
  "WAWebVoipUiManager",
  [
    "WACommonTaskScheduler",
    "WALogger",
    "WAPromiseDelays",
    "WAWebABProps",
    "WAWebCallCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebFullscreenDetection",
    "WAWebGuidePopup.react",
    "WAWebModalManager",
    "WAWebPipController",
    "WAWebPwaDocumentMetadataUtils",
    "WAWebTimeSpentLoggingExternal",
    "WAWebVoipActivityTracker",
    "WAWebVoipEventConstants",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipWaCallEnums",
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
      I = k || (k = o("react")),
      T = 3e3,
      D = 3e3,
      x = !1,
      $ = null,
      P = null,
      N = null,
      M = null;
    function w() {
      x ||
        (r("WAWebCallCollection").on(
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          O,
        ),
        (x = !0));
    }
    function A() {
      (r("WAWebCallCollection").off(
        o("WAWebVoipEventConstants").getChangeEvent(
          o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        O,
      ),
        (x = !1));
    }
    function F() {
      ($ == null || $(),
        ($ = o("WAWebTimeSpentLoggingExternal").beginTsExternalEvent(
          o("WAWebWamEnumTsExternalEventSource").TS_EXTERNAL_EVENT_SOURCE.CALL,
        )));
    }
    function O() {
      var t = r("WAWebCallCollection").activeCall;
      if (t == null) {
        var n, a;
        (M == null || M(),
          (M = null),
          P == null || P(),
          (P = null),
          $ == null || $(),
          ($ = null),
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
            A());
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
            : T,
          h =
            (n =
              (a = r("WAWebCallCollection").lastActiveCall) == null
                ? void 0
                : a.postCallSurveyInteracted) != null
              ? n
              : !1;
        ((N = window.setTimeout(function () {
          ((N = null), r("WAWebPipController").closePiP(), A());
        }, g)),
          z({ callEnded: !0, surveyInteracted: h }),
          o(
            "WAWebVoipUiDocPipPortalContainer.react",
          ).WAWebVoipUiDocPipEventEmitter.trigger("closeDocPip", {
            surveyInteracted: h,
          }));
      } else {
        (N != null &&
          (window.clearTimeout(N),
          (N = null),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Cancelled pending PiP close due to new call starting",
              ])),
          ),
          r("WAWebPipController").closePiP(),
          A()),
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
            w());
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
            w());
          return;
        }
        if (t.isCallLink) {
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call link in active state, keeping existing PiP",
              ])),
          ),
            w());
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
            if (S === o("WAWebVoipWaCallEnums").CallState.CallActive)
              (M == null || M(), (M = null), F());
            else {
              var R,
                L = t.peerJid,
                E =
                  L != null
                    ? o("WAWebContactCollection").ContactCollection.get(L)
                    : null,
                k =
                  E != null
                    ? o("WAWebFrontendContactGetters").getFormattedShortName(E)
                    : "",
                I = (R = t.isVideo) != null ? R : !1,
                D = I
                  ? r("fbs")._(
                      /*BTDS*/ "Incoming video call from {caller_name}",
                      [r("fbs")._param("caller_name", k)],
                    )
                  : r("fbs")._(
                      /*BTDS*/ "Incoming voice call from {caller_name}",
                      [r("fbs")._param("caller_name", k)],
                    );
              (M == null || M(),
                (M = o("WAWebPwaDocumentMetadataUtils").startDocumentTitleFlash(
                  D.toString(),
                )),
                P == null || P());
              var x = function () {
                t.getState() ===
                  o("WAWebVoipWaCallEnums").CallState.CallActive &&
                  (M == null || M(),
                  (M = null),
                  F(),
                  P == null || P(),
                  (P = null));
              };
              (t.on(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                ),
                x,
              ),
                (P = function () {
                  t.off(
                    o("WAWebVoipEventConstants").getChangeEvent(
                      o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                    ),
                    x,
                  );
                }));
            }
          else F();
          (o("WAWebABProps").getABPropConfigValue("wmi_worker_scheduler_web")
            ? r("WACommonTaskScheduler").yield()
            : o("WAPromiseDelays").releaseToEventLoop()
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
                o("WAPromiseDelays")
                  .releaseToEventLoop()
                  .then(function () {
                    G();
                  }));
          });
        } else {
          var B = Date.now();
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call changed, msg not ready, waiting for PiP",
              ])),
          );
          var W = function () {
            var e = Date.now() - B;
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
                W,
              ),
              O());
          };
          t.on(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
            ),
            W,
          );
        }
        w();
      }
    }
    var B = 48,
      W = 16,
      q = 4 / 3,
      U = { left: 200, top: 200 },
      V = 640;
    function H(e, t) {
      t === void 0 && (t = !1);
      var n = o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth(),
        r = t
          ? Math.max(
              V,
              o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH_WITH_SIDEBAR,
            )
          : V,
        a = Math.max(r, n),
        i = a / e,
        l = Math.round(i + B + W);
      return {
        width: Math.max(a, o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH),
        height: Math.max(l, o("WAWebVoipWindowConstants").MIN_WINDOW_HEIGHT),
      };
    }
    function G() {
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
      var a = H(q, (t == null ? void 0 : t.isGroup) === !0),
        i = a.height,
        l = a.width,
        s = babelHelpers.extends({ width: l, height: i }, U);
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
            I.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
          d.document.write(
            "<!DOCTYPE html><html><head></head><body></body></html>",
          ),
          d.document.close(),
          m());
        return;
      }
      var p = null,
        _ = null,
        f = !1,
        k = function () {
          (p != null && (window.clearTimeout(p), (p = null)),
            _ != null && (window.clearInterval(_), (_ = null)),
            window.removeEventListener("message", T),
            d.closed
              ? o(
                  "WAWebVoipUiPopoutWindowPortalContainer.react",
                ).setIsPopoutWindowOpening(!1)
              : f || ((f = !0), m()));
        },
        T = function (t) {
          t.origin !== window.location.origin ||
            typeof t.data != "string" ||
            (t.source === d &&
              t.data === "voipPopoutReady" &&
              (o("WALogger").LOG(
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] Received voipPopoutReady from Service Worker",
                  ])),
              ),
              k()));
        };
      (window.addEventListener("message", T),
        (p = window.setTimeout(function () {
          (o("WALogger").WARN(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] SW ready timeout, firing fallback",
              ])),
          ),
            k());
        }, D)),
        (_ = window.setInterval(function () {
          d.closed &&
            (o("WALogger").LOG(
              E ||
                (E = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] Popout window closed before loading finished",
                ])),
            ),
            k());
        }, 500)));
    }
    function z(e) {
      o(
        "WAWebVoipUiPopoutWindowPortalContainer.react",
      ).WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", e);
    }
    ((l.setupVoipActiveCallChangeListener = w),
      (l.openVoipUiPopoutWindow = G),
      (l.closeVoipUiPopoutWindow = z));
  },
  226,
);
