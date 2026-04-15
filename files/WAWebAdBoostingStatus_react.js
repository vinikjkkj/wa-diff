__d(
  "WAWebAdBoostingStatus.react",
  ["fbt", "WAWebCommonAdsTypes", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.boostingStatus;
      switch (n) {
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.ACTIVE: {
          var r;
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = s._(/*BTDS*/ "Active")), (t[0] = r))
              : (r = t[0]),
            r
          );
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.CREATING: {
          var a;
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = s._(/*BTDS*/ "In creation")), (t[1] = a))
              : (a = t[1]),
            a
          );
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.EXTENDABLE: {
          var i;
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = s._(/*BTDS*/ "Completed")), (t[2] = i))
              : (i = t[2]),
            i
          );
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.FINISHED: {
          var l;
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = s._(/*BTDS*/ "Completed")), (t[3] = l))
              : (l = t[3]),
            l
          );
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.LIMITED_DELIVERY: {
          var u;
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = s._(/*BTDS*/ "Limited delivery")), (t[4] = u))
              : (u = t[4]),
            u
          );
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.NOT_DELIVERING: {
          var c;
          return (
            t[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = s._(/*BTDS*/ "Not delivering")), (t[5] = c))
              : (c = t[5]),
            c
          );
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.PAUSED: {
          var d;
          return (
            t[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = s._(/*BTDS*/ "Paused")), (t[6] = d))
              : (d = t[6]),
            d
          );
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.PENDING: {
          var m;
          return (
            t[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = s._(/*BTDS*/ "In review")), (t[7] = m))
              : (m = t[7]),
            m
          );
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.REJECTED: {
          var p;
          return (
            t[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((p = s._(/*BTDS*/ "Rejected")), (t[8] = p))
              : (p = t[8]),
            p
          );
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.SCHEDULED: {
          var _;
          return (
            t[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = s._(/*BTDS*/ "Scheduled")), (t[9] = _))
              : (_ = t[9]),
            _
          );
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.ERROR: {
          var f;
          return (
            t[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = s._(/*BTDS*/ "Error")), (t[10] = f))
              : (f = t[10]),
            f
          );
        }
        case o("WAWebCommonAdsTypes").BoostingStatusEnum.UNKNOWN: {
          var g;
          return (
            t[11] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = s._(/*BTDS*/ "Error")), (t[11] = g))
              : (g = t[11]),
            g
          );
        }
      }
    }
    l.default = e;
  },
  226,
);
