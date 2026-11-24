__d(
  "MAIBATriggerSendCTAButton",
  [
    "fbt",
    "MAIBALatestTurnBoundary",
    "MAIBAMessageContext",
    "MAIBATriggerSendCTAContent.react",
    "MAIBATriggerSendCreationBusyStore",
    "MAIBATriggerSendLiveReviewStore",
    "react",
    "useJSON",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.attributesJson,
        n = r("useJSON")(t),
        a = o("MAIBAMessageContext").useMAIBAMessageContext(),
        i = a.externalConversationId,
        l = a.isFromHistory,
        c = o("MAIBALatestTurnBoundary").useIsInLatestTurn(),
        d = o(
          "MAIBATriggerSendLiveReviewStore",
        ).useMAIBATriggerSendLiveReview(),
        m = o(
          "MAIBATriggerSendCreationBusyStore",
        ).useMAIBATriggerSendCreationBusy(),
        p = !l && c;
      return p && (d != null || m)
        ? null
        : u.jsx(r("MAIBATriggerSendCTAContent.react"), {
            attrs: n,
            disabledMessage: p ? null : s._(/*BTDS*/ ""),
            externalConversationId: i,
            isActionable: p,
          });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
