__d(
  "WAWebNotificationBanner",
  ["WAWebBaseNotificationBanner", "WAWebEmoji", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t) {
        var n = t.actions,
          a = t.alwaysHighlightMsg,
          i = t.body,
          l = t.contextMenuItems,
          s = t.data,
          u = t.doNotOpenChat,
          c = t.footer,
          d = t.icon,
          m = t.isReplyable,
          p = t.key,
          _ = t.msgId,
          f = t.onClick,
          g = t.renotify,
          h = t.requireInteraction,
          y = t.showViaServiceWorker,
          C = t.suppressBanner,
          b = t.tag,
          v = t.title,
          S = t.wid;
        return (
          e.call(this, {
            key: p,
            msgId: _,
            options: {
              actions: n,
              alwaysHighlightMsg: a,
              body: o("WAWebEmoji").EmojiUtil.normalizeAllEmojis(i),
              contextMenuItems: l,
              data: s,
              doNotOpenChat: u,
              footer: c,
              icon: r("WAWebURLUtils").relToAbs(d),
              isReplyable: m,
              notification: window.Notification,
              onClick: f,
              renotify: g,
              requireInteraction: h,
              showViaServiceWorker: y,
              suppressBanner: C,
              title: o("WAWebEmoji").EmojiUtil.normalizeAllEmojis(v),
            },
            tag: b,
            wid: S,
          }) || this
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(r("WAWebBaseNotificationBanner"));
    l.default = e;
  },
  98,
);
