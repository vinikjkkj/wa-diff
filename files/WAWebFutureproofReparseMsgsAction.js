__d(
  "WAWebFutureproofReparseMsgsAction",
  [
    "Promise",
    "WALogger",
    "WAWebAddonGatingUtils",
    "WAWebDBAddOnProviders",
    "WAWebDBMessageSerialization",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterReparseMsgAction",
    "WAWebProcessMsgInfoForLid",
    "asyncToGeneratorRuntime",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("requireDeferred")("WAWebHandleMsgProcess").__setRef(
        "WAWebFutureproofReparseMsgsAction",
      );
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
                o("WAWebLidMigrationUtils").shouldHaveAccountLid(a.chat) &&
                  a.accountLid == null &&
                  (yield o(
                    "WAWebProcessMsgInfoForLid",
                  ).maybeProcessMsgInfoForLid({ msgInfo: a, msgMeta: i }));
                var l = yield c.load(),
                  s = l.processDecryptedMessageProto;
                yield s(
                  babelHelpers.extends({}, r, { decrypted: n, reparsing: !0 }),
                );
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
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
                  return d(e);
                }),
              ),
              yield u.all(
                t.map(function (e) {
                  return d(e);
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
        _.apply(this, arguments)
      );
    }
    l.processFutureproof = p;
  },
  98,
);
