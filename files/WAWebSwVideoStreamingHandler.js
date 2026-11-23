__d(
  "WAWebSwVideoStreamingHandler",
  [
    "WALogger",
    "WAWebBuildConstants",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebSwFeature",
    "WAWebSwVideoStreamer",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebBuildConstants").WEB_PUBLIC_PATH + "stream/video",
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            (t = e.call.apply(e, [this].concat(a)) || this),
            (t.screenedStreams = new Map()),
            (t.matchFetch = function (e) {
              var t = e.request,
                n = o("WAWebSwFeature").SWFeature.parseUrl(t.url);
              return (
                t.method === o("WAWebSwFeature").SWFeature.RequestType.GET &&
                !!n &&
                !!n.queryParams &&
                !!n.queryParams.key &&
                !!t.url.match(s)
              );
            }),
            (t.onFetch = async function (e) {
              var n = e.clientId,
                a = e.request;
              if (
                o("WAWebSwVideoStreamer").isUnsafeStreamRequest(
                  a.mode,
                  a.destination,
                )
              )
                return o("WAWebSwVideoStreamer").rejectUnsafeStreamRequest();
              var i = o("WAWebSwFeature").SWFeature.parseUrl(a.url),
                l = n;
              if (l == null)
                return Promise.reject(r("err")("No client id found."));
              var s = await r("WAWebSWBus").request(
                  l,
                  r("WAWebSWBusActions").REQUEST_STREAMING_INFO,
                  { key: c(i.queryParams.key) },
                ),
                u = s.cryptoKeys,
                d = s.streamData,
                m = new (o("WAWebSwVideoStreamer").VideoStreamer)({
                  clientId: l,
                  cryptoKeys: u,
                  chunkDecrypt: i.queryParams.chunkDecrypt === "true",
                  screenedStreams: t.screenedStreams,
                  streamData: d,
                });
              return m.fetchAndDecrypt(a);
            }),
            (t.matchAction = function (e) {
              return e === r("WAWebSWBusActions").STREAMING_SUPPORTED;
            }),
            (t.onAction = function (e, t) {
              return (
                !!self.crypto &&
                (!!self.crypto.subtle || !!self.crypto.webkitSubtle)
              );
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebSwFeature").SWFeature);
    function c(t) {
      try {
        return decodeURIComponent(t);
      } catch (n) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[sw] Malformed stream key",
                ])),
            )
            .catching(r("getErrorSafe")(n))
            .sendLogs("sw-malformed-stream-key"),
          t
        );
      }
    }
    l.default = u;
  },
  98,
);
