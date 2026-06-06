__d(
  "WAWebFileSaverDownloadData",
  [
    "Promise",
    "WALogger",
    "WAWebFilenameManager",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgType",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebZipUtils",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = Array.isArray(t) ? t : [t];
          try {
            var i = yield (u || (u = n("Promise"))).all(
              a.map(function (e) {
                return m(e);
              }),
            );
            if (i.length > 1) {
              var l = yield o("WAWebZipUtils").zipFiles(i);
              return {
                blob: l,
                name: o("WAWebFilenameManager").getDefaultName({
                  t: Math.round(Date.now() / 1e3),
                  type: "unknown",
                  mimetype: "application/zip",
                  isVcardOverMmsDocument: !1,
                  filename: "",
                  vcardList: [],
                }),
              };
            }
            return i[0];
          } catch (t) {
            var s = r("getErrorSafe")(t);
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to get msg download data",
                    ])),
                )
                .catching(s)
                .sendLogs("msg-download-data-failed"),
              s
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = "text/vcard";
          if (e.type === o("WAWebMsgType").MSG_TYPE.VCARD)
            return {
              name: o("WAWebFilenameManager").getDefaultName(e),
              blob: new Blob([e.body], { type: t }),
            };
          if (e.type === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD)
            return {
              name: o("WAWebFilenameManager").getDefaultName(e),
              blob: new Blob(
                [
                  e.vcardList
                    .map(function (e) {
                      return e.vcard;
                    })
                    .join("\n"),
                ],
                { type: t },
              ),
            };
          if (e.type === o("WAWebMsgType").MSG_TYPE.ALBUM) {
            var a = o(
              "WAWebMessageAssociationUIUtils",
            ).getHiddenAssociatedMessages(e.id);
            if (a.length > 0) {
              var i = yield (u || (u = n("Promise"))).all(
                a.map(function (e) {
                  return m(e);
                }),
              );
              if (i.length === 1) return i[0];
              var l = yield o("WAWebZipUtils").zipFiles(i);
              return {
                blob: l,
                name: o("WAWebFilenameManager").getDefaultName({
                  t: Math.round(Date.now() / 1e3),
                  type: "unknown",
                  mimetype: "application/zip",
                  isVcardOverMmsDocument: !1,
                  filename: "",
                  vcardList: [],
                }),
              };
            }
            throw (
              o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[debug] getMsgDownloadData Album message has no associated child messages",
                    ])),
                )
                .sendLogs("msg-download-data-almum-no-children"),
              r("err")("Album message has no associated child messages")
            );
          }
          var c = _(e);
          if (c) return c;
          yield e.downloadMedia({
            downloadEvenIfExpensive: !0,
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
              .DOCUMENT_DOWNLOAD,
            isUserInitiated: !0,
          });
          var d = _(e);
          if (d) return d;
          throw r("err")("Unable to download because blob cannot be found");
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      if (e.mediaData == null) return null;
      var t = e.mediaData,
        n = t.filehash,
        a = t.mediaBlob,
        i = t.renderableUrl;
      if (a instanceof r("WAWebMediaOpaqueData"))
        return {
          name: o("WAWebFilenameManager").getDefaultName(e),
          url: i,
          blob: a.forceToBlob(),
        };
      var l = o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(n);
      return l
        ? {
            blob: l,
            name: o("WAWebFilenameManager").getDefaultName(e),
            url: o(
              "WAWebMediaInMemoryBlobCache",
            ).InMemoryMediaBlobCache.getOrCreateURL(n),
          }
        : null;
    }
    ((l.getMultiMsgDownloadData = c), (l.getMsgDownloadData = m));
  },
  98,
);
