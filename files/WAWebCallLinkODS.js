__d(
  "WAWebCallLinkODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e() {
      r("WAWebODS").incr("web.call.call_link.auto_join.recorded");
    }
    function s() {
      r("WAWebODS").incr("web.call.call_link.auto_join.record_failed");
    }
    function u() {
      r("WAWebODS").incr("web.call.call_link.auto_join.granted");
    }
    function c(e) {
      e: {
        if (e === "no-consent") {
          r("WAWebODS").incr(
            "web.call.call_link.auto_join.rejected.no_consent",
          );
          break e;
        }
        if (e === "storage-read-failed") {
          r("WAWebODS").incr(
            "web.call.call_link.auto_join.rejected.storage_read_failed",
          );
          break e;
        }
        if (e === "token-mismatch") {
          r("WAWebODS").incr(
            "web.call.call_link.auto_join.rejected.token_mismatch",
          );
          break e;
        }
        if (e === "expired") {
          r("WAWebODS").incr("web.call.call_link.auto_join.rejected.expired");
          break e;
        }
        if (e === "malformed") {
          r("WAWebODS").incr("web.call.call_link.auto_join.rejected.malformed");
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.logCallLinkAutoJoinRecordedODS = e),
      (l.logCallLinkAutoJoinRecordFailedODS = s),
      (l.logCallLinkAutoJoinGrantedODS = u),
      (l.logCallLinkAutoJoinRejectedODS = c));
  },
  98,
);
