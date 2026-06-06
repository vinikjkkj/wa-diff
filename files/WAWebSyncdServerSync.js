__d(
  "WAWebSyncdServerSync",
  [
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
      h = 5,
      y = 500;
    async function C(t) {
      var n = Math.random().toString(36).substr(2, 5);
      await R(t, n + " start serverSync");
      for (
        var r = [], a = [].concat(t), i = 0;
        (i < h || (a.length > 0 && i < y)) && a.length !== 0;
      ) {
        var l = await b(a, n),
          s = l.doneCollections,
          u = l.refetchCollections;
        (await Promise.all(
          s.map(function (e) {
            return R(
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
          (await R(a, "error: max iterations"),
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
                state: o("WASyncdConst").CollectionState.ErrorRetry,
                name: e,
              };
            }),
          ))),
        r
      );
    }
    async function b(e, t) {
      if (e.length === 0)
        return { doneCollections: [], refetchCollections: [] };
      try {
        var n = await v(e, t),
          r = n.collectionsToRefetch,
          a = n.collectionWithEncryptedMutations,
          i = n.collectionWithPendingMutationsIds,
          l = n.localCollectionVersions,
          f = n.rawResponseNode;
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
        var g = o("WAWebSyncdResponseParser").syncResponseParser.parseOrThrow(
          f.node(),
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
            g.map(function (e) {
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
        var h = g.map(function (e) {
            var t, n;
            return babelHelpers.extends({}, e, {
              syncedPendingMutationsId: (t = i.get(e.name)) != null ? t : [],
              syncedEncryptedMutations: (n = a.get(e.name)) != null ? n : [],
            });
          }),
          y = [],
          C = [];
        (h.forEach(function (e) {
          switch (e.state) {
            case o("WASyncdConst").CollectionState.ErrorRetry:
            case o("WASyncdConst").CollectionState.ErrorFatal:
            case o("WASyncdConst").CollectionState.Blocked:
              C.push(e);
              return;
            default:
              y.push(e);
          }
          (e.state === o("WASyncdConst").CollectionState.Conflict ||
            e.state === o("WASyncdConst").CollectionState.ConflictHasMore) &&
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
            y.map(function (e) {
              return e.name;
            }),
          ));
        var b = new (o("WAWebSyncdMetrics").SyncdEventFlow)(),
          S = await Promise.all(
            y.map(function (e) {
              return o("WAWebSyncdCollectionHandler").applyAppStateSyncResponse(
                e,
                t,
                l.get(e.name),
                b,
              );
            }),
          );
        (b.end(),
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: end apply collections: ",
                "",
              ])),
            y.map(function (e) {
              return e.name;
            }),
          ));
        var L = [];
        return (
          await Promise.all(
            S.map(async function (e) {
              if (e.state === o("WASyncdConst").CollectionState.Conflict) {
                var t =
                  (
                    await o(
                      "WAWebGetPendingMutation",
                    ).getSyncPendingMutationsByCollectionInTransaction(e.name)
                  ).length > 0;
                t
                  ? L.push(e.name)
                  : ((e.state = o("WASyncdConst").CollectionState.Success),
                    C.push(e));
              } else
                e.state === o("WASyncdConst").CollectionState.ConflictHasMore ||
                e.state === o("WASyncdConst").CollectionState.SuccessHasMore ||
                (e.state === o("WASyncdConst").CollectionState.Success &&
                  r.some(function (t) {
                    return t === e.name;
                  }))
                  ? L.push(e.name)
                  : C.push(e);
            }),
          ),
          { doneCollections: C, refetchCollections: L }
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
            .sendLogs("syncd: fatal error: syncd global throws " + n.message),
            await R(
              e,
              t +
                " moving to fatal state: " +
                n.name +
                " " +
                n.message +
                " " +
                n.stack,
            ));
          var E = e.map(function (e) {
            return {
              state: o("WASyncdConst").CollectionState.ErrorFatal,
              name: e,
            };
          });
          return { doneCollections: E, refetchCollections: [] };
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
          .sendLogs("syncd: retryable error: syncd global throws " + n.message),
          await R(e, "[" + t + "] retryable error: " + n));
        var k = e.map(function (e) {
          return {
            state: o("WASyncdConst").CollectionState.ErrorRetry,
            name: e,
            serverBackoff: n.errorBackoff,
          };
        });
        return { doneCollections: k, refetchCollections: [] };
      }
    }
    async function v(e, t) {
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
        f ||
          (f = babelHelpers.taggedTemplateLiteralLoose(["[", "] syncd: ", ""])),
        t,
        c,
      ),
        await R(e, c));
      var d = new (r("WADeprecatedWapParser"))(
          "rawSyncResponseParser",
          function (e) {
            return e;
          },
        ),
        m = await o("WADeprecatedSendIq").deprecatedSendIq(u, d);
      if (
        (o("WALogger").LOG(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
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
          await R(e, "[" + t + "] after sendIq success"),
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
      throw S(_, h, p);
    }
    function S(e, t, n) {
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
    function R(e, t) {
      return Promise.all(
        e.map(function (e) {
          return o("WAWebSyncdDbCallbacksApi").writeSyncdLog(e, t);
        }),
      );
    }
    l.serverSync = C;
  },
  98,
);
