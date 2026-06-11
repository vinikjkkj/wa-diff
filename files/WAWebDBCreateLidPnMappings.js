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
      g,
      h = new (o("WAWebDynamicThrottlingManager").DynamicThrottlingManager)({
        targetTimeMs: 100,
        maxDelayTimeMs: 1e3,
        minBatchSize: 5,
        maxBatchSize: 300,
        defaultBatchSize: 30,
      });
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.flushImmediately,
            n = e.identityChangeHandlingEnabled,
            a = e.learningSource,
            i = e.mappings;
          o("WAWebABProps").getABPropConfigValue(
            "wa_web_history_sync_dynamic_throttling",
          )
            ? yield b({
                mappings: i,
                flushImmediately: t,
                identityChangeHandlingEnabled: n,
                learningSource: a,
              })
            : r("WAWebEnvironment").isWindows
              ? yield o("WAWebRunInBatches").runInBatches(i, function (e) {
                  return R({
                    mappings: e,
                    flushImmediately: t,
                    identityChangeHandlingEnabled: n,
                    learningSource: a,
                  });
                })
              : yield R({
                  mappings: i,
                  flushImmediately: t,
                  identityChangeHandlingEnabled: n,
                  learningSource: a,
                });
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
            n = e.identityChangeHandlingEnabled,
            r = e.learningSource,
            a = e.mappings;
          if (a.length !== 0)
            for (var i = 0; i < a.length; ) {
              var l = h.getThrottleRate(),
                s = Math.min(l.batchSize, a.length - i),
                u = a.slice(i, i + s),
                c = self.performance.now();
              yield R({
                mappings: u,
                flushImmediately: t,
                identityChangeHandlingEnabled: n,
                learningSource: r,
              });
              var d = self.performance.now() - c;
              (h.setLastProcessTime(d, u.length),
                l.delayMs > 0 &&
                  (yield o("WAAsyncSleep").asyncSleep(l.delayMs)),
                (i += s));
            }
        })),
        v.apply(this, arguments)
      );
    }
    function S(t, n, r, a) {
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
      o("WALogger")
        .ERROR(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[createLidPnMappings] LID ",
              " cached PN ",
              " != new PN ",
              " src ",
              "",
            ])),
          t,
          r,
          n,
          a,
        )
        .sendLogs("lid-pn-mapping-conflict");
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            p = o("WATimeUtils").unixTime(),
            _ = o("WATimeUtils").castToUnixTime(0),
            f = [],
            h = new Set();
          (i.forEach(function (e) {
            var n = e.lid,
              r = e.pn,
              i = o("WAWebApiContact").lidPnCache.getCurrentLid(r),
              d = o("WAWebApiContact").lidPnCache.getPhoneNumber(n),
              m = d == null,
              g = !m,
              y = (i == null ? void 0 : i.equals(n)) === !0,
              C = g && !y;
            (d == null ? void 0 : d.equals(r)) === !1 && S(n, r, d, a);
            var b, v;
            switch (a) {
              case "usync":
                ((b = !1), (v = m || C));
                break;
              case "peer-pn-message":
              case "peer-lid-message":
                ((b = !1), (v = m));
                break;
              case "recipient-latest-lid":
              case "migration-sync-latest":
              case "migration-sync-old":
              case "blocklist-active":
              case "blocklist-inactive":
                ((b = !1), (v = !y));
                break;
              default:
                ((b = C), (v = m));
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
              var R;
              a === "migration-sync-old" || a === "blocklist-inactive"
                ? (R = !0)
                : (R = c.get(r) !== n);
              var L = R ? _ : p;
              (o("WAWebApiContact").warmUpLidPnMapping(n, r, L),
                s.push({ lid: n.toString(), phoneNumber: r.toString() }),
                t
                  ? u.push({ lid: n, pn: r, phoneNumberCreatedAt: L })
                  : o("WAWebApiContact").lidPnCacheDirtySet.add(n.toString()));
            }
            b && h.add(r);
          }),
            t && o("WAWebApiContact").lidPnCacheDirtySet.size > 0 && D(u));
          var y =
            f.length > 0
              ? (g || (g = n("Promise"))).all(f).then(function (e) {
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
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "createLidPnMappings: ",
                        " id change notifs gen, src ",
                        "",
                      ])),
                    t,
                    a,
                  );
                })
              : (g || (g = n("Promise"))).resolve();
          h.size !== 0 &&
            (o("WALogger").LOG(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
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
          (u.length > 0 && C.push(x(u)),
            yield (g || (g = n("Promise"))).all(C),
            s.length > 0 && (yield P(s)));
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "getPnRowData failed! ",
                  "",
                ])),
              r("getErrorSafe")(e).stack,
            );
          }
          return new Map();
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = [];
            (D(e), yield x(e));
          } catch (e) {
            o("WALogger")
              .ERROR(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "flushLidPnMappingsToDb failed!",
                  ])),
              )
              .sendLogs("Failed to flushLidPnMappingsToDb");
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
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
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "lidPnCacheDirtySet: ",
              " flushed",
            ])),
          o("WAWebApiContact").lidPnCacheDirtySet.size,
        ),
        o("WAWebApiContact").lidPnCacheDirtySet.clear());
    }
    function x(e) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length !== 0) {
            var t = yield E(
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
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "bulkUpdatePhoneNumberJids",
            { lidPhoneNumberMappings: e },
          );
        })),
        N.apply(this, arguments)
      );
    }
    ((l.createLidPnMappingsInBatches = y),
      (l.createLidPnMappings = R),
      (l.flushLidPnMappingsToDb = I));
  },
  98,
);
