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
      u,
      c,
      d,
      m = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      ),
      p = (function (t) {
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
                  p = t.map(function (e) {
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
                  var _,
                    f,
                    g = o("WAWebAccountLinkingUtils").mapToAccountLinkState(
                      r("WANullthrows")(
                        (_ = a.value.waffleAccountLinkStateAction) == null
                          ? void 0
                          : _.linkState,
                      ),
                    ),
                    h = Number(
                      r("WANullthrows")(
                        (f = a) == null ? void 0 : f.value.timestamp,
                      ),
                    );
                  if (
                    g ===
                    o("WAWebAccountLinkingConstants").AccountLinkState.Active
                  ) {
                    var y = yield m.getAccountLinkingData();
                    y == null
                      ? (o("WALogger")
                          .LOG(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[WAFFLE-TRACE] syncd: no existing row, requesting nonce (fresh link or re-login)",
                              ])),
                          )
                          .sendLogs("waffle-nonce-trace-syncd", {
                            sampling: 1,
                          }),
                        yield this.storeLinkState(g, h),
                        yield o(
                          "WAWebAccountLinkingNonceFetchAPI",
                        ).requestNonceFromPrimary())
                      : y.linkState !==
                          o("WAWebAccountLinkingConstants").AccountLinkState
                            .Active
                        ? (o("WALogger")
                            .LOG(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "[WAFFLE-TRACE] syncd: existing row with state=",
                                  ", transitioning to Active",
                                ])),
                              y.linkState,
                            )
                            .sendLogs("waffle-nonce-trace-syncd", {
                              sampling: 1,
                            }),
                          yield this.storeLinkState(g, h),
                          yield o(
                            "WAWebAccountLinkingNonceFetchAPI",
                          ).requestNonceFromPrimary())
                        : o("WALogger")
                            .LOG(
                              d ||
                                (d = babelHelpers.taggedTemplateLiteralLoose([
                                  "[WAFFLE-TRACE] syncd: already Active, skipping nonce fetch",
                                ])),
                            )
                            .sendLogs("waffle-nonce-trace-syncd", {
                              sampling: 1,
                            });
                  }
                }
                return p;
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.storeLinkState = function (t, n) {
            return m.createOrUpdateAccountLinkingState({
              accountLinkKey: o("WAWebAccountLinkingConstants").AccountLinkKey,
              linkState: t,
              linkTimestamp: n,
            });
          }),
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      _ = new p();
    l.default = _;
  },
  98,
);
