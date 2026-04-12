__d(
  "WAWebTrackableMessageComponent.react",
  [
    "WAWebFrontendMsgGetters",
    "react",
    "useWAWebMsgValues",
    "useWAWebNewsletterMessageVisibilityLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.channelUserType,
        n = e.chat,
        a = e.component,
        i = e.msg,
        l = e.postId,
        u = o("useWAWebMsgValues").useMsgValues(i.id, [
          o("WAWebFrontendMsgGetters").getMediaData,
        ]),
        c = u[0],
        d = r("useWAWebNewsletterMessageVisibilityLogger")({
          cid: n.id.user,
          isStarredPost: i.star,
          isVpvImpression: !0,
          postId: l,
          mediaData: c,
          channelUserType: t,
        }),
        m = d[0],
        p = d[1];
      return s.jsx("div", { ref: m, children: a });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
