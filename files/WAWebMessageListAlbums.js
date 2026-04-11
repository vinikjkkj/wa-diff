__d(
  "WAWebMessageListAlbums",
  ["WAWebMsgGetters", "WAWebMsgType", "WAWebWid"],
  function (t, n, r, o, a, i, l) {
    var e = 4,
      s = 102,
      u = 168,
      c = 240,
      d = 3,
      m = 600,
      p = [o("WAWebMsgType").MSG_TYPE.CALL_LOG];
    function _(e, t) {
      var n, a;
      return h(e, t)
        ? !1
        : (o("WAWebMsgGetters").getIsGroupMsg(e)
            ? r("WAWebWid").equals(e.author, t.author)
            : r("WAWebWid").equals(e.from, t.from)) &&
            e.isForwarded === t.isForwarded &&
            ((n = e.forwardedNewsletterMessageInfo) == null
              ? void 0
              : n.newsletterId) ===
              ((a = t.forwardedNewsletterMessageInfo) == null
                ? void 0
                : a.newsletterId) &&
            t.t - e.t <= m;
    }
    var f = function (t) {
      return !p.includes(t.type) && o("WAWebMsgGetters").getIsNotification(t);
    };
    function g(e, t) {
      return f(e) || f(t)
        ? !1
        : e.forwardedNewsletterMessageInfo != null
          ? t.forwardedNewsletterMessageInfo == null
            ? !1
            : e.forwardedNewsletterMessageInfo.newsletterId ===
              t.forwardedNewsletterMessageInfo.newsletterId
          : o("WAWebMsgGetters").getIsGroupMsg(e)
            ? r("WAWebWid").equals(e.author, t.author) &&
              o("WAWebMsgGetters").getIsSentByMe(e) ===
                o("WAWebMsgGetters").getIsSentByMe(t)
            : h(e, t)
              ? !1
              : r("WAWebWid").equals(e.from, t.from);
    }
    function h(e, t) {
      var n = o("WAWebMsgGetters").getNewsletterAdminProfile(e),
        r = o("WAWebMsgGetters").getNewsletterAdminProfile(t);
      return (
        (n != null || r != null) &&
        ((n == null ? void 0 : n.id) !== (r == null ? void 0 : r.id) ||
          (n == null ? void 0 : n.name) !== (r == null ? void 0 : r.name) ||
          (n == null ? void 0 : n.pictureId) !==
            (r == null ? void 0 : r.pictureId))
      );
    }
    ((l.ALBUM_MIN_SIZE = e),
      (l.ALBUM_MAX_SIZE = s),
      (l.ALBUM_MAX_HEIGHT = u),
      (l.ALBUM_ANNOUNCEMENT_MAX_HEIGHT = c),
      (l.ALBUM_PADDING = d),
      (l.canBeGroupedAsAlbum = _),
      (l.canBeGroupedWithNext = g));
  },
  98,
);
