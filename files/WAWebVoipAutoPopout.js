__d(
  "WAWebVoipAutoPopout",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      E = L || (L = o("react")),
      k =
        "<!DOCTYPE html><html><head><style>html,body{margin:0;height:100%;background:#111b21}</style></head><body></body></html>",
      I = 9e4,
      T = 5e3,
      D = 1e4,
      x = 500,
      $ = 1e4,
      P = null,
      N = 0,
      M = null,
      w = null;
    function A(t, n) {
      if (!_e())
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
        P != null
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
      var r = se(t);
      if (r == null) return !1;
      pe();
      var a = window.setTimeout(function () {
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[voip] preOpenPopout cleanup timeout, closing pending window",
            ])),
        ),
          q());
      }, I);
      (Q(), N++);
      var i = N,
        l = window.setInterval(function () {
          r.popoutWindow.closed &&
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] pre-opened popout closed before the call reached it",
                ])),
            ),
            q(i));
        }, x);
      return (
        (P = {
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
    function F() {
      var e,
        t = P;
      if (t != null) {
        ((P = null), W(t));
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
        ue(n, a);
      }
    }
    function O() {
      var e = P;
      e != null && ((P = null), W(e), B(e.opened));
      var t = M;
      t != null && ((M = null), B(t));
    }
    function B(e) {
      (e.popoutWindow.closed || e.popoutWindow.close(),
        o(
          "WAWebVoipUiPopoutWindowPortalContainer.react",
        ).setIsPopoutWindowOpening(!1));
    }
    function W(e) {
      (window.clearTimeout(e.cleanupTimeoutId),
        window.clearInterval(e.closedCheckIntervalId));
    }
    function q(e) {
      var t;
      (e != null && ((t = P) == null ? void 0 : t.id) !== e) ||
        (O(), Q(), o("WAWebVoipPopoutWindowState").setIsAutoPopoutPending(!1));
    }
    function U() {
      return P != null;
    }
    function V() {
      var e;
      return (e = P) == null ? void 0 : e.id;
    }
    function H(e) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if (!(t == null || t.type !== "web")) {
            var n = e.isInCallLinkPreview();
            yield t.endCall(
              o("WAWebVoipSignalingEnums").EndCallReason.Self,
              !n,
            );
          }
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      H(e).catch(function (e) {
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
    var j = null,
      K = null;
    function Q() {
      (j != null && (window.clearTimeout(j), (j = null)),
        K == null || K(),
        (K = null));
    }
    function X() {
      var e,
        t = (e = P) == null ? void 0 : e.cancelStart;
      (O(),
        Q(),
        r("WAWebPipController").closePiP(),
        (j = window.setTimeout(function () {
          (Q(), o("WAWebVoipPopoutWindowState").setIsAutoPopoutPending(!1));
        }, D)));
      var n = r("WAWebCallCollection").activeCall;
      if (n != null) {
        z(n);
        return;
      }
      if ((t == null ? void 0 : t()) !== !1) {
        Y();
        return;
      }
      var a = o("WAWebVoipEventConstants").getChangeEvent(
          o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        i = function () {
          var e = r("WAWebCallCollection").activeCall;
          (e == null ? void 0 : e.isCallLink) === !0 &&
            (K == null || K(),
            (K = null),
            r("WAWebPipController").closePiP(),
            z(e));
        };
      (r("WAWebCallCollection").on(a, i),
        (K = function () {
          r("WAWebCallCollection").off(a, i);
        }));
    }
    function Y() {
      var e = o("WAWebVoipEventConstants").getChangeEvent(
          o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        t = function () {
          r("WAWebCallCollection").activeCall != null &&
            (Q(), o("WAWebVoipPopoutWindowState").setIsAutoPopoutPending(!1));
        };
      (r("WAWebCallCollection").on(e, t),
        (K = function () {
          r("WAWebCallCollection").off(e, t);
        }));
    }
    function J() {
      var e = P;
      return e == null
        ? (R || (R = n("Promise"))).resolve()
        : new (R || (R = n("Promise")))(function (t) {
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
                  T,
                ),
                  P === e && q(),
                  r());
              }, T);
            e.opened.documentReadyPromise.then(r);
          });
    }
    function Z(e) {
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
          : A(e.isGroupCall, e.cancelStart)
            ? V()
            : null;
    }
    function ee(e, t) {
      if (
        r("WAWebCallCollection").activeCall != null ||
        r("WAWebCallCollection").pendingOutgoingCall != null
      )
        return null;
      var n = Z({
        isGroupCall: t,
        isVideo: e,
        needsCamera: e,
        needsMicrophone: !0,
      });
      return (n != null && (w = n), n);
    }
    function te(e) {
      var t = V();
      e && t != null && t === w ? F() : q();
    }
    function ne(e, t, n) {
      return Z({
        isGroupCall: t,
        isVideo: e,
        needsCamera: e && !n,
        needsMicrophone: !0,
      });
    }
    function re(e) {
      e != null && V() === e && F();
    }
    function oe(e, t) {
      e != null &&
        t.addEventListener(
          "abort",
          function () {
            return le(e);
          },
          { once: !0 },
        );
    }
    function ae() {
      return E.jsx(r("WAWebVoipPopoutOpeningPlaceholder.react"), {});
    }
    ae.displayName = ae.name + " [from " + i.id + "]";
    function ie(e) {
      return E.jsx(
        r("WAWebVoipCompactCallingPanel.react"),
        babelHelpers.extends({}, e),
      );
    }
    ie.displayName = ie.name + " [from " + i.id + "]";
    function le(e) {
      e != null && q(e);
    }
    function se(e) {
      var t;
      o(
        "WAWebVoipUiPopoutWindowPortalContainer.react",
      ).setIsPopoutWindowOpening(!0);
      var r = !!((t = navigator.serviceWorker) != null && t.controller),
        a = o("WAWebVoipUiManager").getPopoutWindowUrl(r);
      o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
            "[voip] Opening auto-popout window. SW enabled: ",
            ", url: ",
            "",
          ])),
        String(r),
        a,
      );
      var i = o("WAWebVoipUiManager").openPopoutWindow(a, e);
      return i == null
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
            documentReadyPromise: new (R || (R = n("Promise")))(function (e) {
              o("WAWebVoipUiManager").waitForPopoutDocumentReady(i, {
                bootstrapHtml: k,
                hasSW: r,
                onReady: e,
              });
            }),
            popoutWindow: i,
          });
    }
    function ue(e, t) {
      ((M = e),
        e.documentReadyPromise
          .then(function () {
            if (M === e) {
              M = null;
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
              ce(n);
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
              B(e));
          }));
    }
    function ce(e) {
      o("WAWebVoipUiPopoutWindowLoadable")
        .requireBundle()
        .then(
          function () {
            return de(e);
          },
          function () {
            return de(e);
          },
        );
    }
    function de(e) {
      window.setTimeout(function () {
        o("WAWebVoipPopoutWindowState").getPopoutWindow() !== e ||
          !o(
            "WAWebVoipUiPopoutWindowPortalContainer.react",
          ).getIsCallActiveInPopoutWindow() ||
          me(e) ||
          (o("WALogger")
            .ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "[voip] auto-popout UI not attached within ",
                  "ms; moving the call back to the main window",
                ])),
              $,
            )
            .sendLogs("voip-auto-popout-ui-not-attached"),
          o(
            "WAWebVoipUiPopoutWindowPortalContainer.react",
          ).WAWebVoipUiPopoutWindowEventEmitter.trigger("closePopoutWindow", {
            callEnded: !1,
          }));
      }, $);
    }
    function me(e) {
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
    function pe() {
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
    function _e() {
      var e, t;
      return (e =
        (t = navigator.userActivation) == null ? void 0 : t.isActive) != null
        ? e
        : !0;
    }
    ((l.preOpenPopoutWindow = A),
      (l.finalizeAutoPopout = F),
      (l.closePendingAutoPopout = q),
      (l.hasPendingAutoPopout = U),
      (l.getPendingAutoPopoutId = V),
      (l.endAutoPopoutCall = X),
      (l.awaitAutoPopoutReadyOrAbandon = J),
      (l.maybePreOpenAutoPopoutForVideoCall = Z),
      (l.maybePreOpenAutoPopoutForOutgoingCall = ee),
      (l.handOffPendingAutoPopoutToOutgoingCall = te),
      (l.maybePreOpenAutoPopoutForAcceptedCall = ne),
      (l.finalizePreOpenedAutoPopout = re),
      (l.closePreOpenedAutoPopoutOnAbort = oe),
      (l.renderPopoutOpeningPlaceholder = ae),
      (l.renderCompactCallingPanel = ie),
      (l.closePreOpenedAutoPopout = le));
  },
  98,
);
