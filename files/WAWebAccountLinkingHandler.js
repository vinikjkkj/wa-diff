__d(
  "WAWebAccountLinkingHandler",
  [
    "WALogger",
    "WATimeUtils",
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
      p,
      _ = o("WAWebAccountLinkingDBOperationsAPI").getAccountLinkingDBOps(
        "account_linking",
      );
    function f() {
      return _.updateAccountLinkingState(
        o("WAWebAccountLinkingConstants").AccountLinkState.Paused,
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (t === o("WAWebAccountLinkingConstants").AccountUnlinkType.SELF)
            yield _.purgeWaffleData();
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
            (yield o("WAWebAccountLinkingAPI").ping(),
              yield o("WAWebAccountLinkingAPI").fetchServiceData());
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
                  yield _.purgeWaffleData();
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
                  yield f();
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
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          try {
            if (e != null) {
              var t = yield _.getLastResyncTimestamp();
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
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!(yield L(e))) {
            try {
              yield o("WAWebAccountLinkingAPI").fetchValidCertificate();
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
              var t = yield _.getAccountLinkingData();
              (t != null
                ? (t.linkState ===
                    o("WAWebAccountLinkingConstants").AccountLinkState.Active &&
                    (yield y()),
                  t.linkState ===
                    o("WAWebAccountLinkingConstants").AccountLinkState.Paused &&
                    (yield b()))
                : yield S(),
                yield _.updateLastResyncTimestamp(o("WATimeUtils").unixTime()));
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
        })),
        I.apply(this, arguments)
      );
    }
    ((l.handlePausedState = f),
      (l.handleUnlinkedState = g),
      (l.handleResyncState = k));
  },
  98,
);
