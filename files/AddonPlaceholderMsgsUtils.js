__d(
  "AddonPlaceholderMsgsUtils",
  [
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebAddonInfraError",
    "WAWebMsgType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.addons,
        n = e.processor;
      if (
        n.type !==
        o("WAWebAddonConstants").AddonProcessorType
          .DualEncryptedWithMessageTraits
      )
        throw new (o("WAWebAddonInfraError").AddonInfraError)(
          o("WAWebAddonInfraError").AddonInfraErrorCode.NotSupportedFeature,
        );
      var r = [];
      for (var a of t)
        a.kind === o("WAWebMsgType").MsgKind.PlaceholderAddon && r.push(a.id);
      return r.length === 0 ? null : r;
    }
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
              "WAWebAddonDBTable",
            ).addonInternalDBTable.bulkGetByMsgKey(e, t),
            r = new Set();
          for (var a of n)
            a != null &&
              a.kind === o("WAWebMsgType").MsgKind.PlaceholderAddon &&
              r.add(a.id.toString());
          return r;
        })),
        u.apply(this, arguments)
      );
    }
    ((l.getIncomingPlaceholderKeys = e), (l.getPlaceholderMsgKeys = s));
  },
  98,
);
