__d(
  "WAWebMessageComponentWrapper.react",
  [
    "WAWebBizVPVTrackableMessageComponent.react",
    "WAWebChatGetters",
    "WAWebFrontendMsgGetters",
    "WAWebMessageComponent.react",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterLoggingUtils",
    "WAWebTrackableMessageComponent.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizVPVData",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["msgComponentRef", "onContextMenu"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n = o("react-compiler-runtime").c(19),
        a,
        i,
        l;
      n[0] !== t
        ? ((a = t.msgComponentRef),
          (i = t.onContextMenu),
          (l = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l))
        : ((a = n[1]), (i = n[2]), (l = n[3]));
      var s;
      n[4] !== a || n[5] !== i || n[6] !== l
        ? ((s =
            i == null
              ? u.jsx(
                  r("WAWebMessageComponent.react"),
                  babelHelpers.extends({ ref: a }, l),
                )
              : u.jsx("div", {
                  onContextMenu: i,
                  children: u.jsx(
                    r("WAWebMessageComponent.react"),
                    babelHelpers.extends({ ref: a }, l),
                  ),
                })),
          (n[4] = a),
          (n[5] = i),
          (n[6] = l),
          (n[7] = s))
        : (s = n[7]);
      var c = s,
        d = o("WAWebFrontendMsgGetters").getChat(l.msg),
        m = o("WAWebChatGetters").getIsNewsletter(d),
        p;
      if (n[8] !== l.msg.serverId) {
        var _;
        ((p = (_ = l.msg.serverId) == null ? void 0 : _.toString()),
          (n[8] = l.msg.serverId),
          (n[9] = p));
      } else p = n[9];
      var f = p,
        g = r("useWAWebBizVPVData")(l.msg);
      if (g != null) {
        var h;
        return (
          n[10] !== c || n[11] !== g
            ? ((h = u.jsx(r("WAWebBizVPVTrackableMessageComponent.react"), {
                component: c,
                visibilityData: g,
              })),
              (n[10] = c),
              (n[11] = g),
              (n[12] = h))
            : (h = n[12]),
          h
        );
      }
      var y =
          m &&
          o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterVPVMessageVisibilityLoggingEnabled(),
        C = d.newsletterMetadata;
      if (y && f != null && C != null) {
        var b = o("WAWebNewsletterLoggingUtils").getChannelUserType(
            C == null ? void 0 : C.membershipType,
          ),
          v;
        return (
          n[13] !== b ||
          n[14] !== c ||
          n[15] !== l.chat ||
          n[16] !== l.msg ||
          n[17] !== f
            ? ((v = u.jsx(r("WAWebTrackableMessageComponent.react"), {
                component: c,
                chat: l.chat,
                msg: l.msg,
                postId: f,
                channelUserType: b,
              })),
              (n[13] = b),
              (n[14] = c),
              (n[15] = l.chat),
              (n[16] = l.msg),
              (n[17] = f),
              (n[18] = v))
            : (v = n[18]),
          v
        );
      }
      return c;
    }
    l.default = c;
  },
  98,
);
