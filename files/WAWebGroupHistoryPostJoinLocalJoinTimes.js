__d(
  "WAWebGroupHistoryPostJoinLocalJoinTimes",
  ["WAWebCommonMsgSubtypeTypes", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = o("WAWebCommonMsgSubtypeTypes")).MsgSubtype.Add,
        e.MsgSubtype.Invite,
        e.MsgSubtype.AutoAdd,
        e.MsgSubtype.InviteAutoAdd,
        e.MsgSubtype.V4AddInviteJoin,
        e.MsgSubtype.LinkedGroupJoin,
        e.MsgSubtype.CommunityParticipantAddRich,
      ]);
    function u(e) {
      return c(e.msgs.getModelsArray());
    }
    function c(e) {
      var t = new Map();
      for (var n of e)
        if (
          n.type === o("WAWebMsgType").MSG_TYPE.GP2 &&
          !(n.subtype == null || !s.has(n.subtype))
        ) {
          var r = n.recipients;
          if (r != null)
            for (var a of r) {
              var i = a.toString(),
                l = t.get(i);
              (l == null || n.t > l) && t.set(i, n.t);
            }
        }
      return t;
    }
    ((l.buildLocalJoinTimeFallbackMap = u),
      (l.computeLocalJoinTimeFallbacks = c));
  },
  98,
);
