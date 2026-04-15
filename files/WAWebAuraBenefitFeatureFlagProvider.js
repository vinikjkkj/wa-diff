__d(
  "WAWebAuraBenefitFeatureFlagProvider",
  ["WAWebAuraBenefitTypes", "WAWebFeatureFlagName", "WAWebPinChatLimits"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.benefit = function (t) {
          return t === o("WAWebAuraBenefitTypes").AuraBenefitId.APP_THEMES
            ? this.$2(
                t,
                o("WAWebFeatureFlagName").FeatureFlagName.CUSTOM_APP_THEME,
              )
            : t === o("WAWebAuraBenefitTypes").AuraBenefitId.APP_ICONS
              ? this.$2(
                  t,
                  o("WAWebFeatureFlagName").FeatureFlagName.CUSTOM_APP_ICON,
                )
              : t === o("WAWebAuraBenefitTypes").AuraBenefitId.RINGTONES
                ? this.$2(
                    t,
                    o("WAWebFeatureFlagName").FeatureFlagName.CUSTOM_RINGTONES,
                  )
                : t === o("WAWebAuraBenefitTypes").AuraBenefitId.STICKERS
                  ? this.$2(
                      t,
                      o("WAWebFeatureFlagName").FeatureFlagName
                        .PREMIUM_MESSAGE_STICKERS,
                    )
                  : t === o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS
                    ? this.$2(
                        t,
                        o("WAWebFeatureFlagName").FeatureFlagName
                          .PIN_MORE_CHATS,
                      )
                    : t === o("WAWebAuraBenefitTypes").AuraBenefitId.LISTS
                      ? this.$2(
                          t,
                          o("WAWebFeatureFlagName").FeatureFlagName
                            .ENHANCED_LISTS,
                        )
                      : t ===
                          o("WAWebAuraBenefitTypes").AuraBenefitId.STATUS_SEARCH
                        ? {
                            id: o("WAWebAuraBenefitTypes").AuraBenefitId
                              .STATUS_SEARCH,
                            isActive: !0,
                            limit: null,
                          }
                        : (function () {
                            throw Error(
                              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                t,
                            );
                          })();
        }),
        (t.$2 = function (t, n) {
          var e = this.$1(n);
          if (e == null) return null;
          var r = e.enabled === !0;
          return { id: t, isActive: r, limit: this.$3(t, r) };
        }),
        (t.$3 = function (t, n) {
          return t === o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS
            ? n
              ? o("WAWebPinChatLimits").MAX_PINNED_CHATS_PREMIUM
              : o("WAWebPinChatLimits").MAX_PINNED_CHATS
            : null;
        }),
        e
      );
    })();
    l.AuraBenefitFeatureFlagProvider = e;
  },
  98,
);
