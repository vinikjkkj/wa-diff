__d(
  "WAWebVoipUiManager",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAppTracker",
    "WAWebCallCollection",
    "WAWebCallEndTone",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebFullscreenDetection",
    "WAWebGuidePopup.react",
    "WAWebModalManager",
    "WAWebMuteCollection",
    "WAWebMuteGetters",
    "WAWebNoop",
    "WAWebPipController",
    "WAWebPwaDocumentMetadataUtils",
    "WAWebReleaseToEventLoop",
    "WAWebTimeSpentLoggingExternal",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallStateUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipQplHelpers",
    "WAWebVoipUiDocPipPortalContainer.react",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
    "WAWebVoipWaCallEnums",
    "WAWebVoipWindowConstants",
    "WAWebWamEnumTsExternalEventSource",
    "fbs",
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
      D,
      x,
      $ = x || (x = o("react")),
      P = 3e3,
      N = 3e3,
      M = 5e3,
      w = !1,
      A = null,
      F = null,
      O = null,
      B = null,
      W = null;
    function q() {
      if (!w) {
        var e;
        (r("WAWebCallCollection").on(
          (e = o("WAWebVoipEventConstants")).getChangeEvent(
            e.VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          z,
        ),
          r("WAWebCallCollection").on(
            e.getChangeEvent(e.VoipCallCollectionEvents.END_CALL_TONE),
            o("WAWebCallEndTone").playCallEndTone,
          ),
          (w = !0));
      }
    }
    function U() {
      var e;
      (r("WAWebCallCollection").off(
        (e = o("WAWebVoipEventConstants")).getChangeEvent(
          e.VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        z,
      ),
        r("WAWebCallCollection").off(
          e.getChangeEvent(e.VoipCallCollectionEvents.END_CALL_TONE),
          o("WAWebCallEndTone").playCallEndTone,
        ),
        (w = !1));
    }
    function V() {
      (A == null || A(),
        (A = o("WAWebTimeSpentLoggingExternal").beginTsExternalEvent(
          o("WAWebWamEnumTsExternalEventSource").TS_EXTERNAL_EVENT_SOURCE.CALL,
        )));
    }
    function H(e, t) {
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
    function G(e) {
      return e != null
        ? o("WAWebVoipWaCallEnums").CallState.getName(e)
        : "unknown";
    }
    function z() {
      var t = r("WAWebCallCollection").activeCall;
      if (t != null && !o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
        U();
        return;
      }
      if (t == null) {
        var n, a;
        (o("WAWebVoipQplHelpers").endVoipUiLifecycleQplSuccess(),
          W == null || W(),
          (W = null),
          F == null || F(),
          (F = null),
          O == null || O(),
          (O = null),
          A == null || A(),
          (A = null),
          r("WAWebCallCollection").setPendingCallLink(null),
          r("WAWebCallCollection").setPendingOutgoingCall(null));
        var i = r("WAWebCallCollection").lastActiveCall,
          l = (i == null ? void 0 : i.shouldShowPostCallSurvey) === !0;
        if (l) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call ended, keeping windows for survey",
              ])),
          ),
            U());
          return;
        }
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Active call ended, closing windows",
            ])),
        );
        var g =
            (n =
              (a = r("WAWebCallCollection").lastActiveCall) == null
                ? void 0
                : a.postCallSurveyInteracted) != null
              ? n
              : !1,
          h =
            (i == null ? void 0 : i.msg) != null
              ? o("WAWebFrontendMsgGetters").getChat(i.msg)
              : null,
          y =
            h != null
              ? o("WAWebMuteCollection").MuteCollection.get(h.id)
              : null,
          C =
            i != null &&
            i.isGroup === !0 &&
            i.wasEverConnected !== !0 &&
            i.outgoing !== !0 &&
            y != null &&
            o("WAWebMuteGetters").getIsCallMuted(y);
        ne({ callEnded: !0, surveyInteracted: g, delayPiP: !C });
      } else {
        (B != null &&
          (window.clearTimeout(B),
          (B = null),
          r("WAWebCallCollection").pendingOutgoingCall == null &&
            r("WAWebPipController").closePiP(),
          U()),
          (r("WAWebCallCollection").lastActiveCall = t));
        var b = t.isInCallLinkPreview();
        if (b) {
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call link preview, opening PiP (no msg)",
              ])),
          ),
            r("WAWebPipController").openVoipUiPiPForCallLink(),
            o("WAWebVoipActivityTracker").trackUiActivity(
              o("WAWebVoipActivityTracker").VoipUiActivity.VOIP_WINDOW_LAUNCHED,
            ),
            q());
          return;
        }
        var v = t.isInCallLinkLobby();
        if (v) {
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call link lobby, keeping PiP open",
              ])),
          ),
            r("WAWebPipController").openVoipUiPiPForCallLink(),
            q());
          return;
        }
        if (t.isCallLink && t.callLinkState != null) {
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call link in active state, keeping existing PiP",
              ])),
          ),
            o("WAWebVoipGatingUtils").isGuestViewer()
              ? o(
                  "WAWebVoipUiDocPipPortalContainer.react",
                ).WAWebVoipUiDocPipEventEmitter.trigger("setDocPipProps", {
                  callLogMsg: null,
                  isArmed: !0,
                })
              : (O == null || O(),
                (O = H(t, function () {
                  ((O = null),
                    r("WAWebCallCollection").activeCall === t &&
                      o(
                        "WAWebVoipUiDocPipPortalContainer.react",
                      ).WAWebVoipUiDocPipEventEmitter.trigger(
                        "setDocPipProps",
                        { callLogMsg: t.msg },
                      ));
                }))),
            q());
          return;
        }
        if (t.offerReceivedWhileOffline) {
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] skipping PiP for offline-flushed call",
              ])),
          ),
            q());
          return;
        }
        if (t.msg) {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Active call changed, opening PiP window",
              ])),
          );
          var S = t.msg,
            R = !t.outgoing,
            L = t.getState();
          o("WAWebVoipQplHelpers").startVoipUiLifecycleQpl({
            bool: { is_incoming: R },
            string: { initial_call_state: G(L) },
          });
          var E = function () {
              o("WAWebReleaseToEventLoop")
                .releaseToEventLoop()
                .then(function () {
                  var e;
                  ((e = o("WAWebVoipActivityTracker")).trackUiActivity(
                    e.VoipUiActivity.VOIP_WINDOW_MOUNTING,
                  ),
                    r("WAWebPipController").openVoipUiPiP(S),
                    e.trackUiActivity(e.VoipUiActivity.VOIP_WINDOW_LAUNCHED),
                    o("WAWebVoipQplHelpers").voipUiLifecycleQplAddPoint(
                      o("WAWebVoipQplHelpers").VoipUiLifecycleQplPoint
                        .PIP_OPENED,
                    ),
                    r("WAWebCallCollection").setPendingOutgoingCall(null),
                    o(
                      "WAWebVoipUiDocPipPortalContainer.react",
                    ).WAWebVoipUiDocPipEventEmitter.trigger("setDocPipProps", {
                      callLogMsg: S,
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
                          ee();
                        }));
                });
            },
            k =
              R &&
              !o("WAWebVoipCallStateUtils").isCallActive(L) &&
              !o(
                "WAWebMuteCollection",
              ).MuteCollection.getGlobalCallNotifications();
          if (R)
            if (o("WAWebVoipCallStateUtils").isCallActive(L))
              (W == null || W(), (W = null), V());
            else {
              var I,
                T = t.peerJid,
                D =
                  T != null
                    ? o("WAWebContactCollection").ContactCollection.get(T)
                    : null,
                x =
                  D != null
                    ? o("WAWebFrontendContactGetters").getDisplayName(D)
                    : "",
                $ = (I = t.isVideo) != null ? I : !1,
                P = $
                  ? r("fbs")._(
                      /*BTDS*/ "Incoming video call from {caller_name}",
                      [r("fbs")._param("caller_name", x)],
                    )
                  : r("fbs")._(
                      /*BTDS*/ "Incoming voice call from {caller_name}",
                      [r("fbs")._param("caller_name", x)],
                    );
              (W == null || W(),
                (W = o("WAWebPwaDocumentMetadataUtils").startDocumentTitleFlash(
                  P.toString(),
                )),
                F == null || F());
              var N = function () {
                o("WAWebVoipCallStateUtils").isCallActive(t.getState()) &&
                  (W == null || W(),
                  (W = null),
                  V(),
                  k && E(),
                  F == null || F(),
                  (F = null));
              };
              (t.on(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                ),
                N,
              ),
                (F = function () {
                  t.off(
                    o("WAWebVoipEventConstants").getChangeEvent(
                      o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                    ),
                    N,
                  );
                }));
            }
          else V();
          k || E();
        } else {
          var M = Date.now();
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call changed, msg not ready, waiting for PiP",
              ])),
          );
          var w = function () {
            var e = Date.now() - M;
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
                w,
              ),
              z());
          };
          t.on(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
            ),
            w,
          );
        }
        q();
      }
    }
    var j = 48,
      K = 16,
      Q = 4 / 3,
      X = { left: 200, top: 200 },
      Y = 640;
    function J(e, t) {
      t === void 0 && (t = !1);
      var n = o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth(),
        r = t
          ? Math.max(
              Y,
              o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH_WITH_SIDEBAR,
            )
          : Y,
        a = Math.max(r, n),
        i = a / e,
        l = Math.round(i + j + K);
      return {
        width: Math.max(a, o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH),
        height: Math.max(l, o("WAWebVoipWindowConstants").MIN_WINDOW_HEIGHT),
      };
    }
    function Z(e) {
      (e.document.write(
        "<!DOCTYPE html><html><head></head><body></body></html>",
      ),
        e.document.close());
    }
    function ee() {
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
      var a = J(Q, (t == null ? void 0 : t.isGroup) === !0),
        i = a.height,
        l = a.width,
        s = babelHelpers.extends({ width: l, height: i }, X);
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
      var u = window.setTimeout(function () {
          ((u = null),
            o("WALogger").WARN(
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] Popout opening guard fired, clearing stale state",
                ])),
            ),
            o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).setIsPopoutWindowOpening(!1));
        }, M),
        c = function () {
          (u != null && (window.clearTimeout(u), (u = null)),
            o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).setIsPopoutWindowOpening(!1));
        },
        d = !!((e = navigator.serviceWorker) != null && e.controller),
        m = d
          ? window.location.origin + "/call/popout"
          : window.location.hostname;
      (o("WALogger").LOG(
        b ||
          (b = babelHelpers.taggedTemplateLiteralLoose([
            "[voip] Opening popout window. SW enabled: ",
            ", url: ",
            "",
          ])),
        String(d),
        m,
      ),
        o("WAWebAppTracker").AppTracker.mark(
          o("WAWebAppTracker").AppTrackerType.VoipUiWindowCreate,
        ));
      var p = null;
      try {
        p = window.open(
          m,
          "",
          Object.keys(s)
            .map(function (e) {
              return e + "=" + s[e];
            })
            .join(","),
        );
      } catch (e) {
        (c(),
          o("WALogger").WARN(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI manager: Popout window failed to open: ",
                "",
              ])),
            String(e),
          ));
      }
      if (!p) {
        (c(),
          o("WALogger").WARN(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI manager: Popout window failed to open",
              ])),
          ),
          o("WAWebModalManager").ModalManager.open(
            $.jsx(o("WAWebGuidePopup.react").GuidePopup, {
              messaging: o("WAWebGuidePopup.react").Messaging.POPUPS_BLOCKED,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            }),
          ));
        return;
      }
      var _ = p;
      o("WAWebVoipQplHelpers").voipUiLifecycleQplAddPoint(
        o("WAWebVoipQplHelpers").VoipUiLifecycleQplPoint.POPOUT_OPENED,
      );
      var f = function () {
        o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] Popout document is ready, triggering React portal",
            ])),
        );
        try {
          o(
            "WAWebVoipUiPopoutWindowPortalContainer.react",
          ).WAWebVoipUiPopoutWindowEventEmitter.trigger(
            "setPopoutWindowProps",
            { callLogMsg: n, popoutWindow: _ },
          );
        } finally {
          c();
        }
      };
      if (!d) {
        (o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] SW disabled/gated, using manual doc bootstrap",
            ])),
        ),
          Z(_),
          f());
        return;
      }
      var x = null,
        P = null,
        w = !1,
        A = function () {
          (x != null && (window.clearTimeout(x), (x = null)),
            P != null && (window.clearInterval(P), (P = null)),
            window.removeEventListener("message", F),
            _.closed ? c() : w || ((w = !0), f()));
        },
        F = function (t) {
          if (
            !(t.origin !== window.location.origin || typeof t.data != "string")
          ) {
            if (t.data.startsWith("voipPopoutReady")) {
              var e = "<unreadable>";
              try {
                e = _.location.href;
              } catch (t) {
                e = "<cross-origin: " + String(t) + ">";
              }
              var n = String(t.source === _),
                r = String(_.closed);
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
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
            t.source === _ &&
              t.data === "voipPopoutReady" &&
              (o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] Received voipPopoutReady from Service Worker",
                  ])),
              ),
              A());
          }
        };
      (window.addEventListener("message", F),
        (x = window.setTimeout(function () {
          if (
            (o("WALogger").WARN(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] SW ready timeout, firing fallback",
                ])),
            ),
            !_.closed)
          ) {
            var e = null;
            try {
              e = _.location.href;
            } catch (e) {}
            (e === "about:blank" || e === "") &&
              (o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] timeout fallback: bootstrap about:blank doc",
                  ])),
              ),
              Z(_));
          }
          A();
        }, N)),
        (P = window.setInterval(function () {
          _.closed &&
            (o("WALogger").LOG(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] Popout window closed before loading finished",
                ])),
            ),
            A());
        }, 500)));
    }
    function te(e) {
      o(
        "WAWebVoipUiPopoutWindowPortalContainer.react",
      ).WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", e);
    }
    function ne(e) {
      var t = e.callEnded,
        n = e.delayPiP,
        a = n === void 0 ? !1 : n,
        i = e.surveyInteracted,
        l = i === void 0 ? !1 : i;
      if (a) {
        var s = o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsCallActiveInPopoutWindow()
          ? 0
          : P;
        B = window.setTimeout(function () {
          ((B = null), r("WAWebPipController").closePiP(), U());
        }, s);
      } else r("WAWebPipController").closePiP();
      (te({ callEnded: t, surveyInteracted: l }),
        o(
          "WAWebVoipUiDocPipPortalContainer.react",
        ).WAWebVoipUiDocPipEventEmitter.trigger("closeDocPip", {
          surveyInteracted: l,
        }));
    }
    ((l.setupVoipActiveCallChangeListener = q),
      (l.openVoipUiPopoutWindow = ee),
      (l.closeVoipUiPopoutWindow = te),
      (l.closeAllVoipWindows = ne));
  },
  226,
);
