__d(
  "WAWebDBEncryptMultipleMsgs",
  [
    "WAAsyncSleep",
    "WALogger",
    "WAWebBrokerGlobalAppState",
    "WAWebDBMessageSerialization",
    "WAWebDBMessageUtils",
    "WAWebDbEncryptionKey",
    "WAWebLinkify",
    "WAWebReleaseToEventLoop",
    "WAWebSchemaMessage",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (e) {
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
    async function c(t, n) {
      (n === void 0 && (n = !1),
        await o("WAWebDbEncryptionKey").DbEncKeyStore.waitForFinalDbMsgEncKey(),
        await o("WAWebReleaseToEventLoop").releaseToEventLoop());
      var a;
      if (n) {
        a = [];
        for (var i = 0; i < t.length; i++)
          try {
            var l = t[i],
              c = await d(l, i);
            a.push(c);
          } catch (t) {
            if (t instanceof u) throw t;
            var m = r("getErrorSafe")(t);
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "processAndEncryptSingleMsgRow throttle",
                  ])),
              )
              .catching(m)
              .tags("message-store");
          }
      } else {
        var p = await Promise.all(
          t.map(async function (e) {
            var t = await d(e)
              .catch(function (e) {
                if (e instanceof u) throw e;
                var t = r("getErrorSafe")(e);
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "processAndEncryptSingleMsgRow no-throttle",
                      ])),
                  )
                  .catching(t)
                  .tags("message-store");
              })
              .finally(function () {});
            return t;
          }),
        );
        a = p.filter(Boolean);
      }
      return a;
    }
    async function d(e, t) {
      if (r("WAWebBrokerGlobalAppState").isLogoutInProgress)
        return Promise.reject(new u());
      t != null &&
        (await o("WAAsyncSleep").asyncSleepAfterGivenLoopIteration(t, 35, 100));
      var n = o("WAWebSchemaMessage").getMessageTable(),
        a = o("WAWebDBMessageUtils").getVcardWids(e),
        i = o("WAWebDBMessageSerialization").dbRowFromMessage(e),
        l = await n.preflightEncryptSingleRecord(babelHelpers.extends({}, i)),
        s = babelHelpers.extends({}, i, l);
      return (
        a != null && (s.vcardWAids = a),
        [s, o("WAWebLinkify").hasHttpLink(e)]
      );
    }
    ((l.DroppingMsgRowDueToLogout = u),
      (l.encryptMultipleDBMsgs = c),
      (l.processAndEncryptSingleMsgRow = d));
  },
  98,
);
