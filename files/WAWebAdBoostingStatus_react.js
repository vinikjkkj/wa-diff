__d(
  "WAWebAdBoostingStatus.react",
  ["fbt", "WAWebCommonAdsTypes"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.boostingStatus;
      switch (t) {
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.ACTIVE:
          return s._(/*BTDS*/ "Active");
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.CREATING:
          return s._(/*BTDS*/ "In creation");
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.EXTENDABLE:
          return s._(/*BTDS*/ "Completed");
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.FINISHED:
          return s._(/*BTDS*/ "Completed");
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.LIMITED_DELIVERY:
          return s._(/*BTDS*/ "Limited delivery");
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.NOT_DELIVERING:
          return s._(/*BTDS*/ "Not delivering");
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.PAUSED:
          return s._(/*BTDS*/ "Paused");
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.PENDING:
          return s._(/*BTDS*/ "In review");
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.REJECTED:
          return s._(/*BTDS*/ "Rejected");
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.SCHEDULED:
          return s._(/*BTDS*/ "Scheduled");
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.ERROR:
          return s._(/*BTDS*/ "Error");
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.UNKNOWN:
          return s._(/*BTDS*/ "Error");
      }
    }
    l.default = e;
  },
  226,
);
