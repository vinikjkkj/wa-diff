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
    "react-compiler-runtime",
    "useWAWebAeaEnforcedThreadState",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n = o("react-compiler-runtime").c(14),
        a = e.contactId,
        i = e.onVerificationClick,
        l;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [
            o("WAWebContactGetters").getPrivacyMode,
            o("WAWebContactGetters").getIsHosted,
          ]),
          (n[0] = l))
        : (l = n[0]);
      var c = o("useWAWebContactValues").useContactValues(a, l),
        m = c[0],
        p = c[1],
        _ = r("useWAWebAeaEnforcedThreadState")(
          (t = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
            a,
          )) == null
            ? void 0
            : t.id,
        ),
        f = _.isResolved,
        g = _.state,
        h;
      if (n[1] !== g || n[2] !== a || n[3] !== p || n[4] !== m) {
        var y = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(m);
        ((h = d(
          g === o("WAWebAeaAccountState").AeaAccountState.NON_E2EE &&
            y === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE
            ? o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB
            : y,
          a,
          p === !0 ||
            g === o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE,
        )),
          (n[1] = g),
          (n[2] = a),
          (n[3] = p),
          (n[4] = m),
          (n[5] = h));
      } else h = n[5];
      var C = h;
      if (!f) return null;
      if (C) {
        var b;
        return (
          n[6] !== C.header || n[7] !== C.onClick || n[8] !== C.text
            ? ((b = u.jsx(r("WAWebSecurityDrawerSection.react"), {
                header: C.header,
                text: C.text,
                onClick: C.onClick,
              })),
              (n[6] = C.header),
              (n[7] = C.onClick),
              (n[8] = C.text),
              (n[9] = b))
            : (b = n[9]),
          b
        );
      }
      var v, S;
      n[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(
            /*BTDS*/ "Messages are end-to-end encrypted. Click to verify.",
          )),
          (S = { type: "encryption" }),
          (n[10] = v),
          (n[11] = S))
        : ((v = n[10]), (S = n[11]));
      var R;
      return (
        n[12] !== i
          ? ((R = u.jsx(r("WAWebSecurityDrawerSection.react"), {
              onClick: i,
              text: v,
              header: S,
            })),
            (n[12] = i),
            (n[13] = R))
          : (R = n[13]),
        R
      );
    }
    function d(e, t, n) {
      var a = o("WAWebLidMigrationUtils").toUserLid(t);
      if (o("WAWebMobilePlatforms").isSMB()) {
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
          text: s._(
            /*BTDS*/ "This business uses a secure service from Meta to manage this chat. Click to learn more.",
          ),
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
            text: s._(
              /*BTDS*/ "WhatsApp secures your messages and calls with this account.",
            ),
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
              text: s._(
                /*BTDS*/ "This business works with other companies to manage this chat.",
              ),
              handleClick: c,
            }),
            header: { type: "none" },
            onClick: c,
          };
        }
        case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB: {
          var d = t.isIAS()
              ? s._(
                  /*BTDS*/ "WhatsApp Surveys uses a secure service from Meta to manage this chat.",
                )
              : s._(
                  /*BTDS*/ "This business uses a secure service from Meta to manage this chat.",
                ),
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
