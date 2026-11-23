__d(
  "PerformanceSummaryShopsAdsGuidanceCardUtils",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ ""),
      u = s._(/*BTDS*/ ""),
      c = s._(/*BTDS*/ ""),
      d = s._(/*BTDS*/ ""),
      m = s._(/*BTDS*/ ""),
      p = s._(/*BTDS*/ ""),
      _ = s._(/*BTDS*/ ""),
      f = s._(/*BTDS*/ ""),
      g = s._(/*BTDS*/ ""),
      h = s._(/*BTDS*/ ""),
      y = s._(/*BTDS*/ ""),
      C = [s._(/*BTDS*/ ""), s._(/*BTDS*/ ""), s._(/*BTDS*/ "")];
    function b(e, t) {
      return e === "campaign"
        ? s._(/*BTDS*/ "", [s._plural(t)])
        : e === "ad_set"
          ? s._(/*BTDS*/ "", [s._plural(t)])
          : e === "ad"
            ? s._(/*BTDS*/ "", [s._plural(t)])
            : "";
    }
    function v(t) {
      return t === "campaign" ? e : t === "ad_set" ? u : t === "ad" ? c : "";
    }
    function S(e) {
      return e === "campaign" ? f : e === "ad_set" ? g : e === "ad" ? h : "";
    }
    function R(e, t) {
      return t ? (e ? m : d) : _;
    }
    function L(e, t, n) {
      return n ? p : b(e, t);
    }
    ((l.INFO_HEADER = y),
      (l.INFO_LIST_ITEMS = C),
      (l.getHeading = b),
      (l.getPostFlightDescription = v),
      (l.getMidFlightDescription = S),
      (l.getPhase2Description = R),
      (l.getPhase2Heading = L));
  },
  226,
);
