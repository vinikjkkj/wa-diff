__d(
  "WASmaxOutBizSettingsGetPrivacySettingRequest",
  ["WASmaxJsx", "WASmaxOutBizSettingsBaseIQGetRequestMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o(
        "WASmaxOutBizSettingsBaseIQGetRequestMixin",
      ).mergeBaseIQGetRequestMixin(
        o("WASmaxJsx").smax(
          "iq",
          {
            xmlns: "w:biz",
            to: o("WAWap").S_WHATSAPP_NET,
            smax_id: o("WAWap").INT(109),
          },
          o("WASmaxJsx").smax("privacy", null),
        ),
      );
      return e;
    }
    l.makeGetPrivacySettingRequest = e;
  },
  98,
);
