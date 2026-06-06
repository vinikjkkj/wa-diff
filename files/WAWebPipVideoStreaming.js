__d(
  "WAWebPipVideoStreaming",
  [
    "WABackoffUtils",
    "WALogger",
    "WAWebBuildConstants",
    "WAWebMedia",
    "WAWebMsgCollection",
    "WAWebNetworkStatus",
    "WAWebSWBusActions",
    "WAWebWamEnumWebcRmrReasonCode",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebBuildConstants").WEB_PUBLIC_PATH + "stream/video",
      u = (function () {
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
    function c(e) {
      var t = o("WAWebMsgCollection").MsgCollection.get(e);
      return t ? o("WAWebMedia").videoStreamingInfo(t) : null;
    }
    async function d(e) {
      var t = o("WAWebMsgCollection").MsgCollection.get(e.key);
      if (!t) return null;
      throw (
        await t.downloadMedia({
          downloadEvenIfExpensive: !0,
          rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
            .VIDEO_STREAMING,
          isUserInitiated: !0,
        }),
        r("err")("downloaded media instead of streaming")
      );
    }
    var m = {};
    function p(e) {
      var t = e.action,
        n = e.message;
      switch (t) {
        case r("WAWebSWBusActions").REQUEST_STREAMING_INFO:
          return c(n.key);
        case r("WAWebSWBusActions").EXP_BACKOFF:
          return o("WABackoffUtils")
            .expDelaySec(n.generation, 60)
            .then(function () {
              return r("WAWebNetworkStatus").waitIfOffline();
            });
        case r("WAWebSWBusActions").REQUEST_RMR:
          return d(n);
        case r("WAWebSWBusActions").SEND_STREAMING_CHUNK: {
          var a = n.msgKey,
            i = o("WAWebMsgCollection").MsgCollection.get(a);
          if (!i) {
            delete m[a.toString()];
            return;
          }
          var l;
          (Object.prototype.hasOwnProperty.call(m, a)
            ? (l = m[a.toString()])
            : (m[a.toString()] = l = new u(i.size)),
            l.push(n.data),
            l.isComplete() &&
              (o("WAWebMedia").manuallySetMedia({
                msg: i,
                media: l.serialize(),
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.VIDEO_STREAMING,
              }),
              delete m[a.toString()]));
          break;
        }
        default:
          return Promise.reject(r("err")("Invalid Video Streaming Action"));
      }
    }
    ((l.VIDEO_STREAM_URL = s), (l.handleVideoStreamingRequest = p));
  },
  98,
);
