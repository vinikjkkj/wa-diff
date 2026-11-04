__d(
  "WAWebBackgroundPauseGating",
  ["$InternalEnum", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum")({
      Off: 0,
      HistorySync: 1,
      OfflineResume: 2,
      Fts: 3,
      All: 4,
    });
    function s() {
      var t = d();
      return t === e.HistorySync || t === e.All;
    }
    function u() {
      var t = d();
      return t === e.OfflineResume || t === e.All;
    }
    function c() {
      var t = d();
      return t === e.Fts || t === e.All;
    }
    function d() {
      var t;
      return (t = e.cast(
        o("WAWebABProps").getABPropConfigValue(
          "web_calling_pause_bg_during_call_mode",
        ),
      )) != null
        ? t
        : e.Off;
    }
    ((l.isVoipPauseHistorySyncEnabled = s),
      (l.isVoipDeprioritizeOfflineResumeEnabled = u),
      (l.isVoipPauseFtsEnabled = c));
  },
  98,
);
