__d(
  "WAWebBizBroadcastProSuggestedAudienceResolverV2",
  [
    "WATimeUtils",
    "WAWebBizBroadcastProAudienceActivityUtils",
    "WAWebBizBroadcastProAudienceSegmentBridge",
    "WAWebBizBroadcastProRecipientActivityStore",
    "WAWebBizBroadcastProSendableContactsV2",
    "WAWebBizBroadcastProSuggestedAudienceStringsV2",
    "WAWebBizBroadcastsAudienceUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e.candidateLids,
        n = e.days,
        r = e.segment,
        a = Array.from(new Set(t));
      e: {
        var i = r;
        if (i === "all_contacts") {
          var l = new Set(
            o(
              "WAWebBizBroadcastProSendableContactsV2",
            ).getProSendableRecipientCandidateLidsV2(!0),
          );
          return {
            recipientLids: a.filter(function (e) {
              return l.has(e);
            }),
            unavailableReason: null,
          };
        }
        if (i === "active_chats" || i === "inactive_chats") {
          var s = i,
            u = await o(
              "WAWebBizBroadcastProRecipientActivityStore",
            ).getProRecipientActivitySnapshot(a),
            c = new Set(
              o(
                "WAWebBizBroadcastProAudienceActivityUtils",
              ).selectProActivityRecipientLids(
                u,
                s,
                n,
                o("WATimeUtils").unixTime(),
              ),
            );
          return {
            recipientLids: a.filter(function (e) {
              return c.has(e);
            }),
            unavailableReason: null,
          };
        }
        if (i === "largest_list") {
          var d = await o(
              "WAWebBizBroadcastProAudienceSegmentBridge",
            ).queryProAudienceSegment(
              babelHelpers.extends({}, e, { candidateLids: a }),
            ),
            m = new Set(d.recipientLids);
          return babelHelpers.extends({}, d, {
            recipientLids: a.filter(function (e) {
              return m.has(e);
            }),
          });
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            i,
        );
      }
    }
    function s(e, t) {
      var n = t
        ? ""
        : o("WAWebBizBroadcastsAudienceUtils").buildAudienceNameFromRecipients(
            e.matchingRecipientLids.map(function (e) {
              return e.user;
            }),
          );
      return (
        n ||
        o("WAWebBizBroadcastProSuggestedAudienceStringsV2")
          .getProSuggestedAudienceFallbackName(e.segment, e.days)
          .toString()
      );
    }
    ((l.resolveProSuggestedAudienceV2 = e),
      (l.buildProSuggestedAudienceNameV2 = s));
  },
  98,
);
