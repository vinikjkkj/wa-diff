__d(
  "WAWebSyncdServerSync",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebGetPendingMutation",
    "WAWebRuntimeEnvironmentUtils",
    "WAWebSyncd",
    "WAWebSyncdCollectionHandler",
    "WAWebSyncdConst",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdError",
    "WAWebSyncdMetricFatalError",
    "WAWebSyncdMetrics",
    "WAWebSyncdRequestBuilder",
    "WAWebSyncdResponseParser",
    "WAWebSyncdWamAppState",
    "WAWebSyncdWamReportingUtils",
    "WAWebWamEnumBootstrapAppStateDataStageCode",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
      y,
      C = 5,
      b = 500;
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = Math.random().toString(36).substr(2, 5);
          yield x(t, r + " start serverSync");
          for (
            var a = [], i = [].concat(t), l = 0;
            (l < C || (i.length > 0 && l < b)) && i.length !== 0;
          ) {
            var s = yield R(i, r),
              u = s.doneCollections,
              c = s.refetchCollections;
            (yield (y || (y = n("Promise"))).all(
              u.map(function (e) {
                return x(
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
              (yield x(i, "error: max iterations"),
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
                    state: o("WAWebSyncdConst").CollectionState.ErrorRetry,
                    name: e,
                  };
                }),
              ))),
            a
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length === 0)
            return { doneCollections: [], refetchCollections: [] };
          try {
            var r = yield E(e, t),
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
            var h = o(
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
                h.map(function (e) {
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
            var C = h.map(function (e) {
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
                case o("WAWebSyncdConst").CollectionState.ErrorRetry:
                case o("WAWebSyncdConst").CollectionState.ErrorFatal:
                case o("WAWebSyncdConst").CollectionState.Blocked:
                  v.push(e);
                  return;
                default:
                  b.push(e);
              }
              (e.state === o("WAWebSyncdConst").CollectionState.Conflict ||
                e.state ===
                  o("WAWebSyncdConst").CollectionState.ConflictHasMore) &&
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
              R = yield (y || (y = n("Promise"))).all(
                b.map(function (e) {
                  return o(
                    "WAWebSyncdCollectionHandler",
                  ).applyAppStateSyncResponse({
                    collectionDetails: e,
                    localVersion: f.get(e.name),
                    session: t,
                    syncdEventFlow: S,
                  });
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
            var L = [];
            return (
              yield y.all(
                R.map(
                  (function () {
                    var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* (e) {
                        if (
                          e.state ===
                          o("WAWebSyncdConst").CollectionState.Conflict
                        ) {
                          var t =
                            (yield o(
                              "WAWebGetPendingMutation",
                            ).getSyncPendingMutationsByCollectionInTransaction(
                              e.name,
                            )).length > 0;
                          t
                            ? L.push(e.name)
                            : ((e.state =
                                o("WAWebSyncdConst").CollectionState.Success),
                              v.push(e));
                        } else
                          e.state ===
                            o("WAWebSyncdConst").CollectionState
                              .ConflictHasMore ||
                          e.state ===
                            o("WAWebSyncdConst").CollectionState
                              .SuccessHasMore ||
                          (e.state ===
                            o("WAWebSyncdConst").CollectionState.Success &&
                            a.some(function (t) {
                              return t === e.name;
                            }))
                            ? L.push(e.name)
                            : v.push(e);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              ),
              { doneCollections: v, refetchCollections: L }
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
                yield x(
                  e,
                  t +
                    " moving to fatal state: " +
                    n.name +
                    " " +
                    n.message +
                    " " +
                    String(n.stack),
                ));
              var k = e.map(function (e) {
                return {
                  state: o("WAWebSyncdConst").CollectionState.ErrorFatal,
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
              yield x(e, "[" + t + "] retryable error: " + n));
            var I = e.map(function (e) {
              return {
                state: o("WAWebSyncdConst").CollectionState.ErrorRetry,
                name: e,
                serverBackoff: n.errorBackoff,
              };
            });
            return { doneCollections: I, refetchCollections: [] };
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            yield x(e, c));
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
              yield x(e, "[" + t + "] after sendIq success"),
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
          throw (
            yield I(i, s, "error: server_error message: " + _ + " " + h),
            D(_, h, p)
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var a = yield o(
              "WAWebSyncdWamReportingUtils",
            ).getShortMdSessionId();
            e.forEach(function (e, r) {
              var i;
              e.length !== 0 &&
                o("WAWebSyncdWamReportingUtils").syncReportOutgoingToWam(
                  r,
                  (i = t.get(r)) != null ? i : 0,
                  new ArrayBuffer(0),
                  e,
                  a,
                  n,
                );
            });
          } catch (e) {
            o("WALogger")
              .WARN(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: failed to report global error to wam",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("syncd: failed to report global error to wam");
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
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
    function x(e, t) {
      return (y || (y = n("Promise"))).all(
        e.map(function (e) {
          return o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, t);
        }),
      );
    }
    l.serverSync = v;
  },
  98,
);
