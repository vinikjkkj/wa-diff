__d(
  "WAWebAeaConsumerBackfill",
  [
    "Promise",
    "WALogger",
    "WAWebAeaAccountCategory",
    "WAWebAeaAccountState",
    "WAWebAeaAccountStateStore",
    "WAWebAeaAdvState",
    "WAWebAeaConsumerBackfillRunHistory",
    "WAWebAeaIdentityChangeBaseline",
    "WAWebAeaRefresh",
    "WAWebAeaRollout",
    "WAWebAeaSendRules",
    "WAWebAeaTelemetry",
    "WAWebApiDeviceList",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebFetchPrekeysJob",
    "WAWebLidAwareContactsDB",
    "WAWebLidMigrationUtils",
    "WAWebRunInBatches",
    "WAWebSchemaVerifiedBusinessName",
    "WAWebSignalProtocolStore",
    "WAWebWamEnumPrekeysFetchContext",
    "WAWebWidFactory",
    "WAWebWidFromSignalAddress",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "gkx",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
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
      R = 50,
      L = 50;
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (!o("WAWebAeaRollout").isAeaBackfillEnabled())
            return (
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea][backfill] status=disabled",
                  ])),
              ),
              { status: "disabled" }
            );
          if (
            (o("WAWebAeaAccountCategory").logAeaGatesOnce(),
            yield o(
              "WAWebEventsWaitForOfflineDeliveryEnd",
            ).waitForOfflineDeliveryEnd(),
            !o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd())
          )
            return I("offline_delivery_timeout", {
              incompleteReason: o("WAWebAeaConsumerBackfillRunHistory")
                .AeaBackfillRunResult.OFFLINE_DELIVERY_NOT_READY,
            });
          yield o(
            "WAWebAeaIdentityChangeBaseline",
          ).restoreAeaIdentityChangeBaselines();
          var e = yield T(),
            t = e.suspectedNonE2eeAccounts,
            r = yield $(t, new Set());
          o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "[aea][backfill] suspected_non_e2ee=",
                " to_refetch=",
                "",
              ])),
            String(t.length),
            String(r.length),
          );
          var a = yield M(
              r.map(function (e) {
                var t = e.user;
                return t;
              }),
            ),
            i = a.refetchedLids,
            l = a.unavailableLids,
            s = yield T(),
            u = yield A(N(s.suspectedNonE2eeAccounts)),
            c = u.unsetIdentities,
            d = c
              .filter(function (e) {
                var t = e.accountLid;
                return s.lidsReadyForE2eeDefault.has(t);
              })
              .map(function (e) {
                var t = e.row;
                return t;
              });
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "[aea][backfill] default_e2ee count=",
                " not_ready=",
                "",
              ])),
            String(d.length),
            String(c.length - d.length),
          );
          var g = o("WAWebSignalProtocolStore").getPersistSignalProtocolStore();
          yield o("WAWebRunInBatches").runInBatches(
            d,
            (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  yield (S || (S = n("Promise"))).all(
                    e.map(function (e) {
                      return g.compareAndSetAccountEncryptionState(
                        e.identifier,
                        e.identityKey,
                        e.accountEncryptionState,
                        String(o("WAWebAeaAccountState").AeaAccountState.E2EE),
                      );
                    }),
                  );
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            { batchSize: L },
          );
          var h = yield T(),
            y = h.suspectedNonE2eeAccounts,
            C = yield (S || (S = n("Promise"))).all([$(y, i, l), A(N(y))]),
            b = C[0],
            v = C[1],
            R = v.identityCount,
            E = v.unsetIdentities;
          if (!o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd())
            return I("offline_delivery_reset", {
              incompleteReason: o("WAWebAeaConsumerBackfillRunHistory")
                .AeaBackfillRunResult.OFFLINE_DELIVERY_NOT_READY,
            });
          var k = {
            unconfirmedCount: b.length,
            leftUnsetCount: E.length,
            suspectedCount: y.length,
            accountCount: R,
          };
          return b.length > 0 || E.length > 0
            ? I(
                "unconfirmed_non_e2ee=" +
                  String(b.length) +
                  " left_unset=" +
                  String(E.length),
                babelHelpers.extends(
                  {
                    incompleteReason:
                      b.length > 0
                        ? o("WAWebAeaConsumerBackfillRunHistory")
                            .AeaBackfillRunResult.PREKEY_FETCH_FAILED
                        : o("WAWebAeaConsumerBackfillRunHistory")
                            .AeaBackfillRunResult.CONTACTS_NOT_SYNCED,
                  },
                  k,
                ),
              )
            : (o("WALogger").LOG(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea][backfill] status=complete suspected_non_e2ee=",
                    "",
                  ])),
                String(t.length),
              ),
              babelHelpers.extends({ status: "complete" }, k));
        })),
        k.apply(this, arguments)
      );
    }
    function I(t, n) {
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[aea][backfill] status=incomplete reason=",
              "",
            ])),
          t,
        ),
        o("WAWebAeaTelemetry").reportAeaBackfillFailure(t),
        babelHelpers.extends({ status: "incomplete" }, n)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (S || (S = n("Promise"))).all([
              r("WAWebLidAwareContactsDB").all(),
              o("WAWebApiDeviceList").getAllDeviceLists(),
              o("WAWebSchemaVerifiedBusinessName")
                .getVerifiedBusinessNameTable()
                .all(),
            ]),
            t = e[0],
            a = e[1],
            i = e[2],
            l = new Map(),
            s = new Set(),
            u = new Set();
          for (var c of a) {
            var d,
              m = x(
                c.id,
                "device_list",
                o("WAWebWidFactory").createUserWidFromDeviceListPk,
              );
            if (!(m == null || !m.isRegularUser())) {
              var p = o("WAWebLidMigrationUtils").toUserLid(m);
              if (p != null) {
                var _ = p.toString(),
                  f = o("WAWebAeaAdvState").aeaStateFromDeviceListRow(c);
                f != null &&
                  (s.add(_),
                  o("WAWebAeaAccountState").isAeaNonE2eeAccountState(f) &&
                    ((d = l.get(_)) == null ? void 0 : d.suspectedState) !==
                      o("WAWebAeaAccountState").AeaAccountState.NON_E2EE &&
                    l.set(_, { user: p, suspectedState: f }));
              }
            }
          }
          for (var h of t) {
            var y = h.id,
              C = h.isContactSyncCompleted,
              b = h.isHosted;
            {
              var v = x(y, "contact", o("WAWebWidFactory").createWid);
              if (v == null || !v.isRegularUser()) continue;
              var R = o("WAWebLidMigrationUtils").toUserLid(v);
              if (R == null) continue;
              var L = R.toString();
              if ((C === 1 && u.add(L), b !== !0)) continue;
              s.has(L) ||
                l.set(L, {
                  user: R,
                  suspectedState: o("WAWebAeaAccountState").AeaAccountState
                    .HYBRID_E2EE,
                });
            }
          }
          for (var E of i) {
            var k = E.id,
              I = E.privacyMode;
            {
              if (!o("WAWebAeaSendRules").isNonE2eeBusinessPrivacyMode(I))
                continue;
              var T = void 0;
              try {
                T = o("WAWebWidFactory").createUserWidOrThrow(k);
              } catch (e) {
                o("WALogger")
                  .WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea][backfill] skipped unparseable business row",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("aea-consumer-backfill-bad-business-row");
                continue;
              }
              if (!T.isRegularUser()) continue;
              var D = o("WAWebLidMigrationUtils").toUserLid(T);
              D != null &&
                !l.has(D.toString()) &&
                l.set(D.toString(), {
                  user: D,
                  suspectedState: o("WAWebAeaAccountState").AeaAccountState
                    .NON_E2EE,
                });
            }
          }
          return {
            suspectedNonE2eeAccounts: Array.from(l.values()),
            lidsReadyForE2eeDefault: u,
          };
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      try {
        return n(e);
      } catch (n) {
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[aea][backfill] unparseable ",
                " row identifier=",
                "",
              ])),
            t,
            B(e),
          ),
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea][backfill] skipped unparseable ",
                  " row",
                ])),
              t,
            )
            .catching(r("getErrorSafe")(n)),
          null
        );
      }
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = new Set());
          var r = yield W(e, function (e) {
              var t = e.user;
              return t;
            }),
            a = yield o("WAWebAeaAccountStateStore").readAeaStoredAccounts(
              r.map(function (e) {
                var t = e.user;
                return t;
              }),
            );
          return r.filter(function (e, r) {
            var i = e.suspectedState,
              l = e.user,
              s = a[r],
              u = s.accountState,
              c = s.identityKey;
            return c == null || u === i || n.has(l.toString())
              ? !1
              : u === o("WAWebAeaAccountState").AeaAccountState.NOT_SET ||
                  !t.has(l.toString());
          });
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return new Set(
        e.map(function (e) {
          var t = e.user;
          return t.toString();
        }),
      );
    }
    function M(e) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Set(),
            a = new Set();
          return (
            yield o("WAWebRunInBatches").runInBatches(
              e,
              (function () {
                var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (i) {
                    o("WALogger").LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[aea][backfill] prekey batch size=",
                          " total=",
                          "",
                        ])),
                      String(i.length),
                      String(e.length),
                    );
                    try {
                      var l = yield o("WAWebFetchPrekeysJob").fetchPrekeys(
                          i,
                          !1,
                          o("WAWebWamEnumPrekeysFetchContext")
                            .PREKEYS_FETCH_CONTEXT.AEA_CONSUMER_BACKFILL,
                          { pqSupport: !0 },
                        ),
                        s = l.errors,
                        u = l.prekeyBundles;
                      s.length > 0 &&
                        o("WALogger")
                          .WARN(
                            y ||
                              (y = babelHelpers.taggedTemplateLiteralLoose([
                                "[aea][backfill] prekey errors=",
                                "",
                              ])),
                            String(s.length),
                          )
                          .sendLogs("aea-consumer-backfill-prekey-error");
                      var c = u.filter(function (e) {
                          return !e.wid.isCompanion();
                        }),
                        d = yield (S || (S = n("Promise"))).allSettled(
                          c.map(function (e) {
                            return o("WAWebAeaRefresh").processAeaPrimaryBundle(
                              e,
                              o("WAWebWamEnumPrekeysFetchContext")
                                .PREKEYS_FETCH_CONTEXT.AEA_CONSUMER_BACKFILL,
                            );
                          }),
                        );
                      if (
                        (d.forEach(function (e, n) {
                          var i = o("WAWebWidFactory")
                            .asUserWidOrThrow(c[n].wid)
                            .toString();
                          if (e.status === "rejected") {
                            o("WALogger")
                              .WARN(
                                C ||
                                  (C = babelHelpers.taggedTemplateLiteralLoose([
                                    "[aea][backfill] processing a primary bundle failed",
                                  ])),
                              )
                              .catching(r("getErrorSafe")(e.reason))
                              .sendLogs("aea-consumer-backfill-bundle-fail");
                            return;
                          }
                          e.value ===
                          o("WAWebAeaRefresh").AeaPrimaryBundleOutcome.RESOLVED
                            ? t.add(i)
                            : e.value ===
                                o("WAWebAeaRefresh").AeaPrimaryBundleOutcome
                                  .IDENTITY_CHANGED && a.add(i);
                        }),
                        s.length > 0)
                      )
                        return;
                      var m = new Set(
                        c.map(function (e) {
                          return o("WAWebWidFactory")
                            .asUserWidOrThrow(e.wid)
                            .toString();
                        }),
                      );
                      i.filter(function (e) {
                        return !m.has(e.toString());
                      }).forEach(function (e) {
                        return a.add(e.toString());
                      });
                    } catch (e) {
                      if (
                        e instanceof o("WAWebFetchPrekeysJob").EmptyKeyInfoError
                      ) {
                        i.forEach(function (e) {
                          return a.add(e.toString());
                        });
                        return;
                      }
                      o("WALogger")
                        .WARN(
                          b ||
                            (b = babelHelpers.taggedTemplateLiteralLoose([
                              "[aea][backfill] prekey batch failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(e))
                        .sendLogs("aea-consumer-backfill-prekey-fetch-failed");
                    }
                  },
                );
                return function (e) {
                  return i.apply(this, arguments);
                };
              })(),
              { batchSize: R },
            ),
            a.size > 0 &&
              o("WALogger").LOG(
                v ||
                  (v = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea][backfill] unavailable=",
                    "",
                  ])),
                String(a.size),
              ),
            { refetchedLids: t, unavailableLids: a }
          );
        })),
        w.apply(this, arguments)
      );
    }
    function A(e) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .getAllIdentityRows(),
            n = [],
            r = 0;
          for (var a of t) {
            var i = O(a);
            i != null &&
              (r++,
              a.accountEncryptionState == null &&
                !e.has(i.toString()) &&
                n.push({ row: a, accountLid: i }));
          }
          var l = yield W(n, function (e) {
            var t = e.accountLid;
            return t;
          });
          return {
            unsetIdentities: l.map(function (e) {
              var t = e.accountLid,
                n = e.row;
              return { row: n, accountLid: t.toString() };
            }),
            identityCount: r,
          };
        })),
        F.apply(this, arguments)
      );
    }
    function O(e) {
      if (e.identifier.includes("@hosted")) return null;
      try {
        var t = o("WAWebWidFromSignalAddress").widFromSignalAddress(
          e.identifier,
        );
        return !t.isRegularUser() ||
          t.isCompanion() ||
          o("WAWebAeaAccountCategory").isAeaBotAccount(t)
          ? null
          : o("WAWebLidMigrationUtils").toUserLid(
              o("WAWebWidFactory").asUserWidOrThrow(t),
            );
      } catch (t) {
        return (
          e.accountEncryptionState == null &&
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea][backfill] unparseable identity row identifier=",
                  "",
                ])),
              B(e.identifier),
            ),
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea][backfill] skipped unparseable identity row",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("aea-consumer-backfill-unparseable-identity", {
                sampling: 0.01,
                employeeSampling: 0.01,
              })),
          null
        );
      }
    }
    function B(e) {
      var t = r("justknobx")._("7009") ? r("gkx")("9092") : !r("gkx")("26258");
      return t ? e : e.replace(/\d+/g, "#");
    }
    function W(e, t) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = [];
          return (
            yield o("WAWebRunInBatches").runInBatches(
              e,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var a = yield (S || (S = n("Promise"))).all(
                      e.map(function (e) {
                        return o(
                          "WAWebAeaAccountCategory",
                        ).isAeaReceiveEnabledForAccount(t(e));
                      }),
                    );
                    e.forEach(function (e, t) {
                      a[t] && r.push(e);
                    });
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              { batchSize: L },
            ),
            r
          );
        })),
        q.apply(this, arguments)
      );
    }
    ((l.runAeaConsumerBackfill = E), (l.aeaIdentifierForLog = B));
  },
  98,
);
