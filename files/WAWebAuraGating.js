__d(
  "WAWebAuraGating",
  [
    "WAWebABProps",
    "WAWebAuraBenefitABPropsProvider",
    "WAWebAuraBenefitFeatureFlagProvider",
    "WAWebAuraBenefitTypes",
    "WAWebMobilePlatforms",
    "WAWebStickerPremiumStatus",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = new (o(
            "WAWebAuraBenefitABPropsProvider",
          ).AuraBenefitABPropsProvider)()),
            (this.$2 = null));
        }
        var t = e.prototype;
        return (
          (t.initFeatureFlagProvider = function (t) {
            this.$2 = new (o(
              "WAWebAuraBenefitFeatureFlagProvider",
            ).AuraBenefitFeatureFlagProvider)(t);
          }),
          (t.__resetForTesting = function () {
            this.$2 = null;
          }),
          (t.$3 = function () {
            return o("WAWebMobilePlatforms").isSMB()
              ? !0
              : !!o("WAWebABProps").getABPropConfigValue("aura_kill_switch");
          }),
          (t.$4 = function () {
            return this.$3()
              ? !1
              : !!o("WAWebABProps").getABPropConfigValue("aura_enabled");
          }),
          (t.$5 = function (t) {
            return !!(t === o("WAWebAuraBenefitTypes").AuraBenefitId.APP_THEMES
              ? o("WAWebABProps").getABPropConfigValue(
                  "aura_app_themes_enabled",
                )
              : t !== o("WAWebAuraBenefitTypes").AuraBenefitId.APP_ICONS &&
                (t === o("WAWebAuraBenefitTypes").AuraBenefitId.RINGTONES
                  ? o("WAWebABProps").getABPropConfigValue(
                      "aura_ringtones_enabled",
                    )
                  : t === o("WAWebAuraBenefitTypes").AuraBenefitId.STICKERS
                    ? o("WAWebABProps").getABPropConfigValue(
                        "aura_stickers_enabled",
                      )
                    : t ===
                        o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS
                      ? o("WAWebABProps").getABPropConfigValue(
                          "aura_pinned_chats_enabled",
                        )
                      : t !== o("WAWebAuraBenefitTypes").AuraBenefitId.LISTS &&
                        (t ===
                        o("WAWebAuraBenefitTypes").AuraBenefitId.STATUS_SEARCH
                          ? o("WAWebABProps").getABPropConfigValue(
                              "aura_status_search_enabled",
                            )
                          : (function () {
                              throw Error(
                                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                                  t,
                              );
                            })())));
          }),
          (t.$6 = function () {
            return !o("WAWebABProps").getABPropConfigValue(
              "aura_subscription_simulation_enabled",
            ) && this.$2 != null
              ? this.$2
              : this.$1;
          }),
          (t.$7 = function (t) {
            var e;
            return this.$3()
              ? !1
              : ((e = this.$6().benefit(t)) == null ? void 0 : e.isActive) ===
                  !0;
          }),
          (t.benefit = function (t) {
            return !this.$4() || !this.$5(t) ? null : this.$6().benefit(t);
          }),
          (t.isThemesEnabled = function () {
            return this.benefit(
              o("WAWebAuraBenefitTypes").AuraBenefitId.APP_THEMES,
            ) != null
              ? !0
              : this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.APP_THEMES);
          }),
          (t.isThemesBenefitActive = function () {
            return this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.APP_THEMES);
          }),
          (t.isIconsEnabled = function () {
            return this.benefit(
              o("WAWebAuraBenefitTypes").AuraBenefitId.APP_ICONS,
            ) != null
              ? !0
              : this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.APP_ICONS);
          }),
          (t.isIconsBenefitActive = function () {
            return this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.APP_ICONS);
          }),
          (t.isRingtonesEnabled = function () {
            return this.benefit(
              o("WAWebAuraBenefitTypes").AuraBenefitId.RINGTONES,
            ) != null
              ? !0
              : this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.RINGTONES);
          }),
          (t.isRingtonesBenefitActive = function () {
            return this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.RINGTONES);
          }),
          (t.isStickersEnabled = function () {
            return this.benefit(
              o("WAWebAuraBenefitTypes").AuraBenefitId.STICKERS,
            ) != null
              ? !0
              : this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.STICKERS);
          }),
          (t.isStickersBenefitActive = function () {
            return this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.STICKERS);
          }),
          (t.isPinnedChatsEnabled = function () {
            return this.benefit(
              o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS,
            ) != null
              ? !0
              : this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS);
          }),
          (t.isPinnedChatsBenefitActive = function () {
            return this.$7(
              o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS,
            );
          }),
          (t.getPinnedChatsBenefitLimit = function () {
            var e;
            return (e = this.benefit(
              o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS,
            )) == null
              ? void 0
              : e.limit;
          }),
          (t.isListsEnabled = function () {
            return this.benefit(
              o("WAWebAuraBenefitTypes").AuraBenefitId.LISTS,
            ) != null
              ? !0
              : this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.LISTS);
          }),
          (t.isListsBenefitActive = function () {
            return this.$7(o("WAWebAuraBenefitTypes").AuraBenefitId.LISTS);
          }),
          (t.isStatusSearchEnabled = function () {
            return (
              this.benefit(
                o("WAWebAuraBenefitTypes").AuraBenefitId.STATUS_SEARCH,
              ) != null
            );
          }),
          (t.isStatusSearchBenefitActive = function () {
            return this.$7(
              o("WAWebAuraBenefitTypes").AuraBenefitId.STATUS_SEARCH,
            );
          }),
          (t.canUsePremiumSticker = function (t) {
            return t == null ||
              t === o("WAWebStickerPremiumStatus").StickerPremiumStatus.NONE
              ? !0
              : t ===
                  o("WAWebStickerPremiumStatus").StickerPremiumStatus.PREMIUM
                ? this.isStickersBenefitActive()
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
