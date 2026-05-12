__d(
  "WAWebOutContactLoggingUtils",
  [
    "WAWebCompanionInviteContactWamEvent",
    "WAWebContactCollection",
    "WAWebOutContactCollection",
    "WAWebOutContactInviteUtils",
    "WAWebWamEnumCompanionInviteMethodType",
    "asyncToGeneratorRuntime",
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
          m(),
          {
            companionInviteMethod: o("WAWebWamEnumCompanionInviteMethodType")
              .COMPANION_INVITE_METHOD_TYPE.UNKNOWN,
            companionInviteOrigin: t,
            companionInviteSessionId: d(),
            companionValidInviteCode: r,
          },
          n != null ? { companionInviteCodeError: n } : {},
        ),
      ).commit();
    }
    function s(e, t, n, r) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o(
              "WAWebOutContactInviteUtils",
            ).storeMultiGroupInviteSms(e, t, n);
            t.forEach(function (e, t) {
              var o = a[t];
              c({
                entryPoint: n,
                inviteCodeError: o != null ? o.toString() : void 0,
                sessionId: r,
              });
            });
          },
        )),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      var t = e.entryPoint,
        n = e.inviteCodeError,
        r = e.sessionId;
      new (o(
        "WAWebCompanionInviteContactWamEvent",
      ).CompanionInviteContactWamEvent)(
        babelHelpers.extends(
          {},
          m(),
          {
            companionInviteMethod: o("WAWebWamEnumCompanionInviteMethodType")
              .COMPANION_INVITE_METHOD_TYPE.UNKNOWN,
            companionInviteOrigin: t,
            companionInviteSessionId: r != null ? r : d(),
          },
          n != null ? { companionInviteCodeError: n } : {},
        ),
      ).commit();
    }
    function d() {
      return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    }
    function m() {
      var e = o("WAWebContactCollection").ContactCollection.length,
        t = e + o("WAWebOutContactCollection").OutContactCollection.length;
      return {
        companionInviteNumContactsAddressBook: t,
        companionInviteNumContactsWa: e,
      };
    }
    ((l.logOneToOneInviteContact = e),
      (l.logMultiGroupInviteContacts = s),
      (l.logGroupInviteContact = c),
      (l.createCompanionInviteSessionId = d));
  },
  98,
);
