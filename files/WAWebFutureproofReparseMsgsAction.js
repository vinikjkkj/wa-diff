__d(
  "WAWebFutureproofReparseMsgsAction",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = t.futureproofBuffer,
              r = t.futureproofParams;
            if (o("WAWebMsgGetters").getIsNewsletterMsg(t))
              return yield o(
                "WAWebNewsletterReparseMsgAction",
              ).reparseNewsletterMsg(t);
            if (n != null) {
              if (r) {
                var a = r.info,
                  i = r.msgMeta;
                (o("WAWebLidMigrationUtils").shouldHaveAccountLid(a.chat) &&
                  a.accountLid == null &&
                  (yield o(
                    "WAWebProcessMsgInfoForLid",
                  ).maybeProcesMsgInfoForLid({ msgInfo: a, msgMeta: i })),
                  yield o("WAWebHandleMsgProcess").processDecryptedMessageProto(
                    babelHelpers.extends({}, r, {
                      decrypted: n,
                      reparsing: !0,
                    }),
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
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = [],
              r = [];
            (e.forEach(function (e) {
              var n = o("WAWebDBMessageSerialization").messageFromDbRow(e),
                a =
                  o("WAWebAddonGatingUtils").isUnifiedInfraEnabledForType(
                    e.type,
                  ) ||
                  !!o(
                    "WAWebDBAddOnProviders",
                  ).getAddOnProviderForFutureproofMsg(n);
              a
                ? t.push(n)
                : e.type === o("WAWebMsgType").MSG_TYPE.UNKNOWN && r.push(n);
            }),
              yield (u || (u = n("Promise"))).all(
                r.map(function (e) {
                  return c(e);
                }),
              ),
              yield u.all(
                t.map(function (e) {
                  return c(e);
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
        })),
        p.apply(this, arguments)
      );
    }
    l.processFutureproof = m;
  },
  98,
);
