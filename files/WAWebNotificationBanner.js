__d(
  "WAWebNotificationBanner",
  ["WAWebBaseNotificationBanner", "WAWebEmoji", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n = t.actions,
          a = t.body,
          i = t.contextMenuItems,
          l = t.data,
          s = t.doNotOpenChat,
          u = t.footer,
          c = t.icon,
          d = t.isReplyable,
          m = t.key,
          p = t.msgId,
          _ = t.onClick,
          f = t.renotify,
          g = t.requireInteraction,
          h = t.showViaServiceWorker,
          y = t.suppressBanner,
          C = t.tag,
          b = t.title,
          v = t.wid;
        return (
          e.call(this, {
            key: m,
            msgId: p,
            options: {
              actions: n,
              body: o("WAWebEmoji").EmojiUtil.normalizeAllEmojis(a),
              contextMenuItems: i,
              data: l,
              doNotOpenChat: s,
              footer: u,
              icon: r("WAWebURLUtils").relToAbs(c),
              isReplyable: d,
              notification: window.Notification,
              onClick: _,
              renotify: f,
              requireInteraction: g,
              showViaServiceWorker: h,
              suppressBanner: y,
              title: o("WAWebEmoji").EmojiUtil.normalizeAllEmojis(b),
            },
            tag: C,
            wid: v,
          }) || this
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(r("WAWebBaseNotificationBanner"));
    l.default = e;
  },
  98,
);
