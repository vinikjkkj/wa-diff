__d(
  "WAWebSyncd",
  [
    "Promise",
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
      N = 1e3,
      M = 1e3 * 60 * 60,
      w = 2,
      A = new Set(),
      F = new Set(),
      O,
      B = !1,
      W = 0,
      q = 0;
    function U(e, t) {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t != null ? yield H(e, t) : e;
          return (
            o("WALogger").LOG(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: marking for sync: ",
                  "",
                ])),
              n,
            ),
            n.forEach(function (e) {
              var t = r("WAWebSyncdCollectionsStateMachine").getCollectionState(
                e,
              );
              (o("WALogger").LOG(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: ",
                    " state before sync: ",
                    "",
                  ])),
                e,
                t,
              ),
                t === o("WASyncdConst").CollectionSyncState.UpToDate
                  ? r(
                      "WAWebSyncdCollectionsStateMachine",
                    ).moveCollectionsToDirty([e])
                  : t === o("WASyncdConst").CollectionSyncState.Dirty &&
                    (F = new Set([].concat(Array.from(F), [e]))));
            }),
            yield r("WAWebSyncdCollectionsStateMachine").persistToDb(),
            Z()
          );
        })),
        V.apply(this, arguments)
      );
    }
    function H(e, t) {
      return G.apply(this, arguments);
    }
    function G() {
      return (
        (G = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
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
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
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
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "syncd: server version for ",
                      " missing; will mark for sync.",
                    ])),
                  e,
                ),
                !0)
              : n < a
                ? (o("WALogger").LOG(
                    b ||
                      (b = babelHelpers.taggedTemplateLiteralLoose([
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
                    v ||
                      (v = babelHelpers.taggedTemplateLiteralLoose([
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
        G.apply(this, arguments)
      );
    }
    function z() {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e,
            t = yield o("WAWebGetSyncAction").countSyncActionsInTransaction();
          (e = o("WAWebSyncdWamAppState")).setStoredMutationCount(t);
          var n = yield o(
            "WAWebGetSyncAction",
          ).getSyncActionsByActionStatesInTransaction([
            o("WASyncdConst").SyncActionState.Malformed,
          ]);
          e.setInvalidActionCount(n.length);
          var r = yield o(
            "WAWebGetSyncAction",
          ).getSyncActionsByActionStatesInTransaction([
            o("WASyncdConst").SyncActionState.Unsupported,
          ]);
          e.setUnsupportedActionCount(r.length);
          var a = yield o("WAWebGetMissingKey").getMissingKeyCountTransaction();
          e.setMissingKeyCount(a);
        })),
        j.apply(this, arguments)
      );
    }
    function K() {
      return Q.apply(this, arguments);
    }
    function Q() {
      return (
        (Q = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {})),
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
        (F = new Set([].concat(Array.from(F), Array.from(A)))),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "syncd: syncBlockedCollections blocked=",
              " inflight=",
              "",
            ])),
          t,
          Array.from(A),
        ),
        Z()
      );
    }
    function Z() {
      return ee.apply(this, arguments);
    }
    function ee() {
      return (
        (ee = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (o("WAWebSyncdDisabled").isSyncdDisabled())
            return (P || (P = n("Promise"))).resolve();
          var e = r(
            "WAWebSyncdCollectionsStateMachine",
          ).getCollectionsInStateDirty();
          o("WALogger").LOG(
            S ||
              (S = babelHelpers.taggedTemplateLiteralLoose([
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
                R ||
                  (R = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: no collections to sync",
                  ])),
              ),
              (P || (P = n("Promise"))).resolve()
            );
          var a = [];
          try {
            ((A = new Set([].concat(Array.from(A), Array.from(t)))),
              o("WALogger").LOG(
                L ||
                  (L = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: initiate server sync",
                  ])),
              ),
              (a = yield o("WAWebSyncdServerSync").serverSync(Array.from(t))),
              o("WALogger").LOG(
                E ||
                  (E = babelHelpers.taggedTemplateLiteralLoose([
                    "syncd: server sync successful",
                  ])),
              ));
            var i = a.filter(function (e) {
              return e.state === o("WASyncdConst").CollectionState.ErrorRetry;
            });
            (i.length > 0 && ((q = i[0].serverBackoff || 0), (W = 0)), ie(a));
          } catch (e) {
            (o("WALogger").LOG(
              k ||
                (k = babelHelpers.taggedTemplateLiteralLoose([
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
              I ||
                (I = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: cleanup after sync()",
                ])),
            ),
              r("WAWebSyncdCollectionsStateMachine").persistToDb(),
              (A = new Set(
                Array.from(A).filter(function (e) {
                  return !t.has(e);
                }),
              )),
              ae(),
              yield o("WAWebSyncdDbCallbacksApi").handleSyncCompleted(a));
          }
        })),
        ee.apply(this, arguments)
      );
    }
    function te() {
      if (!o("WAWebSyncdDisabled").isSyncdDisabled()) {
        var e = new Set(
          r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateRetry(),
        );
        e.size !== 0 &&
          (O = setTimeout(
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                ((B = !0),
                  (W += 1),
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
                  ie(t));
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
                  yield re(),
                  r("WAWebSyncdCollectionsStateMachine").persistToDb(),
                  (B = !1),
                  ae());
              }
            }),
            ne(W, q),
          ));
      }
    }
    function ne(e, t) {
      var n = Math.pow(w, e) * N;
      return Math.min(Math.max(n, t), M);
    }
    function re() {
      return oe.apply(this, arguments);
    }
    function oe() {
      return (
        (oe = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = r(
            "WAWebSyncdCollectionsStateMachine",
          ).getExpiredCollections();
          e.length > 0 &&
            (r("WAWebSyncdCollectionsStateMachine").moveCollectionsToFatal(e),
            yield o("WAWebSyncdDbCallbacksApi").printSyncdLog(),
            o("WALogger")
              .ERROR(
                T ||
                  (T = babelHelpers.taggedTemplateLiteralLoose([
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
        })),
        oe.apply(this, arguments)
      );
    }
    function ae() {
      (o("WALogger").LOG(
        p ||
          (p = babelHelpers.taggedTemplateLiteralLoose([
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
          Z()));
      var e = r(
        "WAWebSyncdCollectionsStateMachine",
      ).getCollectionsInStateRetry();
      if (e.length > 0) {
        if (B) {
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: retry is in flight",
              ])),
          );
          return;
        }
        (O != null && clearTimeout(O),
          (F = new Set(
            Array.from(F).filter(function (t) {
              return !e.includes(t);
            }),
          )),
          te());
      }
      r("WAWebSyncdCollectionsStateMachine").getCollectionsInStateFatal()
        .length > 0 &&
        o("WAWebSyncdDbCallbacksApi").handleSyncdFatal({
          collections: r(
            "WAWebSyncdCollectionsStateMachine",
          ).getCollectionsInStateFatal(),
        });
    }
    function ie(e) {
      return e.forEach(function (e) {
        if (
          e.state === o("WASyncdConst").CollectionState.Success &&
          !F.has(e.name)
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
          !F.has(e.name)
        )
          return r(
            "WAWebSyncdCollectionsStateMachine",
          ).moveCollectionsToBlocked([e.name]);
      });
    }
    function le() {
      return se.apply(this, arguments);
    }
    function se() {
      return (
        (se = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          o("WALogger").LOG(
            D ||
              (D = babelHelpers.taggedTemplateLiteralLoose([
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
              x ||
                (x = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: syncPendingMutationsAndBlockedCollections: [",
                  "]",
                ])),
              n,
            ),
            U(n));
        })),
        se.apply(this, arguments)
      );
    }
    function ue() {
      return r("WAWebSyncdCollectionsStateMachine")
        .loadStatesFromDb()
        .then(function () {
          return ae();
        });
    }
    function ce() {
      return de.apply(this, arguments);
    }
    function de() {
      return (
        (de = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield o("WAWebSyncdOrphan").applyAllOrphansAndUnsupported(),
            o("WALogger").LOG(
              $ ||
                ($ = babelHelpers.taggedTemplateLiteralLoose([
                  "syncd: sync pending mutations + blocked on app resume",
                ])),
            ),
            yield le());
        })),
        de.apply(this, arguments)
      );
    }
    function me() {
      return A;
    }
    function pe() {
      return F;
    }
    ((l.markCollectionsForSync = U),
      (l.reportWam = z),
      (l.logKeysInfoInIntern = X),
      (l.syncBlockedCollections = J),
      (l.initializeStateMachine = ue),
      (l.processOnAppResume = ce),
      (l.getInFlightCollections = me),
      (l.getPendingCollections = pe));
  },
  98,
);
