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
          e.call(this, h, d, f, c, {
            title: o("WAWebEmoji").EmojiUtil.normalizeAllEmojis(g),
            notification: window.Notification,
            body: o("WAWebEmoji").EmojiUtil.normalizeAllEmojis(n),
            icon: r("WAWebURLUtils").relToAbs(s),
            onClick: m,
            renotify: p,
            doNotOpenChat: i,
            footer: l,
            isReplyable: u,
            contextMenuItems: a,
            suppressBanner: _,
          }) || this
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(r("WAWebBaseNotificationBanner"));
    l.default = e;
  },
  98,
);
