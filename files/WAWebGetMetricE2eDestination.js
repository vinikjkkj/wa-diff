__d(
  "WAWebGetMetricE2eDestination",
  ["WAWebWamEnumE2eDestination"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e.isUser())
        return o("WAWebWamEnumE2eDestination").E2E_DESTINATION.INDIVIDUAL;
      if (e.isGroup())
        return o("WAWebWamEnumE2eDestination").E2E_DESTINATION.GROUP;
      if (e.isStatus())
        return o("WAWebWamEnumE2eDestination").E2E_DESTINATION.STATUS;
      if (e.isBroadcast())
        return o("WAWebWamEnumE2eDestination").E2E_DESTINATION.LIST;
      if (e.isNewsletter())
        return o("WAWebWamEnumE2eDestination").E2E_DESTINATION.CHANNEL;
    }
    l.getMetricE2eDestination = e;
  },
  98,
);
