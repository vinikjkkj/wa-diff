__d(
  "WAWebBizBroadcastProSuggestedAudiencePresetsV2",
  ["WAWebAudienceExpressionTypes"],
  function (t, n, r, o, a, i, l) {
    var e = 30,
      s = ["active_chats", "inactive_chats", "largest_list", "all_contacts"],
      u = [7, 14, 30, 90, 180, 365],
      c = 90;
    function d(e) {
      return e === "active_chats" || e === "inactive_chats";
    }
    function m(e) {
      return d(e)
        ? e === "inactive_chats"
          ? u.filter(function (e) {
              return e <= c;
            })
          : u
        : [];
    }
    function p(e) {
      return e === "active_chats"
        ? o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_CHATTED_RECENTLY
        : e === "inactive_chats"
          ? o("WAWebAudienceExpressionTypes")
              .PREDICATE_TYPE_NOT_MESSAGED_RECENTLY
          : e === "largest_list"
            ? o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_LABEL
            : e === "all_contacts"
              ? o("WAWebAudienceExpressionTypes").PREDICATE_TYPE_ALL_CONTACTS
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    ((l.DEFAULT_PRO_AUDIENCE_DAYS = e),
      (l.PRO_SUGGESTED_AUDIENCE_PRESETS = s),
      (l.hasProAudiencePeriod = d),
      (l.getProAudiencePeriods = m),
      (l.getProSuggestedAudiencePredicateType = p));
  },
  98,
);
