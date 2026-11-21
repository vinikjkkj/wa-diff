__d(
  "WAWebDBCreateLidPnMappings",
  [
    "Promise",
    "WALogger",
    "WAPromiseDelays",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendApi",
    "WAWebContactsDbLidMigrationUtils",
    "WAWebDBContactRemoveSoftDeletedUsernames",
    "WAWebDynamicThrottlingManager",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebLidPnMappingConflictLogging",
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
      }),
      h = [];
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.identityChangeHandlingEnabled,
            n = e.learningSource,
            r = e.mappings,
            o = e.write;
          yield b({
            mappings: r,
            write: o,
            identityChangeHandlingEnabled: t,
            learningSource: n,
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
          var t = e.identityChangeHandlingEnabled,
            n = e.learningSource,
            r = e.mappings,
            a = e.write;
          if (r.length !== 0)
            for (var i = 0; i < r.length; ) {
              var l = g.getThrottleRate(),
                s = Math.min(l.batchSize, r.length - i),
                u = r.slice(i, i + s),
                c = self.performance.now();
              yield S({
                mappings: u,
                write: a,
                identityChangeHandlingEnabled: t,
                learningSource: n,
              });
              var d = self.performance.now() - c;
              (g.setLastProcessTime(d, u.length),
                l.delayMs > 0 &&
                  (yield o("WAPromiseDelays").delayMs(l.delayMs)),
                (i += s));
            }
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
          var t = e.identityChangeHandlingEnabled,
            r = e.learningSource,
            a = e.mappings,
            i = e.sourceStanzaId,
            l = e.write,
            s = l === "now",
            d = l === "with_batch" || l === "with_offline_msg",
            m = l === "with_live_msg" || l === "with_offline_msg",
            p = t != null ? t : !0,
            _ = [],
            g = [],
            h = new Map(
              a.map(function (e) {
                return [e.pn, e.lid];
              }),
            ),
            y = o("WATimeUtils").unixTime(),
            C = o("WATimeUtils").castToUnixTime(0),
            b = [],
            v = new Set();
          (a.forEach(function (e) {
            var t = e.lid,
              n = e.pn,
              a = o("WAWebApiContact").lidPnCache.getCurrentLid(n),
              u = o("WAWebApiContact").lidPnCache.getPhoneNumber(t),
              c = u == null,
              m = !c,
              f = (a == null ? void 0 : a.equals(t)) === !0,
              S = m && !f;
            (u == null ? void 0 : u.equals(n)) === !1 &&
              o("WAWebLidPnMappingConflictLogging").logLidPnMappingConflict({
                cachedPnForMappingLid: u,
                learningSource: r,
                mappingLid: t,
                mappingPn: n,
                sourceStanzaId: i,
              });
            var R, E;
            switch (r) {
              case "usync":
              case "pn-sharing-fetch":
                ((R = !1), (E = c || S));
                break;
              case "peer-pn-message":
              case "peer-lid-message":
                ((R = !1), (E = c));
                break;
              case "recipient-latest-lid":
              case "migration-sync-latest":
              case "migration-sync-old":
              case "blocklist-active":
              case "blocklist-inactive":
                ((R = !1), (E = !f));
                break;
              default:
                ((R = S), (E = c));
            }
            if (E) {
              a != null && p && b.push(L(n, d, l === "with_live_msg"));
              var k;
              r === "migration-sync-old" || r === "blocklist-inactive"
                ? (k = !0)
                : (k = h.get(n) !== t);
              var I = k ? C : y;
              (o("WAWebApiContact").warmUpLidPnMapping(t, n, I),
                _.push({ lid: t.toString(), phoneNumber: n.toString() }),
                s
                  ? g.push({ lid: t, pn: n, phoneNumberCreatedAt: I })
                  : o("WAWebApiContact").lidPnCacheDirtySet.add(t.toString()));
            }
            R && v.add(n);
          }),
            s && o("WAWebApiContact").lidPnCacheDirtySet.size > 0 && P(g));
          var S =
            b.length > 0
              ? (f || (f = n("Promise"))).all(b).then(function (e) {
                  var t = 0;
                  for (var n of e) {
                    var a, i;
                    t +=
                      (a =
                        n == null || (i = n.notifications) == null
                          ? void 0
                          : i.length) != null
                        ? a
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
                    r,
                  );
                })
              : (f || (f = n("Promise"))).resolve();
          v.size !== 0 &&
            (o("WALogger").LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "createLidPnMappings: ",
                  " contacts requiring usync, source ",
                  "",
                ])),
              v.size,
              r,
            ),
            o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
              "syncContactListJob",
              {
                contactIds: Array.from(v),
                shouldSyncDevice: !1,
                mode: "query",
              },
            ));
          var R = g.length > 0 ? N(g) : (f || (f = n("Promise"))).resolve([]),
            E = yield (f || (f = n("Promise"))).all([S, R]),
            I = E[1];
          return (
            yield k(_, m),
            yield o(
              "WAWebDBContactRemoveSoftDeletedUsernames",
            ).applySoftDeletedUsernameClearsToFrontend(I),
            { identityChanged: b.length > 0 }
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o(
            "WAWebIdentityChangeApiWorkerCompatible",
          ).handleNewIdentity(e, t);
          return (n && (yield x()), r);
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t) {
            var n;
            (n = h).push.apply(n, e);
          } else e.length > 0 && (yield w(e));
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        D.apply(this, arguments)
      );
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = h;
          h = [];
          try {
            var t = [];
            P(t);
            var n = yield N(t);
            yield o(
              "WAWebDBContactRemoveSoftDeletedUsernames",
            ).applySoftDeletedUsernameClearsToFrontend(n);
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
          yield k(e, !1).catch(function (e) {
            o("WALogger")
              .ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "flushLidPnMappingsToDb: updating the frontend failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs(
                "Failed to update frontend with flushed LID/PN mappings",
              );
          });
        })),
        $.apply(this, arguments)
      );
    }
    function P(t) {
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
    function N(e) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = yield T(
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
          return (
            o("WALogger").LOG(
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
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()
              ? o(
                  "WAWebDBContactRemoveSoftDeletedUsernames",
                ).removeSoftDeletedUsernames(
                  e.map(function (e) {
                    var t = e.lid;
                    return t;
                  }),
                )
              : []
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
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "bulkUpdatePhoneNumberJids",
            { lidPhoneNumberMappings: e },
          );
        })),
        A.apply(this, arguments)
      );
    }
    ((l.createLidPnMappingsInBatches = y),
      (l.createLidPnMappings = S),
      (l.flushLidPnMappingsToDb = x));
  },
  98,
);
