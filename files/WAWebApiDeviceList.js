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
      u,
      c = new (o("WALruCache").LruCache)({
        sizeLimit: 5e3,
        getSize: function () {
          return 1;
        },
      });
    function d(e) {
      var t,
        n = o("WAWebDeviceListPk").createDeviceListPK(e);
      if (!c.has(n)) {
        var r = o("WAWebSchemaDeviceList").getDeviceListTable().get(n);
        c.put(n, r);
      }
      return (
        c.get(n) != null &&
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_API_DEVICE_LIST_GET_DEVICE_RECORD,
          ),
        (t = c.get(n)) != null ? t : Promise.resolve(null)
      );
    }
    async function m(e) {
      var t = [];
      if (
        (e.forEach(function (e) {
          c.has(o("WAWebDeviceListPk").createDeviceListPK(e)) ||
            t.push(o("WAWebDeviceListPk").createDeviceListPK(e));
        }),
        t.length > 0)
      ) {
        var n = await o("WAWebSchemaDeviceList")
          .getDeviceListTable()
          .bulkGet(t);
        n.forEach(function (e, n) {
          c.put(t[n], Promise.resolve(e));
        });
      }
      var r = e.filter(function (e) {
        return c.get(o("WAWebDeviceListPk").createDeviceListPK(e)) != null;
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
            return c.get(o("WAWebDeviceListPk").createDeviceListPK(e));
          }),
        )
      );
    }
    function p(t) {
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
    async function _(e) {
      (o("WAWebApiContact").checkPnToLidMapping(
        [o("WAWebWidFactory").createUserWidFromDeviceListPk(e.id)],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_API_DEVICE_LIST_CREATE_OR_REPLACE_DEVICE_RECORD,
      ),
        await o("WAWebSchemaDeviceList")
          .getDeviceListTable()
          .createOrReplace(e),
        c.put(e.id, Promise.resolve(e)),
        p(e));
    }
    async function f(e) {
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
          (c.put(e.id, Promise.resolve(e)), p(e));
        }));
    }
    async function g(e, t) {
      t === void 0 && (t = !1);
      var n = Array.from(await m(e));
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
          l = await m(i);
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
    async function h(e, t) {
      if (t === o("WAJids").DEFAULT_DEVICE_ID) return !0;
      var n = await g([e]),
        r = n[0];
      return !(
        !r ||
        !r.devices.some(function (e) {
          return e.id === t;
        })
      );
    }
    async function y(e) {
      var t = await m(e);
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
    async function C() {
      var e = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
        t = await d(e);
      if (!t || t.deleted) {
        var n = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
          a = await d(n),
          i = t != null,
          l = (t == null ? void 0 : t.deleted) === !0,
          u = a != null,
          c = (a == null ? void 0 : a.deleted) === !0;
        throw (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[syncd] no device list pn=",
                "/",
                " lid=",
                "/",
                "",
              ])),
            i,
            l,
            u,
            c,
          ),
          r("err")("syncd: cannot find my device list")
        );
      }
      return t;
    }
    async function b() {
      var e = self.performance.now(),
        t = await o("WAWebSchemaDeviceList").getDeviceListTable().all();
      return (
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
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
    ((l.getDeviceRecord = d),
      (l.bulkGetDeviceRecord = m),
      (l.createOrReplaceDeviceRecord = _),
      (l.bulkCreateOrReplaceDeviceRecord = f),
      (l.getDeviceIds = g),
      (l.hasDevice = h),
      (l.getDeviceInfoForSync = y),
      (l.getMyDeviceList = C),
      (l.getAllDeviceLists = b));
  },
  98,
);
