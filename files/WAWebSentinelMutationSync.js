__d(
  "WAWebSentinelMutationSync",
  [
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
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = o("WATagsLogger").TAGS(["syncd", "SentinelMutationSync"]),
      p = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.collectionName = o("WASyncdConst").CollectionName.RegularLow),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.getVersion = function () {
            return 3;
          }),
          (r.getAction = function () {
            return o("WASyncdConst").Actions.Sentinel;
          }),
          (r.applyMutations = function (n) {
            var t = this;
            m.LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "applying mutations...",
                ])),
            );
            var r = 0,
              a = 0,
              i = Promise.all(
                n.map(async function (e) {
                  try {
                    if (e.operation === "set") {
                      var n,
                        i =
                          (n = e.value.keyExpiration) == null
                            ? void 0
                            : n.expiredKeyEpoch;
                      return i == null
                        ? (r++,
                          o("WAWebSyncdIndexUtils").malformedActionValue(
                            t.collectionName,
                          ))
                        : (await o(
                            "WAWebGetSyncKey",
                          ).expireSyncKeyInTransaction(i),
                          {
                            actionState:
                              o("WASyncdConst").SyncActionState.Success,
                          });
                    }
                    return (
                      a++,
                      {
                        actionState:
                          o("WASyncdConst").SyncActionState.Unsupported,
                      }
                    );
                  } catch (e) {
                    return {
                      actionState: o("WASyncdConst").SyncActionState.Failed,
                    };
                  }
                }),
              );
            return i.then(function (e) {
              return (
                r > 0 &&
                  o("WALogger").ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "sentinel mutation sync: ",
                        " malformed mutations",
                      ])),
                    r,
                  ),
                a > 0 &&
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "sentinel mutation sync: ",
                        " operations not supported",
                      ])),
                    a,
                  ),
                e
              );
            });
          }),
          (r.getSentinelMutations = async function () {
            var e = this;
            m.LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "preparing mutations...",
                ])),
            );
            var t = o("WATimeUtils").unixTimeMs(),
              n = Array.from(o("WASyncdConst").CollectionName.members()),
              r = await o("WAWebSyncdKeyManagement").getNewestKeyPair();
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
          }),
          n
        );
      })(o("WAWebSyncdAction").AccountSyncdActionBase),
      _ = new p();
    Object.freeze(_);
    var f = _;
    l.default = f;
  },
  98,
);
