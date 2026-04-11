__d(
  "WAWebSearchUserJourneyLogger",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebChatModel",
    "WAWebContactModel",
    "WAWebMetaAISuggestionModel",
    "WAWebMsgModel",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSearchUserJourneyWamEvent",
    "WAWebUnifiedSession",
    "WAWebWamEnumSearchUjItemType",
    "WAWebWamEnumSearchUseCase",
    "WAWebWamEnumSearchUserJourneyAction",
    "WAWebWamEnumTsSurface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = ["item", "itemTypeOverride"],
      c = (function () {
        function t() {
          ((this.loggingEnabled = !1),
            (this.$3 = !1),
            (this.$4 = !1),
            (this.$5 = !1),
            (this.loggingEnabled = o("WAWebABProps").getABPropConfigValue(
              "search_user_journey_logging_wam_enabled",
            )));
        }
        var n = t.prototype;
        return (
          (n.searchCtaClicked = function (t) {
            t == null ||
              this.$5 ||
              ((this.$5 = !0),
              this.$6({
                uiSurface: t,
                action: o("WAWebWamEnumSearchUserJourneyAction")
                  .SEARCH_USER_JOURNEY_ACTION.SEARCH_CTA_CLICKED,
              }));
          }),
          (n.nullStateShow = function (t) {
            this.$6({
              action: o("WAWebWamEnumSearchUserJourneyAction")
                .SEARCH_USER_JOURNEY_ACTION.NULL_STATE_SHOW,
              aiSuggestionCount: t,
            });
          }),
          (n.nullStateItemClick = function (t, n, r) {
            this.$6({
              action: o("WAWebWamEnumSearchUserJourneyAction")
                .SEARCH_USER_JOURNEY_ACTION.NULL_STATE_ITEM_CLICK,
              itemType: t,
              selectedItemRank: n,
              aiSuggestionCount: r,
            });
          }),
          (n.recentSearchesClearAllClick = function () {
            this.$6({
              action: o("WAWebWamEnumSearchUserJourneyAction")
                .SEARCH_USER_JOURNEY_ACTION.RECENT_SEARCHES_CLEAR_ALL_CLICK,
            });
          }),
          (n.searchStart = function (t, n) {
            t == null ||
              this.$3 ||
              ((this.$3 = !0),
              this.$6({
                action: o("WAWebWamEnumSearchUserJourneyAction")
                  .SEARCH_USER_JOURNEY_ACTION.SEARCH_START,
                criteriaType: n,
              }));
          }),
          (n.resultPageShow = function (t) {
            if (!this.$4) {
              this.$4 = !0;
              var e =
                t.aiSuggestionCount +
                t.chatsCount +
                t.contactsCount +
                t.messagesCount +
                t.groupsInCommonCount +
                t.ftsMessagesCount;
              this.$6(
                babelHelpers.extends(
                  {
                    action: o("WAWebWamEnumSearchUserJourneyAction")
                      .SEARCH_USER_JOURNEY_ACTION.RESULT_PAGE_SHOW,
                    resultCount: e,
                  },
                  t,
                ),
              );
            }
          }),
          (n.resultItemClick = function (n) {
            var t = n.item,
              a = n.itemTypeOverride,
              i = babelHelpers.objectWithoutPropertiesLoose(n, u),
              l = a;
            if (
              (l == null &&
                (t instanceof o("WAWebMsgModel").Msg
                  ? (l = o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE
                      .MESSAGE)
                  : t instanceof o("WAWebChatModel").Chat
                    ? (l = o("WAWebWamEnumSearchUjItemType").SEARCH_UJ_ITEM_TYPE
                        .CHAT)
                    : t instanceof r("WAWebContactModel")
                      ? (l = o("WAWebWamEnumSearchUjItemType")
                          .SEARCH_UJ_ITEM_TYPE.CONTACT)
                      : t instanceof r("WAWebMetaAISuggestionModel") &&
                        (l = o("WAWebWamEnumSearchUjItemType")
                          .SEARCH_UJ_ITEM_TYPE.AI_SUGGESTION)),
              l == null)
            ) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[uj] [search] Unsupported item type: ",
                    "",
                  ])),
                t.constructor.name,
              );
              return;
            }
            this.$6(
              babelHelpers.extends(
                {
                  action: o("WAWebWamEnumSearchUserJourneyAction")
                    .SEARCH_USER_JOURNEY_ACTION.RESULT_ITEM_CLICK,
                  itemType: l,
                },
                i,
              ),
            );
          }),
          (n.dismiss = function (t) {
            this.$6({
              action: o("WAWebWamEnumSearchUserJourneyAction")
                .SEARCH_USER_JOURNEY_ACTION.DISMISS,
              dismissType: t,
            });
          }),
          (n.$6 = function (t) {
            var e;
            if (this.loggingEnabled) {
              var n = o(
                "WAWebUnifiedSession",
              ).UnifiedSessionManager.getSessionId();
              if (n == null) {
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[uj] [search] Unified session ID is null",
                    ])),
                );
                return;
              }
              d(t.action) &&
                this.$1 == null &&
                ((this.$1 = r("WAWebPonyfillsCryptoRandomUUID")()),
                (this.$2 = r("WAWebPonyfillsCryptoRandomUUID")()));
              var a = this.$1;
              if (a != null) {
                var i = new (o(
                  "WAWebSearchUserJourneyWamEvent",
                ).SearchUserJourneyWamEvent)();
                ((i.unifiedSessionId = n),
                  (i.userJourneyFunnelId = a),
                  (i.userJourneyEventMs = o("WATimeUtils").unixTimeMs()),
                  (i.searchUserJourneyAction = t.action),
                  (i.searchUseCase = o(
                    "WAWebWamEnumSearchUseCase",
                  ).SEARCH_USE_CASE.GLOBAL_SEARCH),
                  (i.uiSurface =
                    (e = t.uiSurface) != null
                      ? e
                      : o("WAWebWamEnumTsSurface").TS_SURFACE.SEARCH),
                  this.$2 != null && (i.searchUniqueSessionId = this.$2),
                  t.itemType != null && (i.searchUjItemType = t.itemType),
                  t.selectedItemRank != null &&
                    (i.searchUjSelectedItemRank = t.selectedItemRank),
                  t.resultCount != null &&
                    (i.searchUjResultCount = t.resultCount),
                  t.chatsCount != null && (i.searchUjChatsCount = t.chatsCount),
                  t.contactsCount != null &&
                    (i.searchUjContactsCount = t.contactsCount),
                  t.messagesCount != null &&
                    (i.searchUjMessagesCount = t.messagesCount),
                  t.bizCount != null && (i.searchUjBizCount = t.bizCount),
                  t.groupsInCommonCount != null &&
                    (i.searchUjGroupsInCommonCount = t.groupsInCommonCount),
                  t.aiSuggestionCount != null &&
                    (i.searchUjAiSuggestionCount = t.aiSuggestionCount),
                  t.hasFuzzyResults != null &&
                    (i.searchUjHasFuzzyResults = t.hasFuzzyResults),
                  t.criteriaType != null &&
                    (i.searchUjCriteriaType = t.criteriaType),
                  t.filterCount != null &&
                    (i.searchUjFilterCount = t.filterCount),
                  t.filterType != null && (i.searchUjFilterType = t.filterType),
                  t.dismissType != null &&
                    (i.searchUjDismissType = t.dismissType),
                  t.selectedMessageSource != null &&
                    (i.searchSelectedMessageSource = t.selectedMessageSource),
                  t.selectedMessageDistance != null &&
                    (i.selectedMessageDistance = t.selectedMessageDistance),
                  t.ftsMessagesCount != null &&
                    (i.searchFtsMessagesCount = t.ftsMessagesCount),
                  t.semanticMessagesCount != null &&
                    (i.searchSemanticMessagesCount = t.semanticMessagesCount),
                  t.ftsAndSemanticMessagesCount != null &&
                    (i.searchFtsAndSemanticMessagesCount =
                      t.ftsAndSemanticMessagesCount),
                  t.hasSemanticSearchResults != null &&
                    (i.searchHasSemanticSearchResults =
                      t.hasSemanticSearchResults),
                  i.commit(),
                  m(t.action) &&
                    ((this.$1 = null),
                    (this.$2 = null),
                    (this.$5 = !1),
                    (this.$3 = !1),
                    (this.$4 = !1)));
              }
            }
          }),
          t
        );
      })();
    function d(e) {
      return (
        e ===
          o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION
            .SEARCH_CTA_CLICKED ||
        e ===
          o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION
            .SEARCH_START
      );
    }
    function m(e) {
      return (
        e ===
          o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION
            .DISMISS ||
        e ===
          o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION
            .NULL_STATE_ITEM_CLICK ||
        e ===
          o("WAWebWamEnumSearchUserJourneyAction").SEARCH_USER_JOURNEY_ACTION
            .RESULT_ITEM_CLICK
      );
    }
    var p = new c();
    l.SearchUserJourneyLogger = p;
  },
  98,
);
