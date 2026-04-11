__d(
  "WAWebAuraGating",
  [
    "WAWebABProps",
    "WAWebAuraBenefitABPropsProvider",
    "WAWebAuraBenefitFeatureFlagProvider",
    "WAWebAuraBenefitTypes",
    "WAWebMobilePlatforms",
    "WAWebStickerPremiumStatus",
    "gkx",
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
          (t.isEnabled = function () {
            return o("WAWebMobilePlatforms").isSMB() ? !1 : r("gkx")("20621");
          }),
          (t.$3 = function (t) {
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
          (t.benefit = function (t) {
            if (!this.isEnabled() || !this.$3(t)) return null;
            var e =
              !o("WAWebABProps").getABPropConfigValue(
                "aura_subscription_simulation_enabled",
              ) && this.$2 != null
                ? this.$2
                : this.$1;
            return e.benefit(t);
          }),
          (t.isThemesEnabled = function () {
            return (
              this.benefit(
                o("WAWebAuraBenefitTypes").AuraBenefitId.APP_THEMES,
              ) != null
            );
          }),
          (t.isThemesBenefitActive = function () {
            var e;
            return (
              ((e = this.benefit(
                o("WAWebAuraBenefitTypes").AuraBenefitId.APP_THEMES,
              )) == null
                ? void 0
                : e.isActive) === !0
            );
          }),
          (t.isIconsEnabled = function () {
            return (
              this.benefit(
                o("WAWebAuraBenefitTypes").AuraBenefitId.APP_ICONS,
              ) != null
            );
          }),
          (t.isIconsBenefitActive = function () {
            var e;
            return (
              ((e = this.benefit(
                o("WAWebAuraBenefitTypes").AuraBenefitId.APP_ICONS,
              )) == null
                ? void 0
                : e.isActive) === !0
            );
          }),
          (t.isRingtonesEnabled = function () {
            return (
              this.benefit(
                o("WAWebAuraBenefitTypes").AuraBenefitId.RINGTONES,
              ) != null
            );
          }),
          (t.isRingtonesBenefitActive = function () {
            var e;
            return (
              ((e = this.benefit(
                o("WAWebAuraBenefitTypes").AuraBenefitId.RINGTONES,
              )) == null
                ? void 0
                : e.isActive) === !0
            );
          }),
          (t.isStickersEnabled = function () {
            return (
              this.benefit(o("WAWebAuraBenefitTypes").AuraBenefitId.STICKERS) !=
              null
            );
          }),
          (t.isStickersBenefitActive = function () {
            var e;
            return (
              ((e = this.benefit(
                o("WAWebAuraBenefitTypes").AuraBenefitId.STICKERS,
              )) == null
                ? void 0
                : e.isActive) === !0
            );
          }),
          (t.isPinnedChatsEnabled = function () {
            return (
              this.benefit(
                o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS,
              ) != null
            );
          }),
          (t.isPinnedChatsBenefitActive = function () {
            var e;
            return (
              ((e = this.benefit(
                o("WAWebAuraBenefitTypes").AuraBenefitId.PINNED_CHATS,
              )) == null
                ? void 0
                : e.isActive) === !0
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
            return (
              this.benefit(o("WAWebAuraBenefitTypes").AuraBenefitId.LISTS) !=
              null
            );
          }),
          (t.isListsBenefitActive = function () {
            var e;
            return (
              ((e = this.benefit(
                o("WAWebAuraBenefitTypes").AuraBenefitId.LISTS,
              )) == null
                ? void 0
                : e.isActive) === !0
            );
          }),
          (t.isStatusSearchEnabled = function () {
            return (
              this.benefit(
                o("WAWebAuraBenefitTypes").AuraBenefitId.STATUS_SEARCH,
              ) != null
            );
          }),
          (t.isStatusSearchBenefitActive = function () {
            var e;
            return (
              ((e = this.benefit(
                o("WAWebAuraBenefitTypes").AuraBenefitId.STATUS_SEARCH,
              )) == null
                ? void 0
                : e.isActive) === !0
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
