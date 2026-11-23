__d(
  "MAWDeleteThreadApi",
  [
    "FBLogger",
    "MAWAuthoritativeThreadsCache",
    "MAWBridge",
    "MAWBridgeEventTransmitter",
    "MAWBridgeTypesCreators",
    "MAWDbParticipantTxns",
    "MAWInMemoryGroupInfoStore",
    "MAWInMemoryThreadStore",
    "MaybeCreateOrUpdateThreadResultCache",
    "WAJids",
    "WALogger",
    "WmiMetadataThreadsWriter",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = async function (n) {
        await o("MAWInMemoryThreadStore").inMemoryThreadsReady;
        var t = o("MAWInMemoryThreadStore")
          .getNonTxReadonlyInMemoryThreadStore()
          .get(n);
        if (t == null)
          throw r("FBLogger")("messenger_web").mustfixThrow(
            "There was no thread to delete in local delete thread",
          );
        var a = [
            o("MAWBridgeEventTransmitter").createDeleteMessagesOfThreadEvent(
              t,
              t.newestMsgTs,
            ),
          ],
          i = o("WAJids").interpretAsGroupJid(t.jid);
        (i != null &&
          (o("MAWInMemoryGroupInfoStore").deleteInMemoryGroupInfo(i),
          a.push({
            tag: "DeleteGroupInvite",
            value: o("MAWBridgeTypesCreators").createBridgeDeleteGroupInvite(
              t.jid,
            ),
          })),
          o("MAWInMemoryThreadStore")
            .getNonTxReadwriteInMemoryThreadStore()
            .delete(t.jid),
          o("WmiMetadataThreadsWriter").deleteThreadPartialOnDisk(t.jid),
          o("MAWDbParticipantTxns").deleteAllParticipantsForThread(t.jid),
          o("MaybeCreateOrUpdateThreadResultCache").deleteCachedThreadResult(
            t.jid,
          ),
          o("MAWAuthoritativeThreadsCache").AuthoritativeThreadsCache.delete(
            t.jid,
          ),
          a.push({ tag: "ThreadHiddenV2", value: t.jid }),
          o("MAWBridge")
            .getBridge()
            .fireAndForget("event", "uiUpdate", { events: a }),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Successfully deleted thread ",
                "",
              ])),
            n,
          ));
      };
    l.deleteThread = s;
  },
  98,
);
