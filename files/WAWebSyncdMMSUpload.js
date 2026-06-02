__d(
  "WAWebSyncdMMSUpload",
  [
    "WABase64",
    "WABaseGlobals",
    "WAJids",
    "WAMediaCalculateFilehash",
    "WASyncdKeyTypes",
    "WAWebSyncdGatingUtils",
    "WAWebSyncdNetCallbacksApi",
    "WAWebSyncdRequestEncode",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
      s = 2e3,
      u = 10,
      c = 100;
    async function d(e, t, n, r) {
      var a = await o("WAWebSyncdNetCallbacksApi").uploadSyncExternalPatch(e),
        i = await m(a, e);
      return p(i, t, n, r);
    }
    async function m(e, t) {
      var n = e.directPath,
        r = e.encFilehash,
        a = e.handle,
        i = e.mediaKey,
        l = await o("WAMediaCalculateFilehash").calculateFilehash(t);
      return {
        mediaKey: i,
        directPath: n,
        handle: a,
        fileSizeBytes: t.byteLength,
        fileSha256: o("WABase64").decodeB64(l),
        fileEncSha256: r,
      };
    }
    function p(e, t, n, r) {
      var a = o("WAJids").extractDeviceId(o("WABaseGlobals").getMyDeviceJid());
      return o("WAWebSyncdRequestEncode").encodeSyncdPatch({
        keyId: { id: o("WASyncdKeyTypes").fromSyncKeyId(t) },
        externalMutations: e,
        snapshotMac: n,
        patchMac: r,
        deviceIndex: a,
      });
    }
    function _(t) {
      var n = Math.min(
        s,
        Math.max(
          o("WAWebSyncdGatingUtils").getSyncdInlineMutationsMaxCount(),
          e,
        ),
      );
      return t.length > n;
    }
    function f(e) {
      var t =
        Math.min(
          c,
          Math.max(
            o("WAWebSyncdGatingUtils").getSyncdPatchProtobufMaxSize(),
            u,
          ),
        ) * 1e3;
      return e.byteLength > t;
    }
    ((l.uploadPatch = d),
      (l.buildExternalBlobReference = m),
      (l.exceedInlineMutationCount = _),
      (l.exceedPatchProtobufSize = f));
  },
  98,
);
