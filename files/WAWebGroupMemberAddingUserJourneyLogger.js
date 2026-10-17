__d(
  "WAWebGroupMemberAddingUserJourneyLogger",
  [
    "WARandomHex",
    "WATimeUtils",
    "WAWebBotUtils",
    "WAWebGroupMemberAddingUserJourneyWamEvent",
    "WAWebGroupMemberSuggestions",
    "WAWebUnifiedSession",
    "WAWebWamEnumGroupMemberAddingActionType",
    "WAWebWamEnumGroupMemberAddingMemberType",
    "WAWebWamEnumTsSurface",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function () {
      function e(e) {
        var t = e.entryPoint,
          n = e.isAdmin;
        ((this.$1 = o("WARandomHex").randomHex(16)),
          (this.$4 = o(
            "WAWebGroupMemberSuggestions",
          ).NO_GROUP_MEMBER_SUGGESTIONS),
          (this.$2 = t),
          (this.$3 = n));
      }
      var t = e.prototype;
      return (
        (t.contactsPickerOpened = function () {
          this.$5({
            groupMemberAddingActionType: o(
              "WAWebWamEnumGroupMemberAddingActionType",
            ).GROUP_MEMBER_ADDING_ACTION_TYPE.CONTACTS_PICKER_OPENED,
          });
        }),
        (t.contactsLoaded = function (t) {
          var e = t.suggestions;
          ((this.$4 = e),
            this.$5({
              groupMemberAddingActionType: o(
                "WAWebWamEnumGroupMemberAddingActionType",
              ).GROUP_MEMBER_ADDING_ACTION_TYPE.CONTACTS_LOADED,
              groupMemberAddingMemberType: c(e.contacts),
              suggestedContactsCount: e.contacts.length,
            }));
        }),
        (t.contactSelectionChanged = function (t) {
          var e = t.contact,
            n = t.selected,
            r = this.$4,
            o = r.contacts,
            a = r.frequentContacts,
            i = r.recentContacts,
            l = o.indexOf(e);
          this.$5({
            groupMemberAddingActionType: s({
              isSuggested: l !== -1,
              selected: n,
            }),
            frequentlyContactedIndex: u(a, e),
            groupMemberAddingMemberType: c([e]),
            recentlyContactedIndex: u(i, e),
            suggestedContactsCount: o.length,
            suggestedContactsIndex: l,
          });
        }),
        (t.addButtonClicked = function (t) {
          var e = t.selectedContacts;
          this.$5({
            groupMemberAddingActionType: o(
              "WAWebWamEnumGroupMemberAddingActionType",
            ).GROUP_MEMBER_ADDING_ACTION_TYPE.GROUP_MEMBER_ADD_BUTTON_CLICKED,
            groupMemberAddingMemberType: c(e),
            selectedMemberCnt: e.length,
          });
        }),
        (t.backButtonClicked = function (t) {
          var e = t.selectedContacts;
          this.$5({
            groupMemberAddingActionType: o(
              "WAWebWamEnumGroupMemberAddingActionType",
            ).GROUP_MEMBER_ADDING_ACTION_TYPE
              .MEMBER_SELECTOR_BACK_BUTTON_CLICKED,
            groupMemberAddingMemberType: c(e),
          });
        }),
        (t.discardDialogShown = function () {
          this.$5({
            groupMemberAddingActionType: o(
              "WAWebWamEnumGroupMemberAddingActionType",
            ).GROUP_MEMBER_ADDING_ACTION_TYPE
              .MEMBER_SELECTOR_BACK_DISCARD_CONFIRM_DIALOG_SHOWN,
          });
        }),
        (t.discardDialogDiscardClicked = function () {
          this.$5({
            groupMemberAddingActionType: o(
              "WAWebWamEnumGroupMemberAddingActionType",
            ).GROUP_MEMBER_ADDING_ACTION_TYPE
              .MEMBER_SELECTOR_BACK_DISCARD_CONFIRM_DIALOG_DISCARD_CLICKED,
          });
        }),
        (t.discardDialogCancelClicked = function () {
          this.$5({
            groupMemberAddingActionType: o(
              "WAWebWamEnumGroupMemberAddingActionType",
            ).GROUP_MEMBER_ADDING_ACTION_TYPE
              .MEMBER_SELECTOR_BACK_DISCARD_CONFIRM_DIALOG_CANCEL_CLICKED,
          });
        }),
        (t.$5 = function (t) {
          var e;
          r("gkx")("24148") &&
            new (o(
              "WAWebGroupMemberAddingUserJourneyWamEvent",
            ).GroupMemberAddingUserJourneyWamEvent)(
              babelHelpers.extends({}, t, {
                groupAddMemberEntryPoint: this.$2,
                isAdmin: this.$3,
                uiSurface: o("WAWebWamEnumTsSurface").TS_SURFACE
                  .GROUP_MEMBER_ADD_EXISTING_GROUP,
                unifiedSessionId:
                  (e = o(
                    "WAWebUnifiedSession",
                  ).UnifiedSessionManager.getSessionId()) != null
                    ? e
                    : void 0,
                userJourneyEventMs: o("WATimeUtils").unixTimeMs(),
                userJourneyFunnelId: this.$1,
              }),
            ).commit();
        }),
        e
      );
    })();
    function s(e) {
      var t = e.isSuggested,
        n = e.selected;
      return t
        ? n
          ? o("WAWebWamEnumGroupMemberAddingActionType")
              .GROUP_MEMBER_ADDING_ACTION_TYPE.CONTACT_SUGGESTED_CLICKED
          : o("WAWebWamEnumGroupMemberAddingActionType")
              .GROUP_MEMBER_ADDING_ACTION_TYPE.CONTACT_SUGGESTED_UNCLICKED
        : n
          ? o("WAWebWamEnumGroupMemberAddingActionType")
              .GROUP_MEMBER_ADDING_ACTION_TYPE.CONTACT_NOT_SUGGESTED_CLICKED
          : o("WAWebWamEnumGroupMemberAddingActionType")
              .GROUP_MEMBER_ADDING_ACTION_TYPE.CONTACT_NOT_SUGGESTED_UNCLICKED;
    }
    function u(e, t) {
      var n = e.indexOf(t);
      return n === -1 ? void 0 : n;
    }
    function c(e) {
      var t;
      return (t = e
        .map(function (e) {
          return d(e);
        })
        .find(function (e) {
          return (
            e !==
            o("WAWebWamEnumGroupMemberAddingMemberType")
              .GROUP_MEMBER_ADDING_MEMBER_TYPE.WA_USER
          );
        })) != null
        ? t
        : o("WAWebWamEnumGroupMemberAddingMemberType")
            .GROUP_MEMBER_ADDING_MEMBER_TYPE.WA_USER;
    }
    function d(e) {
      return o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e.id)
        ? o("WAWebWamEnumGroupMemberAddingMemberType")
            .GROUP_MEMBER_ADDING_MEMBER_TYPE.TEE_BOT
        : o("WAWebBotUtils").isMetaAiBot(e.id)
          ? o("WAWebWamEnumGroupMemberAddingMemberType")
              .GROUP_MEMBER_ADDING_MEMBER_TYPE.OPEN_META_AI
          : o("WAWebWamEnumGroupMemberAddingMemberType")
              .GROUP_MEMBER_ADDING_MEMBER_TYPE.WA_USER;
    }
    l.default = e;
  },
  98,
);
