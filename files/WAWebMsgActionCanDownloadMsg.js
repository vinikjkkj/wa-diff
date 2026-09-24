__d(
  "WAWebMsgActionCanDownloadMsg",
  [
    "WAWebFrontendMsgGetters",
    "WAWebMediaTypes",
    "WAWebMiscGatingUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMusicEligibleCountriesProvider",
    "WAWebMusicGatingUtils",
    "WAWebMusicParsingUtils",
    "WAWebMusicPlaybackUtils",
    "WAWebStateUtils",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WAWebStateUtils").unproxy(e),
        r = o("WAWebFrontendMsgGetters").getChat(n);
      if (
        r.isSuspendedOrTerminated() &&
        o("WAWebMiscGatingUtils").isGroupSuspendV2Enabled()
      )
        return !1;
      if (
        o("WAWebMsgGetters").getIsNewsletterMsg(n) &&
        n.type === o("WAWebMsgType").MSG_TYPE.VIDEO
      ) {
        var a,
          i =
            (a = o("WAWebMsgGetters").getFirstMusicAnnotation(n)) == null ||
            (a = a.embeddedContent) == null
              ? void 0
              : a.embeddedMusic;
        if (i != null) {
          if (
            Number(i.overlapDurationInMs) >
            o("WAWebMusicGatingUtils").MAX_MUSIC_DOWNLOAD_EMBED_DURATION_MS
          )
            return !1;
          var l = o(
              "WAWebMusicEligibleCountriesProvider",
            ).provideMusicEligibleCountries(),
            u = o("WAWebMusicParsingUtils").toMusicMetadata(i);
          if (
            (u &&
              !o("WAWebMusicPlaybackUtils").canPlaybackMusic(
                u.countryBlocklist,
                l,
              )) ||
            !o("WAWebMusicGatingUtils").isStatusMusicSaveToDiskEnabled()
          )
            return !1;
        }
      }
      return n.type === o("WAWebMsgType").MSG_TYPE.STICKER ||
        n.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK ||
        o("WAWebFrontendMsgGetters").getAsRevoked(n) ||
        n.isViewOnce === !0 ||
        o("WAWebMsgGetters").getIsViewOncePlaceholder(n)
        ? !1
        : n.type === o("WAWebMsgType").MSG_TYPE.VCARD ||
            n.type === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD
          ? !0
          : !(
              n.mediaData == null ||
              (t !== !0 && !s(n)) ||
              (n.type === o("WAWebMsgType").MSG_TYPE.PTV &&
                !o("WAWebMsgGetters").getIsSentByMe(n)) ||
              !o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(n, r)
            );
    }
    function s(e) {
      var t;
      return e.mediaData.isDownloadable()
        ? !0
        : r("justknobx")._("5943")
          ? ((t = e.mediaObject) == null ? void 0 : t.downloadStage) !==
              o("WAWebMediaTypes").DownloadStage.ERROR_MISSING &&
            o("WAWebMsgActionCapability").hasRetrievableMedia(e)
          : !1;
    }
    l.canDownloadMsg = e;
  },
  98,
);
