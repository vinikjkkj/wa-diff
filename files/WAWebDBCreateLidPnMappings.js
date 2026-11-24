__d(
  "WAWebDBCreateLidPnMappings",
  [
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
    "getErrorSafe",
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
      g = new (o("WAWebDynamicThrottlingManager").DynamicThrottlingManager)({
        targetTimeMs: 100,
        maxDelayTimeMs: 1e3,
        minBatchSize: 5,
        maxBatchSize: 300,
        defaultBatchSize: 30,
      }),
      h = [];
    async function y(e) {
      var t = e.identityChangeHandlingEnabled,
        n = e.learningSource,
        r = e.mappings,
        o = e.write;
      await C({
        mappings: r,
        write: o,
        identityChangeHandlingEnabled: t,
        learningSource: n,
      });
    }
    async function C(e) {
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
          await b({
            mappings: u,
            write: a,
            identityChangeHandlingEnabled: t,
            learningSource: n,
          });
          var d = self.performance.now() - c;
          (g.setLastProcessTime(d, u.length),
            l.delayMs > 0 && (await o("WAPromiseDelays").delayMs(l.delayMs)),
            (i += s));
        }
    }
    async function b(t) {
      var n = t.identityChangeHandlingEnabled,
        r = t.learningSource,
        a = t.mappings,
        i = t.sourceStanzaId,
        l = t.write,
        u = l === "now",
        c = l === "with_batch" || l === "with_offline_msg",
        d = l === "with_live_msg" || l === "with_offline_msg",
        m = n != null ? n : !0,
        p = [],
        _ = [],
        f = new Map(
          a.map(function (e) {
            return [e.pn, e.lid];
          }),
        ),
        g = o("WATimeUtils").unixTime(),
        h = o("WATimeUtils").castToUnixTime(0),
        y = [],
        C = new Set();
      (a.forEach(function (e) {
        var t = e.lid,
          n = e.pn,
          a = o("WAWebApiContact").lidPnCache.getCurrentLid(n),
          s = o("WAWebApiContact").lidPnCache.getPhoneNumber(t),
          d = s == null,
          b = !d,
          S = (a == null ? void 0 : a.equals(t)) === !0,
          R = b && !S;
        (s == null ? void 0 : s.equals(n)) === !1 &&
          o("WAWebLidPnMappingConflictLogging").logLidPnMappingConflict({
            cachedPnForMappingLid: s,
            learningSource: r,
            mappingLid: t,
            mappingPn: n,
            sourceStanzaId: i,
          });
        var L, E;
        switch (r) {
          case "usync":
          case "pn-sharing-fetch":
            ((L = !1), (E = d || R));
            break;
          case "peer-pn-message":
          case "peer-lid-message":
            ((L = !1), (E = d));
            break;
          case "recipient-latest-lid":
          case "migration-sync-latest":
          case "migration-sync-old":
          case "blocklist-active":
          case "blocklist-inactive":
            ((L = !1), (E = !S));
            break;
          default:
            ((L = R), (E = d));
        }
        if (E) {
          a != null && m && y.push(v(n, c, l === "with_live_msg"));
          var k;
          r === "migration-sync-old" || r === "blocklist-inactive"
            ? (k = !0)
            : (k = f.get(n) !== t);
          var I = k ? h : g;
          (o("WAWebApiContact").warmUpLidPnMapping(t, n, I),
            p.push({ lid: t.toString(), phoneNumber: n.toString() }),
            u
              ? _.push({ lid: t, pn: n, phoneNumberCreatedAt: I })
              : o("WAWebApiContact").lidPnCacheDirtySet.add(t.toString()));
        }
        L && C.add(n);
      }),
        u && o("WAWebApiContact").lidPnCacheDirtySet.size > 0 && E(_));
      var b =
        y.length > 0
          ? Promise.all(y).then(function (t) {
              var n = 0;
              for (var a of t) {
                var i, l;
                n +=
                  (i =
                    a == null || (l = a.notifications) == null
                      ? void 0
                      : l.length) != null
                    ? i
                    : 0;
              }
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "createLidPnMappings: ",
                    " id change notifs gen, src ",
                    "",
                  ])),
                n,
                r,
              );
            })
          : Promise.resolve();
      C.size !== 0 &&
        (o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "createLidPnMappings: ",
              " contacts requiring usync, source ",
              "",
            ])),
          C.size,
          r,
        ),
        o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
          "syncContactListJob",
          { contactIds: Array.from(C), shouldSyncDevice: !1, mode: "query" },
        ));
      var R = _.length > 0 ? I(_) : Promise.resolve([]),
        L = await Promise.all([b, R]),
        k = L[1];
      return (
        await S(p, d),
        await o(
          "WAWebDBContactRemoveSoftDeletedUsernames",
        ).applySoftDeletedUsernameClearsToFrontend(k),
        { identityChanged: y.length > 0 }
      );
    }
    async function v(e, t, n) {
      var r = await o(
        "WAWebIdentityChangeApiWorkerCompatible",
      ).handleNewIdentity(e, t);
      return (n && (await L()), r);
    }
    async function S(e, t) {
      if (t) {
        var n;
        (n = h).push.apply(n, e);
      } else e.length > 0 && (await T(e));
    }
    async function R(e) {
      try {
        var t = await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
          .getContactTable()
          .bulkGet(e);
        return new Map(
          t.filter(Boolean).map(function (e) {
            return [e.id, e];
          }),
        );
      } catch (e) {
        o("WALogger").ERROR(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "getPnRowData failed! ",
              "",
            ])),
          r("getErrorSafe")(e).stack,
        );
      }
      return new Map();
    }
    async function L() {
      var e = h;
      h = [];
      try {
        var t = [];
        E(t);
        var n = await I(t);
        await o(
          "WAWebDBContactRemoveSoftDeletedUsernames",
        ).applySoftDeletedUsernameClearsToFrontend(n);
      } catch (e) {
        o("WALogger")
          .ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "flushLidPnMappingsToDb failed!",
              ])),
          )
          .sendLogs("Failed to flushLidPnMappingsToDb");
      }
      await S(e, !1).catch(function (e) {
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "flushLidPnMappingsToDb: updating the frontend failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("Failed to update frontend with flushed LID/PN mappings");
      });
    }
    function E(e) {
      var t = D();
      (x(t, function () {
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "flush lidPnCacheDirtySet: get dirty updates for ",
              "",
            ])),
          Array.from(o("WAWebApiContact").lidPnCacheDirtySet).join(","),
        );
      }),
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
        k(t, Array.from(o("WAWebApiContact").lidPnCacheDirtySet)),
        o("WAWebApiContact").lidPnCacheDirtySet.clear());
    }
    function k(e, t) {
      e
        ? t.length > 0 &&
          o("WALogger").LOG(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "lidPnCacheDirtySet: ",
                " flushed: ",
                "",
              ])),
            t.length,
            t.join(","),
          )
        : o("WALogger").LOG(
            p ||
              (p = babelHelpers.taggedTemplateLiteralLoose([
                "lidPnCacheDirtySet: ",
                " flushed",
              ])),
            t.length,
          );
    }
    async function I(e) {
      if (e.length === 0) return [];
      var t = await R(
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
              : { contactHash: o("WAWebApiContact").getContactHash(n.toJid()) },
          );
        });
      return (
        o("WALogger").LOG(
          f ||
            (f = babelHelpers.taggedTemplateLiteralLoose([
              "flushLidPnMappingsToDbImpl: ",
              " records to update",
            ])),
          n.length,
        ),
        await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
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
    }
    async function T(e) {
      await o("WAWebBackendApi").frontendSendAndReceive(
        "bulkUpdatePhoneNumberJids",
        { lidPhoneNumberMappings: e },
      );
    }
    function D() {
      try {
        return r("justknobx")._("8711");
      } catch (e) {
        return !1;
      }
    }
    function x(e, t) {
      e || t();
    }
    ((l.createLidPnMappingsInBatches = y),
      (l.createLidPnMappings = b),
      (l.flushLidPnMappingsToDb = L));
  },
  98,
);
