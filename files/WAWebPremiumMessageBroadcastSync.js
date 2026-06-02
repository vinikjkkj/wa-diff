__d(
  "WAWebPremiumMessageBroadcastSync",
  [
    "WASyncdConst",
    "WAWebPremiumMessageAddSendAction",
    "WAWebPremiumMessageCollection",
    "WAWebSyncdAction",
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
        var n = t.prototype;
        return (
          (n.getVersion = function () {
            return 7;
          }),
          (n.getAction = function () {
            return o("WASyncdConst").Actions.MarketingMessageBroadcast;
          }),
          (n.applyMutations = async function (t) {
            var e = this,
              n = [],
              a = 0,
              i = t.map(function (t) {
                try {
                  var r = t.indexParts,
                    i = r[1],
                    l = r[2];
                  return !i || !l
                    ? e.malformedActionIndex()
                    : t.operation === "set"
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
            return (a > 0, await r("WAWebPremiumMessageAddSendAction")(n), i);
          }),
          t
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      s = new e();
    l.default = s;
  },
  98,
);
