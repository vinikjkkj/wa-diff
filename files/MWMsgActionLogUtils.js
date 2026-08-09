__d(
  "MWMsgActionLogUtils",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
      Send: "send",
      Reaction: "reaction",
      Reply: "reply",
      Forward: "forward",
      Share: "share",
      StoryReply: "story-reply",
      Unsend: "unsend",
      GroupInvite: "group-invite",
      SenderKeyDistribution: "sender-key-distribution",
      EphemeralSetting: "ephemeral-setting",
      Edit: "edit",
      Bump: "bump",
      Retry: "retry",
    });
    function l(t) {
      var n = t.hasEphemeralSetting,
        r = n === void 0 ? !1 : n,
        o = t.hasGroupInvite,
        a = o === void 0 ? !1 : o,
        i = t.hasReaction,
        l = i === void 0 ? !1 : i,
        s = t.hasReply,
        u = s === void 0 ? !1 : s,
        c = t.hasSenderKeyDistribution,
        d = c === void 0 ? !1 : c,
        m = t.hasStoryReply,
        p = m === void 0 ? !1 : m,
        _ = t.isBump,
        f = _ === void 0 ? !1 : _,
        g = t.isEdit,
        h = g === void 0 ? !1 : g,
        y = t.isForward,
        C = y === void 0 ? !1 : y,
        b = t.isRetry,
        v = b === void 0 ? !1 : b,
        S = t.isUnsend,
        R = S === void 0 ? !1 : S,
        L = e.Send;
      return (
        u
          ? (L = e.Reply)
          : p
            ? (L = e.StoryReply)
            : R
              ? (L = e.Unsend)
              : l
                ? (L = e.Reaction)
                : a
                  ? (L = e.GroupInvite)
                  : r
                    ? (L = e.EphemeralSetting)
                    : d
                      ? (L = e.SenderKeyDistribution)
                      : h
                        ? (L = e.Edit)
                        : C
                          ? (L = e.Forward)
                          : f
                            ? (L = e.Bump)
                            : v && (L = e.Retry),
        L
      );
    }
    ((i.ActionType = e), (i.getActionType = l));
  },
  66,
);
