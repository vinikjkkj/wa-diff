__d(
  "WAWebPremiumMessageSync",
  [
    "WASyncdConst",
    "WAWebPremiumMessageCollection",
    "WAWebPremiumMessageSchema",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
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
            return o("WASyncdConst").Actions.MarketingMessage;
          }),
          (n.applyMutations = async function (t) {
            var e = this,
              n = [],
              r = 0,
              a = 0,
              i = 0,
              l = t.map(function (t) {
                try {
                  var l = t.indexParts,
                    s = l[1];
                  if (!s) return e.malformedActionIndex();
                  if (t.operation === "set") {
                    var u = t.value.marketingMessageAction;
                    if (!u)
                      return (
                        r++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          e.collectionName,
                        )
                      );
                    var c = u.isDeleted,
                      d = u.mediaId,
                      m = u.message,
                      p = u.name,
                      _ = u.type;
                    return _ == null
                      ? (a++,
                        o("WAWebSyncdIndexUtils").malformedActionValue(
                          e.collectionName,
                        ))
                      : (n.push({
                          id: s,
                          name: p,
                          type: _,
                          isDeleted: c,
                          message: m,
                          mediaId: d,
                          sentMessageIds: new Set(),
                        }),
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Success,
                        });
                  }
                  return (
                    i++,
                    {
                      actionState:
                        o("WASyncdConst").SyncActionState.Unsupported,
                    }
                  );
                } catch (e) {
                  return {
                    actionState: o("WASyncdConst").SyncActionState.Failed,
                  };
                }
              });
            return (
              r > 0,
              a > 0,
              i > 0,
              await o("WAWebPremiumMessageSchema")
                .getPremiumMessageTable()
                .bulkCreateOrMerge(n),
              o("WAWebPremiumMessageCollection").PremiumMessageCollection.add(
                n.map(function (e) {
                  return babelHelpers.extends({}, e);
                }),
              ),
              l
            );
          }),
          t
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      s = new e();
    l.default = s;
  },
  98,
);
