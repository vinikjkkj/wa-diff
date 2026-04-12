__d(
  "WAWebContactInfoBizBot1pSection.react",
  [
    "fbt",
    "WAWebBizBot1pLearnMore.react",
    "WAWebBizBotConsumerContentVariant",
    "WAWebBotDataSharingIcon.react",
    "WAWebChatInfoDrawerRow.react",
    "WAWebDoubleChevronInCircleIcon.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebModalManager",
    "WAWebText.react",
    "WDSIconWdsIcAiFilled.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d() {
      var e = o(
          "WAWebBizBotConsumerContentVariant",
        ).getBizBotConsumerContentVariant(),
        t = u.jsx(o("WAWebText.react").WAWebTextTitle, {
          as: "span",
          children: s._(/*BTDS*/ "This chat uses AI from Meta"),
        }),
        n = u.jsx(o("WAWebText.react").WAWebTextMuted, {
          children:
            e ===
            o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant
              .BRAZIL
              ? s._(
                  /*BTDS*/ "AI from Meta receives messages and may use them to improve AI quality and generate messages for this business.",
                )
              : s._(
                  /*BTDS*/ "AI from Meta receives messages to improve AI quality and generate messages for this business.",
                ),
        }),
        a =
          e ===
          o("WAWebBizBotConsumerContentVariant").BizBotConsumerContentVariant
            .INDIA
            ? u.jsx(r("WDSIconWdsIcAiFilled.react"), {
                colorName: "contentDeemphasized",
                height: 20,
                width: 20,
              })
            : u.jsx(
                o("WAWebDoubleChevronInCircleIcon.react")
                  .DoubleChevronInCircleIcon,
                { iconXstyle: c.secondaryColor, height: 20, width: 20 },
              ),
        i = function () {
          o("WAWebModalManager").ModalManager.open(
            u.jsx(r("WAWebBizBot1pLearnMore.react"), {}),
          );
        },
        l = u.jsx(o("WAWebText.react").WAWebTextTitle, {
          as: "span",
          children: s._(/*BTDS*/ "Manage AI chats"),
        }),
        d = u.jsx(o("WAWebText.react").WAWebTextMuted, {
          children: s._(
            /*BTDS*/ "Learn how to download or delete Meta's copy of your AI chats. Click to learn more.",
          ),
        }),
        m = u.jsx(o("WAWebBotDataSharingIcon.react").BotDataSharingIcon, {
          iconXstyle: c.secondaryColor,
          height: 20,
          width: 20,
        }),
        p = function () {
          o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getBizBot1pLearnMoreUrl(),
          );
        };
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
            icon: a,
            onClick: i,
            secondaryTitle: n,
            testid: void 0,
            title: t,
          }),
          u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed, {
            icon: m,
            onClick: p,
            secondaryTitle: d,
            testid: void 0,
            title: l,
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
