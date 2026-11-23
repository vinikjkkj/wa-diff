__d(
  "WAWebAeaAdvState",
  [
    "WALogger",
    "WAWebAeaAccountState",
    "WAWebAeaAccountStateStore",
    "WAWebAeaRollout",
    "WAWebAeaTelemetry",
    "WAWebAeaThreadStateStore",
    "WAWebApiDeviceList",
    "WAWebLidMigrationUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    function d(e) {
      return e.deletedChangedToHost === !0
        ? o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE
        : e.deleted
          ? null
          : o("WAWebAeaAccountState").aeaAccountStateFromAdv(e.advAccountType);
    }
    async function m(e) {
      if (e.isBot()) return null;
      var t = o("WAWebLidMigrationUtils").toUserLidOrThrow(e),
        n = o("WAWebLidMigrationUtils").toPn(t),
        r = await Promise.all(
          (n == null ? [t] : [t, n]).map(function (e) {
            return o("WAWebApiDeviceList").getDeviceRecord(e);
          }),
        ),
        a = r.map(function (e) {
          return e == null ? null : d(e);
        });
      return a.includes(o("WAWebAeaAccountState").AeaAccountState.NON_E2EE)
        ? o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
        : a.includes(o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE)
          ? o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE
          : r.some(function (e) {
                return e != null && !e.deleted;
              })
            ? o("WAWebAeaAccountState").AeaAccountState.E2EE
            : null;
    }
    async function p(t) {
      var n = t.map(function (e) {
        var t = e.advAccountType,
          n = e.user;
        return {
          user: n,
          advState: o("WAWebAeaAccountState").aeaAccountStateFromAdv(t),
        };
      });
      try {
        await f(n);
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
          await Promise.all(
            g(n).map(function (e) {
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
    }
    async function _(e) {
      await f([{ user: e, advState: await m(e) }]);
    }
    async function f(e) {
      if (e.length !== 0) {
        var t = await o("WAWebAeaAccountStateStore").readAeaStoredAccounts(
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
    }
    function g(e) {
      var t = new Map();
      return (
        e.forEach(function (e) {
          var n = e.advState,
            r = e.user;
          if (n != null) {
            var a = o("WAWebLidMigrationUtils").toUserLid(r);
            if (a != null) {
              var i = t.get(a.toString());
              (i == null || h(n) > h(i.advState)) &&
                t.set(a.toString(), { user: a, advState: n });
            }
          }
        }),
        Array.from(t.values())
      );
    }
    function h(e) {
      return e === o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
        ? 2
        : e === o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE
          ? 1
          : 0;
    }
    ((l.aeaStateFromDeviceListRow = d),
      (l.readAeaAdvState = m),
      (l.observeAeaAdvStates = p),
      (l.reportAeaAdvConflictForAccount = _));
  },
  98,
);
