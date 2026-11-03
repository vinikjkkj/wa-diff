__d(
  "WAWebMediaPrepMediaProps",
  [
    "Promise",
    "WALogger",
    "WAWebMediaDataUtils",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaMmsV4Download",
    "WAWebMediaOpaqueData",
    "WAWebMediaSendMetadataWriterLoadable",
    "WAWebMediaStorage",
    "WAWebMmsMediaTypes",
    "WAWebNullFunc",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      var t, r;
      return (t =
        (r = e.aiProvenancePromise) == null
          ? void 0
          : r.catch(o("WAWebNullFunc").returnNull)) != null
        ? t
        : (c || (c = n("Promise"))).resolve(null);
    }
    function m(t, a) {
      return t
        .waitForPrep()
        .then(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                return (
                  a.aiProvenancePromise == null ||
                    (yield o(
                      "WAWebMediaSendMetadataWriterLoadable",
                    ).writeMediaMetadataForSend({
                      isChannel:
                        a.isNewsletterMsg === !0 || a.isNewsletterStatus === !0,
                      media: e,
                      resolveVerdict: function () {
                        return d(a);
                      },
                    })),
                  e
                );
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        )
        .then(function (e) {
          var t = e.mediaBlob;
          return t && !(t instanceof r("WAWebMediaOpaqueData"))
            ? r("WAWebMediaOpaqueData")
                .createFromData(t, t.type)
                .then(function (t) {
                  return ((e.mediaBlob = t), e);
                })
            : e;
        })
        .then(function (t) {
          var n,
            i,
            l = t.filehash;
          l ||
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Assertion failed!",
                  ])),
              )
              .sendLogs("media-fault: sendToChat filehash undefined");
          var c = t.mediaBlob instanceof r("WAWebMediaOpaqueData"),
            d = l != null ? l : "none",
            m = (n = a.forwardedFromWeb) != null ? n : !1;
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[media-fwd] getMediaPropsNew hash=",
                " blob=",
                " type=",
                " fwd=",
                "",
              ])),
            d,
            c,
            t.type,
            m,
          );
          var p = o("WAWebMediaStorage").getOrCreateMediaObject(l),
            _ = p.mediaBlob;
          (_ &&
            (_.retain(),
            t.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              t.mediaBlob.autorelease(),
            (t.mediaBlob = _)),
            t.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              (t.renderableUrl = t.mediaBlob.url()),
            p.consolidate(t.toJSON()),
            t.mediaBlob instanceof r("WAWebMediaOpaqueData") &&
              t.mediaBlob.autorelease());
          var f = o("WAWebMediaDataUtils").shouldUseMediaCache(
            o("WAWebMmsMediaTypes").castToV4(p.type),
          );
          if (f && t.mediaBlob instanceof r("WAWebMediaOpaqueData")) {
            var g = t.mediaBlob.formData();
            o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.put(l, g);
          }
          var h = f && t.mediaBlob instanceof r("WAWebMediaOpaqueData"),
            y = p.mediaBlob != null,
            C = p.msgs.length,
            b = p.entries.entries.length;
          (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[media-fwd] post-merge blob=",
                " msgs=",
                " entries=",
                " cache=",
                " mem=",
                "",
              ])),
            y,
            C,
            b,
            f,
            h,
          ),
            o("WAWebMediaMmsV4Download").downloadMedia({
              mimetype: t.mimetype,
              mediaObject: p,
              downloadEvenIfExpensive: !0,
              mediaType: o("WAWebMmsMediaTypes").msgToMediaType({
                type: t.type,
                isGif: t.isGif,
                isNewsletter: a.isNewsletterMsg === !0,
              }),
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .SEND_TO_CHAT,
              downloadOrigin:
                (i = a.downloadOrigin) != null
                  ? i
                  : o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
                      .CHAT_PERSONAL,
              mode: "manual",
              chatWid: a.chatWid,
            }));
          var v = babelHelpers.extends({}, p.msgProps(t));
          return (
            (v.caption = a.caption),
            a.isViewOnce === !0 && (v.isViewOnce = !0),
            v
          );
        });
    }
    l.default = m;
  },
  98,
);
