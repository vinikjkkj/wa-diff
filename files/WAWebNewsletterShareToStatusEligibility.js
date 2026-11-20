__d(
  "WAWebNewsletterShareToStatusEligibility",
  [
    "WAWebMsgActionCapability",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebNewsletterStatusCardVoiceSupport",
    "WAWebSoundStickerUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 4,
      s = 700,
      u = 10;
    function c(e) {
      return (
        p(e) &&
        o("WAWebNewsletterGatingUtils").isChannelsQuickShareToStatusEnabled() &&
        v(e)
      );
    }
    function d(e) {
      return (
        e.length > 0 &&
        e.every(m) &&
        o("WAWebNewsletterGatingUtils").isChannelsForwardToMyStatusEnabled() &&
        e.every(v)
      );
    }
    function m(e) {
      return (
        p(e) &&
        !o("WAWebSoundStickerUtils").isSoundStickerMsg(e) &&
        (o("WAWebMsgGetters").getNewsletterAdminProfile(e) == null ||
          o(
            "WAWebNewsletterGatingUtils",
          ).isNewsletterAdminProfilesForwardingToStatusEnabled())
      );
    }
    function p(e) {
      return (
        o("WAWebMsgGetters").getIsNewsletterMsg(e) &&
        !o("WAWebMsgGetters").getIsNewsletterStatus(e) &&
        !_(e) &&
        g(e) &&
        o("WAWebMsgActionCapability").canForwardMsg(e)
      );
    }
    function _(e) {
      return (
        o("WAWebMsgGetters").getIsViewOnce(e) ||
        o("WAWebMsgGetters").getIsViewOncePlaceholder(e)
      );
    }
    function f(e) {
      return (
        o("WAWebMsgGetters").getIsQuestion(e) ||
        o("WAWebMsgGetters").getIsQuestionReply(e)
      );
    }
    function g(t) {
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
              !f(t) &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterPTVForwardingToStatusEnabled()
            : t.type === o("WAWebMsgType").MSG_TYPE.PTT
              ? o("WAWebMsgActionCapability").hasRetrievableMedia(t) &&
                !f(t) &&
                o(
                  "WAWebNewsletterGatingUtils",
                ).isNewsletterPTTStatusCardEnabled() &&
                o(
                  "WAWebNewsletterStatusCardVoiceSupport",
                ).isVoiceNoteStatusCardSupported()
              : t.type === o("WAWebMsgType").MSG_TYPE.ALBUM
                ? y(t).slice(0, e).some(h)
                : t.type === o("WAWebMsgType").MSG_TYPE.STICKER
                  ? o("WAWebMsgActionCapability").hasRetrievableMedia(t)
                  : !1;
    }
    function h(e) {
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
    function y(e) {
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
    function C(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
        e.type === o("WAWebMsgType").MSG_TYPE.STICKER ||
        e.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
        e.type === o("WAWebMsgType").MSG_TYPE.PTV ||
        e.type === o("WAWebMsgType").MSG_TYPE.PTT
      );
    }
    function b(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.CHAT ||
        e.type === o("WAWebMsgType").MSG_TYPE.IMAGE ||
        e.type === o("WAWebMsgType").MSG_TYPE.VIDEO ||
        e.type === o("WAWebMsgType").MSG_TYPE.PTV
      );
    }
    function v(e) {
      var t;
      return e.type === o("WAWebMsgType").MSG_TYPE.CHAT
        ? S((t = e.body) != null ? t : "") ||
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
    function S(e) {
      return e.length <= s && e.split("\n").length <= u;
    }
    ((l.NEWSLETTER_STATUS_CARD_ALBUM_MAX_ITEMS = e),
      (l.canShareNewsletterMsgToStatus = c),
      (l.canForwardNewsletterUpdatesToMyStatus = d),
      (l.canDrawNewsletterAlbumItem = h),
      (l.getNewsletterAlbumMedia = y),
      (l.hasNewsletterUpdateMedia = C),
      (l.canShareNewsletterMsgAsPlainStatus = b),
      (l.fitsTextStatus = S));
  },
  98,
);
