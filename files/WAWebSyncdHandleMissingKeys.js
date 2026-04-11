__d(
  "WAWebSyncdHandleMissingKeys",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      _,
      f = o("WASyncdKeyTypes").toSyncKeyId(new ArrayBuffer(0));
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = new Set(),
            a = (yield o("WAWebGetSyncKey").getAllSyncKeysInTransaction()).map(
              function (e) {
                return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
              },
            );
          (n.records.forEach(function (e) {
            var t = e.keyId.id;
            if (o("WAWebSyncdCryptoUtils").syncKeyIdsEqual(t, f))
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
            yield b(r));
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = new Set(),
            r = (yield o("WAWebGetSyncKey").getAllSyncKeysInTransaction()).map(
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
                  if (o("WAWebSyncdCryptoUtils").syncKeyIdsEqual(t, f)) {
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
            yield b(n));
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
          var r = Array.from(e);
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: _handleMissingKeys: missing keys [",
                "]",
              ])),
            r,
          );
          var a = new Set(
              (yield o("WAWebGetMissingKey").bulkGetMissingKeysInTransaction(r))
                .filter(Boolean)
                .map(function (e) {
                  return e.keyHex;
                }),
            ),
            i = r.filter(function (e) {
              return !a.has(e);
            });
          if (
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: _handleMissingKeys: missing keys after filter: [",
                  "]",
                ])),
              i,
            ),
            i.length === 0)
          )
            return (_ || (_ = n("Promise"))).resolve();
          var l = i.map(function (e) {
              return o("WASyncdKeyTypes").toSyncKeyId(
                o("WAWebSyncdCryptoUtils").hexToUint8Array(e).buffer,
              );
            }),
            s = yield o("WAWebSyncdKeyCallbacksApi").sendSyncdKeyRequest(l);
          yield o("WAWebSyncdStoreMissingKeys").addMissingKeys(l, s);
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e =
            yield o("WAWebGetMissingKey").getAllMissingKeysInTransaction();
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
              (yield o("WAWebSyncdKeyCallbacksApi").sendSyncdKeyRequest(
                e.map(function (e) {
                  return e.keyId;
                }),
              )));
        })),
        R.apply(this, arguments)
      );
    }
    ((l.handleMissingKeysInSnapshot = g),
      (l.handleMissingKeysInPatches = y),
      (l.handleMissingKeys = b),
      (l.requestAllMissingKeys = S));
  },
  98,
);
