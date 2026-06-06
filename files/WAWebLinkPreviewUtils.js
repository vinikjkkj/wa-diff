__d(
  "WAWebLinkPreviewUtils",
  [
    "WABase64",
    "WALogger",
    "WAWebDownloadManager",
    "WAWebStartMediaDownloadQpl",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return e == null
        ? o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHAT_PERSONAL
        : r("WAWebWid").isNewsletter(e)
          ? o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE.CHANNEL
          : r("WAWebWid").isGroup(e)
            ? o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
                .CHAT_GROUP
            : r("WAWebWid").isBroadcast(e)
              ? o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
                  .BROADCAST
              : o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
                  .CHAT_PERSONAL;
    }
    function d(e) {
      var t = e.linkDetails,
        n = e.linkThumbnail,
        r = e.paymentLinkDetails,
        o = e.url,
        a = n != null ? n : { thumbnail: void 0 };
      return {
        url: o,
        data: babelHelpers.extends({ matchedText: o }, t, a, r),
      };
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chatWid,
            a = t.encryptionParams,
            i = t.hqThumbnailParams,
            l = t.mediaType,
            d = t.thumbnail,
            m = i != null ? i : {},
            p = m.directPath,
            _ = m.thumbHash,
            f = { thumbnail: d };
          if (_ == null || p == null || p === "")
            return (
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: malformed HQ preview",
                  ])),
              ),
              f
            );
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "link preview: found HQ preview",
              ])),
          );
          var g = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
            entryPoint: "LinkPreviewDownload",
          });
          try {
            var h = a != null ? a : { encFilehash: null },
              y = yield o(
                "WAWebDownloadManager",
              ).downloadManager.downloadAndMaybeDecrypt(
                babelHelpers.extends(
                  {
                    directPath: p,
                    filehash: _,
                    type: l,
                    signal: new AbortController().signal,
                    userDownloadAttemptCount: 0,
                    chatWid: n,
                    downloadQpl: g,
                    downloadOrigin: c(n),
                  },
                  h,
                ),
              ),
              C = o("WABase64").encodeB64(y),
              b = m.thumbHeight,
              v = m.thumbWidth;
            return (
              g.endSuccess(),
              {
                thumbnail: d,
                thumbnailDirectPath: p,
                thumbnailSha256: _,
                thumbnailHQ: C,
                thumbnailHeight: C != null ? b : void 0,
                thumbnailWidth: C != null ? v : void 0,
                thumbnailEncSha256: h.encFilehash,
                mediaKeyTimestamp: h.mediaKeyTimestamp,
                mediaKey: h.mediaKey,
              }
            );
          } catch (e) {
            return (
              g.endFailWithError(
                "download_failed",
                r("getErrorSafe")(e).message,
              ),
              o("WALogger").ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    " Failed to download HQ link preview ",
                    "",
                  ])),
                e,
              ),
              f
            );
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.genLinkPreview = d), (l.getThumbnailDetails = m));
  },
  98,
);
