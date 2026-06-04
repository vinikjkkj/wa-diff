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
      f,
      g = new (o("WAWebDynamicThrottlingManager").DynamicThrottlingManager)({
        targetTimeMs: 100,
        maxDelayTimeMs: 1e3,
        minBatchSize: 5,
        maxBatchSize: 300,
        defaultBatchSize: 30,
      });
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.flushImmediately,
            n = e.identityChangeHandlingEnabled,
            a = e.learningSource,
            i = e.mappings;
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_history_sync_dynamic_throttling",
          )
            ? yield C({
                mappings: i,
                flushImmediately: t,
                identityChangeHandlingEnabled: n,
                learningSource: a,
              })
            : r("WAWebEnvironment").isWindows
              ? yield o("WAWebRunInBatches").runInBatches(i, function (e) {
                  return v({
                    mappings: e,
                    flushImmediately: t,
                    identityChangeHandlingEnabled: n,
                    learningSource: a,
                  });
                })
              : yield v({
                  mappings: i,
                  flushImmediately: t,
                  identityChangeHandlingEnabled: n,
                  learningSource: a,
                });
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.flushImmediately,
            n = e.identityChangeHandlingEnabled,
            r = e.learningSource,
            a = e.mappings;
          if (a.length !== 0)
            for (var i = 0; i < a.length; ) {
              var l = g.getThrottleRate(),
                s = Math.min(l.batchSize, a.length - i),
                u = a.slice(i, i + s),
                c = self.performance.now();
              yield v({
                mappings: u,
                flushImmediately: t,
                identityChangeHandlingEnabled: n,
                learningSource: r,
              });
              var d = self.performance.now() - c;
              (g.setLastProcessTime(d, u.length),
                l.delayMs > 0 &&
                  (yield o("WAAsyncSleep").asyncSleep(l.delayMs)),
                (i += s));
            }
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
            r = e.identityChangeHandlingEnabled,
            a = e.learningSource,
            i = e.mappings,
            l = r != null ? r : !0,
            s = [],
            m = [],
            p = new Map(
              i.map(function (e) {
                return [e.pn, e.lid];
              }),
            ),
            _ = o("WATimeUtils").unixTime(),
            g = o("WATimeUtils").castToUnixTime(0),
            h = [],
            y = new Set();
          (i.forEach(function (e) {
            var n = e.lid,
              r = e.pn,
              i = o("WAWebApiContact").lidPnCache.getCurrentLid(r),
              c = o("WAWebApiContact").lidPnCache.getPhoneNumber(n),
              d = c == null,
              f = !d,
              C = (i == null ? void 0 : i.equals(n)) === !0,
              b = f && !C;
            (c == null ? void 0 : c.equals(r)) === !1 &&
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[createLidPnMappings] LID ",
                      " cached PN ",
                      " != new PN ",
                      " src ",
                      "",
                    ])),
                  n,
                  c,
                  r,
                  a,
                )
                .sendLogs("lid-pn-mapping-conflict");
            var v, S;
            switch (a) {
              case "usync":
                ((v = !1), (S = d || b));
                break;
              case "peer-pn-message":
              case "peer-lid-message":
                ((v = !1), (S = d));
                break;
              case "recipient-latest-lid":
              case "migration-sync-latest":
              case "migration-sync-old":
              case "blocklist-active":
              case "blocklist-inactive":
                ((v = !1), (S = !C));
                break;
              default:
                ((v = b), (S = d));
            }
            if (S) {
              i != null &&
                l &&
                h.push(
                  o("WAWebIdentityChangeApiWorkerCompatible").handleNewIdentity(
                    r,
                    !t,
                  ),
                );
              var R;
              a === "migration-sync-old" || a === "blocklist-inactive"
                ? (R = !0)
                : (R = p.get(r) !== n);
              var L = R ? g : _;
              (o("WAWebApiContact").warmUpLidPnMapping(n, r, L),
                s.push({ lid: n.toString(), phoneNumber: r.toString() }),
                t
                  ? m.push({ lid: n, pn: r, phoneNumberCreatedAt: L })
                  : o("WAWebApiContact").lidPnCacheDirtySet.add(n.toString()));
            }
            v && y.add(r);
          }),
            t && o("WAWebApiContact").lidPnCacheDirtySet.size > 0 && I(m));
          var C =
            h.length > 0
              ? (f || (f = n("Promise"))).all(h).then(function (e) {
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
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "createLidPnMappings: ",
                        " id change notifs gen, src ",
                        "",
                      ])),
                    t,
                    a,
                  );
                })
              : (f || (f = n("Promise"))).resolve();
          y.size !== 0 &&
            (o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "createLidPnMappings: ",
                  " contacts requiring usync, source ",
                  "",
                ])),
              y.size,
              a,
            ),
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "syncContactListJob",
              {
                contactIds: Array.from(y),
                shouldSyncDevice: !1,
                mode: "query",
              },
            ));
          var b = [C];
          (m.length > 0 && b.push(T(m)),
            yield (f || (f = n("Promise"))).all(b),
            s.length > 0 && (yield x(s)));
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "getPnRowData failed! ",
                  "",
                ])),
              r("getErrorSafe")(e).stack,
            );
          }
          return new Map();
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = [];
            (I(e), yield T(e));
          } catch (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "flushLidPnMappingsToDb failed!",
                  ])),
              )
              .sendLogs("Failed to flushLidPnMappingsToDb");
          }
        })),
        k.apply(this, arguments)
      );
    }
    function I(t) {
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
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = yield R(
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
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
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
        D.apply(this, arguments)
      );
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "bulkUpdatePhoneNumberJids",
            { lidPhoneNumberMappings: e },
          );
        })),
        $.apply(this, arguments)
      );
    }
    ((l.createLidPnMappingsInBatches = h),
      (l.createLidPnMappings = v),
      (l.flushLidPnMappingsToDb = E));
  },
  98,
);
