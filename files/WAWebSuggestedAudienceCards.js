__d(
  "WAWebSuggestedAudienceCards",
  [
    "WAWebAudienceExpressionTypes",
    "WAWebAudienceResolutionBridge",
    "WAWebBizBroadcastsAudienceStrings",
    "WDSIconIcContacts.react",
    "WDSIconIcLabel.react",
    "WDSIconWdsIcChat.react",
    "WDSIconWdsIcUnsupportedMessage.react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        {
          description: (e = o("WAWebBizBroadcastsAudienceStrings"))
            .getActiveChatsDescription,
          icon: r("WDSIconWdsIcChat.react"),
          id: "active_chats",
          resolveExpression: async function () {
            return {
              params: { days: 30 },
              predicateType: o("WAWebAudienceExpressionTypes")
                .PREDICATE_TYPE_CHATTED_RECENTLY,
              type: o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE,
            };
          },
          title: e.getActiveChatsTitle,
        },
        {
          description: e.getInactiveChatsDescription,
          icon: r("WDSIconWdsIcUnsupportedMessage.react"),
          id: "inactive_chats",
          resolveExpression: async function () {
            return {
              params: { days: 30 },
              predicateType: o("WAWebAudienceExpressionTypes")
                .PREDICATE_TYPE_NOT_MESSAGED_RECENTLY,
              type: o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE,
            };
          },
          title: e.getInactiveChatsTitle,
        },
        {
          description: e.getLargestListDescription,
          icon: r("WDSIconIcLabel.react"),
          id: "largest_list",
          resolveExpression: async function () {
            var e = await o(
              "WAWebAudienceResolutionBridge",
            ).findLargestLabelId();
            return {
              params: { labelIds: e != null ? [e] : [] },
              predicateType: o("WAWebAudienceExpressionTypes")
                .PREDICATE_TYPE_LABEL,
              type: o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE,
            };
          },
          title: e.getLargestListTitle,
        },
        {
          description: e.getAllContactsDescription,
          icon: r("WDSIconIcContacts.react"),
          id: "all_contacts",
          resolveExpression: async function () {
            return {
              params: {},
              predicateType: o("WAWebAudienceExpressionTypes")
                .PREDICATE_TYPE_ALL_CONTACTS,
              type: o("WAWebAudienceExpressionTypes").EXPRESSION_TYPE_PREDICATE,
            };
          },
          title: e.getAllContactsTitle,
        },
      ];
    async function u(e) {
      return e.resolveExpression();
    }
    ((l.SUGGESTED_AUDIENCE_CARDS = s), (l.resolveCardExpression = u));
  },
  98,
);
