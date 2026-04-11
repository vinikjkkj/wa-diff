__d(
  "WAWebAccountLinkingDBOperationsAPI",
  ["WAWebAccountLinkingDBOperations_DO_NOT_USE_DIRECTLY"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return {
        createOrUpdateAccountLinkingState: (t = o(
          "WAWebAccountLinkingDBOperations_DO_NOT_USE_DIRECTLY",
        )).createOrUpdateAccountLinkingState,
        getAccountLinkingData: t.getAccountLinkingData,
        getAccountLinkingStatus: t.getAccountLinkingStatus,
        getPingExpirationTime: t.getPingExpirationTime,
        purgeWaffleData: t.purgeWaffleData,
        updateAccesstoken: t.updateAccesstoken,
        updateAccountLinkingData: t.updateAccountLinkingData,
        updateAccountLinkingState: t.updateAccountLinkingState,
        updateDestinationIdentities: t.updateDestinationIdentities,
        updatePingInterval: t.updatePingInterval,
        updateServiceData: t.updateServiceData,
      };
    }
    l.getAccountLinkingDBOps = e;
  },
  98,
);
