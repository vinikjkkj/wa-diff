__d(
  "WAWebFileSaverDownloadData",
  [
    "WAAbortError",
    "WALogger",
    "WAWebDualUploadsAssociationTypes",
    "WAWebDualUploadsPreferredMsg",
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
    var e, s, u;
    async function c(t, n, a) {
      try {
        return await a(t);
      } catch (i) {
        if (
          n == null ||
          n === t ||
          o("WAAbortError").isAbortError(r("getErrorSafe")(i))
        )
          throw i;
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[file-saver] HD leg failed to download, saving the SD leg",
                ])),
            )
            .catching(r("getErrorSafe")(i)),
          a(n)
        );
      }
    }
    async function d(e, t, n) {
      t === void 0 && (t = !1);
      var a = Array.isArray(e) ? e : [e];
      try {
        var i = await Promise.all(
          a.map(function (e) {
            return c(e, n == null ? void 0 : n.get(e), function (e) {
              return m(e, t);
            });
          }),
        );
        if (i.length > 1) {
          var l = await o("WAWebZipUtils").zipFiles(
            i.map(function (e) {
              var t = e.blob,
                n = e.name,
                r = e.url;
              return { blob: t, name: n, url: r };
            }),
          );
          return {
            blob: l,
            messages: i.flatMap(function (e) {
              return e.messages;
            }),
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
      } catch (e) {
        var u = r("getErrorSafe")(e);
        throw (
          o("WAAbortError").isAbortError(u) ||
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to get msg download data",
                  ])),
              )
              .catching(u)
              .sendLogs("msg-download-data-failed"),
          u
        );
      }
    }
    async function m(e, t) {
      t === void 0 && (t = !1);
      var n = "text/vcard";
      if (e.type === o("WAWebMsgType").MSG_TYPE.VCARD)
        return {
          name: o("WAWebFilenameManager").getDefaultName(e),
          messages: [e],
          blob: new Blob([e.body], { type: n }),
        };
      if (e.type === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD)
        return {
          name: o("WAWebFilenameManager").getDefaultName(e),
          messages: [e],
          blob: new Blob(
            [
              e.vcardList.map(function (e) {
                return e.vcard;
              }).join(`
`),
            ],
            { type: n },
          ),
        };
      if (e.type === o("WAWebMsgType").MSG_TYPE.ALBUM) {
        var a = o("WAWebMessageAssociationUIUtils").getHiddenAssociatedMessages(
          e.id,
        );
        if (a.length > 0) {
          var i = await Promise.all(
            a.map(function (e) {
              return c(
                o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(e),
                e,
                function (e) {
                  return m(e, t);
                },
              );
            }),
          );
          if (i.length === 1) return i[0];
          var l = await o("WAWebZipUtils").zipFiles(
            i.map(function (e) {
              var t = e.blob,
                n = e.name,
                r = e.url;
              return { blob: t, name: n, url: r };
            }),
          );
          return {
            blob: l,
            messages: i.flatMap(function (e) {
              return e.messages;
            }),
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[debug] getMsgDownloadData Album message has no associated child messages",
                ])),
            )
            .sendLogs("msg-download-data-almum-no-children"),
          r("err")("Album message has no associated child messages")
        );
      }
      var s = p(e);
      if (s) return babelHelpers.extends({}, s, { messages: [e] });
      await e.downloadMedia({
        downloadEvenIfExpensive: !(
          e.parentMsgKey != null &&
          o("WAWebDualUploadsAssociationTypes").isDualUploadAssociationType(
            e.associationType,
          )
        ),
        rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
          .DOCUMENT_DOWNLOAD,
        isUserInitiated: !0,
        shouldThrowAbortError: t,
      });
      var d = p(e);
      if (d) return babelHelpers.extends({}, d, { messages: [e] });
      throw r("err")("Unable to download because blob cannot be found");
    }
    function p(e) {
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
    ((l.withSdLegFallback = c),
      (l.getMultiMsgDownloadData = d),
      (l.getMsgDownloadData = m));
  },
  98,
);
