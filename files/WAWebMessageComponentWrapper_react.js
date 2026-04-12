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
    "useWAWebBizVPVData",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["msgComponentRef", "onContextMenu"],
      s,
      u = s || (s = o("react"));
    function c(t) {
      var n,
        a = t.msgComponentRef,
        i = t.onContextMenu,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s =
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
              }),
        c = o("WAWebFrontendMsgGetters").getChat(l.msg),
        d = o("WAWebChatGetters").getIsNewsletter(c),
        m = (n = l.msg.serverId) == null ? void 0 : n.toString(),
        p = r("useWAWebBizVPVData")(l.msg);
      if (p != null)
        return u.jsx(r("WAWebBizVPVTrackableMessageComponent.react"), {
          component: s,
          visibilityData: p,
        });
      var _ =
          d &&
          o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterVPVMessageVisibilityLoggingEnabled(),
        f = c.newsletterMetadata;
      if (_ && m != null && f != null) {
        var g = o("WAWebNewsletterLoggingUtils").getChannelUserType(
          f == null ? void 0 : f.membershipType,
        );
        return u.jsx(r("WAWebTrackableMessageComponent.react"), {
          component: s,
          chat: l.chat,
          msg: l.msg,
          postId: m,
          channelUserType: g,
        });
      }
      return s;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
