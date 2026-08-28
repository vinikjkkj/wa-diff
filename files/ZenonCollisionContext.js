__d(
  "ZenonCollisionContext",
  ["RtcDoorCallingTags"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = null;
      return (
        e.groupThreadID != null
          ? (n = {
              e2eeThreadID: e.groupThreadID,
              id: e.groupThreadID,
              type: t ? 16 : 2,
            })
          : e.peerID != null &&
            (n = {
              id: e.peerID,
              secureOneToOneThreadPeerId: t ? e.peerID : void 0,
              type: t ? 15 : 1,
            }),
        n
      );
    }
    function s(e) {
      var t = e.call_trigger,
        n = e.callable_post_id,
        o = e.calling_tags,
        a = e.conference_name,
        i = e.group_thread_id,
        l = e.ig_thread_id,
        s = e.immersive_mode_door_id,
        u = e.is_meta_ai_call,
        c = e.link_url,
        d = e.live_broadcast_id,
        m = e.meeting_id,
        p = e.peer_id,
        _ = e.rtc_door_id,
        f = e.server_info_data;
      return {
        callablePostID: n,
        callingTags: r("RtcDoorCallingTags").cast(o),
        callTrigger: t,
        conferenceName: a,
        groupThreadID: i,
        igThreadID: l,
        immersiveModeDoorID: s,
        isMetaAiCall: u,
        linkUrl: c,
        liveBroadcastID: d,
        meetingID: m,
        peerID: p,
        rtcDoorID: _,
        serverInfoData: f,
      };
    }
    function u(e) {
      return (
        e === void 0 && (e = {}),
        !Object.values(e).some(function (e) {
          return e != null;
        })
      );
    }
    ((l.getThreadIDAndTypeFromCollisionContext = e),
      (l.fromRTCJoiningContext = s),
      (l.isCollisionContextEmpty = u));
  },
  98,
);
