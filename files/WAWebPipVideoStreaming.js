__d(
  "WAWebPipVideoStreaming",
  [
    "Promise",
    "WABackoffUtils",
    "WALogger",
    "WAWebBuildConstants",
    "WAWebMedia",
    "WAWebMsgCollection",
    "WAWebNetworkStatus",
    "WAWebSWBusActions",
    "WAWebWamEnumWebcRmrReasonCode",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = o("WAWebBuildConstants").WEB_PUBLIC_PATH + "stream/video",
      c = (function () {
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
    function d(e) {
      var t = o("WAWebMsgCollection").MsgCollection.get(e);
      return t ? o("WAWebMedia").videoStreamingInfo(t) : null;
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        p.apply(this, arguments)
      );
    }
    var _ = {};
    function f(e) {
      var t = e.action,
        a = e.message;
      switch (t) {
        case r("WAWebSWBusActions").REQUEST_STREAMING_INFO:
          return d(a.key);
        case r("WAWebSWBusActions").EXP_BACKOFF:
          return o("WABackoffUtils")
            .expDelaySec(a.generation, 60)
            .then(function () {
              return r("WAWebNetworkStatus").waitIfOffline();
            });
        case r("WAWebSWBusActions").REQUEST_RMR:
          return m(a);
        case r("WAWebSWBusActions").SEND_STREAMING_CHUNK: {
          var i = a.msgKey,
            l = o("WAWebMsgCollection").MsgCollection.get(i);
          if (!l) {
            delete _[i.toString()];
            return;
          }
          var u;
          (Object.prototype.hasOwnProperty.call(_, i)
            ? (u = _[i.toString()])
            : (_[i.toString()] = u = new c(l.size)),
            u.push(a.data),
            u.isComplete() &&
              (o("WAWebMedia").manuallySetMedia({
                msg: l,
                media: u.serialize(),
                rmrReason: o("WAWebWamEnumWebcRmrReasonCode")
                  .WEBC_RMR_REASON_CODE.VIDEO_STREAMING,
              }),
              delete _[i.toString()]));
          break;
        }
        default:
          return (s || (s = n("Promise"))).reject(
            r("err")("Invalid Video Streaming Action"),
          );
      }
    }
    ((l.VIDEO_STREAM_URL = u), (l.handleVideoStreamingRequest = f));
  },
  98,
);
