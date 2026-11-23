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
      P(e, !1) != null && r("WAWebPipController").openVoipUiPiPForOutgoing();
    }
    function D(e) {
      var t;
      if (!o("WAWebVoipCallBlockedModals").showNoConnectionModalIfOffline()) {
        var n = P(e, !0);
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
              A(),
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
                w(n.rootCallId),
                o(
                  "WAWebVoipHandleCallTransferFailed",
                ).showCallTransferCouldNotConnectToast()));
          });
        }
      }
    }
    async function x(e) {
      var t = e.entryPoint.rootCallId,
        n = e.entryPoint.isVideoCall ? !(await $()) : !0;
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
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "voip: transferLobby: entry point removed before the direct join started",
            ])),
        ),
          (L = null),
          w(t));
        return;
      }
      if (!H()) {
        (o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: another call started before the direct join",
              ])),
          )
          .sendLogs("voip-transfer-lobby-direct-join-preempted"),
          (L = null),
          w(t),
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
        await B(i, { isMicMuted: !1, isVideoMuted: n }));
    }
    async function $() {
      try {
        if (!o("WAWebVoipLocalVideoPolicy").isLocalVideoAllowed()) return !1;
        if (
          o("WAWebABProps").getABPropConfigValue(
            "enable_web_voip_virtual_video_capture_driver",
          ) === !0
        )
          return !0;
        var e = navigator.mediaDevices;
        if ((e == null ? void 0 : e.enumerateDevices) == null) return !1;
        var t = await o("WAWebAudioDeviceManager").coalescedEnumerateDevices(e);
        return t.some(function (e) {
          return e.kind === "videoinput";
        });
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: transferLobby: camera probe failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("voip-transfer-lobby-camera-probe-failed"),
          !1
        );
      }
    }
    function P(e, t) {
      if (
        r("WAWebCallCollection").activeCall != null ||
        r("WAWebCallCollection").pendingOutgoingCall != null ||
        r("WAWebCallCollection").pendingCallLink != null ||
        r("WAWebCallCollection").pendingCallTransferLobby != null ||
        L != null
      )
        return (
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: a call is already active or pending, ignoring",
              ])),
          ),
          null
        );
      if (k != null && k.rootCallId !== e.rootCallId)
        return (
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: entry point removed before the lobby opened",
              ])),
          ),
          o(
            "WAWebVoipHandleCallTransferFailed",
          ).showCallTransferCouldNotConnectToast(),
          null)
        : (o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: open rootCallId=",
                "",
              ])),
            n.rootCallId,
          ),
          F(),
          r("WAWebCallCollection").setPendingCallTransferLobby({
            entryPoint: n,
            isJoining: t,
          }),
          n);
    }
    function N(t) {
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
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
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
          B(s, i));
      }
    }
    function M() {
      var e = r("WAWebCallCollection").pendingCallTransferLobby;
      if (e != null) {
        o("WALogger").LOG(
          y ||
            (y = babelHelpers.taggedTemplateLiteralLoose([
              "voip: transferLobby: leave isJoining=",
              "",
            ])),
          String(e.isJoining),
        );
        var t = e.entryPoint.rootCallId;
        (e.isJoining && (L != null && (L.isAbandoned = !0), W(t)),
          !q(t) && A());
      }
    }
    function w(e) {
      var t;
      ((t = r("WAWebCallCollection").pendingCallTransferLobby) == null
        ? void 0
        : t.entryPoint.rootCallId) === e && A();
    }
    function A() {
      (r("WAWebCallCollection").setPendingCallTransferLobby(null),
        r("WAWebCallCollection").activeCall == null &&
          r("WAWebPipController").closePiP());
    }
    function F() {
      E ||
        ((E = !0),
        o(
          "WAWebVoipCallTransferEntryPointStore",
        ).WAWebVoipCallTransferEntryPointStore.on("change", O));
    }
    function O() {
      var e = r("WAWebCallCollection").pendingCallTransferLobby;
      if (!(e == null || e.isJoining)) {
        var t = o(
          "WAWebVoipCallTransferEntryPointStore",
        ).WAWebVoipCallTransferEntryPointStore.getForRootCallId(
          e.entryPoint.rootCallId,
        );
        if (t == null) {
          (o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: entry point removed, closing",
              ])),
          ),
            A());
          return;
        }
        t !== e.entryPoint &&
          r("WAWebCallCollection").setPendingCallTransferLobby(
            babelHelpers.extends({}, e, { entryPoint: t }),
          );
      }
    }
    async function B(e, t) {
      var n,
        a = t.isMicMuted,
        i = t.isVideoMuted,
        l = !1;
      try {
        l = await o("WAWebVoipTransferCall").transferWAWebVoipCallToThisDevice({
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
      var s = ((n = L) == null ? void 0 : n.isAbandoned) === !0;
      if (((L = null), !l)) {
        var u;
        if (
          (((u = r("WAWebCallCollection").pendingCallTransferLobby) == null
            ? void 0
            : u.entryPoint) === e && A(),
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
      s && W(e.rootCallId);
    }
    function W(e) {
      var t;
      if (((t = k) == null || t.stop(), q(e))) {
        U(e);
        return;
      }
      L == null && H() && V();
      var n = o("WAWebVoipEventConstants").getChangeEvent(
          o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
        ),
        a = function () {
          (window.clearTimeout(l),
            r("WAWebCallCollection").off(n, i),
            (k = null));
        },
        i = function () {
          q(e) && (a(), U(e));
        },
        l = window.setTimeout(function () {
          (o("WALogger").LOG(
            v ||
              (v = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: stopped waiting for the abandoned transfer",
              ])),
          ),
            a());
        }, I);
      (r("WAWebCallCollection").on(n, i), (k = { rootCallId: e, stop: a }));
    }
    function q(e) {
      var t;
      return (
        o("WAWebVoipTransferredCallRegistry").getLiveTransferredCallRootId(
          (t = r("WAWebCallCollection").activeCall) == null ? void 0 : t.id,
        ) === e
      );
    }
    function U(e) {
      return G(function () {
        return q(e);
      });
    }
    function V() {
      return G(H);
    }
    function H() {
      return (
        r("WAWebCallCollection").activeCall == null &&
        r("WAWebCallCollection").pendingOutgoingCall == null &&
        r("WAWebCallCollection").pendingCallLink == null
      );
    }
    async function G(e) {
      try {
        var t = await o("WAWebVoipStackInterface").getVoipStackInterface();
        if (!e()) {
          o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
                "voip: transferLobby: the stack is no longer on the transfer, not ending",
              ])),
          );
          return;
        }
        await (t == null
          ? void 0
          : t.endCall(o("WAWebVoipSignalingEnums").EndCallReason.Self, !0));
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
    }
    ((l.openCallTransferLobby = T),
      (l.joinCallTransferWithoutLobby = D),
      (l.joinFromCallTransferLobby = N),
      (l.leaveCallTransferLobby = M));
  },
  98,
);
