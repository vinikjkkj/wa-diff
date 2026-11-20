__d(
  "WAWebSyncd",
  [
    "Promise",
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
      N,
      M = 1e3,
      w = 1e3 * 60 * 60,
      A = 2,
      F = new Set(),
      O = new Set(),
      B = new Set(),
      W,
      q = !1,
      U = 0,
      V = 0;
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t != null ? yield z(e, t) : e,
            a = Array.from(new Set([].concat(n, Array.from(B))));
          return (
            (B = new Set()),
            o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: marking for sync: ",
                  "",
                ])),
              a,
            ),
            a.forEach(function (e) {
              var t = r("WAWebSyncdCollectionsStateMachine").getCollectionState(
                e,
              );
              (o("WALogger").LOG(
                h ||
                  (h = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: ",
                    " state before sync: ",
                    "",
                  ])),
                e,
                t,
              ),
                t === o("WAWebSyncdConst").CollectionSyncState.UpToDate
                  ? r(
                      "WAWebSyncdCollectionsStateMachine",
                    ).moveCollectionsToDirty([e])
                  : t === o("WAWebSyncdConst").CollectionSyncState.Dirty &&
                    (O = new Set([].concat(Array.from(O), [e]))));
            }),
            yield r("WAWebSyncdCollectionsStateMachine").persistToDb(),
            te()
          );
        })),
        G.apply(this, arguments)
      );
    }
    function z(e, t) {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: start filter collections: ",
                "",
              ])),
            e,
          );
          var n = yield o(
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
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
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
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: server version for ",
                      " missing; will mark for sync.",
                    ])),
                  e,
                ),
                !0)
              : n < a
                ? (o("WALogger").LOG(
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
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
                    S ||
                      (S = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        j.apply(this, arguments)
      );
    }
    function K() {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = yield o("WAWebGetSyncAction").countSyncActionsInTransaction();
          (e = o("WAWebSyncdWamAppState")).setStoredMutationCount(t);
          var n = yield o(
            "WAWebGetSyncAction",
          ).getSyncActionsByActionStatesInTransaction([
            o("WAWebSyncdConst").SyncActionState.Malformed,
          ]);
          e.setInvalidActionCount(n.length);
          var r = yield o(
            "WAWebGetSyncAction",
          ).getSyncActionsByActionStatesInTransaction([
            o("WAWebSyncdConst").SyncActionState.Unsupported,
          ]);
          e.setUnsupportedActionCount(r.length);
          var a = yield o("WAWebGetMissingKey").getMissingKeyCountTransaction();
          e.setMissingKeyCount(a);
        })),
        Q.apply(this, arguments)
      );
    }
    function X() {
      return Y.apply(this, arguments);
    }
    function Y() {
      return (
        (Y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {})),
        Y.apply(this, arguments)
      );
    }
    function J() {
      return Z.apply(this, arguments);
    }
    function Z() {
      return (
        (Z = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {})),
        Z.apply(this, arguments)
      );
    }
    function ee() {
      var t = r(
        "WAWebSyncdCollectionsStateMachine",
      ).getCollectionsInStateBlocked();
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: sync blocked collections: ",
              "",
            ])),
          t,
        ),
        r("WAWebSyncdCollectionsStateMachine").moveCollectionsToDirty(t),
        (O = new Set([].concat(Array.from(O), Array.from(F)))),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: syncBlockedCollections blocked=",
              " inflight=",
              "",
            ])),
          t,
          Array.from(F),
        ),
        te()
      );
    }
    function te() {
      return ne.apply(this, arguments);
    }
    function ne() {
      return (
        (ne = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebSyncdDisabled").isSyncdDisabled())
            return (N || (N = n("Promise"))).resolve();
          var e = r(
            "WAWebSyncdCollectionsStateMachine",
          ).getCollectionsInStateDirty();
          o("WALogger").LOG(
            R ||
              (R = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: dirty collections: ",
                "",
              ])),
            e,
          );
          var t = new Set(
            e.filter(function (e) {
              return !F.has(e);
            }),
          );
          if (t.size === 0)
            return (
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: no collections to sync",
                  ])),
              ),
              (N || (N = n("Promise"))).resolve()
            );
          var a = [];
          try {
            ((F = new Set([].concat(Array.from(F), Array.from(t)))),
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: initiate server sync",
                  ])),
              ),
              (a = yield o("WAWebSyncdServerSync").serverSync(Array.from(t))),
              o("WALogger").LOG(
                k ||
                  (k = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: server sync successful",
                  ])),
              ));
            var i = a.filter(function (e) {
              return (
                e.state === o("WAWebSyncdConst").CollectionState.ErrorRetry
              );
            });
            (i.length > 0 && ((V = i[0].serverBackoff || 0), (U = 0)), ue(a));
          } catch (e) {
            (o("WALogger").LOG(
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: exception during sync(): ",
                  "",
                ])),
              e,
            ),
              r(
                "WAWebSyncdCollectionsStateMachine",
              ).moveCollectionsToFiniteRetry(Array.from(t)));
          } finally {
            (o("WALogger").LOG(
              T ||
                (T = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: cleanup after sync()",
                ])),
            ),
              r("WAWebSyncdCollectionsStateMachine").persistToDb(),
              (F = new Set(
                Array.from(F).filter(function (e) {
                  return !t.has(e);
                }),
              )),
              se(),
              yield o("WAWebSyncdDbCallbacksApi").handleSyncCompleted(a));
          }
        })),
        ne.apply(this, arguments)
      );
    }
    function re() {
      if (!o("WAWebSyncdDisabled").isSyncdDisabled()) {
        var e = new Set(
          r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateRetry(),
        );
        e.size !== 0 &&
          (W = setTimeout(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                ((q = !0),
                  (U += 1),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "syncd: initiate server sync retry",
                      ])),
                  ));
                var t = yield o("WAWebSyncdServerSync").serverSync(
                  Array.from(e),
                );
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: server sync retry successful",
                    ])),
                ),
                  oe(t),
                  ue(t));
              } catch (t) {
                (o("WALogger").LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: cleanup after handleRetry()",
                    ])),
                ),
                  yield ie(),
                  r("WAWebSyncdCollectionsStateMachine").persistToDb(),
                  (q = !1),
                  se());
              }
            }),
            ae(U, V),
          ));
      }
    }
    function oe(e) {
      var t = e.find(function (e) {
        return e.state === o("WAWebSyncdConst").CollectionState.ErrorRetry;
      });
      t != null && (V = t.serverBackoff || 0);
    }
    function ae(e, t) {
      var n = Math.pow(A, e) * M;
      return Math.min(Math.max(n, t), w);
    }
    function ie() {
      return le.apply(this, arguments);
    }
    function le() {
      return (
        (le = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r(
            "WAWebSyncdCollectionsStateMachine",
          ).getExpiredCollections();
          e.length > 0 &&
            (r("WAWebSyncdCollectionsStateMachine").moveCollectionsToFatal(e),
            yield o("WAWebSyncdDbCallbacksApi").printSyncdLog(),
            o("WALogger")
              .ERROR(
                D ||
                  (D = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        le.apply(this, arguments)
      );
    }
    function se() {
      (o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
            "syncd: state machine tick",
          ])),
      ),
        r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateDirty()
          .length > 0 &&
          ((O = new Set(
            Array.from(O).filter(function (e) {
              return F.has(e);
            }),
          )),
          te()));
      var e = r(
        "WAWebSyncdCollectionsStateMachine",
      ).getCollectionsInStateRetry();
      if (e.length > 0) {
        if (q) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: retry is in flight",
              ])),
          );
          return;
        }
        (W != null && clearTimeout(W),
          (O = new Set(
            Array.from(O).filter(function (t) {
              return !e.includes(t);
            }),
          )),
          re());
      }
      r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateFatal()
        .length > 0 &&
        o("WAWebSyncdDbCallbacksApi").handleSyncdFatal({
          collections: r(
            "WAWebSyncdCollectionsStateMachine",
          ).getCollectionsInStateFatal(),
        });
    }
    function ue(e) {
      return e.forEach(function (e) {
        if (
          e.state === o("WAWebSyncdConst").CollectionState.Success &&
          !O.has(e.name)
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
          !O.has(e.name)
        )
          return r("WAWebSyncdCollectionsStateMachine").hasFiniteFailureExpired(
            e.name,
          )
            ? (o("WALogger")
                .ERROR(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
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
            : (B.add(e.name),
              r(
                "WAWebSyncdCollectionsStateMachine",
              ).moveCollectionsToResourceLimited([e.name]));
        if (
          e.state === o("WAWebSyncdConst").CollectionState.Blocked &&
          !O.has(e.name)
        )
          return r(
            "WAWebSyncdCollectionsStateMachine",
          ).moveCollectionsToBlocked([e.name]);
      });
    }
    function ce() {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            x ||
              (x = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: syncPendingMutationsAndBlockedCollections",
              ])),
          );
          var e = yield o(
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
            H(n));
        })),
        de.apply(this, arguments)
      );
    }
    function me() {
      return r("WAWebSyncdCollectionsStateMachine")
        .loadStatesFromDb()
        .then(function () {
          return se();
        });
    }
    function pe() {
      return _e.apply(this, arguments);
    }
    function _e() {
      return (
        (_e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebSyncdOrphan").applyAllOrphansAndUnsupported(),
            o("WALogger").LOG(
              P ||
                (P = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: sync pending mutations + blocked on app resume",
                ])),
            ),
            yield ce());
        })),
        _e.apply(this, arguments)
      );
    }
    function fe() {
      return F;
    }
    function ge() {
      return O;
    }
    ((l.markCollectionsForSync = H),
      (l.reportWam = K),
      (l.logKeysInfoInIntern = J),
      (l.syncBlockedCollections = ee),
      (l.initializeStateMachine = me),
      (l.processOnAppResume = pe),
      (l.getInFlightCollections = fe),
      (l.getPendingCollections = ge));
  },
  98,
);
