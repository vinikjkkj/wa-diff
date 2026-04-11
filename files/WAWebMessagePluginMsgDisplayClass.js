__d(
  "WAWebMessagePluginMsgDisplayClass",
  [
    "WAWebMessagePluginMsgDisplayClassRegistry",
    "WAWebPluginCreateRegistryLookup",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(
      r("WAWebMessagePluginMsgDisplayClassRegistry"),
    );
    function s(t) {
      var n = t.msg,
        r = e(n.type, n.subtype);
      return r == null || r.msgDisplayClass == null
        ? void 0
        : r.msgDisplayClass(t);
    }
    l.msgDisplayClass = s;
  },
  98,
);
