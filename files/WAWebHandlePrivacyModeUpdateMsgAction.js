__d(
  "WAWebHandlePrivacyModeUpdateMsgAction",
  [
    "Promise",
    "WAWebApiChatCommon",
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          var i;
          if (
            (a === void 0 && (a = {}),
            !(!t.isUserNotPSA() || t.isCAPISupportAccount()))
          ) {
            var l = yield c(t, a.chat);
            if (
              l != null &&
              l.isBusiness !== !1 &&
              !(l.privacyMode == null && r == null) &&
              !(
                l.privacyMode != null &&
                r != null &&
                l.privacyMode.privacyModeTs >= r.privacyModeTs
              )
            ) {
              var s = a,
                u = s.bypassVerifiedNameUpdate,
                d = u === void 0 ? !1 : u,
                m = {
                  isBusiness: (i = l.isBusiness) != null ? i : !1,
                  privacyMode: l.privacyMode,
                },
                p = { isBusiness: !0, privacyMode: r };
              (t.isUser() &&
                o("WAWebBackendApi").frontendFireAndForget(
                  "updateBusinessInfo",
                  {
                    contactId: t,
                    businessInfo: {
                      isBusiness: !0,
                      isEnterprise: !0,
                      privacyMode: r,
                    },
                  },
                ),
                yield (e || (e = n("Promise"))).all([
                  d
                    ? null
                    : o(
                        "WAWebApiVerifiedBusinessName",
                      ).createOrUpdateVerifiedBusinessNameLidAware(
                        t,
                        {
                          isApi: !0,
                          isSmb: !1,
                          privacyMode: r
                            ? {
                                actualActors: r.actualActors,
                                hostStorage: r.hostStorage,
                                privacyModeTs: r.privacyModeTs,
                              }
                            : null,
                        },
                        o("WAWebApiVerifiedBusinessName")
                          .VerifiedBusinessNameUpdateType.Merge,
                      ),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "generateAndUpdatePrivacySystemMessages",
                    {
                      userJid: o("WAWebWidToJid").widToUserJid(t),
                      previousState: m,
                      currentState: p,
                      shouldRunMATonWid: a.shouldRunMATonWid,
                    },
                  ),
                ]));
            }
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          if (r != null) {
            var a = r.contact.isBusiness;
            return {
              isBusiness: a,
              privacyMode: a ? r.contact.privacyMode : null,
            };
          }
          var i = yield (e || (e = n("Promise"))).all([
              o("WAWebApiChatCommon").getChatRecord(t),
              o(
                "WAWebApiVerifiedBusinessName",
              ).getVerifiedBusinessNameRecordLidAware(t),
            ]),
            l = i[0],
            s = i[1];
          return l == null
            ? null
            : s == null
              ? { isBusiness: null }
              : {
                  isBusiness: !0,
                  privacyMode:
                    s.privacyMode == null
                      ? null
                      : o(
                          "WAWebApiVerifiedBusinessName",
                        ).convertPrivacyModeFromStorageType(s.privacyMode),
                };
        })),
        d.apply(this, arguments)
      );
    }
    ((l.handlePrivacyModeTransition = s), (l.getChatInfo = c));
  },
  98,
);
