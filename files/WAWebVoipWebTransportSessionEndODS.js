__d(
  "WAWebVoipWebTransportSessionEndODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e === "stream"
        ? "stream_error"
        : t === "The session is closed."
          ? "closed_by_relay"
          : t === "Connection lost."
            ? "connection_lost"
            : "other";
    }
    function s(e, t) {
      e: {
        if (e === "closed_by_relay") {
          (r("WAWebODS").incr(
            "web.call.webtransport.session_end.closed_by_relay",
          ),
            c(t));
          break e;
        }
        if (e === "connection_lost") {
          (r("WAWebODS").incr(
            "web.call.webtransport.session_end.connection_lost",
          ),
            d(t));
          break e;
        }
        if (e === "stream_error") {
          r("WAWebODS").incr("web.call.webtransport.session_end.stream_error");
          break e;
        }
        if (e === "other") {
          r("WAWebODS").incr("web.call.webtransport.session_end.other");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    function u(e) {
      return e == null
        ? "no_datagram"
        : e < 1e3
          ? "lt_1s"
          : e < 1e4
            ? "1_10s"
            : e < 3e4
              ? "10_30s"
              : "ge_30s";
    }
    function c(e) {
      e: {
        var t = u(e);
        if (t === "no_datagram") {
          r("WAWebODS").incr(
            "web.call.webtransport.session_end.closed_by_relay.silence.no_datagram",
          );
          break e;
        }
        if (t === "lt_1s") {
          r("WAWebODS").incr(
            "web.call.webtransport.session_end.closed_by_relay.silence.lt_1s",
          );
          break e;
        }
        if (t === "1_10s") {
          r("WAWebODS").incr(
            "web.call.webtransport.session_end.closed_by_relay.silence.1_10s",
          );
          break e;
        }
        if (t === "10_30s") {
          r("WAWebODS").incr(
            "web.call.webtransport.session_end.closed_by_relay.silence.10_30s",
          );
          break e;
        }
        if (t === "ge_30s") {
          r("WAWebODS").incr(
            "web.call.webtransport.session_end.closed_by_relay.silence.ge_30s",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    function d(e) {
      e: {
        var t = u(e);
        if (t === "no_datagram") {
          r("WAWebODS").incr(
            "web.call.webtransport.session_end.connection_lost.silence.no_datagram",
          );
          break e;
        }
        if (t === "lt_1s") {
          r("WAWebODS").incr(
            "web.call.webtransport.session_end.connection_lost.silence.lt_1s",
          );
          break e;
        }
        if (t === "1_10s") {
          r("WAWebODS").incr(
            "web.call.webtransport.session_end.connection_lost.silence.1_10s",
          );
          break e;
        }
        if (t === "10_30s") {
          r("WAWebODS").incr(
            "web.call.webtransport.session_end.connection_lost.silence.10_30s",
          );
          break e;
        }
        if (t === "ge_30s") {
          r("WAWebODS").incr(
            "web.call.webtransport.session_end.connection_lost.silence.ge_30s",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            t,
        );
      }
    }
    ((l.classifyWebtransportSessionEnd = e),
      (l.logCallWebtransportSessionEnd = s));
  },
  98,
);
