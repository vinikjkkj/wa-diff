__d(
  "WAWebMediaPrepHelpers",
  [
    "invariant",
    "WALogger",
    "WAWebABProps",
    "WAWebChatGetters",
    "WAWebFrontendChatGetters",
    "WAWebMediaGatingUtils",
    "WAWebMmsMediaTypes",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebSendMsgResultAction",
    "WAWebStateUtils",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamEnumMessageSendResultType",
    "err",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(e, t) {
      if (t.type === "product")
        return o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
          .PRODUCT_CATALOG;
      var n = o("WAWebStateUtils").unproxy(e);
      return o("WAWebChatGetters").getIsGroup(n)
        ? o("WAWebFrontendChatGetters").getIsCAG(n)
          ? o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.COMMUNITY
          : o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_GROUP
        : o("WAWebChatGetters").getIsNewsletter(n)
          ? o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHANNEL
          : o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
              .CHAT_PERSONAL;
    }
    function c(e) {
      var t = o("WAWebMmsMediaTypes").getMsgMediaType(e);
      return (
        o("WAWebABProps").getABPropConfigValue(
          "upload_document_thumb_mms_enabled",
        ) && t === o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT
      );
    }
    var d = [
      o("WAWebMmsMediaTypes").MEDIA_TYPES.VIDEO,
      o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE,
    ];
    function m(e) {
      var t = o("WAWebMmsMediaTypes").getMsgMediaType(e);
      return d.includes(t);
    }
    function p(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT
        ? c(e)
        : e.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
          ? !0
          : o("WAWebMsgGetters").getIsStatus(e)
            ? m(e)
            : !1;
    }
    function _(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT
        ? o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_DOCUMENT
        : e.type === o("WAWebMsgType").MSG_TYPE.IMAGE
          ? o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_IMAGE
          : e.type === o("WAWebMsgType").MSG_TYPE.VIDEO
            ? o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_VIDEO
            : e.type === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
              ? o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_STICKER_PACK
              : s(
                  !1,
                  "getMediaTypeForThumbnails: attempt to create thumbnail for unsupported media type",
                );
    }
    function f(t) {
      var n = t.fullPreviewSize,
        a = t.mediaObject,
        i = t.mediaResultEntry,
        l = t.mediaType,
        s = t.uploadEncryptedThumbnail,
        u = t.uploadThumbnailResult,
        c = u == null ? void 0 : u.mediaEntry;
      if (s === !0) {
        if (c && u && n)
          return {
            thumbnailDirectPath: c.directPath,
            thumbnailSha256: u.filehash,
            thumbnailEncSha256: c.encFilehash,
            thumbnailHeight: n.height,
            thumbnailWidth: n.width,
          };
        var d = {
          thumbnailResultEntry: c,
          uploadThumbnailResult: u,
          fullPreviewSize: n,
        };
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose(
                  ["upload failed: thumbnail data incomplete\nDebug info:", ""],
                  [
                    "upload failed: thumbnail data incomplete\\nDebug info:",
                    "",
                  ],
                )),
              JSON.stringify(d),
            )
            .sendLogs("mms-thumbnail-data-incomplete"),
          r("err")("upload failed: thumbnail data incomplete")
        );
      }
      var m = a.contentInfo,
        p = m.fullHeight,
        _ = m.fullWidth;
      if (
        i.getThumbnailDirectPath() != null &&
        i.getThumbnailSha256() != null &&
        _ != null &&
        p != null &&
        o(
          "WAWebMediaGatingUtils",
        ).isThumbnailGenerationOnServerEnabledForMediaType(l)
      )
        return {
          thumbnailDirectPath: i.getThumbnailDirectPath(),
          thumbnailSha256: i.getThumbnailSha256(),
          thumbnailHeight: p,
          thumbnailWidth: _,
        };
    }
    function g(e) {
      var t;
      return (
        (t = e.wamMessageSendReporter) == null ||
          t.postFailure({
            result: o("WAWebWamEnumMessageSendResultType")
              .MESSAGE_SEND_RESULT_TYPE.ERROR_UPLOAD,
            isTerminal: !0,
          }),
        o("WAWebSendMsgResultAction").SendMsgResult.ERROR_UPLOAD
      );
    }
    ((l.getDownloadOriginForChat = u),
      (l.shouldUploadThumbnail = p),
      (l.getMediaTypeForThumbnails = _),
      (l.maybeGetThumbnailData = f),
      (l.errorUpload = g));
  },
  98,
);
