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
    function s(t) {
      var n,
        r = t.activeCall,
        a = t.joinTs,
        i = t.leaveTs,
        l = t.nowMs,
        s = t.prunedKeys,
        u = [],
        c = new Set();
      if (r.isGroup === !0) {
        var d,
          m = (d = r.groupCallParticipantsConnected) != null ? d : [];
        for (var p of m) {
          var _;
          if (!o("WAWebUserPrefsMeUser").isMeAccount(p)) {
            var f = p.toString();
            (c.add(f),
              a.has(f) || a.set(f, l),
              u.push({
                key: f,
                isSelf: !1,
                isVideoEnabled: !r.isParticipantVideoMuted(p),
                isMicEnabled: !r.isParticipantMicMuted(p),
                hasLeft: !1,
                lastJoinTimestampMs: (_ = a.get(f)) != null ? _ : l,
                lastLeaveTimestampMs: null,
              }));
          }
        }
      } else if (r.peerJid != null) {
        var g,
          h = r.peerJid,
          y = h.toString();
        (c.add(y),
          a.has(y) || a.set(y, l),
          u.push({
            key: y,
            isSelf: !1,
            isVideoEnabled: o("WAWebVoipVideoStateUtils").isVideoEnabled(
              r.peerVideoState,
            ),
            isMicEnabled: r.peerMicMuted !== !0,
            hasLeft: !1,
            lastJoinTimestampMs: (g = a.get(y)) != null ? g : l,
            lastLeaveTimestampMs: null,
          }));
      }
      for (var C of a) {
        var b,
          v = C[0],
          S = C[1];
        if (
          v === o("WAWebVoipVideoRendererInterface").selfPreviewJid ||
          c.has(v)
        ) {
          i.delete(v);
          continue;
        }
        var R = i.get(v);
        if (R == null) i.set(v, l);
        else if (l - R >= e) {
          (a.delete(v), i.delete(v), s == null || s.push(v));
          continue;
        }
        u.push({
          key: v,
          isSelf: !1,
          isVideoEnabled: !1,
          isMicEnabled: !1,
          hasLeft: !0,
          lastJoinTimestampMs: S,
          lastLeaveTimestampMs: (b = i.get(v)) != null ? b : l,
        });
      }
      return (
        a.has(o("WAWebVoipVideoRendererInterface").selfPreviewJid) ||
          a.set(o("WAWebVoipVideoRendererInterface").selfPreviewJid, l),
        u.push({
          key: o("WAWebVoipVideoRendererInterface").selfPreviewJid,
          isSelf: !0,
          isVideoEnabled: o("WAWebVoipVideoStateUtils").isVideoEnabled(
            r.selfVideoState,
          ),
          isMicEnabled: r.selfMicMuted !== !0,
          hasLeft: !1,
          lastJoinTimestampMs:
            (n = a.get(o("WAWebVoipVideoRendererInterface").selfPreviewJid)) !=
            null
              ? n
              : l,
          lastLeaveTimestampMs: null,
        }),
        u
      );
    }
    l.buildParticipantSnapshots = s;
  },
  98,
);
