__d(
  "WAWebSyncdMMSUpload",
  [
    "WABase64",
    "WAMediaCalculateFilehash",
    "WAWebSyncdGatingUtils",
    "WAWebSyncdKeyTypes",
    "WAWebSyncdNetCallbacksApi",
    "WAWebSyncdRequestEncode",
    "WAWebUserUtils",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
      s = 2e3,
      u = 10,
      c = 100;
    async function d(e) {
      var t = e.activeSyncKeyId,
        n = e.mutationsBlob,
        r = e.patchMac,
        a = e.snapshotMac,
        i = await o("WAWebSyncdNetCallbacksApi").uploadSyncExternalPatch(n),
        l = await m(i, n);
      return p({ externalMutations: l, keyId: t, patchMac: r, snapshotMac: a });
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
    function p(e) {
      var t = e.externalMutations,
        n = e.keyId,
        a = e.patchMac,
        i = e.snapshotMac,
        l = r("nullthrows")(
          o("WAWebUserUtils").getMaybeMeDeviceId(),
          "self device ID",
        );
      return o("WAWebSyncdRequestEncode").encodeSyncdPatch({
        keyId: { id: o("WAWebSyncdKeyTypes").fromSyncKeyId(n) },
        externalMutations: t,
        snapshotMac: i,
        patchMac: a,
        deviceIndex: l,
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
      (l.exceedInlineMutationCount = _),
      (l.exceedPatchProtobufSize = f));
  },
  98,
);
