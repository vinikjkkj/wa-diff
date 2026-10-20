__d(
  "WAWebVoipSctpIceTcpFallbackODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      e: {
        if (e === "skipped_no_tcp_vip_after_accept") {
          r("WAWebODS").incr(
            "web.call.sctp.ice_tcp_fallback.skipped_no_tcp_vip_after_accept",
          );
          break e;
        }
        if (e === "off_after_accept") {
          r("WAWebODS").incr("web.call.sctp.ice_tcp_fallback.off_after_accept");
          break e;
        }
        if (e === "fired_after_accept") {
          r("WAWebODS").incr(
            "web.call.sctp.ice_tcp_fallback.fired_after_accept",
          );
          break e;
        }
        if (e === "tcp_connected_after_accept") {
          r("WAWebODS").incr(
            "web.call.sctp.ice_tcp_fallback.tcp_connected_after_accept",
          );
          break e;
        }
        if (e === "reverted_after_accept") {
          r("WAWebODS").incr(
            "web.call.sctp.ice_tcp_fallback.reverted_after_accept",
          );
          break e;
        }
        if (e === "skipped_no_tcp_vip_before_accept") {
          r("WAWebODS").incr(
            "web.call.sctp.ice_tcp_fallback.skipped_no_tcp_vip_before_accept",
          );
          break e;
        }
        if (e === "off_before_accept") {
          r("WAWebODS").incr(
            "web.call.sctp.ice_tcp_fallback.off_before_accept",
          );
          break e;
        }
        if (e === "fired_before_accept") {
          r("WAWebODS").incr(
            "web.call.sctp.ice_tcp_fallback.fired_before_accept",
          );
          break e;
        }
        if (e === "tcp_connected_before_accept") {
          r("WAWebODS").incr(
            "web.call.sctp.ice_tcp_fallback.tcp_connected_before_accept",
          );
          break e;
        }
        if (e === "reverted_before_accept") {
          r("WAWebODS").incr(
            "web.call.sctp.ice_tcp_fallback.reverted_before_accept",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    l.logCallSctpIceTcpFallback = e;
  },
  98,
);
