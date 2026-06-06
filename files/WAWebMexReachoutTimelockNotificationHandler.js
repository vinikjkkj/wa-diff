__d(
  "WAWebMexReachoutTimelockNotificationHandler",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebReachoutTimelockUtils",
    "WAWebUserPrefsIndexedDBStorage",
    "WAWebUserPrefsTypes",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e, t) {
      var n = t.xwa2_notify_account_reachout_timelock,
        r = n.enforcement_type,
        o = n.is_active,
        a = n.time_enforcement_ends;
      await u(o, r, a);
    }
    async function u(t, n, r) {
      try {
        if (!t) {
          var a = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
              o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY,
            ),
            i = o(
              "WAWebReachoutTimelockUtils",
            ).isUserReachoutTimelockedAndVisible(),
            l = a == null ? void 0 : a.enforcement_type;
          (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.remove(
            o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY,
          ),
            o("WAWebBackendApi").frontendFireAndForget(
              "reachoutTimelockEnforcementLifted",
              { shouldPresentRestrictionsLiftedModal: i, enforcementType: l },
            ));
          return;
        }
        var s =
            r != null
              ? new Date(parseInt(r, 10) * 1e3).getTime()
              : new Date().getTime() + 60 * 1e3,
          u = await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
            o("WAWebReachoutTimelockUtils").REACHOUT_TIMELOCK_IDB_KEY,
          );
        (await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
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
    }
    ((l.mexHandleReachoutTimelockNotification = s),
      (l.handleReachoutTimelockUpdate = u));
  },
  98,
);
