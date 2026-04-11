__d(
  "WASmaxOutBizSettingsSmbDataSharingSettingMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBizSettingsSmbDataSharingSettingValueMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxJsx").smax(
        "privacy",
        null,
        o(
          "WASmaxOutBizSettingsSmbDataSharingSettingValueMixin",
        ).mergeSmbDataSharingSettingValueMixin(
          o("WASmaxJsx").smax("smb_data_sharing_with_meta_consent", null),
          e,
        ),
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeSmbDataSharingSettingMixin = s;
  },
  98,
);
