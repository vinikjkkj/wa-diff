__d(
  "WAWebSyncd",
  [
    "WALogger",
    "WAWebGetCollectionVersion",
    "WAWebGetMissingKey",
    "WAWebGetPendingMutation",
    "WAWebGetSyncAction",
    "WAWebGetSyncKey",
    "WAWebSyncdAntiTamperingLtHash",
    "WAWebSyncdCollectionsStateMachine",
    "WAWebSyncdConst",
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
      P,
      N = 1e3,
      M = 1e3 * 60 * 60,
      w = 2,
      A = new Set(),
      F = new Set(),
      O = new Set(),
      B,
      W = !1,
      q = 0,
      U = 0;
    async function V(t, n) {
      var a = n != null ? await H(t, n) : t,
        i = Array.from(new Set([].concat(a, Array.from(O))));
      return (
        (O = new Set()),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: marking for sync: ",
              "",
            ])),
          i,
        ),
        i.forEach(function (e) {
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
            t === o("WAWebSyncdConst").CollectionSyncState.UpToDate
              ? r("WAWebSyncdCollectionsStateMachine").moveCollectionsToDirty([
                  e,
                ])
              : t === o("WAWebSyncdConst").CollectionSyncState.Dirty &&
                (F = new Set([].concat(Array.from(F), [e]))));
        }),
        await r("WAWebSyncdCollectionsStateMachine").persistToDb(),
        Q()
      );
    }
    async function H(e, t) {
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
    async function G() {
      var e,
        t = await o("WAWebGetSyncAction").countSyncActionsInTransaction();
      (e = o("WAWebSyncdWamAppState")).setStoredMutationCount(t);
      var n = await o(
        "WAWebGetSyncAction",
      ).getSyncActionsByActionStatesInTransaction([
        o("WAWebSyncdConst").SyncActionState.Malformed,
      ]);
      e.setInvalidActionCount(n.length);
      var r = await o(
        "WAWebGetSyncAction",
      ).getSyncActionsByActionStatesInTransaction([
        o("WAWebSyncdConst").SyncActionState.Unsupported,
      ]);
      e.setUnsupportedActionCount(r.length);
      var a = await o("WAWebGetMissingKey").getMissingKeyCountTransaction();
      e.setMissingKeyCount(a);
    }
    async function z() {}
    async function j() {}
    function K() {
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
        (F = new Set([].concat(Array.from(F), Array.from(A)))),
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: syncBlockedCollections blocked=",
              " inflight=",
              "",
            ])),
          e,
          Array.from(A),
        ),
        Q()
      );
    }
    async function Q() {
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
          return !A.has(e);
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
        ((A = new Set([].concat(Array.from(A), Array.from(t)))),
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
          return e.state === o("WAWebSyncdConst").CollectionState.ErrorRetry;
        });
        (a.length > 0 && ((U = a[0].serverBackoff || 0), (q = 0)), te(n));
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
          (A = new Set(
            Array.from(A).filter(function (e) {
              return !t.has(e);
            }),
          )),
          ee(),
          await o("WAWebSyncdDbCallbacksApi").handleSyncCompleted(n));
      }
    }
    function X() {
      if (!o("WAWebSyncdDisabled").isSyncdDisabled()) {
        var e = new Set(
          r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateRetry(),
        );
        e.size !== 0 &&
          (B = setTimeout(
            async function () {
              try {
                ((W = !0),
                  (q += 1),
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
                  Y(t),
                  te(t));
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
                  await Z(),
                  r("WAWebSyncdCollectionsStateMachine").persistToDb(),
                  (W = !1),
                  ee());
              }
            },
            J(q, U),
          ));
      }
    }
    function Y(e) {
      var t = e.find(function (e) {
        return e.state === o("WAWebSyncdConst").CollectionState.ErrorRetry;
      });
      t != null && (U = t.serverBackoff || 0);
    }
    function J(e, t) {
      var n = Math.pow(w, e) * N;
      return Math.min(Math.max(n, t), M);
    }
    async function Z() {
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
              "WAWebSyncdAntiTamperingLtHash",
            ).getLidMigrationStage(),
          },
        ));
    }
    function ee() {
      (o("WALogger").LOG(
        I ||
          (I = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: state machine tick",
          ])),
      ),
        r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateDirty()
          .length > 0 &&
          ((F = new Set(
            Array.from(F).filter(function (e) {
              return A.has(e);
            }),
          )),
          Q()));
      var e = r(
        "WAWebSyncdCollectionsStateMachine",
      ).getCollectionsInStateRetry();
      if (e.length > 0) {
        if (W) {
          o("WALogger").LOG(
            T ||
              (T = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: retry is in flight",
              ])),
          );
          return;
        }
        (B != null && clearTimeout(B),
          (F = new Set(
            Array.from(F).filter(function (t) {
              return !e.includes(t);
            }),
          )),
          X());
      }
      r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateFatal()
        .length > 0 &&
        o("WAWebSyncdDbCallbacksApi").handleSyncdFatal({
          collections: r(
            "WAWebSyncdCollectionsStateMachine",
          ).getCollectionsInStateFatal(),
        });
    }
    function te(e) {
      return e.forEach(function (e) {
        if (
          e.state === o("WAWebSyncdConst").CollectionState.Success &&
          !F.has(e.name)
        )
          return r(
            "WAWebSyncdCollectionsStateMachine",
          ).moveCollectionsToUpToDate([e.name]);
        if (e.state === o("WAWebSyncdConst").CollectionState.ErrorRetry)
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
        if (e.state === o("WAWebSyncdConst").CollectionState.ErrorFatal)
          return r("WAWebSyncdCollectionsStateMachine").moveCollectionsToFatal([
            e.name,
          ]);
        if (
          e.state === o("WAWebSyncdConst").CollectionState.ErrorResourceLimit &&
          !F.has(e.name)
        )
          return r("WAWebSyncdCollectionsStateMachine").hasFiniteFailureExpired(
            e.name,
          )
            ? (o("WALogger")
                .ERROR(
                  D ||
                    (D = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: fatal error: resource limit expired for ",
                      "",
                    ])),
                  e.name,
                )
                .sendLogs("syncd: fatal error: resource limit expired"),
              o("WAWebSyncdMetricFatalError").reportSyncdFatalError(
                o("WAWebSyncdMetricFatalError").SyncdFatalErrorType
                  .TOO_MANY_INTERNAL_SERVER_ERRORS_IN_7D,
                {
                  collection: e.name,
                  lidMigrationStage: o(
                    "WAWebSyncdAntiTamperingLtHash",
                  ).getLidMigrationStage(),
                },
              ),
              r("WAWebSyncdCollectionsStateMachine").moveCollectionsToFatal([
                e.name,
              ]))
            : (O.add(e.name),
              r(
                "WAWebSyncdCollectionsStateMachine",
              ).moveCollectionsToResourceLimited([e.name]));
        if (
          e.state === o("WAWebSyncdConst").CollectionState.Blocked &&
          !F.has(e.name)
        )
          return r(
            "WAWebSyncdCollectionsStateMachine",
          ).moveCollectionsToBlocked([e.name]);
      });
    }
    async function ne() {
      o("WALogger").LOG(
        x ||
          (x = babelHelpers.taggedTemplateLiteralLoose([
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
          $ ||
            ($ = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: syncPendingMutationsAndBlockedCollections: [",
              "]",
            ])),
          n,
        ),
        V(n));
    }
    function re() {
      return r("WAWebSyncdCollectionsStateMachine")
        .loadStatesFromDb()
        .then(function () {
          return ee();
        });
    }
    async function oe() {
      (await o("WAWebSyncdOrphan").applyAllOrphansAndUnsupported(),
        o("WALogger").LOG(
          P ||
            (P = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: sync pending mutations + blocked on app resume",
            ])),
        ),
        await ne());
    }
    function ae() {
      return A;
    }
    function ie() {
      return F;
    }
    ((l.markCollectionsForSync = V),
      (l.reportWam = G),
      (l.logKeysInfoInIntern = j),
      (l.syncBlockedCollections = K),
      (l.initializeStateMachine = re),
      (l.processOnAppResume = oe),
      (l.getInFlightCollections = ae),
      (l.getPendingCollections = ie));
  },
  98,
);
