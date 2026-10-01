__d(
  "WAWebBizBroadcastProPendingActionSync",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WATypeUtils",
    "WAWebBizBroadcastProPendingActions",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.BBProPendingCustomerBaseAction;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this,
                  r = [],
                  a = [],
                  i = 0,
                  l = t.map(function (e) {
                    var t;
                    if (e.operation !== "set")
                      return {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Unsupported,
                      };
                    var l = e.indexParts[1];
                    return o("WATypeUtils").isString(l)
                      ? (r.push({
                          action: l,
                          pending:
                            ((t = e.value.bbProPendingCustomerBaseAction) ==
                            null
                              ? void 0
                              : t.pending) === !0,
                        }),
                        {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Success,
                        })
                      : (i++,
                        a.length < 3 && a.push(e),
                        n.malformedActionIndex());
                  });
                return (
                  i > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "BizBroadcastProPendingActionSync: ",
                          " malformed mutations",
                        ])),
                      i,
                    ),
                  o(
                    "WAWebBizBroadcastProPendingActions",
                  ).updatePendingCustomerBaseActions(r),
                  l
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.clearPendingAction = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("WATimeUtils").unixTimeMs();
                o(
                  "WAWebBizBroadcastProPendingActions",
                ).updatePendingCustomerBaseActions([
                  { action: e, pending: !1 },
                ]);
                var r = { bbProPendingCustomerBaseAction: { pending: !1 } },
                  a = o("WAWebSyncdActionUtils").buildPendingMutation({
                    collection: this.collectionName,
                    indexArgs: [e],
                    value: r,
                    version: this.getVersion(),
                    operation: o("WAWebProtobufsServerSync.pb")
                      .SyncdMutation$SyncdOperation.SET,
                    timestamp: t,
                    action: this.getAction(),
                  });
                yield o("WAWebSyncdCoreApi").lockForSync([], [a], function () {
                  return (s || (s = n("Promise"))).resolve();
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      c = new u();
    l.default = c;
  },
  98,
);
