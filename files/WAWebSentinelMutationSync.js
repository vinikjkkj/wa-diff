__d(
  "WAWebSentinelMutationSync",
  [
    "Promise",
    "WALogger",
    "WASyncdConst",
    "WATagsLogger",
    "WATimeUtils",
    "WAWebGetSyncKey",
    "WAWebProtobufsServerSync.pb",
    "WAWebSyncdAction",
    "WAWebSyncdActionUtils",
    "WAWebSyncdIndexUtils",
    "WAWebSyncdKeyManagement",
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
      p = o("WATagsLogger").TAGS(["syncd", "SentinelMutationSync"]),
      _ = (function (t) {
        function r() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(r, t);
        var a = r.prototype;
        return (
          (a.getVersion = function () {
            return 3;
          }),
          (a.getAction = function () {
            return o("WASyncdConst").Actions.Sentinel;
          }),
          (a.applyMutations = function (r) {
            var t = this;
            p.LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "applying mutations...",
                ])),
            );
            var a = 0,
              i = 0,
              l = (m || (m = n("Promise"))).all(
                r.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        try {
                          if (e.operation === "set") {
                            var n,
                              r =
                                (n = e.value.keyExpiration) == null
                                  ? void 0
                                  : n.expiredKeyEpoch;
                            return r == null
                              ? (a++,
                                o("WAWebSyncdIndexUtils").malformedActionValue(
                                  t.collectionName,
                                ))
                              : (yield o(
                                  "WAWebGetSyncKey",
                                ).expireSyncKeyInTransaction(r),
                                {
                                  actionState:
                                    o("WASyncdConst").SyncActionState.Success,
                                });
                          }
                          return (
                            i++,
                            {
                              actionState:
                                o("WASyncdConst").SyncActionState.Unsupported,
                            }
                          );
                        } catch (e) {
                          return {
                            actionState:
                              o("WASyncdConst").SyncActionState.Failed,
                          };
                        }
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              );
            return l.then(function (e) {
              return (
                a > 0 &&
                  o("WALogger").ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "sentinel mutation sync: ",
                        " malformed mutations",
                      ])),
                    a,
                  ),
                i > 0 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "sentinel mutation sync: ",
                        " operations not supported",
                      ])),
                    i,
                  ),
                e
              );
            });
          }),
          (a.getSentinelMutations = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this;
              p.LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "preparing mutations...",
                  ])),
              );
              var t = o("WATimeUtils").unixTimeMs(),
                n = Array.from(o("WASyncdConst").CollectionName.members()),
                r = yield o("WAWebSyncdKeyManagement").getNewestKeyPair();
              if (r == null)
                return (
                  o("WALogger").ERROR(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "sentinel mutation sync: no key pairs",
                      ])),
                  ),
                  []
                );
              var a = r.keyEpoch,
                i = { keyExpiration: { expiredKeyEpoch: a } };
              return n.map(function (n) {
                return o("WAWebSyncdActionUtils").buildPendingMutation({
                  collection: n,
                  indexArgs: [n],
                  operation: o("WAWebProtobufsServerSync.pb")
                    .SyncdMutation$SyncdOperation.SET,
                  version: e.getVersion(),
                  value: i,
                  timestamp: t,
                  action: e.getAction(),
                });
              });
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          r
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      f = new _();
    Object.freeze(f);
    var g = f;
    l.default = g;
  },
  98,
);
