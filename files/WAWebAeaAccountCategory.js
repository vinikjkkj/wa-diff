__d(
  "WAWebAeaAccountCategory",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebAeaAccountState",
    "WAWebAeaAdvState",
    "WAWebAeaRollout",
    "WAWebApiContact",
    "WAWebApiVerifiedBusinessName",
    "WAWebBotUtils",
    "WAWebDBDeviceListFanout",
    "WAWebPrivacyModeSystemMsg",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        COEX: "coex",
        CAPI: "capi",
        OTHER: "other",
        ORDINARY: "ordinary",
        BOT: "bot",
      });
    function u(e) {
      return (
        e.isBot() ||
        e.isAiHub() ||
        e.equals(o("WAWebBotUtils").META_BOT_LID_WID)
      );
    }
    function c(e) {
      return e.isRegularUser() || u(e);
    }
    async function d(e, t) {
      if (u(e)) return s.BOT;
      var n = await Promise.all([
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
        r = n[0],
        a = n[1],
        i = n[2],
        l = n[3];
      if (
        (r == null ? void 0 : r.isHosted) === !0 ||
        i === o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE ||
        l.some(function (t) {
          return t.isHosted() && t.isSameAccountAndAddressingMode(e);
        })
      )
        return s.COEX;
      var c =
        (a == null ? void 0 : a.privacyMode) != null
          ? o("WAWebApiVerifiedBusinessName").convertPrivacyModeFromStorageType(
              a.privacyMode,
            )
          : null;
      return (function (e) {
        if (
          e ===
            o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.HOSTED_GROUP ||
          e === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB
        )
          return s.CAPI;
        if (e === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP)
          return s.OTHER;
        if (e === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE)
          return i === o("WAWebAeaAccountState").AeaAccountState.NON_E2EE
            ? s.OTHER
            : s.ORDINARY;
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(c));
    }
    function m(e) {
      return o("WAWebAeaRollout").isAeaMonitoringEnabled()
        ? e === s.COEX || e === s.ORDINARY
          ? !0
          : e === s.CAPI
            ? r("gkx")("27887")
            : e === s.OTHER
              ? r("gkx")("27888")
              : e === s.BOT
                ? r("gkx")("27889")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })()
        : !1;
    }
    async function p(e) {
      return o("WAWebAeaRollout").isAeaMonitoringEnabled() ? m(await d(e)) : !1;
    }
    function _(e) {
      return !o("WAWebAeaRollout").isAeaEnforcementEnabled() || !m(e)
        ? !1
        : e === s.COEX || e === s.ORDINARY
          ? !0
          : e === s.CAPI
            ? r("gkx")("27892")
            : e === s.OTHER
              ? r("gkx")("27893")
              : e === s.BOT
                ? r("gkx")("27895")
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e,
                    );
                  })();
    }
    async function f(e, t) {
      return o("WAWebAeaRollout").isAeaEnforcementEnabled()
        ? _(await d(e, t))
        : !1;
    }
    var g = !1;
    function h() {
      g ||
        ((g = !0),
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
          String(m(s.CAPI)),
          String(m(s.OTHER)),
          String(m(s.BOT)),
          String(_(s.CAPI)),
          String(_(s.OTHER)),
          String(_(s.BOT)),
        ));
    }
    ((l.AeaAccountCategory = s),
      (l.isAeaBotAccount = u),
      (l.isRegularUserOrAeaBot = c),
      (l.getAeaAccountCategory = d),
      (l.isAeaReceiveEnabledForCategory = m),
      (l.isAeaReceiveEnabledForAccount = p),
      (l.isAeaEnforcementEnabledForCategory = _),
      (l.isAeaEnforcementEnabledForAccount = f),
      (l.logAeaGatesOnce = h));
  },
  98,
);
