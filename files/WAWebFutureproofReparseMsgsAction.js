__d(
  "WAWebFutureproofReparseMsgsAction",
  [
    "WALogger",
    "WAWebAddonGatingUtils",
    "WAWebDBAddOnProviders",
    "WAWebDBMessageSerialization",
    "WAWebHandleMsgProcess",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterReparseMsgAction",
    "WAWebProcessMsgInfoForLid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(t) {
      try {
        var n = t.futureproofBuffer,
          r = t.futureproofParams;
        if (o("WAWebMsgGetters").getIsNewsletterMsg(t))
          return await o(
            "WAWebNewsletterReparseMsgAction",
          ).reparseNewsletterMsg(t);
        if (n != null) {
          if (r) {
            var a = r.info,
              i = r.msgMeta;
            (o("WAWebLidMigrationUtils").shouldHaveAccountLid(a.chat) &&
              a.accountLid == null &&
              (await o("WAWebProcessMsgInfoForLid").maybeProcesMsgInfoForLid({
                msgInfo: a,
                msgMeta: i,
              })),
              await o("WAWebHandleMsgProcess").processDecryptedMessageProto(
                babelHelpers.extends({}, r, { decrypted: n, reparsing: !0 }),
              ));
          }
          return t;
        }
        return null;
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "reparseFutureproof: reparse error: ",
                  "",
                ])),
              t,
            )
            .sendLogs("reparse-futureproof-error"),
          null
        );
      }
    }
    async function c(e) {
      try {
        var t = [],
          n = [];
        (e.forEach(function (e) {
          var r = o("WAWebDBMessageSerialization").messageFromDbRow(e),
            a =
              o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(e.type) ||
              !!o("WAWebDBAddOnProviders").getAddOnProviderForFutureproofMsg(r);
          a
            ? t.push(r)
            : e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && n.push(r);
        }),
          await Promise.all(
            n.map(function (e) {
              return u(e);
            }),
          ),
          await Promise.all(
            t.map(function (e) {
              return u(e);
            }),
          ));
      } catch (e) {
        o("WALogger").ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "reparseFutureproof: processFutureproof error",
            ])),
        );
      }
    }
    l.processFutureproof = c;
  },
  98,
);
