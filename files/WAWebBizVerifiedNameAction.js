__d(
  "WAWebBizVerifiedNameAction",
  [
    "WAWebBizUpdateContactsWithVerifiedNamesAction",
    "WAWebChatCollection",
    "WAWebFrontendChatGetters",
    "WAWebHandleBusinessNameChangeLidHelpers",
    "WAWebHandlePrivacyModeUpdateMsgAction",
    "WAWebSchemaVerifiedBusinessName",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (e.length !== 0) {
        await Promise.all(
          e.map(function (e) {
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
                  o("WAWebFrontendChatGetters").getShouldAppearInList(a) === !0
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
        var t = o(
            "WAWebHandleBusinessNameChangeLidHelpers",
          ).getVerifiedNamesToUpdateLidAware(e),
          n = r("compactMap")(t, function (e) {
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
        (await o("WAWebSchemaVerifiedBusinessName")
          .getVerifiedBusinessNameTable()
          .bulkCreateOrReplace(n),
          await o(
            "WAWebBizUpdateContactsWithVerifiedNamesAction",
          ).applyContactBusinessProps());
      }
    }
    l.handleVerifiedNameSync = e;
  },
  98,
);
