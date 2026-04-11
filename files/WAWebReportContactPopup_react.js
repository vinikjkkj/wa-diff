__d(
  "WAWebReportContactPopup.react",
  [
    "fbt",
    "WAWebBlockBusinessPopup.react",
    "WAWebBlocklistUtils",
    "WAWebChatGetters",
    "WAWebChatGroupUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebReportPopupBase.react",
    "WAWebSendSpamChatAction",
    "WAWebUseBusinessProfile.react",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t,
        a = e.chat,
        i = e.spamFlow,
        l =
          (t = o("WAWebUseBusinessProfile.react").useBusinessProfile(
            a.contact.id,
            ["isBizBot3p"],
          )) != null
            ? t
            : {},
        c = l.isBizBot3p,
        d = c === void 0 ? !1 : c,
        m = o("useWAWebContactValues").useContactValues(a.contact.id, [
          o("WAWebFrontendContactGetters").getIsContactBlocked,
        ]),
        p = m[0],
        _ = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            (yield o("WAWebSendSpamChatAction").sendReport({
              chat: a,
              spamFlow: i,
            }),
              o("WAWebModalManager").ModalManager.close());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        f = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            if (d || a.contact.isBusiness) {
              (yield o("WAWebSendSpamChatAction").sendReport({
                chat: a,
                spamFlow: i,
              }),
                o("WAWebModalManager").ModalManager.close());
              var e = o("WAWebBlocklistUtils").getBlockEntryPointFromSpamFlow(
                i,
              );
              o("WAWebModalManager").ModalManager.open(
                u.jsx(r("WAWebBlockBusinessPopup.react"), {
                  chat: a,
                  blockEntryPoint: e,
                  withReport: !1,
                }),
              );
              return;
            }
            (o("WAWebSendSpamChatAction").sendReportBlock({
              chat: a,
              spamFlow: i,
            }),
              o("WAWebModalManager").ModalManager.close());
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        g = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
          href: o("WAWebFaqUrl").getBlockingReportingFaqUrl(),
          testid: void 0,
          children: r("WAWebFbtCommon")("Learn more"),
        }),
        h = u.jsx(o("WAWebName.react").Name, { contact: a.contact }),
        y = function () {
          return d
            ? s._(
                /*BTDS*/ "The last 5 messages in this chat will be sent to WhatsApp. This AI won't know you reported or blocked them. {link to learn more}",
                [s._param("link to learn more", g)],
              )
            : a.contact.isBusiness
              ? s._(
                  /*BTDS*/ "The last 5 messages in this chat will be sent to WhatsApp. This business won't know you reported or blocked them. {link to learn more}",
                  [s._param("link to learn more", g)],
                )
              : s._(
                  /*BTDS*/ "The last 5 messages in this chat will be sent to WhatsApp. This person won't know you reported or blocked them. {link to learn more}",
                  [s._param("link to learn more", g)],
                );
        };
      return u.jsx(o("WAWebReportPopupBase.react").ReportPopupBase, {
        hasAdditionalAction: !p,
        reportSubText: y(),
        additionalActionLabelText: o(
          "WAWebReportPopupBase.react",
        ).getBlockLabelText(d, h),
        additionalActionSubText: o(
          "WAWebReportPopupBase.react",
        ).getBlockSubText({
          isBizBot3p: d,
          isBusiness: a.contact.isBusiness,
          isGroup: o("WAWebChatGetters").getIsGroup(a),
          isCommunityAnnouncementGroup: o(
            "WAWebChatGroupUtils",
          ).isCommunityAnnouncementGroup(a),
        }),
        onSendReport: _,
        onSendReportAndAdditionalAction: f,
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
