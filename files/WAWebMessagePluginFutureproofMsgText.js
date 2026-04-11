__d(
  "WAWebMessagePluginFutureproofMsgText",
  [
    "WAWebMessagePluginFutureproofMsgTextRegistry",
    "WAWebPluginCreateRegistryLookup",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(
      r("WAWebMessagePluginFutureproofMsgTextRegistry"),
    );
    function s(t) {
      var n,
        r = t.msg;
      return (n = e(r.futureproofType, r.futureproofSubtype)) == null ||
        n.futureproofMsgText == null
        ? void 0
        : n.futureproofMsgText(t);
    }
    l.futureproofMsgText = s;
  },
  98,
);
