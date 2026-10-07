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
    "WAWebUA",
    "WAWebVoipActivityTracker",
    "WAWebVoipCallEmoji",
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
      P,
      N = P || (P = o("react")),
      M = 3e3,
      w = 3e3,
      A = 5e3,
      F = !1,
      O = null,
      B = null,
      W = null,
      q = null,
      U = null,
      V = !1;
    function H() {
      if (!F) {
        var e;
        (r("WAWebCallCollection").on(
          (e = o("WAWebVoipEventConstants")).getChangeEvent(
            e.VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          J,
        ),
          r("WAWebCallCollection").on(
            e.getChangeEvent(e.VoipCallCollectionEvents.END_CALL_TONE),
            o("WAWebCallEndTone").playCallEndTone,
          ),
          (F = !0));
      }
    }
    function G() {
      var e;
      (r("WAWebCallCollection").off(
        (e = o("WAWebVoipEventConstants")).getChangeEvent(
          e.VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        J,
      ),
        r("WAWebCallCollection").off(
          e.getChangeEvent(e.VoipCallCollectionEvents.END_CALL_TONE),
          o("WAWebCallEndTone").playCallEndTone,
        ),
        (F = !1));
    }
    function z() {
      (U == null || U(), (U = null));
    }
    function j(e, t) {
      return o("WAWebUA").UA.hasEmoji &&
        o("WAWebVoipGatingUtils").isIncomingCallTabIndicatorEnabled()
        ? o("WAWebVoipCallEmoji").getCallEmoji(t, !1) + " " + e
        : e;
    }
    function K() {
      return V ? !1 : ((V = !0), !0);
    }
    function Q() {
      (O == null || O(),
        (O = o("WAWebTimeSpentLoggingExternal").beginTsExternalEvent(
          o("WAWebWamEnumTsExternalEventSource").TS_EXTERNAL_EVENT_SOURCE.CALL,
        )));
    }
    function X(e, t) {
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
    function Y(e) {
      return e != null
        ? o("WAWebVoipWaCallEnums").CallState.getName(e)
        : "unknown";
    }
    function J() {
      var t = r("WAWebCallCollection").activeCall;
      if (t != null && !o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
        G();
        return;
      }
      if (t == null) {
        var n, a;
        (o("WAWebVoipQplHelpers").endVoipUiLifecycleQplSuccess(),
          U == null || U(),
          (U = null),
          (V = !1),
          B == null || B(),
          (B = null),
          W == null || W(),
          (W = null),
          O == null || O(),
          (O = null),
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
            G());
          return;
        }
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: Active call ended, closing windows",
            ])),
        );
        var h =
            (n =
              (a = r("WAWebCallCollection").lastActiveCall) == null
                ? void 0
                : a.postCallSurveyInteracted) != null
              ? n
              : !1,
          y =
            (i == null ? void 0 : i.msg) != null
              ? o("WAWebFrontendMsgGetters").getChat(i.msg)
              : null,
          C =
            y != null
              ? o("WAWebMuteCollection").MuteCollection.get(y.id)
              : null,
          b =
            i != null &&
            i.isGroup === !0 &&
            i.wasEverConnected !== !0 &&
            i.outgoing !== !0 &&
            C != null &&
            o("WAWebMuteGetters").getIsCallMuted(C);
        ue({ callEnded: !0, surveyInteracted: h, delayPiP: !b });
      } else {
        (q != null &&
          (window.clearTimeout(q),
          (q = null),
          r("WAWebCallCollection").pendingOutgoingCall == null &&
            r("WAWebPipController").closePiP(),
          G()),
          (r("WAWebCallCollection").lastActiveCall = t),
          t.isCallLink !== !0 &&
            r("WAWebCallCollection").pendingCallLink != null &&
            r("WAWebCallCollection").setPendingCallLink(null));
        var v = t.isInCallLinkPreview();
        if (v) {
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
            H());
          return;
        }
        var S = t.isInCallLinkLobby();
        if (S) {
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call link lobby, keeping PiP open",
              ])),
          ),
            r("WAWebPipController").openVoipUiPiPForCallLink(),
            H());
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
              : (W == null || W(),
                (W = X(t, function () {
                  ((W = null),
                    r("WAWebCallCollection").activeCall === t &&
                      o(
                        "WAWebVoipUiDocPipPortalContainer.react",
                      ).WAWebVoipUiDocPipEventEmitter.trigger(
                        "setDocPipProps",
                        { callLogMsg: t.msg },
                      ));
                }))),
            H());
          return;
        }
        if (t.offerReceivedWhileOffline) {
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] skipping PiP for offline-flushed call",
              ])),
          ),
            H());
          return;
        }
        if (t.msg) {
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: Active call changed, opening PiP window",
              ])),
          );
          var R = t.msg,
            L = !t.outgoing,
            E = t.getState();
          o("WAWebVoipQplHelpers").startVoipUiLifecycleQpl({
            bool: { is_incoming: L },
            string: { initial_call_state: Y(E) },
          });
          var k = function () {
              o("WAWebReleaseToEventLoop")
                .releaseToEventLoop()
                .then(function () {
                  var e;
                  if (
                    ((e = o("WAWebVoipActivityTracker")).trackUiActivity(
                      e.VoipUiActivity.VOIP_WINDOW_MOUNTING,
                    ),
                    r("WAWebPipController").openVoipUiPiP(R),
                    e.trackUiActivity(e.VoipUiActivity.VOIP_WINDOW_LAUNCHED),
                    o("WAWebVoipQplHelpers").voipUiLifecycleQplAddPoint(
                      o("WAWebVoipQplHelpers").VoipUiLifecycleQplPoint
                        .PIP_OPENED,
                    ),
                    r("WAWebCallCollection").setPendingOutgoingCall(null),
                    o(
                      "WAWebVoipUiDocPipPortalContainer.react",
                    ).WAWebVoipUiDocPipEventEmitter.trigger("setDocPipProps", {
                      callLogMsg: R,
                    }),
                    t.outgoing === !0 &&
                      !o(
                        "WAWebVoipUiPopoutWindowPortalContainer.react",
                      ).getIsCallActiveInPopoutWindow() &&
                      (o(
                        "WAWebVoipGatingUtils",
                      ).isWinHybridPlusOutgoingPopoutEnabled() ||
                        (t.isVideo === !0 &&
                          o("WAWebABProps").getABPropConfigValue(
                            "web_calling_auto_popout_video",
                          ))))
                  ) {
                    o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "[voip][hybrid+] outgoing auto-popout: hybridPlusGate=",
                          " isVideo=",
                          "",
                        ])),
                      String(
                        o(
                          "WAWebVoipGatingUtils",
                        ).isWinHybridPlusOutgoingPopoutEnabled(),
                      ),
                      String(t.isVideo === !0),
                    );
                    var n = o(
                      "WAWebVoipGatingUtils",
                    ).isWinHybridPlusOutgoingPopoutEnabled();
                    o("WAWebReleaseToEventLoop")
                      .releaseToEventLoop()
                      .then(function () {
                        le({ centered: n });
                      });
                  }
                });
            },
            I =
              L &&
              !o("WAWebVoipCallStateUtils").isCallActive(E) &&
              (o(
                "WAWebVoipGatingUtils",
              ).isWinHybridPlusIncomingPopoutEnabled() ||
                !o(
                  "WAWebMuteCollection",
                ).MuteCollection.getGlobalCallNotifications());
          if (L)
            if (o("WAWebVoipCallStateUtils").isCallActive(E))
              (U == null || U(), (U = null), Q());
            else {
              var T;
              ((V = !1), ie(E));
              var D = t.peerJid,
                x =
                  D != null
                    ? o("WAWebContactCollection").ContactCollection.get(D)
                    : null,
                $ =
                  x != null
                    ? o("WAWebFrontendContactGetters").getDisplayName(x)
                    : "",
                P = (T = t.isVideo) != null ? T : !1,
                N = P
                  ? r("fbs")._(
                      /*BTDS*/ "Incoming video call from {caller_name}",
                      [r("fbs")._param("caller_name", $)],
                    )
                  : r("fbs")._(
                      /*BTDS*/ "Incoming voice call from {caller_name}",
                      [r("fbs")._param("caller_name", $)],
                    );
              (U == null || U(),
                (U = o("WAWebPwaDocumentMetadataUtils").startDocumentTitleFlash(
                  j(N.toString(), P),
                )),
                B == null || B());
              var M = !1,
                w = function () {
                  var e =
                    o(
                      "WAWebVoipGatingUtils",
                    ).isWinHybridPlusIncomingPopoutEnabled() &&
                    o(
                      "WAWebVoipUiPopoutWindowPortalContainer.react",
                    ).getIsCallActiveInPopoutWindow();
                  M || e || !(I || V) || ((M = !0), k());
                },
                A = function () {
                  var e = t.getState();
                  if (o("WAWebVoipCallStateUtils").isCallConnecting(e)) {
                    (U == null || U(), (U = null), w());
                    return;
                  }
                  o("WAWebVoipCallStateUtils").isCallActive(e) &&
                    (U == null || U(),
                    (U = null),
                    Q(),
                    w(),
                    B == null || B(),
                    (B = null));
                };
              (t.on(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                ),
                A,
              ),
                (B = function () {
                  t.off(
                    o("WAWebVoipEventConstants").getChangeEvent(
                      o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                    ),
                    A,
                  );
                }));
            }
          else Q();
          I || k();
        } else {
          var F = Date.now();
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call changed, msg not ready, waiting for PiP",
              ])),
          );
          var z = function () {
            var e = Date.now() - F;
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] msg became ready after ",
                  "ms, proceeding to open PiP",
                ])),
              e,
            ),
              t.off(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
                ),
                z,
              ),
              J());
          };
          t.on(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
            ),
            z,
          );
        }
        H();
      }
    }
    var Z = 48,
      ee = 16,
      te = 4 / 3,
      ne = { left: 200, top: 200 },
      re = 640;
    function oe(e, t) {
      t === void 0 && (t = !1);
      var n = o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth(),
        r = t
          ? Math.max(
              re,
              o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH_WITH_SIDEBAR,
            )
          : re,
        a = Math.max(r, n),
        i = a / e,
        l = Math.round(i + Z + ee);
      return {
        width: Math.max(a, o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH),
        height: Math.max(l, o("WAWebVoipWindowConstants").MIN_WINDOW_HEIGHT),
      };
    }
    function ae(e) {
      (e.document.write(
        "<!DOCTYPE html><html><head></head><body></body></html>",
      ),
        e.document.close());
    }
    function ie(e) {
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
            le();
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] failed to open Hybrid+ incoming ring pop-out",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-hybrid-plus-ring-popout-open-fail");
          });
    }
    function le(e) {
      var t;
      if (
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsCallActiveInPopoutWindow() ||
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsPopoutWindowOpening()
      ) {
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] openPopout skipped: popout already active or opening",
            ])),
        );
        return;
      }
      var n = r("WAWebCallCollection").activeCall,
        a = n == null ? void 0 : n.msg;
      if (!a) {
        o("WALogger").WARN(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] openPopout called without active call msg",
            ])),
        );
        return;
      }
      var i = oe(te, (n == null ? void 0 : n.isGroup) === !0),
        l = i.height,
        s = i.width,
        u = babelHelpers.extends({ width: s, height: l }, ne);
      (o("WAWebFullscreenDetection").isFullscreen() &&
        o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] openPopout in fullscreen \u2014 may open tab not popup",
            ])),
        ),
        (window.name = o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).MAIN_WINDOW_NAME),
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).setIsPopoutWindowOpening(!0));
      var c = window.setTimeout(function () {
          ((c = null),
            o("WALogger").WARN(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] Popout opening guard fired, clearing stale state",
                ])),
            ),
            o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).setIsPopoutWindowOpening(!1));
        }, A),
        d = function () {
          (c != null && (window.clearTimeout(c), (c = null)),
            o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).setIsPopoutWindowOpening(!1));
        },
        m = !!((t = navigator.serviceWorker) != null && t.controller),
        p = "";
      o("WAWebVoipCallStateUtils").isCallIncoming(
        n == null ? void 0 : n.getState(),
      )
        ? (p = "?incoming_ring=1")
        : (e == null ? void 0 : e.centered) === !0 && (p = "?center=1");
      var _ = m
        ? window.location.origin + "/call/popout" + p
        : window.location.hostname;
      (o("WALogger").LOG(
        S ||
          (S = babelHelpers.taggedTemplateLiteralLoose([
            "[voip] Opening popout window. SW enabled: ",
            ", popoutQuery: ",
            ", url: ",
            "",
          ])),
        String(m),
        p || "(none)",
        _,
      ),
        o("WAWebAppTracker").AppTracker.mark(
          o("WAWebAppTracker").AppTrackerType.VoipUiWindowCreate,
        ));
      var f = null;
      try {
        f = window.open(
          _,
          "",
          Object.keys(u)
            .map(function (e) {
              return e + "=" + u[e];
            })
            .join(","),
        );
      } catch (e) {
        (d(),
          o("WALogger").WARN(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI manager: Popout window failed to open: ",
                "",
              ])),
            String(e),
          ));
      }
      if (!f) {
        (d(),
          o("WALogger").WARN(
            L ||
              (L = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI manager: Popout window failed to open",
              ])),
          ),
          o("WAWebModalManager").ModalManager.open(
            N.jsx(o("WAWebGuidePopup.react").GuidePopup, {
              messaging: o("WAWebGuidePopup.react").Messaging.POPUPS_BLOCKED,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            }),
          ));
        return;
      }
      var g = f;
      o("WAWebVoipQplHelpers").voipUiLifecycleQplAddPoint(
        o("WAWebVoipQplHelpers").VoipUiLifecycleQplPoint.POPOUT_OPENED,
      );
      var h = function () {
        o("WALogger").LOG(
          E ||
            (E = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] Popout document is ready, triggering React portal",
            ])),
        );
        try {
          o(
            "WAWebVoipUiPopoutWindowPortalContainer.react",
          ).WAWebVoipUiPopoutWindowEventEmitter.trigger(
            "setPopoutWindowProps",
            { callLogMsg: a, popoutWindow: g },
          );
        } finally {
          d();
        }
      };
      if (!m) {
        (o("WALogger").LOG(
          k ||
            (k = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] SW disabled/gated, using manual doc bootstrap",
            ])),
        ),
          ae(g),
          h());
        return;
      }
      var P = null,
        M = null,
        F = !1,
        O = function () {
          (P != null && (window.clearTimeout(P), (P = null)),
            M != null && (window.clearInterval(M), (M = null)),
            window.removeEventListener("message", B),
            g.closed ? d() : F || ((F = !0), h()));
        },
        B = function (t) {
          if (
            !(t.origin !== window.location.origin || typeof t.data != "string")
          ) {
            if (t.data.startsWith("voipPopoutReady")) {
              var e = "<unreadable>";
              try {
                e = g.location.href;
              } catch (t) {
                e = "<cross-origin: " + String(t) + ">";
              }
              var n = String(t.source === g),
                r = String(g.closed);
              o("WALogger").LOG(
                I ||
                  (I = babelHelpers.taggedTemplateLiteralLoose([
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
            t.source === g &&
              t.data === "voipPopoutReady" &&
              (o("WALogger").LOG(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] Received voipPopoutReady from Service Worker",
                  ])),
              ),
              O());
          }
        };
      (window.addEventListener("message", B),
        (P = window.setTimeout(function () {
          if (
            (o("WALogger").WARN(
              D ||
                (D = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] SW ready timeout, firing fallback",
                ])),
            ),
            !g.closed)
          ) {
            var e = null;
            try {
              e = g.location.href;
            } catch (e) {}
            (e === "about:blank" || e === "") &&
              (o("WALogger").LOG(
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] timeout fallback: bootstrap about:blank doc",
                  ])),
              ),
              ae(g));
          }
          O();
        }, w)),
        (M = window.setInterval(function () {
          g.closed &&
            (o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] Popout window closed before loading finished",
                ])),
            ),
            O());
        }, 500)));
    }
    function se(e) {
      o(
        "WAWebVoipUiPopoutWindowPortalContainer.react",
      ).WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", e);
    }
    function ue(e) {
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
          : M;
        q = window.setTimeout(function () {
          ((q = null), r("WAWebPipController").closePiP(), G());
        }, s);
      } else r("WAWebPipController").closePiP();
      (se({ callEnded: t, surveyInteracted: l }),
        o(
          "WAWebVoipUiDocPipPortalContainer.react",
        ).WAWebVoipUiDocPipEventEmitter.trigger("closeDocPip", {
          surveyInteracted: l,
        }));
    }
    ((l.setupVoipActiveCallChangeListener = H),
      (l.stopIncomingCallTitleFlash = z),
      (l.markIncomingMiniPlayerDismissed = K),
      (l.openVoipUiPopoutWindow = le),
      (l.closeVoipUiPopoutWindow = se),
      (l.closeAllVoipWindows = ue));
  },
  226,
);
