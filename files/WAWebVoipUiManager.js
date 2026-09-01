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
    "getErrorSafe",
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
      $,
      P = $ || ($ = o("react")),
      N = 3e3,
      M = 3e3,
      w = 5e3,
      A = !1,
      F = null,
      O = null,
      B = null,
      W = null,
      q = null,
      U = !1;
    function V() {
      if (!A) {
        var e;
        (r("WAWebCallCollection").on(
          (e = o("WAWebVoipEventConstants")).getChangeEvent(
            e.VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          X,
        ),
          r("WAWebCallCollection").on(
            e.getChangeEvent(e.VoipCallCollectionEvents.END_CALL_TONE),
            o("WAWebCallEndTone").playCallEndTone,
          ),
          (A = !0));
      }
    }
    function H() {
      var e;
      (r("WAWebCallCollection").off(
        (e = o("WAWebVoipEventConstants")).getChangeEvent(
          e.VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        X,
      ),
        r("WAWebCallCollection").off(
          e.getChangeEvent(e.VoipCallCollectionEvents.END_CALL_TONE),
          o("WAWebCallEndTone").playCallEndTone,
        ),
        (A = !1));
    }
    function G() {
      (q == null || q(), (q = null));
    }
    function z() {
      return U ? !1 : ((U = !0), !0);
    }
    function j() {
      (F == null || F(),
        (F = o("WAWebTimeSpentLoggingExternal").beginTsExternalEvent(
          o("WAWebWamEnumTsExternalEventSource").TS_EXTERNAL_EVENT_SOURCE.CALL,
        )));
    }
    function K(e, t) {
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
    function Q(e) {
      return e != null
        ? o("WAWebVoipWaCallEnums").CallState.getName(e)
        : "unknown";
    }
    function X() {
      var t = r("WAWebCallCollection").activeCall;
      if (t != null && !o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
        H();
        return;
      }
      if (t == null) {
        var n, a;
        (o("WAWebVoipQplHelpers").endVoipUiLifecycleQplSuccess(),
          q == null || q(),
          (q = null),
          (U = !1),
          O == null || O(),
          (O = null),
          B == null || B(),
          (B = null),
          F == null || F(),
          (F = null),
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
            H());
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
        le({ callEnded: !0, surveyInteracted: g, delayPiP: !C });
      } else {
        (W != null &&
          (window.clearTimeout(W),
          (W = null),
          r("WAWebCallCollection").pendingOutgoingCall == null &&
            r("WAWebPipController").closePiP(),
          H()),
          (r("WAWebCallCollection").lastActiveCall = t),
          t.isCallLink !== !0 &&
            r("WAWebCallCollection").pendingCallLink != null &&
            r("WAWebCallCollection").setPendingCallLink(null));
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
            V());
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
            V());
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
              : (B == null || B(),
                (B = K(t, function () {
                  ((B = null),
                    r("WAWebCallCollection").activeCall === t &&
                      o(
                        "WAWebVoipUiDocPipPortalContainer.react",
                      ).WAWebVoipUiDocPipEventEmitter.trigger(
                        "setDocPipProps",
                        { callLogMsg: t.msg },
                      ));
                }))),
            V());
          return;
        }
        if (t.offerReceivedWhileOffline) {
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] skipping PiP for offline-flushed call",
              ])),
          ),
            V());
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
            string: { initial_call_state: Q(L) },
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
                          ae();
                        }));
                });
            },
            k =
              R &&
              !o("WAWebVoipCallStateUtils").isCallActive(L) &&
              (o(
                "WAWebVoipGatingUtils",
              ).isWinHybridPlusIncomingPopoutEnabled() ||
                !o(
                  "WAWebMuteCollection",
                ).MuteCollection.getGlobalCallNotifications());
          if (R)
            if (o("WAWebVoipCallStateUtils").isCallActive(L))
              (q == null || q(), (q = null), j());
            else {
              var I;
              ((U = !1), oe(L));
              var T = t.peerJid,
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
              (q == null || q(),
                (q = o("WAWebPwaDocumentMetadataUtils").startDocumentTitleFlash(
                  P.toString(),
                )),
                O == null || O());
              var N = !1,
                M = function () {
                  var e =
                    o(
                      "WAWebVoipGatingUtils",
                    ).isWinHybridPlusIncomingPopoutEnabled() &&
                    o(
                      "WAWebVoipUiPopoutWindowPortalContainer.react",
                    ).getIsCallActiveInPopoutWindow();
                  N || e || !(k || U) || ((N = !0), E());
                },
                w = function () {
                  var e = t.getState();
                  if (o("WAWebVoipCallStateUtils").isCallConnecting(e)) {
                    (q == null || q(), (q = null), M());
                    return;
                  }
                  o("WAWebVoipCallStateUtils").isCallActive(e) &&
                    (q == null || q(),
                    (q = null),
                    j(),
                    M(),
                    O == null || O(),
                    (O = null));
                };
              (t.on(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                ),
                w,
              ),
                (O = function () {
                  t.off(
                    o("WAWebVoipEventConstants").getChangeEvent(
                      o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                    ),
                    w,
                  );
                }));
            }
          else j();
          k || E();
        } else {
          var A = Date.now();
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call changed, msg not ready, waiting for PiP",
              ])),
          );
          var G = function () {
            var e = Date.now() - A;
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
                G,
              ),
              X());
          };
          t.on(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
            ),
            G,
          );
        }
        V();
      }
    }
    var Y = 48,
      J = 16,
      Z = 4 / 3,
      ee = { left: 200, top: 200 },
      te = 640;
    function ne(e, t) {
      t === void 0 && (t = !1);
      var n = o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth(),
        r = t
          ? Math.max(
              te,
              o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH_WITH_SIDEBAR,
            )
          : te,
        a = Math.max(r, n),
        i = a / e,
        l = Math.round(i + Y + J);
      return {
        width: Math.max(a, o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH),
        height: Math.max(l, o("WAWebVoipWindowConstants").MIN_WINDOW_HEIGHT),
      };
    }
    function re(e) {
      (e.document.write(
        "<!DOCTYPE html><html><head></head><body></body></html>",
      ),
        e.document.close());
    }
    function oe(e) {
      !o("WAWebVoipGatingUtils").isWinHybridPlusIncomingPopoutEnabled() ||
        !o("WAWebVoipCallStateUtils").isCallIncoming(e) ||
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsCallActiveInPopoutWindow() ||
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsPopoutWindowOpening() ||
        o("WAWebReleaseToEventLoop")
          .releaseToEventLoop()
          .then(function () {
            ae();
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] failed to open Hybrid+ incoming ring pop-out",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-hybrid-plus-ring-popout-open-fail");
          });
    }
    function ae() {
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
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] openPopout skipped: popout already active or opening",
            ])),
        );
        return;
      }
      var t = r("WAWebCallCollection").activeCall,
        n = t == null ? void 0 : t.msg;
      if (!n) {
        o("WALogger").WARN(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] openPopout called without active call msg",
            ])),
        );
        return;
      }
      var a = ne(Z, (t == null ? void 0 : t.isGroup) === !0),
        i = a.height,
        l = a.width,
        s = babelHelpers.extends({ width: l, height: i }, ee);
      (o("WAWebFullscreenDetection").isFullscreen() &&
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
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
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] Popout opening guard fired, clearing stale state",
                ])),
            ),
            o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).setIsPopoutWindowOpening(!1));
        }, w),
        c = function () {
          (u != null && (window.clearTimeout(u), (u = null)),
            o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).setIsPopoutWindowOpening(!1));
        },
        d = !!((e = navigator.serviceWorker) != null && e.controller),
        m = o("WAWebVoipCallStateUtils").isCallIncoming(
          t == null ? void 0 : t.getState(),
        )
          ? "?incoming_ring=1"
          : "",
        p = d
          ? window.location.origin + "/call/popout" + m
          : window.location.hostname;
      (o("WALogger").LOG(
        v ||
          (v = babelHelpers.taggedTemplateLiteralLoose([
            "[voip] Opening popout window. SW enabled: ",
            ", url: ",
            "",
          ])),
        String(d),
        p,
      ),
        o("WAWebAppTracker").AppTracker.mark(
          o("WAWebAppTracker").AppTrackerType.VoipUiWindowCreate,
        ));
      var _ = null;
      try {
        _ = window.open(
          p,
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
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI manager: Popout window failed to open: ",
                "",
              ])),
            String(e),
          ));
      }
      if (!_) {
        (c(),
          o("WALogger").WARN(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI manager: Popout window failed to open",
              ])),
          ),
          o("WAWebModalManager").ModalManager.open(
            P.jsx(o("WAWebGuidePopup.react").GuidePopup, {
              messaging: o("WAWebGuidePopup.react").Messaging.POPUPS_BLOCKED,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            }),
          ));
        return;
      }
      var f = _;
      o("WAWebVoipQplHelpers").voipUiLifecycleQplAddPoint(
        o("WAWebVoipQplHelpers").VoipUiLifecycleQplPoint.POPOUT_OPENED,
      );
      var g = function () {
        o("WALogger").LOG(
          L ||
            (L = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] Popout document is ready, triggering React portal",
            ])),
        );
        try {
          o(
            "WAWebVoipUiPopoutWindowPortalContainer.react",
          ).WAWebVoipUiPopoutWindowEventEmitter.trigger(
            "setPopoutWindowProps",
            { callLogMsg: n, popoutWindow: f },
          );
        } finally {
          c();
        }
      };
      if (!d) {
        (o("WALogger").LOG(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] SW disabled/gated, using manual doc bootstrap",
            ])),
        ),
          re(f),
          g());
        return;
      }
      var $ = null,
        N = null,
        A = !1,
        F = function () {
          ($ != null && (window.clearTimeout($), ($ = null)),
            N != null && (window.clearInterval(N), (N = null)),
            window.removeEventListener("message", O),
            f.closed ? c() : A || ((A = !0), g()));
        },
        O = function (t) {
          if (
            !(t.origin !== window.location.origin || typeof t.data != "string")
          ) {
            if (t.data.startsWith("voipPopoutReady")) {
              var e = "<unreadable>";
              try {
                e = f.location.href;
              } catch (t) {
                e = "<cross-origin: " + String(t) + ">";
              }
              var n = String(t.source === f),
                r = String(f.closed);
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
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
            t.source === f &&
              t.data === "voipPopoutReady" &&
              (o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] Received voipPopoutReady from Service Worker",
                  ])),
              ),
              F());
          }
        };
      (window.addEventListener("message", O),
        ($ = window.setTimeout(function () {
          if (
            (o("WALogger").WARN(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] SW ready timeout, firing fallback",
                ])),
            ),
            !f.closed)
          ) {
            var e = null;
            try {
              e = f.location.href;
            } catch (e) {}
            (e === "about:blank" || e === "") &&
              (o("WALogger").LOG(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] timeout fallback: bootstrap about:blank doc",
                  ])),
              ),
              re(f));
          }
          F();
        }, M)),
        (N = window.setInterval(function () {
          f.closed &&
            (o("WALogger").LOG(
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] Popout window closed before loading finished",
                ])),
            ),
            F());
        }, 500)));
    }
    function ie(e) {
      o(
        "WAWebVoipUiPopoutWindowPortalContainer.react",
      ).WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", e);
    }
    function le(e) {
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
          : N;
        W = window.setTimeout(function () {
          ((W = null), r("WAWebPipController").closePiP(), H());
        }, s);
      } else r("WAWebPipController").closePiP();
      (ie({ callEnded: t, surveyInteracted: l }),
        o(
          "WAWebVoipUiDocPipPortalContainer.react",
        ).WAWebVoipUiDocPipEventEmitter.trigger("closeDocPip", {
          surveyInteracted: l,
        }));
    }
    ((l.setupVoipActiveCallChangeListener = V),
      (l.stopIncomingCallTitleFlash = G),
      (l.markIncomingMiniPlayerDismissed = z),
      (l.openVoipUiPopoutWindow = ae),
      (l.closeVoipUiPopoutWindow = ie),
      (l.closeAllVoipWindows = le));
  },
  226,
);
