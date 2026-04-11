__d(
  "WAWebCtwaPerCustomerDataSharingSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaDataSharing3pdLidV2",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "WAWebSyncdIndexUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 1;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.AdsCtwaPerCustomerDataSharing;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  a = o(
                    "WAWebSchemaDataSharing3pdLidV2",
                  ).getDataSharing3pdLidTable(),
                  i = 0,
                  l = 0,
                  m = 0,
                  p = [],
                  _ = yield (d || (d = n("Promise"))).all(
                    t.map(
                      (function () {
                        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (t) {
                            var n = t.indexParts,
                              s = t.value,
                              u = n[1];
                            try {
                              if (t.operation === "set") {
                                if (!u)
                                  return (
                                    i++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(r.collectionName)
                                  );
                                if (s) {
                                  var c = s.ctwaPerCustomerDataSharingAction;
                                  if (
                                    (c == null
                                      ? void 0
                                      : c.isCtwaPerCustomerDataSharingEnabled) ==
                                    null
                                  )
                                    return (
                                      l++,
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).malformedActionValue(r.collectionName)
                                    );
                                  var d = c.isCtwaPerCustomerDataSharingEnabled;
                                  (yield r.$CtwaPerCustomerDataSharingSync$p_1(
                                    a,
                                    u,
                                    d,
                                  ),
                                    o("WAWebBackendApi").frontendFireAndForget(
                                      "maybeGeneratePerCustomerDataSharingSystemMessage",
                                      {
                                        accountLid: u,
                                        perCustomerDataSharingState: d,
                                      },
                                    ));
                                }
                              } else if (t.operation === "remove")
                                yield r.$CtwaPerCustomerDataSharingSync$p_2(
                                  a,
                                  u,
                                );
                              else
                                return (
                                  m++,
                                  p.length < 3 && p.push(t.operation),
                                  {
                                    actionState:
                                      o("WASyncdConst").SyncActionState
                                        .Unsupported,
                                  }
                                );
                              return {
                                actionState:
                                  o("WASyncdConst").SyncActionState.Success,
                              };
                            } catch (t) {
                              return (
                                o("WALogger").WARN(
                                  e ||
                                    (e =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[syncd][per-customer-data-sharing]: mutation failed",
                                      ])),
                                ),
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Failed,
                                }
                              );
                            }
                          },
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })(),
                    ),
                  );
                return (
                  i > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][per-customer-data-sharing]: missing accountLid in index for ",
                          " mutations",
                        ])),
                      i,
                    ),
                  l > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "per-customer data-sharing status sync: ",
                          " malformed mutations",
                        ])),
                      l,
                    ),
                  m > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][per-customer-data-sharing]: ",
                          " unsupported operations => ",
                          "",
                        ])),
                      m,
                      p,
                    ),
                  _
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.$CtwaPerCustomerDataSharingSync$p_1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                (yield e.createOrReplace({
                  lidRawString: t,
                  dataSharing3pdEnabled: n,
                }),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "updateDataSharing3pdLidInCollection",
                    { lidRawString: t, dataSharing3pdEnabled: n },
                  ));
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$CtwaPerCustomerDataSharingSync$p_2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                (yield e.remove(t),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "removeDataSharing3pdLidFromCollection",
                    { lidRawString: t },
                  ));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getCtwaPerCustomerDataSharingMutation = function (t) {
            var e = t.accountLid,
              n = t.isEnabled,
              r = o("WATimeUtils").unixTimeMs(),
              a = {
                ctwaPerCustomerDataSharingAction: {
                  isCtwaPerCustomerDataSharingEnabled: n,
                },
              };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [e.toString()],
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              version: this.getVersion(),
              value: a,
              timestamp: r,
              action: this.getAction(),
            });
          }),
          (a.sendPerCustomerDataSharingUpdate = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var r = this,
                  a = this.getCtwaPerCustomerDataSharingMutation({
                    accountLid: e,
                    isEnabled: t,
                  }),
                  i = o(
                    "WAWebSchemaDataSharing3pdLidV2",
                  ).getDataSharing3pdLidTable(),
                  l = e.toString();
                (yield o("WAWebSyncdCoreApi").lockForSync(
                  ["data-sharing-3pd-lid-v2"],
                  [a],
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    yield r.$CtwaPerCustomerDataSharingSync$p_1(i, l, t);
                  }),
                ),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "maybeGeneratePerCustomerDataSharingSystemMessage",
                    { accountLid: l, perCustomerDataSharingState: t },
                  ));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      p = new m();
    l.default = p;
  },
  98,
);
