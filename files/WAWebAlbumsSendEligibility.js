__d(
  "WAWebAlbumsSendEligibility",
  [
    "WAWebMediaGatingUtils",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 2;
    function s(e) {
      var t = e.chat,
        n = e.isViewOnce,
        o = e.medias;
      if (n === !0 || !m(t, o)) return !1;
      var a = r("countWhere")(o, function (e) {
        var t = e.media;
        return u(t);
      });
      return a < p(t, o) ? !1 : _(t);
    }
    function u(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
        (e.type === o("WAWebMsgType").MSG_TYPE.VIDEO && e.isGif !== !0)
      );
    }
    function c(e) {
      var t = e.filter(function (e) {
          var t = e.media;
          return u(t);
        }),
        n = r("countWhere")(t, function (e) {
          var t = e.media;
          return t.type === o("WAWebMsgType").MSG_TYPE.IMAGE;
        });
      return { imageCount: n, videoCount: t.length - n };
    }
    function d(e) {
      return e.caption != null && e.caption.length > 0;
    }
    function m(e, t) {
      return (
        e.id.isBot() ||
        t.every(function (e, t) {
          var n = e.media;
          return t === 0 || !d(n);
        })
      );
    }
    function p(t, n) {
      var r = n.some(function (e) {
        var t = e.media;
        return d(t);
      });
      return !r && t.id.isBot()
        ? e
        : o("WAWebNewsletterGatingUtils").getNewsletterAlbumsV2MinItemsToSend(
            r,
          );
    }
    function _(e) {
      return e.id.isNewsletter()
        ? o("WAWebNewsletterGatingUtils").isNewsletterAlbumsV2SenderEnabled()
        : e.id.isGroup() || e.id.isUserNotPSA()
          ? o("WAWebMediaGatingUtils").isAlbumV2SenderEnabled()
          : !1;
    }
    ((l.isAlbumSendEligible = s), (l.isAlbumItem = u), (l.countAlbumItems = c));
  },
  98,
);
