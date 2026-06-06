__d(
  "WAWebBizUpdateVerifiedInfoAction",
  [
    "WAWebApiVerifiedBusinessName",
    "WAWebBackendApi",
    "WAWebHandlePrivacyModeUpdateMsgAction",
    "WAWebQueryExistsJob",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.isApi,
            r = t.isSmb,
            a = t.level,
            i = t.name,
            l = t.privacyMode,
            s = t.serial;
          (l != null &&
            (yield o(
              "WAWebHandlePrivacyModeUpdateMsgAction",
            ).handlePrivacyModeTransition(e, l, {
              bypassVerifiedNameUpdate: !0,
            })),
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
            yield o(
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
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = yield o("WAWebQueryExistsJob").queryWidExists(t, n);
          if (r != null) {
            var a = r.bizInfo;
            a && (yield e(t, a.verifiedName));
          }
        })),
        c.apply(this, arguments)
      );
    }
    ((l.updateVerifiedInfo = e),
      (l.queryAndUpdateContactPropertiesOnNewChat = u));
  },
  98,
);
