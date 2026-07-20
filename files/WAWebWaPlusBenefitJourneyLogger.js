__d(
  "WAWebWaPlusBenefitJourneyLogger",
  [
    "WAWebAuraGating",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWaPlusBenefitUserJourneyWamEvent",
    "WAWebWamEnumWpbujAction",
    "WAWebWamEnumWpbujBenefitStatus",
    "WAWebWamEnumWpbujBenefitType",
    "WAWebWamEnumWpbujOutcomeName",
    "WAWebWamEnumWsuaProductType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
        (e = o("WAWebWamEnumWpbujBenefitType")).WPBUJ_BENEFIT_TYPE.STICKERS,
      ]),
      u = new Map(),
      c = new Map();
    function d(e) {
      var t = u.get(e);
      return (
        t == null && ((t = r("WAWebPonyfillsCryptoRandomUUID")()), u.set(e, t)),
        t
      );
    }
    function m(e) {
      (u.delete(e), c.delete(e));
    }
    function p(e, t) {
      if (!s.has(e)) return !0;
      var n = c.get(e);
      return (
        n == null && ((n = new Set()), c.set(e, n)),
        n.has(t) ? !1 : (n.add(t), !0)
      );
    }
    var _ = (function () {
        function e(e) {
          ((this.$1 = e.benefitType),
            (this.$2 = e.surface),
            (this.$3 = e.source),
            (this.$4 = s.has(e.benefitType)
              ? d(e.benefitType)
              : r("WAWebPonyfillsCryptoRandomUUID")()));
        }
        var t = e.prototype;
        return (
          (t.getSessionId = function () {
            return this.$4;
          }),
          (t.logView = function (t) {
            this.$5(o("WAWebWamEnumWpbujAction").WPBUJ_ACTION.VIEW, t);
          }),
          (t.logSelect = function (t) {
            this.$5(o("WAWebWamEnumWpbujAction").WPBUJ_ACTION.SELECT, t);
          }),
          (t.logApply = function (t) {
            this.$5(o("WAWebWamEnumWpbujAction").WPBUJ_ACTION.APPLY, t);
          }),
          (t.logDownload = function (t) {
            this.$5(o("WAWebWamEnumWpbujAction").WPBUJ_ACTION.DOWNLOAD, t);
          }),
          (t.$5 = function (t, n) {
            var e,
              r = {
                wpbujAction: t,
                wpbujBenefitStatus: g(this.$1),
                wpbujBenefitType: this.$1,
                wpbujOutcomeName: n.success
                  ? o("WAWebWamEnumWpbujOutcomeName").WPBUJ_OUTCOME_NAME.SUCCESS
                  : o("WAWebWamEnumWpbujOutcomeName").WPBUJ_OUTCOME_NAME.FAILED,
                wpbujSessionId: this.$4,
                wpbujSurface: (e = n.surfaceOverride) != null ? e : this.$2,
                wsuaProductType: o("WAWebWamEnumWsuaProductType")
                  .WSUA_PRODUCT_TYPE.WA_PLUS,
              };
            (this.$3 != null && (r.wpbujSource = this.$3),
              n.actionTarget != null && (r.wpbujActionTarget = n.actionTarget),
              n.errorMessage != null && (r.wpbujErrorMessage = n.errorMessage),
              n.customFields != null &&
                (r.wpbujCustomFields = JSON.stringify(n.customFields)),
              new (o(
                "WAWebWaPlusBenefitUserJourneyWamEvent",
              ).WaPlusBenefitUserJourneyWamEvent)(r).commit());
          }),
          e
        );
      })(),
      f = new Map([
        [
          e.WPBUJ_BENEFIT_TYPE.STICKERS,
          {
            isActive: function () {
              return r("WAWebAuraGating").isStickersBenefitActive();
            },
            isEnabled: function () {
              return r("WAWebAuraGating").isStickersEnabled();
            },
          },
        ],
        [
          e.WPBUJ_BENEFIT_TYPE.PINNED_CHATS,
          {
            isActive: function () {
              return r("WAWebAuraGating").isPinnedChatsBenefitActive();
            },
            isEnabled: function () {
              return r("WAWebAuraGating").isPinnedChatsEnabled();
            },
          },
        ],
        [
          e.WPBUJ_BENEFIT_TYPE.RINGTONES,
          {
            isActive: function () {
              return r("WAWebAuraGating").isRingtonesBenefitActive();
            },
            isEnabled: function () {
              return r("WAWebAuraGating").isRingtonesEnabled();
            },
          },
        ],
      ]);
    function g(e) {
      var t = f.get(e);
      return t == null
        ? o("WAWebWamEnumWpbujBenefitStatus").WPBUJ_BENEFIT_STATUS.DISABLED
        : h(t.isActive(), t.isEnabled());
    }
    function h(e, t) {
      return e
        ? o("WAWebWamEnumWpbujBenefitStatus").WPBUJ_BENEFIT_STATUS.ACTIVE
        : t
          ? o("WAWebWamEnumWpbujBenefitStatus").WPBUJ_BENEFIT_STATUS.NOT_ACTIVE
          : o("WAWebWamEnumWpbujBenefitStatus").WPBUJ_BENEFIT_STATUS.DISABLED;
    }
    ((l.clearSharedSessionId = m),
      (l.shouldLogTargetOnceForBenefit = p),
      (l.WaPlusBenefitJourneyLogger = _),
      (l.resolveBenefitStatus = g));
  },
  98,
);
