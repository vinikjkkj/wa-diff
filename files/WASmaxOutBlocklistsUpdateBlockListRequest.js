__d(
  "WASmaxOutBlocklistsUpdateBlockListRequest",
  [
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBlocklistsUpdateBlockListBlockOrUpdateBlockListUnblockItemMixinGroup",
    "WASmaxOutBlocklistsUpdateBlockListReportBlockEntryPointMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r = e.bizOptOutReason,
        a = e.bizOptOutReasonDescription,
        i = e.bizOptOutEntryPoint,
        l = e.bizOptOutFirstMessage,
        s = e.bizOptOutBusinessDiscoveryEntryPoint,
        u = e.bizOptOutBusinessDiscoveryTimestamp,
        c = e.bizOptOutBusinessDiscoveryId,
        d = o("WASmaxJsx").smax("biz_opt_out", {
          reason: (t = o("WASmaxAttrs")).OPTIONAL(
            (n = o("WAWap")).CUSTOM_STRING,
            r,
          ),
          reason_description: t.OPTIONAL(n.CUSTOM_STRING, a),
          entry_point: t.OPTIONAL(n.CUSTOM_STRING, i),
          first_message: t.OPTIONAL(n.CUSTOM_STRING, l),
          business_discovery_entry_point: t.OPTIONAL(n.CUSTOM_STRING, s),
          business_discovery_timestamp: t.OPTIONAL(n.INT, u),
          business_discovery_id: t.OPTIONAL(n.CUSTOM_STRING, c),
        });
      return d;
    }
    function s(t) {
      var n = t.bizOptOutArgs,
        r = t.updateBlockListReportBlockEntryPointMixinArgs,
        a = t.itemDhash,
        i = t.updateBlockListBlockOrUpdateBlockListUnblockItemMixinGroupArgs,
        l = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutBlocklistsUpdateBlockListReportBlockEntryPointMixin")
            .mergeUpdateBlockListReportBlockEntryPointMixin,
          o("WASmaxJsx").smax(
            "iq",
            {
              to: o("WAWap").S_WHATSAPP_NET,
              xmlns: "blocklist",
              type: "set",
              id: o("WAWap").generateId(),
            },
            o(
              "WASmaxOutBlocklistsUpdateBlockListBlockOrUpdateBlockListUnblockItemMixinGroup",
            ).mergeUpdateBlockListBlockOrUpdateBlockListUnblockItemMixinGroup(
              o("WASmaxJsx").smax(
                "item",
                {
                  dhash: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, a),
                },
                o("WASmaxChildren").OPTIONAL_CHILD(e, n),
              ),
              i,
            ),
          ),
          r,
        );
      return l;
    }
    ((l.makeUpdateBlockListRequestItemBizOptOut = e),
      (l.makeUpdateBlockListRequest = s));
  },
  98,
);
