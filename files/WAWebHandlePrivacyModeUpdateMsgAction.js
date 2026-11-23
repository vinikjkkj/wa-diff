__d(
  "WAWebHandlePrivacyModeUpdateMsgAction",
  [
    "WAWebApiChatCommon",
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      var r;
      if (
        (n === void 0 && (n = {}),
        !(!e.isUserNotPSA() || e.isCAPISupportAccount()))
      ) {
        var a = await s(e, n.chat);
        if (
          a != null &&
          a.isBusiness !== !1 &&
          !(a.privacyMode == null && t == null) &&
          !(
            a.privacyMode != null &&
            t != null &&
            a.privacyMode.privacyModeTs >= t.privacyModeTs
          )
        ) {
          var i = n,
            l = i.bypassVerifiedNameUpdate,
            u = l === void 0 ? !1 : l,
            c = {
              isBusiness: (r = a.isBusiness) != null ? r : !1,
              privacyMode: a.privacyMode,
            },
            d = { isBusiness: !0, privacyMode: t };
          (e.isUser() &&
            o("WAWebBackendApi").frontendFireAndForget("updateBusinessInfo", {
              contactId: e,
              businessInfo: {
                isBusiness: !0,
                isEnterprise: !0,
                privacyMode: t,
              },
            }),
            await Promise.all([
              u
                ? null
                : o(
                    "WAWebApiVerifiedBusinessName",
                  ).createOrUpdateVerifiedBusinessNameLidAware(
                    e,
                    {
                      isApi: !0,
                      isSmb: !1,
                      privacyMode: t
                        ? {
                            actualActors: t.actualActors,
                            hostStorage: t.hostStorage,
                            privacyModeTs: t.privacyModeTs,
                          }
                        : null,
                    },
                    o("WAWebApiVerifiedBusinessName")
                      .VerifiedBusinessNameUpdateType.Merge,
                  ),
              o("WAWebBackendApi").frontendFireAndForget(
                "generateAndUpdatePrivacySystemMessages",
                {
                  userJid: o("WAWebWidToJid").widToUserJid(e),
                  previousState: c,
                  currentState: d,
                  shouldRunMATonWid: n.shouldRunMATonWid,
                },
              ),
            ]));
        }
      }
    }
    async function s(e, t) {
      if (t != null) {
        var n = t.contact.isBusiness;
        return { isBusiness: n, privacyMode: n ? t.contact.privacyMode : null };
      }
      var r = await Promise.all([
          o("WAWebApiChatCommon").getChatRecord(e),
          o(
            "WAWebApiVerifiedBusinessName",
          ).getVerifiedBusinessNameRecordLidAware(e),
        ]),
        a = r[0],
        i = r[1];
      return a == null
        ? null
        : i == null
          ? { isBusiness: null }
          : {
              isBusiness: !0,
              privacyMode:
                i.privacyMode == null
                  ? null
                  : o(
                      "WAWebApiVerifiedBusinessName",
                    ).convertPrivacyModeFromStorageType(i.privacyMode),
            };
    }
    ((l.handlePrivacyModeTransition = e), (l.getChatInfo = s));
  },
  98,
);
