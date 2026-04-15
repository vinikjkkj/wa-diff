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
      f = new (o("WAWebDynamicThrottlingManager").DynamicThrottlingManager)({
        targetTimeMs: 100,
        maxDelayTimeMs: 1e3,
        minBatchSize: 5,
        maxBatchSize: 300,
        defaultBatchSize: 30,
      });
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.flushImmediately,
            n = e.identityChangeHandlingEnabled,
            a = e.learningSource,
            i = e.mappings;
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_history_sync_dynamic_throttling",
          )
            ? yield y({
                mappings: i,
                flushImmediately: t,
                identityChangeHandlingEnabled: n,
                learningSource: a,
              })
            : r("WAWebEnvironment").isWindows
              ? yield o("WAWebRunInBatches").runInBatches(i, function (e) {
                  return b({
                    mappings: e,
                    flushImmediately: t,
                    identityChangeHandlingEnabled: n,
                    learningSource: a,
                  });
                })
              : yield b({
                  mappings: i,
                  flushImmediately: t,
                  identityChangeHandlingEnabled: n,
                  learningSource: a,
                });
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.flushImmediately,
            n = e.identityChangeHandlingEnabled,
            r = e.learningSource,
            a = e.mappings;
          if (a.length !== 0)
            for (var i = 0; i < a.length; ) {
              var l = f.getThrottleRate(),
                s = Math.min(l.batchSize, a.length - i),
                u = a.slice(i, i + s),
                c = self.performance.now();
              yield b({
                mappings: u,
                flushImmediately: t,
                identityChangeHandlingEnabled: n,
                learningSource: r,
              });
              var d = self.performance.now() - c;
              (f.setLastProcessTime(d, u.length),
                l.delayMs > 0 &&
                  (yield o("WAAsyncSleep").asyncSleep(l.delayMs)),
                (i += s));
            }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.flushImmediately,
            r = e.identityChangeHandlingEnabled,
            a = e.learningSource,
            i = e.mappings,
            l = r != null ? r : !0,
            s = [],
            d = [],
            m = new Map(
              i.map(function (e) {
                return [e.pn, e.lid];
              }),
            ),
            p = o("WATimeUtils").unixTime(),
            f = o("WATimeUtils").castToUnixTime(0),
            g = [],
            h = new Set();
          (i.forEach(function (e) {
            var n = e.lid,
              r = e.pn,
              i = o("WAWebApiContact").lidPnCache.getCurrentLid(r),
              u = o("WAWebApiContact").lidPnCache.getPhoneNumber(n),
              c = u == null,
              _ = !c,
              y = (i == null ? void 0 : i.equals(n)) === !0,
              C = _ && !y,
              b,
              v;
            switch (a) {
              case "usync":
                ((b = !1), (v = c || C));
                break;
              case "peer-pn-message":
              case "recipient-latest-lid":
              case "peer-lid-message":
              case "migration-sync-latest":
              case "migration-sync-old":
              case "blocklist-active":
              case "blocklist-inactive":
                ((b = !1), (v = !y));
                break;
              default:
                ((b = C), (v = c));
            }
            if (v) {
              i != null &&
                l &&
                g.push(
                  o("WAWebIdentityChangeApiWorkerCompatible").handleNewIdentity(
                    r,
                    !t,
                  ),
                );
              var S;
              a === "migration-sync-old" || a === "blocklist-inactive"
                ? (S = !0)
                : (S = m.get(r) !== n);
              var R = S ? f : p;
              (o("WAWebApiContact").warmUpLidPnMapping(n, r, R),
                s.push({ lid: n.toString(), phoneNumber: r.toString() }),
                t
                  ? d.push({ lid: n, pn: r, phoneNumberCreatedAt: R })
                  : o("WAWebApiContact").lidPnCacheDirtySet.add(n.toString()));
            }
            b && h.add(r);
          }),
            t && o("WAWebApiContact").lidPnCacheDirtySet.size > 0 && k(d));
          var y =
            g.length > 0
              ? (_ || (_ = n("Promise"))).all(g).then(function (e) {
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
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "createLidPnMappings: ",
                        " id change notifs gen, src ",
                        "",
                      ])),
                    t,
                    a,
                  );
                })
              : (_ || (_ = n("Promise"))).resolve();
          h.size !== 0 &&
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "createLidPnMappings: ",
                  " contacts requiring usync, source ",
                  "",
                ])),
              h.size,
              a,
            ),
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "syncContactListJob",
              {
                contactIds: Array.from(h),
                shouldSyncDevice: !1,
                mode: "query",
              },
            ));
          var C = [y];
          (d.length > 0 && C.push(I(d)),
            yield (_ || (_ = n("Promise"))).all(C),
            s.length > 0 && (yield D(s)));
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "getPnRowData failed! ",
                  "",
                ])),
              r("getErrorSafe")(e).stack,
            );
          }
          return new Map();
        })),
        R.apply(this, arguments)
      );
    }
    function L() {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = [];
            (k(e), yield I(e));
          } catch (e) {
            o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "flushLidPnMappingsToDb failed!",
                  ])),
              )
              .sendLogs("Failed to flushLidPnMappingsToDb");
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(t) {
      (o("WALogger").LOG(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "flush lidPnCacheDirtySet: get dirty updates for ",
            "",
          ])),
        Array.from(o("WAWebApiContact").lidPnCacheDirtySet).join(","),
      ),
        o("WAWebApiContact").lidPnCacheDirtySet.forEach(function (e) {
          var n = o("WAWebWidFactory").createUserLidOrThrow(e),
            r = o("WAWebApiContact").lidPnCache.getLidEntry(n);
          r != null &&
            t.push({
              lid: n,
              pn: r.phoneNumber,
              phoneNumberCreatedAt: o("WATimeUtils").castToUnixTime(
                r.phoneNumberCreatedAt,
              ),
            });
        }),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "lidPnCacheDirtySet: ",
              " flushed",
            ])),
          o("WAWebApiContact").lidPnCacheDirtySet.size,
        ),
        o("WAWebApiContact").lidPnCacheDirtySet.clear());
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = yield S(
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
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
        T.apply(this, arguments)
      );
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "bulkUpdatePhoneNumberJids",
            { lidPhoneNumberMappings: e },
          );
        })),
        x.apply(this, arguments)
      );
    }
    ((l.createLidPnMappingsInBatches = g),
      (l.createLidPnMappings = b),
      (l.flushLidPnMappingsToDb = L));
  },
  98,
);
