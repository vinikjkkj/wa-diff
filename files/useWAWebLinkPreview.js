__d(
  "useWAWebLinkPreview",
  [
    "WAAbortError",
    "WALogger",
    "WAPromiseRaceAbort",
    "WAWebCodeFormatMutator",
    "WAWebCryptoRandomMediaKey",
    "WAWebLinkPreviewChatAction",
    "WAWebLinkify",
    "WAWebMediaConstants",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebMediaOpaqueData",
    "WAWebMediaUploadMmsThumbnail",
    "WAWebMmsMediaTypes",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = m.useEffect,
      _ = m.useState,
      f = function (t) {
        var e = o("WAWebCodeFormatMutator").removeCodeBlocks(t),
          n = o("WAWebLinkify").findLinks(e, !0)[0];
        if (n) return n;
      };
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (e.thumbnailDirectPath != null)
            return (
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "link preview: use cached mms details (useLinkPreview)",
                  ])),
              ),
              {
                mediaKey: e.mediaKey,
                mediaKeyTimestamp: e.mediaKeyTimestamp,
                thumbnailDirectPath: e.thumbnailDirectPath,
                thumbnailSha256: e.thumbnailSha256,
                thumbnailEncSha256: e.thumbnailEncSha256,
              }
            );
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "link preview: upload to mms",
              ])),
          );
          try {
            if (e.thumbnailHQ == null) return null;
            var a = yield r("WAPromiseRaceAbort")(
                r("WAWebMediaOpaqueData").createFromBase64Jpeg(e.thumbnailHQ),
                t,
              ),
              i = yield r("WAWebMediaUploadMmsThumbnail")({
                thumbnail: a,
                mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.THUMBNAIL_LINK,
                mediaKeyInfo: r("WAWebCryptoRandomMediaKey")(),
                uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(n),
                forwardedFromWeb: !1,
                signal: t,
                timeout: o("WAWebMediaConstants").MMS_THUMBNAIL_UPLOAD_TIMEOUT,
                isViewOnce: !1,
              }),
              l = i.mediaEntry;
            return l
              ? {
                  mediaKey: l.mediaKey,
                  mediaKeyTimestamp: l.mediaKeyTimestamp,
                  thumbnailDirectPath: l.directPath,
                  thumbnailSha256: i.filehash,
                  thumbnailEncSha256: l.encFilehash,
                }
              : void 0;
          } catch (e) {
            if (e.name === o("WAAbortError").ABORT_ERROR) return;
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "useLinkPreview.uploadHQPreview: error",
                ])),
            );
          }
        })),
        h.apply(this, arguments)
      );
    }
    function y(t, a) {
      var i = _(null),
        l = i[0],
        s = i[1],
        u = function () {
          s(null);
        };
      return (
        p(
          function () {
            if ((u(), !!t)) {
              var i = new AbortController(),
                l = i.signal;
              return (
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  try {
                    var n = yield r("WAPromiseRaceAbort")(
                        o("WAWebLinkPreviewChatAction").getLinkPreview(t, a),
                        l,
                      ),
                      i = n == null ? void 0 : n.data;
                    if (!i || (s(i), !i.thumbnailHQ)) return;
                    var u = yield g(i, l, a);
                    if (!u) return;
                    s(babelHelpers.extends({}, i, u));
                  } catch (t) {
                    if (t.name === o("WAAbortError").ABORT_ERROR) return;
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "useLinkPreview: error",
                        ])),
                    );
                  }
                })(),
                function () {
                  i.signal.aborted || i.abort();
                }
              );
            }
          },
          [t == null ? void 0 : t.url, a],
        ),
        { linkPreview: l, clearLinkPreview: u }
      );
    }
    ((l.findFirstWebLink = f), (l.useLinkPreview = y));
  },
  98,
);
