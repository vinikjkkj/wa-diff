__d(
  "ZenonMediaStatsParser",
  [
    "invariant",
    "ZenonCumulativeMediaStat",
    "ZenonDeltaMediaStat",
    "ZenonMediaStatsConfig",
    "ZenonSimulcastStats",
    "ZenonVideoScaleHistogram",
    "isStringNullOrEmpty",
    "isTruthy",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = [
        "inbound-rtp",
        "outbound-rtp",
        "track",
        "media-source",
        "candidate-pair",
      ];
    function c(e, t) {
      var n = new Map();
      return (
        t.forEach(function (t, r) {
          ((t.type === "ssrc" &&
            t.googTrackId != null &&
            t.googTrackId === e.webrtcTrack.id) ||
            t.type === "VideoBwe") &&
            n.set(r, t);
        }),
        n
      );
    }
    function d(e) {
      var t = new Map();
      for (var n of e) {
        var r = n[0],
          o = n[1];
        u.includes(o.type) && t.set(r, o);
      }
      return t;
    }
    function m(t, n) {
      var a = n.contentType,
        i = n.remote,
        l = n.trackId,
        s = t.get(l);
      return (
        s == null &&
          ((s = {
            codec: null,
            contentType: a,
            cumulativeStat: {},
            deltaStat: {},
            duration: 0,
            histResScale: new Array(
              o("ZenonVideoScaleHistogram").getBinFromScale(0) + 1,
            ).fill(0),
            lastUpdate: 0,
            maxTotalDecodeTime: 0,
            percentStat: {},
            remote: i,
            startTime: (e || (e = r("performanceNow")))(),
          }),
          t.set(l, s)),
        s
      );
    }
    function p(e) {
      return o("ZenonMediaStatsConfig").CUMULATIVE_STATS.includes(e);
    }
    function _(e) {
      return o("ZenonMediaStatsConfig").DELTA_STATS.includes(e);
    }
    function f(e) {
      if (e instanceof Map) return e;
      var t = new Map();
      if (e.result != null)
        for (var n of e.result()) {
          var r = { id: n.id, timestamp: n.timestamp, type: n.type };
          for (var o of n.names()) r[o] == null && (r[o] = n.stat(o));
          t.set(r.id, r);
        }
      else for (var a of e.values()) t.set(a.id, a);
      return t;
    }
    function g(e, t, n) {
      var r = c(e, n);
      for (var o of r.values()) {
        var a = m(t, e);
        v(e, a, o);
        var i = C(o);
        i != null && (a.codec = i);
      }
    }
    function h(e, t, n) {
      var a = null,
        i = [];
      for (var l of n.values())
        switch (
          (l.type === "outbound-rtp" &&
            l.trackId != null &&
            ((a = m(t, e)),
            typeof l.trackId == "string" && (a.sender = l.trackId)),
          l.type)
        ) {
          case "inbound-rtp":
            ((a = m(t, e)),
              S(
                a,
                l,
                o("ZenonMediaStatsConfig")
                  .getInboundRtpStats()
                  .concat(o("ZenonMediaStatsConfig").getRtpStats()),
              ));
            break;
          case "outbound-rtp":
            l.kind === "video"
              ? i.push(l)
              : ((a = m(t, e)),
                S(
                  a,
                  l,
                  o("ZenonMediaStatsConfig")
                    .getOutboundRtpStats()
                    .concat(o("ZenonMediaStatsConfig").getRtpStats()),
                ));
            break;
          case "remote-outbound-rtp":
            l.kind === "audio" &&
              ((a = m(t, e)),
              S(a, l, o("ZenonMediaStatsConfig").getRemoteOutboundRtpStats()));
            break;
          case "media-source":
            ((a = m(t, e)),
              S(a, l, o("ZenonMediaStatsConfig").getMediaSourceStats()));
            break;
          case "candidate-pair":
            ((a = m(t, e)),
              S(a, l, o("ZenonMediaStatsConfig").getCandidatePairStats()));
            break;
          case "codec": {
            var s = String(l.mimeType).split("/")[1];
            r("isStringNullOrEmpty")(s) || ((a = m(t, e)), b(a, s));
            break;
          }
          case "local-candidate":
            ((a = m(t, e)), (a.localIceCandidateStats = L(l)));
            break;
          case "remote-candidate":
            ((a = m(t, e)), (a.remoteIceCandidateStats = L(l)));
            break;
          default:
            break;
        }
      if (i.length > 0) {
        ((a = m(t, e)), R(a, i));
        var u = o("ZenonSimulcastStats").getBaseLayerReport(i);
        u != null &&
          S(
            a,
            u,
            o("ZenonMediaStatsConfig")
              .getOutboundRtpStats()
              .concat(o("ZenonMediaStatsConfig").getRtpStats()),
          );
      }
    }
    function y(e, t, n) {
      var r = m(t, e);
      if (typeof n.getParameters == "function") {
        var o,
          a = n.getParameters(),
          i = a.encodings,
          l = r.audioEncoding,
          s = r.videoEncoding;
        if (Array.isArray(i)) {
          var u = i.some(function (e) {
            return e.active;
          });
          e.contentType === "audio"
            ? l
              ? ((l.prevState = l.enabled), (l.enabled = u))
              : (r.audioEncoding = { enabled: u, prevState: null })
            : s
              ? ((s.prevState = s.enabled), (s.enabled = u))
              : (r.videoEncoding = { enabled: u, prevState: null });
        }
        if ((o = n.transport) != null && o.iceTransport) {
          var c = n.transport.iceTransport.state;
          r.transportIceState = c;
        }
      }
    }
    function C(e) {
      var t = null;
      return (
        e.googCodecName != null &&
          e.googCodecName !== "" &&
          ((t = String(e.googCodecName)),
          e.codecImplementationName != null &&
            (t += String(e.codecImplementationName))),
        t
      );
    }
    function b(t, n) {
      t.startTime == null && (t.startTime = (e || (e = r("performanceNow")))());
      var o = t.startTime;
      (t.codecHistory == null && (t.codecHistory = []),
        n.length > 0 &&
          (t.codecHistory.length === 0 ||
            t.codecHistory[t.codecHistory.length - 1].codec !== n) &&
          t.codecHistory.push({
            codec: n,
            updateTime: (e || (e = r("performanceNow")))() - o,
          }),
        (t.codec = n));
    }
    function v(e, t, n) {
      Object.entries(n).forEach(function (a) {
        var i = a[0],
          l = Number(a[1]);
        if (
          (n.type === "ssrc" &&
            o("ZenonMediaStatsConfig").STATS_REQUESTED.includes(i) &&
            o("ZenonMediaStatsConfig").getSsrcStats().includes(i)) ||
          (n.type === "VideoBwe" &&
            o("ZenonMediaStatsConfig").getVideoBweStats().includes(i) &&
            e.contentType !== "audio" &&
            e.remote === !1)
        )
          if (o("ZenonMediaStatsConfig").CUMULATIVE_STATS.includes(i)) {
            if (i === "packetsLost" && e.remote) return;
            t.cumulativeStat[i] != null
              ? i === "packetsLost"
                ? t.cumulativeStat[i].updateNonStrictCumulative(l)
                : t.cumulativeStat[i].update(l)
              : (t.cumulativeStat[i] = new (r("ZenonCumulativeMediaStat"))(l));
          } else
            o("ZenonMediaStatsConfig").DELTA_STATS.includes(i) &&
              (t.deltaStat[i] == null &&
                (t.deltaStat[i] = new (r("ZenonDeltaMediaStat"))()),
              t.deltaStat[i].add(l));
      });
    }
    function S(e, t, n) {
      Object.entries(t).forEach(function (a) {
        var i = a[0],
          l = Number(a[1]);
        if (!n || n.includes(i))
          if (p(i))
            e.cumulativeStat[i] != null
              ? i === "packetsLost"
                ? e.cumulativeStat[i].updateNonStrictCumulative(l)
                : e.cumulativeStat[i].update(l)
              : (e.cumulativeStat[i] = new (r("ZenonCumulativeMediaStat"))(l));
          else if (
            i === o("ZenonMediaStatsConfig").DERIVED_METRICS.FRAME_RATE_MEAN
          ) {
            var s = null;
            (t.framesEncoded != null
              ? (s = Number(t.framesEncoded))
              : t.framesDecoded != null && (s = Number(t.framesDecoded)),
              r("isTruthy")(s) &&
                (e.deltaStat[i] == null &&
                  (e.deltaStat[i] = new (r("ZenonDeltaMediaStat"))()),
                e.deltaStat[i].add(l)));
          } else
            _(i) &&
              (e.deltaStat[i] == null &&
                (e.deltaStat[i] = new (r("ZenonDeltaMediaStat"))()),
              e.deltaStat[i].add(l));
      });
    }
    function R(e, t) {
      var n, a;
      (e.simulcastStats === void 0 &&
        (e.simulcastStats = new (o(
          "ZenonSimulcastStats",
        ).ZenonSimulcastStats)()),
        (n = e.simulcastStats) == null || n.update(t));
      var i = (a = e.simulcastStats) == null ? void 0 : a.getNumLayerChanges();
      if (i != null) {
        var l = o("ZenonMediaStatsConfig").DERIVED_METRICS
          .SIMULCAST_LAYER_CHANGES;
        e.cumulativeStat[l] != null
          ? e.cumulativeStat[l].update(i)
          : (e.cumulativeStat[l] = new (r("ZenonCumulativeMediaStat"))(i));
      }
    }
    function L(e) {
      e.type === "local-candidate" ||
        e.type === "remote-candidate" ||
        s(0, 64948);
      var t = e.candidateType,
        n = e.networkType,
        r = e.protocol,
        o = e.relayProtocol,
        a = {};
      return (
        t != null && typeof t == "string" && (a.candidateType = t),
        n != null && typeof n == "string" && (a.networkType = n),
        r != null && typeof r == "string" && (a.protocol = r),
        o != null && typeof o == "string" && (a.relayProtocol = o),
        a
      );
    }
    ((l.filterLegacyMediaReports = c),
      (l.filterMediaReports = d),
      (l.getOrCreateTrackerFromMap = m),
      (l.isCumulativeStat = p),
      (l.isDeltaStat = _),
      (l.makeStatsReportMap = f),
      (l.updateTrackStatsWithChromiumLegacyReport = g),
      (l.updateTrackStatsWithReport = h),
      (l.updateTrackStatsFromSender = y));
  },
  98,
);
