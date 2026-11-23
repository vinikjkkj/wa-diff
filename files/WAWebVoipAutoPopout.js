__d(
  "WAWebVoipAutoPopout",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebEnvironment",
    "WAWebMediaPermissionsUtils",
    "WAWebPipController",
    "WAWebRobotoVariableFontLoadable",
    "WAWebVoipAcquireMediaStream",
    "WAWebVoipCompactCallingPanel.react",
    "WAWebVoipEventConstants",
    "WAWebVoipGatingUtils",
    "WAWebVoipPopoutOpeningPlaceholder.react",
    "WAWebVoipPopoutWindowState",
    "WAWebVoipQplHelpers",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipUiManager",
    "WAWebVoipUiPopoutWindowLoadable",
    "WAWebVoipUiPopoutWindowPortalContainer.react",
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
      L = R || (R = o("react")),
      E =
        "<!DOCTYPE html><html><head><style>html,body{margin:0;height:100%;background:#111b21}</style></head><body></body></html>",
      k = 9e4,
      I = 5e3,
      T = 1e4,
      D = 500,
      x = 1e4,
      $ = null,
      P = 0,
      N = null,
      M = null;
    function w(t, n) {
      if (!me())
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] preOpenPopout skipped: no active user gesture",
              ])),
          ),
          !1
        );
      if (
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsCallActiveInPopoutWindow() ||
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsPopoutWindowOpening() ||
        $ != null
      )
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] preOpenPopout skipped: popout already active, opening, or pending",
              ])),
          ),
          !1
        );
      var r = ie(t);
      if (r == null) return !1;
      de();
      var a = window.setTimeout(function () {
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] preOpenPopout cleanup timeout, closing pending window",
            ])),
        ),
          W());
      }, k);
      (j(), P++);
      var i = P,
        l = window.setInterval(function () {
          r.popoutWindow.closed &&
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] pre-opened popout closed before the call reached it",
                ])),
            ),
            W(i));
        }, D);
      return (
        ($ = {
          cancelStart: n,
          cleanupTimeoutId: a,
          closedCheckIntervalId: l,
          id: i,
          opened: r,
        }),
        o("WAWebVoipPopoutWindowState").setIsAutoPopoutPending(!0),
        !0
      );
    }
    function A() {
      var e,
        t = $;
      if (t != null) {
        (($ = null), B(t));
        var n = t.opened;
        if (n.popoutWindow.closed) {
          (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] finalizeAutoPopout: window already closed",
              ])),
          ),
            o("WAWebVoipPopoutWindowState").setIsAutoPopoutPending(!1),
            o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).setIsPopoutWindowOpening(!1));
          return;
        }
        var a =
          (e = r("WAWebCallCollection").activeCall) == null ? void 0 : e.msg;
        if (a == null) {
          (o("WALogger").WARN(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] finalizeAutoPopout: no active call msg, closing window",
              ])),
          ),
            o("WAWebVoipPopoutWindowState").setIsAutoPopoutPending(!1),
            n.popoutWindow.close(),
            o(
              "WAWebVoipUiPopoutWindowPortalContainer.react",
            ).setIsPopoutWindowOpening(!1));
          return;
        }
        le(n, a);
      }
    }
    function F() {
      var e = $;
      e != null && (($ = null), B(e), O(e.opened));
      var t = N;
      t != null && ((N = null), O(t));
    }
    function O(e) {
      (e.popoutWindow.closed || e.popoutWindow.close(),
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).setIsPopoutWindowOpening(!1));
    }
    function B(e) {
      (window.clearTimeout(e.cleanupTimeoutId),
        window.clearInterval(e.closedCheckIntervalId));
    }
    function W(e) {
      var t;
      (e != null && ((t = $) == null ? void 0 : t.id) !== e) ||
        (F(), j(), o("WAWebVoipPopoutWindowState").setIsAutoPopoutPending(!1));
    }
    function q() {
      return $ != null;
    }
    function U() {
      var e;
      return (e = $) == null ? void 0 : e.id;
    }
    async function V(e) {
      var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
      if (!(t == null || t.type !== "web")) {
        var n = e.isInCallLinkPreview();
        await t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Self, !n);
      }
    }
    function H(e) {
      V(e).catch(function (e) {
        o("WALogger")
          .ERROR(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: endAutoPopoutCall: failed to end active call",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("auto-popout-end-call-failed");
      });
    }
    var G = null,
      z = null;
    function j() {
      (G != null && (window.clearTimeout(G), (G = null)),
        z == null || z(),
        (z = null));
    }
    function K() {
      var e,
        t = (e = $) == null ? void 0 : e.cancelStart;
      (F(),
        j(),
        r("WAWebPipController").closePiP(),
        (G = window.setTimeout(function () {
          (j(), o("WAWebVoipPopoutWindowState").setIsAutoPopoutPending(!1));
        }, T)));
      var n = r("WAWebCallCollection").activeCall;
      if (n != null) {
        H(n);
        return;
      }
      if ((t == null ? void 0 : t()) !== !1) {
        Q();
        return;
      }
      var a = o("WAWebVoipEventConstants").getChangeEvent(
          o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        i = function () {
          var e = r("WAWebCallCollection").activeCall;
          (e == null ? void 0 : e.isCallLink) === !0 &&
            (z == null || z(),
            (z = null),
            r("WAWebPipController").closePiP(),
            H(e));
        };
      (r("WAWebCallCollection").on(a, i),
        (z = function () {
          r("WAWebCallCollection").off(a, i);
        }));
    }
    function Q() {
      var e = o("WAWebVoipEventConstants").getChangeEvent(
          o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        t = function () {
          r("WAWebCallCollection").activeCall != null &&
            (j(), o("WAWebVoipPopoutWindowState").setIsAutoPopoutPending(!1));
        };
      (r("WAWebCallCollection").on(e, t),
        (z = function () {
          r("WAWebCallCollection").off(e, t);
        }));
    }
    function X() {
      var e = $;
      return e == null
        ? Promise.resolve()
        : new Promise(function (t) {
            var n = !1,
              r = function () {
                n || ((n = !0), window.clearTimeout(a), t());
              },
              a = window.setTimeout(function () {
                (o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[voip] auto-popout not ready within ",
                      "ms; abandoning popout, call continues in mini player",
                    ])),
                  I,
                ),
                  $ === e && W(),
                  r());
              }, I);
            e.opened.documentReadyPromise.then(r);
          });
    }
    function Y(e) {
      return !e.isVideo ||
        r("WAWebEnvironment").isWindows ||
        o("WAWebVoipGatingUtils").isGuestViewer() ||
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).getIsCallActiveInPopoutWindow() ||
        !o("WAWebVoipGatingUtils").isAutoPopoutVideoEnabled()
        ? null
        : o("WAWebVoipAcquireMediaStream").mayPromptForMediaPermission({
              camera: e.needsCamera,
              microphone: e.needsMicrophone,
            })
          ? (o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] auto-popout skipped: a media permission prompt may be pending",
                ])),
            ),
            o("WAWebMediaPermissionsUtils").listenForMediaPermissionChanges(
              navigator,
            ),
            null)
          : w(e.isGroupCall, e.cancelStart)
            ? U()
            : null;
    }
    function J(e, t) {
      if (
        r("WAWebCallCollection").activeCall != null ||
        r("WAWebCallCollection").pendingOutgoingCall != null
      )
        return null;
      var n = Y({
        isGroupCall: t,
        isVideo: e,
        needsCamera: e,
        needsMicrophone: !0,
      });
      return (n != null && (M = n), n);
    }
    function Z(e) {
      var t = U();
      e && t != null && t === M ? A() : W();
    }
    function ee(e, t, n) {
      return Y({
        isGroupCall: t,
        isVideo: e,
        needsCamera: e && !n,
        needsMicrophone: !0,
      });
    }
    function te(e) {
      e != null && U() === e && A();
    }
    function ne(e, t) {
      e != null &&
        t.addEventListener(
          "abort",
          function () {
            return ae(e);
          },
          { once: !0 },
        );
    }
    function re() {
      return L.jsx(r("WAWebVoipPopoutOpeningPlaceholder.react"), {});
    }
    re.displayName = re.name + " [from " + i.id + "]";
    function oe(e) {
      return L.jsx(
        r("WAWebVoipCompactCallingPanel.react"),
        babelHelpers.extends({}, e),
      );
    }
    oe.displayName = oe.name + " [from " + i.id + "]";
    function ae(e) {
      e != null && W(e);
    }
    function ie(e) {
      var t;
      o(
        "WAWebVoipUiPopoutWindowPortalContainer.react",
      ).setIsPopoutWindowOpening(!0);
      var n = !!((t = navigator.serviceWorker) != null && t.controller),
        r = o("WAWebVoipUiManager").getPopoutWindowUrl(n);
      o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
            "[voip] Opening auto-popout window. SW enabled: ",
            ", url: ",
            "",
          ])),
        String(n),
        r,
      );
      var a = o("WAWebVoipUiManager").openPopoutWindow(r, e);
      return a == null
        ? (o(
            "WAWebVoipUiPopoutWindowPortalContainer.react",
          ).setIsPopoutWindowOpening(!1),
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "[voip] auto-popout blocked by the browser, call stays in the mini player",
              ])),
          ),
          null)
        : (o("WAWebVoipQplHelpers").voipUiLifecycleQplAddPoint(
            o("WAWebVoipQplHelpers").VoipUiLifecycleQplPoint.POPOUT_OPENED,
          ),
          {
            documentReadyPromise: new Promise(function (e) {
              o("WAWebVoipUiManager").waitForPopoutDocumentReady(a, {
                bootstrapHtml: E,
                hasSW: n,
                onReady: e,
              });
            }),
            popoutWindow: a,
          });
    }
    function le(e, t) {
      ((N = e),
        e.documentReadyPromise
          .then(function () {
            if (N === e) {
              N = null;
              var n = e.popoutWindow;
              if (n.closed) {
                (o("WAWebVoipPopoutWindowState").setIsAutoPopoutPending(!1),
                  o(
                    "WAWebVoipUiPopoutWindowPortalContainer.react",
                  ).setIsPopoutWindowOpening(!1));
                return;
              }
              o("WALogger").LOG(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] Popout document is ready, triggering React portal",
                  ])),
              );
              try {
                o(
                  "WAWebVoipUiPopoutWindowPortalContainer.react",
                ).WAWebVoipUiPopoutWindowEventEmitter.trigger(
                  "setPopoutWindowProps",
                  { callLogMsg: t, popoutWindow: n },
                );
              } finally {
                (o("WAWebVoipPopoutWindowState").setIsAutoPopoutPending(!1),
                  o(
                    "WAWebVoipUiPopoutWindowPortalContainer.react",
                  ).setIsPopoutWindowOpening(!1));
              }
              se(n);
            }
          })
          .catch(function (t) {
            (o("WALogger")
              .ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] connecting the popout portal failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("voip-popout-portal-connect-failed"),
              O(e));
          }));
    }
    function se(e) {
      o("WAWebVoipUiPopoutWindowLoadable")
        .requireBundle()
        .then(
          function () {
            return ue(e);
          },
          function () {
            return ue(e);
          },
        );
    }
    function ue(e) {
      window.setTimeout(function () {
        o("WAWebVoipPopoutWindowState").getPopoutWindow() !== e ||
          !o(
            "WAWebVoipUiPopoutWindowPortalContainer.react",
          ).getIsCallActiveInPopoutWindow() ||
          ce(e) ||
          (o("WALogger")
            .ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] auto-popout UI not attached within ",
                  "ms; moving the call back to the main window",
                ])),
              x,
            )
            .sendLogs("voip-auto-popout-ui-not-attached"),
          o(
            "WAWebVoipUiPopoutWindowPortalContainer.react",
          ).WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", {
            callEnded: !1,
          }));
      }, x);
    }
    function ce(e) {
      if (e.closed) return !1;
      try {
        return (
          e.document.getElementById(
            o("WAWebVoipUiPopoutWindowPortalContainer.react")
              .VOIP_POPOUT_POPOVER_PORTAL_ID,
          ) != null
        );
      } catch (e) {
        return !1;
      }
    }
    function de() {
      (o("WAWebVoipUiPopoutWindowLoadable")
        .requireBundle()
        .catch(function (e) {
          o("WALogger")
            .WARN(
              v ||
                (v = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] auto-popout: preloading the popout window bundle failed",
                ])),
            )
            .catching(r("getErrorSafe")(e));
        }),
        o("WAWebRobotoVariableFontLoadable")
          .requireRobotoVariableFont()
          .catch(function (e) {
            o("WALogger")
              .WARN(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "[voip] auto-popout: preloading the Roboto font failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }));
    }
    function me() {
      var e, t;
      return (e =
        (t = navigator.userActivation) == null ? void 0 : t.isActive) != null
        ? e
        : !0;
    }
    ((l.preOpenPopoutWindow = w),
      (l.finalizeAutoPopout = A),
      (l.closePendingAutoPopout = W),
      (l.hasPendingAutoPopout = q),
      (l.getPendingAutoPopoutId = U),
      (l.endAutoPopoutCall = K),
      (l.awaitAutoPopoutReadyOrAbandon = X),
      (l.maybePreOpenAutoPopoutForVideoCall = Y),
      (l.maybePreOpenAutoPopoutForOutgoingCall = J),
      (l.handOffPendingAutoPopoutToOutgoingCall = Z),
      (l.maybePreOpenAutoPopoutForAcceptedCall = ee),
      (l.finalizePreOpenedAutoPopout = te),
      (l.closePreOpenedAutoPopoutOnAbort = ne),
      (l.renderPopoutOpeningPlaceholder = re),
      (l.renderCompactCallingPanel = oe),
      (l.closePreOpenedAutoPopout = ae));
  },
  98,
);
