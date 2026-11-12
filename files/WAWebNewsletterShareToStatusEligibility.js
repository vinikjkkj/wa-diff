__d(
  "WAWebNewsletterShareToStatusEligibility",
  [
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 4,
      s = 700,
      u = 10;
    function c(e) {
      return (
        o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
        !o("WAWebMsgGetters").getIsNewsletterStatus(e) &&
        !d(e) &&
        p(e) &&
        o("WAWebMsgActionCapability").canForwardMsg(e) &&
        o("WAWebNewsletterGatingUtils").isChannelsQuickShareToStatusEnabled() &&
        y(e)
      );
    }
    function d(e) {
      return (
        o("WAWebMsgGetters").getIsViewOnce(e) ||
        o("WAWebMsgGetters").getIsViewOncePlaceholder(e)
      );
    }
    function m(e) {
      return (
        o("WAWebMsgGetters").getIsQuestion(e) ||
        o("WAWebMsgGetters").getIsQuestionReply(e)
      );
    }
    function p(t) {
      return t.type === o("WAWebMsgType").MSG_TYPE.CHAT ||
        t.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
        t.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT ||
        t.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
        ? !0
        : t.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
            t.type === o("WAWebMsgType").MSG_TYPE.VIDEO
          ? o("WAWebMsgActionCapability").hasRetrievableMedia(t)
          : t.type === o("WAWebMsgType").MSG_TYPE.PTV
            ? o("WAWebMsgActionCapability").hasRetrievableMedia(t) &&
              !m(t) &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterPTVForwardingToStatusEnabled()
            : t.type === o("WAWebMsgType").MSG_TYPE.PTT
              ? o("WAWebMsgActionCapability").hasRetrievableMedia(t) &&
                !m(t) &&
                o(
                  "WAWebNewsletterGatingUtils",
                ).isNewsletterPTTStatusCardEnabled()
              : t.type === o("WAWebMsgType").MSG_TYPE.ALBUM
                ? f(t).slice(0, e).some(_)
                : t.type === o("WAWebMsgType").MSG_TYPE.STICKER
                  ? o("WAWebMsgActionCapability").hasRetrievableMedia(t)
                  : !1;
    }
    function _(e) {
      var t = e.mediaData;
      if (e.type === o("WAWebMsgType").MSG_TYPE.VIDEO) {
        var n =
          (t == null ? void 0 : t.fullPreviewData) != null ||
          (t == null ? void 0 : t.preview) != null;
        if (n || e.isGif === !0) return n;
      }
      return (
        (t == null ? void 0 : t.mediaBlob) != null ||
        o("WAWebMsgActionCapability").hasRetrievableMedia(e)
      );
    }
    function f(e) {
      return o("WAWebMsgCollection")
        .MsgCollection.byParentMessage(e.id)
        .filter(function (e) {
          return (
            (e.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
              e.type === o("WAWebMsgType").MSG_TYPE.VIDEO) &&
            !e.pendingDeleteForMe
          );
        })
        .sort(function (e, t) {
          return e.t - t.t;
        });
    }
    function g(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
        e.type === o("WAWebMsgType").MSG_TYPE.STICKER ||
        e.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
        e.type === o("WAWebMsgType").MSG_TYPE.PTV ||
        e.type === o("WAWebMsgType").MSG_TYPE.PTT
      );
    }
    function h(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.CHAT ||
        e.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
        e.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
        e.type === o("WAWebMsgType").MSG_TYPE.PTV
      );
    }
    function y(e) {
      var t;
      return e.type === o("WAWebMsgType").MSG_TYPE.CHAT
        ? C((t = e.body) != null ? t : "") ||
            o("WAWebNewsletterGatingUtils").isChannelsPostStatusCardEnabled()
        : e.type === o("WAWebMsgType").MSG_TYPE.ALBUM
          ? o("WAWebNewsletterGatingUtils").isChannelsPostStatusCardEnabled() &&
            o(
              "WAWebNewsletterGatingUtils",
            ).isChannelsAlbumsForwardingToStatusEnabled()
          : e.type === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
              e.type === o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT ||
              e.type === o("WAWebMsgType").MSG_TYPE.STICKER ||
              e.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
            ? o("WAWebNewsletterGatingUtils").isChannelsPostStatusCardEnabled()
            : e.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
                e.type === o("WAWebMsgType").MSG_TYPE.PTV ||
                e.type === o("WAWebMsgType").MSG_TYPE.PTT
              ? o(
                  "WAWebNewsletterGatingUtils",
                ).isChannelsPostStatusVideoCardEnabled()
              : !0;
    }
    function C(e) {
      return e.length <= s && e.split("\n").length <= u;
    }
    ((l.NEWSLETTER_STATUS_CARD_ALBUM_MAX_ITEMS = e),
      (l.canShareNewsletterMsgToStatus = c),
      (l.canDrawNewsletterAlbumItem = _),
      (l.getNewsletterAlbumMedia = f),
      (l.hasNewsletterUpdateMedia = g),
      (l.canShareNewsletterMsgAsPlainStatus = h),
      (l.fitsTextStatus = C));
  },
  98,
);
