__d(
  "WAWebPremiumMessageSync",
  [
    "WAWebPremiumMessageCollection",
    "WAWebPremiumMessageSchema",
    "WAWebSyncdAction",
    "WAWebSyncdConst",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.collectionName = o("WAWebSyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var r = t.prototype;
        return (
          (r.getVersion = function () {
            return 7;
          }),
          (r.getAction = function () {
            return o("WAWebSyncdConst").Actions.MarketingMessage;
          }),
          (r.applyMutations = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n = [],
                  r = 0,
                  a = 0,
                  i = 0,
                  l = e.map(function (e) {
                    try {
                      var l = e.indexParts,
                        s = l[1];
                      if (!s) return t.malformedActionIndex();
                      if (e.operation === "set") {
                        var u = e.value.marketingMessageAction;
                        if (!u)
                          return (
                            r++,
                            o("WAWebSyncdIndexUtils").malformedActionValue(
                              t.collectionName,
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
                              t.collectionName,
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
                                o("WAWebSyncdConst").SyncActionState.Success,
                            });
                      }
                      return (
                        i++,
                        {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Unsupported,
                        }
                      );
                    } catch (e) {
                      return {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Failed,
                      };
                    }
                  });
                return (
                  r > 0,
                  a > 0,
                  i > 0,
                  yield o("WAWebPremiumMessageSchema")
                    .getPremiumMessageTable()
                    .bulkCreateOrMerge(n),
                  o(
                    "WAWebPremiumMessageCollection",
                  ).PremiumMessageCollection.add(
                    n.map(function (e) {
                      return babelHelpers.extends({}, e);
                    }),
                  ),
                  l
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
