__d(
  "WAWebDBCreateLidPnMappings",
  [
    "Promise",
    "WAAsyncSleep",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactsDbLidMigrationUtils",
    "WAWebDBContactRemoveSoftDeletedUsernames",
    "WAWebDynamicThrottlingManager",
    "WAWebEnvironment",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebRunInBatches",
    "WAWebSchemaContact_DO_NOT_USE_DIRECTLY",
    "WAWebUsernameGatingUtils",
    "WAWebWidDevTools",
    "WAWebWidFactory",
    "WAWebWorkerSafeBackendApi",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
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
      y = new (o("WAWebDynamicThrottlingManager").DynamicThrottlingManager)({
        targetTimeMs: 100,
        maxDelayTimeMs: 1e3,
        minBatchSize: 5,
        maxBatchSize: 300,
        defaultBatchSize: 30,
      });
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.flushImmediately,
            n = e.identityChangeHandlingEnabled,
            a = e.learningSource,
            i = e.mappings;
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_history_sync_dynamic_throttling",
          )
            ? yield v({
                mappings: i,
                flushImmediately: t,
                identityChangeHandlingEnabled: n,
                learningSource: a,
              })
            : r("WAWebEnvironment").isWindows
              ? yield o("WAWebRunInBatches").runInBatches(i, function (e) {
                  return L({
                    mappings: e,
                    flushImmediately: t,
                    identityChangeHandlingEnabled: n,
                    learningSource: a,
                  });
                })
              : yield L({
                  mappings: i,
                  flushImmediately: t,
                  identityChangeHandlingEnabled: n,
                  learningSource: a,
                });
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.flushImmediately,
            n = e.identityChangeHandlingEnabled,
            r = e.learningSource,
            a = e.mappings;
          if (a.length !== 0)
            for (var i = 0; i < a.length; ) {
              var l = y.getThrottleRate(),
                s = Math.min(l.batchSize, a.length - i),
                u = a.slice(i, i + s),
                c = self.performance.now();
              yield L({
                mappings: u,
                flushImmediately: t,
                identityChangeHandlingEnabled: n,
                learningSource: r,
              });
              var d = self.performance.now() - c;
              (y.setLastProcessTime(d, u.length),
                l.delayMs > 0 &&
                  (yield o("WAAsyncSleep").asyncSleep(l.delayMs)),
                (i += s));
            }
        })),
        S.apply(this, arguments)
      );
    }
    function R(t, n, r, a) {
      var i =
        o("WAWebApiContact").lidPnCache.getPhoneNumber(
          o("WAWebWidFactory").createUserLidOrThrow(n.user, "lid"),
        ) != null;
      if (i) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[createLidPnMappings] new PN ",
                " is actually a LID src ",
                "",
              ])),
            n,
            a,
          )
          .sendLogs("lid-pn-mapping-conflict-pn-is-lid");
        return;
      }
      if (o("WAWebWidDevTools").isWidClientAssigned(t)) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[createLidPnMappings] fake LID ",
                " cached PN ",
                " != new PN ",
                "",
              ])),
            t,
            r,
            n,
          )
          .sendLogs("lid-pn-mapping-conflict-fake-lid-" + a);
        return;
      }
      o("WALogger")
        .ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[createLidPnMappings] LID ",
              " cached PN ",
              " != new PN ",
              "",
            ])),
          t,
          r,
          n,
        )
        .sendLogs("lid-pn-mapping-conflict-" + a);
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.flushImmediately,
            r = e.identityChangeHandlingEnabled,
            a = e.learningSource,
            i = e.mappings,
            l = r != null ? r : !0,
            s = [],
            u = [],
            c = new Map(
              i.map(function (e) {
                return [e.pn, e.lid];
              }),
            ),
            d = o("WATimeUtils").unixTime(),
            _ = o("WATimeUtils").castToUnixTime(0),
            f = [],
            g = new Set();
          (i.forEach(function (e) {
            var n = e.lid,
              r = e.pn,
              i = o("WAWebApiContact").lidPnCache.getCurrentLid(r),
              m = o("WAWebApiContact").lidPnCache.getPhoneNumber(n),
              p = m == null,
              h = !p,
              y = (i == null ? void 0 : i.equals(n)) === !0,
              C = h && !y;
            (m == null ? void 0 : m.equals(r)) === !1 && R(n, r, m, a);
            var b, v;
            switch (a) {
              case "usync":
                ((b = !1), (v = p || C));
                break;
              case "peer-pn-message":
              case "peer-lid-message":
                ((b = !1), (v = p));
                break;
              case "recipient-latest-lid":
              case "migration-sync-latest":
              case "migration-sync-old":
              case "blocklist-active":
              case "blocklist-inactive":
                ((b = !1), (v = !y));
                break;
              default:
                ((b = C), (v = p));
            }
            if (v) {
              i != null &&
                l &&
                f.push(
                  o("WAWebIdentityChangeApiWorkerCompatible").handleNewIdentity(
                    r,
                    !t,
                  ),
                );
              var S;
              a === "migration-sync-old" || a === "blocklist-inactive"
                ? (S = !0)
                : (S = c.get(r) !== n);
              var L = S ? _ : d;
              (o("WAWebApiContact").warmUpLidPnMapping(n, r, L),
                s.push({ lid: n.toString(), phoneNumber: r.toString() }),
                t
                  ? u.push({ lid: n, pn: r, phoneNumberCreatedAt: L })
                  : o("WAWebApiContact").lidPnCacheDirtySet.add(n.toString()));
            }
            b && g.add(r);
          }),
            t && o("WAWebApiContact").lidPnCacheDirtySet.size > 0 && x(u));
          var y =
            f.length > 0
              ? (h || (h = n("Promise"))).all(f).then(function (e) {
                  var t = 0;
                  for (var n of e) {
                    var r, i;
                    t +=
                      (r =
                        n == null || (i = n.notifications) == null
                          ? void 0
                          : i.length) != null
                        ? r
                        : 0;
                  }
                  o("WALogger").LOG(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "createLidPnMappings: ",
                        " id change notifs gen, src ",
                        "",
                      ])),
                    t,
                    a,
                  );
                })
              : (h || (h = n("Promise"))).resolve();
          g.size !== 0 &&
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "createLidPnMappings: ",
                  " contacts requiring usync, source ",
                  "",
                ])),
              g.size,
              a,
            ),
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "syncContactListJob",
              {
                contactIds: Array.from(g),
                shouldSyncDevice: !1,
                mode: "query",
              },
            ));
          var C = [y];
          (u.length > 0 && C.push($(u)),
            yield (h || (h = n("Promise"))).all(C),
            s.length > 0 && (yield N(s)));
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            var t = yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
              .getContactTable()
              .bulkGet(e);
            return new Map(
              t.filter(Boolean).map(function (e) {
                return [e.id, e];
              }),
            );
          } catch (e) {
            o("WALogger").ERROR(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "getPnRowData failed! ",
                  "",
                ])),
              r("getErrorSafe")(e).stack,
            );
          }
          return new Map();
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = [];
            (x(e), yield $(e));
          } catch (e) {
            o("WALogger")
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "flushLidPnMappingsToDb failed!",
                  ])),
              )
              .sendLogs("Failed to flushLidPnMappingsToDb");
          }
        })),
        D.apply(this, arguments)
      );
    }
    function x(e) {
      (o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose([
            "flush lidPnCacheDirtySet: get dirty updates for ",
            "",
          ])),
        Array.from(o("WAWebApiContact").lidPnCacheDirtySet).join(","),
      ),
        o("WAWebApiContact").lidPnCacheDirtySet.forEach(function (t) {
          var n = o("WAWebWidFactory").createUserLidOrThrow(t),
            r = o("WAWebApiContact").lidPnCache.getLidEntry(n);
          r != null &&
            e.push({
              lid: n,
              pn: r.phoneNumber,
              phoneNumberCreatedAt: o("WATimeUtils").castToUnixTime(
                r.phoneNumberCreatedAt,
              ),
            });
        }),
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "lidPnCacheDirtySet: ",
              " flushed",
            ])),
          o("WAWebApiContact").lidPnCacheDirtySet.size,
        ),
        o("WAWebApiContact").lidPnCacheDirtySet.clear());
    }
    function $(e) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = yield k(
                e.map(function (e) {
                  var t = e.pn;
                  return t.toJid();
                }),
              ),
              n = e.map(function (e) {
                var n = e.lid,
                  r = e.phoneNumberCreatedAt,
                  a = e.pn,
                  i = t.get(a.toJid());
                return babelHelpers.extends(
                  {
                    id: n.toString(),
                    phoneNumber: a.toString(),
                    phoneNumberCreatedAt: r,
                  },
                  i
                    ? o(
                        "WAWebContactsDbLidMigrationUtils",
                      ).createContactLidRowFromPnRow(n, i)
                    : {
                        contactHash: o("WAWebApiContact").getContactHash(
                          n.toJid(),
                        ),
                      },
                );
              });
            (o("WALogger").LOG(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "flushLidPnMappingsToDbImpl: ",
                  " records to update",
                ])),
              n.length,
            ),
              yield o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
                .getContactTable()
                .bulkCreateOrMerge(n),
              o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
                (yield o(
                  "WAWebDBContactRemoveSoftDeletedUsernames",
                ).removeSoftDeletedUsernames(
                  e.map(function (e) {
                    var t = e.lid;
                    return t;
                  }),
                )));
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "bulkUpdatePhoneNumberJids",
            { lidPhoneNumberMappings: e },
          );
        })),
        M.apply(this, arguments)
      );
    }
    ((l.createLidPnMappingsInBatches = C),
      (l.createLidPnMappings = L),
      (l.flushLidPnMappingsToDb = T));
  },
  98,
);
