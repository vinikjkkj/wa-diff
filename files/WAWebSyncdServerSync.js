__d(
  "WAWebSyncdServerSync",
  [
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
      b = 500,
      v = 419,
      S = 1e3;
    async function R(t) {
      var n = Math.random().toString(36).substr(2, 5);
      await D(t, n + " start serverSync");
      for (
        var r = [], a = [].concat(t), i = 0;
        (i < C || (a.length > 0 && i < b)) && a.length !== 0;
      ) {
        var l = await L(a, n),
          s = l.doneCollections,
          u = l.refetchCollections;
        (await Promise.all(
          s.map(function (e) {
            return D(
              [e.name],
              n +
                " done collection " +
                e.name +
                `,
            state: ` +
                e.state,
            );
          }),
        ),
          (a = u),
          (r = r.concat(s)),
          i++,
          (n = Math.random().toString(36).substr(2, 5)));
      }
      return (
        a.length > 0 &&
          (await D(a, "error: max iterations"),
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: reached max iterations for collections: ",
                  "",
                ])),
              a,
            )
            .tags("syncd")
            .sendLogs("syncd: max iteration"),
          (r = r.concat(
            a.map(function (e) {
              return {
                state: o("WAWebSyncdConst").CollectionState.ErrorRetry,
                name: e,
              };
            }),
          ))),
        r
      );
    }
    async function L(e, t) {
      if (e.length === 0)
        return { doneCollections: [], refetchCollections: [] };
      try {
        var n = await E(e, t),
          r = n.collectionsToRefetch,
          a = n.collectionWithEncryptedMutations,
          i = n.collectionWithPendingMutationsIds,
          l = n.localCollectionVersions,
          g = n.rawResponseNode;
        (r.length > 0 &&
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: deferred local mutation upload for ",
                "",
              ])),
            r,
          ),
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                "] syncd: local collection versions:",
                "",
              ])),
            t,
            Array.from(l.entries())
              .map(function (e) {
                var t = e[0],
                  n = e[1];
                return (
                  `
	` +
                  t +
                  " v" +
                  (n != null ? n : "(undefined)")
                );
              })
              .join(""),
          ));
        var h = o("WAWebSyncdResponseParser").syncResponseParser.parseOrThrow(
          g.node(),
        );
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
                `] syncd: received sync response for collections:
      `,
                "",
              ])),
            t,
            h.map(function (e) {
              var t =
                `
` + e.name;
              return (
                e.version != null &&
                  (t +=
                    `
	updated to version ` + e.version),
                e.snapshot != null &&
                  (t += `
	contains snapshot`),
                e.patches != null &&
                  (t +=
                    `
	contains ` +
                    e.patches.length +
                    " patches"),
                t
              );
            }),
          ));
        var y = h.map(function (e) {
            var t, n;
            return babelHelpers.extends({}, e, {
              syncedPendingMutationsId: (t = i.get(e.name)) != null ? t : [],
              syncedEncryptedMutations: (n = a.get(e.name)) != null ? n : [],
            });
          }),
          C = [],
          b = [];
        (y.forEach(function (e) {
          switch (e.state) {
            case o("WAWebSyncdConst").CollectionState.ErrorRetry:
            case o("WAWebSyncdConst").CollectionState.ErrorFatal:
            case o("WAWebSyncdConst").CollectionState.ErrorResourceLimit:
            case o("WAWebSyncdConst").CollectionState.Blocked:
              b.push(e);
              return;
            default:
              C.push(e);
          }
          (e.state === o("WAWebSyncdConst").CollectionState.Conflict ||
            e.state === o("WAWebSyncdConst").CollectionState.ConflictHasMore) &&
            o("WAWebSyncdWamAppState").incConflict();
        }),
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[",
                `] syncd: start apply collections:
      `,
                "",
              ])),
            t,
            C.map(function (e) {
              return e.name;
            }),
          ));
        var v = new (o("WAWebSyncdMetrics").SyncdEventFlow)(),
          S = await Promise.all(
            C.map(function (e) {
              return o("WAWebSyncdCollectionHandler").applyAppStateSyncResponse(
                {
                  collectionDetails: e,
                  localVersion: l.get(e.name),
                  session: t,
                  syncdEventFlow: v,
                },
              );
            }),
          );
        (v.end(),
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: end apply collections: ",
                "",
              ])),
            C.map(function (e) {
              return e.name;
            }),
          ));
        var R = [];
        return (
          await Promise.all(
            S.map(async function (e) {
              if (e.state === o("WAWebSyncdConst").CollectionState.Conflict) {
                var t =
                  (
                    await o(
                      "WAWebGetPendingMutation",
                    ).getSyncPendingMutationsByCollectionInTransaction(e.name)
                  ).length > 0;
                t
                  ? R.push(e.name)
                  : ((e.state = o("WAWebSyncdConst").CollectionState.Success),
                    b.push(e));
              } else
                e.state ===
                  o("WAWebSyncdConst").CollectionState.ConflictHasMore ||
                e.state ===
                  o("WAWebSyncdConst").CollectionState.SuccessHasMore ||
                (e.state === o("WAWebSyncdConst").CollectionState.Success &&
                  r.some(function (t) {
                    return t === e.name;
                  }))
                  ? R.push(e.name)
                  : b.push(e);
            }),
          ),
          { doneCollections: b, refetchCollections: R }
        );
      } catch (n) {
        var L;
        if (n instanceof o("WAWebSyncdError").SyncdFatalError) {
          (o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: fatal error: syncd global throws",
                ])),
            )
            .catching(n)
            .sendLogs("syncd: fatal error: syncd global throws " + n.message),
            await D(
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
            await D(e, "[" + t + "] resource limit error: " + n.message),
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
          .sendLogs("syncd: retryable error: syncd global throws " + n.message),
          await D(e, "[" + t + "] retryable error: " + n));
        var T = (L = I(n)) != null ? L : n.errorBackoff,
          x = e.map(function (e) {
            return {
              state: o("WAWebSyncdConst").CollectionState.ErrorRetry,
              name: e,
              serverBackoff: T,
            };
          });
        return { doneCollections: x, refetchCollections: [] };
      }
    }
    async function E(e, t) {
      var n = await o("WAWebSyncdRequestBuilder").buildAppStateSyncRequest(
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
        `] syncd: before sendIq for collections:
    ` +
        e
          .map(function (e) {
            var t, n, r;
            return (
              `
	
          ` +
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
        `

  in flight: ` +
        Array.from(o("WAWebSyncd").getInFlightCollections()).join(",") +
        `
  pending: ` +
        Array.from(o("WAWebSyncd").getPendingCollections()).join(",") +
        `
  is worker? ` +
        o("WAWebRuntimeEnvironmentUtils").isWorker().toString() +
        `
  `;
      (o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose(["[", "] syncd: ", ""])),
        t,
        c,
      ),
        await D(e, c));
      var d = new (r("WADeprecatedWapParser"))(
          "rawSyncResponseParser",
          function (e) {
            return e;
          },
        ),
        m = await o("WADeprecatedSendIq").deprecatedSendIq(u, d);
      if (
        (o("WALogger").LOG(
          h ||
            (h = babelHelpers.taggedTemplateLiteralLoose([
              "[",
              `] syncd: completed network operation for collections:
    `,
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
          await D(e, "[" + t + "] after sendIq success"),
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
        await k(i, s, "error: server_error message: " + _ + " " + f),
        _ === v &&
        o("WAWebABProps").getABPropConfigValue(
          "syncd_no_retry_on_resource_limit_enabled",
        ) === !0
          ? new (o("WAWebSyncdError").SyncdResourceLimitError)(f)
          : T(_, f, p)
      );
    }
    async function k(e, t, n) {
      try {
        var a = await o("WAWebSyncdWamReportingUtils").getShortMdSessionId();
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
    }
    function I(e) {
      return !(e instanceof o("WAWebSyncdError").SyncdRetryableError) ||
        e.backoff == null ||
        Number.isNaN(e.backoff)
        ? null
        : e.backoff * S;
    }
    function T(e, t, n) {
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
    function D(e, t) {
      return Promise.all(
        e.map(function (e) {
          return o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, t);
        }),
      );
    }
    l.serverSync = R;
  },
  98,
);
