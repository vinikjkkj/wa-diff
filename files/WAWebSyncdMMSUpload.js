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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 100,
      s = 2e3,
      u = 10,
      c = 100;
    function d(e, t, n, r) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o(
                "WAWebSyncdNetCallbacksApi",
              ).uploadSyncExternalPatch(e),
              i = yield p(a, e);
            return f(i, t, n, r);
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.directPath,
            r = e.encFilehash,
            a = e.handle,
            i = e.mediaKey,
            l = yield o("WAMediaCalculateFilehash").calculateFilehash(t);
          return {
            mediaKey: i,
            directPath: n,
            handle: a,
            fileSizeBytes: t.byteLength,
            fileSha256: o("WABase64").decodeB64(l),
            fileEncSha256: r,
          };
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r) {
      var a = o("WAJids").extractDeviceId(o("WABaseGlobals").getMyDeviceJid());
      return o("WAWebSyncdRequestEncode").encodeSyncdPatch({
        keyId: { id: o("WASyncdKeyTypes").fromSyncKeyId(t) },
        externalMutations: e,
        snapshotMac: n,
        patchMac: r,
        deviceIndex: a,
      });
    }
    function g(t) {
      var n = Math.min(
        s,
        Math.max(
          o("WAWebSyncdGatingUtils").getSyncdInlineMutationsMaxCount(),
          e,
        ),
      );
      return t.length > n;
    }
    function h(e) {
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
      (l.buildExternalBlobReference = p),
      (l.exceedInlineMutationCount = g),
      (l.exceedPatchProtobufSize = h));
  },
  98,
);
