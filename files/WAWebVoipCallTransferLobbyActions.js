__d(
  "WAWebVoipCallTransferLobbyActions",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebAudioDeviceManager",
    "WAWebCallCollection",
    "WAWebPipController",
    "WAWebUserPrefsVoip",
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
    var e = ["videoDeviceId"],
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
      L = null,
      E = !1,
      k = null,
      I = 6e4;
    function T(e) {
      M(e, !1) != null && r("WAWebPipController").openVoipUiPiPForOutgoing();
    }
    function D(e) {
      var t;
      if (!o("WAWebVoipCallBlockedModals").showNoConnectionModalIfOffline()) {
        var n = M(e, !0);
        if (n != null) {
          (t = k) == null || t.stop();
          var a = { entryPoint: n, isAbandoned: !1 };
          L = a;
          try {
            r("WAWebPipController").openVoipUiPiPForOutgoing();
          } catch (e) {
            (o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: direct join failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-transfer-lobby-direct-join-failed"),
              (L = null),
              O(),
              o(
                "WAWebVoipHandleCallTransferFailed",
              ).showCallTransferCouldNotConnectToast());
            return;
          }
          x(a).catch(function (e) {
            (o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: direct join failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-transfer-lobby-direct-join-failed"),
              L === a &&
                ((L = null),
                F(n.rootCallId),
                o(
                  "WAWebVoipHandleCallTransferFailed",
                ).showCallTransferCouldNotConnectToast()));
          });
        }
      }
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.entryPoint.rootCallId,
            n = e.entryPoint.isVideoCall ? !(yield P()) : !0;
          if (e.isAbandoned) {
            var a;
            ((L = null), (a = k) == null || a.stop());
            return;
          }
          var i = o(
            "WAWebVoipCallTransferEntryPointStore",
          ).WAWebVoipCallTransferEntryPointStore.getForRootCallId(t);
          if (i == null) {
            (o("WALogger").LOG(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: transferLobby: entry point removed before the direct join started",
                ])),
            ),
              (L = null),
              F(t));
            return;
          }
          if (!j()) {
            (o("WALogger")
              .WARN(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: another call started before the direct join",
                  ])),
              )
              .sendLogs("voip-transfer-lobby-direct-join-preempted"),
              (L = null),
              F(t),
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
            yield q(i, { isMicMuted: !1, isVideoMuted: n }));
        })),
        $.apply(this, arguments)
      );
    }
    function P() {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: transferLobby: camera probe failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("voip-transfer-lobby-camera-probe-failed"),
              !1
            );
          }
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t) {
      if (
        r("WAWebCallCollection").activeCall != null ||
        r("WAWebCallCollection").pendingOutgoingCall != null ||
        r("WAWebCallCollection").pendingCallLink != null ||
        r("WAWebCallCollection").pendingCallTransferLobby != null ||
        L != null
      )
        return (
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: a call is already active or pending, ignoring",
              ])),
          ),
          null
        );
      if (k != null && k.rootCallId !== e.rootCallId)
        return (
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
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
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: entry point removed before the lobby opened",
              ])),
          ),
          o(
            "WAWebVoipHandleCallTransferFailed",
          ).showCallTransferCouldNotConnectToast(),
          null)
        : (o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: open rootCallId=",
                "",
              ])),
            n.rootCallId,
          ),
          B(),
          r("WAWebCallCollection").setPendingCallTransferLobby({
            entryPoint: n,
            isJoining: t,
          }),
          n);
    }
    function w(t) {
      var n,
        a = t.videoDeviceId,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = r("WAWebCallCollection").pendingCallTransferLobby;
      if (
        !(l == null || l.isJoining) &&
        !o("WAWebVoipCallBlockedModals").showNoConnectionModalIfOffline()
      ) {
        var s = l.entryPoint;
        (o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "voip: transferLobby: join rootCallId=",
              "",
            ])),
          s.rootCallId,
        ),
          (n = k) == null || n.stop(),
          r("WAWebCallCollection").setPendingCallTransferLobby(
            babelHelpers.extends({}, l, { isJoining: !0 }),
          ),
          (L = { entryPoint: s, isAbandoned: !1 }),
          a != null &&
            (o("WAWebUserPrefsVoip").setLandingPageVideoDeviceId(a),
            o("WAWebUserPrefsVoip").setSelectedVideoInputDevice(a)),
          q(s, i));
      }
    }
    function A() {
      var e = r("WAWebCallCollection").pendingCallTransferLobby;
      if (e != null) {
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "voip: transferLobby: leave isJoining=",
              "",
            ])),
          String(e.isJoining),
        );
        var t = e.entryPoint.rootCallId;
        (e.isJoining && (L != null && (L.isAbandoned = !0), V(t)),
          !H(t) && O());
      }
    }
    function F(e) {
      var t;
      ((t = r("WAWebCallCollection").pendingCallTransferLobby) == null
        ? void 0
        : t.entryPoint.rootCallId) === e && O();
    }
    function O() {
      (r("WAWebCallCollection").setPendingCallTransferLobby(null),
        r("WAWebCallCollection").activeCall == null &&
          r("WAWebPipController").closePiP());
    }
    function B() {
      E ||
        ((E = !0),
        o(
          "WAWebVoipCallTransferEntryPointStore",
        ).WAWebVoipCallTransferEntryPointStore.on("change", W));
    }
    function W() {
      var e = r("WAWebCallCollection").pendingCallTransferLobby;
      if (!(e == null || e.isJoining)) {
        var t = o(
          "WAWebVoipCallTransferEntryPointStore",
        ).WAWebVoipCallTransferEntryPointStore.getForRootCallId(
          e.entryPoint.rootCallId,
        );
        if (t == null) {
          (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: entry point removed, closing",
              ])),
          ),
            O());
          return;
        }
        t !== e.entryPoint &&
          r("WAWebCallCollection").setPendingCallTransferLobby(
            babelHelpers.extends({}, e, { entryPoint: t }),
          );
      }
    }
    function q(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: transfer threw",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-transfer-lobby-start-failed");
          }
          var s = ((n = L) == null ? void 0 : n.isAbandoned) === !0;
          if (((L = null), !l)) {
            var u;
            if (
              (((u = r("WAWebCallCollection").pendingCallTransferLobby) == null
                ? void 0
                : u.entryPoint) === e && O(),
              s)
            ) {
              var c;
              (c = k) == null || c.stop();
            } else
              o(
                "WAWebVoipHandleCallTransferFailed",
              ).showCallTransferCouldNotConnectToast();
            return;
          }
          s && V(e.rootCallId);
        })),
        U.apply(this, arguments)
      );
    }
    function V(e) {
      var t;
      if (((t = k) == null || t.stop(), H(e))) {
        G(e);
        return;
      }
      L == null && j() && z();
      var n = o("WAWebVoipEventConstants").getChangeEvent(
          o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        a = function () {
          (window.clearTimeout(l),
            r("WAWebCallCollection").off(n, i),
            (k = null));
        },
        i = function () {
          H(e) && (a(), G(e));
        },
        l = window.setTimeout(function () {
          (o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: stopped waiting for the abandoned transfer",
              ])),
          ),
            a());
        }, I);
      (r("WAWebCallCollection").on(n, i), (k = { rootCallId: e, stop: a }));
    }
    function H(e) {
      var t;
      return (
        o("WAWebVoipTransferredCallRegistry").getLiveTransferredCallRootId(
          (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.id,
        ) === e
      );
    }
    function G(e) {
      return K(function () {
        return H(e);
      });
    }
    function z() {
      return K(j);
    }
    function j() {
      return (
        r("WAWebCallCollection").activeCall == null &&
        r("WAWebCallCollection").pendingOutgoingCall == null &&
        r("WAWebCallCollection").pendingCallLink == null
      );
    }
    function K(e) {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebVoipStackInterface").getVoipStackInterface();
            if (!e()) {
              o("WALogger").LOG(
                S ||
                  (S = babelHelpers.taggedTemplateLiteralLoose([
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
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: transferLobby: ending the transferred call failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("voip-transfer-lobby-end-call-failed");
          }
        })),
        Q.apply(this, arguments)
      );
    }
    ((l.openCallTransferLobby = T),
      (l.joinCallTransferWithoutLobby = D),
      (l.joinFromCallTransferLobby = w),
      (l.leaveCallTransferLobby = A));
  },
  98,
);
