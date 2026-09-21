__d(
  "WAWebAdvSyncDeviceListApi",
  [
    "Promise",
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
    "WAWebUserPrefsMeUser",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = new Map();
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.context,
            r = e.phash,
            a = e.wids;
          if (r != null) {
            var i = yield o("WAWebApiDeviceList").getDeviceIds(a),
              l = i.map(function (e) {
                return e == null
                  ? []
                  : e.devices.map(function (t) {
                      return o(
                        "WAWebWidFactory",
                      ).createDeviceWidFromDeviceListPk(e.id, t.id, t.isHosted);
                    });
              }),
              s = l.flatMap(o("WAWebIdentityFunction").identityFunction),
              u = yield o("WAWebPhashUtils").phashV2(s);
            if (r === u) return;
          }
          var m = new Set(),
            p = [];
          if (
            (a.forEach(function (e) {
              var t = d.get(o("WAWebDeviceListPk").createDeviceListPK(e));
              t ? m.add(t) : p.push(e);
            }),
            p.length === 0)
          ) {
            yield (c || (c = n("Promise"))).all(Array.from(m));
            return;
          }
          var f = _(p, t);
          (p.map(function (e) {
            d.set(o("WAWebDeviceListPk").createDeviceListPK(e), f);
          }),
            yield (c || (c = n("Promise"))).all([f].concat(Array.from(m))));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          try {
            var a = yield o("WAWebApiDeviceList").getDeviceInfoForSync(t),
              i = a.map(function (e) {
                return e == null
                  ? []
                  : e.devices.map(function (t) {
                      return o(
                        "WAWebWidFactory",
                      ).createDeviceWidFromDeviceListPk(e.id, t.id, t.isHosted);
                    });
              }),
              l = yield (c || (c = n("Promise"))).all(
                i.map(function (e) {
                  return e.length === 0 ? "" : o("WAWebPhashUtils").phashV2(e);
                }),
              ),
              s = t.map(function (e, t) {
                var n, r;
                return {
                  id: e,
                  hash: l[t],
                  ts: (n = a[t]) == null ? void 0 : n.timestamp,
                  expectedTs: (r = a[t]) == null ? void 0 : r.expectedTs,
                };
              });
            return b(s, r);
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
              d.delete(o("WAWebDeviceListPk").createDeviceListPK(e));
            });
          }
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield m({
            wids: o("WAWebUserPrefsMeUser").getMeDeviceWids(),
            context: null,
            phash: null,
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
          return (
            yield m({ wids: e, context: null, phash: null }),
            o("WAWebApiDeviceList").getDeviceIds(e)
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
              c = yield o(
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
              yield o("WAWebGetIdentityKeysJob").getAndStoreIdentityKeys(p),
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
        })),
        v.apply(this, arguments)
      );
    }
    ((l.syncDeviceList = m),
      (l.syncMyDeviceList = g),
      (l.syncAndGetDeviceList = y));
  },
  98,
);
