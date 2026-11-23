__d(
  "WAWebHatchJarvisForwardReupload",
  [
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
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 6e4,
      d = 1e4,
      m = 1e3,
      p = (function (e) {
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
    function _(e, t) {
      t === void 0 && (t = []);
      var n = new AbortController(),
        r = n.signal,
        o = null,
        a = null;
      return {
        required: function () {
          return (
            o != null ||
              (o = Promise.all(
                e.map(function (e) {
                  return h(e, r);
                }),
              )),
            o
          );
        },
        thumbnails: function () {
          return (
            a != null ||
              (a = t.map(function (e) {
                return h(e, r).catch(b);
              })),
            a
          );
        },
      };
    }
    function f(e) {
      return e.required();
    }
    async function g(t) {
      var n = t.chat,
        r = t.media;
      try {
        var a = r.required(),
          i = r.thumbnails(),
          l = await y(await a, n);
        return [].concat(l, await C(i, n));
      } catch (t) {
        var s = t instanceof p ? t : new p("upload_failed");
        throw (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[hatch-jarvis-forward] media reupload failed: ",
                  "",
                ])),
              s.reason,
            )
            .sendLogs("hatch-jarvis-forward-reupload-failed"),
          s
        );
      }
    }
    async function h(e, t) {
      var n,
        r = e.descriptor,
        a = e.ref,
        i = await o(
          "WAWebFetchRichResponseMediaBytes",
        ).fetchRichResponseMediaBytes(
          r,
          o("WAWebWamEnumDownloadOriginType").DOWNLOAD_ORIGIN_TYPE
            .CHAT_PERSONAL,
          t,
        );
      if (i == null) throw new p("missing_download");
      var l = await o("WAWebFileUtils").blobToArrayBuffer(i.blob),
        s = new Uint8Array(await o("WACryptoSha256").sha256(l)),
        u = (n = a.envelopeFilehash) != null ? n : r.filehash;
      if (u == null || !o("WAWebHatchJarvisForwardMedia").matchesHash(u, s))
        throw new p("source_hash");
      return { buffer: l, fileSha256: u, ref: a };
    }
    async function y(e, t) {
      if (e.length === 0) return [];
      var n = await R(e[0], await S(e[0], t));
      return [n].concat(await y(e.slice(1), t));
    }
    async function C(e, t) {
      var n = new AbortController(),
        o = self.setTimeout(function () {
          return n.abort();
        }, d),
        a = new Promise(function (e) {
          return n.signal.addEventListener(
            "abort",
            function () {
              return e();
            },
            { once: !0 },
          );
        }),
        i = [],
        l = new Set(),
        s = e.map(async function (e, r) {
          var o = await e;
          (l.add(r),
            o != null &&
              !n.signal.aborted &&
              (i[r] = await S(o, t, n.signal)
                .then(function (e) {
                  return R(o, e);
                })
                .catch(function (e) {
                  return n.signal.aborted ? v(e) : b(e);
                })));
        });
      return (
        await Promise.race([Promise.all(s), a]),
        self.clearTimeout(o),
        e.forEach(function (e, t) {
          l.has(t) || v(r("err")("Thumbnail download still pending"));
        }),
        n.abort(),
        i.filter(Boolean)
      );
    }
    function b(e) {
      var t = e instanceof p ? e.reason : "upload_failed";
      return (
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[hatch-jarvis-forward] thumbnail left out: ",
                "",
              ])),
            t,
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("hatch-jarvis-forward-thumbnail-skipped"),
        null
      );
    }
    function v(e) {
      return (
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[hatch-jarvis-forward] thumbnail left out: thumbnail_deadline",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("hatch-jarvis-forward-thumbnail-deadline"),
        null
      );
    }
    async function S(e, t, n) {
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
      }, c);
      try {
        return await r("WAWebUploadManager").encryptAndUpload({
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
        throw new p("upload_failed");
      } finally {
        self.clearTimeout(s);
      }
    }
    async function R(e, t) {
      var n = e.fileSha256,
        r = e.ref;
      if (
        !t.directPath.startsWith("/") ||
        o("WAWebHatchJarvisForwardMedia").decodeHash(t.mediaKey) == null ||
        o("WAWebHatchJarvisForwardMedia").decodeHash(t.encFilehash) == null ||
        !(t.mediaKeyTimestamp > 0)
      )
        throw new p("invalid_upload_credentials");
      var a = {
        directPath: t.directPath,
        fileEncSha256: t.encFilehash,
        fileSha256: n,
        mediaKey: t.mediaKey,
        mediaKeyTimestamp: t.mediaKeyTimestamp * m,
        mimetype: r.mimeType,
      };
      return {
        id: await o("WAWebUnifiedResponseUtils").computeRichResponseMediaId(
          r.url,
        ),
        highResMedia: a,
        previewMedia: a,
      };
    }
    ((l.HatchJarvisForwardError = p),
      (l.createHatchJarvisForwardMedia = _),
      (l.downloadHatchJarvisForwardMedia = f),
      (l.prepareHatchJarvisForwardSend = g));
  },
  98,
);
