__d(
  "WAWebMessagePluginGenerateProtobuf",
  [
    "WAWebMessagePluginGenerateProtobufRegistry",
    "WAWebPluginCreateRegistryLookup",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(
      r("WAWebMessagePluginGenerateProtobufRegistry"),
    );
    function s(t) {
      var n,
        r = t.json;
      return (n = e(r.type, r.subtype)) == null || n.generateProtobuf == null
        ? void 0
        : n.generateProtobuf(t);
    }
    l.generateProtobuf = s;
  },
  98,
);
