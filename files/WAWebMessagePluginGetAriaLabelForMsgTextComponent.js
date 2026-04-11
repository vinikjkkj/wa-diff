__d(
  "WAWebMessagePluginGetAriaLabelForMsgTextComponent",
  [
    "WAWebMessagePluginGetAriaLabelForMsgTextComponentRegistry",
    "WAWebPluginCreateRegistryLookup",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(
      r("WAWebMessagePluginGetAriaLabelForMsgTextComponentRegistry"),
    );
    function s(t) {
      var n = t.subtype,
        r = t.type,
        o = e(r, n);
      return o == null || o.getAriaLabelForMsgTextComponent == null
        ? null
        : o.getAriaLabelForMsgTextComponent(t);
    }
    l.getAriaLabelForMsgTextComponent = s;
  },
  98,
);
