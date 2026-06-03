__d(
  "WAWebCustomerDataSync",
  [
    "Promise",
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
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
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
            return o("WASyncdConst").Actions.CustomerData;
          }),
          (a.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  a = 0,
                  i = 0,
                  l = 0,
                  m = [],
                  p = yield (d || (d = n("Promise"))).all(
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
                                    a++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(r.collectionName)
                                  );
                                var c = o("WAJids").validateChatJid(u);
                                if (c == null)
                                  return (
                                    a++,
                                    o(
                                      "WAWebSyncdIndexUtils",
                                    ).malformedActionValue(r.collectionName)
                                  );
                                if (s) {
                                  var d = s.customerDataAction;
                                  if (d == null)
                                    return (
                                      i++,
                                      o(
                                        "WAWebSyncdIndexUtils",
                                      ).malformedActionValue(r.collectionName)
                                    );
                                  yield r.$CustomerDataSync$p_1(c, d);
                                }
                              } else if (t.operation === "remove") {
                                if (u) {
                                  var p = o("WAJids").validateChatJid(u);
                                  p != null &&
                                    (yield r.$CustomerDataSync$p_2(p));
                                }
                              } else
                                return (
                                  l++,
                                  m.length < 3 && m.push(t.operation),
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
                                        "[syncd][customer-data]: mutation failed",
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
                  a > 0 &&
                    o("WALogger").WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][customer-data]: no chatJid in index, ",
                          " muts",
                        ])),
                      a,
                    ),
                  i > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][customer-data]: ",
                          " malformed mutations",
                        ])),
                      i,
                    ),
                  l > 0 &&
                    o("WALogger").WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][customer-data]: ",
                          " unsupported operations => ",
                          "",
                        ])),
                      l,
                      m,
                    ),
                  p
                );
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.$CustomerDataSync$p_1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n,
                  r,
                  a,
                  i,
                  l,
                  s,
                  u = {
                    chatJid: e,
                    contactType: (n = t.contactType) != null ? n : 0,
                    email: (r = t.email) != null ? r : void 0,
                    altPhoneNumbers:
                      (a = t.altPhoneNumbers) != null ? a : void 0,
                    birthday:
                      t.birthday != null
                        ? o("WATimeUtils").castLongIntToUnixTime(t.birthday)
                        : void 0,
                    address: (i = t.address) != null ? i : void 0,
                    acquisitionSource:
                      (l = t.acquisitionSource) != null ? l : void 0,
                    leadStage: (s = t.leadStage) != null ? s : void 0,
                    lastOrder:
                      t.lastOrder != null
                        ? o("WATimeUtils").castLongIntToUnixTime(t.lastOrder)
                        : void 0,
                    createdAt:
                      t.createdAt != null
                        ? o("WATimeUtils").castLongIntToUnixTime(t.createdAt)
                        : o("WATimeUtils").unixTime(),
                    modifiedAt:
                      t.modifiedAt != null
                        ? o("WATimeUtils").castLongIntToUnixTime(t.modifiedAt)
                        : o("WATimeUtils").unixTime(),
                  };
                (yield o(
                  "WAWebDBCustomerDataDatabaseApi",
                ).addOrEditCustomerData(u),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "syncCustomerData",
                    { chatJid: e, record: u },
                  ));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$CustomerDataSync$p_2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                (yield o(
                  "WAWebDBCustomerDataDatabaseApi",
                ).removeCustomerDataByChatJid(e),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "removeCustomerDataFromCollection",
                    { chatJid: e },
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getCustomerDataMutation = function (t) {
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
          (a.getCustomerDataRemoveMutation = function (t) {
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
          (a.sendCustomerDataUpdate = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var r = this,
                  a = this.getCustomerDataMutation({ chatJid: e, record: t });
                yield o("WAWebSyncdCoreApi").lockForSync(
                  ["customerData2"],
                  [a],
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    yield r.$CustomerDataSync$p_1(e, {
                      chatJid: e,
                      contactType: t.contactType,
                      email: t.email,
                      altPhoneNumbers: t.altPhoneNumbers,
                      birthday: t.birthday,
                      address: t.address,
                      acquisitionSource: t.acquisitionSource,
                      leadStage: t.leadStage,
                      lastOrder: t.lastOrder,
                      createdAt: t.createdAt,
                      modifiedAt: t.modifiedAt,
                    });
                  }),
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.sendCustomerDataRemove = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  r = this.getCustomerDataRemoveMutation(e);
                yield o("WAWebSyncdCoreApi").lockForSync(
                  ["customerData2"],
                  [r],
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    yield t.$CustomerDataSync$p_2(e);
                  }),
                );
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
      p = new m();
    l.default = p;
  },
  98,
);
