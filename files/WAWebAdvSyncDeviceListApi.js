__d(
  "WAWebAdvSyncDeviceListApi",
  [
    "WALogger",
    "WAWebAdvHandlerApi",
    "WAWebApiContact",
    "WAWebApiDeviceList",
    "WAWebContactSyncErrorCodes",
    "WAWebContactSyncLogger",
    "WAWebContactSyncUtils",
    "WAWebDeviceListPk",
    "WAWebGetIdentityKeysJob",
    "WAWebIdentityFunction",
    "WAWebPhashUtils",
    "WAWebUserUtils",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = new Map();
    async function d(e) {
      var t = e.context,
        n = e.phash,
        r = e.wids;
      if (n != null) {
        var a = await o("WAWebApiDeviceList").getDeviceIds(r),
          i = a.map(function (e) {
            return e == null
              ? []
              : e.devices.map(function (t) {
                  return o("WAWebWidFactory").createDeviceWidFromDeviceListPk(
                    e.id,
                    t.id,
                    t.isHosted,
                  );
                });
          }),
          l = i.flatMap(o("WAWebIdentityFunction").identityFunction),
          s = await o("WAWebPhashUtils").phashV2(l);
        if (n === s) return;
      }
      var u = new Set(),
        d = [];
      if (
        (r.forEach(function (e) {
          var t = c.get(o("WAWebDeviceListPk").createDeviceListPK(e));
          t ? u.add(t) : d.push(e);
        }),
        d.length === 0)
      ) {
        await Promise.all(Array.from(u));
        return;
      }
      var p = m(d, t);
      (d.map(function (e) {
        c.set(o("WAWebDeviceListPk").createDeviceListPK(e), p);
      }),
        await Promise.all([p].concat(Array.from(u))));
    }
    async function m(t, n) {
      try {
        var r = await o("WAWebApiDeviceList").getDeviceInfoForSync(t),
          a = r.map(function (e) {
            return e == null
              ? []
              : e.devices.map(function (t) {
                  return o("WAWebWidFactory").createDeviceWidFromDeviceListPk(
                    e.id,
                    t.id,
                    t.isHosted,
                  );
                });
          }),
          i = await Promise.all(
            a.map(function (e) {
              return e.length === 0 ? "" : o("WAWebPhashUtils").phashV2(e);
            }),
          ),
          l = t.map(function (e, t) {
            var n, o;
            return {
              id: e,
              hash: i[t],
              ts: (n = r[t]) == null ? void 0 : n.timestamp,
              expectedTs: (o = r[t]) == null ? void 0 : o.expectedTs,
            };
          });
        return f(l, n);
      } catch (t) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Failed to sync device list with error: ",
              "",
            ])),
          t,
        );
      } finally {
        t.map(function (e) {
          c.delete(o("WAWebDeviceListPk").createDeviceListPK(e));
        });
      }
    }
    async function p() {
      await d({
        wids: o("WAWebUserUtils").getMeDeviceWids(),
        context: null,
        phash: null,
      });
    }
    async function _(e) {
      return (
        await d({ wids: e, context: null, phash: null }),
        o("WAWebApiDeviceList").getDeviceIds(e)
      );
    }
    async function f(e, t) {
      if (e.length !== 0) {
        var n = e.map(function (e) {
            return e.id;
          }),
          a = o("WAWebContactSyncUtils").getDeviceSyncBackfillPnWids(n);
        o("WAWebApiContact").checkPnToLidMapping(
          n,
          o("WAWebApiContact").CheckPnToLidMappingCaller
            .WAWEB_ADV_SYNC_DEVICE_LIST_SEND_DEVICE_SYNC_REQUEST,
        );
        var i = new (o("WAWebUsync").USyncQuery)()
          .withContext(t || "interactive")
          .withDeviceProtocol();
        e.forEach(function (e) {
          e.id.user !== "0" &&
            i.withUser(
              new (o("WAWebUsyncUser").USyncUser)()
                .withId(e.id)
                .withDeviceHash(String(e.hash))
                .withTs(e.ts)
                .withExpectedTs(e.expectedTs),
            );
        });
        var l = o(
            "WAWebContactSyncLogger",
          ).contactSyncLogger.createEventContext({
            syncType: o("WAWebContactSyncLogger").getSyncTypeString(
              t || "interactive",
              "query",
            ),
            requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
              .DEVICE_REQUEST,
            requestedCount: e.length,
            protocols: i.protocols,
          }),
          c = await o(
            "WAWebContactSyncLogger",
          ).contactSyncLogger.executeWithLogging(
            l,
            function () {
              return i.execute();
            },
            o("WAWebContactSyncErrorCodes").DEVICE_SYNC,
          ),
          d = c.error.all;
        if (d)
          throw (
            o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
              l,
              d.errorCode,
              c,
              o("WAWebContactSyncErrorCodes").DEVICE_SYNC,
            ),
            r("err")(
              "syncDeviceList: error " + d.errorCode + ": " + d.errorText,
            )
          );
        c.error.devices &&
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "syncDeviceList: error ",
                ": ",
                "",
              ])),
            c.error.devices.errorCode,
            c.error.devices.errorText,
          );
        var m = c.list.filter(function (e) {
          return !("errorCode" in e.devices);
        });
        ((m = m.map(function (e) {
          return { wid: e.id, devices: e.devices };
        })),
          (m = o("WAWebContactSyncUtils").backfillMissingDeviceSyncEntries(
            a,
            m,
          )));
        var p = m
            .filter(function (e) {
              var t;
              return (t = e.devices.keyIndex) == null
                ? void 0
                : t.signedKeyIndexBytes;
            })
            .map(function (e) {
              return e.wid;
            }),
          _ = c.list.length - p.length,
          f = p
            .map(function (e) {
              return e.toString();
            })
            .join(",");
        return (
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[syncDeviceList] skip ",
                "/",
                " users=",
                "",
              ])),
            _,
            c.list.length,
            f,
          ),
          await o("WAWebGetIdentityKeysJob").getAndStoreIdentityKeys(p),
          o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(
            l,
            c,
            o("WAWebContactSyncLogger").createUpdateCounterWith({
              deviceChange: m.length,
            }),
          ),
          o("WAWebAdvHandlerApi").handleADVDeviceSyncResult(m)
        );
      }
    }
    ((l.syncDeviceList = d),
      (l.syncMyDeviceList = p),
      (l.syncAndGetDeviceList = _));
  },
  98,
);
