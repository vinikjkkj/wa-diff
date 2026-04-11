__d(
  "WAWebSystemMessagePluginFormatMsgText",
  [
    "WAWebPluginCreateRegistryLookup",
    "WAWebSystemMessagePluginFormatMsgTextRegistry",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(
      r("WAWebSystemMessagePluginFormatMsgTextRegistry"),
    );
    function s(t) {
      var n,
        r = t.msg;
      return (n = e(r.type, r.subtype)) == null || n.formatMsgText == null
        ? void 0
        : n.formatMsgText(t);
    }
    l.formatMsgText = s;
  },
  98,
);
