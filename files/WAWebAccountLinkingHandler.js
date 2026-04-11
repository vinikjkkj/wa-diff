__d(
  "WAWebAccountLinkingHandler",
  [
    "WALogger",
    "WAWebAccountLinkingAPI",
    "WAWebAccountLinkingConstants",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingNonceFetchAPI",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    function d() {
      return c.updateAccountLinkingState(
        o("WAWebAccountLinkingConstants").AccountLinkState.Paused,
      );
    }
    function m() {
      return c.purgeWaffleData();
    }
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield c.getAccountLinkingData();
          if (t != null) {
            if (
              t.linkState ===
              o("WAWebAccountLinkingConstants").AccountLinkState.Active
            )
              try {
                (yield o("WAWebAccountLinkingAPI").ping(),
                  yield o("WAWebAccountLinkingAPI").fetchServiceData());
              } catch (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] handleResyncState active state failed: ",
                        "",
                      ])),
                    t,
                  )
                  .tags("waffle", "account-linking", "resync")
                  .sendLogs("waffle-resync-active-failed", { sampling: 0.01 });
              }
            if (
              t.linkState ===
              o("WAWebAccountLinkingConstants").AccountLinkState.Paused
            )
              try {
                var n = yield o("WAWebAccountLinkingAPI").stateExists();
                if (n != null)
                  switch (n) {
                    case o("WAWebAccountLinkingConstants")
                      .AccountLinkingStateExists.UNLINKED:
                      yield c.purgeWaffleData();
                      break;
                    case o("WAWebAccountLinkingConstants")
                      .AccountLinkingStateExists.ACTIVE:
                      yield o(
                        "WAWebAccountLinkingNonceFetchAPI",
                      ).requestNonceFromPrimary();
                      break;
                    case o("WAWebAccountLinkingConstants")
                      .AccountLinkingStateExists.PAUSED:
                      break;
                  }
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE] handleResyncState paused state failed: ",
                        "",
                      ])),
                    e,
                  )
                  .tags("waffle", "account-linking", "resync")
                  .sendLogs("waffle-resync-paused-failed", { sampling: 0.01 });
              }
          } else
            try {
              var r = yield o("WAWebAccountLinkingAPI").stateExists();
              if (r != null)
                switch (r) {
                  case o("WAWebAccountLinkingConstants")
                    .AccountLinkingStateExists.UNLINKED:
                    break;
                  case o("WAWebAccountLinkingConstants")
                    .AccountLinkingStateExists.ACTIVE:
                    yield o(
                      "WAWebAccountLinkingNonceFetchAPI",
                    ).requestNonceFromPrimary();
                    break;
                  case o("WAWebAccountLinkingConstants")
                    .AccountLinkingStateExists.PAUSED:
                    yield d();
                    break;
                }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] handleResyncState unlinked state failed: ",
                      "",
                    ])),
                  e,
                )
                .tags("waffle", "account-linking", "resync")
                .sendLogs("waffle-resync-unlinked-failed", { sampling: 0.01 });
            }
        })),
        _.apply(this, arguments)
      );
    }
    ((l.handlePausedState = d),
      (l.handleUnlinkedState = m),
      (l.handleResyncState = p));
  },
  98,
);
