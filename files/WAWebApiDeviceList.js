__d(
  "WAWebApiDeviceList",
  [
    "Promise",
    "WAJids",
    "WALogger",
    "WALruCache",
    "WAWebApiContact",
    "WAWebDeviceListPk",
    "WAWebSchemaDeviceList",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
        r = o("WAWebDeviceListPk").createDeviceListPK(e);
      if (!c.has(r)) {
        var a = o("WAWebSchemaDeviceList").getDeviceListTable().get(r);
        c.put(r, a);
      }
      return (
        c.get(r) != null &&
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_API_DEVICE_LIST_GET_DEVICE_RECORD,
          ),
        (t = c.get(r)) != null ? t : (u || (u = n("Promise"))).resolve(null)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          if (
            (e.forEach(function (e) {
              c.has(o("WAWebDeviceListPk").createDeviceListPK(e)) ||
                t.push(o("WAWebDeviceListPk").createDeviceListPK(e));
            }),
            t.length > 0)
          ) {
            var r = yield o("WAWebSchemaDeviceList")
              .getDeviceListTable()
              .bulkGet(t);
            r.forEach(function (e, r) {
              c.put(t[r], (u || (u = n("Promise"))).resolve(e));
            });
          }
          var a = e.filter(function (e) {
            return c.get(o("WAWebDeviceListPk").createDeviceListPK(e)) != null;
          });
          return (
            a.length > 0 &&
              o("WAWebApiContact").checkPnToLidMapping(
                a,
                o("WAWebApiContact").CheckPnToLidMappingCaller
                  .WAWEB_API_DEVICE_LIST_BULK_GET_DEVICE_RECORD,
              ),
            (u || (u = n("Promise"))).all(
              e.map(function (e) {
                return c.get(o("WAWebDeviceListPk").createDeviceListPK(e));
              }),
            )
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(t) {
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
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebApiContact").checkPnToLidMapping(
            [o("WAWebWidFactory").createUserWidFromDeviceListPk(e.id)],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_API_DEVICE_LIST_CREATE_OR_REPLACE_DEVICE_RECORD,
          ),
            yield o("WAWebSchemaDeviceList")
              .getDeviceListTable()
              .createOrReplace(e),
            c.put(e.id, (u || (u = n("Promise"))).resolve(e)),
            _(e));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebApiContact").checkPnToLidMapping(
            e.map(function (e) {
              return o("WAWebWidFactory").createUserWidFromDeviceListPk(e.id);
            }),
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_API_DEVICE_LIST_BULK_CREATE_OR_REPLACE_DEVICE_RECORD,
          ),
            yield o("WAWebSchemaDeviceList")
              .getDeviceListTable()
              .bulkCreateOrReplace(e),
            e.forEach(function (e) {
              (c.put(e.id, (u || (u = n("Promise"))).resolve(e)), _(e));
            }));
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = !1);
          var n = Array.from(yield m(e));
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
              l = yield m(i);
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
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t === o("WAJids").DEFAULT_DEVICE_ID) return !0;
          var n = yield C([e]),
            r = n[0];
          return !(
            !r ||
            !r.devices.some(function (e) {
              return e.id === t;
            })
          );
        })),
        S.apply(this, arguments)
      );
    }
    function R(e) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield m(e);
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
        })),
        L.apply(this, arguments)
      );
    }
    function E() {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMeDeviceOrThrow(),
            t = yield d(e);
          if ((t == null || t.deleted) && e.isLid()) {
            var n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
            n != null && (t = yield d(n));
          }
          if (t == null || t.deleted)
            throw r("err")("syncd: cannot find my device list");
          return t;
        })),
        k.apply(this, arguments)
      );
    }
    function I() {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = self.performance.now(),
            t = yield o("WAWebSchemaDeviceList").getDeviceListTable().all();
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
        })),
        T.apply(this, arguments)
      );
    }
    ((l.getDeviceRecord = d),
      (l.bulkGetDeviceRecord = m),
      (l.createOrReplaceDeviceRecord = f),
      (l.bulkCreateOrReplaceDeviceRecord = h),
      (l.getDeviceIds = C),
      (l.hasDevice = v),
      (l.getDeviceInfoForSync = R),
      (l.getMyDeviceList = E),
      (l.getAllDeviceLists = I));
  },
  98,
);
