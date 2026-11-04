__d(
  "WAWebMessagePluginSendsInactiveReceipt",
  [
    "WAWebMessagePluginSendsInactiveReceiptRegistry",
    "WAWebPluginCreateRegistryLookup",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(
      r("WAWebMessagePluginSendsInactiveReceiptRegistry"),
    );
    function s(t, n) {
      return e(t, n) != null;
    }
    l.sendsInactiveReceipt = s;
  },
  98,
);
