__d(
  "WAWebContactManagerMetadataSync",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      var t,
        n =
          e == null || (t = e.contactManagerMetadataAction) == null
            ? void 0
            : t.isHidden;
      return typeof n == "boolean" ? n : null;
    }
    var d = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WAWebSyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.getVersion = function () {
            return o("WAWebSyncdConst").CONTACT_MANAGER_METADATA_SYNC_VERSION;
          }),
          (i.getAction = function () {
            return o("WAWebSyncdConst").Actions.ContactManagerMetadata;
          }),
          (i.applyMutations = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this;
                if (!this.$ContactManagerMetadataSync$p_1())
                  return t.map(function () {
                    return {
                      actionState:
                        o("WAWebSyncdConst").SyncActionState.Unsupported,
                    };
                  });
                var a = 0,
                  i = t.map(function (e) {
                    var t = n.$ContactManagerMetadataSync$p_2(e.indexParts);
                    if (t == null)
                      return (
                        a++,
                        { operation: null, result: n.malformedActionIndex() }
                      );
                    if (e.operation === "remove")
                      return {
                        operation: { kind: "remove", metadataJid: t },
                        result: {
                          actionState:
                            o("WAWebSyncdConst").SyncActionState.Success,
                        },
                      };
                    var r = c(e.value);
                    return r == null
                      ? (a++,
                        {
                          operation: null,
                          result: o(
                            "WAWebSyncdIndexUtils",
                          ).malformedActionValue(n.collectionName),
                        })
                      : {
                          operation: {
                            kind: "set",
                            row: { id: t, isHidden: r },
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
                  u = new Set();
                for (var d of i) {
                  var m = d.operation;
                  if (m != null) {
                    if (m.kind === "remove") {
                      (u.add(m.metadataJid), l.delete(m.metadataJid));
                      continue;
                    }
                    if (!u.has(m.row.id)) {
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
                  f = Array.from(u),
                  g = [].concat(
                    _.map(function (e) {
                      return e.id;
                    }),
                    f,
                  );
                if (g.length > 0) {
                  try {
                    (_.length > 0 &&
                      (yield o(
                        "WAWebDBContactManagerMetadataDatabaseApi",
                      ).bulkAddOrEditContactManagerMetadata(_)),
                      f.length > 0 &&
                        (yield o(
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
                        .sendLogs(
                          "contact-manager-metadata-persistence-failed",
                        ),
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
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (i.resolveConflicts = function (t, r) {
            var e = c(
              o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                r.binarySyncData,
              ).value,
            );
            return e == null ||
              t.operation ===
                o("WAWebProtobufsServerSync.pb").SyncdMutation$SyncdOperation
                  .REMOVE ||
              t.timestamp > r.timestamp
              ? (u || (u = n("Promise"))).resolve(
                  o("WAWebSyncdConst").ConflictResolutionState.SkipRemote,
                )
              : (u || (u = n("Promise"))).resolve(
                  o("WAWebSyncdConst").ConflictResolutionState
                    .ApplyRemoteAndDropLocal,
                );
          }),
          (i.shouldDropPendingMutationForRemoteRemove = function (t, n) {
            return !0;
          }),
          (i.getContactManagerMetadataMutation = function (t) {
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
          (i.sendContactManagerMetadataUpdate = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (!this.$ContactManagerMetadataSync$p_1())
                  throw r("err")("Contact manager metadata is unavailable");
                var t = this.getContactManagerMetadataMutation(e);
                (yield o("WAWebSyncdCoreApi").lockForSync(
                  ["contact_manager_metadata"],
                  [t],
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    yield o(
                      "WAWebDBContactManagerMetadataDatabaseApi",
                    ).addOrEditContactManagerMetadata(e);
                  }),
                ),
                  o("WAWebBackendApi").frontendFireAndForget(
                    "contactManagerMetadataChanged",
                    { metadataJids: [e.id] },
                  ));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.$ContactManagerMetadataSync$p_1 = function () {
            return (
              o("WAWebCustomerManagerGating").customerManagerEnabled() &&
              o(
                "WAWebSchemaContactManagerMetadata",
              ).canUseContactManagerMetadataTable()
            );
          }),
          (i.$ContactManagerMetadataSync$p_2 = function (t) {
            return t.length !== 2
              ? null
              : this.$ContactManagerMetadataSync$p_3(t[1]);
          }),
          (i.$ContactManagerMetadataSync$p_3 = function (t) {
            try {
              return o(
                "WAWebDBContactManagerMetadataDatabaseApi",
              ).parseContactManagerMetadataJid(t);
            } catch (e) {
              return null;
            }
          }),
          a
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      m = new d();
    l.default = m;
  },
  98,
);
