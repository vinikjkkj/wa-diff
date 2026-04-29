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
      m = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    function p() {
      return m.updateAccountLinkingState(
        o("WAWebAccountLinkingConstants").AccountLinkState.Paused,
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t === o("WAWebAccountLinkingConstants").AccountUnlinkType.SELF)
            yield m.purgeWaffleData();
          else
            try {
              (yield o("WAWebAccountLinkingAPI").ping(),
                yield o("WAWebAccountLinkingAPI").fetchServiceData());
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
        })),
        f.apply(this, arguments)
      );
    }
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            (yield o("WAWebAccountLinkingAPI").ping(),
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
        })),
        h.apply(this, arguments)
      );
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebAccountLinkingAPI").stateExists();
            if (e != null)
              switch (e) {
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .UNLINKED:
                  yield m.purgeWaffleData();
                  break;
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .ACTIVE:
                  yield o(
                    "WAWebAccountLinkingNonceFetchAPI",
                  ).requestNonceFromPrimary();
                  break;
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .PAUSED:
                  break;
              }
          } catch (e) {
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
              .sendLogs("waffle-resync-paused-failed", { sampling: 0.01 });
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield o("WAWebAccountLinkingAPI").stateExists();
            if (e != null)
              switch (e) {
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .UNLINKED:
                  break;
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .ACTIVE:
                  yield o(
                    "WAWebAccountLinkingNonceFetchAPI",
                  ).requestNonceFromPrimary();
                  break;
                case o("WAWebAccountLinkingConstants").AccountLinkingStateExists
                  .PAUSED:
                  yield p();
                  break;
              }
          } catch (e) {
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
              .sendLogs("waffle-resync-unlinked-failed", { sampling: 0.01 });
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            yield o("WAWebAccountLinkingAPI").fetchValidCertificate();
          } catch (e) {
            o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] handleResyncState cert refresh failed: ",
                    "",
                  ])),
                e,
              )
              .tags("waffle", "account-linking", "resync")
              .sendLogs("waffle-resync-cert-failed", { sampling: 0.01 });
          }
          var e = yield m.getAccountLinkingData();
          e != null
            ? (e.linkState ===
                o("WAWebAccountLinkingConstants").AccountLinkState.Active &&
                (yield g()),
              e.linkState ===
                o("WAWebAccountLinkingConstants").AccountLinkState.Paused &&
                (yield y()))
            : yield b();
        })),
        R.apply(this, arguments)
      );
    }
    ((l.handlePausedState = p),
      (l.handleUnlinkedState = _),
      (l.handleResyncState = S));
  },
  98,
);
