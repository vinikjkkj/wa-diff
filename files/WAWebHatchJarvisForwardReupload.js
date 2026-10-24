__d(
  "WAWebHatchJarvisForwardReupload",
  [
    "Promise",
    "WACryptoSha256",
    "WALogger",
    "WAWebFetchRichResponseMediaBytes",
    "WAWebFileUtils",
    "WAWebHatchJarvisForwardMedia",
    "WAWebMediaGetUploadOriginForChat",
    "WAWebStartMediaUploadQpl",
    "WAWebUnifiedResponseUtils",
    "WAWebUploadManager",
    "WAWebWamEnumDownloadOriginType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 6e4,
      c = 1e3,
      d = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, "Jarvis forward media failed: " + t) || this),
            (n.name = "HatchJarvisForwardError"),
            (n.reason = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function m(e) {
      var t = new AbortController(),
        r = t.signal,
        o = null;
      return {
        sources: function () {
          return (
            o == null &&
              (o = (s || (s = n("Promise"))).all(
                e.map(function (e) {
                  return f(e, r);
                }),
              )),
            o
          );
        },
      };
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chat,
            r = t.media;
          try {
            return yield h(yield r.sources(), n);
          } catch (t) {
            var a = t instanceof d ? t : new d("upload_failed");
            throw (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[hatch-jarvis-forward] media reupload failed: ",
                      "",
                    ])),
                  a.reason,
                )
                .sendLogs("hatch-jarvis-forward-reupload-failed"),
              a
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
          var n,
            r = e.descriptor,
            a = e.ref,
            i = yield o(
              "WAWebFetchRichResponseMediaBytes",
            ).fetchRichResponseMediaBytes(
              r,
              o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
                .CHAT_PERSONAL,
              t,
            );
          if (i == null) throw new d("missing_download");
          var l = yield o("WAWebFileUtils").blobToArrayBuffer(i.blob),
            s = new Uint8Array(yield o("WACryptoSha256").sha256(l)),
            u = (n = a.envelopeFilehash) != null ? n : r.filehash,
            c =
              u != null
                ? o("WAWebHatchJarvisForwardMedia").decodeHash(u)
                : null;
          if (
            u == null ||
            c == null ||
            c.length !== s.length ||
            !c.every(function (e, t) {
              return e === s[t];
            })
          )
            throw new d("source_hash");
          return { buffer: l, fileSha256: u, ref: a };
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length === 0) return [];
          var n = yield v(e[0], yield C(e[0], t));
          return [n].concat(yield h(e.slice(1), t));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.buffer,
            a = e.ref,
            i = new AbortController(),
            l = self.setTimeout(function () {
              return i.abort();
            }, u);
          try {
            return yield r("WAWebUploadManager").encryptAndUpload({
              blob: n,
              mediaKey: null,
              mediaKeyTimestamp: null,
              type: a.family,
              signal: i.signal,
              userUploadAttemptCount: 0,
              forwardedFromWeb: !0,
              uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(t),
              fileOrigin: null,
              isViewOnce: !1,
              uploadQpl: o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
                entryPoint: "MediaUpload",
                mediaType: a.family,
                byteLength: n.byteLength,
              }),
            });
          } catch (e) {
            throw new d("upload_failed");
          } finally {
            self.clearTimeout(l);
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.fileSha256,
            r = e.ref;
          if (
            !t.directPath.startsWith("/") ||
            o("WAWebHatchJarvisForwardMedia").decodeHash(t.mediaKey) == null ||
            o("WAWebHatchJarvisForwardMedia").decodeHash(t.encFilehash) ==
              null ||
            !(t.mediaKeyTimestamp > 0)
          )
            throw new d("invalid_upload_credentials");
          var a = {
            directPath: t.directPath,
            fileEncSha256: t.encFilehash,
            fileSha256: n,
            mediaKey: t.mediaKey,
            mediaKeyTimestamp: t.mediaKeyTimestamp * c,
            mimetype: r.mimeType,
          };
          return {
            id: yield o("WAWebUnifiedResponseUtils").computeRichResponseMediaId(
              r.url,
            ),
            highResMedia: a,
            previewMedia: a,
          };
        })),
        S.apply(this, arguments)
      );
    }
    ((l.HatchJarvisForwardError = d),
      (l.createHatchJarvisForwardMedia = m),
      (l.prepareHatchJarvisForwardSend = p));
  },
  98,
);
