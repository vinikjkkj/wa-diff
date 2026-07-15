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
    "WAWebCtwaConversationDepthUtils",
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
      var l = r(
        "WAWebCommonCTWADataSharing",
      ).getReceivedCTWAEligibilityFromChat(t);
      if (
        !(l == null || !l.is3pdag) &&
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
        var c = o("WAWebCtwaConversationDepthUtils").getCtwaConversationDepth(
          t,
        );
        if (
          !(
            i ===
              o("WAWebWamEnumCtwaDirectionFrom").CTWA_DIRECTION_FROM.CUSTOMER &&
            c === 0
          ) &&
          o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()
        ) {
          var d = r("WAWebConversionTupleCollection").get(t.id),
            m = d == null ? void 0 : d.sourceId;
          if (!(m == null || m === "")) {
            var p = r("WAWebCommonCTWADataSharing").getCTWASignalsValueFromChat(
                t,
              ),
              _ = o(
                "WAWebCtwaConversationDepthUtils",
              ).getCtwaConversationRepeat(t),
              f = o("WAWebLidMigrationUtils").toPn(t.id);
            if (f == null) {
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
            var g = o("WAJids").toPhoneUserJid(f.user);
            o("WAWebChatThreadLogging")
              .getCtwa3pdAggregatedThreadIDHMAC(g)
              .then(function (e) {
                var t = {
                  adId: m,
                  threadIdHmac: e != null ? e : void 0,
                  ctwa3pdConversionType: n,
                  ctwa3pdConversionSubtype: a,
                  ctwa3pdSurfaceType: "thread",
                  ctwaDirectionFrom: i,
                  ctwaConversationDepth: c,
                  ctwaConversationRepeat: _,
                  ctwa3pdAggregatedSchemaVersion: u,
                  ctwaSignals: p != null ? p : void 0,
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
