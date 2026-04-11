__d(
  "WAWebMexReachoutTimelockNotificationHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebReachoutTimelockUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.xwa2_notify_account_reachout_timelock,
            r = n.enforcement_type,
            o = n.is_active,
            a = n.time_enforcement_ends;
          yield c(o, r, a);
        })),
        u.apply(this, arguments)
      );
    }
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, r) {
          try {
            if (!t) {
              var a = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                  o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY,
                ),
                i = o(
                  "WAWebReachoutTimelockUtils",
                ).isUserReachoutTimelockedAndVisible(),
                l = a == null ? void 0 : a.enforcement_type;
              (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
                o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY,
              ),
                o("WAWebBackendApi").frontendFireAndForget(
                  "reachoutTimelockEnforcementLifted",
                  {
                    shouldPresentRestrictionsLiftedModal: i,
                    enforcementType: l,
                  },
                ));
              return;
            }
            var s =
                r != null
                  ? new Date(parseInt(r, 10) * 1e3).getTime()
                  : new Date().getTime() + 60 * 1e3,
              u = yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
                o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY,
              );
            (yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
              o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY,
              {
                state:
                  u != null
                    ? u.state
                    : o("WAWebUserPrefsTypes").ReachoutTimelockState.HIDDEN,
                time_enforcement_ends: s,
                enforcement_type: o(
                  "WAWebReachoutTimelockUtils",
                ).getReachoutTimelockEnforcementType(n),
              },
            ),
              o("WAWebBackendApi").frontendFireAndForget(
                "reachoutTimelockEnforcementSet",
                {},
              ));
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[mex][reachout-timelock] notif handler failed",
                  ])),
              )
              .sendLogs("mex-handle-reachout-timelock-notification-failed");
          }
        })),
        d.apply(this, arguments)
      );
    }
    ((l.mexHandleReachoutTimelockNotification = s),
      (l.handleReachoutTimelockUpdate = c));
  },
  98,
);
