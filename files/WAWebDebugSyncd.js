__d(
  "WAWebDebugSyncd",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebApiActiveMessageRanges",
    "WAWebDeleteMessageForMeSync",
    "WAWebMsgKey",
    "WAWebPrimaryVersion",
    "WAWebProtobufSyncAction.pb",
    "WAWebProtobufsE2E.pb",
    "WAWebProtobufsServerSync.pb",
    "WAWebSchemaSyncActions",
    "WAWebSendNonMessageDataRequest",
    "WAWebSentinel",
    "WAWebStarMessageSync",
    "WAWebSyncd",
    "WAWebSyncdCollectionHandlerTypesConverter",
    "WAWebSyncdConst",
    "WAWebSyncdDb",
    "WAWebSyncdFatal",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdKeyTypes",
    "WAWebSyncdWamUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          r("vulture")("OKDKSMF959IZ4CYv61iNWFVE5GM=");
          var n,
            a = yield o("WAWebSchemaSyncActions").getSyncActionsTable().get(t);
          return (
            a &&
              (n = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                a.binarySyncData,
              ).value),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "decodeSyncAction : ",
                  "",
                ])),
              JSON.stringify(n),
            ),
            n
          );
        })),
        _.apply(this, arguments)
      );
    }
    p.doc = "Decode binary sync action value from sync-actions table";
    function f(e) {
      (r("vulture")("5QiVlFh4bvA7WAQmKoEg0-J4C24="),
        o("WAWebSyncdFatal").handleFatalError(e));
    }
    f.doc = "enter syncd fatal state";
    function g(e) {
      return (
        r("vulture")("CyswN3gj-1HBDphD4EAb-dvGnmk="),
        o("WAWebApiActiveMessageRanges").getActiveMessageRanges(e)
      );
    }
    g.doc = "get all active message ranges for a chat";
    function h() {
      return (r("vulture")("kttebtEMf-Tl8JLFMms0RLVizvI="), o("WAWebSyncdDb"));
    }
    h.doc = "SyncDB internal API";
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e === void 0 && (e = 10),
            r("vulture")("wf6vGdNwVUx4WaPx8uPBpCogsO8="));
          var t = yield (m || (m = n("Promise"))).all(
              Array(e)
                .fill(null)
                .map(
                  n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                    return new (r("WAWebMsgKey"))({
                      id: yield r("WAWebMsgKey").newId(),
                      remote: o("WAWebWidFactory").createWid("12345@c.us"),
                      fromMe: !0,
                    });
                  }),
                ),
            ),
            a = (yield r("WAWebStarMessageSync").getStarMessageMutations(
              t,
              !0,
            )).map(function (e) {
              r("vulture")("NnIPNw9NxyLHa0vo9h34xGgVLGM=");
              var t = o(
                "WAWebSyncdCollectionHandlerTypesConverter",
              ).syncActionToSyncData(e.binarySyncAction);
              return o(
                "WAWebSyncdCollectionHandlerTypesConverter",
              ).setMutationToSyncAction(
                {
                  index: e.index,
                  version: e.version,
                  keyId: o("WAWebSyncdKeyTypes").toSyncKeyId(
                    new ArrayBuffer(6),
                  ),
                  indexMac: new ArrayBuffer(32),
                  valueMac: new ArrayBuffer(32),
                  collection: e.collection,
                  binarySyncData: t,
                  timestamp: e.timestamp,
                },
                o("WAWebSyncdConst").SyncActionState.Orphan,
                o("WAWebSyncdConst").Actions.Star,
                o("WAWebSyncdIndexUtils")
                  .getMsgKeyFromStarActionIndex(e.index)
                  .toString(),
                o("WAWebSyncdConst").SyncModelType.Msg,
              );
            });
          yield o("WAWebSyncdDb").setSyncActionRows(
            a.map(o("WAWebSchemaSyncActions").convertFromSyncActionToRow),
          );
        })),
        C.apply(this, arguments)
      );
    }
    y.doc =
      "generate orphan mutations for star message with random message keys";
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (e === void 0 && (e = 10),
            r("vulture")("Ah0RpAdje7VUsgWyra-Zt4vFX9E="));
          var t = Array.from(Array(e).keys(), function () {
              return {
                id: new (r("WAWebMsgKey"))({
                  id: r("WAWebMsgKey").newId_DEPRECATED(),
                  remote: o("WAWebWidFactory").createWid("12345@c.us"),
                  fromMe: !0,
                }),
                t: o("WATimeUtils").unixTimeMs(),
              };
            }),
            n = (yield r("WAWebDeleteMessageForMeSync").getDeleteForMeMutations(
              t,
              !0,
            )).map(function (e) {
              r("vulture")("ouOLNysuo9VZZ1N1bm6lv6F1JcI=");
              var t = o("decodeProtobuf").decodeProtobuf(
                  o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                  e.binarySyncAction,
                ),
                n = o("encodeProtobuf")
                  .encodeProtobuf(
                    o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                    { value: t },
                  )
                  .readBuffer();
              return o(
                "WAWebSyncdCollectionHandlerTypesConverter",
              ).setMutationToSyncAction(
                {
                  index: e.index,
                  version: e.version,
                  keyId: o("WAWebSyncdKeyTypes").toSyncKeyId(
                    new ArrayBuffer(6),
                  ),
                  indexMac: new ArrayBuffer(32),
                  valueMac: new ArrayBuffer(32),
                  collection: e.collection,
                  binarySyncData: n,
                  timestamp: e.timestamp,
                },
                o("WAWebSyncdConst").SyncActionState.Orphan,
                o("WAWebSyncdConst").Actions.DeleteMessageForMe,
                o("WAWebSyncdIndexUtils")
                  .getMsgKeyFromStarActionIndex(e.index)
                  .toString(),
                o("WAWebSyncdConst").SyncModelType.Msg,
              );
            });
          yield o("WAWebSyncdDb").setSyncActionRows(
            n.map(o("WAWebSchemaSyncActions").convertFromSyncActionToRow),
          );
        })),
        v.apply(this, arguments)
      );
    }
    b.doc =
      "generate orphan mutations for delete message for me with random message keys";
    function S() {
      return (
        r("vulture")("8WsqHlPLTIUFhgDJj_mhHqlKSJQ="),
        o("WAWebSyncdWamUtils").getKeyStats()
      );
    }
    S.doc = "SyncD key statistics";
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e;
          r("vulture")("zZjd4jtnN5KxZJu5IoOPEdgrFt0=");
          var t = yield p('["primary_version","current"]');
          return t == null || (e = t.primaryVersionAction) == null
            ? void 0
            : e.version;
        })),
        L.apply(this, arguments)
      );
    }
    R.doc = "getPrimaryVersion";
    function E() {
      return (
        r("vulture")("AX7-sYOs0pZH5P_zZa0gceF-lOM="),
        o("WAWebPrimaryVersion").getPrimaryCurrentVersion()
      );
    }
    E.doc = "current primary app version";
    function k() {
      return (
        r("vulture")("5D4JuWb-GybUYOhHv5QHXGU_y9w="),
        o("WAWebPrimaryVersion").getPrimarySessionStartVersion()
      );
    }
    k.doc = "primary app version at the time of syncd session start";
    function I() {
      return (
        r("vulture")("It9Sc515Sf7ORGDmMfZ4IWlrwj0="),
        r("WAWebSentinel")()
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          r("vulture")("Ou62mX8YKqZDjvqTUTd-nsOPFuo=");
          var e = o("WAWebSchemaSyncActions").getSyncActionsTable(),
            t = yield e.all(),
            n = t.filter(function (e) {
              return (
                e.collection === o("WAWebSyncdConst").CollectionName.Regular &&
                e.actionState !== o("WAWebSyncdConst").SyncActionState.Orphan &&
                e.actionState !== o("WAWebSyncdConst").SyncActionState.Failed
              );
            });
          if (n.length === 0) {
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "No stored SyncD mutations found in regular collection",
                ])),
            );
            return;
          }
          var a = n.reduce(function (e, t) {
            return t.timestamp > e.timestamp ? t : e;
          });
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Found last stored SyncD mutation in regular collection: ",
                "",
              ])),
            a.index,
          );
          var i = o("WATimeUtils").unixTimeMs(),
            l = { timestamp: i },
            m = {
              collection: o("WAWebSyncdConst").CollectionName.Regular,
              index: a.index,
              binarySyncAction: o("encodeProtobuf")
                .encodeProtobuf(
                  o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                  l,
                )
                .readBuffer(),
              version: a.version,
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.REMOVE,
              timestamp: i,
              action: a.action,
            };
          (yield o("WAWebSyncdDb").appendPendingMutationsRows([m]),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Created REMOVE mutation for: ",
                  "",
                ])),
              a.index,
            ),
            yield o("WAWebSyncd").markCollectionsForSync([
              o("WAWebSyncdConst").CollectionName.Regular,
            ]),
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "Submitted REMOVE mutation to server for collection regular",
                ])),
            ));
        })),
        D.apply(this, arguments)
      );
    }
    T.doc =
      "Issues a REMOVE mutation for the last stored SyncD mutation in regular collection";
    function x(e) {
      return (
        r("vulture")("ja4uV4saOhjbe7trd3RbAmuzKIA="),
        o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(
          o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
            .COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY,
          {
            collectionName: e != null ? e : "regular_low",
            timestamp: o("WATimeUtils").unixTime(),
          },
        )
      );
    }
    x.doc = "requestSyncdSnapshotRecovery";
    var $ = {
      enterSyncdFatalState: f,
      getActiveMessageRanges: g,
      decodeBinarySyncAction: p,
      generateOrphanStarMessageMutations: y,
      generateOrphanDeleteMessageForMeMutations: b,
      getSyncDB: h,
      getSyncdKeyStats: S,
      getPrimaryVersion: R,
      getPrimaryCurrentVersion: E,
      getPrimarySessionStartVersion: k,
      sendSentinelPatch: I,
      removeLastStoredSyncDMutationForCollectionRegular: T,
      requestSyncdSnapshotRecovery: x,
    };
    l.default = $;
  },
  98,
);
