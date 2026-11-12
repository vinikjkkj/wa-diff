__d(
  "WAWebVoipCallTransferLobbyActions",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebPipController",
    "WAWebVoipCallTransferEntryPointStore",
    "WAWebVoipEventConstants",
    "WAWebVoipHandleCallTransferFailed",
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
      S = null,
      R = !1,
      L = null,
      E = 6e4;
    function k(t) {
      if (
        r("WAWebCallCollection").activeCall != null ||
        r("WAWebCallCollection").pendingOutgoingCall != null ||
        r("WAWebCallCollection").pendingCallLink != null ||
        r("WAWebCallCollection").pendingCallTransferLobby != null ||
        S != null
      ) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: transferLobby: a call is already active or pending, ignoring",
            ])),
        );
        return;
      }
      if (L != null && L.rootCallId !== t.rootCallId) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: transferLobby: still ending an abandoned transfer, ignoring",
            ])),
        );
        return;
      }
      var n = o(
        "WAWebVoipCallTransferEntryPointStore",
      ).WAWebVoipCallTransferEntryPointStore.getForRootCallId(t.rootCallId);
      if (n == null) {
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "voip: transferLobby: entry point removed before the lobby opened",
            ])),
        ),
          o(
            "WAWebVoipHandleCallTransferFailed",
          ).showCallTransferCouldNotConnectToast());
        return;
      }
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "voip: transferLobby: open rootCallId=",
            "",
          ])),
        n.rootCallId,
      ),
        x(),
        r("WAWebCallCollection").setPendingCallTransferLobby({
          entryPoint: n,
          isJoining: !1,
        }),
        r("WAWebPipController").openVoipUiPiPForOutgoing());
    }
    function I(e) {
      var t,
        n = r("WAWebCallCollection").pendingCallTransferLobby;
      if (!(n == null || n.isJoining)) {
        var a = n.entryPoint;
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "voip: transferLobby: join rootCallId=",
              "",
            ])),
          a.rootCallId,
        ),
          (t = L) == null || t.stop(),
          r("WAWebCallCollection").setPendingCallTransferLobby(
            babelHelpers.extends({}, n, { isJoining: !0 }),
          ),
          (S = { entryPoint: a, isAbandoned: !1 }),
          P(a, e));
      }
    }
    function T() {
      var e = r("WAWebCallCollection").pendingCallTransferLobby;
      if (e != null) {
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "voip: transferLobby: leave isJoining=",
              "",
            ])),
          String(e.isJoining),
        );
        var t = e.entryPoint.rootCallId;
        (e.isJoining && (S != null && (S.isAbandoned = !0), A(t)),
          !F(t) && D());
      }
    }
    function D() {
      (r("WAWebCallCollection").setPendingCallTransferLobby(null),
        r("WAWebCallCollection").activeCall == null &&
          r("WAWebPipController").closePiP());
    }
    function x() {
      R ||
        ((R = !0),
        o(
          "WAWebVoipCallTransferEntryPointStore",
        ).WAWebVoipCallTransferEntryPointStore.on("change", $));
    }
    function $() {
      var e = r("WAWebCallCollection").pendingCallTransferLobby;
      if (!(e == null || e.isJoining)) {
        var t = o(
          "WAWebVoipCallTransferEntryPointStore",
        ).WAWebVoipCallTransferEntryPointStore.getForRootCallId(
          e.entryPoint.rootCallId,
        );
        if (t == null) {
          (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: entry point removed, closing",
              ])),
          ),
            D());
          return;
        }
        t !== e.entryPoint &&
          r("WAWebCallCollection").setPendingCallTransferLobby(
            babelHelpers.extends({}, e, { entryPoint: t }),
          );
      }
    }
    function P(e, t) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: transfer threw",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-transfer-lobby-start-failed");
          }
          var s = ((n = S) == null ? void 0 : n.isAbandoned) === !0;
          if (((S = null), !l)) {
            var u;
            if (
              (((u = r("WAWebCallCollection").pendingCallTransferLobby) == null
                ? void 0
                : u.entryPoint) === e && D(),
              s)
            ) {
              var c;
              (c = L) == null || c.stop();
            } else
              o(
                "WAWebVoipHandleCallTransferFailed",
              ).showCallTransferCouldNotConnectToast();
            return;
          }
          if (s) {
            A(e.rootCallId);
            return;
          }
          a && (yield M(e.rootCallId));
        })),
        N.apply(this, arguments)
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (r("WAWebCallCollection").activeCall != null && !F(e)) {
              o("WALogger")
                .WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: transferLobby: another call is active, not muting it",
                    ])),
                )
                .sendLogs("voip-transfer-lobby-mute-failed");
              return;
            }
            if ((t == null ? void 0 : t.type) !== "web") {
              o("WALogger")
                .WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
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
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: transferLobby: muting the transferred call failed with status: ",
                      "",
                    ])),
                  n,
                )
                .sendLogs("voip-transfer-lobby-mute-failed");
          } catch (e) {
            o("WALogger")
              .WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: muting the transferred call failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-transfer-lobby-mute-failed");
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      var t;
      if (((t = L) == null || t.stop(), F(e))) {
        O(e);
        return;
      }
      S == null && W() && B();
      var n = o("WAWebVoipEventConstants").getChangeEvent(
          o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        a = function () {
          (window.clearTimeout(l),
            r("WAWebCallCollection").off(n, i),
            (L = null));
        },
        i = function () {
          F(e) && (a(), O(e));
        },
        l = window.setTimeout(function () {
          (o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: stopped waiting for the abandoned transfer",
              ])),
          ),
            a());
        }, E);
      (r("WAWebCallCollection").on(n, i), (L = { rootCallId: e, stop: a }));
    }
    function F(e) {
      var t;
      return (
        o("WAWebVoipTransferredCallRegistry").getLiveTransferredCallRootId(
          (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.id,
        ) === e
      );
    }
    function O(e) {
      return q(function () {
        return F(e);
      });
    }
    function B() {
      return q(W);
    }
    function W() {
      return (
        r("WAWebCallCollection").activeCall == null &&
        r("WAWebCallCollection").pendingOutgoingCall == null &&
        r("WAWebCallCollection").pendingCallLink == null
      );
    }
    function q(e) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (!e()) {
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: ending the transferred call failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-transfer-lobby-end-call-failed");
          }
        })),
        U.apply(this, arguments)
      );
    }
    ((l.openCallTransferLobby = k),
      (l.joinFromCallTransferLobby = I),
      (l.leaveCallTransferLobby = T));
  },
  98,
);
