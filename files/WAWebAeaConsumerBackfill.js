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
      S = 50,
      R = 50;
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
            return k("offline_delivery_timeout", {
              incompleteReason: o("WAWebAeaConsumerBackfillRunHistory")
                .AeaBackfillRunResult.OFFLINE_DELIVERY_NOT_READY,
            });
          yield o(
            "WAWebAeaIdentityChangeBaseline",
          ).restoreAeaIdentityChangeBaselines();
          var e = yield I(),
            t = e.suspectedNonE2eeAccounts,
            r = yield x(t, new Set());
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
          var a = yield N(
              r.map(function (e) {
                var t = e.user;
                return t;
              }),
            ),
            i = a.refetchedLids,
            l = a.unavailableLids,
            s = yield I(),
            u = s.contactSyncedLids,
            c = s.suspectedNonE2eeAccounts,
            d = yield (v || (v = n("Promise"))).all([x(c, i, l), w(P(c))]),
            f = d[0],
            g = d[1],
            h = g.identityCount,
            y = g.unsetIdentities,
            C = y.filter(function (e) {
              var t = e.accountLid;
              return !u.has(t);
            });
          if (!o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd())
            return k("offline_delivery_reset", {
              incompleteReason: o("WAWebAeaConsumerBackfillRunHistory")
                .AeaBackfillRunResult.OFFLINE_DELIVERY_NOT_READY,
            });
          var b = {
            unconfirmedCount: f.length,
            leftUnsetCount: C.length,
            suspectedCount: c.length,
            accountCount: h,
          };
          return f.length > 0 || C.length > 0
            ? k(
                "unconfirmed_non_e2ee=" +
                  String(f.length) +
                  " left_unset=" +
                  String(C.length),
                babelHelpers.extends(
                  {
                    incompleteReason:
                      f.length > 0
                        ? o("WAWebAeaConsumerBackfillRunHistory")
                            .AeaBackfillRunResult.PREKEY_FETCH_FAILED
                        : o("WAWebAeaConsumerBackfillRunHistory")
                            .AeaBackfillRunResult.CONTACTS_NOT_SYNCED,
                  },
                  b,
                ),
              )
            : (o("WALogger").LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea][backfill] status=complete suspected_non_e2ee=",
                    "",
                  ])),
                String(t.length),
              ),
              babelHelpers.extends({ status: "complete" }, b));
        })),
        E.apply(this, arguments)
      );
    }
    function k(t, n) {
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
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield (v || (v = n("Promise"))).all([
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
              m = D(
                c.id,
                "device_list",
                o("WAWebWidFactory").createUserWidFromDeviceListPk,
              );
            if (!(m == null || !m.isRegularUser())) {
              var p = o("WAWebLidMigrationUtils").toUserLid(m);
              if (p != null) {
                var _ = p.toString(),
                  g = o("WAWebAeaAdvState").aeaStateFromDeviceListRow(c);
                g != null &&
                  (s.add(_),
                  o("WAWebAeaAccountState").isAeaNonE2eeAccountState(g) &&
                    ((d = l.get(_)) == null ? void 0 : d.suspectedState) !==
                      o("WAWebAeaAccountState").AeaAccountState.NON_E2EE &&
                    l.set(_, { user: p, suspectedState: g }));
              }
            }
          }
          for (var h of t) {
            var y = h.id,
              C = h.isContactSyncCompleted,
              b = h.isHosted;
            {
              var S = D(y, "contact", o("WAWebWidFactory").createWid);
              if (S == null || !S.isRegularUser()) continue;
              var R = o("WAWebLidMigrationUtils").toUserLid(S);
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
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea][backfill] skipped unparseable business row",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("aea-consumer-backfill-bad-business-row");
                continue;
              }
              if (!T.isRegularUser()) continue;
              var x = o("WAWebLidMigrationUtils").toUserLid(T);
              x != null &&
                !l.has(x.toString()) &&
                l.set(x.toString(), {
                  user: x,
                  suspectedState: o("WAWebAeaAccountState").AeaAccountState
                    .NON_E2EE,
                });
            }
          }
          return {
            suspectedNonE2eeAccounts: Array.from(l.values()),
            contactSyncedLids: u,
          };
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
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
            O(e),
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
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = new Set());
          var r = yield B(e, function (e) {
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return new Set(
        e.map(function (e) {
          var t = e.user;
          return t.toString();
        }),
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Set(),
            a = new Set();
          return (
            yield o("WAWebRunInBatches").runInBatches(
              e,
              (function () {
                var i = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (i) {
                    o("WALogger").LOG(
                      g ||
                        (g = babelHelpers.taggedTemplateLiteralLoose([
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
                            h ||
                              (h = babelHelpers.taggedTemplateLiteralLoose([
                                "[aea][backfill] prekey errors=",
                                "",
                              ])),
                            String(s.length),
                          )
                          .sendLogs("aea-consumer-backfill-prekey-error");
                      var c = u.filter(function (e) {
                          return !e.wid.isCompanion();
                        }),
                        d = yield (v || (v = n("Promise"))).allSettled(
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
                                y ||
                                  (y = babelHelpers.taggedTemplateLiteralLoose([
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
                          C ||
                            (C = babelHelpers.taggedTemplateLiteralLoose([
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
              { batchSize: S },
            ),
            a.size > 0 &&
              o("WALogger").LOG(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea][backfill] unavailable=",
                    "",
                  ])),
                String(a.size),
              ),
            { refetchedLids: t, unavailableLids: a }
          );
        })),
        M.apply(this, arguments)
      );
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebSignalProtocolStore")
              .getPersistSignalProtocolStore()
              .getAllIdentityRows(),
            n = [],
            r = 0;
          for (var a of t) {
            var i = F(a);
            i != null &&
              (r++,
              a.accountEncryptionState == null &&
                !e.has(i.toString()) &&
                n.push({ row: a, accountLid: i }));
          }
          var l = yield B(n, function (e) {
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
        A.apply(this, arguments)
      );
    }
    function F(e) {
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
              O(e.identifier),
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
    function O(e) {
      var t = r("justknobx")._("7009") ? r("gkx")("9092") : !r("gkx")("26258");
      return t ? e : e.replace(/\d+/g, "#");
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = [];
          return (
            yield o("WAWebRunInBatches").runInBatches(
              e,
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var a = yield (v || (v = n("Promise"))).all(
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
              { batchSize: R },
            ),
            r
          );
        })),
        W.apply(this, arguments)
      );
    }
    ((l.runAeaConsumerBackfill = L), (l.aeaIdentifierForLog = O));
  },
  98,
);
