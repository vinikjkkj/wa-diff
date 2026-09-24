__d(
  "WAWebCallLinkODS",
  ["WAWebODS"],
  function (t, n, r, o, a, i, l) {
    function e() {
      r("WAWebODS").incr("web.call.call_link.auto_join.recorded");
    }
    function s() {
      r("WAWebODS").incr("web.call.call_link.auto_join.record_duplicate_press");
    }
    function u() {
      r("WAWebODS").incr("web.call.call_link.auto_join.record_failed");
    }
    function c() {
      r("WAWebODS").incr("web.call.call_link.auto_join.pending_at_startup");
    }
    function d() {
      r("WAWebODS").incr("web.call.call_link.auto_join.granted");
    }
    function m() {
      r("WAWebODS").incr("web.call.call_link.auto_join.join_attempted");
    }
    function p(e) {
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
        if (e === "links-disabled") {
          r("WAWebODS").incr(
            "web.call.call_link.auto_join.rejected.links_disabled",
          );
          break e;
        }
        if (e === "existing-call") {
          r("WAWebODS").incr(
            "web.call.call_link.auto_join.rejected.existing_call",
          );
          break e;
        }
        if (e === "not-call-link-launch") {
          r("WAWebODS").incr(
            "web.call.call_link.auto_join.rejected.not_call_link_launch",
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      }
    }
    ((l.logCallLinkAutoJoinRecordedODS = e),
      (l.logCallLinkAutoJoinRecordDuplicatePressODS = s),
      (l.logCallLinkAutoJoinRecordFailedODS = u),
      (l.logCallLinkAutoJoinPendingAtStartupODS = c),
      (l.logCallLinkAutoJoinGrantedODS = d),
      (l.logCallLinkAutoJoinJoinAttemptedODS = m),
      (l.logCallLinkAutoJoinRejectedODS = p));
  },
  98,
);
