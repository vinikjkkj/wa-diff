__d(
  "WAWebDebugSyncd",
  [
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
    "decodeProtobuf",
    "encodeProtobuf",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t) {
      r("vulture")("OKDKSMF959IZ4CYv61iNWFVE5GM=");
      var n,
        a = await o("WAWebSchemaSyncActions").getSyncActionsTable().get(t);
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
    }
    m.doc = "Decode binary sync action value from sync-actions table";
    function p(e) {
      (r("vulture")("5QiVlFh4bvA7WAQmKoEg0-J4C24="),
        o("WAWebSyncdFatal").handleFatalError(e));
    }
    p.doc = "enter syncd fatal state";
    function _(e) {
      return (
        r("vulture")("CyswN3gj-1HBDphD4EAb-dvGnmk="),
        o("WAWebApiActiveMessageRanges").getActiveMessageRanges(e)
      );
    }
    _.doc = "get all active message ranges for a chat";
    function f() {
      return (r("vulture")("kttebtEMf-Tl8JLFMms0RLVizvI="), o("WAWebSyncdDb"));
    }
    f.doc = "SyncDB internal API";
    async function g(e) {
      (e === void 0 && (e = 10), r("vulture")("wf6vGdNwVUx4WaPx8uPBpCogsO8="));
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
          r("vulture")("NnIPNw9NxyLHa0vo9h34xGgVLGM=");
          var t = o(
            "WAWebSyncdCollectionHandlerTypesConverter",
          ).syncActionToSyncData(e.binarySyncAction);
          return o(
            "WAWebSyncdCollectionHandlerTypesConverter",
          ).setMutationToSyncAction({
            action: o("WAWebSyncdConst").Actions.Star,
            actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
            modelId: o("WAWebSyncdIndexUtils")
              .getMsgKeyFromStarActionIndex(e.index)
              .toString(),
            modelType: o("WAWebSyncdConst").SyncModelType.Msg,
            setMutation: {
              index: e.index,
              version: e.version,
              keyId: o("WAWebSyncdKeyTypes").toSyncKeyId(new ArrayBuffer(6)),
              indexMac: new ArrayBuffer(32),
              valueMac: new ArrayBuffer(32),
              collection: e.collection,
              binarySyncData: t,
              timestamp: e.timestamp,
            },
          });
        });
      await o("WAWebSyncdDb").setSyncActionRows(
        n.map(o("WAWebSchemaSyncActions").convertFromSyncActionToRow),
      );
    }
    g.doc =
      "generate orphan mutations for star message with random message keys";
    async function h(e) {
      (e === void 0 && (e = 10), r("vulture")("Ah0RpAdje7VUsgWyra-Zt4vFX9E="));
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
          ).setMutationToSyncAction({
            action: o("WAWebSyncdConst").Actions.DeleteMessageForMe,
            actionState: o("WAWebSyncdConst").SyncActionState.Orphan,
            modelId: o("WAWebSyncdIndexUtils")
              .getMsgKeyFromStarActionIndex(e.index)
              .toString(),
            modelType: o("WAWebSyncdConst").SyncModelType.Msg,
            setMutation: {
              index: e.index,
              version: e.version,
              keyId: o("WAWebSyncdKeyTypes").toSyncKeyId(new ArrayBuffer(6)),
              indexMac: new ArrayBuffer(32),
              valueMac: new ArrayBuffer(32),
              collection: e.collection,
              binarySyncData: n,
              timestamp: e.timestamp,
            },
          });
        });
      await o("WAWebSyncdDb").setSyncActionRows(
        n.map(o("WAWebSchemaSyncActions").convertFromSyncActionToRow),
      );
    }
    h.doc =
      "generate orphan mutations for delete message for me with random message keys";
    function y() {
      return (
        r("vulture")("8WsqHlPLTIUFhgDJj_mhHqlKSJQ="),
        o("WAWebSyncdWamUtils").getKeyStats()
      );
    }
    y.doc = "SyncD key statistics";
    async function C() {
      var e;
      r("vulture")("zZjd4jtnN5KxZJu5IoOPEdgrFt0=");
      var t = await m('["primary_version","current"]');
      return t == null || (e = t.primaryVersionAction) == null
        ? void 0
        : e.version;
    }
    C.doc = "getPrimaryVersion";
    function b() {
      return (
        r("vulture")("AX7-sYOs0pZH5P_zZa0gceF-lOM="),
        o("WAWebPrimaryVersion").getPrimaryCurrentVersion()
      );
    }
    b.doc = "current primary app version";
    function v() {
      return (
        r("vulture")("It9Sc515Sf7ORGDmMfZ4IWlrwj0="),
        r("WAWebSentinel")()
      );
    }
    async function S() {
      r("vulture")("Ou62mX8YKqZDjvqTUTd-nsOPFuo=");
      var e = o("WAWebSchemaSyncActions").getSyncActionsTable(),
        t = await e.all(),
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
      (await o("WAWebSyncdDb").appendPendingMutationsRows([m]),
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "Created REMOVE mutation for: ",
              "",
            ])),
          a.index,
        ),
        await o("WAWebSyncd").markCollectionsForSync([
          o("WAWebSyncdConst").CollectionName.Regular,
        ]),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "Submitted REMOVE mutation to server for collection regular",
            ])),
        ));
    }
    S.doc =
      "Issues a REMOVE mutation for the last stored SyncD mutation in regular collection";
    function R(e) {
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
    R.doc = "requestSyncdSnapshotRecovery";
    var L = {
      enterSyncdFatalState: p,
      getActiveMessageRanges: _,
      decodeBinarySyncAction: m,
      generateOrphanStarMessageMutations: g,
      generateOrphanDeleteMessageForMeMutations: h,
      getSyncDB: f,
      getSyncdKeyStats: y,
      getPrimaryVersion: C,
      getPrimaryCurrentVersion: b,
      sendSentinelPatch: v,
      removeLastStoredSyncDMutationForCollectionRegular: S,
      requestSyncdSnapshotRecovery: R,
    };
    l.default = L;
  },
  98,
);
