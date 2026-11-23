__d(
  "WAWebBizBroadcastProSuggestedAudienceStringsV2",
  ["fbt", "WAWebBizBroadcastProSuggestedAudiencePresetsV2", "fbs"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return e === "largest_list" && t != null && t.trim() !== "" ? t : u(e);
    }
    function u(e) {
      return e === "active_chats"
        ? r("fbs")._(/*BTDS*/ "")
        : e === "inactive_chats"
          ? r("fbs")._(/*BTDS*/ "")
          : e === "largest_list"
            ? r("fbs")._(/*BTDS*/ "")
            : e === "all_contacts"
              ? r("fbs")._(/*BTDS*/ "")
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function c(e, t) {
      return (
        t === void 0 &&
          (t = o(
            "WAWebBizBroadcastProSuggestedAudiencePresetsV2",
          ).DEFAULT_PRO_AUDIENCE_DAYS),
        e === "active_chats"
          ? s._(/*BTDS*/ "", [s._param("days", t, [0])])
          : e === "inactive_chats"
            ? s._(/*BTDS*/ "", [s._param("days", t, [0])])
            : e === "largest_list"
              ? s._(/*BTDS*/ "")
              : e === "all_contacts"
                ? s._(/*BTDS*/ "")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })()
      );
    }
    function d(e) {
      return e === 7
        ? r("fbs")._(/*BTDS*/ "")
        : e === 14
          ? r("fbs")._(/*BTDS*/ "")
          : e === 30
            ? r("fbs")._(/*BTDS*/ "")
            : e === 90
              ? r("fbs")._(/*BTDS*/ "")
              : e === 180
                ? r("fbs")._(/*BTDS*/ "")
                : e === 365
                  ? r("fbs")._(/*BTDS*/ "")
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    function m(e, t) {
      return o(
        "WAWebBizBroadcastProSuggestedAudiencePresetsV2",
      ).hasProAudiencePeriod(e)
        ? s._(/*BTDS*/ "", [
            s._plural(t, "number"),
            s._param(
              "period",
              d(
                o("WAWebBizBroadcastProSuggestedAudiencePresetsV2")
                  .DEFAULT_PRO_AUDIENCE_DAYS,
              ),
            ),
          ])
        : s._(/*BTDS*/ "", [s._plural(t, "number")]);
    }
    function p(e, t) {
      var n = u(e);
      return o(
        "WAWebBizBroadcastProSuggestedAudiencePresetsV2",
      ).hasProAudiencePeriod(e)
        ? r("fbs")._(/*BTDS*/ "", [
            r("fbs")._param("audience title", n),
            r("fbs")._param("period", d(t)),
          ])
        : n;
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
    function h() {
      return s._(/*BTDS*/ "");
    }
    function y(e) {
      return s._(/*BTDS*/ "");
    }
    function C() {
      return s._(/*BTDS*/ "");
    }
    function b() {
      return s._(/*BTDS*/ "");
    }
    ((l.getProSuggestedAudienceDisplayTitle = e),
      (l.getProSuggestedAudienceTitle = u),
      (l.getProSuggestedAudienceDescription = c),
      (l.getProAudiencePeriodLabel = d),
      (l.getProSuggestedAudienceSubtitle = m),
      (l.getProSuggestedAudienceFallbackName = p),
      (l.getProSuggestedAudiencesSectionTitle = _),
      (l.getProAudienceResolutionError = f),
      (l.getProAudienceRetryLabel = g),
      (l.getProAudienceChooseManuallyLabel = h),
      (l.getProAudienceUnavailableMessage = y),
      (l.getProAudienceEmptyMessage = C),
      (l.getProAudienceTooSmallMessage = b));
  },
  226,
);
