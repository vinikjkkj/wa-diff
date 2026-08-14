__d(
  "WASmaxOutStatusPublishPostBroadcastStatusRequest",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishAnonPaddingMixin",
    "WASmaxOutStatusPublishDeviceIdentityMixin",
    "WASmaxOutStatusPublishStatusBroadcastPublishTypeMixins",
    "WASmaxOutStatusPublishStatusContentTypeMediaFanoutMixin",
    "WASmaxOutStatusPublishStatusEncContentTypeMixin",
    "WASmaxOutStatusPublishStatusEncContentTypeMixins",
    "WASmaxOutStatusPublishStatusEncHashMetaAttributeMixin",
    "WASmaxOutStatusPublishStatusEncMentionMessageMixin",
    "WASmaxOutStatusPublishStatusEncMentionedUsersMixin",
    "WASmaxOutStatusPublishStatusEncMessageAssociationTypeMixin",
    "WASmaxOutStatusPublishStatusEncSessionScopeMixin",
    "WASmaxOutStatusPublishStatusEncSettingMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.statusId,
        r = e.statusT,
        a = e.deviceIdentityMixinArgs,
        i = e.statusEncSettingMixinArgs,
        l = e.statusEncHashMetaAttributeMixinArgs,
        s = e.statusContentTypeMediaFanoutMixinArgs,
        u = e.statusEncMentionedUsersMixinArgs,
        c = e.hasStatusEncMentionMessage,
        d = e.hasStatusEncSessionScope,
        m = e.statusEncContentTypeMixinArgs,
        p = e.anonPaddingMixinArgs,
        _ = e.statusEncMessageAssociationTypeMixinArgs,
        f = e.statusBroadcastPublishTypeMixinsArgs,
        g = e.statusEncContentTypeMixinsArgs,
        h = o(
          "WASmaxOutStatusPublishStatusEncContentTypeMixins",
        ).mergeStatusEncContentTypeMixins(
          o(
            "WASmaxOutStatusPublishStatusBroadcastPublishTypeMixins",
          ).mergeStatusBroadcastPublishTypeMixins(
            (t = o("WASmaxMixins")).optionalMerge(
              o("WASmaxOutStatusPublishStatusEncMessageAssociationTypeMixin")
                .mergeStatusEncMessageAssociationTypeMixin,
              t.optionalMerge(
                o("WASmaxOutStatusPublishAnonPaddingMixin")
                  .mergeAnonPaddingMixin,
                t.optionalMerge(
                  o("WASmaxOutStatusPublishStatusEncContentTypeMixin")
                    .mergeStatusEncContentTypeMixin,
                  t.optionalMerge(
                    o("WASmaxOutStatusPublishStatusEncSessionScopeMixin")
                      .mergeStatusEncSessionScopeMixin,
                    t.optionalMerge(
                      o("WASmaxOutStatusPublishStatusEncMentionMessageMixin")
                        .mergeStatusEncMentionMessageMixin,
                      t.optionalMerge(
                        o("WASmaxOutStatusPublishStatusEncMentionedUsersMixin")
                          .mergeStatusEncMentionedUsersMixin,
                        t.optionalMerge(
                          o(
                            "WASmaxOutStatusPublishStatusContentTypeMediaFanoutMixin",
                          ).mergeStatusContentTypeMediaFanoutMixin,
                          t.optionalMerge(
                            o(
                              "WASmaxOutStatusPublishStatusEncHashMetaAttributeMixin",
                            ).mergeStatusEncHashMetaAttributeMixin,
                            t.optionalMerge(
                              o("WASmaxOutStatusPublishStatusEncSettingMixin")
                                .mergeStatusEncSettingMixin,
                              t.optionalMerge(
                                o("WASmaxOutStatusPublishDeviceIdentityMixin")
                                  .mergeDeviceIdentityMixin,
                                o("WASmaxJsx").smax("status", {
                                  id: o("WAWap").STANZA_ID(n),
                                  to: o("WAWap").STATUS_BROADCAST,
                                  t: o("WASmaxAttrs").OPTIONAL(
                                    o("WAWap").INT,
                                    r,
                                  ),
                                }),
                                a,
                              ),
                              i,
                            ),
                            l,
                          ),
                          s,
                        ),
                        u,
                      ),
                      c,
                    ),
                    d,
                  ),
                  m,
                ),
                p,
              ),
              _,
            ),
            f,
          ),
          g,
        );
      return h;
    }
    l.makePostBroadcastStatusRequest = e;
  },
  98,
);
