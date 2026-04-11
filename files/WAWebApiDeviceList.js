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
      c,
      d = new (o("WALruCache").LruCache)({
        sizeLimit: 5e3,
        getSize: function () {
          return 1;
        },
      });
    function m(e) {
      var t,
        r = o("WAWebDeviceListPk").createDeviceListPK(e);
      if (!d.has(r)) {
        var a = o("WAWebSchemaDeviceList").getDeviceListTable().get(r);
        d.put(r, a);
      }
      return (
        d.get(r) != null &&
          o("WAWebApiContact").checkPnToLidMapping(
            [e],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_API_DEVICE_LIST_GET_DEVICE_RECORD,
          ),
        (t = d.get(r)) != null ? t : (c || (c = n("Promise"))).resolve(null)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = [];
          if (
            (e.forEach(function (e) {
              d.has(o("WAWebDeviceListPk").createDeviceListPK(e)) ||
                t.push(o("WAWebDeviceListPk").createDeviceListPK(e));
            }),
            t.length > 0)
          ) {
            var r = yield o("WAWebSchemaDeviceList")
              .getDeviceListTable()
              .bulkGet(t);
            r.forEach(function (e, r) {
              d.put(t[r], (c || (c = n("Promise"))).resolve(e));
            });
          }
          var a = e.filter(function (e) {
            return d.get(o("WAWebDeviceListPk").createDeviceListPK(e)) != null;
          });
          return (
            a.length > 0 &&
              o("WAWebApiContact").checkPnToLidMapping(
                a,
                o("WAWebApiContact").CheckPnToLidMappingCaller
                  .WAWEB_API_DEVICE_LIST_BULK_GET_DEVICE_RECORD,
              ),
            (c || (c = n("Promise"))).all(
              e.map(function (e) {
                return d.get(o("WAWebDeviceListPk").createDeviceListPK(e));
              }),
            )
          );
        })),
        _.apply(this, arguments)
      );
    }
    function f(t) {
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
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebApiContact").checkPnToLidMapping(
            [o("WAWebWidFactory").createUserWidFromDeviceListPk(e.id)],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_API_DEVICE_LIST_CREATE_OR_REPLACE_DEVICE_RECORD,
          ),
            yield o("WAWebSchemaDeviceList")
              .getDeviceListTable()
              .createOrReplace(e),
            d.put(e.id, (c || (c = n("Promise"))).resolve(e)),
            f(e));
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
              (d.put(e.id, (c || (c = n("Promise"))).resolve(e)), f(e));
            }));
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
          t === void 0 && (t = !1);
          var n = Array.from(yield p(e));
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
              l = yield p(i);
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
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t === o("WAJids").DEFAULT_DEVICE_ID) return !0;
          var n = yield b([e]),
            r = n[0];
          return !(
            !r ||
            !r.devices.some(function (e) {
              return e.id === t;
            })
          );
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield p(e);
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
        E.apply(this, arguments)
      );
    }
    function k() {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE(),
            t = yield m(e);
          if (!t || t.deleted) {
            var n = o("WAWebUserPrefsMeUser").getMeDeviceLidOrThrow(),
              a = yield m(n),
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
        })),
        I.apply(this, arguments)
      );
    }
    function T() {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = self.performance.now(),
            t = yield o("WAWebSchemaDeviceList").getDeviceListTable().all();
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
        })),
        D.apply(this, arguments)
      );
    }
    ((l.getDeviceRecord = m),
      (l.bulkGetDeviceRecord = p),
      (l.createOrReplaceDeviceRecord = g),
      (l.bulkCreateOrReplaceDeviceRecord = y),
      (l.getDeviceIds = b),
      (l.hasDevice = S),
      (l.getDeviceInfoForSync = L),
      (l.getMyDeviceList = k),
      (l.getAllDeviceLists = T));
  },
  98,
);
