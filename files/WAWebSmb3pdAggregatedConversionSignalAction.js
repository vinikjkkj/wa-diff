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
        d = o("WAWebCommonCTWADataSharing").getReceivedCTWAEligibilityFromChat(
          t,
        );
      if (
        !(d == null || !d.is3pdag) &&
        o("WAWebCommonCTWADataSharing").isGlobalDataSharingAccepted(
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
          )
        ) {
          var _ = o("WAWebCTWAGatingUtils").get3pdPostDcDepthLimit();
          if (
            !(_ > 0 && p > _) &&
            o("WAWebCTWAGatingUtils").isCtwa3pdAggregatedConversionEnabled()
          ) {
            var f = m == null ? void 0 : m.sourceId;
            if (!(f == null || f === "")) {
              var g = o(
                  "WAWebCommonCTWADataSharing",
                ).getCTWASignalsValueFromChat(t),
                h =
                  (c = m == null ? void 0 : m.conversationRepeat) != null
                    ? c
                    : 0,
                y = o("WAWebLidMigrationUtils").toPn(t.id);
              if (y == null) {
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
              var C = o("WAJids").toPhoneUserJid(y.user);
              o("WAWebChatThreadLogging")
                .getCtwa3pdAggregatedThreadIDHMAC(C)
                .then(function (e) {
                  var t = {
                    adId: f,
                    threadIdHmac: e != null ? e : void 0,
                    ctwa3pdConversionType: n,
                    ctwa3pdConversionSubtype: a,
                    ctwa3pdSurfaceType: "thread",
                    ctwaDirectionFrom: i,
                    ctwaConversationDepth: p,
                    ctwaConversationRepeat: h,
                    ctwa3pdAggregatedSchemaVersion: u,
                    ctwaSignals: g != null ? g : void 0,
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
    }
    l.log3pdAggregatedConversionSignal = c;
  },
  98,
);
