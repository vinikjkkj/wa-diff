__d(
  "WAWebOutContactLoggingUtils",
  [
    "WAWebCompanionInviteContactWamEvent",
    "WAWebContactCollection",
    "WAWebOutContactCollection",
    "WAWebOutContactInviteJourney",
    "WAWebOutContactInviteUtils",
    "WAWebWamEnumCompanionInviteActionType",
    "WAWebWamEnumCompanionInviteMethodType",
    "WAWebWamEnumCompanionInviteOriginType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e != null
        ? o("WAWebWamEnumCompanionInviteOriginType")
            .COMPANION_INVITE_ORIGIN_TYPE.GROUPS_CREATE_PARTICIPANT_SELECTOR
        : t
          ? o("WAWebWamEnumCompanionInviteOriginType")
              .COMPANION_INVITE_ORIGIN_TYPE.CONTACT_PICKER_SEARCH
          : o("WAWebWamEnumCompanionInviteOriginType")
              .COMPANION_INVITE_ORIGIN_TYPE.CONTACT_PICKER_LIST;
    }
    function s(e) {
      var t,
        n = e.entryPoint,
        r = e.inviteCodeError,
        a = e.validInviteCode;
      new (o(
        "WAWebCompanionInviteContactWamEvent",
      ).CompanionInviteContactWamEvent)(
        babelHelpers.extends(
          {},
          p(),
          {
            companionInviteMethod: o("WAWebWamEnumCompanionInviteMethodType")
              .COMPANION_INVITE_METHOD_TYPE.NATIVE_SMS,
            companionInviteOrigin: n,
            companionInviteSessionId:
              (t = o(
                "WAWebOutContactInviteJourney",
              ).getOutContactInviteSessionId()) != null
                ? t
                : o(
                    "WAWebOutContactInviteJourney",
                  ).createCompanionInviteSessionId(),
            companionInviteAction: o("WAWebWamEnumCompanionInviteActionType")
              .COMPANION_INVITE_ACTION_TYPE.INVITE_SEND,
            companionValidInviteCode: a,
          },
          r != null ? { companionInviteCodeError: r } : {},
        ),
      ).commit();
    }
    function u(e) {
      var t = e.entryPoint,
        n = o("WAWebOutContactInviteJourney").getOutContactInviteSessionId();
      new (o(
        "WAWebCompanionInviteContactWamEvent",
      ).CompanionInviteContactWamEvent)(
        babelHelpers.extends(
          {},
          p(),
          {
            companionInviteMethod: o("WAWebWamEnumCompanionInviteMethodType")
              .COMPANION_INVITE_METHOD_TYPE.NATIVE_SMS,
            companionInviteOrigin: t,
            companionInviteAction: o("WAWebWamEnumCompanionInviteActionType")
              .COMPANION_INVITE_ACTION_TYPE.IMPRESSION,
          },
          n != null ? { companionInviteSessionId: n } : {},
        ),
      ).commit();
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.entryPoint,
            n = e.groupJid,
            r = e.sessionId,
            a = e.validNumbers,
            i = yield o("WAWebOutContactInviteUtils").storeMultiGroupInviteSms(
              n,
              a,
              t,
            );
          a.forEach(function (e, n) {
            var o = i[n];
            m({
              entryPoint: t,
              inviteCodeError: o != null ? o.toString() : void 0,
              sessionId: r,
            });
          });
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      var t,
        n = e.entryPoint,
        r = e.inviteCodeError,
        a = e.sessionId;
      new (o(
        "WAWebCompanionInviteContactWamEvent",
      ).CompanionInviteContactWamEvent)(
        babelHelpers.extends(
          {},
          p(),
          {
            companionInviteMethod: o("WAWebWamEnumCompanionInviteMethodType")
              .COMPANION_INVITE_METHOD_TYPE.NATIVE_SMS,
            companionInviteOrigin: n,
            companionInviteAction: o("WAWebWamEnumCompanionInviteActionType")
              .COMPANION_INVITE_ACTION_TYPE.INVITE_SEND,
            companionInviteSessionId:
              (t =
                a != null
                  ? a
                  : o(
                      "WAWebOutContactInviteJourney",
                    ).getOutContactInviteSessionId()) != null
                ? t
                : o(
                    "WAWebOutContactInviteJourney",
                  ).createCompanionInviteSessionId(),
          },
          r != null ? { companionInviteCodeError: r } : {},
        ),
      ).commit();
    }
    function p() {
      var e = o("WAWebContactCollection").ContactCollection.length,
        t = e + o("WAWebOutContactCollection").OutContactCollection.length;
      return {
        companionInviteNumContactsAddressBook: t,
        companionInviteNumContactsWa: e,
      };
    }
    ((l.getOutContactEntryPoint = e),
      (l.logOneToOneInviteContact = s),
      (l.logOutContactImpression = u),
      (l.logMultiGroupInviteContacts = c),
      (l.logGroupInviteContact = m));
  },
  98,
);
