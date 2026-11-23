__d(
  "WAWebContactManagerMetadataSync",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebCustomerManagerGating",
    "WAWebDBContactManagerMetadataDatabaseApi",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaContactManagerMetadata",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdConst",
    "WAWebSyncdCoreApi",
    "WAWebSyncdIndexUtils",
    "decodeProtobuf",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t,
        n =
          e == null || (t = e.contactManagerMetadataAction) == null
            ? void 0
            : t.isHidden;
      return typeof n == "boolean" ? n : null;
    }
    var c = (function (t) {
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
        var a = n.prototype;
        return (
          (a.getVersion = function () {
            return o("WAWebSyncdConst").CONTACT_MANAGER_METADATA_SYNC_VERSION;
          }),
          (a.getAction = function () {
            return o("WAWebSyncdConst").Actions.ContactManagerMetadata;
          }),
          (a.applyMutations = async function (n) {
            var t = this;
            if (!this.$ContactManagerMetadataSync$p_1())
              return n.map(function () {
                return {
                  actionState: o("WAWebSyncdConst").SyncActionState.Unsupported,
                };
              });
            var a = 0,
              i = n.map(function (e) {
                var n = t.$ContactManagerMetadataSync$p_2(e.indexParts);
                if (n == null)
                  return (
                    a++,
                    { operation: null, result: t.malformedActionIndex() }
                  );
                if (e.operation === "remove")
                  return {
                    operation: { kind: "remove", metadataJid: n },
                    result: {
                      actionState: o("WAWebSyncdConst").SyncActionState.Success,
                    },
                  };
                var r = u(e.value);
                return r == null
                  ? (a++,
                    {
                      operation: null,
                      result: o("WAWebSyncdIndexUtils").malformedActionValue(
                        t.collectionName,
                      ),
                    })
                  : {
                      operation: {
                        kind: "set",
                        row: { id: n, isHidden: r },
                        timestamp: e.timestamp,
                      },
                      result: {
                        actionState:
                          o("WAWebSyncdConst").SyncActionState.Success,
                      },
                    };
              });
            a > 0 &&
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[syncd][contact-manager-metadata]: ",
                    " malformed mutations",
                  ])),
                a,
              );
            var l = new Map(),
              c = new Set();
            for (var d of i) {
              var m = d.operation;
              if (m != null) {
                if (m.kind === "remove") {
                  (c.add(m.metadataJid), l.delete(m.metadataJid));
                  continue;
                }
                if (!c.has(m.row.id)) {
                  var p = l.get(m.row.id);
                  (p == null || m.timestamp >= p.timestamp) &&
                    l.set(m.row.id, { row: m.row, timestamp: m.timestamp });
                }
              }
            }
            var _ = Array.from(l.values(), function (e) {
                var t = e.row;
                return t;
              }),
              f = Array.from(c),
              g = [].concat(
                _.map(function (e) {
                  return e.id;
                }),
                f,
              );
            if (g.length > 0) {
              try {
                (_.length > 0 &&
                  (await o(
                    "WAWebDBContactManagerMetadataDatabaseApi",
                  ).bulkAddOrEditContactManagerMetadata(_)),
                  f.length > 0 &&
                    (await o(
                      "WAWebDBContactManagerMetadataDatabaseApi",
                    ).bulkRemoveContactManagerMetadata(f)));
              } catch (e) {
                return (
                  o("WALogger")
                    .WARN(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd][contact-manager-metadata]: batch persistence failed",
                        ])),
                    )
                    .catching(r("getErrorSafe")(e))
                    .sendLogs("contact-manager-metadata-persistence-failed"),
                  i.map(function (e) {
                    var t = e.operation,
                      n = e.result;
                    return t == null
                      ? n
                      : {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Failed,
                        };
                  })
                );
              }
              o("WAWebBackendApi").frontendFireAndForget(
                "contactManagerMetadataChanged",
                { metadataJids: g },
              );
            }
            return i.map(function (e) {
              var t = e.result;
              return t;
            });
          }),
          (a.resolveConflicts = function (t, n) {
            var e = u(
              o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                n.binarySyncData,
              ).value,
            );
            return e == null ||
              t.operation ===
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .REMOVE ||
              t.timestamp > n.timestamp
              ? Promise.resolve(
                  o("WAWebSyncdConst").ConflictResolutionState.SkipRemote,
                )
              : Promise.resolve(
                  o("WAWebSyncdConst").ConflictResolutionState
                    .ApplyRemoteAndDropLocal,
                );
          }),
          (a.shouldDropPendingMutationForRemoteRemove = function (t, n) {
            return !0;
          }),
          (a.getContactManagerMetadataMutation = function (t) {
            var e = this.$ContactManagerMetadataSync$p_3(t.id);
            if (e == null)
              throw r("err")("Invalid contact manager metadata JID");
            var n = { contactManagerMetadataAction: { isHidden: t.isHidden } };
            return o("WAWebSyncdActionUtils").buildPendingMutation({
              collection: this.collectionName,
              indexArgs: [e],
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.SET,
              version: this.getVersion(),
              value: n,
              timestamp: o("WATimeUtils").unixTimeMs(),
              action: this.getAction(),
            });
          }),
          (a.sendContactManagerMetadataUpdate = async function (t) {
            if (!this.$ContactManagerMetadataSync$p_1())
              throw r("err")("Contact manager metadata is unavailable");
            var e = this.getContactManagerMetadataMutation(t);
            (await o("WAWebSyncdCoreApi").lockForSync(
              ["contact_manager_metadata"],
              [e],
              async function () {
                await o(
                  "WAWebDBContactManagerMetadataDatabaseApi",
                ).addOrEditContactManagerMetadata(t);
              },
            ),
              o("WAWebBackendApi").frontendFireAndForget(
                "contactManagerMetadataChanged",
                { metadataJids: [t.id] },
              ));
          }),
          (a.$ContactManagerMetadataSync$p_1 = function () {
            return (
              o("WAWebCustomerManagerGating").customerManagerEnabled() &&
              o(
                "WAWebSchemaContactManagerMetadata",
              ).canUseContactManagerMetadataTable()
            );
          }),
          (a.$ContactManagerMetadataSync$p_2 = function (t) {
            return t.length !== 2
              ? null
              : this.$ContactManagerMetadataSync$p_3(t[1]);
          }),
          (a.$ContactManagerMetadataSync$p_3 = function (t) {
            try {
              return o(
                "WAWebDBContactManagerMetadataDatabaseApi",
              ).parseContactManagerMetadataJid(t);
            } catch (e) {
              return null;
            }
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      d = new c();
    l.default = d;
  },
  98,
);
