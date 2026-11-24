__d(
  "WAWebBizBroadcastProAudienceSegmentQuery",
  [
    "WATimeUtils",
    "WAWebBizBroadcastProAudienceActivityQuery",
    "WAWebBizBroadcastProAudienceActivityUtils",
    "WAWebBizBroadcastProChatListAudienceQuery",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = Array.from(new Set(e.candidateLids)),
        n = o("WATimeUtils").unixTime(),
        r = await (e.segment === "all_contacts"
          ? u(t)
          : e.segment === "active_chats"
            ? s(t, "active_chats", e.days, n)
            : e.segment === "inactive_chats"
              ? s(t, "inactive_chats", e.days, n)
              : e.segment === "largest_list"
                ? o(
                    "WAWebBizBroadcastProChatListAudienceQuery",
                  ).queryProLargestListAudience(t)
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e.segment,
                    );
                  })()),
        a = new Set(r.recipientLids);
      return babelHelpers.extends({}, r, {
        recipientLids: t.filter(function (e) {
          return a.has(e);
        }),
      });
    }
    async function s(e, t, n, r) {
      var a = await o(
        "WAWebBizBroadcastProAudienceActivityQuery",
      ).queryProAudienceActivity(e);
      return u(
        o(
          "WAWebBizBroadcastProAudienceActivityUtils",
        ).selectProActivityRecipientLids(a, t, n, r),
      );
    }
    function u(e) {
      return { recipientLids: e, unavailableReason: null };
    }
    l.resolveProAudienceSegment = e;
  },
  98,
);
