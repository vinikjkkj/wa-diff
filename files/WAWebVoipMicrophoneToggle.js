__d(
  "WAWebVoipMicrophoneToggle",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebMediaPermissionsUtils",
    "WAWebVoipCallStateUtils",
    "WAWebVoipMicrophoneToggleRequest",
    "WAWebVoipRecoverMicrophoneLoadable",
    "WAWebVoipStackInterface",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e === void 0 ? {} : e,
            n = t.onPermissionPrompt,
            r = t.targetWindow,
            o = d();
          if (o == null) return "cancelled";
          try {
            return yield m(o, { onPermissionPrompt: n, targetWindow: r });
          } finally {
            o.toggleRequest.finish();
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d() {
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
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.onPermissionPrompt,
            r = t.targetWindow,
            o = yield _(e, { onPermissionPrompt: n, targetWindow: r });
          return o.result !== "ready"
            ? o.result
            : g(e, o, { onPermissionPrompt: n, targetWindow: r });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.onPermissionPrompt,
            r = t.targetWindow,
            o = e.isUnmuting && e.isRecoveryCurrent();
          if (e.isUnmuting && !(yield v(e.isToggleCurrent)))
            return { requiresRecovery: !1, result: "cancelled" };
          var a = e.isUnmuting && (o || e.isRecoveryCurrent()),
            i = yield E({
              isRecoveryCurrent: e.isRecoveryCurrent,
              isToggleCurrent: e.isToggleCurrent,
              isUnmuting: e.isUnmuting,
              onPermissionPrompt: n,
              requiresRecovery: a,
              targetWindow: r,
            });
          return { requiresRecovery: a, result: i };
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          var a = r.onPermissionPrompt,
            i = r.targetWindow,
            l = yield o("WAWebVoipStackInterface").getVoipStackInterface();
          if ((l == null ? void 0 : l.type) !== "web") return "cancelled";
          var s = yield y(t, n, { onPermissionPrompt: a, targetWindow: i });
          if (s.result !== "ready") return s.result;
          if (
            !b({
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
          var u = yield l.setCallMute(t.newMuteState);
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
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t, n) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = n.onPermissionPrompt,
            o = n.targetWindow;
          return !e.isUnmuting || t.requiresRecovery || !e.isRecoveryCurrent()
            ? t
            : {
                requiresRecovery: !0,
                result: yield E({
                  isRecoveryCurrent: e.isRecoveryCurrent,
                  isToggleCurrent: e.isToggleCurrent,
                  isUnmuting: e.isUnmuting,
                  onPermissionPrompt: r,
                  requiresRecovery: !0,
                  targetWindow: o,
                }),
              };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      var t = e.isConnectedAtApply,
        n = e.isRecoveryCurrent,
        r = e.isToggleCurrent,
        o = e.isUnmuting,
        a = e.requiresRecovery,
        i = a ? n() : r();
      return i && (!o || a || !t);
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n =
              (t = o(
                "WAWebVoipStackInterface",
              ).getCachedVoipStackInterface()) != null
                ? t
                : yield o("WAWebVoipStackInterface").getVoipStackInterface();
          return e() && (n == null ? void 0 : n.type) === "web";
        })),
        S.apply(this, arguments)
      );
    }
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            var a = yield o("WAWebVoipStackInterface").getVoipStackInterface(),
              i = e.getState();
            if (
              !n.isCurrent() ||
              e.selfMicMuted ||
              i == null ||
              o("WAWebVoipCallStateUtils").isCallTerminal(i) ||
              (a == null ? void 0 : a.type) !== "web"
            )
              return "cancelled";
            var l = yield a.setCallMute(!0);
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
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.isRecoveryCurrent,
            n = e.isToggleCurrent,
            r = e.isUnmuting,
            a = e.onPermissionPrompt,
            i = e.requiresRecovery,
            l = e.targetWindow;
          if (!r) return "ready";
          if (!i) {
            var s = yield o(
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
          var u = yield o(
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
        })),
        k.apply(this, arguments)
      );
    }
    ((l.toggleActiveCallMicrophone = u),
      (l.muteActiveCallMicrophoneForPermissionLoss = R));
  },
  98,
);
