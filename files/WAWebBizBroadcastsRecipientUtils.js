__d(
  "WAWebBizBroadcastsRecipientUtils",
  [
    "WAJids",
    "WAWebAudienceResolver",
    "WAWebBizBroadcastRecipientLimitCommon",
    "WAWebContactCollection",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await o("WAWebAudienceResolver").resolveAudienceExpression(e),
        n = t.length;
      return (
        n >= o("WAWebBizBroadcastRecipientLimitCommon").MIN_RECIPIENTS &&
        n <= o("WAWebBizBroadcastRecipientLimitCommon").getRecipientLimit()
      );
    }
    function s(e) {
      try {
        var t,
          n = o("WAWebWidFactory").createUserWidOrThrow(
            o("WAJids").toLidUserJid(e),
          ),
          r = o("WAWebContactCollection").ContactCollection.get(n);
        if (r != null) return r;
        var a = o("WAWebWidFactory").createUserWidOrThrow(
          o("WAJids").toPhoneUserJid(e),
        );
        return (t = o("WAWebContactCollection").ContactCollection.get(a)) !=
          null
          ? t
          : null;
      } catch (e) {
        return null;
      }
    }
    ((l.MIN_RECIPIENTS = o(
      "WAWebBizBroadcastRecipientLimitCommon",
    ).MIN_RECIPIENTS),
      (l.getRecipientLimit = o(
        "WAWebBizBroadcastRecipientLimitCommon",
      ).getRecipientLimit),
      (l.isPredicateEligibleForSuggestedCard = e),
      (l.getContactByUserId = s));
  },
  98,
);
