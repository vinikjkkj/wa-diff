__d(
  "WAWebBizBroadcastProManualAudienceStringsV2",
  ["fbt", "WAWebBizBroadcastProSuggestedAudienceStringsV2"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return s._(/*BTDS*/ "", [s._param("audience", u(e))]);
    }
    function u(e) {
      return (function (e) {
        if (e === "all_contacts") return s._(/*BTDS*/ "");
        if (e === "unknown") return s._(/*BTDS*/ "");
        if (e === "lists") return s._(/*BTDS*/ "");
        {
          var t = e;
          return o(
            "WAWebBizBroadcastProSuggestedAudienceStringsV2",
          ).getProSuggestedAudienceTitle(t);
        }
      })(e);
    }
    function c() {
      return s._(/*BTDS*/ "");
    }
    function d() {
      return s._(/*BTDS*/ "");
    }
    function m() {
      return s._(/*BTDS*/ "");
    }
    function p() {
      return s._(/*BTDS*/ "");
    }
    function _() {
      return s._(/*BTDS*/ "");
    }
    function f() {
      return s._(/*BTDS*/ "");
    }
    function g() {
      return s._(/*BTDS*/ "");
    }
    function h(e) {
      return s._(/*BTDS*/ "", [s._param("list", e)]);
    }
    function y(e) {
      return s._(/*BTDS*/ "", [s._plural(e, "number")]);
    }
    function C() {
      return s._(/*BTDS*/ "");
    }
    function b() {
      return s._(/*BTDS*/ "");
    }
    ((l.getProManualAudienceFilterAccessibleName = e),
      (l.getProManualAudienceTitle = u),
      (l.getProManualAudienceResolutionError = c),
      (l.getProManualAudienceUnavailableMessage = d),
      (l.getProManualAudienceLoadingMessage = m),
      (l.getProManualAudienceSearchAccessibleName = p),
      (l.getProManualAudienceCloseSearchLabel = _),
      (l.getProManualAudienceClearLabel = f),
      (l.getProManualAudienceChooseListLabel = g),
      (l.getProManualAudienceListFilterAccessibleName = h),
      (l.getProManualAudienceListCount = y),
      (l.getProManualAudienceNoListsMessage = C),
      (l.getProManualAudienceListUnavailableMessage = b));
  },
  226,
);
