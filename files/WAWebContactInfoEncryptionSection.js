__d(
  "WAWebContactInfoEncryptionSection",
  [
    "fbt",
    "WAWebABPropsSaga",
    "WAWebABPropsSupportGroup",
    "WAWebBizCoexGatingUtils",
    "WAWebContactGetters",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFormatNotificationTemplateModalText",
    "WAWebLidMigrationUtils",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebOpenCoexSystemMessageModal.react",
    "WAWebOpenSystemMessageModal",
    "WAWebPrivacyGatingUtils",
    "WAWebPrivacyModeSystemMsg",
    "WAWebSecurityDrawerSection.react",
    "WAWebSupportAIInfoNuxLoadable",
    "WAWebSupportChatStrings",
    "WAWebTextWithLearnMoreLink",
    "WAWebUserPrefsMultiDevice",
    "WAWebWid",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.contactId,
        n = e.onVerificationClick,
        a = o("useWAWebContactValues").useContactValues(t, [
          o("WAWebContactGetters").getPrivacyMode,
          o("WAWebContactGetters").getIsHosted,
        ]),
        i = a[0],
        l = a[1],
        c = d(o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(i), t, l);
      return c
        ? u.jsx(r("WAWebSecurityDrawerSection.react"), {
            header: c.header,
            text: c.text,
            onClick: c.onClick,
          })
        : u.jsx(r("WAWebSecurityDrawerSection.react"), {
            onClick: n,
            text: s._(
              /*BTDS*/ "Messages are end-to-end encrypted. Click to verify.",
            ),
            header: { type: "encryption" },
          });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e, t, n) {
      var a = o("WAWebLidMigrationUtils").toUserLid(t);
      if (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()
      ) {
        var i = o(
          "WAWebUserPrefsMultiDevice",
        ).getIsHostedMeAccountFromLocalStorage();
        if (i === !0)
          return {
            text: s._(
              /*BTDS*/ "Your business uses a secure service from Meta to manage this chat. Click to learn more.",
            ),
            header: { type: "security" },
            onClick: function () {
              o(
                "WAWebOpenCoexSystemMessageModal.react",
              ).openCoexSecurityVerifySystemMessageModal(
                o(
                  "WAWebFormatNotificationTemplateModalText",
                ).formatCoexSecurityModalTextForYourBusiness(),
                null,
                o("WAWebFaqUrl").getCoexHostedFaqUrl(),
                t,
                a,
              );
            },
          };
      }
      if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled() && n === !0)
        return {
          text: s._(
            /*BTDS*/ "This business uses a secure service from Meta to manage this chat. Click to learn more.",
          ),
          header: { type: "security" },
          onClick: function () {
            o(
              "WAWebOpenCoexSystemMessageModal.react",
            ).openCoexSecurityVerifySystemMessageModal(
              o(
                "WAWebFormatNotificationTemplateModalText",
              ).formatCoexSecurityModalText(),
              o(
                "WAWebFormatNotificationTemplateModalText",
              ).formatCoexSecurityModalTextLastParagraph(),
              o("WAWebFaqUrl").getCoexHostedFaqUrl(),
              t,
              a,
            );
          },
        };
      if (r("WAWebABPropsSupportGroup")(t.user)) {
        if (o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2NonE2eeEnabled()) {
          var l = function () {
            _(t)
              ? p()
              : o("WAWebExternalLink.react").openExternalLink(
                  o("WAWebFaqUrl").getSupportChatSafetyFaqUrl(),
                );
          };
          return {
            text: u.jsx(r("WAWebTextWithLearnMoreLink"), {
              text: s._(
                /*BTDS*/ "WhatsApp secures your messages and calls with this account.",
              ),
              handleClick: l,
            }),
            header: { type: "none" },
            onClick: l,
          };
        }
        return _(t)
          ? {
              text: s._(
                /*BTDS*/ "This is an official account of WhatsApp Support. Click to learn more.",
              ),
              header: { type: "security" },
              onClick: function () {
                p();
              },
            }
          : {
              text: s._(
                /*BTDS*/ "Click to learn how messages and calls are secured.",
              ),
              header: { type: "security" },
              onClick: function () {
                o("WAWebOpenSystemMessageModal").openSystemMessageModal(
                  o("WAWebSupportChatStrings").SupportChatSecurityModalText(),
                  o("WAWebFaqUrl").getSupportChatSafetyFaqUrl(),
                  o("WAWebSupportChatStrings").SupportChatLearnMoreLinkText(),
                );
              },
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
            text: o(
              "WAWebPrivacyGatingUtils",
            ).isDataPrivacyPhase2NonE2eeEnabled()
              ? u.jsx(r("WAWebTextWithLearnMoreLink"), {
                  text: s._(
                    /*BTDS*/ "This business works with other companies to manage this chat.",
                  ),
                  handleClick: c,
                })
              : s._(
                  /*BTDS*/ "This business works with other companies to manage this chat. Click to learn more.",
                ),
            header: o(
              "WAWebPrivacyGatingUtils",
            ).isDataPrivacyPhase2NonE2eeEnabled()
              ? { type: "none" }
              : { type: "security" },
            onClick: c,
          };
        }
        case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB: {
          var d;
          t.isIAS()
            ? (d = o(
                "WAWebPrivacyGatingUtils",
              ).isDataPrivacyPhase2NonE2eeEnabled()
                ? s._(
                    /*BTDS*/ "WhatsApp Surveys uses a secure service from Meta to manage this chat.",
                  )
                : s._(
                    /*BTDS*/ "WhatsApp Surveys uses a secure service from Meta to manage this chat. Click to learn more.",
                  ))
            : (d = o(
                "WAWebPrivacyGatingUtils",
              ).isDataPrivacyPhase2NonE2eeEnabled()
                ? s._(
                    /*BTDS*/ "This business uses a secure service from Meta to manage this chat.",
                  )
                : s._(
                    /*BTDS*/ "This business uses a secure service from Meta to manage this chat. Click to learn more.",
                  ));
          var m = function () {
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
              handleClick: o(
                "WAWebPrivacyGatingUtils",
              ).isDataPrivacyPhase2NonE2eeEnabled()
                ? m
                : null,
            }),
            header: o(
              "WAWebPrivacyGatingUtils",
            ).isDataPrivacyPhase2NonE2eeEnabled()
              ? { type: "none" }
              : { type: "security" },
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
