__d(
  "WAWebFileSaverDownloadData",
  [
    "Promise",
    "WAAbortError",
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
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          a === void 0 && (a = !1);
          var i = Array.isArray(t) ? t : [t];
          try {
            var l = yield (u || (u = n("Promise"))).all(
              i.map(function (e) {
                return p(e, a);
              }),
            );
            if (l.length > 1) {
              var s = yield o("WAWebZipUtils").zipFiles(l);
              return {
                blob: s,
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
            return l[0];
          } catch (t) {
            var c = r("getErrorSafe")(t);
            throw (
              c.name !== o("WAAbortError").ABORT_ERROR &&
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to get msg download data",
                      ])),
                  )
                  .catching(c)
                  .sendLogs("msg-download-data-failed"),
              c
            );
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      if (e.mediaData == null) return !1;
      var t = e.mediaData,
        n = t.filehash,
        a = t.mediaBlob;
      return a instanceof r("WAWebMediaOpaqueData")
        ? !0
        : n == null
          ? !1
          : o("WAWebMediaInMemoryBlobCache").InMemoryMediaBlobCache.get(n) !=
            null;
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = !1);
          var a = "text/vcard";
          if (e.type === o("WAWebMsgType").MSG_TYPE.VCARD)
            return {
              name: o("WAWebFilenameManager").getDefaultName(e),
              blob: new Blob([e.body], { type: a }),
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
                { type: a },
              ),
            };
          if (e.type === o("WAWebMsgType").MSG_TYPE.ALBUM) {
            var i = o(
              "WAWebMessageAssociationUIUtils",
            ).getHiddenAssociatedMessages(e.id);
            if (i.length > 0) {
              var l = yield (u || (u = n("Promise"))).all(
                i.map(function (e) {
                  return p(e, t);
                }),
              );
              if (l.length === 1) return l[0];
              var c = yield o("WAWebZipUtils").zipFiles(l);
              return {
                blob: c,
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
          var d = f(e);
          if (d) return d;
          yield e.downloadMedia({
            downloadEvenIfExpensive: !0,
            rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
              .DOCUMENT_DOWNLOAD,
            isUserInitiated: !0,
            shouldThrowAbortError: t,
          });
          var m = f(e);
          if (m) return m;
          throw r("err")("Unable to download because blob cannot be found");
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
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
    ((l.getMultiMsgDownloadData = c),
      (l.isMsgMediaAvailableLocally = m),
      (l.getMsgDownloadData = p));
  },
  98,
);
