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
    "gkx",
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
      }),
      d = new (o("WALruCache").LruCache)({
        sizeLimit: 5e3,
        getSize: function () {
          return 1;
        },
      }),
      m = new Map();
    function p(e) {
      if (d.has(e)) return (u || (u = n("Promise"))).resolve(d.get(e));
      var t = m.get(e);
      if (t != null) return t;
      var r = o("WAWebSchemaDeviceList")
        .getDeviceListTable()
        .get(e)
        .then(function (t) {
          return (m.get(e) === r && d.put(e, t), t);
        })
        .finally(function () {
          m.get(e) === r && m.delete(e);
        });
      return (m.set(e, r), r);
    }
    function _(e) {
      var t;
      return (
        c.has(e) ||
          c.put(e, o("WAWebSchemaDeviceList").getDeviceListTable().get(e)),
        (t = c.get(e)) != null ? t : (u || (u = n("Promise"))).resolve(null)
      );
    }
    function f(e) {
      var t = o("WAWebDeviceListPk").createDeviceListPK(e),
        n = r("gkx")("16550") ? p(t) : _(t);
      return (
        o("WAWebApiContact").checkPnToLidMapping(
          [e],
          o("WAWebApiContact").CheckPnToLidMappingCaller
            .WAWEB_API_DEVICE_LIST_GET_DEVICE_RECORD,
        ),
        n
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = Array.from(
            new Set(
              e.filter(function (e) {
                return !d.has(e) && !m.has(e);
              }),
            ),
          );
          if (t.length > 0) {
            var r = o("WAWebSchemaDeviceList").getDeviceListTable().bulkGet(t);
            t.forEach(function (e, t) {
              var n = r
                .then(function (r) {
                  var o = r[t];
                  return (m.get(e) === n && d.put(e, o), o);
                })
                .finally(function () {
                  m.get(e) === n && m.delete(e);
                });
              m.set(e, n);
            });
          }
          return (u || (u = n("Promise"))).all(
            e.map(function (e) {
              var t;
              return d.has(e) ? d.get(e) : (t = m.get(e)) != null ? t : null;
            }),
          );
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
          var t = e.filter(function (e) {
            return !c.has(e);
          });
          if (t.length > 0) {
            var r = yield o("WAWebSchemaDeviceList")
              .getDeviceListTable()
              .bulkGet(t);
            r.forEach(function (e, r) {
              c.put(t[r], (u || (u = n("Promise"))).resolve(e));
            });
          }
          return (u || (u = n("Promise"))).all(
            e.map(function (e) {
              return c.get(e);
            }),
          );
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.map(o("WAWebDeviceListPk").createDeviceListPK),
            n = r("gkx")("16550") ? yield g(t) : yield y(t);
          return (
            e.length > 0 &&
              o("WAWebApiContact").checkPnToLidMapping(
                e,
                o("WAWebApiContact").CheckPnToLidMappingCaller
                  .WAWEB_API_DEVICE_LIST_BULK_GET_DEVICE_RECORD,
              ),
            n
          );
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      r("gkx")("16550")
        ? (m.delete(e.id), d.put(e.id, e))
        : c.put(e.id, (u || (u = n("Promise"))).resolve(e));
    }
    function R(t) {
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
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WAWebApiContact").checkPnToLidMapping(
            [o("WAWebWidFactory").createUserWidFromDeviceListPk(e.id)],
            o("WAWebApiContact").CheckPnToLidMappingCaller
              .WAWEB_API_DEVICE_LIST_CREATE_OR_REPLACE_DEVICE_RECORD,
          ),
            yield o("WAWebSchemaDeviceList")
              .getDeviceListTable()
              .createOrReplace(e),
            S(e),
            R(e));
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
              (S(e), R(e));
            }));
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          t === void 0 && (t = !1);
          var n = Array.from(yield b(e));
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
              l = yield b(i);
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
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (t === o("WAJids").DEFAULT_DEVICE_ID) return !0;
          var n = yield T([e]),
            r = n[0];
          return !(
            !r ||
            !r.devices.some(function (e) {
              return e.id === t;
            })
          );
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield b(e);
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
        N.apply(this, arguments)
      );
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebUserPrefsMeUser").getMeDeviceOrThrow(),
            t = yield f(e);
          if ((t == null || t.deleted) && e.isLid()) {
            var n = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn();
            n != null && (t = yield f(n));
          }
          if (t == null || t.deleted)
            throw r("err")("syncd: cannot find my device list");
          return t;
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        F.apply(this, arguments)
      );
    }
    ((l.getDeviceRecord = f),
      (l.bulkGetDeviceRecord = b),
      (l.createOrReplaceDeviceRecord = L),
      (l.bulkCreateOrReplaceDeviceRecord = k),
      (l.getDeviceIds = T),
      (l.hasDevice = x),
      (l.getDeviceInfoForSync = P),
      (l.getMyDeviceList = M),
      (l.getAllDeviceLists = A));
  },
  98,
);
