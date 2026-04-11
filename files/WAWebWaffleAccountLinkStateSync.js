__d(
  "WAWebWaffleAccountLinkStateSync",
  [
    "WALogger",
    "WANullthrows",
    "WASyncdConst",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingNonceFetchAPI",
    "WAWebAccountLinkingUtils",
    "WAWebSyncdAction",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      ),
      c = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return 1;
          }),
          (i.getAction = function () {
            return o("WASyncdConst").Actions.WaffleAccountLinkState;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this,
                  a,
                  i = 0,
                  l = 0,
                  u = t.map(function (e) {
                    var t;
                    return o(
                      "WAWebAccountLinkingGatingUtils",
                    ).accountLinkingEnabled()
                      ? e.operation !== "set"
                        ? (i++,
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Unsupported,
                          })
                        : ((t = e.value.waffleAccountLinkStateAction) == null
                              ? void 0
                              : t.linkState) == null
                          ? (l++,
                            o("WAWebSyncdIndexUtils").malformedActionValue(
                              n.collectionName,
                            ))
                          : ((a == null || e.timestamp > a.timestamp) &&
                              (a = e),
                            {
                              actionState:
                                o("WASyncdConst").SyncActionState.Success,
                            })
                      : {
                          actionState:
                            o("WASyncdConst").SyncActionState.Unsupported,
                        };
                  });
                if (
                  (i > 0 &&
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "waffleaccountlinkstate sync: ",
                          " operations not supported",
                        ])),
                      i,
                    ),
                  l > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "waffleaccountlinkstate sync: ",
                          " malformed mutations",
                        ])),
                      l,
                    ),
                  a != null)
                ) {
                  var c,
                    d,
                    m = o("WAWebAccountLinkingUtils").mapToAccountLinkState(
                      r("WANullthrows")(
                        (c = a.value.waffleAccountLinkStateAction) == null
                          ? void 0
                          : c.linkState,
                      ),
                    ),
                    p = Number(
                      r("WANullthrows")(
                        (d = a) == null ? void 0 : d.value.timestamp,
                      ),
                    );
                  (yield this.storeLinkState(m, p),
                    m ===
                      o("WAWebAccountLinkingConstants").AccountLinkState
                        .Active &&
                      (yield o(
                        "WAWebAccountLinkingNonceFetchAPI",
                      ).requestNonceFromPrimary()));
                }
                return u;
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.storeLinkState = function (t, n) {
            return u.createOrUpdateAccountLinkingState({
              accountLinkKey: o("WAWebAccountLinkingConstants").AccountLinkKey,
              linkState: t,
              linkTimestamp: n,
            });
          }),
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
