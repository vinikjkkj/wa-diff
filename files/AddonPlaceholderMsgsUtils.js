__d(
  "AddonPlaceholderMsgsUtils",
  [
    "WAWebAddonConstants",
    "WAWebAddonDBTable",
    "WAWebAddonInfraError",
    "WAWebMsgType",
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
    async function s(e, t) {
      var n = await o("WAWebAddonDBTable").addonInternalDBTable.bulkGetByMsgKey(
          e,
          t,
        ),
        r = new Set();
      for (var a of n)
        a != null &&
          a.kind === o("WAWebMsgType").MsgKind.PlaceholderAddon &&
          r.add(a.id.toString());
      return r;
    }
    ((l.getIncomingPlaceholderKeys = e), (l.getPlaceholderMsgKeys = s));
  },
  98,
);
