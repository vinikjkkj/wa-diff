__d(
  "WAWebContactInfoEncryptionSection",
  [
    "fbt",
    "WAWebABPropsSaga",
    "WAWebABPropsSupportGroup",
    "WAWebAeaAccountState",
    "WAWebChatCollection",
    "WAWebContactGetters",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFormatNotificationTemplateModalText",
    "WAWebLidMigrationUtils",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebOpenCoexSystemMessageModal.react",
    "WAWebOpenSystemMessageModal",
    "WAWebPrivacyModeSystemMsg",
    "WAWebSecurityDrawerSection.react",
    "WAWebSupportAIInfoNuxLoadable",
    "WAWebTextWithLearnMoreLink",
    "WAWebUserPrefsMultiDevice",
    "WAWebWid",
    "react",
    "useWAWebAeaEnforcedThreadState",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = e.contactId,
        a = e.onVerificationClick,
        i = o("useWAWebContactValues").useContactValues(n, [
          o("WAWebContactGetters").getPrivacyMode,
          o("WAWebContactGetters").getIsHosted,
        ]),
        l = i[0],
        c = i[1],
        m = r("useWAWebAeaEnforcedThreadState")(
          (t = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
            n,
          )) == null
            ? void 0
            : t.id,
        ),
        p = m.isResolved,
        _ = m.state,
        f = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(l),
        g = d(
          _ === o("WAWebAeaAccountState").AeaAccountState.NON_E2EE &&
            f === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE
            ? o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB
            : f,
          n,
          c === !0 ||
            _ === o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE,
        );
      return p
        ? g
          ? u.jsx(r("WAWebSecurityDrawerSection.react"), {
              header: g.header,
              text: g.text,
              onClick: g.onClick,
            })
          : u.jsx(r("WAWebSecurityDrawerSection.react"), {
              onClick: a,
              text: s._(/*BTDS*/ ""),
              header: { type: "encryption" },
            })
        : null;
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t, n) {
      var a = o("WAWebLidMigrationUtils").toUserLid(t);
      if (o("WAWebMobilePlatforms").isSMB()) {
        var i = o(
          "WAWebUserPrefsMultiDevice",
        ).getIsHostedMeAccountFromLocalStorage();
        if (i === !0)
          return {
            text: s._(/*BTDS*/ ""),
            header: { type: "security" },
            onClick: function () {
              o(
                "WAWebOpenCoexSystemMessageModal.react",
              ).openCoexSecurityVerifySystemMessageModal({
                faqUrl: o("WAWebFaqUrl").getCoexHostedFaqUrl(),
                lid: a,
                text: o(
                  "WAWebFormatNotificationTemplateModalText",
                ).formatCoexSecurityModalTextForYourBusiness(),
                textLast: null,
                wid: t,
              });
            },
          };
      }
      if (n === !0)
        return {
          text: s._(/*BTDS*/ ""),
          header: { type: "security" },
          onClick: function () {
            o(
              "WAWebOpenCoexSystemMessageModal.react",
            ).openCoexSecurityVerifySystemMessageModal({
              faqUrl: o("WAWebFaqUrl").getCoexHostedFaqUrl(),
              lid: a,
              text: o(
                "WAWebFormatNotificationTemplateModalText",
              ).formatCoexSecurityModalText(),
              textLast: o(
                "WAWebFormatNotificationTemplateModalText",
              ).formatCoexSecurityModalTextLastParagraph(),
              wid: t,
            });
          },
        };
      if (r("WAWebABPropsSupportGroup")(t.user)) {
        var l = function () {
          _(t)
            ? p()
            : o("WAWebExternalLink.react").openExternalLink(
                o("WAWebFaqUrl").getSupportChatSafetyFaqUrl(),
              );
        };
        return {
          text: u.jsx(r("WAWebTextWithLearnMoreLink"), {
            text: s._(/*BTDS*/ ""),
            handleClick: l,
          }),
          header: { type: "none" },
          onClick: l,
        };
      }
      switch (e) {
        case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE:
        case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.HOSTED_GROUP:
          return null;
        case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP: {
          var c = function () {
            o("WAWebOpenSystemMessageModal").openSystemMessageModal(
              o(
                "WAWebFormatNotificationTemplateModalText",
              ).formatBspAndFbModalText(),
              o("WAWebFaqUrl").getE2EEnterpriseFaqUrl(),
            );
          };
          return {
            text: u.jsx(r("WAWebTextWithLearnMoreLink"), {
              text: s._(/*BTDS*/ ""),
              handleClick: c,
            }),
            header: { type: "none" },
            onClick: c,
          };
        }
        case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB: {
          var d = t.isIAS() ? s._(/*BTDS*/ "") : s._(/*BTDS*/ ""),
            m = function () {
              o("WAWebOpenSystemMessageModal").openSystemMessageModal(
                o("WAWebFormatNotificationTemplateModalText").formatFbModalText(
                  t.isIAS(),
                ),
                o("WAWebFaqUrl").getE2EEnterpriseFaqUrl(),
              );
            };
          return {
            text: u.jsx(r("WAWebTextWithLearnMoreLink"), {
              text: d,
              handleClick: m,
            }),
            header: { type: "none" },
            onClick: m,
          };
        }
      }
      function p() {
        o("WAWebModalManager").ModalManager.open(
          u.jsx(
            o("WAWebSupportAIInfoNuxLoadable").SupportAIInfoNuxLoadable,
            {},
          ),
          { transition: "modal-flow" },
        );
      }
      function _(e) {
        return (
          r("WAWebWid").isCAPISupportAccount(e) &&
          o("WAWebABPropsSaga").getIsSagaV1NuxEnabled()
        );
      }
    }
    l.default = c;
  },
  226,
);
