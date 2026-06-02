__d(
  "WAWebUserStatusMuteSync",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebBackendApi",
    "WAWebLidAwareContactsDB",
    "WAWebNewsletterGatingUtils",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebSchemaGroupMetadata",
    "WAWebSchemaNewsletterMetadata",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdIndexUtils",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    async function u(e) {
      var t = new Set(),
        n = [],
        a = [],
        i = [];
      return (
        e.forEach(function (e) {
          var t = e.indexParts,
            l = t[1];
          !l ||
            !r("WAWebWid").isWid(l) ||
            (r("WAWebWid").isGroup(l)
              ? a.push(l)
              : r("WAWebWid").isNewsletter(l) &&
                  o(
                    "WAWebNewsletterGatingUtils",
                  ).isNewsletterStatusReceiverEnabled()
                ? i.push(l)
                : n.push(l));
        }),
        await r("WAWebLidAwareContactsDB")
          .bulkGet(n)
          .then(function (e) {
            return e.forEach(function (e) {
              e && t.add(e.id);
            });
          }),
        a.length > 0 &&
          (await o("WAWebSchemaGroupMetadata")
            .getGroupMetadataTable()
            .bulkGet(a)
            .then(function (e) {
              return e.forEach(function (e) {
                e && t.add(e.id);
              });
            })),
        i.length > 0 &&
          o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled() &&
          (await Promise.all(
            i.map(async function (e) {
              var n = await o("WAWebSchemaNewsletterMetadata")
                .getNewsletterMetadataTable()
                .equalsPrimaryKeys(["id"], e);
              n.length > 0 && t.add(e);
            }),
          )),
        t
      );
    }
    var c = (function (t) {
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
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return 7;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.UserStatusMute;
          }),
          (a.applyMutations = async function (n) {
            var t = this,
              a = await u(n),
              i = [],
              l = [],
              c = [],
              d = 0,
              m = [],
              p = 0,
              _ = await Promise.all(
                n.map(function (e) {
                  try {
                    if (e.operation === "set") {
                      var n,
                        s = e.indexParts,
                        u = e.value,
                        _ = s[1];
                      if (!_ || !r("WAWebWid").isWid(_))
                        return t.malformedActionIndex();
                      var f =
                        (n = u.userStatusMuteAction) == null ? void 0 : n.muted;
                      if (f === void 0)
                        return (
                          d++,
                          m.length < 3 && m.push(e),
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          )
                        );
                      if (!a.has(_))
                        return {
                          actionState: o("WASyncdConst").SyncActionState.Orphan,
                          orphanModel: {
                            modelId: _,
                            modelType:
                              o("WASyncdConst").SyncModelType.UserStatusMute,
                          },
                        };
                      var g = { id: _, statusMute: f };
                      return (
                        r("WAWebWid").isGroup(_)
                          ? l.push(g)
                          : r("WAWebWid").isNewsletter(_) &&
                              o(
                                "WAWebNewsletterGatingUtils",
                              ).isNewsletterStatusReceiverEnabled()
                            ? c.push(g)
                            : i.push(g),
                        {
                          actionState:
                            o("WASyncdConst").SyncActionState.Success,
                        }
                      );
                    }
                    return (
                      p++,
                      {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return (
              d > 0 &&
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "UserStatusMuteSyncd: ",
                      " malformed mutations => ",
                      "",
                    ])),
                  d,
                  m,
                ),
              p > 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "status mute chat sync: ",
                      " operations not supported",
                    ])),
                  p,
                ),
              await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                .getContactTable()
                .bulkCreateOrMerge(i),
              await o("WAWebSchemaGroupMetadata")
                .getGroupMetadataTable()
                .bulkMergeOnly(l),
              await o("WAWebSchemaNewsletterMetadata")
                .getNewsletterMetadataTable()
                .bulkMergeOnly(c),
              o("WAWebBackendApi").frontendFireAndForget(
                "updateContactsStatusMute",
                {
                  groupStatusMuteUpdates: l,
                  newsletterStatusMuteUpdates: c,
                  userStatusMuteUpdates: i,
                },
              ),
              _
            );
          }),
          (a.getMutationForStatusMute = async function (t, n, r) {
            var e = { userStatusMuteAction: { muted: n } },
              a = o("WAWebSyncdActionUtils").buildPendingMutation({
                action: this.getAction(),
                collection: this.collectionName,
                indexArgs: [t.toString({ legacy: !0 })],
                operation: o("WAWebProtobufsServerSync.pb")
                  .SyncdMutation$SyncdOperation.SET,
                timestamp: r,
                value: e,
                version: this.getVersion(),
              });
            return a;
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
