__d(
  "WAWebAeaAccountCategory",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWebAeaAccountState",
    "WAWebAeaAdvState",
    "WAWebAeaRollout",
    "WAWebApiContact",
    "WAWebApiVerifiedBusinessName",
    "WAWebBotUtils",
    "WAWebDBDeviceListFanout",
    "WAWebPrivacyModeSystemMsg",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum")({
        COEX: "coex",
        CAPI: "capi",
        OTHER: "other",
        ORDINARY: "ordinary",
        BOT: "bot",
      });
    function c(e) {
      return (
        e.isBot() ||
        e.isAiHub() ||
        e.equals(o("WAWebBotUtils").META_BOT_LID_WID)
      );
    }
    function d(e) {
      return e.isRegularUser() || c(e);
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (c(e)) return u.BOT;
          var r = yield (s || (s = n("Promise"))).all([
              o("WAWebApiContact").getContactRecord(e),
              o(
                "WAWebApiVerifiedBusinessName",
              ).getVerifiedBusinessNameRecordLidAware(e),
              o("WAWebAeaAdvState").readAeaAdvState(e),
              t != null
                ? t
                : o("WAWebDBDeviceListFanout").getFanOutList({
                    wids: [e],
                    chatWidSetToIncludeHostedInFanoutOneToOneChatOnly: e,
                  }),
            ]),
            a = r[0],
            i = r[1],
            l = r[2],
            d = r[3];
          if (
            (a == null ? void 0 : a.isHosted) === !0 ||
            l === o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE ||
            d.some(function (t) {
              return t.isHosted() && t.isSameAccountAndAddressingMode(e);
            })
          )
            return u.COEX;
          var m =
            (i == null ? void 0 : i.privacyMode) != null
              ? o(
                  "WAWebApiVerifiedBusinessName",
                ).convertPrivacyModeFromStorageType(i.privacyMode)
              : null;
          return (function (e) {
            if (
              e ===
                o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode
                  .HOSTED_GROUP ||
              e === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB
            )
              return u.CAPI;
            if (e === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP)
              return u.OTHER;
            if (e === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE)
              return l === o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
                ? u.OTHER
                : u.ORDINARY;
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(m));
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return o("WAWebAeaRollout").isAeaMonitoringEnabled()
        ? e === u.COEX || e === u.ORDINARY
          ? !0
          : e === u.CAPI
            ? r("gkx")("27887")
            : e === u.OTHER
              ? r("gkx")("27888")
              : e === u.BOT
                ? r("gkx")("27889")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })()
        : !1;
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return o("WAWebAeaRollout").isAeaMonitoringEnabled()
            ? _(yield m(e))
            : !1;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return !o("WAWebAeaRollout").isAeaEnforcementEnabled() || !_(e)
        ? !1
        : e === u.COEX || e === u.ORDINARY
          ? !0
          : e === u.CAPI
            ? r("gkx")("27892")
            : e === u.OTHER
              ? r("gkx")("27893")
              : e === u.BOT
                ? r("gkx")("27895")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          return o("WAWebAeaRollout").isAeaEnforcementEnabled()
            ? h(yield m(e, t))
            : !1;
        })),
        C.apply(this, arguments)
      );
    }
    var b = !1;
    function v() {
      b ||
        ((b = !0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[aea] gates monitoring=",
              " backfill=",
              " enforcement=",
              " receive_capi=",
              " receive_other=",
              " receive_bot=",
              " enforcement_capi=",
              " enforcement_other=",
              " enforcement_bot=",
              "",
            ])),
          String(o("WAWebAeaRollout").isAeaMonitoringEnabled()),
          String(o("WAWebAeaRollout").isAeaBackfillEnabled()),
          String(o("WAWebAeaRollout").isAeaEnforcementEnabled()),
          String(_(u.CAPI)),
          String(_(u.OTHER)),
          String(_(u.BOT)),
          String(h(u.CAPI)),
          String(h(u.OTHER)),
          String(h(u.BOT)),
        ));
    }
    ((l.AeaAccountCategory = u),
      (l.isAeaBotAccount = c),
      (l.isRegularUserOrAeaBot = d),
      (l.getAeaAccountCategory = m),
      (l.isAeaReceiveEnabledForCategory = _),
      (l.isAeaReceiveEnabledForAccount = f),
      (l.isAeaEnforcementEnabledForCategory = h),
      (l.isAeaEnforcementEnabledForAccount = y),
      (l.logAeaGatesOnce = v));
  },
  98,
);
