__d(
  "WAWebVoipRecoveryJoinLog",
  [
    "WALogger",
    "WAWebCallCollection",
    "WAWebVoipEventConstants",
    "WAWebVoipInvestigationLogUploadGating",
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
      d = 1,
      m = 0.1,
      p = null;
    function _(e, t) {
      ((p = babelHelpers.extends({}, t, { call: e, joinedAt: Date.now() })),
        r("WAWebCallCollection").off(c, y),
        r("WAWebCallCollection").on(c, y));
    }
    function f(e) {
      var t;
      return e != null && ((t = p) == null ? void 0 : t.call) === e ? p : null;
    }
    function g(t, n) {
      var r = f(t);
      r != null &&
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "voip: UI: call ended from the UI ",
              "ms after joining without devices, reason=",
              ", state=",
              ", connected=",
              "",
            ])),
          Date.now() - r.joinedAt,
          n,
          String(r.call.getState()),
          String(r.call.wasEverConnected),
        );
    }
    function h() {
      (r("WAWebCallCollection").off(c, y), (p = null));
    }
    function y() {
      var e = p;
      e == null ||
        r("WAWebCallCollection").activeCall === e.call ||
        (r("WAWebCallCollection").off(c, y),
        (p = null),
        e.call.wasEverConnected || C(e));
    }
    function C(e) {
      var t = e.call.isGroup;
      if (
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "voip: call that joined without devices ended unconnected ",
              "ms after joining, microphone off=",
              ", camera off=",
              ", after the guide=",
              ", group=",
              "",
            ])),
          Date.now() - e.joinedAt,
          String(e.isMicrophoneOff),
          String(e.isCameraOff),
          String(e.isAfterGuide),
          String(t),
        ),
        !!o(
          "WAWebVoipInvestigationLogUploadGating",
        ).isInvestigationLogUploadEnabled())
      ) {
        var n = b(t);
        o("WALogger")
          .LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "voip: uploading logs: ",
                "",
              ])),
            n,
          )
          .sendLogs(n, {
            sampling: t ? d : m,
            sendLogsType: o("WALogger").SendLogsType.INVESTIGATION,
          });
      }
    }
    function b(e) {
      var t = e
        ? "voip-recovery-join-unconnected-group"
        : "voip-recovery-join-unconnected-1on1";
      return r("gkx")("26258") ? t : t + "-testing";
    }
    ((l.recordRecoveryJoin = _),
      (l.getRecoveryJoin = f),
      (l.logEndAfterRecoveryJoin = g),
      (l.resetRecoveryJoinForTesting = h));
  },
  98,
);
