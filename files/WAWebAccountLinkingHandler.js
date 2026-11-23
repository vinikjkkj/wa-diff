__d(
  "WAWebAccountLinkingHandler",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingNonceFetchAPI",
    "WAWebMetaAiWaffleAuthTokenCache",
    "WAWebSubscriptionAgeGating",
    "WAWebWaffleLifecycleWamLogger",
    "WAWebWamEnumWaffleLifecycleLinkStateType",
    "WAWebWamEnumWaffleLifecycleTraceSourceType",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = r("requireDeferred")("WAWebAccountLinkingAPI").__setRef(
        "WAWebAccountLinkingHandler",
      ),
      f = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    async function g() {
      o(
        "WAWebMetaAiWaffleAuthTokenCache",
      ).clearMetaAiWaffleAuthTokenBlobCache();
      try {
        await f.updateAccountLinkingState(
          o("WAWebAccountLinkingConstants").AccountLinkState.Paused,
        );
      } finally {
        await o(
          "WAWebSubscriptionAgeGating",
        ).invalidateSubscriptionAgeVerdict();
      }
    }
    async function h(t) {
      if (t === o("WAWebAccountLinkingConstants").AccountUnlinkType.SELF) {
        o(
          "WAWebMetaAiWaffleAuthTokenCache",
        ).clearMetaAiWaffleAuthTokenBlobCache();
        try {
          await f.purgeWaffleData();
        } finally {
          await o(
            "WAWebSubscriptionAgeGating",
          ).invalidateSubscriptionAgeVerdict();
        }
        o("WAWebWaffleLifecycleWamLogger").logPurge({
          linkState: o("WAWebWamEnumWaffleLifecycleLinkStateType")
            .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.UNLINKED,
          traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
            .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_UNLINKED,
          unlinkType: 0,
        });
      } else
        try {
          var n = await _.load(),
            r = n.fetchServiceData,
            a = n.ping;
          (await a(),
            await r(),
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
    async function y() {
      try {
        var e = await _.load(),
          t = e.fetchServiceData,
          n = e.ping;
        (await n(), await t());
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
    async function C() {
      try {
        var e = await _.load(),
          t = e.refreshAccessToken,
          n = e.stateExists,
          r = await n();
        if (r != null)
          switch (r) {
            case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
              .UNLINKED:
              o(
                "WAWebMetaAiWaffleAuthTokenCache",
              ).clearMetaAiWaffleAuthTokenBlobCache();
              try {
                await f.purgeWaffleData();
              } finally {
                await o(
                  "WAWebSubscriptionAgeGating",
                ).invalidateSubscriptionAgeVerdict();
              }
              break;
            case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
              .ACTIVE:
              o("WAWebAccountLinkingGatingUtils").isGuestMode()
                ? await t()
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
    async function b() {
      try {
        var e = await _.load(),
          t = e.refreshAccessToken,
          n = e.stateExists,
          r = await n();
        if (r != null)
          switch (r) {
            case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
              .UNLINKED:
              break;
            case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
              .ACTIVE:
              o("WAWebAccountLinkingGatingUtils").isGuestMode()
                ? await t()
                : await o(
                    "WAWebAccountLinkingNonceFetchAPI",
                  ).requestNonceFromPrimary();
              break;
            case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
              .PAUSED:
              await g();
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
    async function v(e) {
      try {
        if (e != null) {
          var t = await f.getLastResyncTimestamp();
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
    async function S(e) {
      if (!(await v(e))) {
        try {
          var t = await _.load(),
            n = t.fetchValidCertificate;
          await n();
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
          var r = await f.getAccountLinkingData();
          (r != null
            ? (o("WAWebWaffleLifecycleWamLogger").logNotification({
                linkState: o("WAWebWaffleLifecycleWamLogger").mapLinkStateToWam(
                  r.linkState,
                ),
                traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                  .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_RESYNC,
              }),
              r.linkState ===
                o("WAWebAccountLinkingConstants").AccountLinkState.Active &&
                (await y()),
              r.linkState ===
                o("WAWebAccountLinkingConstants").AccountLinkState.Paused &&
                (await C()))
            : (o("WAWebWaffleLifecycleWamLogger").logNotification({
                linkState: o("WAWebWamEnumWaffleLifecycleLinkStateType")
                  .WAFFLE_LIFECYCLE_LINK_STATE_TYPE.UNLINKED,
                traceSource: o("WAWebWamEnumWaffleLifecycleTraceSourceType")
                  .WAFFLE_LIFECYCLE_TRACE_SOURCE_TYPE.NOTIFICATION_RESYNC,
              }),
              await b()),
            await f.updateLastResyncTimestamp(o("WATimeUtils").unixTime()));
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
    ((l.handlePausedState = g),
      (l.handleUnlinkedState = h),
      (l.handleResyncState = S));
  },
  98,
);
