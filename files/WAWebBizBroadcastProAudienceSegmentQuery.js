__d(
  "WAWebBizBroadcastProAudienceSegmentQuery",
  [
    "WATimeUtils",
    "WAWebBizBroadcastProAudienceActivityQuery",
    "WAWebBizBroadcastProAudienceActivityUtils",
    "WAWebBizBroadcastProLargestListAudienceQuery",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Array.from(new Set(e.candidateLids)),
            n = o("WATimeUtils").unixTime(),
            r = yield e.segment === "all_contacts"
              ? d(t)
              : e.segment === "active_chats"
                ? u(t, "active_chats", e.days, n)
                : e.segment === "inactive_chats"
                  ? u(t, "inactive_chats", e.days, n)
                  : e.segment === "largest_list"
                    ? o("WAWebBizBroadcastProLargestListAudienceQuery")
                        .queryProLargestListAudience(t)
                        .then(d)
                    : (function () {
                        throw Error(
                          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                            e.segment,
                        );
                      })(),
            a = new Set(r.recipientLids);
          return {
            recipientLids: t.filter(function (e) {
              return a.has(e);
            }),
            unavailableReason: r.unavailableReason,
          };
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t, n, r) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o(
              "WAWebBizBroadcastProAudienceActivityQuery",
            ).queryProAudienceActivity(e);
            return d(
              o(
                "WAWebBizBroadcastProAudienceActivityUtils",
              ).selectProActivityRecipientLids(a, t, n, r),
            );
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return { recipientLids: e, unavailableReason: null };
    }
    l.resolveProAudienceSegment = e;
  },
  98,
);
