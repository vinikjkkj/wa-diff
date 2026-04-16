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
    "WAWebPhashUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUsync",
    "WAWebUsyncUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "lodash",
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
            a = e.phash,
            i = e.wids;
          if (a != null) {
            var l = yield o("WAWebApiDeviceList").getDeviceIds(i),
              s = l.map(function (e) {
                return e == null
                  ? []
                  : e.devices.map(function (t) {
                      return o(
                        "WAWebWidFactory",
                      ).createDeviceWidFromDeviceListPk(e.id, t.id, t.isHosted);
                    });
              }),
              u = r("lodash").flatMap(s, function (e) {
                return e;
              }),
              m = yield o("WAWebPhashUtils").phashV2(u);
            if (a === m) return;
          }
          var p = new Set(),
            f = [];
          if (
            (i.forEach(function (e) {
              var t = d.get(o("WAWebDeviceListPk").createDeviceListPK(e));
              t ? p.add(t) : f.push(e);
            }),
            f.length === 0)
          ) {
            yield (c || (c = n("Promise"))).all(Array.from(p));
            return;
          }
          var g = _(f, t);
          (f.map(function (e) {
            d.set(o("WAWebDeviceListPk").createDeviceListPK(e), g);
          }),
            yield (c || (c = n("Promise"))).all([g].concat(Array.from(p))));
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
            wids: o("WAWebUserPrefsMeUser").getMePNandLIDWids(),
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
            });
            o("WAWebApiContact").checkPnToLidMapping(
              n,
              o("WAWebApiContact").CheckPnToLidMappingCaller
                .WAWEB_ADV_SYNC_DEVICE_LIST_SEND_DEVICE_SYNC_REQUEST,
            );
            var a = new (o("WAWebUsync").USyncQuery)()
              .withContext(t || "interactive")
              .withDeviceProtocol();
            e.forEach(function (e) {
              e.id.user !== "0" &&
                a.withUser(
                  new (o("WAWebUsyncUser").USyncUser)()
                    .withId(e.id)
                    .withDeviceHash(String(e.hash))
                    .withTs(e.ts)
                    .withExpectedTs(e.expectedTs),
                );
            });
            var i = o(
                "WAWebContactSyncLogger",
              ).contactSyncLogger.createEventContext({
                syncType: o("WAWebContactSyncLogger").getSyncTypeString(
                  t || "interactive",
                  "query",
                ),
                requestOrigin: o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN
                  .DEVICE_REQUEST,
                requestedCount: e.length,
                protocols: a.protocols,
              }),
              l = yield o(
                "WAWebContactSyncLogger",
              ).contactSyncLogger.executeWithLogging(
                i,
                function () {
                  return a.execute();
                },
                o("WAWebContactSyncErrorCodes").DEVICE_SYNC,
              ),
              c = l.error.all;
            if (c)
              throw (
                o("WAWebContactSyncLogger").contactSyncLogger.logFailure(
                  i,
                  c.errorCode,
                  l,
                  o("WAWebContactSyncErrorCodes").DEVICE_SYNC,
                ),
                r("err")(
                  "syncDeviceList: error " + c.errorCode + ": " + c.errorText,
                )
              );
            l.error.devices &&
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "syncDeviceList: error ",
                    ": ",
                    "",
                  ])),
                l.error.devices.errorCode,
                l.error.devices.errorText,
              );
            var d = l.list.filter(function (e) {
              return !("errorCode" in e.devices);
            });
            d = d.map(function (e) {
              return { wid: e.id, devices: e.devices };
            });
            var m = n.filter(function (e) {
              return e.isRegularUserPn();
            });
            d = o("WAWebContactSyncUtils").backfillMissingDeviceSyncEntries(
              m,
              d,
            );
            var p = d
                .filter(function (e) {
                  var t;
                  return (t = e.devices.keyIndex) == null
                    ? void 0
                    : t.signedKeyIndexBytes;
                })
                .map(function (e) {
                  return e.wid;
                }),
              _ = l.list.length - p.length,
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
                l.list.length,
                f,
              ),
              yield o("WAWebGetIdentityKeysJob").getAndStoreIdentityKeys(p),
              o("WAWebContactSyncLogger").contactSyncLogger.logSuccess(
                i,
                l,
                o("WAWebContactSyncLogger").createUpdateCounterWith({
                  deviceChange: d.length,
                }),
              ),
              o("WAWebAdvHandlerApi").handleADVDeviceSyncResult(d)
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
