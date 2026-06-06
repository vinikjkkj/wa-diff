__d(
  "WAWebAccountLinkingHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingNonceFetchAPI",
    "WAWebWaffleLifecycleWamLogger",
    "WAWebWamEnumWaffleLifecycleLinkStateType",
    "WAWebWamEnumWaffleLifecycleTraceSourceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    function f() {
      return _.updateAccountLinkingState(
        o("WAWebAccountLinkingConstants").AccountLinkState.Paused,
      );
    }
    async function g(t) {
      if (t === o("WAWebAccountLinkingConstants").AccountUnlinkType.SELF)
        (await _.purgeWaffleData(),
          o("WAWebWaffleLifecycleWamLogger").logPurge({
            linkState: o("WAWebWamEnumWaffleLifecycleLinkStateType")
              .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.UNLINKED,
            traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
              .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_UNLINKED,
            unlinkType: 0,
          }));
      else
        try {
          (await o("WAWebAccountLinkingAPI").ping(),
            await o("WAWebAccountLinkingAPI").fetchServiceData(),
            o("WAWebWaffleLifecycleWamLogger").logNotification({
              linkState: o("WAWebWamEnumWaffleLifecycleLinkStateType")
                .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.NOT_APPLICABLE,
              traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_UNLINKED,
              unlinkType: 1,
            }));
        } catch (t) {
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] handleUnlinkedState partial unlink failed: ",
                  "",
                ])),
              t,
            )
            .tags("waffle", "account-linking", "unlink")
            .sendLogs("waffle-partial-unlink-failed", { sampling: 0.01 });
        }
    }
    async function h() {
      try {
        (await o("WAWebAccountLinkingAPI").ping(),
          await o("WAWebAccountLinkingAPI").fetchServiceData());
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] handleResyncState active state failed: ",
                  "",
                ])),
              e,
            )
            .tags("waffle", "account-linking", "resync")
            .sendLogs("waffle-resync-active-failed", { sampling: 0.01 }),
          e
        );
      }
    }
    async function y() {
      try {
        var e = await o("WAWebAccountLinkingAPI").stateExists();
        if (e != null)
          switch (e) {
            case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
              .UNLINKED:
              await _.purgeWaffleData();
              break;
            case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
              .ACTIVE:
              o("WAWebAccountLinkingGatingUtils").isGuestMode()
                ? await o("WAWebAccountLinkingAPI").refreshAccessToken()
                : await o(
                    "WAWebAccountLinkingNonceFetchAPI",
                  ).requestNonceFromPrimary();
              break;
            case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
              .PAUSED:
              break;
          }
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] handleResyncState paused state failed: ",
                  "",
                ])),
              e,
            )
            .tags("waffle", "account-linking", "resync")
            .sendLogs("waffle-resync-paused-failed", { sampling: 0.01 }),
          e
        );
      }
    }
    async function C() {
      try {
        var e = await o("WAWebAccountLinkingAPI").stateExists();
        if (e != null)
          switch (e) {
            case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
              .UNLINKED:
              break;
            case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
              .ACTIVE:
              o("WAWebAccountLinkingGatingUtils").isGuestMode()
                ? await o("WAWebAccountLinkingAPI").refreshAccessToken()
                : await o(
                    "WAWebAccountLinkingNonceFetchAPI",
                  ).requestNonceFromPrimary();
              break;
            case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
              .PAUSED:
              await f();
              break;
          }
      } catch (e) {
        throw (
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] handleResyncState unlinked state failed: ",
                  "",
                ])),
              e,
            )
            .tags("waffle", "account-linking", "resync")
            .sendLogs("waffle-resync-unlinked-failed", { sampling: 0.01 }),
          e
        );
      }
    }
    async function b(e) {
      try {
        if (e != null) {
          var t = await _.getLastResyncTimestamp();
          if (t != null) {
            var n = o("WATimeUtils").unixTime() - t;
            if (n >= 0 && n <= e) return !0;
          }
        }
      } catch (e) {
        o("WALogger")
          .ERROR(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[WAFFLE] handleResyncState dedup check failed: ",
                "",
              ])),
            e,
          )
          .tags("waffle", "account-linking", "resync")
          .sendLogs("waffle-resync-dedup-failed", { sampling: 0.01 });
      }
      return !1;
    }
    async function v(e) {
      if (!(await b(e))) {
        try {
          await o("WAWebAccountLinkingAPI").fetchValidCertificate();
        } catch (e) {
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] handleResyncState cert refresh failed: ",
                  "",
                ])),
              e,
            )
            .tags("waffle", "account-linking", "resync")
            .sendLogs("waffle-resync-cert-failed", { sampling: 0.01 });
        }
        try {
          var t = await _.getAccountLinkingData();
          (t != null
            ? (o("WAWebWaffleLifecycleWamLogger").logNotification({
                linkState: o("WAWebWaffleLifecycleWamLogger").mapLinkStateToWam(
                  t.linkState,
                ),
                traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                  .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_RESYNC,
              }),
              t.linkState ===
                o("WAWebAccountLinkingConstants").AccountLinkState.Active &&
                (await h()),
              t.linkState ===
                o("WAWebAccountLinkingConstants").AccountLinkState.Paused &&
                (await y()))
            : (o("WAWebWaffleLifecycleWamLogger").logNotification({
                linkState: o("WAWebWamEnumWaffleLifecycleLinkStateType")
                  .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.UNLINKED,
                traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                  .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_RESYNC,
              }),
              await C()),
            await _.updateLastResyncTimestamp(o("WATimeUtils").unixTime()));
        } catch (e) {
          o("WALogger")
            .ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE] handleResyncState failed: ",
                  "",
                ])),
              e,
            )
            .tags("waffle", "account-linking", "resync")
            .sendLogs("waffle-resync-failed", { sampling: 0.01 });
        }
      }
    }
    ((l.handlePausedState = f),
      (l.handleUnlinkedState = g),
      (l.handleResyncState = v));
  },
  98,
);
