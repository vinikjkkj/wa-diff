__d(
  "WAWebContactInfoEncryptionSection",
  [
    "fbt",
    "WAWebABPropsSaga",
    "WAWebABPropsSupportGroup",
    "WAWebAeaAccountState",
    "WAWebAeaRollout",
    "WAWebChatCollection",
    "WAWebChatGetters",
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
    "useWAWebChatValues",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(16),
        i = e.contactId,
        l = e.onVerificationClick,
        c;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = [
            o("WAWebContactGetters").getPrivacyMode,
            o("WAWebContactGetters").getIsHosted,
          ]),
          (a[0] = c))
        : (c = a[0]);
      var m = o("useWAWebContactValues").useContactValues(i, c),
        p = m[0],
        _ = m[1],
        f =
          (t = o("useWAWebChatValues").useOptionalChatValues(
            (n = o("WAWebChatCollection").ChatCollection.getLatestChatForWid(
              i,
            )) == null
              ? void 0
              : n.id,
            [o("WAWebChatGetters").getAeaThreadState],
          )) != null
            ? t
            : [null],
        g = f[0],
        h;
      a[1] !== g
        ? ((h = o("WAWebAeaRollout").isAeaEnforcementEnabled()
            ? o("WAWebAeaAccountState").AeaAccountState.cast(g)
            : null),
          (a[1] = g),
          (a[2] = h))
        : (h = a[2]);
      var y = h,
        C;
      if (a[3] !== y || a[4] !== i || a[5] !== _ || a[6] !== p) {
        var b = o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(p),
          v =
            y === o("WAWebAeaAccountState").AeaAccountState.E2EE &&
            (_ === !0 ||
              b === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB) &&
            o(
              "WAWebUserPrefsMultiDevice",
            ).getIsHostedMeAccountFromLocalStorage() !== !0;
        ((C = v
          ? null
          : d(
              y === o("WAWebAeaAccountState").AeaAccountState.NON_E2EE &&
                b === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE
                ? o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB
                : b,
              i,
              _ === !0 ||
                y === o("WAWebAeaAccountState").AeaAccountState.HYBRID_E2EE,
            )),
          (a[3] = y),
          (a[4] = i),
          (a[5] = _),
          (a[6] = p),
          (a[7] = C));
      } else C = a[7];
      var S = C;
      if (S) {
        var R;
        return (
          a[8] !== S.header || a[9] !== S.onClick || a[10] !== S.text
            ? ((R = u.jsx(r("WAWebSecurityDrawerSection.react"), {
                header: S.header,
                text: S.text,
                onClick: S.onClick,
              })),
              (a[8] = S.header),
              (a[9] = S.onClick),
              (a[10] = S.text),
              (a[11] = R))
            : (R = a[11]),
          R
        );
      }
      var L, E;
      a[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = s._(
            /*BTDS*/ "Messages are end-to-end encrypted. Click to verify.",
          )),
          (E = { type: "encryption" }),
          (a[12] = L),
          (a[13] = E))
        : ((L = a[12]), (E = a[13]));
      var k;
      return (
        a[14] !== l
          ? ((k = u.jsx(r("WAWebSecurityDrawerSection.react"), {
              onClick: l,
              text: L,
              header: E,
            })),
            (a[14] = l),
            (a[15] = k))
          : (k = a[15]),
        k
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
