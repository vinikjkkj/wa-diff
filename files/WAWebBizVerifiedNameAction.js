__d(
  "WAWebBizVerifiedNameAction",
  [
    "Promise",
    "WAWebBizUpdateContactsWithVerifiedNamesAction",
    "WAWebChatCollection",
    "WAWebFrontendChatGetters",
    "WAWebHandleBusinessNameChangeLidHelpers",
    "WAWebHandlePrivacyModeUpdateMsgAction",
    "WAWebSchemaVerifiedBusinessName",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length !== 0) {
            yield (e || (e = n("Promise"))).all(
              t.map(function (e) {
                var t = e.id,
                  n = e.verifiedName,
                  r = n == null ? void 0 : n.privacyMode;
                if (r != null) {
                  var a = o(
                    "WAWebChatCollection",
                  ).ChatCollection.getLatestChatForWid(t);
                  if (
                    !(
                      a == null ||
                      o("WAWebFrontendChatGetters").getShouldAppearInList(a) ===
                        !0
                    )
                  )
                    return o(
                      "WAWebHandlePrivacyModeUpdateMsgAction",
                    ).handlePrivacyModeTransition(a.id, r, {
                      chat: a,
                      bypassVerifiedNameUpdate: !0,
                      shouldRunMATonWid: !1,
                    });
                }
              }),
            );
            var a = o(
                "WAWebHandleBusinessNameChangeLidHelpers",
              ).getVerifiedNamesToUpdateLidAware(t),
              i = r("compactMap")(a, function (e) {
                var t = e.id,
                  n = e.verifiedName;
                if (n == null) return null;
                var r = n.isApi,
                  o = n.isSmb,
                  a = n.level,
                  i = n.name,
                  l = n.privacyMode,
                  s = n.serial;
                return {
                  id: t.isLid() ? t.toString() : t.user,
                  level: a,
                  serial: s,
                  name: i,
                  isApi: r,
                  isSmb: o,
                  privacyMode: l
                    ? {
                        actualActors: l.actualActors,
                        hostStorage: l.hostStorage,
                        privacyModeTs: l.privacyModeTs,
                      }
                    : null,
                };
              });
            (yield o("WAWebSchemaVerifiedBusinessName")
              .getVerifiedBusinessNameTable()
              .bulkCreateOrReplace(i),
              yield o(
                "WAWebBizUpdateContactsWithVerifiedNamesAction",
              ).applyContactBusinessProps());
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.handleVerifiedNameSync = s;
  },
  98,
);
