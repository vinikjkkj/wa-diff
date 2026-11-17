__d(
  "WAWebVoipCallTransferLobbyActions",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebCallCollection",
    "WAWebPipController",
    "WAWebVoipCallBlockedModals",
    "WAWebVoipCallTransferEntryPointStore",
    "WAWebVoipEventConstants",
    "WAWebVoipHandleCallTransferFailed",
    "WAWebVoipLocalVideoPolicy",
    "WAWebVoipSignalingEnums",
    "WAWebVoipStackInterface",
    "WAWebVoipTransferCall",
    "WAWebVoipTransferredCallRegistry",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
      I = null,
      T = !1,
      D = null,
      x = 6e4;
    function $(e) {
      F(e, !1) != null && r("WAWebPipController").openVoipUiPiPForOutgoing();
    }
    function P(t) {
      var n;
      if (!o("WAWebVoipCallBlockedModals").showNoConnectionModalIfOffline()) {
        var a = F(t, !0);
        if (a != null) {
          (n = D) == null || n.stop();
          var i = { entryPoint: a, isAbandoned: !1 };
          I = i;
          try {
            r("WAWebPipController").openVoipUiPiPForOutgoing();
          } catch (t) {
            (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: direct join failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("voip-transfer-lobby-direct-join-failed"),
              (I = null),
              q(),
              o(
                "WAWebVoipHandleCallTransferFailed",
              ).showCallTransferCouldNotConnectToast());
            return;
          }
          N(i).catch(function (e) {
            (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: direct join failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-transfer-lobby-direct-join-failed"),
              I === i &&
                ((I = null),
                W(a.rootCallId),
                o(
                  "WAWebVoipHandleCallTransferFailed",
                ).showCallTransferCouldNotConnectToast()));
          });
        }
      }
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.entryPoint.rootCallId,
            n = e.entryPoint.isVideoCall ? !(yield w()) : !0;
          if (e.isAbandoned) {
            var a;
            ((I = null), (a = D) == null || a.stop());
            return;
          }
          var i = o(
            "WAWebVoipCallTransferEntryPointStore",
          ).WAWebVoipCallTransferEntryPointStore.getForRootCallId(t);
          if (i == null) {
            (o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: transferLobby: entry point removed before the direct join started",
                ])),
            ),
              (I = null),
              W(t));
            return;
          }
          if (!J()) {
            (o("WALogger")
              .WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: another call started before the direct join",
                  ])),
              )
              .sendLogs("voip-transfer-lobby-direct-join-preempted"),
              (I = null),
              W(t),
              o(
                "WAWebVoipHandleCallTransferFailed",
              ).showCallTransferCouldNotConnectToast());
            return;
          }
          var l = r("WAWebCallCollection").pendingCallTransferLobby;
          (l != null &&
            l.entryPoint === e.entryPoint &&
            i !== l.entryPoint &&
            r("WAWebCallCollection").setPendingCallTransferLobby(
              babelHelpers.extends({}, l, { entryPoint: i }),
            ),
            (e.entryPoint = i),
            yield H(i, { isMicMuted: !1, isVideoMuted: n }));
        })),
        M.apply(this, arguments)
      );
    }
    function w() {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            if (!o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed())
              return !1;
            if (
              o("WAWebABProps").getABPropConfigValue(
                "enable_web_voip_virtual_video_capture_driver",
              ) === !0
            )
              return !0;
            var e = navigator.mediaDevices;
            if ((e == null ? void 0 : e.enumerateDevices) == null) return !1;
            var t = yield o(
              "WAWebAudioDeviceManager",
            ).coalescedEnumerateDevices(e);
            return t.some(function (e) {
              return e.kind === "videoinput";
            });
          } catch (e) {
            return (
              o("WALogger")
                .WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: transferLobby: camera probe failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-transfer-lobby-camera-probe-failed"),
              !1
            );
          }
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t) {
      if (
        r("WAWebCallCollection").activeCall != null ||
        r("WAWebCallCollection").pendingOutgoingCall != null ||
        r("WAWebCallCollection").pendingCallLink != null ||
        r("WAWebCallCollection").pendingCallTransferLobby != null ||
        I != null
      )
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: a call is already active or pending, ignoring",
              ])),
          ),
          null
        );
      if (D != null && D.rootCallId !== e.rootCallId)
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: still ending an abandoned transfer, ignoring",
              ])),
          ),
          null
        );
      var n = o(
        "WAWebVoipCallTransferEntryPointStore",
      ).WAWebVoipCallTransferEntryPointStore.getForRootCallId(e.rootCallId);
      return n == null
        ? (o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: entry point removed before the lobby opened",
              ])),
          ),
          o(
            "WAWebVoipHandleCallTransferFailed",
          ).showCallTransferCouldNotConnectToast(),
          null)
        : (o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: open rootCallId=",
                "",
              ])),
            n.rootCallId,
          ),
          U(),
          r("WAWebCallCollection").setPendingCallTransferLobby({
            entryPoint: n,
            isJoining: t,
          }),
          n);
    }
    function O(e) {
      var t,
        n = r("WAWebCallCollection").pendingCallTransferLobby;
      if (
        !(n == null || n.isJoining) &&
        !o("WAWebVoipCallBlockedModals").showNoConnectionModalIfOffline()
      ) {
        var a = n.entryPoint;
        (o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "voip: transferLobby: join rootCallId=",
              "",
            ])),
          a.rootCallId,
        ),
          (t = D) == null || t.stop(),
          r("WAWebCallCollection").setPendingCallTransferLobby(
            babelHelpers.extends({}, n, { isJoining: !0 }),
          ),
          (I = { entryPoint: a, isAbandoned: !1 }),
          H(a, e));
      }
    }
    function B() {
      var e = r("WAWebCallCollection").pendingCallTransferLobby;
      if (e != null) {
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: transferLobby: leave isJoining=",
              "",
            ])),
          String(e.isJoining),
        );
        var t = e.entryPoint.rootCallId;
        (e.isJoining && (I != null && (I.isAbandoned = !0), K(t)),
          !Q(t) && q());
      }
    }
    function W(e) {
      var t;
      ((t = r("WAWebCallCollection").pendingCallTransferLobby) == null
        ? void 0
        : t.entryPoint.rootCallId) === e && q();
    }
    function q() {
      (r("WAWebCallCollection").setPendingCallTransferLobby(null),
        r("WAWebCallCollection").activeCall == null &&
          r("WAWebPipController").closePiP());
    }
    function U() {
      T ||
        ((T = !0),
        o(
          "WAWebVoipCallTransferEntryPointStore",
        ).WAWebVoipCallTransferEntryPointStore.on("change", V));
    }
    function V() {
      var e = r("WAWebCallCollection").pendingCallTransferLobby;
      if (!(e == null || e.isJoining)) {
        var t = o(
          "WAWebVoipCallTransferEntryPointStore",
        ).WAWebVoipCallTransferEntryPointStore.getForRootCallId(
          e.entryPoint.rootCallId,
        );
        if (t == null) {
          (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: entry point removed, closing",
              ])),
          ),
            q());
          return;
        }
        t !== e.entryPoint &&
          r("WAWebCallCollection").setPendingCallTransferLobby(
            babelHelpers.extends({}, e, { entryPoint: t }),
          );
      }
    }
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            a = t.isMicMuted,
            i = t.isVideoMuted,
            l = !1;
          try {
            l = yield o(
              "WAWebVoipTransferCall",
            ).transferWAWebVoipCallToThisDevice({
              hasVideo: e.isVideoCall,
              isCameraOff: i,
              peerActiveDevice: e.peerActiveDeviceJid,
              rootCallCreator: e.rootCallCreatorJid,
              rootCallId: e.rootCallId,
            });
          } catch (e) {
            o("WALogger")
              .ERROR(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: transfer threw",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-transfer-lobby-start-failed");
          }
          var s = ((n = I) == null ? void 0 : n.isAbandoned) === !0;
          if (((I = null), !l)) {
            var u;
            if (
              (((u = r("WAWebCallCollection").pendingCallTransferLobby) == null
                ? void 0
                : u.entryPoint) === e && q(),
              s)
            ) {
              var c;
              (c = D) == null || c.stop();
            } else
              o(
                "WAWebVoipHandleCallTransferFailed",
              ).showCallTransferCouldNotConnectToast();
            return;
          }
          if (s) {
            K(e.rootCallId);
            return;
          }
          a && (yield z(e.rootCallId));
        })),
        G.apply(this, arguments)
      );
    }
    function z(e) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (r("WAWebCallCollection").activeCall != null && !Q(e)) {
              o("WALogger")
                .WARN(
                  v ||
                    (v = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: transferLobby: another call is active, not muting it",
                    ])),
                )
                .sendLogs("voip-transfer-lobby-mute-failed");
              return;
            }
            if ((t == null ? void 0 : t.type) !== "web") {
              o("WALogger")
                .WARN(
                  S ||
                    (S = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: transferLobby: cannot mute the transferred call on stack ",
                      "",
                    ])),
                  String(t == null ? void 0 : t.type),
                )
                .sendLogs("voip-transfer-lobby-mute-failed");
              return;
            }
            var n = yield t.setCallMute(!0);
            n !== 0 &&
              o("WALogger")
                .WARN(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: transferLobby: muting the transferred call failed with status: ",
                      "",
                    ])),
                  n,
                )
                .sendLogs("voip-transfer-lobby-mute-failed");
          } catch (e) {
            o("WALogger")
              .WARN(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: muting the transferred call failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-transfer-lobby-mute-failed");
          }
        })),
        j.apply(this, arguments)
      );
    }
    function K(e) {
      var t;
      if (((t = D) == null || t.stop(), Q(e))) {
        X(e);
        return;
      }
      I == null && J() && Y();
      var n = o("WAWebVoipEventConstants").getChangeEvent(
          o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        a = function () {
          (window.clearTimeout(l),
            r("WAWebCallCollection").off(n, i),
            (D = null));
        },
        i = function () {
          Q(e) && (a(), X(e));
        },
        l = window.setTimeout(function () {
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: stopped waiting for the abandoned transfer",
              ])),
          ),
            a());
        }, x);
      (r("WAWebCallCollection").on(n, i), (D = { rootCallId: e, stop: a }));
    }
    function Q(e) {
      var t;
      return (
        o("WAWebVoipTransferredCallRegistry").getLiveTransferredCallRootId(
          (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.id,
        ) === e
      );
    }
    function X(e) {
      return Z(function () {
        return Q(e);
      });
    }
    function Y() {
      return Z(J);
    }
    function J() {
      return (
        r("WAWebCallCollection").activeCall == null &&
        r("WAWebCallCollection").pendingOutgoingCall == null &&
        r("WAWebCallCollection").pendingCallLink == null
      );
    }
    function Z(e) {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (!e()) {
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: the stack is no longer on the transfer, not ending",
                  ])),
              );
              return;
            }
            yield t == null
              ? void 0
              : t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Self, !0);
          } catch (e) {
            o("WALogger")
              .ERROR(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: ending the transferred call failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-transfer-lobby-end-call-failed");
          }
        })),
        ee.apply(this, arguments)
      );
    }
    ((l.openCallTransferLobby = $),
      (l.joinCallTransferWithoutLobby = P),
      (l.joinFromCallTransferLobby = O),
      (l.leaveCallTransferLobby = B));
  },
  98,
);
