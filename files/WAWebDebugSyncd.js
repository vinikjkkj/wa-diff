__d(
  "WAWebDebugSyncd",
  [
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
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t) {
      var n,
        r = await o("WAWebSchemaSyncActions").getSyncActionsTable().get(t);
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
    }
    m.doc = "Decode binary sync action value from sync-actions table";
    function p(e) {
      o("WAWebSyncdFatal").handleFatalError(e);
    }
    p.doc = "enter syncd fatal state";
    function _(e) {
      return o("WAWebApiActiveMessageRanges").getActiveMessageRanges(e);
    }
    _.doc = "get all active message ranges for a chat";
    function f() {
      return o("WAWebSyncdDb");
    }
    f.doc = "SyncDB internal API";
    async function g(e) {
      e === void 0 && (e = 10);
      var t = await Promise.all(
          Array(e)
            .fill(null)
            .map(async function () {
              return new (r("WAWebMsgKey"))({
                id: await r("WAWebMsgKey").newId(),
                remote: o("WAWebWidFactory").createWid("12345@c.us"),
                fromMe: !0,
              });
            }),
        ),
        n = (
          await r("WAWebStarMessageSync").getStarMessageMutations(t, !0)
        ).map(function (e) {
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
      await o("WAWebSyncdDb").setSyncActionRows(
        n.map(o("WAWebSchemaSyncActions").convertFromSyncActionToRow),
      );
    }
    g.doc =
      "generate orphan mutations for star message with random message keys";
    async function h(e) {
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
        n = (
          await r("WAWebDeleteMessageForMeSync").getDeleteForMeMutations(t, !0)
        ).map(function (e) {
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
      await o("WAWebSyncdDb").setSyncActionRows(
        n.map(o("WAWebSchemaSyncActions").convertFromSyncActionToRow),
      );
    }
    h.doc =
      "generate orphan mutations for delete message for me with random message keys";
    function y() {
      return o("WAWebSyncdWamUtils").getKeyStats();
    }
    y.doc = "SyncD key statistics";
    async function C() {
      var e,
        t = await m('["primary_version","current"]');
      return t == null || (e = t.primaryVersionAction) == null
        ? void 0
        : e.version;
    }
    C.doc = "getPrimaryVersion";
    function b() {
      return o("WAWebPrimaryVersion").getPrimaryCurrentVersion();
    }
    b.doc = "current primary app version";
    function v() {
      return o("WAWebPrimaryVersion").getPrimarySessionStartVersion();
    }
    v.doc = "primary app version at the time of syncd session start";
    function S() {
      return r("WAWebSentinel")();
    }
    async function R() {
      var e = o("WAWebSchemaSyncActions").getSyncActionsTable(),
        t = await e.all(),
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
      (await o("WAWebSyncdDb").appendPendingMutationsRows([l]),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "Created REMOVE mutation for: ",
              "",
            ])),
          r.index,
        ),
        await o("WAWebSyncd").markCollectionsForSync([
          o("WASyncdConst").CollectionName.Regular,
        ]),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "Submitted REMOVE mutation to server for collection regular",
            ])),
        ));
    }
    R.doc =
      "Issues a REMOVE mutation for the last stored SyncD mutation in regular collection";
    function L() {
      o("WAWebKeyManagementHandleKeyShareApi").setAppStateSyncKeyShareHandler(
        function (e) {
          return function () {
            return (
              o(
                "WAWebKeyManagementHandleKeyShareApi",
              ).setAppStateSyncKeyShareHandler(function (t) {
                return e;
              }),
              Promise.resolve()
            );
          };
        },
      );
    }
    function E(e) {
      return o("WAWebSendNonMessageDataRequest").sendPeerDataOperationRequest(
        o("WAWebProtobufsE2E.pb").Message$PeerDataOperationRequestType
          .COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY,
        {
          collectionName: e != null ? e : "regular_low",
          timestamp: o("WATimeUtils").unixTime(),
        },
      );
    }
    E.doc = "requestSyncdSnapshotRecovery";
    var k = {
      enterSyncdFatalState: p,
      getActiveMessageRanges: _,
      decodeBinarySyncAction: m,
      generateOrphanStarMessageMutations: g,
      generateOrphanDeleteMessageForMeMutations: h,
      getSyncDB: f,
      getSyncdKeyStats: y,
      getPrimaryVersion: C,
      getPrimaryCurrentVersion: b,
      getPrimarySessionStartVersion: v,
      sendSentinelPatch: S,
      removeLastStoredSyncDMutationForCollectionRegular: R,
      ignoreNextSyncdKeyShare: L,
      requestSyncdSnapshotRecovery: E,
    };
    l.default = k;
  },
  98,
);
