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
    var e, s, u, c;
    function d(e) {
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
    function m(e) {
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
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chatWid,
            a = t.encryptionParams,
            i = t.hqThumbnailParams,
            l = t.mediaType,
            m = t.thumbnail,
            p = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "LinkPreviewDownload",
            }),
            _ = i != null ? i : {},
            f = _.directPath,
            g = _.thumbHash,
            h = { thumbnail: m };
          if (g == null)
            return (
              p.endFail("missing_thumbnail_hash", {
                string: { earlyExitReason: "missing_thumbnail_hash" },
              }),
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: malformed HQ preview",
                  ])),
              ),
              h
            );
          if (f == null || f === "")
            return (
              p.endFail("missing_direct_path", {
                string: { earlyExitReason: "missing_direct_path" },
              }),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: malformed HQ preview",
                  ])),
              ),
              h
            );
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "link preview: found HQ preview",
              ])),
          );
          try {
            var y = a != null ? a : { encFilehash: null },
              C = yield o(
                "WAWebDownloadManager",
              ).downloadManager.downloadAndMaybeDecrypt(
                babelHelpers.extends(
                  {
                    directPath: f,
                    filehash: g,
                    type: l,
                    signal: new AbortController().signal,
                    userDownloadAttemptCount: 0,
                    chatWid: n,
                    downloadQpl: p,
                    downloadOrigin: d(n),
                  },
                  y,
                ),
              );
            p.addPoint("thumbnail_encode_start");
            var b = o("WABase64").encodeB64(C);
            p.addPoint("thumbnail_encode_end");
            var v = _.thumbHeight,
              S = _.thumbWidth,
              R = {
                thumbnail: m,
                thumbnailDirectPath: f,
                thumbnailSha256: g,
                thumbnailHQ: b,
                thumbnailHeight: b != null ? v : void 0,
                thumbnailWidth: b != null ? S : void 0,
                thumbnailEncSha256: y.encFilehash,
                mediaKeyTimestamp: y.mediaKeyTimestamp,
                mediaKey: y.mediaKey,
              };
            return (p.endSuccess(), R);
          } catch (e) {
            return (
              p.endFailWithError(
                "download_failed",
                r("getErrorSafe")(e).message,
              ),
              o("WALogger").ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    " Failed to download HQ link preview ",
                    "",
                  ])),
                e,
              ),
              h
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    ((l.genLinkPreview = m), (l.getThumbnailDetails = p));
  },
  98,
);
