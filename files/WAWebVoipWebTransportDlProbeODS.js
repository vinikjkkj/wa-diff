__d(
  "WAWebVoipWebTransportDlProbeODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        o,
        a,
        i,
        l = (t = e == null ? void 0 : e.dlProbeRequests) != null ? t : 0;
      if (!(e == null || l <= 0)) {
        var s = (n = e.dlProbeResponses) != null ? n : 0;
        (r("WAWebODS").incr("web.call.webtransport.dl_probe.connections"),
          r("WAWebODS").incr("web.call.webtransport.dl_probe.requests", l),
          r("WAWebODS").incr("web.call.webtransport.dl_probe.responses", s),
          u(l, s),
          c(s, (o = e.dlProbeResponseSpanMs) != null ? o : 0),
          d((a = e.dlProbeMaxRequestedBytes) != null ? a : 0),
          m((i = e.dlProbeFirstSendAfterOpenMs) != null ? i : 0));
      }
    }
    function s(e) {
      e: {
        if (e === "buffered") {
          r("WAWebODS").incr(
            "web.call.webtransport.stateful_ping.before_open.buffered",
          );
          break e;
        }
        if (e === "dropped") {
          r("WAWebODS").incr(
            "web.call.webtransport.stateful_ping.before_open.dropped",
          );
          break e;
        }
        if (e === "no_relay_info") {
          r("WAWebODS").incr(
            "web.call.webtransport.stateful_ping.before_open.no_relay_info",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function u(e, t) {
      if (t <= 0) {
        r("WAWebODS").incr(
          "web.call.webtransport.dl_probe.no_response.connections",
        );
        return;
      }
      if (t < e) {
        r("WAWebODS").incr(
          "web.call.webtransport.dl_probe.partial.connections",
        );
        return;
      }
      r("WAWebODS").incr("web.call.webtransport.dl_probe.complete.connections");
    }
    function c(e, t) {
      if (!(e < 2)) {
        if (t < 1) {
          r("WAWebODS").incr("web.call.webtransport.dl_probe.span.lt_1ms");
          return;
        }
        if (t < 10) {
          r("WAWebODS").incr("web.call.webtransport.dl_probe.span.1_9ms");
          return;
        }
        r("WAWebODS").incr("web.call.webtransport.dl_probe.span.ge_10ms");
      }
    }
    function d(e) {
      if (e < 1e3) {
        r("WAWebODS").incr(
          "web.call.webtransport.dl_probe.requested_bytes.lt_1000",
        );
        return;
      }
      if (e < 1200) {
        r("WAWebODS").incr(
          "web.call.webtransport.dl_probe.requested_bytes.1000_1199",
        );
        return;
      }
      r("WAWebODS").incr(
        "web.call.webtransport.dl_probe.requested_bytes.ge_1200",
      );
    }
    function m(e) {
      if (e < 5) {
        r("WAWebODS").incr(
          "web.call.webtransport.dl_probe.first_send_after_open.lt_5ms",
        );
        return;
      }
      if (e < 50) {
        r("WAWebODS").incr(
          "web.call.webtransport.dl_probe.first_send_after_open.5_49ms",
        );
        return;
      }
      r("WAWebODS").incr(
        "web.call.webtransport.dl_probe.first_send_after_open.ge_50ms",
      );
    }
    ((l.logCallWebtransportDlProbe = e),
      (l.logCallWebtransportStatefulPingBeforeOpen = s));
  },
  98,
);
