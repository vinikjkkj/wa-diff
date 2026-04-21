__d(
  "WAWebContactLogging",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebCompanionsContactEventWamEvent",
    "WAWebNativeContactsNuxEventWamEvent",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebPrimaryFeaturesModel",
    "WAWebSaveContactAction",
    "WAWebWamEnumAddContactActionType",
    "WAWebWamEnumCompanionAddContactEventType",
    "WAWebWamEnumCompanionAddContactSource",
    "WAWebWamEnumCompanionContactSaveResult",
    "WAWebWamEnumNativeContactsNuxEntryPoint",
    "WAWebWamEnumNativeContactsNuxEventType",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum").Mirrored([
        "NewChat",
        "ContactInfo",
        "GroupMemberInfo",
        "VCard",
        "ChatHeaderMenu",
        "ChatListMenu",
        "FMXCard",
        "MessageContextMenu",
        "NewChatDrawer",
      ]);
    function u(e) {
      switch (e) {
        case s.NewChat:
          return "NEW_CHAT";
        case s.NewChatDrawer:
          return "NEW_CHAT_DRAWER";
        case s.ContactInfo:
        case s.GroupMemberInfo:
        case s.ChatHeaderMenu:
          return "CONTACT_INFO";
        case s.ChatListMenu:
          return "CONTACT_LIST";
        case s.FMXCard:
          return "FMX_CARD";
        case s.MessageContextMenu:
          return "CONTACT_INFO";
        case s.VCard:
          return "VCARD";
      }
    }
    var c = (function () {
      function e(e, t) {
        ((this.sessionId = r("WAWebPonyfillsCryptoRandomUUID")()),
          (this.source = u(e)),
          (this.eventType =
            this.source === "CONTACT_INFO" ? "EDIT" : "CREATE_NEW"),
          (this.contactData = t));
      }
      var t = e.prototype;
      return (
        (t.$1 = function (t) {
          var e,
            n = new (o(
              "WAWebCompanionsContactEventWamEvent",
            ).CompanionsContactEventWamEvent)({
              companionAddContactSessionId: this.sessionId,
              companionAddContactSource: o(
                "WAWebWamEnumCompanionAddContactSource",
              ).COMPANION_ADD_CONTACT_SOURCE[this.source],
              companionAddContactEventType: o(
                "WAWebWamEnumCompanionAddContactEventType",
              ).COMPANION_ADD_CONTACT_EVENT_TYPE[this.eventType],
              companionIsContactSyncToOs:
                (e = this.contactData) == null ? void 0 : e.syncToAddressbook,
            });
          return (
            t &&
              ((n.companionHasUsername = this.$2()),
              (n.companionHasPhoneNumber = this.$3())),
            n
          );
        }),
        (t.$4 = function (t) {
          var e = "SUCCESS";
          return (
            t != null &&
              (t instanceof o("WAWebBackendErrors").ServerStatusCodeError
                ? (e = "USYNC_UNAVAILABLE")
                : t instanceof o("WAWebSaveContactAction").NetworkUnavailable
                  ? (e = "NETWORK_UNAVAILABLE")
                  : (e = "CLIENT_ERROR")),
            o("WAWebWamEnumCompanionContactSaveResult")
              .COMPANION_CONTACT_SAVE_RESULT[e]
          );
        }),
        (t.logOpen = function () {
          var e = this.$1(!0);
          ((e.companionAddContactActionType = o(
            "WAWebWamEnumAddContactActionType",
          ).ADD_CONTACT_ACTION_TYPE.OPEN),
            e.commit());
        }),
        (t.logCancel = function () {
          var e = this.$1(!0);
          ((e.companionAddContactActionType = o(
            "WAWebWamEnumAddContactActionType",
          ).ADD_CONTACT_ACTION_TYPE.CANCEL),
            e.commit());
        }),
        (t.logDelete = function (t) {
          var e = this.$1(!0);
          ((e.companionContactSaveResult = this.$4(t)),
            (e.companionAddContactActionType = o(
              "WAWebWamEnumAddContactActionType",
            ).ADD_CONTACT_ACTION_TYPE.DELETE),
            e.commit());
        }),
        (t.logSave = function (t) {
          var e = t.error,
            n = t.firstName,
            r = t.lastName,
            a = t.phoneNumberAutofilled,
            i = t.syncToAddressbook,
            l = t.usernameAutofilled,
            s = t.usernameEdited,
            u = this.$1(!0);
          ((u.companionContactSaveResult = this.$4(e)),
            (u.companionAddContactActionType = o(
              "WAWebWamEnumAddContactActionType",
            ).ADD_CONTACT_ACTION_TYPE.SAVE),
            s != null && (u.companionUsernameEdited = s),
            l != null && (u.companionUsernameAutofilled = l),
            a != null && (u.companionPhNumberAutofilled = a));
          var c = this.contactData;
          (c &&
            ((u.companionFnameEdited = n !== c.firstName),
            (u.companionLnameEdited = r !== c.lastName),
            (u.companionSyncSettingChanged = i !== c.syncToAddressbook)),
            u.commit());
        }),
        (t.logDuplicate = function () {
          var e = this.$1();
          ((e.companionAddContactActionType = o(
            "WAWebWamEnumAddContactActionType",
          ).ADD_CONTACT_ACTION_TYPE.CREATE_DUPLICATE),
            e.commit());
        }),
        (t.logUsernameKeyRequired = function () {
          var e = this.$1(!0);
          ((e.companionAddContactActionType = o(
            "WAWebWamEnumAddContactActionType",
          ).ADD_CONTACT_ACTION_TYPE.SAVE),
            (e.companionContactSaveResult = o(
              "WAWebWamEnumCompanionContactSaveResult",
            ).COMPANION_CONTACT_SAVE_RESULT.PIN_REQUIRED),
            e.commit());
        }),
        (t.logUsernameKeySubmit = function (t) {
          var e = this.$1(!0);
          ((e.companionAddContactActionType = o(
            "WAWebWamEnumAddContactActionType",
          ).ADD_CONTACT_ACTION_TYPE.PIN_SUBMIT),
            (e.companionContactSaveResult = t
              ? o("WAWebWamEnumCompanionContactSaveResult")
                  .COMPANION_CONTACT_SAVE_RESULT.SUCCESS
              : o("WAWebWamEnumCompanionContactSaveResult")
                  .COMPANION_CONTACT_SAVE_RESULT.WRONG_PIN),
            e.commit());
        }),
        (t.logInvalidUsername = function () {
          var e = this.$1(!0);
          ((e.companionAddContactActionType = o(
            "WAWebWamEnumAddContactActionType",
          ).ADD_CONTACT_ACTION_TYPE.SAVE),
            (e.companionContactSaveResult = o(
              "WAWebWamEnumCompanionContactSaveResult",
            ).COMPANION_CONTACT_SAVE_RESULT.INVALID_USERNAME),
            e.commit());
        }),
        (t.logUsernameAndPnMismatch = function () {
          var e = this.$1(!0);
          ((e.companionAddContactActionType = o(
            "WAWebWamEnumAddContactActionType",
          ).ADD_CONTACT_ACTION_TYPE.SAVE),
            (e.companionContactSaveResult = o(
              "WAWebWamEnumCompanionContactSaveResult",
            ).COMPANION_CONTACT_SAVE_RESULT.PHONE_NUMBER_USERNAME_NOT_MATCH),
            e.commit());
        }),
        (t.$2 = function () {
          var e;
          return !r("isStringNullOrEmpty")(
            (e = this.contactData) == null ? void 0 : e.username,
          );
        }),
        (t.$3 = function () {
          var e;
          return (
            ((e = this.contactData) == null ? void 0 : e.phoneNumber) != null
          );
        }),
        e
      );
    })();
    function d(e) {
      switch (e) {
        case s.NewChat:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.NEW_CONTACT;
        case s.ContactInfo:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.CONTACT_HEADER;
        case s.GroupMemberInfo:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.GROUP;
        case s.VCard:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.SHARED_CONTACT;
        case s.ChatHeaderMenu:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.CHAT;
        case s.ChatListMenu:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.CONVERSATION_ROW;
        case s.FMXCard:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.CHAT;
        case s.MessageContextMenu:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.CHAT;
        case s.NewChatDrawer:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.NEW_CHAT_SEARCH;
      }
    }
    function m(t) {
      var n;
      if (
        (o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .primaryHasAgreedToNativeContactsNux
          ? o("WAWebPrimaryFeaturesModel").PrimaryFeatures.isContactsBackupOn ||
            (n = o("WAWebWamEnumNativeContactsNuxEventType")
              .NATIVE_CONTACTS_NUX_EVENT_TYPE
              .VIEW_MANAGE_CONTACTS_FROM_COMPANION_NATIVE_CONTACTS_SETTING_OFF)
          : (n = o("WAWebWamEnumNativeContactsNuxEventType")
              .NATIVE_CONTACTS_NUX_EVENT_TYPE
              .VIEW_MANAGE_CONTACTS_FROM_COMPANION),
        !n)
      ) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[contact logging] NUX eventType cannot be null",
            ])),
        );
        return;
      }
      var r = new (o(
        "WAWebNativeContactsNuxEventWamEvent",
      ).NativeContactsNuxEventWamEvent)({
        nativeContactsNuxEntryPoint: d(t),
        nativeContactsNuxEventType: n,
      });
      r.commit();
    }
    ((l.ContactSourceType = s),
      (l.AddContactEvent = c),
      (l.logViewNativeContactNux = m));
  },
  98,
);
