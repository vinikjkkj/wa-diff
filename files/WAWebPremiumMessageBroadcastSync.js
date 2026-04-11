__d(
  "WAWebPremiumMessageBroadcastSync",
  [
    "WASyncdConst",
    "WAWebPremiumMessageAddSendAction",
    "WAWebPremiumMessageCollection",
    "WAWebSyncdAction",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.collectionName = o("WASyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var a = t.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.MarketingMessageBroadcast;
          }),
          (a.applyMutations = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n = [],
                  a = 0,
                  i = e.map(function (e) {
                    try {
                      var r = e.indexParts,
                        i = r[1],
                        l = r[2];
                      return !i || !l
                        ? t.malformedActionIndex()
                        : e.operation === "set"
                          ? o(
                              "WAWebPremiumMessageCollection",
                            ).PremiumMessageCollection.find(i) == null
                            ? {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Orphan,
                              }
                            : (n.push({ messageId: l, premiumMessageId: i }),
                              {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Success,
                              })
                          : (a++,
                            {
                              actionState:
                                o("WASyncdConst").SyncActionState.Unsupported,
                            });
                    } catch (e) {
                      return {
                        actionState: o("WASyncdConst").SyncActionState.Failed,
                      };
                    }
                  });
                return (
                  a > 0,
                  yield r("WAWebPremiumMessageAddSendAction")(n),
                  i
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      s = new e();
    l.default = s;
  },
  98,
);
