__d(
  "WAWebSyncdServerSync",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WASyncdConst",
    "WAWebGetPendingMutation",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSyncd",
    "WAWebSyncdCollectionHandler",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError",
    "WAWebSyncdMetrics",
    "WAWebSyncdRequestBuilder",
    "WAWebSyncdResponseParser",
    "WAWebSyncdWamAppState",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
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
      f,
      g,
      h,
      y = 5,
      C = 500;
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = Math.random().toString(36).substr(2, 5);
          yield I(t, r + " start serverSync");
          for (
            var a = [], i = [].concat(t), l = 0;
            (l < y || (i.length > 0 && l < C)) && i.length !== 0;
          ) {
            var s = yield S(i, r),
              u = s.doneCollections,
              c = s.refetchCollections;
            (yield (h || (h = n("Promise"))).all(
              u.map(function (e) {
                return I(
                  [e.name],
                  r +
                    " done collection " +
                    e.name +
                    ",\n            state: " +
                    e.state,
                );
              }),
            ),
              (i = c),
              (a = a.concat(u)),
              l++,
              (r = Math.random().toString(36).substr(2, 5)));
          }
          return (
            i.length > 0 &&
              (yield I(i, "error: max iterations"),
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: reached max iterations for collections: ",
                      "",
                    ])),
                  i,
                )
                .tags("syncd")
                .sendLogs("syncd: max iteration"),
              (a = a.concat(
                i.map(function (e) {
                  return {
                    state: o("WASyncdConst").CollectionState.ErrorRetry,
                    name: e,
                  };
                }),
              ))),
            a
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length === 0)
            return { doneCollections: [], refetchCollections: [] };
          try {
            var r = yield L(e, t),
              a = r.collectionsToRefetch,
              i = r.collectionWithEncryptedMutations,
              l = r.collectionWithPendingMutationsIds,
              f = r.localCollectionVersions,
              g = r.rawResponseNode;
            (a.length > 0 &&
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: deferred local mutation upload for ",
                    "",
                  ])),
                a,
              ),
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: local collection versions:",
                    "",
                  ])),
                t,
                Array.from(f.entries())
                  .map(function (e) {
                    var t = e[0],
                      n = e[1];
                    return "\n	" + t + " v" + (n != null ? n : "(undefined)");
                  })
                  .join(""),
              ));
            var y = o(
              "WAWebSyncdResponseParser",
            ).syncResponseParser.parseOrThrow(g.node());
            (o(
              "WAWebSyncdCriticalBootstrapProcessingApi",
            ).logCriticalBootstrapStageIfNecessary(
              o("WAWebWamEnumBootstrapAppStateDataStageCode")
                .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.RESPONSE_PARSED_VALID,
            ),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: received sync response for collections:\n      ",
                    "",
                  ])),
                t,
                y.map(function (e) {
                  var t = "\n" + e.name;
                  return (
                    e.version != null &&
                      (t += "\n	updated to version " + e.version),
                    e.snapshot != null && (t += "\n	contains snapshot"),
                    e.patches != null &&
                      (t += "\n	contains " + e.patches.length + " patches"),
                    t
                  );
                }),
              ));
            var C = y.map(function (e) {
                var t, n;
                return babelHelpers.extends({}, e, {
                  syncedPendingMutationsId:
                    (t = l.get(e.name)) != null ? t : [],
                  syncedEncryptedMutations:
                    (n = i.get(e.name)) != null ? n : [],
                });
              }),
              b = [],
              v = [];
            (C.forEach(function (e) {
              switch (e.state) {
                case o("WASyncdConst").CollectionState.ErrorRetry:
                case o("WASyncdConst").CollectionState.ErrorFatal:
                case o("WASyncdConst").CollectionState.Blocked:
                  v.push(e);
                  return;
                default:
                  b.push(e);
              }
              (e.state === o("WASyncdConst").CollectionState.Conflict ||
                e.state ===
                  o("WASyncdConst").CollectionState.ConflictHasMore) &&
                o("WAWebSyncdWamAppState").incConflict();
            }),
              o("WALogger").LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: start apply collections:\n      ",
                    "",
                  ])),
                t,
                b.map(function (e) {
                  return e.name;
                }),
              ));
            var S = new (o("WAWebSyncdMetrics").SyncdEventFlow)(),
              R = yield (h || (h = n("Promise"))).all(
                b.map(function (e) {
                  return o(
                    "WAWebSyncdCollectionHandler",
                  ).applyAppStateSyncResponse(e, t, f.get(e.name), S);
                }),
              );
            (S.end(),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: end apply collections: ",
                    "",
                  ])),
                b.map(function (e) {
                  return e.name;
                }),
              ));
            var E = [];
            return (
              yield h.all(
                R.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        if (
                          e.state === o("WASyncdConst").CollectionState.Conflict
                        ) {
                          var t =
                            (yield o(
                              "WAWebGetPendingMutation",
                            ).getSyncPendingMutationsByCollectionInTransaction(
                              e.name,
                            )).length > 0;
                          t
                            ? E.push(e.name)
                            : ((e.state =
                                o("WASyncdConst").CollectionState.Success),
                              v.push(e));
                        } else
                          e.state ===
                            o("WASyncdConst").CollectionState.ConflictHasMore ||
                          e.state ===
                            o("WASyncdConst").CollectionState.SuccessHasMore ||
                          (e.state ===
                            o("WASyncdConst").CollectionState.Success &&
                            a.some(function (t) {
                              return t === e.name;
                            }))
                            ? E.push(e.name)
                            : v.push(e);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              ),
              { doneCollections: v, refetchCollections: E }
            );
          } catch (n) {
            if (n instanceof o("WAWebSyncdError").SyncdFatalError) {
              (o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: fatal error: syncd global throws",
                    ])),
                )
                .catching(n)
                .sendLogs(
                  "syncd: fatal error: syncd global throws " + n.message,
                ),
                yield I(
                  e,
                  t +
                    " moving to fatal state: " +
                    n.name +
                    " " +
                    n.message +
                    " " +
                    n.stack,
                ));
              var k = e.map(function (e) {
                return {
                  state: o("WASyncdConst").CollectionState.ErrorFatal,
                  name: e,
                };
              });
              return { doneCollections: k, refetchCollections: [] };
            }
            (o("WALogger")
              .WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] syncd: retryable error: syncd global throws ",
                    "",
                  ])),
                t,
                n.message,
              )
              .sendLogs(
                "syncd: retryable error: syncd global throws " + n.message,
              ),
              yield I(e, "[" + t + "] retryable error: " + n));
            var T = e.map(function (e) {
              return {
                state: o("WASyncdConst").CollectionState.ErrorRetry,
                name: e,
                serverBackoff: n.errorBackoff,
              };
            });
            return { doneCollections: T, refetchCollections: [] };
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o("WAWebSyncdRequestBuilder").buildAppStateSyncRequest(
              e,
              t,
            ),
            a = n.collectionsToRefetch,
            i = n.collectionWithEncryptedMutations,
            l = n.collectionWithPendingMutationsIds,
            s = n.localCollectionVersions,
            u = n.syncIqNode;
          o(
            "WAWebSyncdCriticalBootstrapProcessingApi",
          ).logCriticalBootstrapStageIfNecessary(
            o("WAWebWamEnumBootstrapAppStateDataStageCode")
              .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.REQUEST_BUILT,
          );
          var c =
            "[" +
            t +
            "] syncd: before sendIq for collections:\n    " +
            e
              .map(function (e) {
                var t, n, r;
                return (
                  "\n	\n          " +
                  e +
                  " v" +
                  ((t = s.get(e)) != null ? t : "(undefined)") +
                  " " +
                  (((n = (r = l.get(e)) == null ? void 0 : r.length) != null
                    ? n
                    : 0) > 0 && s.get(e) != null
                    ? " with local changes"
                    : "")
                );
              })
              .join(",") +
            "\n\n  in flight: " +
            Array.from(o("WAWebSyncd").getInFlightCollections()).join(",") +
            "\n  pending: " +
            Array.from(o("WAWebSyncd").getPendingCollections()).join(",") +
            "\n  is worker? " +
            o("WAWebRuntimeEnvironmentUtils").isWorker().toString() +
            "\n  ";
          (o("WALogger").LOG(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: ",
                "",
              ])),
            t,
            c,
          ),
            yield I(e, c));
          var d = new (r("WADeprecatedWapParser"))(
              "rawSyncResponseParser",
              function (e) {
                return e;
              },
            ),
            m = yield o("WADeprecatedSendIq").deprecatedSendIq(u, d);
          if (
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "[",
                  "] syncd: completed network operation for collections:\n    ",
                  "",
                ])),
              t,
              e,
            ),
            o(
              "WAWebSyncdCriticalBootstrapProcessingApi",
            ).logCriticalBootstrapStageIfNecessary(
              o("WAWebWamEnumBootstrapAppStateDataStageCode")
                .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.RESPONSE_RECEIVED,
            ),
            m.success)
          )
            return (
              yield I(e, "[" + t + "] after sendIq success"),
              {
                rawResponseNode: m.result,
                collectionWithPendingMutationsIds: l,
                collectionWithEncryptedMutations: i,
                localCollectionVersions: s,
                collectionsToRefetch: a,
              }
            );
          var p = m.errorBackoff,
            _ = m.errorCode,
            h = m.errorText;
          throw k(_, h, p);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      e: {
        if (e === 400) {
          return (
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
              o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                .XMPP_BAD_REQUEST_GLOBAL_ERROR,
            ),
            new (o("WAWebSyncdError").SyncdFatalError)(t)
          );
          break e;
        }
        if (e === 404) {
          return (
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
              o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                .XMPP_NOT_FOUND_GLOBAL_ERROR,
            ),
            new (o("WAWebSyncdError").SyncdFatalError)(t)
          );
          break e;
        }
        if (e === 405) {
          return (
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
              o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                .XMPP_BAD_METHOD_GLOBAL_ERROR,
            ),
            new (o("WAWebSyncdError").SyncdFatalError)(t)
          );
          break e;
        }
        if (e === 406) {
          return (
            o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
              o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                .XMPP_NOT_ACCEPTABLE_GLOBAL_ERROR,
            ),
            new (o("WAWebSyncdError").SyncdFatalError)(t)
          );
          break e;
        }
        return new (o("WAWebSyncdError").SyncdRetryableError)(t, n);
      }
    }
    function I(e, t) {
      return (h || (h = n("Promise"))).all(
        e.map(function (e) {
          return o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, t);
        }),
      );
    }
    l.serverSync = b;
  },
  98,
);
