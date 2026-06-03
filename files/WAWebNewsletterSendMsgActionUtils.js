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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebMsgModelUtils").notRefiningTypeIsUrl(e) ? u(e) : e;
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebFrontendMsgGetters").getAsUrl(
            o("WAWebMsgModelFromData").msgModelFromMsgData(e),
          );
          if (t == null) return e;
          var n = t.thumbnailHQ;
          if (n == null) return e;
          var a = yield r("WAWebMediaUploadMmsThumbnail")({
              thumbnail: yield r("WAWebMediaOpaqueData").createFromBase64Jpeg(
                n,
              ),
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
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      if (e.quotedParticipant != null && e.quotedParticipant !== t.id)
        throw new (o(
          "WAWebNewsletterErrors",
        ).UnexpectedNewsletterQuotedParticipantMismatchError)();
    }
    ((l.prepMsgDataForForward = e), (l.validateMsgDataForMsgSend = d));
  },
  98,
);
