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
    "WAWebUsernameGatingUtils",
    "WAWebWamEnumAddContactActionType",
    "WAWebWamEnumCompanionAddContactEventType",
    "WAWebWamEnumCompanionAddContactSource",
    "WAWebWamEnumCompanionContactSaveResult",
    "WAWebWamEnumNativeContactsNuxEntryPoint",
    "WAWebWamEnumNativeContactsNuxEventType",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum").Mirrored([
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
    function c(e) {
      switch (e) {
        case u.NewChat:
          return "NEW_CHAT";
        case u.NewChatDrawer:
          return "NEW_CHAT_DRAWER";
        case u.ContactInfo:
        case u.GroupMemberInfo:
        case u.ChatHeaderMenu:
          return "CONTACT_INFO";
        case u.ChatListMenu:
          return "CONTACT_LIST";
        case u.FMXCard:
          return "FMX_CARD";
        case u.MessageContextMenu:
          return "CONTACT_INFO";
        case u.VCard:
          return "VCARD";
      }
    }
    var d = (function () {
      function t(e, t) {
        ((this.sessionId = r("WAWebPonyfillsCryptoRandomUUID")()),
          (this.source = c(e)),
          (this.eventType =
            this.source === "CONTACT_INFO" ? "EDIT" : "CREATE_NEW"),
          (this.contactData = t));
      }
      var n = t.prototype;
      return (
        (n.$1 = function (t) {
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
        (n.$4 = function (t) {
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
        (n.$5 = function (n, a) {
          this.$4(a) ===
            o("WAWebWamEnumCompanionContactSaveResult")
              .COMPANION_CONTACT_SAVE_RESULT.CLIENT_ERROR &&
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[contact] client-err act=",
                    " src=",
                    " usync_lid=",
                    "",
                  ])),
                n,
                this.source,
                o("WAWebUsernameGatingUtils").usernameContactUsyncLidBased(),
              )
              .catching(r("getErrorSafe")(a))
              .sendLogs("companion-contact-client-error-" + n);
        }),
        (n.logOpen = function () {
          var e = this.$1(!0);
          ((e.companionAddContactActionType = o(
            "WAWebWamEnumAddContactActionType",
          ).ADD_CONTACT_ACTION_TYPE.OPEN),
            e.commit());
        }),
        (n.logCancel = function () {
          var e = this.$1(!0);
          ((e.companionAddContactActionType = o(
            "WAWebWamEnumAddContactActionType",
          ).ADD_CONTACT_ACTION_TYPE.CANCEL),
            e.commit());
        }),
        (n.logDelete = function (t) {
          var e = this.$1(!0);
          ((e.companionContactSaveResult = this.$4(t)),
            (e.companionAddContactActionType = o(
              "WAWebWamEnumAddContactActionType",
            ).ADD_CONTACT_ACTION_TYPE.DELETE),
            e.commit(),
            this.$5("delete", t));
        }),
        (n.logSave = function (t) {
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
            u.commit(),
            this.$5("save", e));
        }),
        (n.logDuplicate = function () {
          var e = this.$1();
          ((e.companionAddContactActionType = o(
            "WAWebWamEnumAddContactActionType",
          ).ADD_CONTACT_ACTION_TYPE.CREATE_DUPLICATE),
            e.commit());
        }),
        (n.logUsernameKeyRequired = function () {
          var e = this.$1(!0);
          ((e.companionAddContactActionType = o(
            "WAWebWamEnumAddContactActionType",
          ).ADD_CONTACT_ACTION_TYPE.SAVE),
            (e.companionContactSaveResult = o(
              "WAWebWamEnumCompanionContactSaveResult",
            ).COMPANION_CONTACT_SAVE_RESULT.PIN_REQUIRED),
            e.commit());
        }),
        (n.logUsernameKeySubmit = function (t) {
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
        (n.logInvalidUsername = function () {
          var e = this.$1(!0);
          ((e.companionAddContactActionType = o(
            "WAWebWamEnumAddContactActionType",
          ).ADD_CONTACT_ACTION_TYPE.SAVE),
            (e.companionContactSaveResult = o(
              "WAWebWamEnumCompanionContactSaveResult",
            ).COMPANION_CONTACT_SAVE_RESULT.INVALID_USERNAME),
            e.commit());
        }),
        (n.logUsernameAndPnMismatch = function () {
          var e = this.$1(!0);
          ((e.companionAddContactActionType = o(
            "WAWebWamEnumAddContactActionType",
          ).ADD_CONTACT_ACTION_TYPE.SAVE),
            (e.companionContactSaveResult = o(
              "WAWebWamEnumCompanionContactSaveResult",
            ).COMPANION_CONTACT_SAVE_RESULT.PHONE_NUMBER_USERNAME_NOT_MATCH),
            e.commit());
        }),
        (n.$2 = function () {
          var e;
          return !r("isStringNullOrEmpty")(
            (e = this.contactData) == null ? void 0 : e.username,
          );
        }),
        (n.$3 = function () {
          var e;
          return (
            ((e = this.contactData) == null ? void 0 : e.phoneNumber) != null
          );
        }),
        t
      );
    })();
    function m(e) {
      switch (e) {
        case u.NewChat:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.NEW_CONTACT;
        case u.ContactInfo:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.CONTACT_HEADER;
        case u.GroupMemberInfo:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.GROUP;
        case u.VCard:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.SHARED_CONTACT;
        case u.ChatHeaderMenu:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.CHAT;
        case u.ChatListMenu:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.CONVERSATION_ROW;
        case u.FMXCard:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.CHAT;
        case u.MessageContextMenu:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.CHAT;
        case u.NewChatDrawer:
          return o("WAWebWamEnumNativeContactsNuxEntryPoint")
            .NATIVE_CONTACTS_NUX_ENTRY_POINT.NEW_CHAT_SEARCH;
      }
    }
    function p(e) {
      var t;
      if (
        (o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .primaryHasAgreedToNativeContactsNux
          ? o("WAWebPrimaryFeaturesModel").PrimaryFeatures.isContactsBackupOn ||
            (t = o("WAWebWamEnumNativeContactsNuxEventType")
              .NATIVE_CONTACTS_NUX_EVENT_TYPE
              .VIEW_MANAGE_CONTACTS_FROM_COMPANION_NATIVE_CONTACTS_SETTING_OFF)
          : (t = o("WAWebWamEnumNativeContactsNuxEventType")
              .NATIVE_CONTACTS_NUX_EVENT_TYPE
              .VIEW_MANAGE_CONTACTS_FROM_COMPANION),
        !t)
      ) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[contact logging] NUX eventType cannot be null",
            ])),
        );
        return;
      }
      var n = new (o(
        "WAWebNativeContactsNuxEventWamEvent",
      ).NativeContactsNuxEventWamEvent)({
        nativeContactsNuxEntryPoint: m(e),
        nativeContactsNuxEventType: t,
      });
      n.commit();
    }
    ((l.ContactSourceType = u),
      (l.AddContactEvent = d),
      (l.logViewNativeContactNux = p));
  },
  98,
);
