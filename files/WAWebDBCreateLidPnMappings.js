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
    "WAWebGetPlatformFromStanzaId",
    "WAWebIdentityChangeApiWorkerCompatible",
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
            r = e.learningSource,
            o = e.mappings;
          yield v({
            mappings: o,
            flushImmediately: t,
            identityChangeHandlingEnabled: n,
            learningSource: r,
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
              yield k({
                mappings: u,
                flushImmediately: t,
                identityChangeHandlingEnabled: n,
                learningSource: r,
              });
              var d = self.performance.now() - c;
              (y.setLastProcessTime(d, u.length),
                l.delayMs > 0 &&
                  (yield o("WAPromiseDelays").delayMs(l.delayMs)),
                (i += s));
            }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      var t;
      return e != null
        ? (t = o("WAWebGetPlatformFromStanzaId").getPlatformFromStanzaId(e)) !=
          null
          ? t
          : "unknown"
        : "n/a";
    }
    function L(e, t) {
      if (e == null) return "";
      var n = e.user,
        r = t.user;
      return r.length > n.length && r.endsWith(n)
        ? "-new-pn-extra-prefix"
        : n.length > r.length && n.endsWith(r)
          ? "-cached-pn-extra-prefix"
          : "";
    }
    function E(t) {
      var n = t.cachedPnForMappingLid,
        r = t.learningSource,
        a = t.mappingLid,
        i = t.mappingPn,
        l = t.sourceStanzaId,
        c = R(l),
        d =
          o("WAWebApiContact").lidPnCache.getPhoneNumber(
            o("WAWebWidFactory").createUserLidOrThrow(i.user, "lid"),
          ) != null;
      if (d) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[createLidPnMappings] new PN ",
                " is actually a LID src ",
                " sender ",
                "",
              ])),
            i,
            r,
            c,
          )
          .sendLogs("lid-pn-mapping-conflict-pn-is-lid");
        return;
      }
      if (o("WAWebWidDevTools").isWidClientAssigned(a)) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[createLidPnMappings] fake LID ",
                " cached PN ",
                " != new PN ",
                " sender ",
                "",
              ])),
            a,
            n,
            i,
            c,
          )
          .sendLogs("lid-pn-mapping-conflict-fake-lid-" + r);
        return;
      }
      var m = L(n, i);
      o("WALogger")
        .ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[createLidPnMappings] LID ",
              " cached PN ",
              " != new PN ",
              " sender ",
              "",
            ])),
          a,
          n,
          i,
          c,
        )
        .sendLogs("lid-pn-mapping-conflict-" + r + m);
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.flushImmediately,
            r = e.identityChangeHandlingEnabled,
            a = e.learningSource,
            i = e.mappings,
            l = e.sourceStanzaId,
            s = r != null ? r : !0,
            u = [],
            c = [],
            d = new Map(
              i.map(function (e) {
                return [e.pn, e.lid];
              }),
            ),
            _ = o("WATimeUtils").unixTime(),
            f = o("WATimeUtils").castToUnixTime(0),
            g = [],
            y = new Set();
          (i.forEach(function (e) {
            var n = e.lid,
              r = e.pn,
              i = o("WAWebApiContact").lidPnCache.getCurrentLid(r),
              m = o("WAWebApiContact").lidPnCache.getPhoneNumber(n),
              p = m == null,
              h = !p,
              C = (i == null ? void 0 : i.equals(n)) === !0,
              b = h && !C;
            (m == null ? void 0 : m.equals(r)) === !1 &&
              E({
                cachedPnForMappingLid: m,
                learningSource: a,
                mappingLid: n,
                mappingPn: r,
                sourceStanzaId: l,
              });
            var v, S;
            switch (a) {
              case "usync":
                ((v = !1), (S = p || b));
                break;
              case "peer-pn-message":
              case "peer-lid-message":
                ((v = !1), (S = p));
                break;
              case "recipient-latest-lid":
              case "migration-sync-latest":
              case "migration-sync-old":
              case "blocklist-active":
              case "blocklist-inactive":
                ((v = !1), (S = !C));
                break;
              default:
                ((v = b), (S = p));
            }
            if (S) {
              i != null &&
                s &&
                g.push(
                  o("WAWebIdentityChangeApiWorkerCompatible").handleNewIdentity(
                    r,
                    !t,
                  ),
                );
              var R;
              a === "migration-sync-old" || a === "blocklist-inactive"
                ? (R = !0)
                : (R = d.get(r) !== n);
              var L = R ? f : _;
              (o("WAWebApiContact").warmUpLidPnMapping(n, r, L),
                u.push({ lid: n.toString(), phoneNumber: r.toString() }),
                t
                  ? c.push({ lid: n, pn: r, phoneNumberCreatedAt: L })
                  : o("WAWebApiContact").lidPnCacheDirtySet.add(n.toString()));
            }
            v && y.add(r);
          }),
            t && o("WAWebApiContact").lidPnCacheDirtySet.size > 0 && P(c));
          var C =
            g.length > 0
              ? (h || (h = n("Promise"))).all(g).then(function (e) {
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
          y.size !== 0 &&
            (o("WALogger").LOG(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
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
          var b = c.length > 0 ? N(c) : (h || (h = n("Promise"))).resolve([]),
            v = yield (h || (h = n("Promise"))).all([C, b]),
            S = v[1];
          (u.length > 0 && (yield w(u)),
            yield o(
              "WAWebDBContactRemoveSoftDeletedUsernames",
            ).applySoftDeletedUsernameClearsToFrontend(S));
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
        D.apply(this, arguments)
      );
    }
    function x() {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = [];
            P(e);
            var t = yield N(e);
            yield o(
              "WAWebDBContactRemoveSoftDeletedUsernames",
            ).applySoftDeletedUsernameClearsToFrontend(t);
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
        $.apply(this, arguments)
      );
    }
    function P(e) {
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
    ((l.createLidPnMappingsInBatches = C),
      (l.getExtraPrefixReasonSuffix = L),
      (l.createLidPnMappings = k),
      (l.flushLidPnMappingsToDb = x));
  },
  98,
);
