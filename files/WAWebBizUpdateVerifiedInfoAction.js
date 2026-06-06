__d(
  "WAWebBizUpdateVerifiedInfoAction",
  [
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebHandlePrivacyModeUpdateMsgAction",
    "WAWebQueryExistsJob",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = t.isApi,
        r = t.isSmb,
        a = t.level,
        i = t.name,
        l = t.privacyMode,
        s = t.serial;
      (l != null &&
        (await o(
          "WAWebHandlePrivacyModeUpdateMsgAction",
        ).handlePrivacyModeTransition(e, l, { bypassVerifiedNameUpdate: !0 })),
        o("WAWebBackendApi").frontendFireAndForget(
          "updateContactWithVerifiedName",
          {
            contactId: o("WAWebWidToJid").widToUserJid(e),
            verifiedNameInfo: {
              name: i,
              level: a,
              isApi: n,
              isSmb: r,
              privacyMode: l,
            },
          },
        ),
        await o(
          "WAWebApiVerifiedBusinessName",
        ).createOrUpdateVerifiedBusinessNameLidAware(e, {
          level: a,
          serial: s,
          name: i,
          isApi: n,
          isSmb: r,
          privacyMode: l
            ? {
                actualActors: l.actualActors,
                hostStorage: l.hostStorage,
                privacyModeTs: l.privacyModeTs,
              }
            : null,
        }));
    }
    async function s(t, n) {
      var r = await o("WAWebQueryExistsJob").queryWidExists(t, n);
      if (r != null) {
        var a = r.bizInfo;
        a && (await e(t, a.verifiedName));
      }
    }
    ((l.updateVerifiedInfo = e),
      (l.queryAndUpdateContactPropertiesOnNewChat = s));
  },
  98,
);
