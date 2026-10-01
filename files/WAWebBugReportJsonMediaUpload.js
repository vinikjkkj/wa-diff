__d(
  "WAWebBugReportJsonMediaUpload",
  [
    "WAAbortError",
    "WABase64",
    "WALogger",
    "WAPromiseDelays",
    "WAWebABPropsCache",
    "WAWebCryptoCreateMediaKeys",
    "WAWebMmsMediaTypes",
    "WAWebStartMediaUploadQpl",
    "WAWebUploadManager",
    "WAWebWamEnumUploadOriginType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 1e4;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.signal,
            a = t.timeoutMs,
            i = a === void 0 ? c : a,
            l = new AbortController(),
            u = function () {
              return l.abort();
            };
          try {
            var d = o("WAWebABPropsCache").getABPropsJsonForBugReport();
            return d == null || n.aborted
              ? null
              : (n.addEventListener("abort", u),
                yield o("WAPromiseDelays").withTimeout(
                  p({ fileName: "ABProps.json", json: d, signal: l.signal }),
                  i,
                  function () {
                    return (
                      l.abort(),
                      o("WALogger")
                        .ERROR(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "ABProps bug report upload timed out after ",
                              "ms",
                            ])),
                          i,
                        )
                        .sendLogs("abprops-bug-report-upload-timeout"),
                      null
                    );
                  },
                ));
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "ABProps bug report attachment failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("abprops-bug-report-attachment-fail"),
              null
            );
          } finally {
            n.removeEventListener("abort", u);
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.fileName,
            n = e.json,
            a = e.signal;
          try {
            var i = new Blob([n], { type: "application/json" }),
              l = yield r("WAWebUploadManager").encryptAndUpload({
                blob: i,
                mediaKey: null,
                mediaKeyTimestamp: null,
                type: o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT,
                signal: a,
                userUploadAttemptCount: 0,
                forwardedFromWeb: !1,
                uploadOrigin: o("WAWebWamEnumUploadOriginType")
                  .UPLOAD_ORIGIN_TYPE.UNKNOWN,
                fileOrigin: null,
                isViewOnce: !1,
                uploadQpl: o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
                  entryPoint: "BugReportJsonMedia",
                  mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT,
                  byteLength: i.size,
                }),
              }),
              s = yield r("WAWebCryptoCreateMediaKeys")(
                o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT,
                l.mediaKey,
              );
            return {
              cipher_key: o("WABase64").encodeB64(s.encKey),
              element_value: l.url,
              iv: o("WABase64").encodeB64(s.iv),
              type: "JSON",
              file_name: t,
            };
          } catch (e) {
            var c = r("getErrorSafe")(e);
            return (
              c.name !== o("WAAbortError").ABORT_ERROR &&
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "bug report JSON media upload failed for ",
                        "",
                      ])),
                    t,
                  )
                  .catching(c)
                  .sendLogs("bug-report-json-media-upload-fail"),
              null
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    ((l.uploadABPropsForBugReport = d), (l.uploadBugReportJsonMedia = p));
  },
  98,
);
