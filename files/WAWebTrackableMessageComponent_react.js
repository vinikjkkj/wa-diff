__d(
  "WAWebTrackableMessageComponent.react",
  [
    "WAWebFrontendMsgGetters",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
    "useWAWebNewsletterMessageVisibilityLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.channelUserType,
        a = e.chat,
        i = e.component,
        l = e.msg,
        u = e.postId,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [o("WAWebFrontendMsgGetters").getMediaData]), (t[0] = c))
        : (c = t[0]);
      var d = o("useWAWebMsgValues").useMsgValues(l.id, c),
        m = d[0],
        p;
      t[1] !== n ||
      t[2] !== a.id.user ||
      t[3] !== m ||
      t[4] !== l.star ||
      t[5] !== u
        ? ((p = {
            cid: a.id.user,
            isStarredPost: l.star,
            isVpvImpression: !0,
            postId: u,
            mediaData: m,
            channelUserType: n,
          }),
          (t[1] = n),
          (t[2] = a.id.user),
          (t[3] = m),
          (t[4] = l.star),
          (t[5] = u),
          (t[6] = p))
        : (p = t[6]);
      var _ = r("useWAWebNewsletterMessageVisibilityLogger")(p),
        f = _[0],
        g;
      return (
        t[7] !== i || t[8] !== f
          ? ((g = s.jsx("div", { ref: f, children: i })),
            (t[7] = i),
            (t[8] = f),
            (t[9] = g))
          : (g = t[9]),
        g
      );
    }
    l.default = u;
  },
  98,
);
