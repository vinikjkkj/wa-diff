__d(
  "WAWebDebugSyncd",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WASyncdKeyTypes",
    "WATimeUtils",
    "WAWebApiActiveMessageRanges",
    "WAWebDeleteMessageForMeSync",
    "WAWebKeyManagementHandleKeyShareApi",
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
    "WAWebSyncdDb",
    "WAWebSyncdFatal",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdWamUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n,
            r = yield o("WAWebSchemaSyncActions").getSyncActionsTable().get(t);
          return (
            r &&
              (n = o("decodeProtobuf").decodeProtobuf(
                o("WAWebProtobufSyncAction.pb").SyncActionDataSpec,
                r.binarySyncData,
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
      o("WAWebSyncdFatal").handleFatalError(e);
    }
    f.doc = "enter syncd fatal state";
    function g(e) {
      return o("WAWebApiActiveMessageRanges").getActiveMessageRanges(e);
    }
    g.doc = "get all active message ranges for a chat";
    function h() {
      return o("WAWebSyncdDb");
    }
    h.doc = "SyncDB internal API";
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          e === void 0 && (e = 10);
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
              var t = o(
                "WAWebSyncdCollectionHandlerTypesConverter",
              ).syncActionToSyncData(e.binarySyncAction);
              return o(
                "WAWebSyncdCollectionHandlerTypesConverter",
              ).setMutationToSyncAction(
                {
                  index: e.index,
                  version: e.version,
                  keyId: o("WASyncdKeyTypes").toSyncKeyId(new ArrayBuffer(6)),
                  indexMac: new ArrayBuffer(32),
                  valueMac: new ArrayBuffer(32),
                  collection: e.collection,
                  binarySyncData: t,
                  timestamp: e.timestamp,
                },
                o("WASyncdConst").SyncActionState.Orphan,
                o("WASyncdConst").Actions.Star,
                o("WAWebSyncdIndexUtils")
                  .getMsgKeyFromStarActionIndex(e.index)
                  .toString(),
                o("WASyncdConst").SyncModelType.Msg,
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
          e === void 0 && (e = 10);
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
                  keyId: o("WASyncdKeyTypes").toSyncKeyId(new ArrayBuffer(6)),
                  indexMac: new ArrayBuffer(32),
                  valueMac: new ArrayBuffer(32),
                  collection: e.collection,
                  binarySyncData: n,
                  timestamp: e.timestamp,
                },
                o("WASyncdConst").SyncActionState.Orphan,
                o("WASyncdConst").Actions.DeleteMessageForMe,
                o("WAWebSyncdIndexUtils")
                  .getMsgKeyFromStarActionIndex(e.index)
                  .toString(),
                o("WASyncdConst").SyncModelType.Msg,
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
      return o("WAWebSyncdWamUtils").getKeyStats();
    }
    S.doc = "SyncD key statistics";
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = yield p('["primary_version","current"]');
          return t == null || (e = t.primaryVersionAction) == null
            ? void 0
            : e.version;
        })),
        L.apply(this, arguments)
      );
    }
    R.doc = "getPrimaryVersion";
    function E() {
      return o("WAWebPrimaryVersion").getPrimaryCurrentVersion();
    }
    E.doc = "current primary app version";
    function k() {
      return o("WAWebPrimaryVersion").getPrimarySessionStartVersion();
    }
    k.doc = "primary app version at the time of syncd session start";
    function I() {
      return r("WAWebSentinel")();
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebSchemaSyncActions").getSyncActionsTable(),
            t = yield e.all(),
            n = t.filter(function (e) {
              return (
                e.collection === o("WASyncdConst").CollectionName.Regular &&
                e.actionState !== o("WASyncdConst").SyncActionState.Orphan &&
                e.actionState !== o("WASyncdConst").SyncActionState.Failed
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
          var r = n.reduce(function (e, t) {
            return t.timestamp > e.timestamp ? t : e;
          });
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Found last stored SyncD mutation in regular collection: ",
                "",
              ])),
            r.index,
          );
          var a = o("WATimeUtils").unixTimeMs(),
            i = { timestamp: a },
            l = {
              collection: o("WASyncdConst").CollectionName.Regular,
              index: r.index,
              binarySyncAction: o("encodeProtobuf")
                .encodeProtobuf(
                  o("WAWebProtobufSyncAction.pb").SyncActionValueSpec,
                  i,
                )
                .readBuffer(),
              version: r.version,
              operation: o("WAWebProtobufsServerSync.pb")
                .SyncdMutation$SyncdOperation.REMOVE,
              timestamp: a,
              action: r.action,
            };
          (yield o("WAWebSyncdDb").appendPendingMutationsRows([l]),
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Created REMOVE mutation for: ",
                  "",
                ])),
              r.index,
            ),
            yield o("WAWebSyncd").markCollectionsForSync([
              o("WASyncdConst").CollectionName.Regular,
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
    function x() {
      o("WAWebKeyManagementHandleKeyShareApi").setAppStateSyncKeyShareHandler(
        function (e) {
          return function () {
            return (
              o(
                "WAWebKeyManagementHandleKeyShareApi",
              ).setAppStateSyncKeyShareHandler(function (t) {
                return e;
              }),
              (m || (m = n("Promise"))).resolve()
            );
          };
        },
      );
    }
    function $(e) {
      return o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(
        o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY,
        {
          collectionName: e != null ? e : "regular_low",
          timestamp: o("WATimeUtils").unixTime(),
        },
      );
    }
    $.doc = "requestSyncdSnapshotRecovery";
    var P = {
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
      ignoreNextSyncdKeyShare: x,
      requestSyncdSnapshotRecovery: $,
    };
    l.default = P;
  },
  98,
);
