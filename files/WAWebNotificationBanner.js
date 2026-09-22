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
          g = t.showViaServiceWorker,
          h = t.suppressBanner,
          y = t.tag,
          C = t.title,
          b = t.wid;
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
              showViaServiceWorker: g,
              suppressBanner: h,
              title: o("WAWebEmoji").EmojiUtil.normalizeAllEmojis(C),
            },
            tag: y,
            wid: b,
          }) || this
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(r("WAWebBaseNotificationBanner"));
    l.default = e;
  },
  98,
);
