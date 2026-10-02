__d(
  "WASmaxOutReceiptUserMixins",
  [
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxOutReceiptBroadcastUserMixin",
    "WASmaxOutReceiptGroupUserMixin",
    "WASmaxOutReceiptIndividualUserMixin",
    "WASmaxOutReceiptStatusUserMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (t.groupUser)
        return o("WASmaxOutReceiptGroupUserMixin").mergeGroupUserMixin(
          e,
          t.groupUser,
        );
      if (t.individualUser)
        return o(
          "WASmaxOutReceiptIndividualUserMixin",
        ).mergeIndividualUserMixin(e, t.individualUser);
      if (t.statusUser)
        return o("WASmaxOutReceiptStatusUserMixin").mergeStatusUserMixin(
          e,
          t.statusUser,
        );
      if (t.broadcastUser)
        return o("WASmaxOutReceiptBroadcastUserMixin").mergeBroadcastUserMixin(
          e,
          t.broadcastUser,
        );
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    l.mergeUserMixins = e;
  },
  98,
);
