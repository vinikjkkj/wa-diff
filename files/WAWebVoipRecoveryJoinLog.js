__d(
  "WAWebVoipRecoveryJoinLog",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebVoipEventConstants",
    "WAWebVoipInvestigationLogUploadGating",
    "WAWebVoipWaCallEnums",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("WAWebVoipEventConstants").getChangeEvent(
        o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
      ),
      d = 6e4,
      m = 5e3,
      p = {
        groupUpload: {
          reason: "voip-recovery-join-unconnected-group",
          sampling: 1,
        },
        oneToOneUpload: {
          reason: "voip-recovery-join-unconnected-1on1",
          sampling: 0.1,
        },
      },
      _ = {
        groupUpload: { reason: "voip-recovery-join-short-group", sampling: 1 },
        oneToOneUpload: {
          reason: "voip-recovery-join-short-1on1",
          sampling: 0.01,
        },
      },
      f = null;
    function g(e, t) {
      ((f = babelHelpers.extends({}, t, { call: e, joinedAt: Date.now() })),
        r("WAWebCallCollection").off(c, C),
        r("WAWebCallCollection").on(c, C),
        C());
    }
    function h(e) {
      var t;
      return e != null && ((t = f) == null ? void 0 : t.call) === e ? f : null;
    }
    function y(t, n) {
      var r = h(t);
      r != null &&
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: UI: call ended from the UI ",
              "ms after joining without devices, reason=",
              ", state=",
              ", connected=",
              ", active=",
              "",
            ])),
          Date.now() - r.joinedAt,
          n,
          String(r.call.getState()),
          String(r.call.wasEverConnected),
          String(r.call.wasEverActive),
        );
    }
    function C() {
      var e = f;
      if (!(e == null || r("WAWebCallCollection").activeCall === e.call)) {
        (r("WAWebCallCollection").off(c, C), (f = null), v(e));
        var t = b(e);
        t != null && S(e.call.isGroup, t);
      }
    }
    function b(e) {
      var t = e.call,
        n = e.joinedAt;
      return t.getState() ===
        o("WAWebVoipWaCallEnums").CallState.CallActiveElseWhere
        ? null
        : t.wasEverConnected
          ? t.wasEverActive && Date.now() - n < d
            ? _
            : null
          : p;
    }
    function v(e) {
      var t = e.call;
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "voip: call that joined without devices ended ",
            "ms after joining, state=",
            ", connected=",
            ", active=",
            ", microphone off=",
            ", camera off=",
            ", after the guide=",
            ", group=",
            ", call=",
            "",
          ])),
        Date.now() - e.joinedAt,
        String(t.getState()),
        String(t.wasEverConnected),
        String(t.wasEverActive),
        String(e.isMicrophoneOff),
        String(e.isCameraOff),
        String(e.isAfterGuide),
        String(t.isGroup),
        t.id,
      );
    }
    function S(e, t) {
      if (
        o(
          "WAWebVoipInvestigationLogUploadGating",
        ).isInvestigationLogUploadEnabled()
      ) {
        var n = e ? t.groupUpload : t.oneToOneUpload,
          r = R(n);
        self.setTimeout(function () {
          o("WALogger")
            .LOG(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "voip: uploading logs: ",
                  "",
                ])),
              r,
            )
            .tags("non-sad")
            .sendLogs(r, {
              sampling: n.sampling,
              sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
            });
        }, m);
      }
    }
    function R(e) {
      return r("gkx")("26258") ? e.reason : e.reason + "-testing";
    }
    ((l.recordRecoveryJoin = g),
      (l.getRecoveryJoin = h),
      (l.logEndAfterRecoveryJoin = y));
  },
  98,
);
