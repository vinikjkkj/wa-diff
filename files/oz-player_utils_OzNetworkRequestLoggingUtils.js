__d(
  "oz-player/utils/OzNetworkRequestLoggingUtils",
  [
    "oz-player/shims/OzNetworkDiagnostics",
    "oz-player/utils/OzResourceTimingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return t ? parseInt(t.get("content-length"), 10) : null;
      },
      s = function (t) {
        return t ? t.get("x-fb-fna-hit") : null;
      },
      u = function (t) {
        return t ? t.get("x-fb-edge-hit") : null;
      },
      c = function (t) {
        return t ? t.get("x-fb-origin-hit") : null;
      },
      d = function (t) {
        return t ? parseInt(t.get("x-fb-dynamic-latest-segment-id"), 10) : null;
      },
      m = function (t, n) {
        var e = o(
          "oz-player/utils/OzResourceTimingUtils",
        ).getLatestResourceTimingEntry(n);
        e &&
          t
            .setTimeToFirstByte(Math.round(e.responseStart - e.startTime))
            .setTimeToLastByte(Math.round(e.responseEnd - e.startTime))
            .setTimeToRequestStart(Math.round(e.requestStart - e.startTime));
      },
      p = function (n, o, a, i, l, p) {
        (a.length && n.setSegmentCount(a.length),
          o != null && o !== "" && m(n, String(o)),
          n
            .setResource(o != null && o !== "" ? o : null)
            .setInitiator("fetch")
            .setTimeToRequestSent(Math.round(Math.floor(i)))
            .setLiveheadSeqNumHeader(d(p == null ? void 0 : p.headers))
            .setContentLengthHeader(e(p == null ? void 0 : p.headers))
            .setEdgeHitHeader(u(p == null ? void 0 : p.headers))
            .setOriginHitHeader(c(p == null ? void 0 : p.headers))
            .setFNAHitHeader(s(p == null ? void 0 : p.headers))
            .setResponseTimeMsHeader(
              r("oz-player/shims/OzNetworkDiagnostics").getResponseTimeMs(
                p == null ? void 0 : p.headers,
              ),
            )
            .setUserInfo({
              segmentPTSHeader: String(
                r("oz-player/shims/OzNetworkDiagnostics").getDvlSegmentPTS(
                  p == null ? void 0 : p.headers,
                ),
              ),
            })
            .setCode(p == null ? void 0 : p.status)
            .setLength(l));
      },
      _ = function (n, o, a, i, l, s, p) {
        (o != null && o !== "" && m(n, String(o)),
          n
            .setResource(o != null && o !== "" ? o : null)
            .setLiveheadSeqNumHeader(d(i == null ? void 0 : i.headers))
            .setContentLengthHeader(e(i == null ? void 0 : i.headers))
            .setEdgeHitHeader(u(i == null ? void 0 : i.headers))
            .setOriginHitHeader(c(i == null ? void 0 : i.headers))
            .setResponseTimeMsHeader(
              r("oz-player/shims/OzNetworkDiagnostics").getResponseTimeMs(
                i == null ? void 0 : i.headers,
              ),
            )
            .setCode(i == null ? void 0 : i.status)
            .setLength(a)
            .setClientTimeBegin(l)
            .setClientTimeDuration(s - l)
            .setClientTimeEnd(s)
            .setUserInfo(p != null && p > 0 ? { chunkSize: String(p) } : null));
      };
    ((l.setFetchStreamLoggingAttributes = p),
      (l.setBandwidthSampledLoggingAttributes = _));
  },
  98,
);
