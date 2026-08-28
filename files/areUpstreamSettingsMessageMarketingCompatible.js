__d(
  "areUpstreamSettingsMessageMarketingCompatible",
  [
    "MessageMarketingUpstreamSettings",
    "findMessageMarketingIncompatibleSettingFields",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
        if (t == null) return !1;
        var e = o("MessageMarketingUpstreamSettings").getCompatibleSettings(
            t,
            n,
          ),
          r = o(
            "findMessageMarketingIncompatibleSettingFields",
          ).findMessageMarketingIncompatibleSettingFields(t, n, e);
        return r.length === 0;
      },
      s = function (t, n) {
        var e = o(
            "MessageMarketingUpstreamSettings",
          ).getCompatibleSettingsForPrimaryFields(t, n),
          r = o(
            "findMessageMarketingIncompatibleSettingFields",
          ).findMessageMarketingIncompatibleSettingFields(t, n, e);
        return r.length === 0;
      };
    ((l.areUpstreamSettingsMessageMarketingCompatible = e),
      (l.areUpstreamSettingsPartiallyCompatibleWithMessageMarketing = s));
  },
  98,
);
