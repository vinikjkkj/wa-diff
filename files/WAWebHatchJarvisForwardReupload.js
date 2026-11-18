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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = 6e4,
      m = 1e4,
      p = 1e3,
      _ = (function (e) {
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
    function f(e, t) {
      t === void 0 && (t = []);
      var r = new AbortController(),
        o = r.signal,
        a = null,
        i = null;
      return {
        required: function () {
          return (
            a != null ||
              (a = (c || (c = n("Promise"))).all(
                e.map(function (e) {
                  return C(e, o);
                }),
              )),
            a
          );
        },
        thumbnails: function () {
          return (
            i != null ||
              (i = t.map(function (e) {
                return C(e, o).catch(E);
              })),
            i
          );
        },
      };
    }
    function g(e) {
      return e.required();
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.media;
          try {
            var r = n.required(),
              a = n.thumbnails(),
              i = yield v(yield r, t);
            return [].concat(i, yield R(a, t));
          } catch (e) {
            var l = e instanceof _ ? e : new _("upload_failed");
            throw (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[hatch-jarvis-forward] media reupload failed: ",
                      "",
                    ])),
                  l.reason,
                )
                .sendLogs("hatch-jarvis-forward-reupload-failed"),
              l
            );
          }
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
          if (i == null) throw new _("missing_download");
          var l = yield o("WAWebFileUtils").blobToArrayBuffer(i.blob),
            s = new Uint8Array(yield o("WACryptoSha256").sha256(l)),
            u = (n = a.envelopeFilehash) != null ? n : r.filehash;
          if (u == null || !o("WAWebHatchJarvisForwardMedia").matchesHash(u, s))
            throw new _("source_hash");
          return { buffer: l, fileSha256: u, ref: a };
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
          if (e.length === 0) return [];
          var n = yield D(e[0], yield I(e[0], t));
          return [n].concat(yield v(e.slice(1), t));
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var o = new AbortController(),
            a = self.setTimeout(function () {
              return o.abort();
            }, m),
            i = new (c || (c = n("Promise")))(function (e) {
              return o.signal.addEventListener(
                "abort",
                function () {
                  return e();
                },
                { once: !0 },
              );
            }),
            l = [],
            s = new Set(),
            u = e.map(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, n) {
                    var r = yield e;
                    (s.add(n),
                      r != null &&
                        !o.signal.aborted &&
                        (l[n] = yield I(r, t, o.signal)
                          .then(function (e) {
                            return D(r, e);
                          })
                          .catch(function (e) {
                            return o.signal.aborted ? k(e) : E(e);
                          })));
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
            );
          return (
            yield c.race([c.all(u), i]),
            self.clearTimeout(a),
            e.forEach(function (e, t) {
              s.has(t) || k(r("err")("Thumbnail download still pending"));
            }),
            o.abort(),
            l.filter(Boolean)
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(t) {
      var n = t instanceof _ ? t.reason : "upload_failed";
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[hatch-jarvis-forward] thumbnail left out: ",
                "",
              ])),
            n,
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("hatch-jarvis-forward-thumbnail-skipped"),
        null
      );
    }
    function k(e) {
      return (
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[hatch-jarvis-forward] thumbnail left out: thumbnail_deadline",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("hatch-jarvis-forward-thumbnail-deadline"),
        null
      );
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = e.buffer,
            i = e.ref,
            l = new AbortController();
          n == null ||
            n.addEventListener(
              "abort",
              function () {
                return l.abort();
              },
              { once: !0 },
            );
          var s = self.setTimeout(function () {
            return l.abort();
          }, d);
          try {
            return yield r("WAWebUploadManager").encryptAndUpload({
              blob: a,
              mediaKey: null,
              mediaKeyTimestamp: null,
              type: i.family,
              signal: l.signal,
              userUploadAttemptCount: 0,
              forwardedFromWeb: !0,
              uploadOrigin: r("WAWebMediaGetUploadOriginForChat")(t),
              fileOrigin: null,
              isViewOnce: !1,
              uploadQpl: o("WAWebStartMediaUploadQpl").startMediaUploadQpl({
                entryPoint: "MediaUpload",
                mediaType: i.family,
                byteLength: a.byteLength,
              }),
            });
          } catch (e) {
            throw new _("upload_failed");
          } finally {
            self.clearTimeout(s);
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.fileSha256,
            r = e.ref;
          if (
            !t.directPath.startsWith("/") ||
            o("WAWebHatchJarvisForwardMedia").decodeHash(t.mediaKey) == null ||
            o("WAWebHatchJarvisForwardMedia").decodeHash(t.encFilehash) ==
              null ||
            !(t.mediaKeyTimestamp > 0)
          )
            throw new _("invalid_upload_credentials");
          var a = {
            directPath: t.directPath,
            fileEncSha256: t.encFilehash,
            fileSha256: n,
            mediaKey: t.mediaKey,
            mediaKeyTimestamp: t.mediaKeyTimestamp * p,
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
        x.apply(this, arguments)
      );
    }
    ((l.HatchJarvisForwardError = _),
      (l.createHatchJarvisForwardMedia = f),
      (l.downloadHatchJarvisForwardMedia = g),
      (l.prepareHatchJarvisForwardSend = h));
  },
  98,
);
