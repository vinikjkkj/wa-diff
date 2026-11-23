__d(
  "WAWebCommunityTabReadinessSignals",
  [
    "WAWebChatCollection",
    "WAWebCmd",
    "WAWebCommunityParticipationUtils",
    "WAWebGroupMetadataCollection",
    "WAWebRegionReadinessSignals",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebCmd").Cmd.isOfflineDeliveryEnd ||
        r("WAWebGroupMetadataCollection").some(u)
      );
    }
    var s = o("WAWebRegionReadinessSignals").createReadinessSignal(
      e,
      function () {
        return o("WAWebRegionReadinessSignals").raceReadinessSubscriptions(
          function (t) {
            return [
              o("WAWebRegionReadinessSignals").waitForReadyOncePerBurst(
                r("WAWebGroupMetadataCollection"),
                "add change remove reset",
                e,
                t,
              ),
              o("WAWebRegionReadinessSignals").waitForReadyOncePerBurst(
                o("WAWebChatCollection").ChatCollection,
                "add reset",
                e,
                t,
              ),
              o("WAWebRegionReadinessSignals").waitForOfflineDeliveryEnd(t),
            ];
          },
        );
      },
    );
    function u(e) {
      return (
        o("WAWebCommunityParticipationUtils").isParticipatingCommunity(e) &&
        o("WAWebChatCollection").ChatCollection.get(e.id) != null
      );
    }
    ((l.isCommunityTabReady = e), (l.communityTabReadySignal = s));
  },
  98,
);
