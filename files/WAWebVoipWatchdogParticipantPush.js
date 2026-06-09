__d(
  "WAWebVoipWatchdogParticipantPush",
  [
    "WAWebUserPrefsMeUser",
    "WAWebVoipVideoRendererInterface",
    "WAWebVoipVideoStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 9e4;
    function s(t, n, r, a, i) {
      var l,
        s = [],
        u = new Set();
      if (t.isGroup === !0) {
        var c,
          d = (c = t.groupCallParticipantsConnected) != null ? c : [];
        for (var m of d) {
          var p;
          if (!o("WAWebUserPrefsMeUser").isMeAccount(m)) {
            var _ = m.toString();
            (u.add(_),
              n.has(_) || n.set(_, a),
              s.push({
                key: _,
                isSelf: !1,
                isVideoEnabled: !t.isParticipantVideoMuted(m),
                isMicEnabled: !t.isParticipantMicMuted(m),
                hasLeft: !1,
                lastJoinTimestampMs: (p = n.get(_)) != null ? p : a,
                lastLeaveTimestampMs: null,
              }));
          }
        }
      } else if (t.peerJid != null) {
        var f,
          g = t.peerJid,
          h = g.toString();
        (u.add(h),
          n.has(h) || n.set(h, a),
          s.push({
            key: h,
            isSelf: !1,
            isVideoEnabled: o("WAWebVoipVideoStateUtils").isVideoEnabled(
              t.peerVideoState,
            ),
            isMicEnabled: t.peerMicMuted !== !0,
            hasLeft: !1,
            lastJoinTimestampMs: (f = n.get(h)) != null ? f : a,
            lastLeaveTimestampMs: null,
          }));
      }
      for (var y of n) {
        var C,
          b = y[0],
          v = y[1];
        if (
          b === o("WAWebVoipVideoRendererInterface").selfPreviewJid ||
          u.has(b)
        ) {
          r.delete(b);
          continue;
        }
        var S = r.get(b);
        if (S == null) r.set(b, a);
        else if (a - S >= e) {
          (n.delete(b), r.delete(b), i == null || i.push(b));
          continue;
        }
        s.push({
          key: b,
          isSelf: !1,
          isVideoEnabled: !1,
          isMicEnabled: !1,
          hasLeft: !0,
          lastJoinTimestampMs: v,
          lastLeaveTimestampMs: (C = r.get(b)) != null ? C : a,
        });
      }
      return (
        n.has(o("WAWebVoipVideoRendererInterface").selfPreviewJid) ||
          n.set(o("WAWebVoipVideoRendererInterface").selfPreviewJid, a),
        s.push({
          key: o("WAWebVoipVideoRendererInterface").selfPreviewJid,
          isSelf: !0,
          isVideoEnabled: o("WAWebVoipVideoStateUtils").isVideoEnabled(
            t.selfVideoState,
          ),
          isMicEnabled: t.selfMicMuted !== !0,
          hasLeft: !1,
          lastJoinTimestampMs:
            (l = n.get(o("WAWebVoipVideoRendererInterface").selfPreviewJid)) !=
            null
              ? l
              : a,
          lastLeaveTimestampMs: null,
        }),
        s
      );
    }
    l.buildParticipantSnapshots = s;
  },
  98,
);
