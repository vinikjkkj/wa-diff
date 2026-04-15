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
      c,
      d,
      m,
      p = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    function _() {
      return p.updateAccountLinkingState(
        o("WAWebAccountLinkingConstants").AccountLinkState.Paused,
      );
    }
    function f() {
      return p.purgeWaffleData();
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield p.getAccountLinkingData();
          if (t != null) {
            if (
              t.linkState ===
              o("WAWebAccountLinkingConstants").AccountLinkState.Active
            )
              try {
                (o("WALogger")
                  .LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[WAFFLE-TRACE] handleResyncState: local=Active, calling ping()",
                      ])),
                  )
                  .sendLogs("waffle-nonce-trace-resync", { sampling: 1 }),
                  yield o("WAWebAccountLinkingAPI").ping(),
                  yield o("WAWebAccountLinkingAPI").fetchServiceData());
              } catch (e) {
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
                      yield p.purgeWaffleData();
                      break;
                    case o("WAWebAccountLinkingConstants")
                      .AccountLinkingStateExists.ACTIVE:
                      (o("WALogger")
                        .LOG(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "[WAFFLE-TRACE] handleResyncState: local=Paused, server=ACTIVE, requesting nonce",
                            ])),
                        )
                        .sendLogs("waffle-nonce-trace-resync", { sampling: 1 }),
                        yield o(
                          "WAWebAccountLinkingNonceFetchAPI",
                        ).requestNonceFromPrimary());
                      break;
                    case o("WAWebAccountLinkingConstants")
                      .AccountLinkingStateExists.PAUSED:
                      break;
                  }
              } catch (e) {
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
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
                    (o("WALogger")
                      .LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[WAFFLE-TRACE] handleResyncState: local=Unlinked, server=ACTIVE, requesting nonce",
                          ])),
                      )
                      .sendLogs("waffle-nonce-trace-resync", { sampling: 1 }),
                      yield o(
                        "WAWebAccountLinkingNonceFetchAPI",
                      ).requestNonceFromPrimary());
                    break;
                  case o("WAWebAccountLinkingConstants")
                    .AccountLinkingStateExists.PAUSED:
                    yield _();
                    break;
                }
            } catch (e) {
              o("WALogger")
                .ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] handleResyncState unlinked state failed: ",
                      "",
                    ])),
                  e,
                )
                .tags("waffle", "account-linking", "resync")
                .sendLogs("waffle-resync-unlinked-failed", { sampling: 0.01 });
            }
        })),
        h.apply(this, arguments)
      );
    }
    ((l.handlePausedState = _),
      (l.handleUnlinkedState = f),
      (l.handleResyncState = g));
  },
  98,
);
