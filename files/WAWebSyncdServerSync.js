__d(
  "WAWebSyncdServerSync",
  [
    "Promise",
    "WADeprecatedSendIq",
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebABProps",
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
      C,
      b = 5,
      v = 500,
      S = 419,
      R = 1e3;
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var r = Math.random().toString(36).substr(2, 5);
          yield M(t, r + " start serverSync");
          for (
            var a = [], i = [].concat(t), l = 0;
            (l < b || (i.length > 0 && l < v)) && i.length !== 0;
          ) {
            var s = yield k(i, r),
              u = s.doneCollections,
              c = s.refetchCollections;
            (yield (C || (C = n("Promise"))).all(
              u.map(function (e) {
                return M(
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
              (yield M(i, "error: max iterations"),
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
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.length === 0)
            return { doneCollections: [], refetchCollections: [] };
          try {
            var r = yield T(e, t),
              a = r.collectionsToRefetch,
              i = r.collectionWithEncryptedMutations,
              l = r.collectionWithPendingMutationsIds,
              g = r.localCollectionVersions,
              h = r.rawResponseNode;
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
                Array.from(g.entries())
                  .map(function (e) {
                    var t = e[0],
                      n = e[1];
                    return "\n	" + t + " v" + (n != null ? n : "(undefined)");
                  })
                  .join(""),
              ));
            var y = o(
              "WAWebSyncdResponseParser",
            ).syncResponseParser.parseOrThrow(h.node());
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
            var b = y.map(function (e) {
                var t, n;
                return babelHelpers.extends({}, e, {
                  syncedPendingMutationsId:
                    (t = l.get(e.name)) != null ? t : [],
                  syncedEncryptedMutations:
                    (n = i.get(e.name)) != null ? n : [],
                });
              }),
              v = [],
              S = [];
            (b.forEach(function (e) {
              switch (e.state) {
                case o("WAWebSyncdConst").CollectionState.ErrorRetry:
                case o("WAWebSyncdConst").CollectionState.ErrorFatal:
                case o("WAWebSyncdConst").CollectionState.ErrorResourceLimit:
                case o("WAWebSyncdConst").CollectionState.Blocked:
                  S.push(e);
                  return;
                default:
                  v.push(e);
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
                v.map(function (e) {
                  return e.name;
                }),
              ));
            var R = new (o("WAWebSyncdMetrics").SyncdEventFlow)(),
              L = yield (C || (C = n("Promise"))).all(
                v.map(function (e) {
                  return o(
                    "WAWebSyncdCollectionHandler",
                  ).applyAppStateSyncResponse({
                    collectionDetails: e,
                    localVersion: g.get(e.name),
                    session: t,
                    syncdEventFlow: R,
                  });
                }),
              );
            (R.end(),
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: end apply collections: ",
                    "",
                  ])),
                v.map(function (e) {
                  return e.name;
                }),
              ));
            var E = [];
            return (
              yield C.all(
                L.map(
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
                            ? E.push(e.name)
                            : ((e.state =
                                o("WAWebSyncdConst").CollectionState.Success),
                              S.push(e));
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
                            ? E.push(e.name)
                            : S.push(e);
                      },
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                ),
              ),
              { doneCollections: S, refetchCollections: E }
            );
          } catch (n) {
            var k;
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
                yield M(
                  e,
                  t +
                    " moving to fatal state: " +
                    n.name +
                    " " +
                    n.message +
                    " " +
                    String(n.stack),
                ));
              var I = e.map(function (e) {
                return {
                  state: o("WAWebSyncdConst").CollectionState.ErrorFatal,
                  name: e,
                };
              });
              return { doneCollections: I, refetchCollections: [] };
            }
            if (n instanceof o("WAWebSyncdError").SyncdResourceLimitError)
              return (
                o("WALogger")
                  .WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[",
                        "] syncd: resource limit error, not retrying",
                      ])),
                    t,
                  )
                  .sendLogs("syncd: resource limit error, not retrying"),
                yield M(e, "[" + t + "] resource limit error: " + n.message),
                {
                  doneCollections: e.map(function (e) {
                    return {
                      state:
                        o("WAWebSyncdConst").CollectionState.ErrorResourceLimit,
                      name: e,
                    };
                  }),
                  refetchCollections: [],
                }
              );
            (o("WALogger")
              .WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
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
              yield M(e, "[" + t + "] retryable error: " + n));
            var D = (k = P(n)) != null ? k : n.errorBackoff,
              x = e.map(function (e) {
                return {
                  state: o("WAWebSyncdConst").CollectionState.ErrorRetry,
                  name: e,
                  serverBackoff: D,
                };
              });
            return { doneCollections: x, refetchCollections: [] };
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            g ||
              (g = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: ",
                "",
              ])),
            t,
            c,
          ),
            yield M(e, c));
          var d = new (r("WADeprecatedWapParser"))(
              "rawSyncResponseParser",
              function (e) {
                return e;
              },
            ),
            m = yield o("WADeprecatedSendIq").deprecatedSendIq(u, d);
          if (
            (o("WALogger").LOG(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
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
              yield M(e, "[" + t + "] after sendIq success"),
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
            f = m.errorText;
          throw (
            yield x(i, s, "error: server_error message: " + _ + " " + f),
            _ === S &&
            o("WAWebABProps").getABPropConfigValue(
              "syncd_no_retry_on_resource_limit_enabled",
            ) === !0
              ? new (o("WAWebSyncdError").SyncdResourceLimitError)(f)
              : N(_, f, p)
          );
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
                y ||
                  (y = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: failed to report global error to wam",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("syncd: failed to report global error to wam");
          }
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return !(e instanceof o("WAWebSyncdError").SyncdRetryableError) ||
        e.backoff == null ||
        Number.isNaN(e.backoff)
        ? null
        : e.backoff * R;
    }
    function N(e, t, n) {
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
    function M(e, t) {
      return (C || (C = n("Promise"))).all(
        e.map(function (e) {
          return o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, t);
        }),
      );
    }
    l.serverSync = L;
  },
  98,
);
