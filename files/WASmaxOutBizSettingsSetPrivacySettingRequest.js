__d(
  "WASmaxOutBizSettingsSetPrivacySettingRequest",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBizSettingsBaseIQSetRequestMixin",
    "WASmaxOutBizSettingsSmbDataSharingSettingMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.smbDataSharingSettingMixinArgs,
        n = o(
          "WASmaxOutBizSettingsBaseIQSetRequestMixin",
        ).mergeBaseIQSetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            {
              xmlns: "w:biz",
              to: o("WAWap").S_WHATSAPP_NET,
              smax_id: o("WAWap").INT(110),
            },
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutBizSettingsSmbDataSharingSettingMixin")
                .mergeSmbDataSharingSettingMixin,
              o("WASmaxJsx").smax("privacy", null),
              t,
            ),
          ),
        );
      return n;
    }
    l.makeSetPrivacySettingRequest = e;
  },
  98,
);
