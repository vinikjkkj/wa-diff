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
    "WAWebVoipAutoPopoutLoader",
    "WAWebVoipCallEmoji",
    "WAWebVoipCallStateUtils",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipQplHelpers",
    "WAWebVoipTransferredCallRegistry",
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
      B = 500,
      W = "<!DOCTYPE html><html><head></head><body></body></html>",
      q = 5e3,
      U = !1,
      V = null,
      H = null,
      G = null,
      z = null,
      j = null,
      K = !1;
    function Q() {
      if (!U) {
        var e;
        (r("WAWebCallCollection").on(
          (e = o("WAWebVoipEventConstants")).getChangeEvent(
            e.VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          se,
        ),
          r("WAWebCallCollection").on(
            e.getChangeEvent(e.VoipCallCollectionEvents.END_CALL_TONE),
            o("WAWebCallEndTone").playCallEndTone,
          ),
          (U = !0));
      }
    }
    function X() {
      var e;
      (r("WAWebCallCollection").off(
        (e = o("WAWebVoipEventConstants")).getChangeEvent(
          e.VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        se,
      ),
        r("WAWebCallCollection").off(
          e.getChangeEvent(e.VoipCallCollectionEvents.END_CALL_TONE),
          o("WAWebCallEndTone").playCallEndTone,
        ),
        (U = !1));
    }
    function Y() {
      (j == null || j(), (j = null));
    }
    function J(e, t) {
      return o("WAWebUA").UA.hasEmoji &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_calling_incoming_call_tab_indicator_enabled",
        )
        ? o("WAWebVoipCallEmoji").getCallEmoji(t, !1) + " " + e
        : e;
    }
    function Z() {
      return K ? !1 : ((K = !0), !0);
    }
    function ee() {
      (V == null || V(),
        (V = o("WAWebTimeSpentLoggingExternal").beginTsExternalEvent(
          o("WAWebWamEnumTsExternalEventSource").TS_EXTERNAL_EVENT_SOURCE.CALL,
        )));
    }
    function te(e, t) {
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
    function ne() {
      var e;
      (e = o("WAWebVoipAutoPopoutLoader").getAutoPopout()) == null ||
        e.closePendingAutoPopout();
    }
    function re() {
      var e;
      return (
        ((e = o("WAWebVoipAutoPopoutLoader").getAutoPopout()) == null
          ? void 0
          : e.hasPendingAutoPopout()) === !0
      );
    }
    function oe(e) {
      e !== r("WAWebCallCollection").lastActiveCall &&
        o("WAWebVoipCallStateUtils").isCallIncoming(e.getState()) &&
        ne();
    }
    function ae(e) {
      var t;
      (t = o("WAWebVoipAutoPopoutLoader").getAutoPopout()) == null ||
        t.handOffPendingAutoPopoutToOutgoingCall(e.isVideo === !0);
    }
    function ie(e) {
      var t,
        n = r("WAWebCallCollection").pendingCallTransferLobby;
      ((n == null ? void 0 : n.isJoining) === !0 &&
        ((t = o("WAWebVoipTransferredCallRegistry").getTransferredCallRoot(
          e == null ? void 0 : e.id,
        )) == null
          ? void 0
          : t.rootCallId) !== n.entryPoint.rootCallId) ||
        r("WAWebCallCollection").setPendingCallTransferLobby(null);
    }
    function le(e) {
      return e != null
        ? o("WAWebVoipWaCallEnums").CallState.getName(e)
        : "unknown";
    }
    function se() {
      var t = r("WAWebCallCollection").activeCall;
      if (t != null && !o("WAWebVoipGatingUtils").isWebCallingUiEnabled()) {
        X();
        return;
      }
      if (t == null) {
        var n, a;
        (o("WAWebVoipQplHelpers").endVoipUiLifecycleQplSuccess(),
          j == null || j(),
          (j = null),
          (K = !1),
          H == null || H(),
          (H = null),
          G == null || G(),
          (G = null),
          ne(),
          V == null || V(),
          (V = null),
          r("WAWebCallCollection").setPendingCallLink(null),
          r("WAWebCallCollection").setPendingOutgoingCall(null),
          ie(r("WAWebCallCollection").lastEndedCall));
        var i = r("WAWebCallCollection").lastActiveCall,
          l = (i == null ? void 0 : i.shouldShowPostCallSurvey) === !0;
        if (l) {
          (o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] call ended, keeping windows for survey",
              ])),
          ),
            X());
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
        Ie({ callEnded: !0, surveyInteracted: h, delayPiP: !b });
      } else {
        (oe(t),
          z != null &&
            (window.clearTimeout(z),
            (z = null),
            r("WAWebCallCollection").pendingOutgoingCall == null &&
              r("WAWebCallCollection").pendingCallTransferLobby == null &&
              r("WAWebPipController").closePiP(),
            X()),
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
            Q());
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
            Q());
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
              : (G == null || G(),
                (G = te(t, function () {
                  ((G = null),
                    r("WAWebCallCollection").activeCall === t &&
                      o(
                        "WAWebVoipUiDocPipPortalContainer.react",
                      ).WAWebVoipUiDocPipEventEmitter.trigger(
                        "setDocPipProps",
                        { callLogMsg: t.msg },
                      ));
                }))),
            Q());
          return;
        }
        if (t.offerReceivedWhileOffline) {
          (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] skipping PiP for offline-flushed call",
              ])),
          ),
            Q());
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
          (o("WAWebVoipQplHelpers").startVoipUiLifecycleQpl({
            bool: { is_incoming: L },
            string: { initial_call_state: le(E) },
          }),
            re() &&
              o("WAWebVoipQplHelpers").voipUiLifecycleQplAddPoint(
                o("WAWebVoipQplHelpers").VoipUiLifecycleQplPoint.POPOUT_OPENED,
              ));
          var k = function () {
              o("WAWebReleaseToEventLoop")
                .releaseToEventLoop()
                .then(function () {
                  var e;
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
                    ie(t),
                    o(
                      "WAWebVoipUiDocPipPortalContainer.react",
                    ).WAWebVoipUiDocPipEventEmitter.trigger("setDocPipProps", {
                      callLogMsg: R,
                    }),
                    t.outgoing === !0 && re()
                      ? ae(t)
                      : t.outgoing === !0 &&
                        !o(
                          "WAWebVoipUiPopoutWindowPortalContainer.react",
                        ).getIsCallActiveInPopoutWindow() &&
                        o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() &&
                        (o("WALogger").LOG(
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
                        ),
                        o("WAWebReleaseToEventLoop")
                          .releaseToEventLoop()
                          .then(function () {
                            Le();
                          })));
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
              (j == null || j(), (j = null), ee());
            else {
              var T;
              ((K = !1), Re(E));
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
              (j == null || j(),
                (j = o("WAWebPwaDocumentMetadataUtils").startDocumentTitleFlash(
                  J(N.toString(), P),
                )),
                H == null || H());
              var M = !1,
                w = function () {
                  M || !(I || K) || ((M = !0), k());
                },
                A = !1,
                F = function () {
                  A || ((A = !0), Se());
                },
                O = function () {
                  var e = t.getState();
                  if (o("WAWebVoipCallStateUtils").isCallConnecting(e)) {
                    (j == null || j(), (j = null), F(), w());
                    return;
                  }
                  o("WAWebVoipCallStateUtils").isCallActive(e) &&
                    (j == null || j(),
                    (j = null),
                    ee(),
                    F(),
                    w(),
                    H == null || H(),
                    (H = null));
                };
              (t.on(
                o("WAWebVoipEventConstants").getChangeEvent(
                  o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                ),
                O,
              ),
                (H = function () {
                  t.off(
                    o("WAWebVoipEventConstants").getChangeEvent(
                      o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
                    ),
                    O,
                  );
                }));
            }
          else ee();
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
              se());
          };
          t.on(
            o("WAWebVoipEventConstants").getChangeEvent(
              o("WAWebVoipEventConstants").VoipCallModelEvents.MSG,
            ),
            W,
          );
        }
        Q();
      }
    }
    var ue = 48,
      ce = 16,
      de = 4 / 3,
      me = { left: 200, top: 200 },
      pe = 640;
    function _e(e, t) {
      t === void 0 && (t = !1);
      var n = o("WAWebVoipWindowConstants").getEffectiveMinWindowWidth(),
        r = t
          ? Math.max(
              pe,
              o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH_WITH_SIDEBAR,
            )
          : pe,
        a = Math.max(r, n),
        i = a / e,
        l = Math.round(i + ue + ce);
      return {
        width: Math.max(a, o("WAWebVoipWindowConstants").MIN_WINDOW_WIDTH),
        height: Math.max(l, o("WAWebVoipWindowConstants").MIN_WINDOW_HEIGHT),
      };
    }
    function fe(e, t) {
      return (
        t === void 0 && (t = ""),
        e
          ? window.location.origin + "/call/popout" + t
          : window.location.hostname
      );
    }
    function ge(e, t) {
      var n = _e(de, t),
        r = n.height,
        a = n.width,
        i = babelHelpers.extends({ width: a, height: r }, me);
      (o("WAWebFullscreenDetection").isFullscreen() &&
        o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] openPopout in fullscreen \u2014 may open tab not popup",
            ])),
        ),
        (window.name = o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).MAIN_WINDOW_NAME),
        o("WAWebAppTracker").AppTracker.mark(
          o("WAWebAppTracker").AppTrackerType.VoipUiWindowCreate,
        ));
      try {
        return window.open(
          e,
          "",
          Object.keys(i)
            .map(function (e) {
              return e + "=" + i[e];
            })
            .join(","),
        );
      } catch (e) {
        return (
          o("WALogger").WARN(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI manager: Popout window failed to open: ",
                "",
              ])),
            String(e),
          ),
          null
        );
      }
    }
    function he(e, t) {
      var n = t.bootstrapHtml,
        r = t.hasSW,
        a = t.onReady;
      if (!r) {
        (o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] SW disabled/gated, using manual doc bootstrap",
            ])),
        ),
          be(e, n),
          a());
        return;
      }
      var i = !1,
        l = function () {
          i ||
            ((i = !0),
            window.clearTimeout(u),
            window.clearInterval(c),
            window.removeEventListener("message", s),
            a());
        },
        s = function (n) {
          n.origin !== window.location.origin ||
            typeof n.data != "string" ||
            (n.data.startsWith("voipPopoutReady") && ye(n, e),
            n.source === e &&
              n.data === "voipPopoutReady" &&
              (o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] Received voipPopoutReady from Service Worker",
                  ])),
              ),
              l()));
        };
      window.addEventListener("message", s);
      var u = window.setTimeout(function () {
          (o("WALogger").WARN(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] SW ready timeout, firing fallback",
              ])),
          ),
            !e.closed &&
              Ce(e) &&
              (o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] timeout fallback: bootstrap about:blank doc",
                  ])),
              ),
              be(e, n)),
            l());
        }, O),
        c = window.setInterval(function () {
          e.closed &&
            (o("WALogger").LOG(
              R ||
                (R = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] Popout window closed before loading finished",
                ])),
            ),
            l());
        }, B);
    }
    function ye(e, t) {
      var n = "<unreadable>";
      try {
        n = t.location.href;
      } catch (e) {
        n = "<cross-origin: " + String(e) + ">";
      }
      var r = String(e.source === t),
        a = String(t.closed);
      o("WALogger").LOG(
        L ||
          (L = babelHelpers.taggedTemplateLiteralLoose([
            "[voip] popout msg: data=",
            " origin=",
            " srcMatch=",
            " closed=",
            " href=",
            "",
          ])),
        String(e.data),
        e.origin,
        r,
        a,
        n,
      );
    }
    function Ce(e) {
      try {
        var t = e.location.href;
        return t === "about:blank" || t === "";
      } catch (e) {
        return !1;
      }
    }
    function be(e, t) {
      (e.document.write(t), e.document.close());
    }
    var ve = "voip_call_connected";
    function Se() {
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
            E ||
              (E = babelHelpers.taggedTemplateLiteralLoose([
                "[voip][hybrid+] skipping connect notify: chrome.webview unavailable",
              ])),
          );
          return;
        }
        try {
          (t.postMessage(ve),
            o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip][hybrid+] posted ",
                  " to native host",
                ])),
              ve,
            ));
        } catch (e) {
          o("WALogger").WARN(
            I ||
              (I = babelHelpers.taggedTemplateLiteralLoose([
                "[voip][hybrid+] failed to notify native host of connect: ",
                "",
              ])),
            String(e),
          );
        }
      }
    }
    function Re(e) {
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
            Le();
          })
          .catch(function (e) {
            o("WALogger")
              .ERROR(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] failed to open Hybrid+ incoming ring pop-out",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-hybrid-plus-ring-popout-open-fail");
          });
    }
    function Le() {
      var e;
      if (
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsCallActiveInPopoutWindow() ||
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsPopoutWindowOpening()
      )
        return (
          o("WALogger").LOG(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] openPopout skipped: popout already active or opening",
              ])),
          ),
          !1
        );
      var t = r("WAWebCallCollection").activeCall,
        n = t == null ? void 0 : t.msg;
      if (!n)
        return (
          o("WALogger").WARN(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] openPopout called without active call msg",
              ])),
          ),
          !1
        );
      o(
        "WAWebVoipUiPopoutWindowPortalContainer.react",
      ).setIsPopoutWindowOpening(!0);
      var a = window.setTimeout(function () {
          ((a = null),
            o("WALogger").WARN(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] Popout opening guard fired, clearing stale state",
                ])),
            ),
            o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).setIsPopoutWindowOpening(!1));
        }, q),
        i = function () {
          (a != null && (window.clearTimeout(a), (a = null)),
            o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).setIsPopoutWindowOpening(!1));
        },
        l = !!((e = navigator.serviceWorker) != null && e.controller),
        s = Ee(t),
        u = fe(l, s);
      o("WALogger").LOG(
        P ||
          (P = babelHelpers.taggedTemplateLiteralLoose([
            "[voip] Opening popout window. SW enabled: ",
            ", popoutQuery: ",
            ", url: ",
            "",
          ])),
        String(l),
        s || "(none)",
        u,
      );
      var c = ge(u, (t == null ? void 0 : t.isGroup) === !0);
      return c == null
        ? (i(),
          o("WALogger").WARN(
            N ||
              (N = babelHelpers.taggedTemplateLiteralLoose([
                "voip: UI manager: Popout window failed to open",
              ])),
          ),
          o("WAWebModalManager").ModalManager.open(
            A.jsx(o("WAWebGuidePopup.react").GuidePopup, {
              messaging: o("WAWebGuidePopup.react").Messaging.POPUPS_BLOCKED,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface.VOIP,
            }),
          ),
          !1)
        : (o("WAWebVoipQplHelpers").voipUiLifecycleQplAddPoint(
            o("WAWebVoipQplHelpers").VoipUiLifecycleQplPoint.POPOUT_OPENED,
          ),
          he(c, {
            bootstrapHtml: W,
            hasSW: l,
            onReady: function () {
              if (c.closed) {
                i();
                return;
              }
              o("WALogger").LOG(
                M ||
                  (M = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] Popout document is ready, triggering React portal",
                  ])),
              );
              try {
                o(
                  "WAWebVoipUiPopoutWindowPortalContainer.react",
                ).WAWebVoipUiPopoutWindowEventEmitter.trigger(
                  "setPopoutWindowProps",
                  { callLogMsg: n, popoutWindow: c },
                );
              } finally {
                i();
              }
            },
          }),
          !0);
    }
    function Ee(e) {
      var t = [];
      return (
        o("WAWebVoipCallStateUtils").isCallIncoming(
          e == null ? void 0 : e.getState(),
        ) && t.push("incoming_ring=1"),
        o("WAWebVoipGatingUtils").isWinHybridPlusEnabled() &&
          (e == null ? void 0 : e.isVideo) === !0 &&
          t.push("is_video=1"),
        t.length > 0 ? "?" + t.join("&") : ""
      );
    }
    function ke(e) {
      o(
        "WAWebVoipUiPopoutWindowPortalContainer.react",
      ).WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", e);
    }
    function Ie(e) {
      var t,
        n = e.callEnded,
        a = e.delayPiP,
        i = a === void 0 ? !1 : a,
        l = e.surveyInteracted,
        s = l === void 0 ? !1 : l;
      if (
        ((t = r("WAWebCallCollection").pendingCallTransferLobby) == null
          ? void 0
          : t.isJoining) === !0
      )
        r("WAWebPipController").openVoipUiPiPForOutgoing();
      else if (i) {
        var u = o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsCallActiveInPopoutWindow()
          ? 0
          : F;
        z = window.setTimeout(function () {
          ((z = null),
            r("WAWebCallCollection").pendingCallTransferLobby == null &&
              r("WAWebPipController").closePiP(),
            X());
        }, u);
      } else r("WAWebPipController").closePiP();
      (ke({ callEnded: n, surveyInteracted: s }),
        o(
          "WAWebVoipUiDocPipPortalContainer.react",
        ).WAWebVoipUiDocPipEventEmitter.trigger("closeDocPip", {
          surveyInteracted: s,
        }));
    }
    ((l.setupVoipActiveCallChangeListener = Q),
      (l.stopIncomingCallTitleFlash = Y),
      (l.markIncomingMiniPlayerDismissed = Z),
      (l.DEFAULT_VIDEO_ASPECT_RATIO = de),
      (l.DEFAULT_WINDOW_POSITION = me),
      (l.calculateWindowDimensions = _e),
      (l.getPopoutWindowUrl = fe),
      (l.openPopoutWindow = ge),
      (l.waitForPopoutDocumentReady = he),
      (l.openVoipUiPopoutWindow = Le),
      (l.closeVoipUiPopoutWindow = ke),
      (l.closeAllVoipWindows = Ie));
  },
  226,
);
