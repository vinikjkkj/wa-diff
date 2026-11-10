__d(
  "WAWebFileSaverDownloadData",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          try {
            return yield a(t);
          } catch (i) {
            if (
              n == null ||
              n === t ||
              r("getErrorSafe")(i).name === o("WAAbortError").ABORT_ERROR
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          t === void 0 && (t = !1);
          var i = Array.isArray(e) ? e : [e];
          try {
            var l = yield (c || (c = n("Promise"))).all(
              i.map(function (e) {
                return d(e, a == null ? void 0 : a.get(e), function (e) {
                  return f(e, t);
                });
              }),
            );
            if (l.length > 1) {
              var u = yield o("WAWebZipUtils").zipFiles(l);
              return {
                blob: u,
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
          } catch (e) {
            var m = r("getErrorSafe")(e);
            throw (
              m.name !== o("WAAbortError").ABORT_ERROR &&
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to get msg download data",
                      ])),
                  )
                  .catching(m)
                  .sendLogs("msg-download-data-failed"),
              m
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              var l = yield (c || (c = n("Promise"))).all(
                i.map(function (e) {
                  return d(
                    o("WAWebDualUploadsPreferredMsg").getPreferredMediaMsg(e),
                    e,
                    function (e) {
                      return f(e, t);
                    },
                  );
                }),
              );
              if (l.length === 1) return l[0];
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
          var m = h(e);
          if (m) return m;
          yield e.downloadMedia({
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
          var p = h(e);
          if (p) return p;
          throw r("err")("Unable to download because blob cannot be found");
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
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
    ((l.withSdLegFallback = d),
      (l.getMultiMsgDownloadData = p),
      (l.getMsgDownloadData = f));
  },
  98,
);
