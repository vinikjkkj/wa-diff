__d(
  "WAWebLabelSublistSync",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebDBLabelSublistDatabaseApi",
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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
        function n() {
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
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return o("WAWebSyncdConst").LABEL_SUBLIST_SYNC_VERSION;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.LabelSublist;
          }),
          (a.applyMutations = async function (n) {
            var t = this,
              r = 0,
              a = 0,
              i = await Promise.all(
                n.map(async function (n) {
                  var i = n.indexParts,
                    l = i[1],
                    s = i[2];
                  try {
                    if (n.operation === "set") {
                      var u;
                      if (!l || !s)
                        return {
                          result: t.malformedActionIndex(),
                          add: null,
                          remove: null,
                        };
                      var c = Number(l);
                      if (Number.isNaN(c))
                        return {
                          result: t.malformedActionIndex(),
                          add: null,
                          remove: null,
                        };
                      var d =
                        (u = n.value.labelSublistAction) == null
                          ? void 0
                          : u.subListId;
                      if (d == null)
                        return (
                          r++,
                          {
                            result: o(
                              "WAWebSyncdIndexUtils",
                            ).malformedActionValue(t.collectionName),
                            add: null,
                            remove: null,
                          }
                        );
                      var m = await t.resolveChatJid(s);
                      return m == null
                        ? {
                            result: t.malformedActionIndex(),
                            add: null,
                            remove: null,
                          }
                        : {
                            result: {
                              actionState:
                                o("WAWebSyncdConst").SyncActionState.Success,
                            },
                            add: { predefinedId: c, chatJid: m, subListId: d },
                            remove: null,
                          };
                    } else if (n.operation === "remove") {
                      var p = Number(l);
                      if (l && s && !Number.isNaN(p)) {
                        var _ = await t.resolveChatJid(s);
                        if (_ != null)
                          return {
                            result: {
                              actionState:
                                o("WAWebSyncdConst").SyncActionState.Success,
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
                            o("WAWebSyncdConst").SyncActionState.Success,
                        },
                        add: null,
                        remove: null,
                      };
                    }
                    return (
                      a++,
                      {
                        result: {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Unsupported,
                        },
                        add: null,
                        remove: null,
                      }
                    );
                  } catch (t) {
                    return (
                      o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[syncd][label-sublist]: mutation failed",
                          ])),
                      ),
                      {
                        result: {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Failed,
                        },
                        add: null,
                        remove: null,
                      }
                    );
                  }
                }),
              ),
              l = [],
              c = [],
              d = [],
              m = [];
            for (var p of i) {
              var _ = p.add,
                f = p.remove;
              (_ != null && (l.push(_), d.push(_)),
                f != null &&
                  (c.push(f.pk),
                  m.push({
                    predefinedId: f.predefinedId,
                    chatJid: f.chatJid,
                  })));
            }
            (r > 0 &&
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd][label-sublist]: ",
                    " malformed mutations",
                  ])),
                r,
              ),
              a > 0 &&
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd][label-sublist]: ",
                      " unsupported operations",
                    ])),
                  a,
                ),
              await Promise.all(
                c.map(function (e) {
                  return o("WAWebDBLabelSublistDatabaseApi").removeLabelSublist(
                    e,
                  );
                }),
              ),
              await Promise.all(
                l.map(function (e) {
                  return o(
                    "WAWebDBLabelSublistDatabaseApi",
                  ).addOrEditLabelSublist(e);
                }),
              ));
            for (var g of d)
              o("WAWebBackendApi").frontendFireAndForget("syncLeadSublist", g);
            for (var h of m)
              o("WAWebBackendApi").frontendFireAndForget(
                "removeLeadSublistFromCollection",
                h,
              );
            return i.map(function (e) {
              return e.result;
            });
          }),
          (a.resolveChatJid = async function (t) {
            if (!r("WAWebWid").isWid(t)) return null;
            var e = o("WAWebWidFactory").createWid(t),
              n = await o("WAWebSyncdGetChat").resolveChatForMutationIndex(e);
            if (n.success === !0) e = o("WAWebWidFactory").createWid(n.chat.id);
            else if (e.isLid()) {
              var a = o("WAWebApiContact").getPhoneNumber(e);
              a != null && (e = a);
            }
            return e.toString();
          }),
          (a.getLabelSublistMutation = async function (t) {
            var e = t.chatJid,
              n = t.predefinedId,
              r = t.subListId,
              a = o("WATimeUtils").unixTimeMs(),
              i = await o("WAWebSyncdGetChat").getWidMutationIndexForWid(
                o("WAWebWidFactory").createWid(e),
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
          }),
          (a.getLabelSublistRemoveMutation = async function (t) {
            var e = t.chatJid,
              n = t.predefinedId,
              r = o("WATimeUtils").unixTimeMs(),
              a = await o("WAWebSyncdGetChat").getWidMutationIndexForWid(
                o("WAWebWidFactory").createWid(e),
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
          }),
          (a.sendLabelSublistUpdate = async function (t, n, r) {
            var e = await this.getLabelSublistMutation({
              predefinedId: t,
              chatJid: n,
              subListId: r,
            });
            (await o("WAWebSyncdCoreApi").lockForSync(
              ["label_sublist"],
              [e],
              async function () {
                await o("WAWebDBLabelSublistDatabaseApi").addOrEditLabelSublist(
                  { predefinedId: t, chatJid: n, subListId: r },
                );
              },
            ),
              o("WAWebBackendApi").frontendFireAndForget("syncLeadSublist", {
                predefinedId: t,
                chatJid: n,
                subListId: r,
              }));
          }),
          (a.sendLabelSublistRemove = async function (t, n) {
            var e = await this.getLabelSublistRemoveMutation({
              predefinedId: t,
              chatJid: n,
            });
            (await o("WAWebSyncdCoreApi").lockForSync(
              ["label_sublist"],
              [e],
              async function () {
                await o("WAWebDBLabelSublistDatabaseApi").removeLabelSublist(
                  o("WAWebSchemaLabelSublist").createLabelSublistPrimaryKey({
                    predefinedId: t,
                    chatJid: n,
                  }),
                );
              },
            ),
              o("WAWebBackendApi").frontendFireAndForget(
                "removeLeadSublistFromCollection",
                { predefinedId: t, chatJid: n },
              ));
          }),
          n
        );
      })(o("WAWebSyncdAction").ChatOrContactSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
