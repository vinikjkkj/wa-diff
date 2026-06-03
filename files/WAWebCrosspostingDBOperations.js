__d(
  "WAWebCrosspostingDBOperations",
  [
    "Promise",
    "WAWebCrossposting.flow",
    "WAWebCrosspostingSchema",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return o("WAWebCrosspostingSchema").getTable().createOrReplace(e);
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebCrosspostingSchema").getTable().get([e, t]);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WAWebCrosspostingSchema")
            .getTable()
            .anyOf(["statusMessageId"], [e]);
          return t.map(function (e) {
            return e.crosspostingStatusUniqueId;
          });
        })),
        m.apply(this, arguments)
      );
    }
    function p(t) {
      var a = t.crosspostingDestination,
        i = t.crosspostingState,
        l = t.directUrlPath,
        s = t.statusMessageId,
        u = t.uniqueId;
      return i === o("WAWebCrossposting.flow").CrosspostingState.SUCCESS
        ? l == null
          ? (e || (e = n("Promise"))).reject(
              r("err")(
                "directUrlPath is required when crosspostingState is CROSSPOSTING_REQUEST_SUCCESS",
              ),
            )
          : o("WAWebCrosspostingSchema")
              .getTable()
              .createOrMerge([s, a], {
                statusMessageId: s,
                crosspostingDestination: a,
                crosspostingStatusUniqueId: u,
                crosspostingState: i,
                directUrlPath: l,
              })
        : o("WAWebCrosspostingSchema")
            .getTable()
            .createOrMerge([s, a], {
              statusMessageId: s,
              crosspostingDestination: a,
              crosspostingStatusUniqueId: u,
              crosspostingState: i,
            });
    }
    function _(e, t, n) {
      return o("WAWebCrosspostingSchema")
        .getTable()
        .createOrMerge([t, n], {
          statusMessageId: t,
          crosspostingDestination: n,
          crosspostingStatusUniqueId: e,
        });
    }
    function f(e) {
      var t = e.crosspostingDestination,
        n = e.directUrlPath,
        r = e.statusMessageId;
      return o("WAWebCrosspostingSchema")
        .getTable()
        .merge([r, t], {
          statusMessageId: r,
          crosspostingDestination: t,
          directUrlPath: n,
        });
    }
    function g(t) {
      var a = t.crosspostingDestination,
        i = t.crosspostingState,
        l = t.directUrlPath,
        s = t.statusMessageId;
      return i === o("WAWebCrossposting.flow").CrosspostingState.SUCCESS
        ? l == null
          ? (e || (e = n("Promise"))).reject(
              r("err")(
                "directUrlPath is required when crosspostingState is CROSSPOSTING_REQUEST_SUCCESS",
              ),
            )
          : o("WAWebCrosspostingSchema")
              .getTable()
              .merge([s, a], {
                statusMessageId: s,
                crosspostingDestination: a,
                crosspostingState: i,
                directUrlPath: l,
              })
        : o("WAWebCrosspostingSchema")
            .getTable()
            .merge([s, a], {
              statusMessageId: s,
              crosspostingDestination: a,
              crosspostingState: i,
            });
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t.length !== 0) {
            for (
              var r = t.map(function (e) {
                  return [e.statusMessageId, e.crosspostingDestination];
                }),
                a = yield o("WAWebCrosspostingSchema").getTable().bulkGet(r),
                i = [],
                l = 0;
              l < t.length;
              l++
            ) {
              var s = t[l],
                u = a[l];
              u == null ||
                u.crosspostingStatusUniqueId !== s.uniqueId ||
                i.push(
                  o("WAWebCrosspostingSchema")
                    .getTable()
                    .merge([s.statusMessageId, s.crosspostingDestination], {
                      statusMessageId: s.statusMessageId,
                      crosspostingDestination: s.crosspostingDestination,
                      crosspostingState: s.crosspostingState,
                    }),
                );
            }
            i.length > 0 && (yield (e || (e = n("Promise"))).all(i));
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return new Map();
          var t = yield o("WAWebCrosspostingSchema")
              .getTable()
              .anyOf(["statusMessageId"], e),
            n = new Map();
          for (var r of t) {
            var a = n.get(r.statusMessageId);
            (a == null && ((a = new Map()), n.set(r.statusMessageId, a)),
              a.set(r.crosspostingDestination, {
                crosspostingState: r.crosspostingState,
              }));
          }
          return n;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield C([e]);
          return (t = n.get(e)) != null ? t : null;
        })),
        S.apply(this, arguments)
      );
    }
    ((l.createOrReplaceCrossposting = s),
      (l.getCrosspostingData = u),
      (l.getCrosspostingUniqueIds = d),
      (l.updateCrosspostingUniqueIdWithState = p),
      (l.updateCrosspostingUniqueId = _),
      (l.updateDirectUrlPath = f),
      (l.updateCrosspostingState = g),
      (l.bulkUpdateCrosspostingState = h),
      (l.getCrosspostingInfoForMessagesBulk = C),
      (l.getCrosspostingInfoForMessage = v));
  },
  98,
);
