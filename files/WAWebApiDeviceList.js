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
    "WAWebUserUtils",
    "WAWebWidFactory",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new (o("WALruCache").LruCache)({
        sizeLimit: 5e3,
        getSize: function () {
          return 1;
        },
      }),
      c = new (o("WALruCache").LruCache)({
        sizeLimit: 5e3,
        getSize: function () {
          return 1;
        },
      }),
      d = new Map();
    function m(e) {
      if (c.has(e)) return Promise.resolve(c.get(e));
      var t = d.get(e);
      if (t != null) return t;
      var n = o("WAWebSchemaDeviceList")
        .getDeviceListTable()
        .get(e)
        .then(function (t) {
          return (d.get(e) === n && c.put(e, t), t);
        })
        .finally(function () {
          d.get(e) === n && d.delete(e);
        });
      return (d.set(e, n), n);
    }
    function p(e) {
      var t;
      return (
        u.has(e) ||
          u.put(e, o("WAWebSchemaDeviceList").getDeviceListTable().get(e)),
        (t = u.get(e)) != null ? t : Promise.resolve(null)
      );
    }
    function _(e) {
      var t = o("WAWebDeviceListPk").createDeviceListPK(e),
        n = r("gkx")("16550") ? m(t) : p(t);
      return (
        o("WAWebApiContact").checkPnToLidMapping(
          [e],
          o("WAWebApiContact").CheckPnToLidMappingCaller
            .WAWEB_API_DEVICE_LIST_GET_DEVICE_RECORD,
        ),
        n
      );
    }
    async function f(e) {
      var t = Array.from(
        new Set(
          e.filter(function (e) {
            return !c.has(e) && !d.has(e);
          }),
        ),
      );
      if (t.length > 0) {
        var n = o("WAWebSchemaDeviceList").getDeviceListTable().bulkGet(t);
        t.forEach(function (e, t) {
          var r = n
            .then(function (n) {
              var o = n[t];
              return (d.get(e) === r && c.put(e, o), o);
            })
            .finally(function () {
              d.get(e) === r && d.delete(e);
            });
          d.set(e, r);
        });
      }
      return Promise.all(
        e.map(function (e) {
          var t;
          return c.has(e) ? c.get(e) : (t = d.get(e)) != null ? t : null;
        }),
      );
    }
    async function g(e) {
      var t = e.filter(function (e) {
        return !u.has(e);
      });
      if (t.length > 0) {
        var n = await o("WAWebSchemaDeviceList")
          .getDeviceListTable()
          .bulkGet(t);
        n.forEach(function (e, n) {
          u.put(t[n], Promise.resolve(e));
        });
      }
      return Promise.all(
        e.map(function (e) {
          return u.get(e);
        }),
      );
    }
    async function h(e) {
      var t = e.map(o("WAWebDeviceListPk").createDeviceListPK),
        n = r("gkx")("16550") ? await f(t) : await g(t);
      return (
        e.length > 0 &&
          o("WAWebApiContact").checkPnToLidMapping(
            e,
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_API_DEVICE_LIST_BULK_GET_DEVICE_RECORD,
          ),
        n
      );
    }
    function y(e) {
      r("gkx")("16550")
        ? (d.delete(e.id), c.put(e.id, e))
        : u.put(e.id, Promise.resolve(e));
    }
    function C(t) {
      if (t.deleted) {
        var n = o("WAWebWidFactory").createUserWidFromDeviceListPk(t.id);
        o("WAWebUserUtils").isMeAccount(n) &&
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "syncd: trying to delete own device list",
              ])),
          );
      }
    }
    async function b(e) {
      (o("WAWebApiContact").checkPnToLidMapping(
        [o("WAWebWidFactory").createUserWidFromDeviceListPk(e.id)],
        o("WAWebApiContact").CheckPnToLidMappingCaller
          .WAWEB_API_DEVICE_LIST_CREATE_OR_REPLACE_DEVICE_RECORD,
      ),
        await o("WAWebSchemaDeviceList")
          .getDeviceListTable()
          .createOrReplace(e),
        y(e),
        C(e));
    }
    async function v(e) {
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
          (y(e), C(e));
        }));
    }
    async function S(e, t) {
      t === void 0 && (t = !1);
      var n = Array.from(await h(e));
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
          l = await h(i);
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
    async function R(e, t) {
      if (t === o("WAJids").DEFAULT_DEVICE_ID) return !0;
      var n = await S([e]),
        r = n[0];
      return !(
        !r ||
        !r.devices.some(function (e) {
          return e.id === t;
        })
      );
    }
    async function L(e) {
      var t = await h(e);
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
    async function E() {
      var e = o("WAWebUserUtils").getMeDeviceOrThrow(),
        t = await _(e);
      if ((t == null || t.deleted) && e.isLid()) {
        var n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
        n != null && (t = await _(n));
      }
      return t == null || t.deleted ? null : t;
    }
    async function k() {
      var e = await E();
      if (e == null) throw r("err")("syncd: cannot find my device list");
      return e;
    }
    async function I() {
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
    ((l.getDeviceRecord = _),
      (l.bulkGetDeviceRecord = h),
      (l.createOrReplaceDeviceRecord = b),
      (l.bulkCreateOrReplaceDeviceRecord = v),
      (l.getDeviceIds = S),
      (l.hasDevice = R),
      (l.getDeviceInfoForSync = L),
      (l.getMaybeMyDeviceList = E),
      (l.getMyDeviceList = k),
      (l.getAllDeviceLists = I));
  },
  98,
);
