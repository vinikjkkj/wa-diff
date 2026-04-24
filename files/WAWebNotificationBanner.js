__d(
  "WAWebNotificationBanner",
  ["WAWebBaseNotificationBanner", "WAWebEmoji", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n = t.body,
          a = t.contextMenuItems,
          i = t.doNotOpenChat,
          l = t.footer,
          s = t.icon,
          u = t.isReplyable,
          c = t.key,
          d = t.msgId,
          m = t.onClick,
          p = t.renotify,
          _ = t.suppressBanner,
          f = t.tag,
          g = t.title,
          h = t.wid;
        return (
          e.call(this, {
            key: c,
            msgId: d,
            options: {
              body: o("WAWebEmoji").EmojiUtil.normalizeAllEmojis(n),
              contextMenuItems: a,
              doNotOpenChat: i,
              footer: l,
              icon: r("WAWebURLUtils").relToAbs(s),
              isReplyable: u,
              notification: window.Notification,
              onClick: m,
              renotify: p,
              suppressBanner: _,
              title: o("WAWebEmoji").EmojiUtil.normalizeAllEmojis(g),
            },
            tag: f,
            wid: h,
          }) || this
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(r("WAWebBaseNotificationBanner"));
    l.default = e;
  },
  98,
);
