__d(
  "oz-player/networks/OzNetworkManager",
  [
    "oz-player/loggings/OzLoggingUtils",
    "oz-player/networks/OzNetworkRequestStream",
    "oz-player/networks/OzPausableRangeStream",
    "oz-player/networks/RequestParamCreator",
    "oz-player/networks/getOzSegmentStreamableRange",
    "oz-player/shims/OzStreams",
    "oz-player/shims/OzURI",
    "oz-player/shims/ozvariant",
    "oz-player/utils/OzNetworkRequestLoggingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$10 = null), (this.$15 = "auto"));
        var t = e.bandwidthEstimator,
          n = e.config,
          o = e.configureCustomRequestParametersForSegment,
          a = e.dynamicVideoLibrary,
          i = e.getCustomRequestParametersForURI,
          l = e.getOverrideOzRequestImplementation,
          s = e.getShouldIncludeCredentials,
          u = e.networkRequestFetchPriority,
          c = u === void 0 ? "auto" : u,
          d = e.networkRequestStreamHandlers,
          m = e.networkRequestStreamRetryHandler,
          p = e.networkRequestUrlRefreshHandler,
          _ = e.onResourceTimingBufferFull,
          f = e.prefetchCache,
          g = e.setCustomFetchStreamLoggingAttributes;
        ((this.$2 = n),
          (this.$8 = s),
          (this.$9 = i),
          (this.$1 = new (r("oz-player/networks/RequestParamCreator"))(
            this.$8,
            this.$9,
          )),
          (this.$3 = f),
          (this.$4 = d),
          (this.$5 = m),
          (this.$6 = p),
          (this.$7 = l),
          (this.$10 = g),
          (this.$11 = a),
          (this.$12 = o),
          (this.$13 = _),
          (this.$14 = t),
          (this.$15 = c));
      }
      var t = e.prototype;
      return (
        (t.destroy = function () {}),
        (t.request = function (t) {
          var e = t.dataAppendedCallback,
            n = t.dataAppendedErrorCallback,
            o = t.debugName,
            a = t.loggerProvider,
            i = t.mediaStreamType,
            l = t.pipeThroughRangeStreamProviders,
            s = t.requestOptions,
            u = t.segments;
          u.length > 0 || r("oz-player/shims/ozvariant")(0, 212);
          var c = r("oz-player/networks/getOzSegmentStreamableRange")(u) || {
              startByte: 0,
              endByte: null,
            },
            d = this.$7 ? this.$7() : null,
            m = this.$16(u[0]),
            p = new (r("oz-player/networks/OzNetworkRequestStream"))({
              debugName: o,
              config: this.$2,
              baseUri: m,
              baseUriDecisionTime: null,
              options: s,
              requestParamCreator: this.$1,
              networkRequestFetchPriority: this.$15,
              networkRequestStreamHandlers: this.$4,
              networkRequestUrlRefreshHandler: this.$6,
              overrideOzRequestImplementation: d,
              prefetchCache: this.$3,
              networkRequestStreamRetryHandler: this.$5,
              mediaStreamType: i,
              dataAppendedCallback: e,
              dataAppendedErrorCallback: n,
            });
          return this.$17(c, p, l, a, u);
        }),
        (t.createPausableStream = function (t) {
          var e = t.dataAppendedCallback,
            n = t.dataAppendedErrorCallback,
            o = t.debugName,
            a = t.loggerProvider,
            i = t.mediaStreamType,
            l = t.pipeThroughRangeStreamProviders,
            s = t.segments;
          s.length > 0 || r("oz-player/shims/ozvariant")(0, 212);
          var u = r("oz-player/networks/getOzSegmentStreamableRange")(s) || {
              startByte: 0,
              endByte: null,
            },
            c = null,
            d = this.$2.getNumber("network_seg_timeout_ms");
          d > 0 && (c = { networkTimeoutMs: d });
          var m = this.$7 ? this.$7() : null,
            p = new (r("oz-player/networks/OzNetworkRequestStream"))({
              debugName: o,
              config: this.$2,
              baseUri: this.$16(s[0]),
              baseUriDecisionTime: s[0]
                .getOptions()
                .getSegmentNumDecisionTime(),
              options: c,
              requestParamCreator: this.$1,
              networkRequestFetchPriority: this.$15,
              networkRequestStreamHandlers: this.$4,
              networkRequestUrlRefreshHandler: this.$6,
              overrideOzRequestImplementation: m,
              prefetchCache: this.$3,
              networkRequestStreamRetryHandler: this.$5,
              dynamicVideoLibrary: this.$11,
              mediaStreamType: i,
              dataAppendedCallback: e,
              dataAppendedErrorCallback: n,
            });
          return {
            pausableStream: this.$18(u, p, l || null, a),
            loggingPayloads: {
              getRequestUrl: function () {
                return p.getLastRequestUrl() || null;
              },
              segments: s,
              getResponse: function () {
                return p.getLastResponse();
              },
            },
          };
        }),
        (t.requestRawUrl = function (t) {
          var e = t.debugName,
            n = t.loggerProvider,
            o = t.options,
            a = t.url,
            i = this.$7 ? this.$7() : null,
            l = new (r("oz-player/networks/OzNetworkRequestStream"))({
              debugName: e,
              config: this.$2,
              baseUri: new (r("oz-player/shims/OzURI"))(a),
              baseUriDecisionTime: null,
              options: o,
              networkRequestFetchPriority: this.$15,
              requestParamCreator: this.$1,
              networkRequestStreamHandlers: this.$4,
              networkRequestUrlRefreshHandler: this.$6,
              overrideOzRequestImplementation: i,
              prefetchCache: this.$3,
              networkRequestStreamRetryHandler: this.$5,
              dynamicVideoLibrary: this.$11,
              mediaStreamType: null,
              dataAppendedCallback: null,
              dataAppendedErrorCallback: null,
            }),
            s = { startByte: 0, endByte: null };
          return this.$17(s, l, [], n);
        }),
        (t.$18 = function (t, n, a, i) {
          var e = n;
          if (a != null)
            for (var l = 0; l < a.length; l++) {
              var s = a[l];
              e = s(this.$2, e, i, this.$13);
            }
          return new (r("oz-player/networks/OzPausableRangeStream"))(
            o("oz-player/shims/OzStreams").OzReadableStream,
            o("oz-player/shims/OzStreams").OzWritableStream,
            t,
            e,
            {
              fixStreamingUndefinedEndByte: !0,
              enablePausableStreamResumeFromStartDangerously: !0,
              fixPausePreReadableStream: !0,
              throwErrorWhenAborted: !0,
            },
          );
        }),
        (t.$17 = function (t, n, r, a, i) {
          var e = this;
          i === void 0 && (i = []);
          var l = this.$18(t, n, r, a),
            s = l.startStream(),
            u = this.$19(s);
          if (a) {
            var c = function (r) {
              o(
                "oz-player/utils/OzNetworkRequestLoggingUtils",
              ).setFetchStreamLoggingAttributes(
                r,
                n.getLastRequestUrl(),
                i,
                0,
                l.getBytesStreamed(),
                n.getLastResponse(),
              );
              var t = e.$10;
              t && t(r, n.getLastRequestUrl(), n.getLastResponse());
            };
            o(
              "oz-player/loggings/OzLoggingUtils",
            ).monitorPromiseAndLogOperation(u, a, "fetch_stream", c, c);
          }
          return {
            getStream: function () {
              return l.getStream();
            },
            cancel: function () {
              return l.pauseStream();
            },
            getStatusChangePromise: function () {
              return u;
            },
          };
        }),
        (t.$19 = function (t) {
          return t.then(function (e) {
            var t = e.statusPromise;
            return t.then(function (e) {
              return "done";
            });
          });
        }),
        (t.$16 = function (t) {
          var e = this.$12,
            n = new (r("oz-player/shims/OzURI"))(t.getURI().toString());
          if (e) {
            var o = e(t);
            o &&
              Object.keys(o).forEach(function (e) {
                var t = o[e];
                n.addQueryData(e, t);
              });
          }
          return n;
        }),
        (t.getBandwidthEstimator = function () {
          return this.$14;
        }),
        (e.getStreamableSegmentsRange = function (t) {
          return t.length
            ? r("oz-player/networks/getOzSegmentStreamableRange")(t)
              ? t.slice(0)
              : [t[0]]
            : [];
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
