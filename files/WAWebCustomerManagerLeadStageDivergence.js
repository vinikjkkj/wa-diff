__d(
  "WAWebCustomerManagerLeadStageDivergence",
  ["WAWebCustomerManagerSMBUserJourneyLogger"],
  function (t, n, r, o, a, i, l) {
    var e = !1;
    function s(t, n, r) {
      if (!(e || r === "none")) {
        var a = d(t, n, r);
        a.divergence_scope !== "none" &&
          ((e = !0),
          o(
            "WAWebCustomerManagerSMBUserJourneyLogger",
          ).CustomerManagerUserJourneyLogger.leadStageDivergence(a));
      }
    }
    var u = {
      compared_profile_count: 0,
      diverged_missing_count: 0,
      diverged_profile_count: 0,
      divergence_scope: "none",
    };
    function c(e) {
      var t = e.hasCompleteRecords,
        n = e.hasError,
        r = e.isLoading,
        o = e.requiresFullScan,
        a = e.walkEnabled;
      return !a || !o || r || n
        ? "none"
        : t
          ? "full_scan"
          : "full_scan_truncated";
    }
    function d(e, t, n) {
      if (n === "none" || t == null) return u;
      var r = 0,
        o = 0;
      for (var a of e) {
        var i,
          l,
          s = (i = t.get(String(a.chatJid))) != null ? i : null,
          c = (l = a.leadStage) != null ? l : null;
        s !== c && (r++, c == null && o++);
      }
      return {
        compared_profile_count: e.length,
        diverged_missing_count: o,
        diverged_profile_count: r,
        divergence_scope: n,
      };
    }
    ((l.reportLeadStageDivergenceOnce = s),
      (l.resolveDivergenceScope = c),
      (l.compareLeadStages = d));
  },
  98,
);
