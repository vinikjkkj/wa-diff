__d(
  "WAWebLabelSublistSync",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBLabelSublistDatabaseApi",
    "WAWebLid1X1MigrationGating",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaLabelSublist",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdGetChat",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.chatJidIndex = 2),
            (e.collectionName = o("WAWebSyncdConst").CollectionName.Regular),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return o("WAWebSyncdConst").LABEL_SUBLIST_SYNC_VERSION;
          }),
          (i.getAction = function () {
            return o("WAWebSyncdConst").Actions.LabelSublist;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = this,
                  a = 0,
                  i = 0,
                  l = yield (c || (c = n("Promise"))).all(
                    t.map(
                      (function () {
                        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                          function* (t) {
                            var n = t.indexParts,
                              l = n[1],
                              s = n[2];
                            try {
                              if (t.operation === "set") {
                                var u;
                                if (!l || !s)
                                  return {
                                    result: r.malformedActionIndex(),
                                    add: null,
                                    remove: null,
                                  };
                                var c = Number(l);
                                if (Number.isNaN(c))
                                  return {
                                    result: r.malformedActionIndex(),
                                    add: null,
                                    remove: null,
                                  };
                                var d =
                                  (u = t.value.labelSublistAction) == null
                                    ? void 0
                                    : u.subListId;
                                if (d == null)
                                  return (
                                    a++,
                                    {
                                      result: o(
                                        "WAWebSyncdIndexUtils",
                                      ).malformedActionValue(r.collectionName),
                                      add: null,
                                      remove: null,
                                    }
                                  );
                                var m = yield r.$LabelSublistSync$p_1(s);
                                return m == null
                                  ? {
                                      result: r.malformedActionIndex(),
                                      add: null,
                                      remove: null,
                                    }
                                  : {
                                      result: {
                                        actionState:
                                          o("WAWebSyncdConst").SyncActionState
                                            .Success,
                                      },
                                      add: {
                                        predefinedId: c,
                                        chatJid: m,
                                        subListId: d,
                                      },
                                      remove: null,
                                    };
                              } else if (t.operation === "remove") {
                                var p = Number(l);
                                if (l && s && !Number.isNaN(p)) {
                                  var _ = yield r.$LabelSublistSync$p_1(s);
                                  if (_ != null)
                                    return {
                                      result: {
                                        actionState:
                                          o("WAWebSyncdConst").SyncActionState
                                            .Success,
                                      },
                                      add: null,
                                      remove: {
                                        pk: o(
                                          "WAWebSchemaLabelSublist",
                                        ).createLabelSublistPrimaryKey({
                                          predefinedId: p,
                                          chatJid: _,
                                        }),
                                        predefinedId: p,
                                        chatJid: _,
                                      },
                                    };
                                }
                                return {
                                  result: {
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Success,
                                  },
                                  add: null,
                                  remove: null,
                                };
                              }
                              return (
                                i++,
                                {
                                  result: {
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Unsupported,
                                  },
                                  add: null,
                                  remove: null,
                                }
                              );
                            } catch (t) {
                              return (
                                o("WALogger").WARN(
                                  e ||
                                    (e =
                                      babelHelpers.taggedTemplateLiteralLoose([
                                        "[syncd][label-sublist]: mutation failed",
                                      ])),
                                ),
                                {
                                  result: {
                                    actionState:
                                      o("WAWebSyncdConst").SyncActionState
                                        .Failed,
                                  },
                                  add: null,
                                  remove: null,
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
                  ),
                  d = [],
                  m = [],
                  p = [],
                  _ = [];
                for (var f of l) {
                  var g = f.add,
                    h = f.remove;
                  (g != null && (d.push(g), p.push(g)),
                    h != null &&
                      (m.push(h.pk),
                      _.push({
                        predefinedId: h.predefinedId,
                        chatJid: h.chatJid,
                      })));
                }
                (a > 0 &&
                  o("WALogger").WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[syncd][label-sublist]: ",
                        " malformed mutations",
                      ])),
                    a,
                  ),
                  i > 0 &&
                    o("WALogger").WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][label-sublist]: ",
                          " unsupported operations",
                        ])),
                      i,
                    ),
                  yield c.all(
                    m.map(function (e) {
                      return o(
                        "WAWebDBLabelSublistDatabaseApi",
                      ).removeLabelSublist(e);
                    }),
                  ),
                  yield c.all(
                    d.map(function (e) {
                      return o(
                        "WAWebDBLabelSublistDatabaseApi",
                      ).addOrEditLabelSublist(e);
                    }),
                  ));
                for (var y of p)
                  o("WAWebBackendApi").frontendFireAndForget(
                    "syncLeadSublist",
                    y,
                  );
                for (var C of _)
                  o("WAWebBackendApi").frontendFireAndForget(
                    "removeLeadSublistFromCollection",
                    C,
                  );
                return l.map(function (e) {
                  return e.result;
                });
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (i.$LabelSublistSync$p_1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (!r("WAWebWid").isWid(e)) return null;
                var t = o("WAWebWidFactory").createWid(e),
                  n =
                    yield o("WAWebSyncdGetChat").resolveChatForMutationIndex(t);
                if (n.success === !0)
                  t = o("WAWebWidFactory").createWid(n.chat.id);
                else if (
                  o(
                    "WAWebLid1X1MigrationGating",
                  ).Lid1X1MigrationUtils.isLidMigrated() &&
                  t.isLid()
                ) {
                  var a = o("WAWebApiContact").getPhoneNumber(t);
                  a != null && (t = a);
                }
                return t.toString();
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getLabelSublistMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.chatJid,
                  n = e.predefinedId,
                  r = e.subListId,
                  a = o("WATimeUtils").unixTimeMs(),
                  i = yield o("WAWebSyncdGetChat").getWidMutationIndexForWid(
                    o("WAWebWidFactory").createWid(t),
                  ),
                  l = { labelSublistAction: { subListId: r } };
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                  collection: this.collectionName,
                  indexArgs: [String(n), i],
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.SET,
                  version: this.getVersion(),
                  value: l,
                  timestamp: a,
                  action: this.getAction(),
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getLabelSublistRemoveMutation = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.chatJid,
                  n = e.predefinedId,
                  r = o("WATimeUtils").unixTimeMs(),
                  a = yield o("WAWebSyncdGetChat").getWidMutationIndexForWid(
                    o("WAWebWidFactory").createWid(t),
                  );
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                  collection: this.collectionName,
                  indexArgs: [String(n), a],
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.REMOVE,
                  version: this.getVersion(),
                  value: {},
                  timestamp: r,
                  action: this.getAction(),
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.sendLabelSublistUpdate = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, r) {
                var a = yield this.getLabelSublistMutation({
                  predefinedId: e,
                  chatJid: t,
                  subListId: r,
                });
                (yield o("WAWebSyncdCoreApi").lockForSync(
                  ["label_sublist"],
                  [a],
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    yield o(
                      "WAWebDBLabelSublistDatabaseApi",
                    ).addOrEditLabelSublist({
                      predefinedId: e,
                      chatJid: t,
                      subListId: r,
                    });
                  }),
                ),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "syncLeadSublist",
                    { predefinedId: e, chatJid: t, subListId: r },
                  ));
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.sendLabelSublistRemove = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var r = yield this.getLabelSublistRemoveMutation({
                  predefinedId: e,
                  chatJid: t,
                });
                (yield o("WAWebSyncdCoreApi").lockForSync(
                  ["label_sublist"],
                  [r],
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    yield o(
                      "WAWebDBLabelSublistDatabaseApi",
                    ).removeLabelSublist(
                      o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey(
                        { predefinedId: e, chatJid: t },
                      ),
                    );
                  }),
                ),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "removeLeadSublistFromCollection",
                    { predefinedId: e, chatJid: t },
                  ));
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          a
        );
      })(o("WAWebSyncdAction").ChatOrContactSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
