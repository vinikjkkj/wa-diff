__d(
  "WAWebDBCreateLidPnMappings",
  [
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
    async function g(e) {
      var t = e.flushImmediately,
        n = e.identityChangeHandlingEnabled,
        a = e.learningSource,
        i = e.mappings;
      o("WAWebABProps").getABPropConfigValue(
        "wa_web_history_sync_dynamic_throttling",
      )
        ? await h({
            mappings: i,
            flushImmediately: t,
            identityChangeHandlingEnabled: n,
            learningSource: a,
          })
        : r("WAWebEnvironment").isWindows
          ? await o("WAWebRunInBatches").runInBatches(i, function (e) {
              return y({
                mappings: e,
                flushImmediately: t,
                identityChangeHandlingEnabled: n,
                learningSource: a,
              });
            })
          : await y({
              mappings: i,
              flushImmediately: t,
              identityChangeHandlingEnabled: n,
              learningSource: a,
            });
    }
    async function h(e) {
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
          await y({
            mappings: u,
            flushImmediately: t,
            identityChangeHandlingEnabled: n,
            learningSource: r,
          });
          var d = self.performance.now() - c;
          (f.setLastProcessTime(d, u.length),
            l.delayMs > 0 && (await o("WAAsyncSleep").asyncSleep(l.delayMs)),
            (i += s));
        }
    }
    async function y(t) {
      var n = t.flushImmediately,
        r = t.identityChangeHandlingEnabled,
        a = t.learningSource,
        i = t.mappings,
        l = r != null ? r : !0,
        c = [],
        d = [],
        m = new Map(
          i.map(function (e) {
            return [e.pn, e.lid];
          }),
        ),
        p = o("WATimeUtils").unixTime(),
        _ = o("WATimeUtils").castToUnixTime(0),
        f = [],
        g = new Set();
      (i.forEach(function (t) {
        var r = t.lid,
          i = t.pn,
          s = o("WAWebApiContact").lidPnCache.getCurrentLid(i),
          u = o("WAWebApiContact").lidPnCache.getPhoneNumber(r),
          h = u == null,
          y = !h,
          C = (s == null ? void 0 : s.equals(r)) === !0,
          b = y && !C;
        (u == null ? void 0 : u.equals(i)) === !1 &&
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "createLidPnMappings: LID ",
                  " already mapped to PN ",
                  ", learning conflicting PN ",
                  ", source ",
                  "",
                ])),
              r,
              u,
              i,
              a,
            )
            .sendLogs("lid-pn-mapping-conflict");
        var v, S;
        switch (a) {
          case "usync":
            ((v = !1), (S = h || b));
            break;
          case "peer-pn-message":
          case "peer-lid-message":
            ((v = !1), (S = h));
            break;
          case "recipient-latest-lid":
          case "migration-sync-latest":
          case "migration-sync-old":
          case "blocklist-active":
          case "blocklist-inactive":
            ((v = !1), (S = !C));
            break;
          default:
            ((v = b), (S = h));
        }
        if (S) {
          s != null &&
            l &&
            f.push(
              o("WAWebIdentityChangeApiWorkerCompatible").handleNewIdentity(
                i,
                !n,
              ),
            );
          var R;
          a === "migration-sync-old" || a === "blocklist-inactive"
            ? (R = !0)
            : (R = m.get(i) !== r);
          var L = R ? _ : p;
          (o("WAWebApiContact").warmUpLidPnMapping(r, i, L),
            c.push({ lid: r.toString(), phoneNumber: i.toString() }),
            n
              ? d.push({ lid: r, pn: i, phoneNumberCreatedAt: L })
              : o("WAWebApiContact").lidPnCacheDirtySet.add(r.toString()));
        }
        v && g.add(i);
      }),
        n && o("WAWebApiContact").lidPnCacheDirtySet.size > 0 && v(d));
      var h =
        f.length > 0
          ? Promise.all(f).then(function (e) {
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
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "createLidPnMappings: ",
                    " id change notifs gen, src ",
                    "",
                  ])),
                t,
                a,
              );
            })
          : Promise.resolve();
      g.size !== 0 &&
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "createLidPnMappings: ",
              " contacts requiring usync, source ",
              "",
            ])),
          g.size,
          a,
        ),
        o("WAWebWorkerSafeBackendApi").workerSafeFireAndForget(
          "syncContactListJob",
          { contactIds: Array.from(g), shouldSyncDevice: !1, mode: "query" },
        ));
      var y = [h];
      (d.length > 0 && y.push(S(d)),
        await Promise.all(y),
        c.length > 0 && (await R(c)));
    }
    async function C(e) {
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
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "getPnRowData failed! ",
              "",
            ])),
          r("getErrorSafe")(e).stack,
        );
      }
      return new Map();
    }
    async function b() {
      try {
        var e = [];
        (v(e), await S(e));
      } catch (e) {
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "flushLidPnMappingsToDb failed!",
              ])),
          )
          .sendLogs("Failed to flushLidPnMappingsToDb");
      }
    }
    function v(e) {
      (o("WALogger").LOG(
        m ||
          (m = babelHelpers.taggedTemplateLiteralLoose([
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
          p ||
            (p = babelHelpers.taggedTemplateLiteralLoose([
              "lidPnCacheDirtySet: ",
              " flushed",
            ])),
          o("WAWebApiContact").lidPnCacheDirtySet.size,
        ),
        o("WAWebApiContact").lidPnCacheDirtySet.clear());
    }
    async function S(e) {
      if (e.length !== 0) {
        var t = await C(
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
                    contactHash: o("WAWebApiContact").getContactHash(n.toJid()),
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
          await o("WAWebSchemaContact_DO_NOT_USE_DIRECTLY")
            .getContactTable()
            .bulkCreateOrMerge(n),
          o("WAWebUsernameGatingUtils").usernameDisplayedEnabled() &&
            (await o(
              "WAWebDBContactRemoveSoftDeletedUsernames",
            ).removeSoftDeletedUsernames(
              e.map(function (e) {
                var t = e.lid;
                return t;
              }),
            )));
      }
    }
    async function R(e) {
      await o("WAWebBackendApi").frontendSendAndReceive(
        "bulkUpdatePhoneNumberJids",
        { lidPhoneNumberMappings: e },
      );
    }
    ((l.createLidPnMappingsInBatches = g),
      (l.createLidPnMappings = y),
      (l.flushLidPnMappingsToDb = b));
  },
  98,
);
