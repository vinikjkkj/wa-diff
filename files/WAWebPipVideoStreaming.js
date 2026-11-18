__d(
  "WAWebPipVideoStreaming",
  [
    "Promise",
    "WABackoffUtils",
    "WALogger",
    "WAWebBuildConstants",
    "WAWebDownloadManager",
    "WAWebManuallySetMedia",
    "WAWebMediaFileErrors",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaVideoStreaming",
    "WAWebMmsMediaTypes",
    "WAWebMsgCollection",
    "WAWebNetworkStatus",
    "WAWebSWBusActions",
    "WAWebStartMediaDownloadQpl",
    "WAWebSuspiciousContent",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = o("WAWebBuildConstants").WEB_PUBLIC_PATH + "stream/video",
      g = (function () {
        function t(t) {
          ((this.ranges = []),
            (this.buffer = []),
            (this.size = t),
            t ||
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "video buffer falsy size: ",
                    "",
                  ])),
                t,
              ));
        }
        var n = t.prototype;
        return (
          (n.push = function (t) {
            (this.buffer.push(t), this.add(t.start, t.end));
          }),
          (n.add = function (t, n) {
            for (var e = t, r = this.ranges, o = 0; o < r.length; o++) {
              var a = r[o],
                i = a[0],
                l = a[1];
              if (!(e > l + 1)) {
                if (n + 1 < i) return r.splice(o, 0, [e, n]);
                for (; o + 1 < r.length; ) {
                  var s = r[o + 1],
                    u = s[0],
                    c = s[1];
                  if (n + 1 < u) break;
                  ((e = Math.min(e, i)), r.splice(o, 1), (i = u), (l = c));
                }
                r[o] = [Math.min(e, i), Math.max(n, l)];
                return;
              }
            }
            return r.push([e, n]);
          }),
          (n.isComplete = function () {
            var e = this.ranges,
              t = this.size;
            return t
              ? e.length === 1 && e[0][0] === 0 && e[0][1] === t - 1
              : !1;
          }),
          (n.serialize = function () {
            for (
              var e = new Uint8Array(this.size), t = this.buffer, n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n],
                o = r.buffer,
                a = r.start;
              e.set(new Uint8Array(o), a);
            }
            return e;
          }),
          t
        );
      })();
    function h(e) {
      var t = o("WAWebMsgCollection").MsgCollection.get(e);
      return t ? o("WAWebMediaVideoStreaming").videoStreamingInfo(t) : null;
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebMsgCollection").MsgCollection.get(e.key);
          if (!t) return null;
          throw (
            yield t.downloadMedia({
              downloadEvenIfExpensive: !0,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .VIDEO_STREAMING,
              isUserInitiated: !0,
            }),
            r("err")("downloaded media instead of streaming")
          );
        })),
        C.apply(this, arguments)
      );
    }
    var b = {};
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES;
          try {
            yield o("WAWebDownloadManager").screenDecryptedMedia({
              input: t,
              type: o("WAWebMmsMediaTypes").getMsgMediaType(e),
              mimetype: e.mimetype,
              downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(e),
              downloadQpl: n,
              withStreamCheck: !0,
              onSuspiciousContent: function (t) {
                a = t;
              },
            });
          } catch (e) {
            var i = r("getErrorSafe")(e).message;
            if (e instanceof o("WAWebMediaFileErrors").InvalidMediaFileType)
              return (
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[video-streaming] the first window is dangerous: ",
                        "",
                      ])),
                    i,
                  )
                  .tags("media", "security")
                  .sendLogs("video-stream-first-window-dangerous"),
                o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES
              );
            throw (
              o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[video-streaming] the first window could not be screened: ",
                      "",
                    ])),
                  i,
                )
                .tags("media", "security")
                .sendLogs("video-stream-first-window-unscreenable"),
              r("err")("the first window could not be screened")
            );
          }
          if (a === o("WAWebSuspiciousContent").WAWebSuspiciousContent.YES)
            throw (
              o("WALogger")
                .WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[video-streaming] the classifier reported no verdict on the first window",
                    ])),
                )
                .tags("media", "security")
                .sendLogs("video-stream-screening-did-not-run"),
              r("err")("the classifier reported no verdict")
            );
          return (
            a !== o("WAWebSuspiciousContent").WAWebSuspiciousContent.NO &&
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[video-streaming] the first window is suspicious",
                    ])),
                )
                .tags("media", "security")
                .sendLogs("video-stream-first-window-suspicious"),
            a
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebMsgCollection").MsgCollection.get(e.msgKey);
          if (t == null)
            throw (
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[video-streaming] no message for the stream being screened",
                    ])),
                )
                .tags("media", "security")
                .sendLogs("video-stream-screening-no-msg"),
              r("err")("no message to screen the stream against")
            );
          if (
            !o("WAWebDownloadManager").isMediaScreenedForOrigin(
              r("WAWebMediaGetDownloadOriginForMsg")(t),
            )
          )
            return !0;
          var n = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "ScreenStreamedVideo",
            }),
            a = yield v(t, e.firstWindow, n).catch(function (e) {
              throw (
                n.endFailWithError(
                  "stream_not_screened",
                  r("getErrorSafe")(e).message,
                ),
                e
              );
            });
          return a === o("WAWebSuspiciousContent").WAWebSuspiciousContent.NO
            ? (n.endSuccess(), !0)
            : (n.endFailWithError("stream_refused", "first window not cleared"),
              t
                .downloadMedia({
                  downloadEvenIfExpensive: !0,
                  rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                    .WEBC_RMR_REASON_CODE.VIDEO_STREAMING,
                  isUserInitiated: !0,
                })
                .catch(function (e) {
                  o("WALogger")
                    .WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "[video-streaming] the screened download fallback failed: ",
                          "",
                        ])),
                      r("getErrorSafe")(e).message,
                    )
                    .tags("media", "security")
                    .sendLogs("video-stream-fallback-download-failed");
                }),
              !1);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t = e.action,
        a = e.message;
      switch (t) {
        case r("WAWebSWBusActions").REQUEST_STREAMING_INFO:
          return h(a.key);
        case r("WAWebSWBusActions").EXP_BACKOFF:
          return o("WABackoffUtils")
            .expDelaySec(a.generation, 60)
            .then(function () {
              return r("WAWebNetworkStatus").waitIfOffline();
            });
        case r("WAWebSWBusActions").REQUEST_RMR:
          return y(a);
        case r("WAWebSWBusActions").SCREEN_VIDEO_STREAM:
          return R(a);
        case r("WAWebSWBusActions").SEND_STREAMING_CHUNK: {
          var i = a.msgKey,
            l = o("WAWebMsgCollection").MsgCollection.get(i);
          if (!l) {
            delete b[i.toString()];
            return;
          }
          var s;
          (Object.hasOwn(b, i)
            ? (s = b[i.toString()])
            : (b[i.toString()] = s = new g(l.size)),
            s.push(a.data),
            s.isComplete() &&
              (o("WAWebManuallySetMedia").manuallySetMedia({
                msg: l,
                media: s.serialize(),
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.VIDEO_STREAMING,
              }),
              delete b[i.toString()]));
          break;
        }
        default:
          return (_ || (_ = n("Promise"))).reject(
            r("err")("Invalid Video Streaming Action"),
          );
      }
    }
    ((l.VIDEO_STREAM_URL = f), (l.handleVideoStreamingRequest = E));
  },
  98,
);
