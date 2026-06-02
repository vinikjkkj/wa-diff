__d(
  "WAWebSyncdStoreMissingKeys",
  [
    "WAAsyncSleep",
    "WALogger",
    "WATimeUtils",
    "WAWebBackendApi",
    "WAWebGetMissingKey",
    "WAWebGetSyncKey",
    "WAWebRunInTransaction",
    "WAWebSyncdCryptoUtils",
    "WAWebSyncdGatingUtils",
    "WAWebSyncdMetricFatalError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v;
    async function S() {
      var e = (
        await o("WAWebBackendApi").frontendSendAndReceive(
          "getDeviceFingerprint",
          {},
        )
      ).deviceIndexes;
      return o("WAWebRunInTransaction").runInTransaction(
        { MissingKeyStore: !0 },
        async function (t) {
          var n = t.MissingKeyStore,
            r = await n.getAll();
          if (r.length === 0) return Promise.resolve();
          (r.forEach(function (t) {
            var n = t.deviceResponses;
            n.forEach(function (n, r) {
              e.includes(r) || t.deviceResponses.delete(r);
            });
          }),
            await n.bulkUpdate(r),
            await T({ MissingKeyStore: n }));
        },
      );
    }
    function R(t, n) {
      var r = [],
        a = [];
      return (
        t.forEach(function (e) {
          var t = e.keyData,
            n = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
          t ? r.push(n) : a.push(n);
        }),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[syncd] updateMissingKeys dev=",
              " +keys=",
              " -keys=",
              "",
            ])),
          n,
          r,
          a,
        ),
        o("WAWebRunInTransaction").runInTransaction(
          { MissingKeyStore: !0 },
          async function (e) {
            var t = e.MissingKeyStore;
            if (
              (r.length > 0 &&
                (await t.bulkRemove(r), await E({ MissingKeyStore: t })),
              a.length > 0)
            ) {
              var i = (await t.bulkGet(a)).filter(Boolean);
              (i.forEach(function (e) {
                return e.deviceResponses.set(n, !1);
              }),
                o("WALogger").LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] updateMissingKeys begin dev=",
                      " keys=",
                      "",
                    ])),
                  n,
                  a,
                ),
                await t.bulkUpdate(i),
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[syncd] updateMissingKeys done dev=",
                      "",
                    ])),
                  n,
                ),
                await T({ MissingKeyStore: t }));
            }
          },
        )
      );
    }
    function L() {
      return o("WAWebRunInTransaction").runInTransaction(
        { MissingKeyStore: !0 },
        function (e) {
          var t = e.MissingKeyStore;
          return E({ MissingKeyStore: t });
        },
      );
    }
    async function E(e) {
      var t = e.MissingKeyStore;
      (clearTimeout(v), (v = null));
      var n = await t.getAll();
      if (n.length !== 0) {
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: _setMissingKeyTimeout: missing keys: ",
              "",
            ])),
          n.map(function (e) {
            return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
          }),
        );
        var r = n.reduce(function (e, t) {
            return e.timestamp < t.timestamp ? e : t;
          }),
          a =
            o("WAWebSyncdGatingUtils").getSyncdWaitForKeyTimeoutDays() *
              o("WATimeUtils").DAY_MILLISECONDS -
            (-r.timestamp + o("WATimeUtils").unixTimeMs());
        (o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: earliest missing key: ",
              ", timestamp=",
              ", timeoutMs=",
              "",
            ])),
          o("WAWebSyncdCryptoUtils").syncKeyIdToHex(r.keyId),
          r.timestamp,
          a,
        ),
          (v = setTimeout(k, a)));
      }
    }
    async function k() {
      if (
        (o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: _timeoutWhileWaitingForMissingKey",
            ])),
        ),
        !(await I()))
      ) {
        o("WALogger").LOG(
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: _timeoutWhileWaitingForMissingKey: no expired keys",
            ])),
        );
        return;
      }
      (o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
        o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
          .TIMEOUT_WHILE_WAITING_FOR_MISSING_KEY,
      ),
        o("WALogger")
          .ERROR(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: fatal error: timeout while waiting for missing key",
              ])),
          )
          .sendLogs("syncd fatal error: timeout while waiting for missing key"),
        o("WAWebBackendApi").frontendFireAndForget("handleSyncdFatal", {}));
    }
    async function I() {
      o("WALogger").LOG(
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: check if has expired keys",
          ])),
      );
      var e = (await o("WAWebGetSyncKey").getAllSyncKeysInTransaction()).map(
        function (e) {
          return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
        },
      );
      o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: all keys: ",
            "",
          ])),
        e,
      );
      var t = await o("WAWebGetMissingKey").getAllMissingKeysInTransaction();
      o("WALogger").LOG(
        h ||
          (h = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: missing keys: ",
            "",
          ])),
        t.map(function (e) {
          return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
        }),
      );
      var n = t.filter(function (t) {
        return !e.includes(t.keyHex);
      });
      o("WALogger").LOG(
        y ||
          (y = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: actually missing keys: ",
            "",
          ])),
        t.map(function (e) {
          return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
        }),
      );
      var r = n.filter(function (e) {
        return (
          o("WAWebSyncdGatingUtils").getSyncdWaitForKeyTimeoutDays() *
            o("WATimeUtils").DAY_MILLISECONDS <
          o("WATimeUtils").unixTimeMs() - e.timestamp
        );
      });
      return (
        o("WALogger").LOG(
          C ||
            (C = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: expired keys: ",
              "",
            ])),
          r.map(function (e) {
            return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
          }),
        ),
        r.length > 0
      );
    }
    async function T(e) {
      var t = e.MissingKeyStore,
        n = await t.getAll();
      for (var r of n) {
        var a = !0;
        for (var i of r.deviceResponses.values())
          if (i == null) {
            a = !1;
            break;
          }
        if (a) {
          (o("WALogger")
            .ERROR(
              b ||
                (b = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: fatal error: missing key on all clients",
                ])),
            )
            .sendLogs("syncd: fatal error: missing key on all clients"),
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
              o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                .MISSING_KEY_ON_ALL_CLIENTS,
            ),
            await o("WAAsyncSleep").asyncSleep(5e3),
            o("WAWebBackendApi").frontendFireAndForget("handleSyncdFatal", {}));
          return;
        }
      }
    }
    async function D(e, t) {
      var n = function () {
          var e = new Map();
          return (
            t.forEach(function (t) {
              return e.set(t, null);
            }),
            e
          );
        },
        r = e.map(function (e) {
          return {
            keyHex: o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e),
            keyId: e,
            timestamp: o("WATimeUtils").unixTimeMs(),
            deviceResponses: n(),
          };
        });
      (await o("WAWebGetMissingKey").bulkUpdateMissingKeysInTransaction(r),
        await L());
    }
    ((l.updateMissingKeyDevices = S),
      (l.updateMissingKeys = R),
      (l.setMissingKeyTimeoutInTransaction = L),
      (l.hasExpiredKeys = I),
      (l.addMissingKeys = D));
  },
  98,
);
