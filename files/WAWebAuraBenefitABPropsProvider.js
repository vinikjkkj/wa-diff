__d(
  "WAWebAuraBenefitABPropsProvider",
  ["WAWebABProps", "WAWebAuraBenefitTypes", "WAWebPinChatLimits"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {}
      var t = e.prototype;
      return (
        (t.benefit = function (t) {
          var e =
              t === o("WAWebAuraBenefitTypes").AuraBenefitId.APP_THEMES
                ? o("WAWebABProps").getABPropConfigValue(
                    "aura_app_themes_benefit_active",
                  )
                : t === o("WAWebAuraBenefitTypes").AuraBenefitId.APP_ICONS
                  ? !1
                  : t === o("WAWebAuraBenefitTypes").AuraBenefitId.RINGTONES
                    ? o("WAWebABProps").getABPropConfigValue(
                        "aura_ringtones_benefit_active",
                      )
                    : t === o("WAWebAuraBenefitTypes").AuraBenefitId.STICKERS
                      ? o("WAWebABProps").getABPropConfigValue(
                          "aura_stickers_benefit_active",
                        )
                      : t ===
                          o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS
                        ? o("WAWebABProps").getABPropConfigValue(
                            "aura_pinned_chats_benefit_active",
                          )
                        : t === o("WAWebAuraBenefitTypes").AuraBenefitId.LISTS
                          ? !1
                          : t ===
                              o("WAWebAuraBenefitTypes").AuraBenefitId
                                .STATUS_SEARCH
                            ? !0
                            : (function () {
                                throw Error(
                                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                    t,
                                );
                              })(),
            n =
              t === o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS
                ? e
                  ? o("WAWebPinChatLimits").MAX_PINNED_CHATS_PREMIUM
                  : o("WAWebPinChatLimits").MAX_PINNED_CHATS
                : null;
          return { id: t, isActive: e, limit: n };
        }),
        e
      );
    })();
    l.AuraBenefitABPropsProvider = e;
  },
  98,
);
