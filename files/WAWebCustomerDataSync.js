__d(
  "WAWebCustomerDataSync",
  [
    "WAJids",
    "WALogger",
    "WASyncdConst",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebDBCustomerDataDatabaseApi",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdCoreApi",
    "WAWebSyncdIndexUtils",
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
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
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
            return o("WASyncdConst").Actions.CustomerData;
          }),
          (r.applyMutations = async function (n) {
            var t = this,
              r = 0,
              a = 0,
              i = 0,
              l = [],
              d = await Promise.all(
                n.map(async function (n) {
                  var s = n.indexParts,
                    u = n.value,
                    c = s[1];
                  try {
                    if (n.operation === "set") {
                      if (!c)
                        return (
                          r++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      var d = o("WAJids").validateChatJid(c);
                      if (d == null)
                        return (
                          r++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      if (u) {
                        var m = u.customerDataAction;
                        if (m == null)
                          return (
                            a++,
                            o("WAWebSyncdIndexUtils").malformedActionValue(
                              t.collectionName,
                            )
                          );
                        await t.$CustomerDataSync$p_1(d, m);
                      }
                    } else if (n.operation === "remove") {
                      if (c) {
                        var p = o("WAJids").validateChatJid(c);
                        p != null && (await t.$CustomerDataSync$p_2(p));
                      }
                    } else
                      return (
                        i++,
                        l.length < 3 && l.push(n.operation),
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
                            "[syncd][customer-data]: mutation failed",
                          ])),
                      ),
                      { actionState: o("WASyncdConst").SyncActionState.Failed }
                    );
                  }
                }),
              );
            return (
              r > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][customer-data]: no chatJid in index, ",
                      " muts",
                    ])),
                  r,
                ),
              a > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][customer-data]: ",
                      " malformed mutations",
                    ])),
                  a,
                ),
              i > 0 &&
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][customer-data]: ",
                      " unsupported operations => ",
                      "",
                    ])),
                  i,
                  l,
                ),
              d
            );
          }),
          (r.$CustomerDataSync$p_1 = async function (t, n) {
            var e,
              r,
              a,
              i,
              l,
              s,
              u = {
                chatJid: t,
                contactType: (e = n.contactType) != null ? e : 0,
                email: (r = n.email) != null ? r : void 0,
                altPhoneNumbers: (a = n.altPhoneNumbers) != null ? a : void 0,
                birthday:
                  n.birthday != null
                    ? o("WATimeUtils").castLongIntToUnixTime(n.birthday)
                    : void 0,
                address: (i = n.address) != null ? i : void 0,
                acquisitionSource:
                  (l = n.acquisitionSource) != null ? l : void 0,
                leadStage: (s = n.leadStage) != null ? s : void 0,
                lastOrder:
                  n.lastOrder != null
                    ? o("WATimeUtils").castLongIntToUnixTime(n.lastOrder)
                    : void 0,
                createdAt:
                  n.createdAt != null
                    ? o("WATimeUtils").castLongIntToUnixTime(n.createdAt)
                    : o("WATimeUtils").unixTime(),
                modifiedAt:
                  n.modifiedAt != null
                    ? o("WATimeUtils").castLongIntToUnixTime(n.modifiedAt)
                    : o("WATimeUtils").unixTime(),
              };
            (await o("WAWebDBCustomerDataDatabaseApi").addOrEditCustomerData(u),
              o("WAWebBackendApi").frontendFireAndForget("syncCustomerData", {
                chatJid: t,
                record: u,
              }));
          }),
          (r.$CustomerDataSync$p_2 = async function (t) {
            (await o(
              "WAWebDBCustomerDataDatabaseApi",
            ).removeCustomerDataByChatJid(t),
              o("WAWebBackendApi").frontendFireAndForget(
                "removeCustomerDataFromCollection",
                { chatJid: t },
              ));
          }),
          (r.getCustomerDataMutation = function (t) {
            var e = t.chatJid,
              n = t.record,
              r = o("WATimeUtils").unixTimeMs(),
              a = {
                customerDataAction: {
                  chatJid: e,
                  contactType: n.contactType,
                  email: n.email,
                  altPhoneNumbers: n.altPhoneNumbers,
                  birthday: n.birthday,
                  address: n.address,
                  acquisitionSource: n.acquisitionSource,
                  leadStage: n.leadStage,
                  lastOrder: n.lastOrder,
                  createdAt: n.createdAt,
                  modifiedAt: n.modifiedAt,
                },
              };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [e],
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              version: this.getVersion(),
              value: a,
              timestamp: r,
              action: this.getAction(),
            });
          }),
          (r.getCustomerDataRemoveMutation = function (t) {
            var e = o("WATimeUtils").unixTimeMs();
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [t],
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.REMOVE,
              version: this.getVersion(),
              value: {},
              timestamp: e,
              action: this.getAction(),
            });
          }),
          (r.sendCustomerDataUpdate = async function (t, n) {
            var e = this,
              r = this.getCustomerDataMutation({ chatJid: t, record: n });
            await o("WAWebSyncdCoreApi").lockForSync(
              ["customerData2"],
              [r],
              async function () {
                await e.$CustomerDataSync$p_1(t, {
                  chatJid: t,
                  contactType: n.contactType,
                  email: n.email,
                  altPhoneNumbers: n.altPhoneNumbers,
                  birthday: n.birthday,
                  address: n.address,
                  acquisitionSource: n.acquisitionSource,
                  leadStage: n.leadStage,
                  lastOrder: n.lastOrder,
                  createdAt: n.createdAt,
                  modifiedAt: n.modifiedAt,
                });
              },
            );
          }),
          (r.sendCustomerDataRemove = async function (t) {
            var e = this,
              n = this.getCustomerDataRemoveMutation(t);
            await o("WAWebSyncdCoreApi").lockForSync(
              ["customerData2"],
              [n],
              async function () {
                await e.$CustomerDataSync$p_2(t);
              },
            );
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
