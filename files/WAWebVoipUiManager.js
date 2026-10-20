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
      N,
      M,
      w,
      A = w || (w = o("react")),
      F = 3e3,
      O = 3e3,
      B = 5e3,
      W = !1,
      q = null,
      U = null,
      V = null,
      H = null,
      G = null,
      z = !1;
    function j() {
      if (!W) {
        var e;
        (r("WAWebCallCollection").on(
          (e = o("WAWebVoipEventConstants")).getChangeEvent(
            e.VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          te,
        ),
          r("WAWebCallCollection").on(
            e.getChangeEvent(e.VoipCallCollectionEvents.END_CALL_TONE),
            o("WAWebCallEndTone").playCallEndTone,
          ),
          (W = !0));
      }
    }
    function K() {
      var e;
      (r("WAWebCallCollection").off(
        (e = o("WAWebVoipEventConstants")).getChangeEvent(
          e.VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        te,
      ),
        r("WAWebCallCollection").off(
          e.getChangeEvent(e.VoipCallCollectionEvents.END_CALL_TONE),
          o("WAWebCallEndTone").playCallEndTone,
        ),
        (W = !1));
    }
    function Q() {
      (G == null || G(), (G = null));
    }
    function X(e, t) {
      return o("WAWebUA").UA.hasEmoji &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_incoming_call_tab_indicator_enabled",
        )
        ? o("WAWebVoipCallEmoji").getCallEmoji(t, !1) + " " + e
        : e;
    }
    function Y() {
      return z ? !1 : ((z = !0), !0);
    }
    function J() {
      (q == null || q(),
        (q = o("WAWebTimeSpentLoggingExternal").beginTsExternalEvent(
          o("WAWebWamEnumTsExternalEventSource").TS_EXTERNAL_EVENT_SOURCE.CALL,
        )));
    }
    function Z(e, t) {
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
    function ee(e) {
      return e != null
        ? o("WAWebVoipWaCallEnums").CallState.getName(e)
        : "unknown";
    }
    function te() {
      var t = r("WAWebCallCollection").activeCall;
      if (t != null && !o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
        K();
        return;
      }
      if (t == null) {
        var n, a;
        (o("WAWebVoipQplHelpers").endVoipUiLifecycleQplSuccess(),
          G == null || G(),
          (G = null),
          (z = !1),
          U == null || U(),
          (U = null),
          V == null || V(),
          (V = null),
          q == null || q(),
          (q = null),
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
            K());
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
        _e({ callEnded: !0, surveyInteracted: h, delayPiP: !b });
      } else {
        (H != null &&
          (window.clearTimeout(H),
          (H = null),
          r("WAWebCallCollection").pendingOutgoingCall == null &&
            r("WAWebPipController").closePiP(),
          K()),
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
            j());
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
            j());
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
              : (V == null || V(),
                (V = Z(t, function () {
                  ((V = null),
                    r("WAWebCallCollection").activeCall === t &&
                      o(
                        "WAWebVoipUiDocPipPortalContainer.react",
                      ).WAWebVoipUiDocPipEventEmitter.trigger(
                        "setDocPipProps",
                        { callLogMsg: t.msg },
                      ));
                }))),
            j());
          return;
        }
        if (t.offerReceivedWhileOffline) {
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] skipping PiP for offline-flushed call",
              ])),
          ),
            j());
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
            string: { initial_call_state: ee(E) },
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
                      (o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() ||
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
                        o("WAWebVoipGatingUtils").isWinHybridPlusEnabled(),
                      ),
                      String(t.isVideo === !0),
                    );
                    var n = o("WAWebVoipGatingUtils").isWinHybridPlusEnabled();
                    o("WAWebReleaseToEventLoop")
                      .releaseToEventLoop()
                      .then(function () {
                        me({ centered: n });
                      });
                  }
                });
            },
            I =
              L &&
              !o("WAWebVoipCallStateUtils").isCallActive(E) &&
              (o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() ||
                !o(
                  "WAWebMuteCollection",
                ).MuteCollection.getGlobalCallNotifications());
          if (L)
            if (o("WAWebVoipCallStateUtils").isCallActive(E))
              (G == null || G(), (G = null), J());
            else {
              var T;
              ((z = !1), de(E));
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
              (G == null || G(),
                (G = o("WAWebPwaDocumentMetadataUtils").startDocumentTitleFlash(
                  X(N.toString(), P),
                )),
                U == null || U());
              var M = !1,
                w = function () {
                  var e =
                    o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() &&
                    o(
                      "WAWebVoipUiPopoutWindowPortalContainer.react",
                    ).getIsCallActiveInPopoutWindow();
                  M || e || !(I || z) || ((M = !0), k());
                },
                A = !1,
                F = function () {
                  A || ((A = !0), ce());
                },
                O = function () {
                  var e = t.getState();
                  if (o("WAWebVoipCallStateUtils").isCallConnecting(e)) {
                    (G == null || G(), (G = null), F(), w());
                    return;
                  }
                  o("WAWebVoipCallStateUtils").isCallActive(e) &&
                    (G == null || G(),
                    (G = null),
                    J(),
                    F(),
                    w(),
                    U == null || U(),
                    (U = null));
                };
              (t.on(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                ),
                O,
              ),
                (U = function () {
                  t.off(
                    o("WAWebVoipEventConstants").getChangeEvent(
                      o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                    ),
                    O,
                  );
                }));
            }
          else J();
          I || k();
        } else {
          var B = Date.now();
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call changed, msg not ready, waiting for PiP",
              ])),
          );
          var W = function () {
            var e = Date.now() - B;
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
                W,
              ),
              te());
          };
          t.on(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
            ),
            W,
          );
        }
        j();
      }
    }
    var ne = 48,
      re = 16,
      oe = 4 / 3,
      ae = { left: 200, top: 200 },
      ie = 640;
    function le(e, t) {
      t === void 0 && (t = !1);
      var n = o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth(),
        r = t
          ? Math.max(
              ie,
              o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH_WITH_SIDEBAR,
            )
          : ie,
        a = Math.max(r, n),
        i = a / e,
        l = Math.round(i + ne + re);
      return {
        width: Math.max(a, o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH),
        height: Math.max(l, o("WAWebVoipWindowConstants").MIN_WINDOW_HEIGHT),
      };
    }
    function se(e) {
      (e.document.write(
        "<!DOCTYPE html><html><head></head><body></body></html>",
      ),
        e.document.close());
    }
    var ue = "voip_call_connected";
    function ce() {
      var e;
      if (
        !(
          !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() ||
          !o(
            "WAWebVoipUiPopoutWindowPortalContainer.react",
          ).getIsCallActiveInPopoutWindow()
        )
      ) {
        var t = (e = window.chrome) == null ? void 0 : e.webview;
        if (t == null) {
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[voip][hybrid+] skipping connect notify: chrome.webview unavailable",
              ])),
          );
          return;
        }
        try {
          (t.postMessage(ue),
            o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip][hybrid+] posted ",
                  " to native host",
                ])),
              ue,
            ));
        } catch (e) {
          o("WALogger").WARN(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "[voip][hybrid+] failed to notify native host of connect: ",
                "",
              ])),
            String(e),
          );
        }
      }
    }
    function de(e) {
      !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() ||
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
            me();
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] failed to open Hybrid+ incoming ring pop-out",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-hybrid-plus-ring-popout-open-fail");
          });
    }
    function me(e) {
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
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] openPopout skipped: popout already active or opening",
            ])),
        );
        return;
      }
      var n = r("WAWebCallCollection").activeCall,
        a = n == null ? void 0 : n.msg;
      if (!a) {
        o("WALogger").WARN(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] openPopout called without active call msg",
            ])),
        );
        return;
      }
      var i = le(oe, (n == null ? void 0 : n.isGroup) === !0),
        l = i.height,
        s = i.width,
        u = babelHelpers.extends({ width: s, height: l }, ae);
      (o("WAWebFullscreenDetection").isFullscreen() &&
        o("WALogger").LOG(
          R ||
            (R = babelHelpers.taggedTemplateLiteralLoose([
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
              L ||
                (L = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] Popout opening guard fired, clearing stale state",
                ])),
            ),
            o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).setIsPopoutWindowOpening(!1));
        }, B),
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
        E ||
          (E = babelHelpers.taggedTemplateLiteralLoose([
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
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI manager: Popout window failed to open: ",
                "",
              ])),
            String(e),
          ));
      }
      if (!f) {
        (d(),
          o("WALogger").WARN(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI manager: Popout window failed to open",
              ])),
          ),
          o("WAWebModalManager").ModalManager.open(
            A.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
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
          D ||
            (D = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] SW disabled/gated, using manual doc bootstrap",
            ])),
        ),
          se(g),
          h());
        return;
      }
      var y = null,
        C = null,
        b = !1,
        w = function () {
          (y != null && (window.clearTimeout(y), (y = null)),
            C != null && (window.clearInterval(C), (C = null)),
            window.removeEventListener("message", F),
            g.closed ? d() : b || ((b = !0), h()));
        },
        F = function (t) {
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
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
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
                $ ||
                  ($ = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] Received voipPopoutReady from Service Worker",
                  ])),
              ),
              w());
          }
        };
      (window.addEventListener("message", F),
        (y = window.setTimeout(function () {
          if (
            (o("WALogger").WARN(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
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
                N ||
                  (N = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] timeout fallback: bootstrap about:blank doc",
                  ])),
              ),
              se(g));
          }
          w();
        }, O)),
        (C = window.setInterval(function () {
          g.closed &&
            (o("WALogger").LOG(
              M ||
                (M = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] Popout window closed before loading finished",
                ])),
            ),
            w());
        }, 500)));
    }
    function pe(e) {
      o(
        "WAWebVoipUiPopoutWindowPortalContainer.react",
      ).WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", e);
    }
    function _e(e) {
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
          : F;
        H = window.setTimeout(function () {
          ((H = null), r("WAWebPipController").closePiP(), K());
        }, s);
      } else r("WAWebPipController").closePiP();
      (pe({ callEnded: t, surveyInteracted: l }),
        o(
          "WAWebVoipUiDocPipPortalContainer.react",
        ).WAWebVoipUiDocPipEventEmitter.trigger("closeDocPip", {
          surveyInteracted: l,
        }));
    }
    ((l.setupVoipActiveCallChangeListener = j),
      (l.stopIncomingCallTitleFlash = Q),
      (l.markIncomingMiniPlayerDismissed = Y),
      (l.openVoipUiPopoutWindow = me),
      (l.closeVoipUiPopoutWindow = pe),
      (l.closeAllVoipWindows = _e));
  },
  226,
);
