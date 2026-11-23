__d(
  "WAWebAeaHistorySync",
  [
    "WALogger",
    "WAWebAeaAccountCategory",
    "WAWebAeaAccountState",
    "WAWebAeaAccountStateStore",
    "WAWebAeaHistoryChatType",
    "WAWebAeaThreadStateStore",
    "WAWebGetMessageCache",
    "WAWebProtobufsAea.pb",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d;
    async function m(t) {
      var n,
        a = t.flatMap(function (e) {
          var t = e.nonE2EeType,
            n = e.user,
            r = o("WAWebAeaHistoryChatType").aeaThreadStateFromHistoryChatType(
              t,
            );
          return r == null ? [] : [{ user: n, state: r }];
        });
      if (a.length !== 0) {
        var i = await Promise.allSettled(
            a.map(function (e) {
              var t = e.state,
                n = e.user;
              return o(
                "WAWebAeaThreadStateStore",
              ).updateAeaThreadStateFromUnsignedSource(n, t, {
                shouldDisclose: !1,
              });
            }),
          ),
          l = i.filter(function (e) {
            var t = e.status;
            return t === "rejected";
          });
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[aea] history chat types applied=",
              " failed=",
              "",
            ])),
          String(a.length - l.length),
          String(l.length),
        ),
          ((n = l[0]) == null ? void 0 : n.status) === "rejected" &&
            o("WALogger")
              .WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] failed to record history chat types",
                  ])),
              )
              .catching(r("getErrorSafe")(l[0].reason))
              .sendLogs("aea-history-chat-type-fail"));
      }
    }
    function p(e) {
      return (function (e) {
        return e ===
          o("WAWebProtobufsAea.pb").NonE2EEAttestation$AccountType.E2EE
          ? o("WAWebAeaAccountState").AeaAccountState.E2EE
          : e ===
              o("WAWebProtobufsAea.pb").NonE2EEAttestation$AccountType
                .HYBRID_E2EE
            ? o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE
            : e ===
                o("WAWebProtobufsAea.pb").NonE2EEAttestation$AccountType
                  .NON_E2EE
              ? o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
              : null;
      })(o("WAWebProtobufsAea.pb").NonE2EEAttestation$AccountType.cast(e));
    }
    async function _(e) {
      var t,
        n = await Promise.allSettled(
          e.map(async function (e) {
            var t = e.accountType,
              n = e.identityKey,
              r = e.nonE2EeType,
              a = e.user,
              i = p(t);
            if (
              i == null ||
              !g(i, r) ||
              o("WAWebAeaAccountCategory").isAeaBotAccount(a) ||
              !(await o(
                "WAWebAeaAccountCategory",
              ).isAeaReceiveEnabledForAccount(a))
            )
              return !1;
            var l = await o(
                "WAWebAeaAccountStateStore",
              ).compareAndSetAeaAccountState(a, n, null, i),
              s = l.changed;
            return s;
          }),
        );
      if (n.length !== 0) {
        var a = n.filter(function (e) {
            return e.status === "fulfilled" && e.value;
          }).length,
          i = n.filter(function (e) {
            var t = e.status;
            return t === "rejected";
          });
        (o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[aea] history account states received=",
              " stored=",
              " failed=",
              "",
            ])),
          String(n.length),
          String(a),
          String(i.length),
        ),
          ((t = i[0]) == null ? void 0 : t.status) === "rejected" &&
            o("WALogger")
              .WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[aea] failed to store history account states",
                  ])),
              )
              .catching(r("getErrorSafe")(i[0].reason))
              .sendLogs("aea-history-account-state-fail"),
          a > 0 && (await f()));
      }
    }
    async function f() {
      try {
        await o("WAWebGetMessageCache").getMessageCache().writeSignalState(!0);
      } catch (e) {
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[aea] failed to persist history account states",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("aea-history-account-state-flush-fail");
      }
    }
    function g(e, t) {
      if (!o("WAWebAeaAccountState").isAeaNonE2eeAccountState(e)) return !0;
      var n = o("WAWebAeaHistoryChatType").aeaThreadStateFromHistoryChatType(t);
      return n != null && o("WAWebAeaAccountState").isAeaNonE2eeAccountState(n);
    }
    ((l.applyAeaHistoryChatTypes = m),
      (l.aeaAccountStateFromHistory = p),
      (l.applyAeaHistoryAccountStates = _));
  },
  98,
);
