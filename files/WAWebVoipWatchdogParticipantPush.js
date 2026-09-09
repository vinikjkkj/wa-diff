__d(
  "WAWebVoipWatchdogParticipantPush",
  [
    "WAWebUserPrefsMeUser",
    "WAWebVoipVideoRenderSource",
    "WAWebVoipVideoStateUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderSource.self(
        o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.CAMERA,
      ),
      s = 9e4;
    function u(t) {
      var n,
        r = t.activeCall,
        a = t.joinTs,
        i = t.leaveTs,
        l = t.nowMs,
        u = t.prunedKeys,
        d = [],
        m = new Set();
      if (r.isGroup === !0) {
        var p,
          _ = (p = r.groupCallParticipantsConnected) != null ? p : [];
        for (var f of _) {
          var g;
          if (!o("WAWebUserPrefsMeUser").isMeAccount(f)) {
            var h = c(f);
            (m.add(h),
              a.has(h) || a.set(h, l),
              d.push({
                key: h,
                isSelf: !1,
                isVideoEnabled: !r.isParticipantVideoMuted(f),
                isMicEnabled: !r.isParticipantMicMuted(f),
                hasLeft: !1,
                lastJoinTimestampMs: (g = a.get(h)) != null ? g : l,
                lastLeaveTimestampMs: null,
              }));
          }
        }
      } else if (r.peerJid != null) {
        var y,
          C = r.peerJid,
          b = c(C);
        (m.add(b),
          a.has(b) || a.set(b, l),
          d.push({
            key: b,
            isSelf: !1,
            isVideoEnabled: o("WAWebVoipVideoStateUtils").isVideoEnabled(
              r.peerVideoState,
            ),
            isMicEnabled: r.peerMicMuted !== !0,
            hasLeft: !1,
            lastJoinTimestampMs: (y = a.get(b)) != null ? y : l,
            lastLeaveTimestampMs: null,
          }));
      }
      for (var v of a) {
        var S,
          R = v[0],
          L = v[1];
        if (R === e || m.has(R)) {
          i.delete(R);
          continue;
        }
        var E = i.get(R);
        if (E == null) i.set(R, l);
        else if (l - E >= s) {
          (a.delete(R), i.delete(R), u == null || u.push(R));
          continue;
        }
        d.push({
          key: R,
          isSelf: !1,
          isVideoEnabled: !1,
          isMicEnabled: !1,
          hasLeft: !0,
          lastJoinTimestampMs: L,
          lastLeaveTimestampMs: (S = i.get(R)) != null ? S : l,
        });
      }
      return (
        a.has(e) || a.set(e, l),
        d.push({
          key: e,
          isSelf: !0,
          isVideoEnabled: o("WAWebVoipVideoStateUtils").isVideoEnabled(
            r.selfVideoState,
          ),
          isMicEnabled: r.selfMicMuted !== !0,
          hasLeft: !1,
          lastJoinTimestampMs: (n = a.get(e)) != null ? n : l,
          lastLeaveTimestampMs: null,
        }),
        d
      );
    }
    function c(e) {
      return o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderSource.peer(
        e,
        o("WAWebVoipVideoRenderSource").WAWebVoipVideoRenderStream.CAMERA,
      );
    }
    l.buildParticipantSnapshots = u;
  },
  98,
);
