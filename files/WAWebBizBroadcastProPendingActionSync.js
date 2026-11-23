__d(
  "WAWebBizBroadcastProPendingActionSync",
  [
    "WALogger",
    "WATimeUtils",
    "WATypeUtils",
    "WAWebBizBroadcastProPendingActions",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 7;
          }),
          (r.getAction = function () {
            return o("WAWebSyncdConst").Actions.BBProPendingCustomerBaseAction;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = [],
              a = [],
              i = 0,
              l = n.map(function (e) {
                var n;
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
                        ((n = e.value.bbProPendingCustomerBaseAction) == null
                          ? void 0
                          : n.pending) === !0,
                    }),
                    {
                      actionState: o("WAWebSyncdConst").SyncActionState.Success,
                    })
                  : (i++, a.length < 3 && a.push(e), t.malformedActionIndex());
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
          }),
          (r.clearPendingAction = async function (t) {
            var e = o("WATimeUtils").unixTimeMs();
            o(
              "WAWebBizBroadcastProPendingActions",
            ).updatePendingCustomerBaseActions([{ action: t, pending: !1 }]);
            var n = { bbProPendingCustomerBaseAction: { pending: !1 } },
              r = o("WAWebSyncdActionUtils").buildPendingMutation({
                collection: this.collectionName,
                indexArgs: [t],
                value: n,
                version: this.getVersion(),
                operation: o("WAWebProtobufsServerSync.pb")
                  .SyncdMutation$SyncdOperation.SET,
                timestamp: e,
                action: this.getAction(),
              });
            await o("WAWebSyncdCoreApi").lockForSync([], [r], function () {
              return Promise.resolve();
            });
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      u = new s();
    l.default = u;
  },
  98,
);
