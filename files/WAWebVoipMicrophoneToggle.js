__d(
  "WAWebVoipMicrophoneToggle",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebMediaPermissionsUtils",
    "WAWebVoipBlockedMicrophoneJoinState",
    "WAWebVoipCallStateUtils",
    "WAWebVoipMicrophoneToggleRequest",
    "WAWebVoipRecoverMicrophoneLoadable",
    "WAWebVoipStackInterface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    async function u(e) {
      var t = e === void 0 ? {} : e,
        n = t.onPermissionPrompt,
        r = t.onToggleStarted,
        o = t.targetWindow,
        a = c();
      if (a == null) return "cancelled";
      try {
        return (
          r == null || r(),
          await d(a, { onPermissionPrompt: n, targetWindow: o })
        );
      } finally {
        a.toggleRequest.finish();
      }
    }
    function c() {
      var e = r("WAWebCallCollection").activeCall;
      if (e == null) return null;
      var t = !e.selfMicMuted,
        n = !t,
        a = o("WAWebVoipMicrophoneToggleRequest").beginMicrophoneToggleRequest({
          isOwnerCurrent: function () {
            return r("WAWebCallCollection").activeCall === e;
          },
          isUnmuting: n,
        });
      if (a == null) return null;
      var i = a.isCurrent,
        l = function () {
          return (
            i() && o("WAWebVoipCallStateUtils").isCallConnected(e.getState())
          );
        };
      return {
        activeCall: e,
        isRecoveryCurrent: l,
        isToggleCurrent: i,
        isUnmuting: n,
        newMuteState: t,
        toggleRequest: a,
      };
    }
    async function d(e, t) {
      var n = t.onPermissionPrompt,
        r = t.targetWindow,
        o = await m(e, { onPermissionPrompt: n, targetWindow: r });
      return o.result !== "ready"
        ? o.result
        : p(e, o, { onPermissionPrompt: n, targetWindow: r });
    }
    async function m(e, t) {
      var n = t.onPermissionPrompt,
        r = t.targetWindow,
        o = e.isUnmuting && e.isRecoveryCurrent();
      if (e.isUnmuting && !(await g(e.isToggleCurrent)))
        return { requiresRecovery: !1, result: "cancelled" };
      var a = e.isUnmuting && (o || e.isRecoveryCurrent()),
        i = await y({
          isRecoveryCurrent: e.isRecoveryCurrent,
          isToggleCurrent: e.isToggleCurrent,
          isUnmuting: e.isUnmuting,
          onPermissionPrompt: n,
          requiresRecovery: a,
          targetWindow: r,
        });
      return { requiresRecovery: a, result: i };
    }
    async function p(t, n, r) {
      var a = r.onPermissionPrompt,
        i = r.targetWindow,
        l = await o("WAWebVoipStackInterface").getVoipStackInterface();
      if ((l == null ? void 0 : l.type) !== "web") return "cancelled";
      var s = await _(t, n, { onPermissionPrompt: a, targetWindow: i });
      if (s.result !== "ready") return s.result;
      if (
        !f({
          isConnectedAtApply: o("WAWebVoipCallStateUtils").isCallConnected(
            t.activeCall.getState(),
          ),
          isRecoveryCurrent: t.isRecoveryCurrent,
          isToggleCurrent: t.isToggleCurrent,
          isUnmuting: t.isUnmuting,
          requiresRecovery: s.requiresRecovery,
        })
      )
        return "cancelled";
      o(
        "WAWebVoipBlockedMicrophoneJoinState",
      ).forgetBlockedMicrophoneMuteAndJoin(t.activeCall.id);
      var u = await l.setCallMute(t.newMuteState);
      return u !== 0
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "voip: [microphone toggle] setCallMute failed with status: ",
                "",
              ])),
            u,
          ),
          "cancelled")
        : "applied";
    }
    async function _(e, t, n) {
      var r = n.onPermissionPrompt,
        o = n.targetWindow;
      return !e.isUnmuting || t.requiresRecovery || !e.isRecoveryCurrent()
        ? t
        : {
            requiresRecovery: !0,
            result: await y({
              isRecoveryCurrent: e.isRecoveryCurrent,
              isToggleCurrent: e.isToggleCurrent,
              isUnmuting: e.isUnmuting,
              onPermissionPrompt: r,
              requiresRecovery: !0,
              targetWindow: o,
            }),
          };
    }
    function f(e) {
      var t = e.isConnectedAtApply,
        n = e.isRecoveryCurrent,
        r = e.isToggleCurrent,
        o = e.isUnmuting,
        a = e.requiresRecovery,
        i = a ? n() : r();
      return i && (!o || a || !t);
    }
    async function g(e) {
      var t,
        n =
          (t = o("WAWebVoipStackInterface").getCachedVoipStackInterface()) !=
          null
            ? t
            : await o("WAWebVoipStackInterface").getVoipStackInterface();
      return e() && (n == null ? void 0 : n.type) === "web";
    }
    async function h() {
      var e = r("WAWebCallCollection").activeCall,
        t = e == null ? void 0 : e.getState();
      if (
        e == null ||
        e.selfMicMuted ||
        t == null ||
        o("WAWebVoipCallStateUtils").isCallTerminal(t)
      )
        return "cancelled";
      var n = o(
        "WAWebVoipMicrophoneToggleRequest",
      ).beginMicrophoneToggleRequest({
        isOwnerCurrent: function () {
          return r("WAWebCallCollection").activeCall === e;
        },
        isUnmuting: !1,
      });
      if (n == null) return "cancelled";
      try {
        var a = await o("WAWebVoipStackInterface").getVoipStackInterface(),
          i = e.getState();
        if (
          !n.isCurrent() ||
          e.selfMicMuted ||
          i == null ||
          o("WAWebVoipCallStateUtils").isCallTerminal(i) ||
          (a == null ? void 0 : a.type) !== "web"
        )
          return "cancelled";
        var l = await a.setCallMute(!0);
        return l !== 0
          ? (o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: [permission-loss mute] setCallMute failed with status: ",
                  "",
                ])),
              l,
            ),
            "cancelled")
          : "applied";
      } finally {
        n.finish();
      }
    }
    async function y(e) {
      var t = e.isRecoveryCurrent,
        n = e.isToggleCurrent,
        r = e.isUnmuting,
        a = e.onPermissionPrompt,
        i = e.requiresRecovery,
        l = e.targetWindow;
      if (!r) return "ready";
      if (!i) {
        var s = await o(
          "WAWebMediaPermissionsUtils",
        ).queryMediaPermissionStateStrict(
          "microphone",
          l == null ? void 0 : l.navigator,
        );
        return n()
          ? s === "denied"
            ? "permission_denied"
            : (s === "prompt" && (a == null || a()), "ready")
          : "cancelled";
      }
      var u = await o(
        "WAWebVoipRecoverMicrophoneLoadable",
      ).prepareMicrophoneForUnmuteLoadable({
        isCallCurrent: t,
        onPermissionPrompt: a,
        targetWindow: l,
      });
      return u === "permission_denied"
        ? "permission_denied"
        : u !== "ready" || !t()
          ? "cancelled"
          : "ready";
    }
    ((l.toggleActiveCallMicrophone = u),
      (l.muteActiveCallMicrophoneForPermissionLoss = h));
  },
  98,
);
