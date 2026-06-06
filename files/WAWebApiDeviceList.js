__d(
  "WAWebApiDeviceList",
  [
    "WAJids",
    "WALogger",
    "WALruCache",
    "WAWebApiContact",
    "WAWebDeviceListPk",
    "WAWebSchemaDeviceList",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (o("WALruCache").LruCache)({
        sizeLimit: 5e3,
        getSize: function () {
          return 1;
        },
      });
    function c(e) {
      var t,
        n = o("WAWebDeviceListPk").createDeviceListPK(e);
      if (!u.has(n)) {
        var r = o("WAWebSchemaDeviceList").getDeviceListTable().get(n);
        u.put(n, r);
      }
      return (
        u.get(n) != null &&
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_API_DEVICE_LIST_GET_DEVICE_RECORD,
          ),
        (t = u.get(n)) != null ? t : Promise.resolve(null)
      );
    }
    async function d(e) {
      var t = [];
      if (
        (e.forEach(function (e) {
          u.has(o("WAWebDeviceListPk").createDeviceListPK(e)) ||
            t.push(o("WAWebDeviceListPk").createDeviceListPK(e));
        }),
        t.length > 0)
      ) {
        var n = await o("WAWebSchemaDeviceList")
          .getDeviceListTable()
          .bulkGet(t);
        n.forEach(function (e, n) {
          u.put(t[n], Promise.resolve(e));
        });
      }
      var r = e.filter(function (e) {
        return u.get(o("WAWebDeviceListPk").createDeviceListPK(e)) != null;
      });
      return (
        r.length > 0 &&
          o("WAWebApiContact").checkPnToLidMapping(
            r,
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_API_DEVICE_LIST_BULK_GET_DEVICE_RECORD,
          ),
        Promise.all(
          e.map(function (e) {
            return u.get(o("WAWebDeviceListPk").createDeviceListPK(e));
          }),
        )
      );
    }
    function m(t) {
      if (t.deleted) {
        var n = o("WAWebWidFactory").createUserWidFromDeviceListPk(t.id);
        o("WAWebUserPrefsMeUser").isMeAccount(n) &&
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: trying to delete own device list",
              ])),
          );
      }
    }
    async function p(e) {
      (o("WAWebApiContact").checkPnToLidMapping(
        [o("WAWebWidFactory").createUserWidFromDeviceListPk(e.id)],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_API_DEVICE_LIST_CREATE_OR_REPLACE_DEVICE_RECORD,
      ),
        await o("WAWebSchemaDeviceList")
          .getDeviceListTable()
          .createOrReplace(e),
        u.put(e.id, Promise.resolve(e)),
        m(e));
    }
    async function _(e) {
      (o("WAWebApiContact").checkPnToLidMapping(
        e.map(function (e) {
          return o("WAWebWidFactory").createUserWidFromDeviceListPk(e.id);
        }),
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_API_DEVICE_LIST_BULK_CREATE_OR_REPLACE_DEVICE_RECORD,
      ),
        await o("WAWebSchemaDeviceList")
          .getDeviceListTable()
          .bulkCreateOrReplace(e),
        e.forEach(function (e) {
          (u.put(e.id, Promise.resolve(e)), m(e));
        }));
    }
    async function f(e, t) {
      t === void 0 && (t = !1);
      var n = Array.from(await d(e));
      if (t) {
        var r = new Map();
        n.forEach(function (e) {
          e != null && r.set(e.id, e);
        });
        var a = new Map();
        e.forEach(function (e, t) {
          a.set(e.toString(), t);
        });
        var i = e.reduce(function (e, t) {
            if (!t.isUser()) return e;
            var n = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(t),
            );
            return (n != null && e.push(n), e);
          }, []),
          l = await d(i);
        l.forEach(function (e, t) {
          if (!(!e || e.deleted)) {
            var l = i[t],
              s = o("WAWebApiContact").getAlternateUserWid(
                o("WAWebWidFactory").asUserWidOrThrow(l),
              );
            if (s != null) {
              var u = r.get(o("WAWebDeviceListPk").createDeviceListPK(s));
              if (u) {
                if (!u.deleted) {
                  var c = new Set(
                    u.devices.map(function (e) {
                      return e.id;
                    }),
                  );
                  e.devices.forEach(function (e) {
                    c.has(e.id) || u.devices.push(e);
                  });
                }
              } else {
                var d = a.get(s.toString());
                d != null &&
                  (n[d] = {
                    id: o("WAWebDeviceListPk").createDeviceListPK(s),
                    deleted: e.deleted,
                    devices: e.devices,
                    currentIndex: e.currentIndex,
                    rawId: e.rawId,
                    timestamp: e.timestamp,
                    validIndexes: e.validIndexes,
                  });
              }
            }
          }
        });
      }
      return n.map(function (e) {
        if (e && !e.deleted) {
          var t = e.devices.map(function (e) {
            return { id: e.id, isHosted: e.isHosted };
          });
          return { id: e.id, devices: t };
        }
        return null;
      });
    }
    async function g(e, t) {
      if (t === o("WAJids").DEFAULT_DEVICE_ID) return !0;
      var n = await f([e]),
        r = n[0];
      return !(
        !r ||
        !r.devices.some(function (e) {
          return e.id === t;
        })
      );
    }
    async function h(e) {
      var t = await d(e);
      return t.map(function (e) {
        if (e && !e.deleted) {
          var t = e.devices.map(function (e) {
            return { id: e.id, isHosted: e.isHosted };
          });
          return {
            id: e.id,
            devices: t,
            timestamp: e.timestamp,
            expectedTs: e.expectedTs,
          };
        }
        return null;
      });
    }
    async function y() {
      var e = o("WAWebUserPrefsMeUser").getMeDeviceOrThrow(),
        t = await c(e);
      if ((t == null || t.deleted) && e.isLid()) {
        var n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
        n != null && (t = await c(n));
      }
      if (t == null || t.deleted)
        throw r("err")("syncd: cannot find my device list");
      return t;
    }
    async function C() {
      var e = self.performance.now(),
        t = await o("WAWebSchemaDeviceList").getDeviceListTable().all();
      return (
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "getAllDeviceLists: got ",
              " devices, took ",
              "ms",
            ])),
          t.length,
          Math.round(self.performance.now() - e),
        ),
        t
      );
    }
    ((l.getDeviceRecord = c),
      (l.bulkGetDeviceRecord = d),
      (l.createOrReplaceDeviceRecord = p),
      (l.bulkCreateOrReplaceDeviceRecord = _),
      (l.getDeviceIds = f),
      (l.hasDevice = g),
      (l.getDeviceInfoForSync = h),
      (l.getMyDeviceList = y),
      (l.getAllDeviceLists = C));
  },
  98,
);
