__d(
  "WAWebSuggestedAudienceCards",
  [
    "WAWebAudienceExpressionTypes",
    "WAWebAudienceResolutionBridge",
    "WAWebBizBroadcastsAudienceStrings",
    "WDSIconIcContacts.react",
    "WDSIconIcLabel.react",
    "WDSIconWdsIcChatFilled.react",
    "WDSIconWdsIcUnsupportedMessageFilled.react",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        {
          description: (e = o("WAWebBizBroadcastsAudienceStrings"))
            .getActiveChatsDescription,
          icon: r("WDSIconWdsIcChatFilled.react"),
          id: "active_chats",
          resolveExpression: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return {
                params: { days: 30 },
                predicateType: o("WAWebAudienceExpressionTypes")
                  .PREDICATE_TYPE_CHATTED_RECENTLY,
                type: o("WAWebAudienceExpressionTypes")
                  .EXPRESSION_TYPE_PREDICATE,
              };
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          title: e.getActiveChatsTitle,
        },
        {
          description: e.getInactiveChatsDescription,
          icon: r("WDSIconWdsIcUnsupportedMessageFilled.react"),
          id: "inactive_chats",
          resolveExpression: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return {
                params: { days: 30 },
                predicateType: o("WAWebAudienceExpressionTypes")
                  .PREDICATE_TYPE_NOT_MESSAGED_RECENTLY,
                type: o("WAWebAudienceExpressionTypes")
                  .EXPRESSION_TYPE_PREDICATE,
              };
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          title: e.getInactiveChatsTitle,
        },
        {
          description: e.getLargestListDescription,
          icon: r("WDSIconIcLabel.react"),
          id: "largest_list",
          resolveExpression: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o(
                "WAWebAudienceResolutionBridge",
              ).findLargestLabelId();
              return {
                params: { labelIds: e != null ? [e] : [] },
                predicateType: o("WAWebAudienceExpressionTypes")
                  .PREDICATE_TYPE_LABEL,
                type: o("WAWebAudienceExpressionTypes")
                  .EXPRESSION_TYPE_PREDICATE,
              };
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          title: e.getLargestListTitle,
        },
        {
          description: e.getAllContactsDescription,
          icon: r("WDSIconIcContacts.react"),
          id: "all_contacts",
          resolveExpression: (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return {
                params: {},
                predicateType: o("WAWebAudienceExpressionTypes")
                  .PREDICATE_TYPE_ALL_CONTACTS,
                type: o("WAWebAudienceExpressionTypes")
                  .EXPRESSION_TYPE_PREDICATE,
              };
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })(),
          title: e.getAllContactsTitle,
        },
      ];
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.resolveExpression();
        })),
        c.apply(this, arguments)
      );
    }
    ((l.SUGGESTED_AUDIENCE_CARDS = s), (l.resolveCardExpression = u));
  },
  98,
);
