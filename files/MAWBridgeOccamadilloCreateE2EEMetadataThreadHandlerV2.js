__d(
  "MAWBridgeOccamadilloCreateE2EEMetadataThreadHandlerV2",
  [
    "DedupMiThreadCreationCache",
    "FBLogger",
    "I64",
    "LSAuthorityLevel",
    "LSCreateE2EEMetadataThreadStoredProcedure",
    "LSFactory",
    "LSIntEnum",
    "MAWCreateOptimisticThread",
    "MAWFolderUtils",
    "MAWGetLSThreadTypeUtil",
    "MAWJids",
    "MAWThreadLoadingState",
    "Promise",
    "asyncToGeneratorRuntime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = "[Occamadillo][CreateE2EEMetadataThreadHandlerV2]";
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.bumpTimestampMs,
            a = t.creationSource,
            i = t.folderId,
            l = t.jid,
            u = t.optimisticThreadKey;
          g(a, l);
          var c =
            u != null
              ? yield e.threads.get((s || (s = o("I64"))).of_string(u))
              : null;
          if (
            c != null &&
            o("DedupMiThreadCreationCache").DedupMiThreadCreationCache.has(l)
          ) {
            b(l);
            return;
          }
          if (c != null && p(c)) {
            h(l, (s || (s = o("I64"))).to_string(c.threadKey));
            return;
          }
          var d = {
            bumpTimestampMs: n,
            createdByLocalDevice: a === "outgoing_message",
            folderType: o("MAWFolderUtils").systemFolderToLSCoreClientFolder(i),
            offlineThreadKey: yield _(c, l, e),
            threadType: o("MAWGetLSThreadTypeUtil").getLSThreadTypeFromJid(l),
            waJid: o("MAWJids").convertChatJidToIntJid(l),
          };
          return (
            C(d),
            r("LSCreateE2EEMetadataThreadStoredProcedure")(
              r("LSFactory")(e),
              d,
            ).then(function () {
              o("DedupMiThreadCreationCache").addToDedupMiThreadCreationCache(
                l,
              );
            })
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = (u || (u = o("LSIntEnum"))).unwrapIntEnum(e.authorityLevel);
      switch (t) {
        case r("LSAuthorityLevel").CLIENT_PARTIAL:
        case r("LSAuthorityLevel").OPTIMISTIC:
        case r("LSAuthorityLevel").SERVER_PARTIAL:
          return !1;
        case r("LSAuthorityLevel").AUTHORITATIVE:
        case r("LSAuthorityLevel").AUTHORITATIVE_PENDING_REPLACEMENT:
        case r("LSAuthorityLevel").CLIENT_AUTHORITATIVE_DELETE:
          return !0;
        default:
          throw r("FBLogger")("messenger_web").mustfixThrow(
            "Unknown authority level",
          );
      }
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          if (t != null) return (e || (e = n("Promise"))).resolve(t.threadKey);
          var i = yield o("MAWCreateOptimisticThread").createOfflineThreadingId(
            a,
          );
          return (
            y(r, i),
            yield (e || (e = n("Promise"))).all([
              o(
                "MAWCreateOptimisticThread",
              ).createOptimisticThreadWithThreadKey(a, i),
              o("MAWThreadLoadingState").markActThreadLoadingAsCompleted(a, {
                intJid: o("MAWJids").convertChatJidToIntJid(r),
                threadKey: i,
              }),
            ]),
            i
          );
        })),
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      r("FBLogger")("messenger_web").info(
        c + " handler called from %s for jid %s",
        e,
        t,
      );
    }
    function h(e, t) {
      r("FBLogger")("messenger_web").info(
        c +
          " handler returned early for jid %s because thread %s was already authoritative",
        e,
        t,
      );
    }
    function y(e, t) {
      r("FBLogger")("messenger_web").info(
        c +
          " no thread exists for jid %s, creating optimistic thread with key %s",
        e,
        (s || (s = o("I64"))).to_string(t),
      );
    }
    function C(e) {
      r("FBLogger")("messenger_web").info(
        c +
          " Calling LSCreateE2EEMetadataThreadStoredProcedure with params: bumpTimestampMs: %s, createdByLocalDevice: %s, folderType: %s, offlineThreadKey: %s, offlineThreadKeySource: %s, threadType: %s, waJid: %s",
        (s || (s = o("I64"))).to_string(e.bumpTimestampMs),
        e.createdByLocalDevice,
        s.to_string(e.folderType),
        s.to_string(e.offlineThreadKey),
        s.to_string(e.threadType),
        s.to_string(e.waJid),
      );
    }
    function b(e) {
      (r("vulture")("t6G0qiRbs8L46rS0s3JKDOtUqnA="),
        r("FBLogger")("messenger_web").info(
          c +
            " LSCreateE2EEMetadataThreadStoredProcedure has already been called for jid %s, early returning",
          e,
        ));
    }
    l.call = d;
  },
  98,
);
