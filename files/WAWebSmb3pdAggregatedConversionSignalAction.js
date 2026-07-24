__d(
  "WAWebSmb3pdAggregatedConversionSignalAction",
  [
    "WAJids",
    "WALogger",
    "WAWebCTWADataSharingModel",
    "WAWebCTWAGatingUtils",
    "WAWebChatThreadLogging",
    "WAWebCommonCTWADataSharing",
    "WAWebConversionTupleCollection",
    "WAWebCtwa3pdAggregatedConversionWamEvent",
    "WAWebDataSharing3pdLidCollection",
    "WAWebLidMigrationUtils",
    "WAWebWamEnumCtwaDirectionFrom",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1;
    function c(t, n, a, i) {
      var l,
        c,
        d = r("WAWebCommonCTWADataSharing").getReceivedCTWAEligibilityFromChat(
          t,
        );
      if (
        !(d == null || !d.is3pdag) &&
        r("WAWebCommonCTWADataSharing").isGlobalDataSharingAccepted(
          o("WAWebCTWADataSharingModel").CTWADataSharingModel.getValue(),
          o("WAWebCTWADataSharingModel").CTWADataSharingModel.getVersion(),
        ) &&
        !(
          t.accountLid == null ||
          !o(
            "WAWebDataSharing3pdLidCollection",
          ).DataSharing3pdLidCollection.isDataSharingEnabled(
            t.accountLid.toString(),
          )
        )
      ) {
        var m = r("WAWebConversionTupleCollection").get(t.id),
          p = (l = m == null ? void 0 : m.conversationDepth) != null ? l : 0;
        if (
          !(
            i ===
              o("WAWebWamEnumCtwaDirectionFrom").CTWA_DIRECTION_FROM.CUSTOMER &&
            p === 0
          ) &&
          o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()
        ) {
          var _ = m == null ? void 0 : m.sourceId;
          if (!(_ == null || _ === "")) {
            var f = r("WAWebCommonCTWADataSharing").getCTWASignalsValueFromChat(
                t,
              ),
              g =
                (c = m == null ? void 0 : m.conversationRepeat) != null ? c : 0,
              h = o("WAWebLidMigrationUtils").toPn(t.id);
            if (h == null) {
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[ctwa] log3pdAggregatedConversionSignal: no PN for chat",
                    ])),
                )
                .sendLogs("ctwa-3pd-aggregated-no-pn");
              return;
            }
            var y = o("WAJids").toPhoneUserJid(h.user);
            o("WAWebChatThreadLogging")
              .getCtwa3pdAggregatedThreadIDHMAC(y)
              .then(function (e) {
                var t = {
                  adId: _,
                  threadIdHmac: e != null ? e : void 0,
                  ctwa3pdConversionType: n,
                  ctwa3pdConversionSubtype: a,
                  ctwa3pdSurfaceType: "thread",
                  ctwaDirectionFrom: i,
                  ctwaConversationDepth: p,
                  ctwaConversationRepeat: g,
                  ctwa3pdAggregatedSchemaVersion: u,
                  ctwaSignals: f != null ? f : void 0,
                };
                new (o(
                  "WAWebCtwa3pdAggregatedConversionWamEvent",
                ).Ctwa3pdAggregatedConversionWamEvent)(t).commit();
              })
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[ctwa] log3pdAggregatedConversionSignal failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("ctwa-3pd-aggregated-conversion-failed");
              });
          }
        }
      }
    }
    l.log3pdAggregatedConversionSignal = c;
  },
  98,
);
