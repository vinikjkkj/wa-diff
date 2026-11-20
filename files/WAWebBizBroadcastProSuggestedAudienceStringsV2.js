__d(
  "WAWebBizBroadcastProSuggestedAudienceStringsV2",
  ["fbt", "WAWebBizBroadcastProSuggestedAudiencePresetsV2", "fbs"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return e === "largest_list" && t != null && t.trim() !== "" ? t : u(e);
    }
    function u(e) {
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
    function c(e, t) {
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
    function d(e) {
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
    function m(e, t) {
      return o(
        "WAWebBizBroadcastProSuggestedAudiencePresetsV2",
      ).hasProAudiencePeriod(e)
        ? s._(
            /*BTDS*/ '_j{"*":"{number} recipients \\u00b7 {period}","_1":"1 recipient \\u00b7 {period}"}',
            [
              s._plural(t, "number"),
              s._param(
                "period",
                d(
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
    function p(e, t) {
      var n = u(e);
      return o(
        "WAWebBizBroadcastProSuggestedAudiencePresetsV2",
      ).hasProAudiencePeriod(e)
        ? r("fbs")._(/*BTDS*/ "{audience title} ({period})", [
            r("fbs")._param("audience title", n),
            r("fbs")._param("period", d(t)),
          ])
        : n;
    }
    function _() {
      return s._(/*BTDS*/ "Suggested audiences");
    }
    function f() {
      return s._(/*BTDS*/ "Could not load this suggested audience.");
    }
    function g() {
      return s._(/*BTDS*/ "Retry");
    }
    function h() {
      return s._(/*BTDS*/ "Choose manually");
    }
    function y(e) {
      return s._(
        /*BTDS*/ "This suggested audience is unavailable. You can choose contacts manually.",
      );
    }
    function C() {
      return s._(
        /*BTDS*/ "No eligible contacts match this suggested audience. You can choose contacts manually.",
      );
    }
    function b() {
      return s._(
        /*BTDS*/ "Not enough eligible contacts match this suggested audience. You can choose contacts manually.",
      );
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
