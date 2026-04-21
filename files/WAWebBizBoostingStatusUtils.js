__d(
  "WAWebBizBoostingStatusUtils",
  [
    "fbt",
    "WAWebCommonAdsTypes",
    "WDSIconIcCheckCircleFilled.react",
    "WDSIconIcErrorFilled.react",
    "WDSIconIcLightbulbFilled.react",
    "WDSIconIcPauseCircleFilled.react",
    "WDSIconIcPlayArrowFilled.react",
    "WDSIconIcSchedule.react",
    "WDSIconIcScheduleFilled.react",
    "WDSIconIcWarning.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      switch (e) {
        case o("WAWebCommonAdsTypes").BoostingStatus.ACTIVE:
          return {
            Icon: r("WDSIconIcCheckCircleFilled.react"),
            colorName: "secondaryPositive",
          };
        case o("WAWebCommonAdsTypes").BoostingStatus.PENDING:
          return {
            Icon: r("WDSIconIcScheduleFilled.react"),
            colorName: "contentDeemphasized",
          };
        case o("WAWebCommonAdsTypes").BoostingStatus.REJECTED:
        case o("WAWebCommonAdsTypes").BoostingStatus.NOT_DELIVERING:
        case o("WAWebCommonAdsTypes").BoostingStatus.PAYMENT_PENDING:
        case o("WAWebCommonAdsTypes").BoostingStatus.UNABLE_TO_CREATE:
          return {
            Icon: r("WDSIconIcErrorFilled.react"),
            colorName: "secondaryNegative",
          };
        case o("WAWebCommonAdsTypes").BoostingStatus.PAUSED:
        case o("WAWebCommonAdsTypes").BoostingStatus.PAUSING:
          return {
            Icon: r("WDSIconIcPauseCircleFilled.react"),
            colorName: "contentDeemphasized",
          };
        case o("WAWebCommonAdsTypes").BoostingStatus.RESUMING:
          return {
            Icon: r("WDSIconIcPlayArrowFilled.react"),
            colorName: "contentDeemphasized",
          };
        case o("WAWebCommonAdsTypes").BoostingStatus.RECOMMENDATION:
          return {
            Icon: r("WDSIconIcLightbulbFilled.react"),
            colorName: "contentDeemphasized",
          };
        case o("WAWebCommonAdsTypes").BoostingStatus.LIMITED_DELIVERY:
          return {
            Icon: r("WDSIconIcWarning.react"),
            colorName: "secondaryWarning",
          };
        default:
          return null;
      }
    }
    function d(e) {
      switch (e) {
        case o("WAWebCommonAdsTypes").BoostingStatus.PENDING:
          return {
            Icon: r("WDSIconIcScheduleFilled.react"),
            colorName: "contentDeemphasized",
          };
        case o("WAWebCommonAdsTypes").BoostingStatus.ACTIVE:
          return {
            Icon: r("WDSIconIcCheckCircleFilled.react"),
            colorName: "secondaryPositive",
          };
        case o("WAWebCommonAdsTypes").BoostingStatus.SCHEDULED:
          return {
            Icon: r("WDSIconIcSchedule.react"),
            colorName: "secondaryPositive",
          };
        case o("WAWebCommonAdsTypes").BoostingStatus.REJECTED:
        case o("WAWebCommonAdsTypes").BoostingStatus.UNABLE_TO_CREATE:
        case o("WAWebCommonAdsTypes").BoostingStatus.NOT_DELIVERING:
        case o("WAWebCommonAdsTypes").BoostingStatus.PAYMENT_PENDING:
          return {
            Icon: r("WDSIconIcErrorFilled.react"),
            colorName: "secondaryNegative",
          };
        case o("WAWebCommonAdsTypes").BoostingStatus.COMPLETED:
        case o("WAWebCommonAdsTypes").BoostingStatus.EXTENDABLE:
        case o("WAWebCommonAdsTypes").BoostingStatus.FINISHED:
          return {
            Icon: r("WDSIconIcCheckCircleFilled.react"),
            colorName: "contentDeemphasized",
          };
        case o("WAWebCommonAdsTypes").BoostingStatus.PAUSED:
        case o("WAWebCommonAdsTypes").BoostingStatus.PAUSING:
          return {
            Icon: r("WDSIconIcPauseCircleFilled.react"),
            colorName: "contentDeemphasized",
          };
        case o("WAWebCommonAdsTypes").BoostingStatus.RESUMING:
          return {
            Icon: r("WDSIconIcPlayArrowFilled.react"),
            colorName: "contentDeemphasized",
          };
        default:
          return {
            Icon: r("WDSIconIcCheckCircleFilled.react"),
            colorName: "contentDeemphasized",
          };
      }
    }
    function m(e) {
      return e === o("WAWebCommonAdsTypes").BoostingStatus.ACTIVE ||
        e === o("WAWebCommonAdsTypes").BoostingStatus.SCHEDULED
        ? "secondaryPositive"
        : e === o("WAWebCommonAdsTypes").BoostingStatus.REJECTED ||
            e === o("WAWebCommonAdsTypes").BoostingStatus.UNABLE_TO_CREATE ||
            e === o("WAWebCommonAdsTypes").BoostingStatus.NOT_DELIVERING
          ? "secondaryNegative"
          : "contentDeemphasized";
    }
    function p(e, t) {
      return t != null &&
        e !== o("WAWebCommonAdsTypes").BoostingStatus.PAUSING &&
        e !== o("WAWebCommonAdsTypes").BoostingStatus.RESUMING
        ? t
        : e === o("WAWebCommonAdsTypes").BoostingStatus.PAUSING
          ? s._(/*BTDS*/ "Pausing")
          : e === o("WAWebCommonAdsTypes").BoostingStatus.RESUMING
            ? s._(/*BTDS*/ "Resuming")
            : e === o("WAWebCommonAdsTypes").BoostingStatus.CREATING
              ? s._(/*BTDS*/ "Being prepared")
              : e === o("WAWebCommonAdsTypes").BoostingStatus.PAUSED
                ? s._(/*BTDS*/ "Paused")
                : e === o("WAWebCommonAdsTypes").BoostingStatus.ACTIVE
                  ? s._(/*BTDS*/ "Active")
                  : null;
    }
    ((l.getAdStatusIcon = c),
      (l.getStatusIconConfig = d),
      (l.getBoostingStatusColorName = m),
      (l.getBoostingStatusDisplayText = p));
  },
  226,
);
