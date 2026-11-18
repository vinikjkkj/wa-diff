__d(
  "WAWebBizBroadcastProSuggestedAudienceStringsV2",
  ["fbt", "WAWebBizBroadcastProSuggestedAudiencePresetsV2", "fbs"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      return e === "active_chats"
        ? r("fbs")._(/*BTDS*/ "Active chats")
        : e === "inactive_chats"
          ? r("fbs")._(/*BTDS*/ "Inactive chats")
          : e === "largest_list"
            ? r("fbs")._(/*BTDS*/ "Your largest list")
            : e === "all_contacts"
              ? r("fbs")._(/*BTDS*/ "Your WhatsApp contacts")
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function u(e, t) {
      return (
        t === void 0 &&
          (t = o(
            "WAWebBizBroadcastProSuggestedAudiencePresetsV2",
          ).DEFAULT_PRO_AUDIENCE_DAYS),
        e === "active_chats"
          ? s._(
              /*BTDS*/ '_j{"*":"People who messaged you in the last {days} days, based on chat history on this device."}',
              [s._param("days", t, [0])],
            )
          : e === "inactive_chats"
            ? s._(
                /*BTDS*/ '_j{"*":"People with chat history on this device who have not messaged you in the last {days} days."}',
                [s._param("days", t, [0])],
              )
            : e === "largest_list"
              ? s._(/*BTDS*/ "People in your largest WhatsApp list.")
              : e === "all_contacts"
                ? s._(/*BTDS*/ "Contacts saved to your WhatsApp address book.")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })()
      );
    }
    function c(e) {
      return e === 7
        ? r("fbs")._(/*BTDS*/ "Last 7 days")
        : e === 14
          ? r("fbs")._(/*BTDS*/ "Last 14 days")
          : e === 30
            ? r("fbs")._(/*BTDS*/ "Last 30 days")
            : e === 90
              ? r("fbs")._(/*BTDS*/ "Last 3 months")
              : e === 180
                ? r("fbs")._(/*BTDS*/ "Last 6 months")
                : e === 365
                  ? r("fbs")._(/*BTDS*/ "Last year")
                  : (function () {
                      throw Error(
                        "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                          e,
                      );
                    })();
    }
    function d(e, t) {
      return o(
        "WAWebBizBroadcastProSuggestedAudiencePresetsV2",
      ).hasProAudiencePeriod(e)
        ? s._(
            /*BTDS*/ '_j{"*":"{number} recipients \\u00b7 {period}","_1":"1 recipient \\u00b7 {period}"}',
            [
              s._plural(t, "number"),
              s._param(
                "period",
                c(
                  o("WAWebBizBroadcastProSuggestedAudiencePresetsV2")
                    .DEFAULT_PRO_AUDIENCE_DAYS,
                ),
              ),
            ],
          )
        : s._(/*BTDS*/ '_j{"*":"{number} recipients","_1":"1 recipient"}', [
            s._plural(t, "number"),
          ]);
    }
    function m(t, n) {
      var a = e(t);
      return o(
        "WAWebBizBroadcastProSuggestedAudiencePresetsV2",
      ).hasProAudiencePeriod(t)
        ? r("fbs")._(/*BTDS*/ "{audience title} ({period})", [
            r("fbs")._param("audience title", a),
            r("fbs")._param("period", c(n)),
          ])
        : a;
    }
    function p() {
      return s._(/*BTDS*/ "Suggested audiences");
    }
    function _() {
      return s._(/*BTDS*/ "Could not load this suggested audience.");
    }
    function f() {
      return s._(/*BTDS*/ "Retry");
    }
    function g() {
      return s._(/*BTDS*/ "Choose manually");
    }
    function h(e) {
      return s._(
        /*BTDS*/ "This suggested audience is unavailable. You can choose contacts manually.",
      );
    }
    function y() {
      return s._(
        /*BTDS*/ "No eligible contacts match this suggested audience. You can choose contacts manually.",
      );
    }
    function C() {
      return s._(
        /*BTDS*/ "Not enough eligible contacts match this suggested audience. You can choose contacts manually.",
      );
    }
    ((l.getProSuggestedAudienceTitle = e),
      (l.getProSuggestedAudienceDescription = u),
      (l.getProAudiencePeriodLabel = c),
      (l.getProSuggestedAudienceSubtitle = d),
      (l.getProSuggestedAudienceFallbackName = m),
      (l.getProSuggestedAudiencesSectionTitle = p),
      (l.getProAudienceResolutionError = _),
      (l.getProAudienceRetryLabel = f),
      (l.getProAudienceChooseManuallyLabel = g),
      (l.getProAudienceUnavailableMessage = h),
      (l.getProAudienceEmptyMessage = y),
      (l.getProAudienceTooSmallMessage = C));
  },
  226,
);
