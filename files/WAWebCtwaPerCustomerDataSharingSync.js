__d(
  "WAWebCtwaPerCustomerDataSharingSync",
  [
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
    "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularHigh),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 1;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.AdsCtwaPerCustomerDataSharing;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = o(
                "WAWebSchemaDataSharing3pdLidV2",
              ).getDataSharing3pdLidTable(),
              a = 0,
              i = 0,
              l = 0,
              d = [],
              m = await Promise.all(
                n.map(async function (n) {
                  var s = n.indexParts,
                    u = n.value,
                    c = s[1];
                  try {
                    if (n.operation === "set") {
                      if (!c)
                        return (
                          a++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      if (u) {
                        var m = u.ctwaPerCustomerDataSharingAction;
                        if (
                          (m == null
                            ? void 0
                            : m.isCtwaPerCustomerDataSharingEnabled) == null
                        )
                          return (
                            i++,
                            o("WAWebSyncdIndexUtils").malformedActionValue(
                              t.collectionName,
                            )
                          );
                        var p = m.isCtwaPerCustomerDataSharingEnabled;
                        (await t.$CtwaPerCustomerDataSharingSync$p_1(r, c, p),
                          o("WAWebBackendApi").frontendFireAndForget(
                            "maybeGeneratePerCustomerDataSharingSystemMessage",
                            {
                              accountLid: c,
                              perCustomerDataSharingState: p,
                              entryPoint: o(
                                "WAWebWamEnumSmbPerCustomerDataSharingControlEntryPoint",
                              )
                                .SMB_PER_CUSTOMER_DATA_SHARING_CONTROL_ENTRY_POINT
                                .SYNCD_MUTATION,
                            },
                          ));
                      }
                    } else if (n.operation === "remove")
                      await t.$CtwaPerCustomerDataSharingSync$p_2(r, c);
                    else
                      return (
                        l++,
                        d.length < 3 && d.push(n.operation),
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Unsupported,
                        }
                      );
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Success,
                    };
                  } catch (t) {
                    return (
                      o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd][per-customer-data-sharing]: mutation failed",
                          ])),
                      ),
                      { actionState: o("WASyncdConst").SyncActionState.Failed }
                    );
                  }
                }),
              );
            return (
              a > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][per-customer-data-sharing]: missing accountLid in index for ",
                      " mutations",
                    ])),
                  a,
                ),
              i > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "per-customer data-sharing status sync: ",
                      " malformed mutations",
                    ])),
                  i,
                ),
              l > 0 &&
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][per-customer-data-sharing]: ",
                      " unsupported operations => ",
                      "",
                    ])),
                  l,
                  d,
                ),
              m
            );
          }),
          (r.$CtwaPerCustomerDataSharingSync$p_1 = async function (t, n, r) {
            (await t.createOrReplace({
              lidRawString: n,
              dataSharing3pdEnabled: r,
            }),
              o("WAWebBackendApi").frontendFireAndForget(
                "updateDataSharing3pdLidInCollection",
                { lidRawString: n, dataSharing3pdEnabled: r },
              ));
          }),
          (r.$CtwaPerCustomerDataSharingSync$p_2 = async function (t, n) {
            (await t.remove(n),
              o("WAWebBackendApi").frontendFireAndForget(
                "removeDataSharing3pdLidFromCollection",
                { lidRawString: n },
              ));
          }),
          (r.getCtwaPerCustomerDataSharingMutation = function (t) {
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
          (r.sendPerCustomerDataSharingUpdate = async function (t, n, r) {
            var e = this,
              a = this.getCtwaPerCustomerDataSharingMutation({
                accountLid: t,
                isEnabled: n,
              }),
              i = o(
                "WAWebSchemaDataSharing3pdLidV2",
              ).getDataSharing3pdLidTable(),
              l = t.toString();
            (await o("WAWebSyncdCoreApi").lockForSync(
              ["data-sharing-3pd-lid-v2"],
              [a],
              async function () {
                await e.$CtwaPerCustomerDataSharingSync$p_1(i, l, n);
              },
            ),
              o("WAWebBackendApi").frontendFireAndForget(
                "maybeGeneratePerCustomerDataSharingSystemMessage",
                {
                  accountLid: l,
                  perCustomerDataSharingState: n,
                  entryPoint: r,
                },
              ));
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
