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
      w = M || (M = o("react")),
      A = 3e3,
      F = 3e3,
      O = 5e3,
      B = !1,
      W = null,
      q = null,
      U = null,
      V = null,
      H = null,
      G = !1;
    function z() {
      if (!B) {
        var e;
        (r("WAWebCallCollection").on(
          (e = o("WAWebVoipEventConstants")).getChangeEvent(
            e.VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          ee,
        ),
          r("WAWebCallCollection").on(
            e.getChangeEvent(e.VoipCallCollectionEvents.END_CALL_TONE),
            o("WAWebCallEndTone").playCallEndTone,
          ),
          (B = !0));
      }
    }
    function j() {
      var e;
      (r("WAWebCallCollection").off(
        (e = o("WAWebVoipEventConstants")).getChangeEvent(
          e.VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        ee,
      ),
        r("WAWebCallCollection").off(
          e.getChangeEvent(e.VoipCallCollectionEvents.END_CALL_TONE),
          o("WAWebCallEndTone").playCallEndTone,
        ),
        (B = !1));
    }
    function K() {
      (H == null || H(), (H = null));
    }
    function Q(e, t) {
      return o("WAWebUA").UA.hasEmoji &&
        o("WAWebVoipGatingUtils").isIncomingCallTabIndicatorEnabled()
        ? o("WAWebVoipCallEmoji").getCallEmoji(t, !1) + " " + e
        : e;
    }
    function X() {
      return G ? !1 : ((G = !0), !0);
    }
    function Y() {
      (W == null || W(),
        (W = o("WAWebTimeSpentLoggingExternal").beginTsExternalEvent(
          o("WAWebWamEnumTsExternalEventSource").TS_EXTERNAL_EVENT_SOURCE.CALL,
        )));
    }
    function J(e, t) {
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
    function Z(e) {
      return e != null
        ? o("WAWebVoipWaCallEnums").CallState.getName(e)
        : "unknown";
    }
    function ee() {
      var t = r("WAWebCallCollection").activeCall;
      if (t != null && !o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
        j();
        return;
      }
      if (t == null) {
        var n, a;
        (o("WAWebVoipQplHelpers").endVoipUiLifecycleQplSuccess(),
          H == null || H(),
          (H = null),
          (G = !1),
          q == null || q(),
          (q = null),
          U == null || U(),
          (U = null),
          W == null || W(),
          (W = null),
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
            j());
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
        pe({ callEnded: !0, surveyInteracted: h, delayPiP: !b });
      } else {
        (V != null &&
          (window.clearTimeout(V),
          (V = null),
          r("WAWebCallCollection").pendingOutgoingCall == null &&
            r("WAWebPipController").closePiP(),
          j()),
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
            z());
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
            z());
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
              : (U == null || U(),
                (U = J(t, function () {
                  ((U = null),
                    r("WAWebCallCollection").activeCall === t &&
                      o(
                        "WAWebVoipUiDocPipPortalContainer.react",
                      ).WAWebVoipUiDocPipEventEmitter.trigger(
                        "setDocPipProps",
                        { callLogMsg: t.msg },
                      ));
                }))),
            z());
          return;
        }
        if (t.offerReceivedWhileOffline) {
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] skipping PiP for offline-flushed call",
              ])),
          ),
            z());
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
            string: { initial_call_state: Z(E) },
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
                        de({ centered: n });
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
              (H == null || H(), (H = null), Y());
            else {
              var T;
              ((G = !1), ce(E));
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
              (H == null || H(),
                (H = o("WAWebPwaDocumentMetadataUtils").startDocumentTitleFlash(
                  Q(N.toString(), P),
                )),
                q == null || q());
              var M = !1,
                w = function () {
                  var e =
                    o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() &&
                    o(
                      "WAWebVoipUiPopoutWindowPortalContainer.react",
                    ).getIsCallActiveInPopoutWindow();
                  M || e || !(I || G) || ((M = !0), k());
                },
                A = !1,
                F = function () {
                  A || ((A = !0), ue());
                },
                O = function () {
                  var e = t.getState();
                  if (o("WAWebVoipCallStateUtils").isCallConnecting(e)) {
                    (H == null || H(), (H = null), F(), w());
                    return;
                  }
                  o("WAWebVoipCallStateUtils").isCallActive(e) &&
                    (H == null || H(),
                    (H = null),
                    Y(),
                    F(),
                    w(),
                    q == null || q(),
                    (q = null));
                };
              (t.on(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                ),
                O,
              ),
                (q = function () {
                  t.off(
                    o("WAWebVoipEventConstants").getChangeEvent(
                      o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                    ),
                    O,
                  );
                }));
            }
          else Y();
          I || k();
        } else {
          var B = Date.now();
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call changed, msg not ready, waiting for PiP",
              ])),
          );
          var K = function () {
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
                K,
              ),
              ee());
          };
          t.on(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
            ),
            K,
          );
        }
        z();
      }
    }
    var te = 48,
      ne = 16,
      re = 4 / 3,
      oe = { left: 200, top: 200 },
      ae = 640;
    function ie(e, t) {
      t === void 0 && (t = !1);
      var n = o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth(),
        r = t
          ? Math.max(
              ae,
              o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH_WITH_SIDEBAR,
            )
          : ae,
        a = Math.max(r, n),
        i = a / e,
        l = Math.round(i + te + ne);
      return {
        width: Math.max(a, o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH),
        height: Math.max(l, o("WAWebVoipWindowConstants").MIN_WINDOW_HEIGHT),
      };
    }
    function le(e) {
      (e.document.write(
        "<!DOCTYPE html><html><head></head><body></body></html>",
      ),
        e.document.close());
    }
    var se = "voip_call_connected";
    function ue() {
      if (
        !(
          !o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() ||
          !o(
            "WAWebVoipUiPopoutWindowPortalContainer.react",
          ).getIsCallActiveInPopoutWindow()
        )
      )
        try {
          var e = o(
            "WAWebVoipUiPopoutWindowPortalContainer.react",
          ).getPopoutWindow();
          (e == null || e.postMessage(se, window.location.origin),
            o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip][hybrid+] posted ",
                  " to ring pop-out host",
                ])),
              se,
            ));
        } catch (e) {
          o("WALogger").WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[voip][hybrid+] failed to notify ring pop-out of connect: ",
                "",
              ])),
            String(e),
          );
        }
    }
    function ce(e) {
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
            de();
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] failed to open Hybrid+ incoming ring pop-out",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-hybrid-plus-ring-popout-open-fail");
          });
    }
    function de(e) {
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
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] openPopout skipped: popout already active or opening",
            ])),
        );
        return;
      }
      var n = r("WAWebCallCollection").activeCall,
        a = n == null ? void 0 : n.msg;
      if (!a) {
        o("WALogger").WARN(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] openPopout called without active call msg",
            ])),
        );
        return;
      }
      var i = ie(re, (n == null ? void 0 : n.isGroup) === !0),
        l = i.height,
        s = i.width,
        u = babelHelpers.extends({ width: s, height: l }, oe);
      (o("WAWebFullscreenDetection").isFullscreen() &&
        o("WALogger").LOG(
          S ||
            (S = babelHelpers.taggedTemplateLiteralLoose([
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
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] Popout opening guard fired, clearing stale state",
                ])),
            ),
            o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).setIsPopoutWindowOpening(!1));
        }, O),
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
        L ||
          (L = babelHelpers.taggedTemplateLiteralLoose([
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
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI manager: Popout window failed to open: ",
                "",
              ])),
            String(e),
          ));
      }
      if (!f) {
        (d(),
          o("WALogger").WARN(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI manager: Popout window failed to open",
              ])),
          ),
          o("WAWebModalManager").ModalManager.open(
            w.jsx(o("WAWebGuidePopup.react").GuidePopup, {
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
          I ||
            (I = babelHelpers.taggedTemplateLiteralLoose([
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
          T ||
            (T = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] SW disabled/gated, using manual doc bootstrap",
            ])),
        ),
          le(g),
          h());
        return;
      }
      var y = null,
        C = null,
        M = !1,
        A = function () {
          (y != null && (window.clearTimeout(y), (y = null)),
            C != null && (window.clearInterval(C), (C = null)),
            window.removeEventListener("message", B),
            g.closed ? d() : M || ((M = !0), h()));
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
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
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
                x ||
                  (x = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] Received voipPopoutReady from Service Worker",
                  ])),
              ),
              A());
          }
        };
      (window.addEventListener("message", B),
        (y = window.setTimeout(function () {
          if (
            (o("WALogger").WARN(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
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
                P ||
                  (P = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] timeout fallback: bootstrap about:blank doc",
                  ])),
              ),
              le(g));
          }
          A();
        }, F)),
        (C = window.setInterval(function () {
          g.closed &&
            (o("WALogger").LOG(
              N ||
                (N = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] Popout window closed before loading finished",
                ])),
            ),
            A());
        }, 500)));
    }
    function me(e) {
      o(
        "WAWebVoipUiPopoutWindowPortalContainer.react",
      ).WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", e);
    }
    function pe(e) {
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
          : A;
        V = window.setTimeout(function () {
          ((V = null), r("WAWebPipController").closePiP(), j());
        }, s);
      } else r("WAWebPipController").closePiP();
      (me({ callEnded: t, surveyInteracted: l }),
        o(
          "WAWebVoipUiDocPipPortalContainer.react",
        ).WAWebVoipUiDocPipEventEmitter.trigger("closeDocPip", {
          surveyInteracted: l,
        }));
    }
    ((l.setupVoipActiveCallChangeListener = z),
      (l.stopIncomingCallTitleFlash = K),
      (l.markIncomingMiniPlayerDismissed = X),
      (l.openVoipUiPopoutWindow = de),
      (l.closeVoipUiPopoutWindow = me),
      (l.closeAllVoipWindows = pe));
  },
  226,
);
