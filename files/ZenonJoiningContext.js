__d(
  "ZenonJoiningContext",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "joining_context";
    function l(e) {
      var t = e.callablePostID,
        n = e.callingTags,
        r = e.callTrigger,
        o = e.conferenceName,
        a = e.groupThreadID,
        i = e.igThreadID,
        l = e.immersiveModeDoorID,
        s = e.isMetaAiCall,
        u = e.linkUrl,
        c = e.liveBroadcastID,
        d = e.meetingID,
        m = e.peerID,
        p = e.rtcDoorID,
        _ = e.serverInfoData;
      return {
        call_trigger: r,
        callable_post_id: t,
        calling_tags: n,
        conference_name: o,
        group_thread_id: a,
        ig_thread_id: i,
        immersive_mode_door_id: l,
        is_meta_ai_call: s,
        link_url: u,
        live_broadcast_id: c,
        meeting_id: d,
        peer_id: m,
        rtc_door_id: p,
        server_info_data: _,
      };
    }
    ((i.JOINING_CONTEXT_TOPIC = e), (i.convertCollisionToJoiningContext = l));
  },
  66,
);
