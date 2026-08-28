__d(
  "ZenonTSLogDataJSONHolder",
  [
    "invariant",
    "FBLogger",
    "ZenonAuditedCheckpointLogId",
    "ZenonE2eeMandatedStateManager",
    "ZenonInfraActionsLogger",
    "ZenonMediaStatsConfig",
    "ZenonMediaStatsParser",
    "ZenonTSLogDataUtil",
    "ZenonTSLogRegistry",
    "ZenonVideoQpConversion",
    "getErrorSafe",
    "pako",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
        new: 1,
        checking: 2,
        connected: 3,
        completed: 4,
        failed: 5,
        disconnected: 6,
        closed: 7,
      },
      u = 1073741824,
      c = (function () {
        function t(e) {
          var t, n, o, a, i;
          ((this.$1 = { iceConnectionState: 0, sendParametersState: null }),
            (this.$2 =
              (t = e == null ? void 0 : e.endTimeMs) != null ? t : null),
            (this.$3 = (n = e == null ? void 0 : e.sharedIdx) != null ? n : 0),
            (this.$4 =
              (o = e == null ? void 0 : e.source) != null ? o : "rtc_www"),
            (this.$5 =
              (a = e == null ? void 0 : e.startTimeMs) != null ? a : null),
            (this.$6 = (i = e == null ? void 0 : e.streams) != null ? i : {}),
            (this.$7 = new (r("ZenonTSLogRegistry"))({
              allAllowed: !r(
                "ZenonE2eeMandatedStateManager",
              ).isInfraE2eeMandated(),
            })));
        }
        var n = t.prototype;
        return (
          (n.getInternalState = function () {
            return {
              endTimeMs: this.$2,
              sharedIdx: this.$3,
              source: this.$4,
              startTimeMs: this.$5,
              streams: this.$6,
            };
          }),
          (n.$8 = function (t, n, r) {
            if (
              r.includes("qp") &&
              t.counters.qpSum != null &&
              (t.counters.framesDecoded != null ||
                t.counters.framesEncoded != null)
            ) {
              var e;
              t.counters.qp == null &&
                (t.counters.qp = Array(this.$3 - t.bucketStart).fill(0));
              var a = 0,
                i = 0,
                l = this.$3 - t.bucketStart;
              (l > 0
                ? (t.counters.framesEncoded != null
                    ? (a =
                        t.counters.framesEncoded[l] -
                        t.counters.framesEncoded[l - 1])
                    : t.counters.framesDecoded != null &&
                      (a =
                        t.counters.framesDecoded[l] -
                        t.counters.framesDecoded[l - 1]),
                  (i = t.counters.qpSum[l] - t.counters.qpSum[l - 1]))
                : (t.counters.framesEncoded != null
                    ? (a = t.counters.framesEncoded[l])
                    : t.counters.framesDecoded != null &&
                      (a = t.counters.framesDecoded[l]),
                  (i = t.counters.qpSum[l])),
                (t.counters.qp[l] =
                  (e = o("ZenonVideoQpConversion").convertQp(a, i, n)) != null
                    ? e
                    : 0));
            }
          }),
          (n.$9 = function (t, n, r, a) {
            var e = this,
              i = function (i, l) {
                for (var r of i)
                  if (n.includes(r)) {
                    for (var s of t.values())
                      if (s.type === l && s[r] !== void 0) {
                        var u;
                        a.counters[r] == null &&
                          (a.counters[r] = Array(e.$3 - a.bucketStart).fill(0));
                        var c =
                          (u = o("ZenonMediaStatsConfig").TSLOG_METRIC_SCALE[
                            r
                          ]) != null
                            ? u
                            : 1;
                        a.counters[r][e.$3 - a.bucketStart] = Math.round(
                          Number(s[r]) * c,
                        );
                      }
                  }
              };
            if (
              (i(o("ZenonMediaStatsConfig").getTrackStats(), "track"),
              i(
                o("ZenonMediaStatsConfig").getMediaSourceStats(),
                "media-source",
              ),
              r === "video" && n.includes("qp"))
            ) {
              var l = !1;
              for (var s of t.values())
                s.encoderImplementation !== void 0 &&
                  (l = String(s.encoderImplementation).includes("264"));
              this.$8(a, l, n);
            }
          }),
          (n.$10 = function (t) {
            return t.map(function (e, n) {
              return n === 0 ? 0 : e - t[n - 1];
            });
          }),
          (n.$11 = function (t) {
            if (t.type === "candidate-pair") return t.id;
            var e = "unknown",
              n = ["recv", "inbound"],
              r = ["send", "outbound"];
            ((n.some(function (e) {
              return t.id.toLowerCase().includes(e);
            }) ||
              n.some(function (e) {
                return t.type.toLowerCase().includes(e);
              })) &&
              (e = "inbound"),
              (r.some(function (e) {
                return t.id.toLowerCase().includes(e);
              }) ||
                r.some(function (e) {
                  return t.type.toLowerCase().includes(e);
                })) &&
                (e = "outbound"),
              t.type === "inbound-rtp" ||
                t.type === "remote-inbound-rtp" ||
                t.type === "outbound-rtp" ||
                t.type === "remote-outbound-rtp" ||
                t.type === "ssrc" ||
                s(0, 64950));
            var o = t.mediaType === void 0 ? "unknown" : t.mediaType.toString(),
              a = t.ssrc === void 0 ? "unknown" : t.ssrc.toString();
            return e + "_" + o + "_" + a;
          }),
          (n.$12 = function (t) {
            return t;
          }),
          (n.$13 = function (t, n) {
            return t + "_rtp_" + n;
          }),
          (n.$14 = function (t, n, r, o) {
            if (
              o &&
              Object.prototype.hasOwnProperty.call(
                o.counters,
                "estimatedPlayoutTimestamp",
              ) &&
              Object.prototype.hasOwnProperty.call(
                n.counters,
                "estimatedPlayoutTimestamp",
              )
            ) {
              var e = o.counters.estimatedPlayoutTimestamp.length,
                a = n.counters.estimatedPlayoutTimestamp.length,
                i = "avSync",
                l = "avSyncSign";
              if (
                this.$7.isCounterAllowed(t, i) &&
                this.$7.isCounterAllowed(t, l)
              ) {
                for (
                  var s = Math.min(a, e),
                    c = new Array(s).fill(0),
                    d = new Array(s).fill(0),
                    m = 0;
                  m < s;
                  m++
                ) {
                  var p = o.counters.estimatedPlayoutTimestamp[m],
                    _ = n.counters.estimatedPlayoutTimestamp[m];
                  p > 0 && _ > 0
                    ? p >= _
                      ? ((d[m] = 2), (c[m] = Math.min(p - _, u)))
                      : ((d[m] = 1), (c[m] = Math.min(_ - p, u)))
                    : ((d[m] = 0), (c[m] = 0));
                }
                (r.push({ data: c, name: i }), r.push({ data: d, name: l }));
              }
              var f = "audioTs",
                g = "videoTs";
              if (
                this.$7.isCounterAllowed(t, f) &&
                this.$7.isCounterAllowed(t, g)
              ) {
                for (
                  var h = 38077268e5,
                    y = Math.max(a, e),
                    C = new Array(e).fill(0),
                    b = new Array(a).fill(0),
                    v = null,
                    S = 0;
                  S < y;
                  S++
                ) {
                  var R = o.counters.estimatedPlayoutTimestamp[S],
                    L = n.counters.estimatedPlayoutTimestamp[S];
                  (v == null &&
                    (R > h && L > h
                      ? (v = Math.min(R, L))
                      : R > h
                        ? (v = R)
                        : L > h && (v = L)),
                    v != null &&
                      (R > h && (C[S] = Math.max(Math.min(R - v, u), -u)),
                      L > h && (b[S] = Math.max(Math.min(L - v, u), -u))));
                }
                (r.push({ data: C, name: f }), r.push({ data: b, name: g }));
              }
            }
          }),
          (n.$15 = function (t, n, r, a) {
            var e = [];
            for (var i in n.counters)
              (!r.includes(i) &&
                this.$7.isCounterAllowed(t, i) &&
                e.push({ data: n.counters[i], name: i }),
                o("ZenonMediaStatsParser").isCumulativeStat(i) &&
                  !r.includes(i + "_delta") &&
                  this.$7.isCounterAllowed(t, i + "_delta") &&
                  e.push({
                    data: this.$10(n.counters[i]),
                    name: i + "_delta",
                  }));
            var l = n.counters,
              s = l.fecPacketsDiscarded,
              u = l.fecPacketsReceived,
              c = "fecPacketsUsed_delta";
            if (this.$7.isCounterAllowed(t, c) && s != null && u != null) {
              for (
                var d = Math.min(s.length, u.length), m = [], p = 0;
                p < d;
                p++
              )
                m.push(u[p] - s[p]);
              e.push({ data: this.$10(m), name: c });
            }
            return (this.$16(t, n, e), this.$14(t, n, e, a), e);
          }),
          (n.$16 = function (t, n, r) {
            var e = "neteqMeanWaitTime";
            if (
              this.$7.isCounterAllowed(t, e) &&
              Object.prototype.hasOwnProperty.call(
                n.counters,
                "jitterBufferDelay",
              ) &&
              Object.prototype.hasOwnProperty.call(
                n.counters,
                "jitterBufferEmittedCount",
              )
            ) {
              for (
                var o = Math.min(
                    n.counters.jitterBufferDelay.length,
                    n.counters.jitterBufferEmittedCount.length,
                  ),
                  a = new Array(o).fill(0),
                  i = 1;
                i < o;
                i++
              ) {
                var l =
                    n.counters.jitterBufferDelay[i] -
                    n.counters.jitterBufferDelay[i - 1],
                  s =
                    n.counters.jitterBufferEmittedCount[i] -
                    n.counters.jitterBufferEmittedCount[i - 1];
                s === 0 ? (a[i] = 0) : (a[i] = Math.round((l * 1e3) / s));
              }
              r.push({ data: a, name: e });
            }
          }),
          (n.addSenderVideoStallData = function (t) {
            var e = this;
            [
              [
                o("ZenonMediaStatsConfig").OUTBOUND_SCREEN_STATS_TRACKID,
                "screen",
              ],
              [
                o("ZenonMediaStatsConfig").OUTBOUND_VIDEO_STATS_TRACKID,
                "video",
              ],
            ].forEach(function (n) {
              var r = n[0],
                o = n[1],
                a = t.get(r);
              if (a != null) {
                var i = e.generateTslogStreamName(o, r),
                  l = e.$6[i];
                (l == null &&
                  ((l = {
                    bucketEnd: e.$3,
                    bucketStart: e.$3,
                    contentType: o,
                    counters: {},
                    owner: "",
                  }),
                  (e.$6[i] = l)),
                  e.updateVideoStallStats(a, l, e.$3, o));
              }
            });
          }),
          (n.addDerivedMetricsData = function (t, n) {
            var e = this;
            n.forEach(function (n) {
              var r = n.trackId,
                a = t.get(r);
              if (a != null) {
                var i = n.remote ? "inbound" : "outbound",
                  l = i + "_" + n.contentType + "_" + r,
                  s = e.$6[l];
                s == null &&
                  ((s = {
                    bucketEnd: e.$3,
                    bucketStart: e.$3,
                    contentType: "audio",
                    counters: {},
                    owner: "",
                  }),
                  (e.$6[l] = s));
                var u = e.$3;
                o(
                  "ZenonMediaStatsConfig",
                ).TSLOG_DERIVED_STATS_REQUESTED.forEach(function (e) {
                  var t, n;
                  if (a.cumulativeStat[e]) {
                    var r = u - s.bucketStart;
                    (s.counters[e] == null &&
                      (s.counters[e] = Array(r).fill(0)),
                      (s.counters[e][r] =
                        (t =
                          (n = a.cumulativeStat[e]) == null
                            ? void 0
                            : n.getCurrentValue()) != null
                          ? t
                          : 0),
                      (s.bucketEnd = u));
                  }
                });
              }
            });
          }),
          (n.addAudioEchoMetricData = function (t) {
            var e = t.get(
              o("ZenonMediaStatsConfig").OUTBOUND_AUDIO_STATS_TRACKID,
            );
            if (e) {
              var n = this.generateTslogStreamName(
                  "audio",
                  o("ZenonMediaStatsConfig").OUTBOUND_AUDIO_STATS_TRACKID,
                ),
                r = this.$6[n];
              r == null &&
                ((r = {
                  bucketEnd: this.$3,
                  bucketStart: this.$3,
                  contentType: "audio",
                  counters: {},
                  owner: "",
                }),
                (this.$6[n] = r));
              var a = [
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .AUDIO_SEND_ECHO_CONFIDENCE,
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .AUDIO_SEND_ECHO_CROSS_CORRELATION,
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .AUDIO_SEND_ECHO_DELAY,
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .AUDIO_SEND_ECHO_ERL,
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .AUDIO_SEND_ECHO_LPB_RMS,
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .AUDIO_SEND_ECHO_RMS,
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .AUDIO_SEND_LT_ECHO_CONFIDENCE,
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .AUDIO_SEND_LT_ECHO_DELAY,
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .AUDIO_SEND_LT_ECHO_DELAY_ENTROPY,
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .AUDIO_SEND_LT_ECHO_ERL,
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .AUDIO_SEND_LT_ECHO_FRAMES_PERCENTAGE,
                  o("ZenonMediaStatsConfig").DERIVED_METRICS
                    .AUDIO_SEND_GOLDEN_ECHO_CONFIDENCE,
                ],
                i = this.$3;
              a.forEach(function (t) {
                var n;
                if (e.deltaStat[t]) {
                  var o = "audio_" + t,
                    a = i - r.bucketStart;
                  (r.counters[o] == null && (r.counters[o] = Array(a).fill(0)),
                    (r.counters[o][a] =
                      (n = e.deltaStat[t].getLastAddedValue()) != null ? n : 0),
                    (r.bucketEnd = i));
                }
              });
            }
          }),
          (n.addRenderedFrameData = function (t, n) {
            var e = this;
            n.size !== 0 &&
              n.forEach(function (r) {
                if (!(r.mediaType !== "video" || r.kind !== "video")) {
                  var o = e.$11(r),
                    a = e.$6[o];
                  if (a != null) {
                    var i = r.trackId != null ? n.get(String(r.trackId)) : null;
                    if (
                      !(
                        i == null ||
                        i.trackIdentifier == null ||
                        i.remoteSource === !1 ||
                        i.ended === !0
                      )
                    ) {
                      var l = i.trackIdentifier
                        ? String(i.trackIdentifier)
                        : "";
                      if (l) {
                        var s = t.get(l);
                        if (s) {
                          var u, c;
                          (a.counters.renderedWidth == null &&
                            (a.counters.renderedWidth = Array(
                              e.$3 - a.bucketStart,
                            ).fill(0)),
                            a.counters.renderedHeight == null &&
                              (a.counters.renderedHeight = Array(
                                e.$3 - a.bucketStart,
                              ).fill(0)));
                          var d = e.$3 - a.bucketStart;
                          ((a.counters.renderedWidth[d] =
                            (u = s.renderedWidth) != null ? u : 0),
                            (a.counters.renderedWidth[d] = Math.round(
                              a.counters.renderedWidth[d],
                            )),
                            (a.counters.renderedHeight[d] =
                              (c = s.renderedHeight) != null ? c : 0),
                            (a.counters.renderedHeight[d] = Math.round(
                              a.counters.renderedHeight[d],
                            )),
                            e.$17(a, d, s));
                        }
                      }
                    }
                  }
                }
              });
          }),
          (n.addCallCpuData = function (t, n) {
            var e = this,
              r = this.$12(t),
              o = this.$6[r];
            (o == null &&
              ((o = {
                bucketEnd: this.$3,
                bucketStart: this.$3,
                contentType: "client-metrics",
                counters: {},
                owner: "",
              }),
              (this.$6[r] = o)),
              (o.bucketEnd = this.$3),
              Object.keys(n).forEach(function (t) {
                e.addCounterValue(o, t, n[t]);
              }));
          }),
          (n.addHeapMemoryData = function (t, n) {
            var e = this,
              r = this.$12(t),
              o = this.$6[r];
            (o == null &&
              ((o = {
                bucketEnd: this.$3,
                bucketStart: this.$3,
                contentType: "client-metrics",
                counters: {},
                owner: "",
              }),
              (this.$6[r] = o)),
              (o.bucketEnd = this.$3),
              Object.keys(n).forEach(function (t) {
                n[t] != null && e.addCounterValue(o, t, n[t]);
              }));
          }),
          (n.addCandidatePairStats = function (t) {
            var e = this;
            t.size !== 0 &&
              t.forEach(function (t) {
                if (t.type === "candidate-pair") {
                  var n = e.$11(t),
                    r = e.$6[n];
                  (r == null &&
                    ((r = {
                      bucketEnd: e.$3,
                      bucketStart: e.$3,
                      contentType: "candidate-pair",
                      counters: {},
                      owner: "",
                    }),
                    (e.$6[n] = r)),
                    (e.$5 == null || t.timestamp < e.$5) &&
                      (e.$5 = Math.round(t.timestamp)));
                  for (var a in t)
                    o(
                      "ZenonMediaStatsConfig",
                    ).TSLOG_STATS_REQUESTED_FROM_CANDIDATE_PAIR.includes(a) &&
                      e.addCounterValue(
                        r,
                        a,
                        t[a],
                        o("ZenonMediaStatsConfig").TSLOG_METRIC_SCALE[a],
                      );
                  ((r.bucketEnd = e.$3),
                    (e.$2 == null || t.timestamp > e.$2) &&
                      (e.$2 = Math.round(t.timestamp)));
                }
              });
          }),
          (n.addData = function (t, n, r, a, i) {
            var e = this;
            n.size !== 0 &&
              n.forEach(function (l) {
                if (
                  !(
                    l.type === "track" ||
                    l.type === "media-source" ||
                    l.type === "candidate-pair" ||
                    l.type === "VideoBwe"
                  )
                ) {
                  var u = e.$11(l),
                    c = e.$6[u];
                  if (l.type === "ssrc") {
                    if (c == null) return;
                    for (var d in l)
                      r.includes(d) &&
                        o("ZenonMediaStatsConfig").getSsrcStats().includes(d) &&
                        e.addCounterValue(
                          c,
                          d,
                          l[d],
                          o("ZenonMediaStatsConfig").TSLOG_METRIC_SCALE[d],
                        );
                  } else {
                    (c == null &&
                      ((c = {
                        bucketEnd: e.$3,
                        bucketStart: e.$3,
                        contentType: a,
                        counters: {},
                        owner: i ? i.id : "",
                        ssrc: void 0,
                      }),
                      (e.$6[u] = c)),
                      (e.$5 == null || l.timestamp < e.$5) &&
                        (e.$5 = Math.round(l.timestamp)),
                      l.type === "inbound-rtp" ||
                        l.type === "outbound-rtp" ||
                        s(0, 64953),
                      l.ssrc != null && (c.ssrc = l.ssrc.toString()),
                      e.addCounterValue(c, "trackEnabled", t));
                    for (var m in l)
                      r.includes(m) &&
                        e.addCounterValue(
                          c,
                          m,
                          l[m],
                          o("ZenonMediaStatsConfig").TSLOG_METRIC_SCALE[m],
                        );
                    e.$9(n, r, a, c);
                  }
                  ((c.bucketEnd = e.$3),
                    (e.$2 == null || l.timestamp > e.$2) &&
                      (e.$2 = Math.round(l.timestamp)));
                }
              });
          }),
          (n.addNonMediaStates = function () {
            var e = this;
            this.$6.nonMediaState == null &&
              (this.$6.nonMediaState = {
                bucketEnd: this.$3,
                bucketStart: this.$3,
                contentType: "non-media-state",
                counters: {},
                owner: "",
              });
            var t = this.$6.nonMediaState;
            (Object.keys(this.$1).forEach(function (n) {
              if (n === "sendParametersState") {
                var r = e.$1[n];
                if (r != null)
                  for (var o = 0; o < r.encodings.length; o++) {
                    var a = r.encodings[o],
                      i = "l" + o,
                      l = 0;
                    (a.active != null && (l = a.active ? 2 : 1),
                      e.addCounterValue(t, i + "a", l));
                    var s = 0;
                    (a.maxBitrate != null && (s = a.maxBitrate),
                      e.addCounterValue(t, i + "mb", s));
                    var u = 0;
                    (a.scaleResolutionDownBy != null &&
                      (u = a.scaleResolutionDownBy),
                      e.addCounterValue(t, i + "sr", u, 100));
                  }
              } else e.addCounterValue(t, n, e.$1[n]);
            }),
              (t.bucketEnd = this.$3));
          }),
          (n.advance = function () {
            var e,
              t,
              n,
              r = this.$6["."];
            r == null &&
              ((r = {
                bucketEnd: this.$3,
                bucketStart: this.$3,
                contentType: "time",
                counters: { btime: [], ctime: [] },
              }),
              (this.$6["."] = r));
            var o = (e = this.$2) != null ? e : 0,
              a = r.counters,
              i = a.btime,
              l = a.ctime;
            (l.push(Math.round(o - ((t = this.$5) != null ? t : 0))),
              i.push(
                Math.round(l[this.$3] - ((n = l[this.$3 - 1]) != null ? n : 0)),
              ),
              (r.bucketEnd = this.$3),
              this.$3++);
          }),
          (n.onIceConnectionStateChange = function (n) {
            var t;
            this.$1.iceConnectionState = (t = e[n]) != null ? t : 0;
          }),
          (n.onRtpSendParametersStateChange = function (t) {
            this.$1.sendParametersState = t;
          }),
          (n.serialize = function (t) {
            if (Object.keys(this.$6).length === 0)
              return { format: "JSON", timeSeries: null };
            var e =
                t != null
                  ? t
                  : o("ZenonMediaStatsConfig").TSLOG_STATS_TO_SUPPRESS,
              n = {
                source: this.$4,
                start_time_ms: Math.round(Number(this.$5)),
                streams: [],
              },
              r = new Map(),
              a = 0,
              i = new Map(),
              l = ["audio", "video", "screen"];
            for (var s in this.$6) {
              var u = this.$6[s];
              if (l.includes(u.contentType)) {
                var c = o("ZenonTSLogDataUtil").getMediaTrackDirection(s);
                c === "inbound" &&
                  u.owner != null &&
                  !r.has(u.owner) &&
                  (r.set(u.owner, a.toString()), a++);
                var d = u.owner + u.contentType;
                i.set(d, s);
              }
            }
            var m = {};
            for (var p in this.$6) {
              var _ = this.$6[p],
                f = void 0,
                g = p;
              if (l.includes(_.contentType)) {
                var h = o("ZenonTSLogDataUtil").getMediaTrackDirection(p);
                ((m[h + _.contentType] = m[h + _.contentType] + 1 || 0),
                  (g = this.$13(h, _.contentType)));
              } else
                _.contentType === "candidate-pair"
                  ? (g = "cp")
                  : _.contentType === "client-metrics" && (g = "cm");
              var y = i.get(_.owner + "audio");
              _.contentType === "video" && y != null && (f = this.$6[y]);
              var C = {
                bucket_end: _.bucketEnd,
                bucket_start: _.bucketStart,
                counters: this.$15(g, this.$6[p], e, f),
                name: g,
                props: {},
              };
              (r.has(this.$6[p].owner) &&
                (C.props.seq = r.get(this.$6[p].owner)),
                this.$6[p].ssrc != null && (C.props.ssrc = this.$6[p].ssrc),
                (C.props.id = p),
                n.streams.push(C));
            }
            return this.$18(JSON.stringify(n));
          }),
          (n.updateVideoStallStats = function (t, n, r, a) {
            [
              o("ZenonMediaStatsConfig").DERIVED_METRICS
                .VIDEO_CAPTURE_IS_STALLED,
              o("ZenonMediaStatsConfig").DERIVED_METRICS
                .VIDEO_ENCODE_IS_STALLED,
              o("ZenonMediaStatsConfig").DERIVED_METRICS.VIDEO_SENT_IS_STALLED,
            ].forEach(function (e) {
              var o,
                i,
                l = a + "_" + e,
                s = r - n.bucketStart;
              (n.counters[l] == null && (n.counters[l] = Array(s).fill(0)),
                (n.counters[l][s] =
                  (o =
                    (i = t.deltaStat[e]) == null
                      ? void 0
                      : i.getLastAddedValue()) != null
                    ? o
                    : 0),
                (n.bucketEnd = r));
            });
          }),
          (n.generateTslogStreamName = function (t, n) {
            return "outbound_" + t + "_" + n;
          }),
          (n.addCounterValue = function (t, n, r, o) {
            var e = Math.max(this.$3 - t.bucketStart, 0);
            t.counters[n] == null && (t.counters[n] = Array(e).fill(0));
            var a = Math.round(Number(r) * (o != null ? o : 1));
            t.counters[n][e] = a;
          }),
          (n.$18 = function (t) {
            try {
              var e = btoa(r("pako").deflate(t, { to: "string" }));
              return (
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__PLATFORM,
                  checkpoint:
                    "Compressed TSLog data of length " +
                    t.length +
                    " to " +
                    e.length,
                }),
                { format: "B64_DEFLATE", timeSeries: e }
              );
            } catch (e) {
              var n = r("getErrorSafe")(e);
              r("FBLogger")("rtc_www")
                .catching(n)
                .warn("Caught exception while compressing TSLog");
            }
            return (
              r("ZenonInfraActionsLogger").logCheckpoint({
                auditId: r("ZenonAuditedCheckpointLogId")
                  .RP_ROOMS_INFRA_WWW__PLATFORM,
                checkpoint: "Not compressing TSLog data of length " + t.length,
              }),
              { format: "JSON", timeSeries: t }
            );
          }),
          (n.$17 = function (t, n, r) {
            var e,
              o = r.displayResolutionData;
            o &&
              (t.counters.rrrWidth == null &&
                (t.counters.rrrWidth = Array(this.$3 - t.bucketStart).fill(0)),
              t.counters.rrrHeight == null &&
                (t.counters.rrrHeight = Array(this.$3 - t.bucketStart).fill(0)),
              t.counters.rrrStreamType == null &&
                (t.counters.rrrStreamType = Array(this.$3 - t.bucketStart).fill(
                  0,
                )),
              (t.counters.rrrWidth[n] = o.renderWidth
                ? Math.round(o.renderWidth)
                : 0),
              (t.counters.rrrHeight[n] = o.renderHeight
                ? Math.round(o.renderHeight)
                : 0),
              (t.counters.rrrStreamType[n] =
                (e = o.streamType) != null ? e : 0));
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
