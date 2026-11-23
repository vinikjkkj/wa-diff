__d(
  "WAWebAssociationRevokeUtils",
  [
    "WAWebAssociationRevokePolicy",
    "WAWebAssociationRevokePolicyRegistry",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.associationType,
        n = e.incomingViewMode,
        r = e.msgType,
        a = o(
          "WAWebAssociationRevokePolicyRegistry",
        ).associationRevokePolicies.find(function (e) {
          return e.parentType === r;
        });
      if (
        (a == null ? void 0 : a.getTombstone()) ===
        o("WAWebAssociationRevokePolicy").ParentRevokePolicy.HideTombstone
      )
        return o("WAWebViewMode.flow").ViewModeType.HIDDEN;
      var i = o(
        "WAWebAssociationRevokePolicyRegistry",
      ).associationRevokePolicies.find(function (e) {
        return e.associationType === t;
      });
      return (i == null ? void 0 : i.getTombstone()) ===
        o("WAWebAssociationRevokePolicy").ParentRevokePolicy.HideTombstone
        ? n === o("WAWebViewMode.flow").ViewModeType.HIDDEN ||
          n === o("WAWebViewMode.flow").ViewModeType.NEWSLETTER_TOMBSTONE
          ? n
          : o("WAWebViewMode.flow").ViewModeType.VISIBLE
        : n;
    }
    l.getRevokedViewModeForAssociation = e;
  },
  98,
);
