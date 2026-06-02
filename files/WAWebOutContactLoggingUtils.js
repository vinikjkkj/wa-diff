__d(
  "WAWebOutContactLoggingUtils",
  [
    "WAWebCompanionInviteContactWamEvent",
    "WAWebContactCollection",
    "WAWebOutContactCollection",
    "WAWebOutContactInviteUtils",
    "WAWebWamEnumCompanionInviteMethodType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.entryPoint,
        n = e.inviteCodeError,
        r = e.validInviteCode;
      new (o(
        "WAWebCompanionInviteContactWamEvent",
      ).CompanionInviteContactWamEvent)(
        babelHelpers.extends(
          {},
          d(),
          {
            companionInviteMethod: o("WAWebWamEnumCompanionInviteMethodType")
              .COMPANION_INVITE_METHOD_TYPE.UNKNOWN,
            companionInviteOrigin: t,
            companionInviteSessionId: c(),
            companionValidInviteCode: r,
          },
          n != null ? { companionInviteCodeError: n } : {},
        ),
      ).commit();
    }
    async function s(e, t, n, r) {
      var a = await o("WAWebOutContactInviteUtils").storeMultiGroupInviteSms(
        e,
        t,
        n,
      );
      t.forEach(function (e, t) {
        var o = a[t];
        u({
          entryPoint: n,
          inviteCodeError: o != null ? o.toString() : void 0,
          sessionId: r,
        });
      });
    }
    function u(e) {
      var t = e.entryPoint,
        n = e.inviteCodeError,
        r = e.sessionId;
      new (o(
        "WAWebCompanionInviteContactWamEvent",
      ).CompanionInviteContactWamEvent)(
        babelHelpers.extends(
          {},
          d(),
          {
            companionInviteMethod: o("WAWebWamEnumCompanionInviteMethodType")
              .COMPANION_INVITE_METHOD_TYPE.UNKNOWN,
            companionInviteOrigin: t,
            companionInviteSessionId: r != null ? r : c(),
          },
          n != null ? { companionInviteCodeError: n } : {},
        ),
      ).commit();
    }
    function c() {
      return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }
    function d() {
      var e = o("WAWebContactCollection").ContactCollection.length,
        t = e + o("WAWebOutContactCollection").OutContactCollection.length;
      return {
        companionInviteNumContactsAddressBook: t,
        companionInviteNumContactsWa: e,
      };
    }
    ((l.logOneToOneInviteContact = e),
      (l.logMultiGroupInviteContacts = s),
      (l.logGroupInviteContact = u),
      (l.createCompanionInviteSessionId = c));
  },
  98,
);
