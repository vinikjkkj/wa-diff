__d(
  "WAWebMsgActionCanDownloadMsg",
  [
    "WAWebFrontendMsgGetters",
    "WAWebMiscGatingUtils",
    "WAWebMsgActionCapability",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMusicEligibleCountriesProvider",
    "WAWebMusicGatingUtils",
    "WAWebMusicParsingUtils",
    "WAWebMusicPlaybackUtils",
    "WAWebStateUtils",
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
            s = o("WAWebMusicParsingUtils").toMusicMetadata(i);
          if (
            (s &&
              !o("WAWebMusicPlaybackUtils").canPlaybackMusic(
                s.countryBlocklist,
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
        n.isViewOnce
        ? !1
        : n.type === o("WAWebMsgType").MSG_TYPE.VCARD ||
            n.type === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD
          ? !0
          : !(
              n.mediaData == null ||
              (t !== !0 && !n.mediaData.isDownloadable()) ||
              (n.type === o("WAWebMsgType").MSG_TYPE.PTV &&
                !o("WAWebMsgGetters").getIsSentByMe(n)) ||
              !o("WAWebMsgActionCapability").canWamoSubMsgBeSharedByUser(n, r)
            );
    }
    l.canDownloadMsg = e;
  },
  98,
);
