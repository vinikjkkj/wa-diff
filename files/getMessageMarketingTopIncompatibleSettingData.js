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
            return s._(
              /*BTDS*/ "Marketing messages is not available for the campaign objective you selected. To use marketing messages in your campaign, select either Traffic, Sales or Leads campaign objectives.",
            );
          case "promotedObjectType":
            return s._(
              /*BTDS*/ "Marketing messages is not available for the conversion location you selected.",
            );
          case "optimizationGoal":
            return r("gkx")("3260")
              ? s._(
                  /*BTDS*/ "Marketing messages are not available with your performance goal. To include marketing messages in your campaign, select link clicks, landing page views, number of conversions, or value of conversions.",
                )
              : s._(
                  /*BTDS*/ "Marketing messages are not available with your performance goal. To include marketing messages in your campaign, select link clicks, number of conversions, or value of conversions.",
                );
          case "dynamicCreative":
            return s._(
              /*BTDS*/ "Marketing messages are not available when dynamic creative is turned on. To include marketing messages in your campaign, turn off dynamic creative.",
            );
          case "specialAdCategories":
            return s._(
              /*BTDS*/ "Marketing messages are not available when a Special Ad Category is selected.",
            );
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
            return s._(
              /*BTDS*/ "Marketing messages is not available for the campaign objective you selected. To use marketing messages in your campaign, select the Sales campaign objective.",
            );
          case "promotedObjectType":
            return s._(
              /*BTDS*/ "Marketing messages is not available with your selected conversion event. If you\u2019d like to include marketing messages in your campaign, select Website as your conversion event.",
            );
          case "optimizationGoal":
            return s._(
              /*BTDS*/ "Marketing messages is not available with your selected performance goal. If you\u2019d like to include marketing messages in your campaign, select number of conversions as your performance goal.",
            );
          case "dynamicCreative":
            return s._(
              /*BTDS*/ "Marketing messages are not available when dynamic creative is turned on. If you\u2019d like to include marketing messages in your campaign, turn off dynamic creative.",
            );
          case "specialAdCategories":
            return s._(
              /*BTDS*/ "Messenger marketing messages are not available when a Special Ad Category is selected.",
            );
          case "hasProductCatalog":
            return s._(
              /*BTDS*/ "Marketing messages are not available when Advantage+ catalog ads is turned on. If you'd like to include marketing messages in your campaign, turn off Advantage+ catalog ads.",
            );
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
