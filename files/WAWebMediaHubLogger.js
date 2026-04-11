__d(
  "WAWebMediaHubLogger",
  [
    "WAWebMediaHubSession",
    "WAWebMediaHubUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumActionCode",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e.action,
        a = e.entrypoint,
        i = e.surface,
        l = e.customFields,
        s = l === void 0 ? {} : l;
      (n === o("WAWebWamEnumActionCode").ACTION_CODE.OPEN_MEDIA_HUB &&
        (r("WAWebMediaHubSession").newSessionId(),
        r("WAWebMediaHubSession").setEntryPoint(a)),
        i != null &&
          i !== r("WAWebMediaHubSession").getSurface() &&
          r("WAWebMediaHubSession").setSurface(i));
      var u = s == null ? void 0 : s.fromSearchResult;
      if (
        (u != null &&
          u !== r("WAWebMediaHubSession").getFromSearchResults() &&
          r("WAWebMediaHubSession").setFromSearchResults(u),
        n != null)
      ) {
        var c = {
          search_results: r("WAWebMediaHubSession").getFromSearchResults(),
        };
        (n === o("WAWebWamEnumActionCode").ACTION_CODE.SCROLL &&
          (c.search_results_returned =
            (s == null ? void 0 : s.searchResultsReturned) === !0 ? 1 : 0),
          new (o(
            "WAWebMediaHubUserJourneyWamEvent",
          ).MediaHubUserJourneyWamEvent)({
            mediaHubEntryPoint: r("WAWebMediaHubSession").getEntryPoint(),
            mediaHubAction: n,
            unifiedSessionId:
              (t = o(
                "WAWebUnifiedSession",
              ).UnifiedSessionManager.getSessionId()) != null
                ? t
                : void 0,
            mediaHubSurface: r("WAWebMediaHubSession").getSurface(),
            mediaHubSequenceNumber: r("WAWebMediaHubSession").getSequence(),
            mediaHubSessionId: r("WAWebMediaHubSession").getSessionId(),
            customFields: JSON.stringify(c),
          }).commit());
      }
    }
    l.logMediaHubAction = e;
  },
  98,
);
