__d(
  "getMessageMarketingTopIncompatibleSettingData",
  [
    "fbt",
    "AdsInterfacesLogger",
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "getMessageMarketingTopIncompatibleSettingField",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (t) {
        var e;
        switch (t) {
          case "objective":
            return s._(/*BTDS*/ "");
          case "promotedObjectType":
            return s._(/*BTDS*/ "");
          case "optimizationGoal":
            return r("gkx")("3260") ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
          case "dynamicCreative":
            return s._(/*BTDS*/ "");
          case "specialAdCategories":
            return s._(/*BTDS*/ "");
          default:
            return (
              r("AdsInterfacesLogger").log({
                eventName: "message_marketing_unexpected_incompatible_setting",
                data:
                  ((e = {}),
                  (e.subsequent_data = JSON.stringify({
                    incompatibleSettingField: t,
                    channel: "whatsapp",
                  })),
                  e),
              }),
              ""
            );
        }
      },
      u = function (t) {
        var e;
        switch (t) {
          case "objective":
            return s._(/*BTDS*/ "");
          case "promotedObjectType":
            return s._(/*BTDS*/ "");
          case "optimizationGoal":
            return s._(/*BTDS*/ "");
          case "dynamicCreative":
            return s._(/*BTDS*/ "");
          case "specialAdCategories":
            return s._(/*BTDS*/ "");
          case "hasProductCatalog":
            return s._(/*BTDS*/ "");
          default:
            return (
              r("AdsInterfacesLogger").log({
                eventName: "message_marketing_unexpected_incompatible_setting",
                data:
                  ((e = {}),
                  (e.subsequent_data = JSON.stringify({
                    incompatibleSettingField: t,
                    channel: "messenger",
                  })),
                  e),
              }),
              ""
            );
        }
      },
      c = function (n, r) {
        var t = o(
          "getMessageMarketingTopIncompatibleSettingField",
        ).getMessageMarketingTopIncompatibleSettingField(n, r);
        if (t == null) return null;
        var a =
          r ===
          o("AdsMessageMarketingCompatibleSettingsPluginType")
            .AdsMessageMarketingCompatibleSettingsChannelType.WHATSAPP
            ? e(t)
            : u(t);
        return { field: t, message: a };
      };
    l.getMessageMarketingTopIncompatibleSettingData = c;
  },
  226,
);
