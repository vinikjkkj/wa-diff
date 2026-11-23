__d(
  "WAWebAeaConsumerBackfill",
  [
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
      v = 50,
      S = 50;
    async function R() {
      if (!o("WAWebAeaRollout").isAeaBackfillEnabled())
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[aea][backfill] status=disabled",
              ])),
          ),
          { status: "disabled" }
        );
      if (
        (o("WAWebAeaAccountCategory").logAeaGatesOnce(),
        await o(
          "WAWebEventsWaitForOfflineDeliveryEnd",
        ).waitForOfflineDeliveryEnd(),
        !o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd())
      )
        return L("offline_delivery_timeout", {
          incompleteReason: o("WAWebAeaConsumerBackfillRunHistory")
            .AeaBackfillRunResult.OFFLINE_DELIVERY_NOT_READY,
        });
      await o(
        "WAWebAeaIdentityChangeBaseline",
      ).restoreAeaIdentityChangeBaselines();
      var t = await E(),
        n = t.suspectedNonE2eeAccounts,
        r = await I(n, new Set());
      o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "[aea][backfill] suspected_non_e2ee=",
            " to_refetch=",
            "",
          ])),
        String(n.length),
        String(r.length),
      );
      var a = await D(
          r.map(function (e) {
            var t = e.user;
            return t;
          }),
        ),
        i = a.refetchedLids,
        l = a.unavailableLids,
        c = await E(),
        d = c.contactSyncedLids,
        m = c.suspectedNonE2eeAccounts,
        p = await Promise.all([I(m, i, l), x(T(m))]),
        _ = p[0],
        f = p[1],
        g = f.identityCount,
        h = f.unsetIdentities,
        y = h.filter(function (e) {
          var t = e.accountLid;
          return !d.has(t);
        });
      if (!o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd())
        return L("offline_delivery_reset", {
          incompleteReason: o("WAWebAeaConsumerBackfillRunHistory")
            .AeaBackfillRunResult.OFFLINE_DELIVERY_NOT_READY,
        });
      var C = {
        unconfirmedCount: _.length,
        leftUnsetCount: y.length,
        suspectedCount: m.length,
        accountCount: g,
      };
      return _.length > 0 || y.length > 0
        ? L(
            "unconfirmed_non_e2ee=" +
              String(_.length) +
              " left_unset=" +
              String(y.length),
            babelHelpers.extends(
              {
                incompleteReason:
                  _.length > 0
                    ? o("WAWebAeaConsumerBackfillRunHistory")
                        .AeaBackfillRunResult.PREKEY_FETCH_FAILED
                    : o("WAWebAeaConsumerBackfillRunHistory")
                        .AeaBackfillRunResult.CONTACTS_NOT_SYNCED,
              },
              C,
            ),
          )
        : (o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[aea][backfill] status=complete suspected_non_e2ee=",
                "",
              ])),
            String(n.length),
          ),
          babelHelpers.extends({ status: "complete" }, C));
    }
    function L(e, t) {
      return (
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "[aea][backfill] status=incomplete reason=",
              "",
            ])),
          e,
        ),
        o("WAWebAeaTelemetry").reportAeaBackfillFailure(e),
        babelHelpers.extends({ status: "incomplete" }, t)
      );
    }
    async function E() {
      var e = await Promise.all([
          r("WAWebLidAwareContactsDB").all(),
          o("WAWebApiDeviceList").getAllDeviceLists(),
          o("WAWebSchemaVerifiedBusinessName")
            .getVerifiedBusinessNameTable()
            .all(),
        ]),
        t = e[0],
        n = e[1],
        a = e[2],
        i = new Map(),
        l = new Set(),
        s = new Set();
      for (var u of n) {
        var c,
          m = k(
            u.id,
            "device_list",
            o("WAWebWidFactory").createUserWidFromDeviceListPk,
          );
        if (!(m == null || !m.isRegularUser())) {
          var p = o("WAWebLidMigrationUtils").toUserLid(m);
          if (p != null) {
            var _ = p.toString(),
              f = o("WAWebAeaAdvState").aeaStateFromDeviceListRow(u);
            f != null &&
              (l.add(_),
              o("WAWebAeaAccountState").isAeaNonE2eeAccountState(f) &&
                ((c = i.get(_)) == null ? void 0 : c.suspectedState) !==
                  o("WAWebAeaAccountState").AeaAccountState.NON_E2EE &&
                i.set(_, { user: p, suspectedState: f }));
          }
        }
      }
      for (var g of t) {
        var h = g.id,
          y = g.isContactSyncCompleted,
          C = g.isHosted;
        {
          var b = k(h, "contact", o("WAWebWidFactory").createWid);
          if (b == null || !b.isRegularUser()) continue;
          var v = o("WAWebLidMigrationUtils").toUserLid(b);
          if (v == null) continue;
          var S = v.toString();
          if ((y === 1 && s.add(S), C !== !0)) continue;
          l.has(S) ||
            i.set(S, {
              user: v,
              suspectedState: o("WAWebAeaAccountState").AeaAccountState
                .HYBRID_E2EE,
            });
        }
      }
      for (var R of a) {
        var L = R.id,
          E = R.privacyMode;
        {
          if (!o("WAWebAeaSendRules").isNonE2eeBusinessPrivacyMode(E)) continue;
          var I = void 0;
          try {
            I = o("WAWebWidFactory").createUserWidOrThrow(L);
          } catch (e) {
            o("WALogger")
              .WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea][backfill] skipped unparseable business row",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("aea-consumer-backfill-bad-business-row");
            continue;
          }
          if (!I.isRegularUser()) continue;
          var T = o("WAWebLidMigrationUtils").toUserLid(I);
          T != null &&
            !i.has(T.toString()) &&
            i.set(T.toString(), {
              user: T,
              suspectedState: o("WAWebAeaAccountState").AeaAccountState
                .NON_E2EE,
            });
        }
      }
      return {
        suspectedNonE2eeAccounts: Array.from(i.values()),
        contactSyncedLids: s,
      };
    }
    function k(e, t, n) {
      try {
        return n(e);
      } catch (n) {
        return (
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "[aea][backfill] unparseable ",
                " row identifier=",
                "",
              ])),
            t,
            P(e),
          ),
          o("WALogger")
            .WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
    async function I(e, t, n) {
      n === void 0 && (n = new Set());
      var r = await N(e, function (e) {
          var t = e.user;
          return t;
        }),
        a = await o("WAWebAeaAccountStateStore").readAeaStoredAccounts(
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
    }
    function T(e) {
      return new Set(
        e.map(function (e) {
          var t = e.user;
          return t.toString();
        }),
      );
    }
    async function D(e) {
      var t = new Set(),
        n = new Set();
      return (
        await o("WAWebRunInBatches").runInBatches(
          e,
          async function (a) {
            o("WALogger").LOG(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea][backfill] prekey batch size=",
                  " total=",
                  "",
                ])),
              String(a.length),
              String(e.length),
            );
            try {
              var i = await o("WAWebFetchPrekeysJob").fetchPrekeys(
                  a,
                  !1,
                  o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT
                    .AEA_CONSUMER_BACKFILL,
                  { pqSupport: !0 },
                ),
                l = i.errors,
                s = i.prekeyBundles;
              l.length > 0 &&
                o("WALogger")
                  .WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[aea][backfill] prekey errors=",
                        "",
                      ])),
                    String(l.length),
                  )
                  .sendLogs("aea-consumer-backfill-prekey-error");
              var u = s.filter(function (e) {
                  return !e.wid.isCompanion();
                }),
                c = await Promise.allSettled(
                  u.map(function (e) {
                    return o("WAWebAeaRefresh").processAeaPrimaryBundle(
                      e,
                      o("WAWebWamEnumPrekeysFetchContext").PREKEYS_FETCH_CONTEXT
                        .AEA_CONSUMER_BACKFILL,
                    );
                  }),
                );
              if (
                (c.forEach(function (e, a) {
                  var i = o("WAWebWidFactory")
                    .asUserWidOrThrow(u[a].wid)
                    .toString();
                  if (e.status === "rejected") {
                    o("WALogger")
                      .WARN(
                        g ||
                          (g = babelHelpers.taggedTemplateLiteralLoose([
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
                          .IDENTITY_CHANGED && n.add(i);
                }),
                l.length > 0)
              )
                return;
              var d = new Set(
                u.map(function (e) {
                  return o("WAWebWidFactory")
                    .asUserWidOrThrow(e.wid)
                    .toString();
                }),
              );
              a.filter(function (e) {
                return !d.has(e.toString());
              }).forEach(function (e) {
                return n.add(e.toString());
              });
            } catch (e) {
              if (e instanceof o("WAWebFetchPrekeysJob").EmptyKeyInfoError) {
                a.forEach(function (e) {
                  return n.add(e.toString());
                });
                return;
              }
              o("WALogger")
                .WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea][backfill] prekey batch failed",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("aea-consumer-backfill-prekey-fetch-failed");
            }
          },
          { batchSize: v },
        ),
        n.size > 0 &&
          o("WALogger").LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "[aea][backfill] unavailable=",
                "",
              ])),
            String(n.size),
          ),
        { refetchedLids: t, unavailableLids: n }
      );
    }
    async function x(e) {
      var t = await o("WAWebSignalProtocolStore")
          .getPersistSignalProtocolStore()
          .getAllIdentityRows(),
        n = [],
        r = 0;
      for (var a of t) {
        var i = $(a);
        i != null &&
          (r++,
          a.accountEncryptionState == null &&
            !e.has(i.toString()) &&
            n.push({ row: a, accountLid: i }));
      }
      var l = await N(n, function (e) {
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
    }
    function $(e) {
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
              C ||
                (C = babelHelpers.taggedTemplateLiteralLoose([
                  "[aea][backfill] unparseable identity row identifier=",
                  "",
                ])),
              P(e.identifier),
            ),
            o("WALogger")
              .WARN(
                b ||
                  (b = babelHelpers.taggedTemplateLiteralLoose([
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
    function P(e) {
      var t = r("justknobx")._("7009") ? r("gkx")("9092") : !r("gkx")("26258");
      return t ? e : e.replace(/\d+/g, "#");
    }
    async function N(e, t) {
      var n = [];
      return (
        await o("WAWebRunInBatches").runInBatches(
          e,
          async function (e) {
            var r = await Promise.all(
              e.map(function (e) {
                return o(
                  "WAWebAeaAccountCategory",
                ).isAeaReceiveEnabledForAccount(t(e));
              }),
            );
            e.forEach(function (e, t) {
              r[t] && n.push(e);
            });
          },
          { batchSize: S },
        ),
        n
      );
    }
    ((l.runAeaConsumerBackfill = R), (l.aeaIdentifierForLog = P));
  },
  98,
);
