__d(
  "WAWebSyncdStoreMissingKeys",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b, v, S;
    function R() {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = (yield o("WAWebBackendApi").frontendSendAndReceive(
            "getDeviceFingerprint",
            {},
          )).deviceIndexes;
          return o("WAWebRunInTransaction").runInTransaction(
            { MissingKeyStore: !0 },
            (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (t) {
                  var r = t.MissingKeyStore,
                    o = yield r.getAll();
                  if (o.length === 0)
                    return (v || (v = n("Promise"))).resolve();
                  (o.forEach(function (t) {
                    var n = t.deviceResponses;
                    n.forEach(function (n, r) {
                      e.includes(r) || t.deviceResponses.delete(r);
                    });
                  }),
                    yield r.bulkUpdate(o),
                    yield N({ MissingKeyStore: r }));
                },
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })(),
          );
        })),
        L.apply(this, arguments)
      );
    }
    function E(t, r) {
      var a = [],
        i = [];
      return (
        t.forEach(function (e) {
          var t = e.keyData,
            n = o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
          t ? a.push(n) : i.push(n);
        }),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[syncd] updateMissingKeys dev=",
              " +keys=",
              " -keys=",
              "",
            ])),
          r,
          a,
          i,
        ),
        o("WAWebRunInTransaction").runInTransaction(
          { MissingKeyStore: !0 },
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = e.MissingKeyStore;
                if (
                  (a.length > 0 &&
                    (yield t.bulkRemove(a), yield I({ MissingKeyStore: t })),
                  i.length > 0)
                ) {
                  var n = (yield t.bulkGet(i)).filter(Boolean);
                  (n.forEach(function (e) {
                    return e.deviceResponses.set(r, !1);
                  }),
                    o("WALogger").LOG(
                      s ||
                        (s = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] updateMissingKeys begin dev=",
                          " keys=",
                          "",
                        ])),
                      r,
                      i,
                    ),
                    yield t.bulkUpdate(n),
                    o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "[syncd] updateMissingKeys done dev=",
                          "",
                        ])),
                      r,
                    ),
                    yield N({ MissingKeyStore: t }));
                }
              },
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
        )
      );
    }
    function k() {
      return o("WAWebRunInTransaction").runInTransaction(
        { MissingKeyStore: !0 },
        function (e) {
          var t = e.MissingKeyStore;
          return I({ MissingKeyStore: t });
        },
      );
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.MissingKeyStore;
          (clearTimeout(S), (S = null));
          var n = yield t.getAll();
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
              (S = setTimeout(D, a)));
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D() {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: _timeoutWhileWaitingForMissingKey",
                ])),
            ),
            !(yield $()))
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
              .sendLogs(
                "syncd fatal error: timeout while waiting for missing key",
              ),
            o("WAWebBackendApi").frontendFireAndForget("handleSyncdFatal", {}));
        })),
        x.apply(this, arguments)
      );
    }
    function $() {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: check if has expired keys",
              ])),
          );
          var e = (yield o(
            "WAWebGetSyncKey",
          ).getAllSyncKeysInTransaction()).map(function (e) {
            return o("WAWebSyncdCryptoUtils").syncKeyIdToHex(e.keyId);
          });
          o("WALogger").LOG(
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: all keys: ",
                "",
              ])),
            e,
          );
          var t =
            yield o("WAWebGetMissingKey").getAllMissingKeysInTransaction();
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
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.MissingKeyStore,
            n = yield t.getAll();
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
                yield o("WAAsyncSleep").asyncSleep(5e3),
                o("WAWebBackendApi").frontendFireAndForget(
                  "handleSyncdFatal",
                  {},
                ));
              return;
            }
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
          (yield o("WAWebGetMissingKey").bulkUpdateMissingKeysInTransaction(r),
            yield k());
        })),
        A.apply(this, arguments)
      );
    }
    ((l.updateMissingKeyDevices = R),
      (l.updateMissingKeys = E),
      (l.setMissingKeyTimeoutInTransaction = k),
      (l.hasExpiredKeys = $),
      (l.addMissingKeys = w));
  },
  98,
);
