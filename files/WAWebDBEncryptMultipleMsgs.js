__d(
  "WAWebDBEncryptMultipleMsgs",
  [
    "Promise",
    "WAAsyncSleep",
    "WALogger",
    "WAWebBrokerGlobalAppState",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebDbEncryptionKey",
    "WAWebLinkify",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "DroppingMsgRowDueToLogout"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          (a === void 0 && (a = !1),
            yield o(
              "WAWebDbEncryptionKey",
            ).DbEncKeyStore.waitForFinalDbMsgEncKey(),
            yield new (u || (u = n("Promise")))(function (e) {
              return self.setTimeout(e, 0);
            }));
          var i;
          if (a) {
            i = [];
            for (var l = 0; l < t.length; l++)
              try {
                var d = t[l],
                  m = yield p(d, l);
                i.push(m);
              } catch (t) {
                if (t instanceof c) throw t;
                var _ = r("getErrorSafe")(t);
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "processAndEncryptSingleMsgRow throttle",
                      ])),
                  )
                  .catching(_)
                  .tags("message-store");
              }
          } else {
            var f = yield (u || (u = n("Promise"))).all(
              t.map(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = yield p(e)
                        .catch(function (e) {
                          if (e instanceof c) throw e;
                          o("WALogger")
                            .ERROR(
                              s ||
                                (s = babelHelpers.taggedTemplateLiteralLoose([
                                  "processAndEncryptSingleMsgRow no-throttle",
                                ])),
                            )
                            .catching(e)
                            .tags("message-store");
                        })
                        .finally(function () {});
                      return t;
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              ),
            );
            i = f.filter(Boolean);
          }
          return i;
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (r("WAWebBrokerGlobalAppState").isLogoutInProgress)
            return (u || (u = n("Promise"))).reject(new c());
          t != null &&
            (yield o("WAAsyncSleep").asyncSleepAfterGivenLoopIteration(
              t,
              35,
              100,
            ));
          var a = o("WAWebSchemaMessage").getMessageTable(),
            i = o("WAWebDBMessageUtils").getVcardWids(e),
            l = o("WAWebDBMessageSerialization").dbRowFromMessage(e),
            s = yield a.preflightEncryptSingleRecord(
              babelHelpers.extends({}, l),
            ),
            d = babelHelpers.extends({}, l, s);
          return (
            i != null && (d.vcardWAids = i),
            [d, o("WAWebLinkify").hasHttpLink(e)]
          );
        })),
        _.apply(this, arguments)
      );
    }
    ((l.DroppingMsgRowDueToLogout = c),
      (l.encryptMultipleDBMsgs = d),
      (l.processAndEncryptSingleMsgRow = p));
  },
  98,
);
