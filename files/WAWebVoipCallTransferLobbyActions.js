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
      R = null,
      L = !1,
      E = null,
      k = 6e4;
    function I(e) {
      N(e, !1) != null && r("WAWebPipController").openVoipUiPiPForOutgoing();
    }
    function T(t) {
      var n;
      if (!o("WAWebVoipCallBlockedModals").showNoConnectionModalIfOffline()) {
        var a = N(t, !0);
        if (a != null) {
          (n = E) == null || n.stop();
          var i = { entryPoint: a, isAbandoned: !1 };
          R = i;
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
              (R = null),
              F(),
              o(
                "WAWebVoipHandleCallTransferFailed",
              ).showCallTransferCouldNotConnectToast());
            return;
          }
          D(i).catch(function (e) {
            (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: direct join failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-transfer-lobby-direct-join-failed"),
              R === i &&
                ((R = null),
                A(a.rootCallId),
                o(
                  "WAWebVoipHandleCallTransferFailed",
                ).showCallTransferCouldNotConnectToast()));
          });
        }
      }
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.entryPoint.rootCallId,
            n = e.entryPoint.isVideoCall ? !(yield $()) : !0;
          if (e.isAbandoned) {
            var a;
            ((R = null), (a = E) == null || a.stop());
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
              (R = null),
              A(t));
            return;
          }
          if (!z()) {
            (o("WALogger")
              .WARN(
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: another call started before the direct join",
                  ])),
              )
              .sendLogs("voip-transfer-lobby-direct-join-preempted"),
              (R = null),
              A(t),
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
            yield W(i, { isMicMuted: !1, isVideoMuted: n }));
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        P.apply(this, arguments)
      );
    }
    function N(e, t) {
      if (
        r("WAWebCallCollection").activeCall != null ||
        r("WAWebCallCollection").pendingOutgoingCall != null ||
        r("WAWebCallCollection").pendingCallLink != null ||
        r("WAWebCallCollection").pendingCallTransferLobby != null ||
        R != null
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
      if (E != null && E.rootCallId !== e.rootCallId)
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
          O(),
          r("WAWebCallCollection").setPendingCallTransferLobby({
            entryPoint: n,
            isJoining: t,
          }),
          n);
    }
    function M(e) {
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
          (t = E) == null || t.stop(),
          r("WAWebCallCollection").setPendingCallTransferLobby(
            babelHelpers.extends({}, n, { isJoining: !0 }),
          ),
          (R = { entryPoint: a, isAbandoned: !1 }),
          W(a, e));
      }
    }
    function w() {
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
        (e.isJoining && (R != null && (R.isAbandoned = !0), U(t)),
          !V(t) && F());
      }
    }
    function A(e) {
      var t;
      ((t = r("WAWebCallCollection").pendingCallTransferLobby) == null
        ? void 0
        : t.entryPoint.rootCallId) === e && F();
    }
    function F() {
      (r("WAWebCallCollection").setPendingCallTransferLobby(null),
        r("WAWebCallCollection").activeCall == null &&
          r("WAWebPipController").closePiP());
    }
    function O() {
      L ||
        ((L = !0),
        o(
          "WAWebVoipCallTransferEntryPointStore",
        ).WAWebVoipCallTransferEntryPointStore.on("change", B));
    }
    function B() {
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
            F());
          return;
        }
        t !== e.entryPoint &&
          r("WAWebCallCollection").setPendingCallTransferLobby(
            babelHelpers.extends({}, e, { entryPoint: t }),
          );
      }
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              isMicMuted: a,
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
          var s = ((n = R) == null ? void 0 : n.isAbandoned) === !0;
          if (((R = null), !l)) {
            var u;
            if (
              (((u = r("WAWebCallCollection").pendingCallTransferLobby) == null
                ? void 0
                : u.entryPoint) === e && F(),
              s)
            ) {
              var c;
              (c = E) == null || c.stop();
            } else
              o(
                "WAWebVoipHandleCallTransferFailed",
              ).showCallTransferCouldNotConnectToast();
            return;
          }
          s && U(e.rootCallId);
        })),
        q.apply(this, arguments)
      );
    }
    function U(e) {
      var t;
      if (((t = E) == null || t.stop(), V(e))) {
        H(e);
        return;
      }
      R == null && z() && G();
      var n = o("WAWebVoipEventConstants").getChangeEvent(
          o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        a = function () {
          (window.clearTimeout(l),
            r("WAWebCallCollection").off(n, i),
            (E = null));
        },
        i = function () {
          V(e) && (a(), H(e));
        },
        l = window.setTimeout(function () {
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: stopped waiting for the abandoned transfer",
              ])),
          ),
            a());
        }, k);
      (r("WAWebCallCollection").on(n, i), (E = { rootCallId: e, stop: a }));
    }
    function V(e) {
      var t;
      return (
        o("WAWebVoipTransferredCallRegistry").getLiveTransferredCallRootId(
          (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.id,
        ) === e
      );
    }
    function H(e) {
      return j(function () {
        return V(e);
      });
    }
    function G() {
      return j(z);
    }
    function z() {
      return (
        r("WAWebCallCollection").activeCall == null &&
        r("WAWebCallCollection").pendingOutgoingCall == null &&
        r("WAWebCallCollection").pendingCallLink == null
      );
    }
    function j(e) {
      return K.apply(this, arguments);
    }
    function K() {
      return (
        (K = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (!e()) {
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
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
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: ending the transferred call failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-transfer-lobby-end-call-failed");
          }
        })),
        K.apply(this, arguments)
      );
    }
    ((l.openCallTransferLobby = I),
      (l.joinCallTransferWithoutLobby = T),
      (l.joinFromCallTransferLobby = M),
      (l.leaveCallTransferLobby = w));
  },
  98,
);
