__d(
  "WAWebNewsletterSendMsgActionUtils",
  [
    "WAWebFrontendMsgGetters",
    "WAWebMediaConstants",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaOpaqueData",
    "WAWebMediaUploadMmsThumbnail",
    "WAWebMmsMediaTypes",
    "WAWebMsgModelFromData",
    "WAWebMsgModelUtils",
    "WAWebNewsletterErrors",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      return o("WAWebMsgModelUtils").notRefiningTypeIsUrl(e) ? s(e) : e;
    }
    async function s(e) {
      var t = o("WAWebFrontendMsgGetters").getAsUrl(
        o("WAWebMsgModelFromData").msgModelFromMsgData(e),
      );
      if (t == null) return e;
      var n = t.thumbnailHQ;
      if (n == null) return e;
      var a = await r("WAWebMediaUploadMmsThumbnail")({
          thumbnail: await r("WAWebMediaOpaqueData").createFromBase64Jpeg(n),
          mediaType:
            o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK,
          uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(
            o("WAWebFrontendMsgGetters").getChat(t.unsafe()),
          ),
          forwardedFromWeb: !0,
          timeout: o("WAWebMediaConstants").MMS_THUMBNAIL_UPLOAD_TIMEOUT,
          isViewOnce: !1,
        }),
        i = a.filehash,
        l = a.mediaEntry;
      return babelHelpers.extends({}, e, {
        thumbnailDirectPath: l == null ? void 0 : l.directPath,
        thumbnailSha256: i,
        thumbnailEncSha256: void 0,
        mediaKey: void 0,
        mediaKeyTimestamp: void 0,
      });
    }
    function u(e, t) {
      if (e.quotedParticipant != null && e.quotedParticipant !== t.id)
        throw new (o(
          "WAWebNewsletterErrors",
        ).UnexpectedNewsletterQuotedParticipantMismatchError)();
    }
    ((l.prepMsgDataForForward = e), (l.validateMsgDataForMsgSend = u));
  },
  98,
);
