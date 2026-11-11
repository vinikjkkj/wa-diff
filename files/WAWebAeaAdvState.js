__d(
  "WAWebAeaAdvState",
  [
    "Promise",
    "WALogger",
    "WAWebAeaAccountState",
    "WAWebAeaAccountStateStore",
    "WAWebAeaRollout",
    "WAWebAeaTelemetry",
    "WAWebAeaThreadStateStore",
    "WAWebApiDeviceList",
    "WAWebLidMigrationUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    function m(e) {
      return e.deletedChangedToHost === !0
        ? o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE
        : e.deleted
          ? null
          : o("WAWebAeaAccountState").aeaAccountStateFromAdv(e.advAccountType);
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.isBot()) return null;
          var t = o("WAWebLidMigrationUtils").toUserLidOrThrow(e),
            r = o("WAWebLidMigrationUtils").toPn(t),
            a = yield (d || (d = n("Promise"))).all(
              (r == null ? [t] : [t, r]).map(function (e) {
                return o("WAWebApiDeviceList").getDeviceRecord(e);
              }),
            ),
            i = a.map(function (e) {
              return e == null ? null : m(e);
            });
          return i.includes(o("WAWebAeaAccountState").AeaAccountState.NON_E2EE)
            ? o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
            : i.includes(o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE)
              ? o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE
              : a.some(function (e) {
                    return e != null && !e.deleted;
                  })
                ? o("WAWebAeaAccountState").AeaAccountState.E2EE
                : null;
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.map(function (e) {
            var t = e.advAccountType,
              n = e.user;
            return {
              user: n,
              advState: o("WAWebAeaAccountState").aeaAccountStateFromAdv(t),
            };
          });
          try {
            yield C(a);
          } catch (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] failed to report ADV observations",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("aea-adv-observations-report-fail");
          }
          if (o("WAWebAeaRollout").isAeaMonitoringEnabled())
            try {
              yield (d || (d = n("Promise"))).all(
                v(a).map(function (e) {
                  var t = e.advState,
                    n = e.user;
                  return o(
                    "WAWebAeaThreadStateStore",
                  ).updateAeaThreadStateFromUnsignedSource(n, t);
                }),
              );
            } catch (e) {
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] failed to record ADV thread states",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("aea-adv-thread-state-fail");
            }
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
          yield C([{ user: e, advState: yield p(e) }]);
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
          if (e.length !== 0) {
            var t = yield o("WAWebAeaAccountStateStore").readAeaStoredAccounts(
                e.map(function (e) {
                  var t = e.user;
                  return t;
                }),
              ),
              n = 0;
            (e.forEach(function (e, r) {
              var a = e.advState,
                i = e.user,
                l = t[r].accountState;
              a == null ||
                l === o("WAWebAeaAccountState").AeaAccountState.NOT_SET ||
                l === a ||
                (n++,
                o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[aea] ADV conflict account=",
                      " attested_state=",
                      " adv_state=",
                      "",
                    ])),
                  i.toLogString(),
                  l,
                  a,
                ),
                o("WAWebAeaTelemetry").reportAeaAdvConflict(a, l));
            }),
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] ADV comparison observations=",
                    " conflicts=",
                    "",
                  ])),
                String(e.length),
                String(n),
              ));
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = e.advState,
            r = e.user;
          if (n != null) {
            var a = o("WAWebLidMigrationUtils").toUserLid(r);
            if (a != null) {
              var i = t.get(a.toString());
              (i == null || S(n) > S(i.advState)) &&
                t.set(a.toString(), { user: a, advState: n });
            }
          }
        }),
        Array.from(t.values())
      );
    }
    function S(e) {
      return e === o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
        ? 2
        : e === o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE
          ? 1
          : 0;
    }
    ((l.aeaStateFromDeviceListRow = m),
      (l.readAeaAdvState = p),
      (l.observeAeaAdvStates = f),
      (l.reportAeaAdvConflictForAccount = h));
  },
  98,
);
