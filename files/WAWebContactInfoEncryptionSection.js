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
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.contactId,
        a = e.onVerificationClick,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebContactGetters").getPrivacyMode,
            o("WAWebContactGetters").getIsHosted,
          ]),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebContactValues").useContactValues(n, i),
        c = l[0],
        m = l[1],
        p;
      t[1] !== n || t[2] !== m || t[3] !== c
        ? ((p = d(
            o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(c),
            n,
            m,
          )),
          (t[1] = n),
          (t[2] = m),
          (t[3] = c),
          (t[4] = p))
        : (p = t[4]);
      var _ = p;
      if (_) {
        var f;
        return (
          t[5] !== _.header || t[6] !== _.onClick || t[7] !== _.text
            ? ((f = u.jsx(r("WAWebSecurityDrawerSection.react"), {
                header: _.header,
                text: _.text,
                onClick: _.onClick,
              })),
              (t[5] = _.header),
              (t[6] = _.onClick),
              (t[7] = _.text),
              (t[8] = f))
            : (f = t[8]),
          f
        );
      }
      var g, h;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = s._(
            /*BTDS*/ "Messages are end-to-end encrypted. Click to verify.",
          )),
          (h = { type: "encryption" }),
          (t[9] = g),
          (t[10] = h))
        : ((g = t[9]), (h = t[10]));
      var y;
      return (
        t[11] !== a
          ? ((y = u.jsx(r("WAWebSecurityDrawerSection.react"), {
              onClick: a,
              text: g,
              header: h,
            })),
            (t[11] = a),
            (t[12] = y))
          : (y = t[12]),
        y
      );
    }
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
