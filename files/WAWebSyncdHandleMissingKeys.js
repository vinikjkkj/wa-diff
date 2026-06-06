__d(
  "WAWebSyncdHandleMissingKeys",
  [
    "WALogger",
    "WASyncdKeyTypes",
    "WAWebABProps",
    "WAWebGetMissingKey",
    "WAWebGetSyncKey",
    "WAWebOfflineHandler",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdError",
    "WAWebSyncdKeyCallbacksApi",
    "WAWebSyncdStoreMissingKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = o("WASyncdKeyTypes").toSyncKeyId(new ArrayBuffer(0));
    async function f(t, n) {
      var r = new Set(),
        a = (await o("WAWebGetSyncKey").getAllSyncKeysInTransaction()).map(
          function (e) {
            return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
          },
        );
      (n.records.forEach(function (e) {
        var t = e.keyId.id;
        if (o("WAWebSyncdCryptoUtils").syncKeyIdsEqual(t, _))
          throw new (o("WAWebSyncdError").SyncdFatalError)(
            "snapshot has empty key",
          );
        var n = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(t);
        a.includes(n) || r.add(n);
      }),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: collection ",
              "'s snapshot has missing keys ",
              "",
            ])),
          t,
          Array.from(r),
        ),
        await h(r));
    }
    async function g(e, t) {
      var n = new Set(),
        r = (await o("WAWebGetSyncKey").getAllSyncKeysInTransaction()).map(
          function (e) {
            return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
          },
        ),
        a = 0,
        i = [];
      if (
        (t.forEach(function (e) {
          var t = [e.keyId.id];
          (o("WAWebABProps").getABPropConfigValue(
            "web_request_missing_keys_for_removes",
          ) &&
            e.mutations.forEach(function (e) {
              t.push(e.record.keyId.id);
            }),
            t.forEach(function (t) {
              if (o("WAWebSyncdCryptoUtils").syncKeyIdsEqual(t, _)) {
                var l;
                throw new (o("WAWebSyncdError").SyncdFatalError)(
                  "syncd: patch has empty key. patch device id: " +
                    ((l = e.deviceIndex) != null ? l : "null"),
                );
              }
              var s = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(t);
              !r.includes(s) &&
                !n.has(s) &&
                (a++,
                i.length < 3 &&
                  i.push({
                    id: s,
                    version: e.version.version,
                    deviceIndex: e.deviceIndex,
                  }),
                n.add(s));
            }));
        }),
        a > 0)
      ) {
        var l = i.map(function (e) {
          return (
            "keyId: " +
            e.id +
            ", patch version: " +
            e.version +
            ", patch device id: " +
            String(e.deviceIndex)
          );
        });
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: handleMissingKeysInPatches: ",
              " missing keys => ",
              "",
            ])),
          a,
          l,
        );
      }
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: collection ",
            "'s patches has missing keys ",
            "",
          ])),
        e,
        Array.from(n),
      ),
        await h(n));
    }
    async function h(e) {
      var t = o(
        "WAWebOfflineHandler",
      ).OfflineMessageHandler.isResumeFromRestartComplete()
        ? "idle"
        : "processing";
      if (t !== "idle") {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: _handleMissingKeys: skip, resume in progress",
            ])),
        );
        return;
      }
      var n = Array.from(e);
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: _handleMissingKeys: missing keys [",
            "]",
          ])),
        n,
      );
      var r = new Set(
          (await o("WAWebGetMissingKey").bulkGetMissingKeysInTransaction(n))
            .filter(Boolean)
            .map(function (e) {
              return e.keyHex;
            }),
        ),
        a = n.filter(function (e) {
          return !r.has(e);
        });
      if (
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: _handleMissingKeys: missing keys after filter: [",
              "]",
            ])),
          a,
        ),
        a.length === 0)
      )
        return Promise.resolve();
      var i = a.map(function (e) {
          return o("WASyncdKeyTypes").toSyncKeyId(
            o("WAWebSyncdCryptoUtils").hexToUint8Array(e).buffer,
          );
        }),
        l = await o("WAWebSyncdKeyCallbacksApi").sendSyncdKeyRequest(i);
      await o("WAWebSyncdStoreMissingKeys").addMissingKeys(i, l);
    }
    async function y() {
      var e = await o("WAWebGetMissingKey").getAllMissingKeysInTransaction();
      (o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: requestAllMissingKeys: missing keys: [",
            "]",
          ])),
        e.map(function (e) {
          return e.keyHex;
        }),
      ),
        e.length !== 0 &&
          (await o("WAWebSyncdKeyCallbacksApi").sendSyncdKeyRequest(
            e.map(function (e) {
              return e.keyId;
            }),
          )));
    }
    ((l.handleMissingKeysInSnapshot = f),
      (l.handleMissingKeysInPatches = g),
      (l.handleMissingKeys = h),
      (l.requestAllMissingKeys = y));
  },
  98,
);
