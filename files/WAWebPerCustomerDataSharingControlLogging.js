__d(
  "WAWebPerCustomerDataSharingControlLogging",
  ["WAWebSmbPerCustomerDataSharingControlWamEvent"],
  function (t, n, r, o, a, i, l) {
    var e = 1;
    function s(t) {
      var n = new (o(
        "WAWebSmbPerCustomerDataSharingControlWamEvent",
      ).SmbPerCustomerDataSharingControlWamEvent)();
      ((n.smbPerCustomerDataSharingControlAction = t.action),
        t.actionOptInStatus != null &&
          (n.smbPerCustomerDataSharingControlActionOptInStatus =
            t.actionOptInStatus),
        t.currentOptInStatus != null &&
          (n.smbPerCustomerDataSharingControlCurrentOptInStatus =
            t.currentOptInStatus),
        t.entryPoint != null &&
          (n.smbPerCustomerDataSharingControlEntryPoint = t.entryPoint),
        t.globalDataSharingEntryPoint != null &&
          (n.smbPerCustomerDataSharingControlGlobalDataSharingEntryPoint =
            t.globalDataSharingEntryPoint),
        (n.smbPerCustomerDataSharingControlVersion = e),
        n.commit());
    }
    l.logPerCustomerDataSharingControlEvent = s;
  },
  98,
);
