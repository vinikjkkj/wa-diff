__d(
  "WAWebSyncd",
  [
    "WALogger",
    "WASyncdConst",
    "WAWebGetCollectionVersion",
    "WAWebGetMissingKey",
    "WAWebGetPendingMutation",
    "WAWebGetSyncAction",
    "WAWebGetSyncKey",
    "WAWebSyncdAntiTampering",
    "WAWebSyncdCollectionsStateMachine",
    "WAWebSyncdCriticalBootstrapProcessingApi",
    "WAWebSyncdDbCallbacksApi",
    "WAWebSyncdDisabled",
    "WAWebSyncdMetricFatalError",
    "WAWebSyncdOrphan",
    "WAWebSyncdServerSync",
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
      h,
      y,
      C,
      b,
      v,
      S,
      R,
      L,
      E,
      k,
      I,
      T,
      D,
      x,
      $,
      P = 1e3,
      N = 1e3 * 60 * 60,
      M = 2,
      w = new Set(),
      A = new Set(),
      F,
      O = !1,
      B = 0,
      W = 0;
    async function q(t, n) {
      var a = n != null ? await U(t, n) : t;
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: marking for sync: ",
              "",
            ])),
          a,
        ),
        a.forEach(function (e) {
          var t = r("WAWebSyncdCollectionsStateMachine").getCollectionState(e);
          (o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: ",
                " state before sync: ",
                "",
              ])),
            e,
            t,
          ),
            t === o("WASyncdConst").CollectionSyncState.UpToDate
              ? r("WAWebSyncdCollectionsStateMachine").moveCollectionsToDirty([
                  e,
                ])
              : t === o("WASyncdConst").CollectionSyncState.Dirty &&
                (A = new Set([].concat(Array.from(A), [e]))));
        }),
        await r("WAWebSyncdCollectionsStateMachine").persistToDb(),
        j()
      );
    }
    async function U(e, t) {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: start filter collections: ",
            "",
          ])),
        e,
      );
      var n = await o(
          "WAWebGetCollectionVersion",
        ).bulkGetCollectionVersionsInTransaction(e),
        r = new Map(
          e.map(function (e, t) {
            var r;
            return [e, (r = n[t]) == null ? void 0 : r.version];
          }),
        );
      return e.filter(function (e) {
        var n = r.get(e);
        if (n == null)
          return (
            o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: local version for ",
                  " missing; will mark for sync.",
                ])),
              e,
            ),
            !0
          );
        var a = t.get(e);
        return a == null
          ? (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: server version for ",
                  " missing; will mark for sync.",
                ])),
              e,
            ),
            !0)
          : n < a
            ? (o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: localV=",
                    " < serverV=",
                    " for ",
                    "; sync",
                  ])),
                n,
                a,
                e,
              ),
              !0)
            : (o("WALogger").LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: localV=",
                    " >= serverV=",
                    " for ",
                    "; skip",
                  ])),
                n,
                a,
                e,
              ),
              !1);
      });
    }
    async function V() {
      var e,
        t = await o("WAWebGetSyncAction").countSyncActionsInTransaction();
      (e = o("WAWebSyncdWamAppState")).setStoredMutationCount(t);
      var n = await o(
        "WAWebGetSyncAction",
      ).getSyncActionsByActionStatesInTransaction([
        o("WASyncdConst").SyncActionState.Malformed,
      ]);
      e.setInvalidActionCount(n.length);
      var r = await o(
        "WAWebGetSyncAction",
      ).getSyncActionsByActionStatesInTransaction([
        o("WASyncdConst").SyncActionState.Unsupported,
      ]);
      e.setUnsupportedActionCount(r.length);
      var a = await o("WAWebGetMissingKey").getMissingKeyCountTransaction();
      e.setMissingKeyCount(a);
    }
    async function H() {}
    async function G() {}
    function z() {
      var e = r(
        "WAWebSyncdCollectionsStateMachine",
      ).getCollectionsInStateBlocked();
      return (
        o("WALogger").LOG(
          _ ||
            (_ = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: sync blocked collections: ",
              "",
            ])),
          e,
        ),
        r("WAWebSyncdCollectionsStateMachine").moveCollectionsToDirty(e),
        (A = new Set([].concat(Array.from(A), Array.from(w)))),
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: syncBlockedCollections blocked=",
              " inflight=",
              "",
            ])),
          e,
          Array.from(w),
        ),
        j()
      );
    }
    async function j() {
      if (o("WAWebSyncdDisabled").isSyncdDisabled()) return Promise.resolve();
      var e = r(
        "WAWebSyncdCollectionsStateMachine",
      ).getCollectionsInStateDirty();
      o("WALogger").LOG(
        g ||
          (g = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: dirty collections: ",
            "",
          ])),
        e,
      );
      var t = new Set(
        e.filter(function (e) {
          return !w.has(e);
        }),
      );
      if (t.size === 0)
        return (
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: no collections to sync",
              ])),
          ),
          Promise.resolve()
        );
      var n = [];
      try {
        ((w = new Set([].concat(Array.from(w), Array.from(t)))),
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: initiate server sync",
              ])),
          ),
          (n = await o("WAWebSyncdServerSync").serverSync(Array.from(t))),
          o("WALogger").LOG(
            C ||
              (C = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: server sync successful",
              ])),
          ));
        var a = n.filter(function (e) {
          return e.state === o("WASyncdConst").CollectionState.ErrorRetry;
        });
        (a.length > 0 && ((W = a[0].serverBackoff || 0), (B = 0)), J(n));
      } catch (e) {
        (o("WALogger").LOG(
          b ||
            (b = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: exception during sync(): ",
              "",
            ])),
          e,
        ),
          r("WAWebSyncdCollectionsStateMachine").moveCollectionsToFiniteRetry(
            Array.from(t),
          ));
      } finally {
        (o("WALogger").LOG(
          v ||
            (v = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: cleanup after sync()",
            ])),
        ),
          r("WAWebSyncdCollectionsStateMachine").persistToDb(),
          (w = new Set(
            Array.from(w).filter(function (e) {
              return !t.has(e);
            }),
          )),
          Y(),
          await o("WAWebSyncdDbCallbacksApi").handleSyncCompleted(n));
      }
    }
    function K() {
      if (!o("WAWebSyncdDisabled").isSyncdDisabled()) {
        var e = new Set(
          r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateRetry(),
        );
        e.size !== 0 &&
          (F = setTimeout(
            async function () {
              try {
                ((O = !0),
                  (B += 1),
                  o("WALogger").LOG(
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: initiate server sync retry",
                      ])),
                  ));
                var t = await o("WAWebSyncdServerSync").serverSync(
                  Array.from(e),
                );
                (o("WALogger").LOG(
                  R ||
                    (R = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: server sync retry successful",
                    ])),
                ),
                  J(t));
              } catch (t) {
                (o("WALogger").LOG(
                  L ||
                    (L = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: exception during handleRetry(): ",
                      "",
                    ])),
                  t,
                ),
                  r(
                    "WAWebSyncdCollectionsStateMachine",
                  ).moveCollectionsToFiniteRetry(Array.from(e)));
              } finally {
                (o("WALogger").LOG(
                  E ||
                    (E = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: cleanup after handleRetry()",
                    ])),
                ),
                  await X(),
                  r("WAWebSyncdCollectionsStateMachine").persistToDb(),
                  (O = !1),
                  Y());
              }
            },
            Q(B, W),
          ));
      }
    }
    function Q(e, t) {
      var n = Math.pow(M, e) * P;
      return Math.min(Math.max(n, t), N);
    }
    async function X() {
      var e = r("WAWebSyncdCollectionsStateMachine").getExpiredCollections();
      e.length > 0 &&
        (r("WAWebSyncdCollectionsStateMachine").moveCollectionsToFatal(e),
        await o("WAWebSyncdDbCallbacksApi").printSyncdLog(),
        o("WALogger")
          .ERROR(
            k ||
              (k = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: fatal error: expired collections",
              ])),
          )
          .sendLogs("syncd: fatal error: expired collections"),
        o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
          o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
            .TOO_MANY_INTERNAL_SERVER_ERRORS_IN_7D,
          {
            collection: e[0],
            lidMigrationStage: o(
              "WAWebSyncdAntiTampering",
            ).getLidMigrationStage(),
          },
        ));
    }
    function Y() {
      (o("WALogger").LOG(
        I ||
          (I = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: state machine tick",
          ])),
      ),
        r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateDirty()
          .length > 0 &&
          ((A = new Set(
            Array.from(A).filter(function (e) {
              return w.has(e);
            }),
          )),
          j()));
      var e = r(
        "WAWebSyncdCollectionsStateMachine",
      ).getCollectionsInStateRetry();
      if (e.length > 0) {
        if (O) {
          o("WALogger").LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: retry is in flight",
              ])),
          );
          return;
        }
        (F != null && clearTimeout(F),
          (A = new Set(
            Array.from(A).filter(function (t) {
              return !e.includes(t);
            }),
          )),
          K());
      }
      r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateFatal()
        .length > 0 &&
        o("WAWebSyncdDbCallbacksApi").handleSyncdFatal({
          collections: r(
            "WAWebSyncdCollectionsStateMachine",
          ).getCollectionsInStateFatal(),
        });
    }
    function J(e) {
      return e.forEach(function (e) {
        if (
          e.state === o("WASyncdConst").CollectionState.Success &&
          !A.has(e.name)
        )
          return r(
            "WAWebSyncdCollectionsStateMachine",
          ).moveCollectionsToUpToDate([e.name]);
        if (e.state === o("WASyncdConst").CollectionState.ErrorRetry)
          return (
            o(
              "WAWebSyncdCriticalBootstrapProcessingApi",
            ).logCriticalBootstrapStageIfNecessary(
              o("WAWebWamEnumBootstrapAppStateDataStageCode")
                .BOOTSTRAP_APP_STATE_DATA_STAGE_CODE.ENTERED_RETRY_MODE,
            ),
            r("WAWebSyncdCollectionsStateMachine").moveCollectionsToFiniteRetry(
              [e.name],
            )
          );
        if (e.state === o("WASyncdConst").CollectionState.ErrorFatal)
          return r("WAWebSyncdCollectionsStateMachine").moveCollectionsToFatal([
            e.name,
          ]);
        if (
          e.state === o("WASyncdConst").CollectionState.Blocked &&
          !A.has(e.name)
        )
          return r(
            "WAWebSyncdCollectionsStateMachine",
          ).moveCollectionsToBlocked([e.name]);
      });
    }
    async function Z() {
      o("WALogger").LOG(
        D ||
          (D = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: syncPendingMutationsAndBlockedCollections",
          ])),
      );
      var e = await o(
          "WAWebGetPendingMutation",
        ).getAllSyncPendingMutationsInTransaction(),
        t = r(
          "WAWebSyncdCollectionsStateMachine",
        ).getCollectionsInStateBlocked();
      r("WAWebSyncdCollectionsStateMachine").moveCollectionsToDirty(t);
      var n = e
        .map(function (e) {
          return e.collection;
        })
        .concat(t);
      n.length > 0 &&
        (o("WALogger").LOG(
          x ||
            (x = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: syncPendingMutationsAndBlockedCollections: [",
              "]",
            ])),
          n,
        ),
        q(n));
    }
    function ee() {
      return r("WAWebSyncdCollectionsStateMachine")
        .loadStatesFromDb()
        .then(function () {
          return Y();
        });
    }
    async function te() {
      (await o("WAWebSyncdOrphan").applyAllOrphansAndUnsupported(),
        o("WALogger").LOG(
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: sync pending mutations + blocked on app resume",
            ])),
        ),
        await Z());
    }
    function ne() {
      return w;
    }
    function re() {
      return A;
    }
    ((l.markCollectionsForSync = q),
      (l.reportWam = V),
      (l.logKeysInfoInIntern = G),
      (l.syncBlockedCollections = z),
      (l.initializeStateMachine = ee),
      (l.processOnAppResume = te),
      (l.getInFlightCollections = ne),
      (l.getPendingCollections = re));
  },
  98,
);
