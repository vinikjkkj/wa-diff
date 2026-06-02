__d(
  "WAWebFileSaverDownloadData",
  [
    "WALogger",
    "WAWebFilenameManager",
    "WAWebMediaInMemoryBlobCache",
    "WAWebMediaOpaqueData",
    "WAWebMessageAssociationUIUtils",
    "WAWebMsgType",
    "WAWebWamEnumWebcRmrReasonCode",
    "WAWebZipUtils",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      var n = Array.isArray(t) ? t : [t];
      try {
        var a = await Promise.all(
          n.map(function (e) {
            return c(e);
          }),
        );
        if (a.length > 1) {
          var i = await o("WAWebZipUtils").zipFiles(a);
          return {
            blob: i,
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
        return a[0];
      } catch (t) {
        var l = r("getErrorSafe")(t);
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Failed to get msg download data",
                ])),
            )
            .catching(l)
            .sendLogs("msg-download-data-failed"),
          l
        );
      }
    }
    async function c(e) {
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
              e.vcardList.map(function (e) {
                return e.vcard;
              }).join(`
`),
            ],
            { type: t },
          ),
        };
      if (e.type === o("WAWebMsgType").MSG_TYPE.ALBUM) {
        var n = o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(
          e.id,
        );
        if (n.length > 0) {
          var a = await Promise.all(
            n.map(function (e) {
              return c(e);
            }),
          );
          if (a.length === 1) return a[0];
          var i = await o("WAWebZipUtils").zipFiles(a);
          return {
            blob: i,
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
      var l = d(e);
      if (l) return l;
      await e.downloadMedia({
        downloadEvenIfExpensive: !0,
        rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
          .DOCUMENT_DOWNLOAD,
        isUserInitiated: !0,
      });
      var u = d(e);
      if (u) return u;
      throw r("err")("Unable to download because blob cannot be found");
    }
    function d(e) {
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
    ((l.getMultiMsgDownloadData = u), (l.getMsgDownloadData = c));
  },
  98,
);
