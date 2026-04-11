__d(
  "WAWebNewsletterLinkShareLogging",
  ["WAWebChannelLinkShareWamEvent", "WAWebNewsletterGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.linkShareScreen,
        n = e.linkShareScreenEntryPoint,
        r = e.newsletter,
        a = e.shareDirection;
      if (
        o("WAWebNewsletterGatingUtils").isNewsletterLinkShareLoggingEnabled()
      ) {
        var i = new (o(
          "WAWebChannelLinkShareWamEvent",
        ).ChannelLinkShareWamEvent)({
          channelLinkShareDirection: a,
          channelLinkShareEntryPoint: n,
          channelLinkShareScreen: t,
          cid: r.user,
        });
        i.commit();
      }
    }
    l.logNewsletterLinkShare = e;
  },
  98,
);
