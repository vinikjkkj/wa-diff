__d(
  "WAWebReportMsgPopup.react",
  [
    "fbt",
    "WAWebBlockBusinessPopup.react",
    "WAWebBlocklistUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebComplianceReportPopupLoadable",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebFrontendMsgGetters",
    "WAWebGroupHistoryUtils",
    "WAWebModalManager",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
    "WAWebName.react",
    "WAWebPrivateMessageComplianceUtils",
    "WAWebReportPopupBase.react",
    "WAWebSendSpamChatAction",
    "WAWebUseBusinessProfile.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebContactFormattedUsernameOrPhoneByChat",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        a = e.msg,
        i = e.spamFlow,
        l = o("WAWebFrontendMsgGetters").getChat(a),
        c =
          (t = o("WAWebUseBusinessProfile.react").useBusinessProfile(
            l.contact.id,
            ["isBizBot3p"],
          )) != null
            ? t
            : {},
        m = c.isBizBot3p,
        p = m === void 0 ? !1 : m,
        _ = d(a),
        f = o("useWAWebContactValues").useContactValues(_.id, [
          o("WAWebFrontendContactGetters").getIsContactBlocked,
        ]),
        g = f[0],
        h = r("useWAWebContactFormattedUsernameOrPhoneByChat")(l, _),
        y = h.formattedUsernameOrPhone,
        C = h.isPhoneNumberForceMasked,
        b = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            yield o("WAWebSendSpamChatAction")
              .sendMessageReport(a, i)
              .then(function (e) {
                o("WAWebModalManager").ModalManager.close();
                var t = o(
                  "WAWebPrivateMessageComplianceUtils",
                ).getPrivateMessageReportComplianceConfig({
                  reportId: e,
                  msg: a,
                });
                t != null &&
                  o("WAWebModalManager").ModalManager.open(
                    u.jsx(
                      o("WAWebComplianceReportPopupLoadable")
                        .ComplianceReportPopupLoadable,
                      {
                        learnMoreUrl: t.learnMoreUrl,
                        bannerText: t.bannerText,
                        actionText: t.actionText,
                        showViewReport: t.showViewReport,
                      },
                    ),
                  );
              });
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        v = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (p || l.contact.isBusiness) {
              var e;
              (yield o("WAWebSendSpamChatAction")
                .sendMessageReport(a, i)
                .then(function (t) {
                  e = t;
                }),
                o("WAWebModalManager").ModalManager.close());
              var t = o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(
                i,
              );
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebBlockBusinessPopup.react"), {
                  chat: l,
                  blockEntryPoint: t,
                  reportId: e,
                  withReport: !1,
                }),
              );
              return;
            }
            o("WAWebSendSpamChatAction").sendMessageReportBlock(a, i);
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        S = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
          testid: void 0,
          children: r("WAWebFbtCommon")("Learn more"),
        }),
        R =
          C === !0
            ? u.jsx(o("WAWebEmojiText.react").EmojiText, {
                text: y,
                direction: "auto",
                inlineblock: !0,
              })
            : u.jsx(o("WAWebName.react").Name, { contact: _ }),
        L = function () {
          return p
            ? s._(
                /*BTDS*/ "This message will be sent to WhatsApp. This AI won't know you reported or blocked them. {link to learn more}",
                [s._param("link to learn more", S)],
              )
            : l.contact.isBusiness
              ? s._(
                  /*BTDS*/ "This message will be sent to WhatsApp. This business won't know you reported or blocked them. {link to learn more}",
                  [s._param("link to learn more", S)],
                )
              : o("WAWebChatGetters").getIsGroup(l) &&
                  o(
                    "WAWebGroupHistoryUtils",
                  ).shouldReportGroupHistoryBundleSender(a)
                ? s._(
                    /*BTDS*/ "This message was sent to you by {name of the group history bundle sender} as part of message history. This message will be forwarded to WhatsApp. No one in this group will be notified. {link to learn more}",
                    [
                      s._param("name of the group history bundle sender", R),
                      s._param("link to learn more", S),
                    ],
                  )
                : o("WAWebChatGetters").getIsGroup(l) &&
                    !o("WAWebChatGroupUtils").isCommunityAnnouncementGroup(l) &&
                    o("WAWebBlocklistUtils").isRBIForGroupsEnabled()
                  ? s._(
                      /*BTDS*/ "This message will be forwarded to WhatsApp. No one in this group will be notified. {link to learn more}",
                      [s._param("link to learn more", S)],
                    )
                  : s._(
                      /*BTDS*/ "This message will be sent to WhatsApp. This person won't know you reported or blocked them. {link to learn more}",
                      [s._param("link to learn more", S)],
                    );
        };
      return u.jsx(o("WAWebReportPopupBase.react").ReportPopupBase, {
        hasAdditionalAction: !g,
        reportSubText: L(),
        additionalActionLabelText: o(
          "WAWebReportPopupBase.react",
        ).getBlockLabelText(p, R),
        additionalActionSubText: o(
          "WAWebReportPopupBase.react",
        ).getBlockSubText({
          isBizBot3p: p,
          isBusiness: l.contact.isBusiness,
          isGroup: o("WAWebChatGetters").getIsGroup(l),
          isCommunityAnnouncementGroup: o(
            "WAWebChatGroupUtils",
          ).isCommunityAnnouncementGroup(l),
        }),
        onSendReport: b,
        onSendReportAndAdditionalAction: v,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = o("WAWebMsgGetters").getGroupHistoryBundleMessageKey(e);
      if (
        o("WAWebGroupHistoryUtils").shouldReportGroupHistoryBundleSender(e) &&
        t != null
      ) {
        var n = o("WAWebMsgCollection").MsgCollection.get(t);
        if (n) return o("WAWebFrontendMsgGetters").getSenderObj(n);
      }
      return o("WAWebFrontendMsgGetters").getSenderObj(e);
    }
    l.default = c;
  },
  226,
);
