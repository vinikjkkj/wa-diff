__d(
  "WAWebNewsletterDeleteDialogWamoSubStrings",
  ["fbt", "WAWebChatHistoryIcon.react", "WAWebCurrencyDollarIcon.react"],
  function (t, n, r, o, a, i, l, s) {
    function e() {
      return {
        title: s._(/*BTDS*/ "Subscribers will be refunded"),
        description: s._(
          /*BTDS*/ "Subscriptions will be canceled and active subscribers will get a refund for this month's subscription fees.",
        ),
        Icon: o("WAWebCurrencyDollarIcon.react").CurrencyDollarIcon,
        key: "subscribers-will-be-refunded",
      };
    }
    function u() {
      return {
        title: s._(/*BTDS*/ "Past activity will be visible"),
        description: s._(
          /*BTDS*/ "Past channel activity will still be visible to your followers and subscribers.",
        ),
        Icon: o("WAWebChatHistoryIcon.react").ChatHistoryIcon,
        key: "past-activity-will-be-visible",
      };
    }
    ((l.getNewsletterDeleteDialogWamoSubWarningMessageContent = e),
      (l.getNewsletterDeleteDialogSuspendedWamoSubWarningMessageContent = u));
  },
  226,
);
