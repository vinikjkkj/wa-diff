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
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d() {
      var e = o("react-compiler-runtime").c(8),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = o(
            "WAWebBizBotConsumerContentVariant",
          ).getBizBotConsumerContentVariant()),
          (e[0] = t))
        : (t = e[0]);
      var n = t,
        a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "span",
            children: s._(/*BTDS*/ "This chat uses AI from Meta"),
          })),
          (e[1] = a))
        : (a = e[1]);
      var i = a,
        l;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            children:
              n ===
              o("WAWebBizBotConsumerContentVariant")
                .BizBotConsumerContentVariant.BRAZIL
                ? s._(
                    /*BTDS*/ "AI from Meta receives messages and may use them to improve AI quality and generate messages for this business.",
                  )
                : s._(
                    /*BTDS*/ "AI from Meta receives messages to improve AI quality and generate messages for this business.",
                  ),
          })),
          (e[2] = l))
        : (l = e[2]);
      var d = l,
        _;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ =
            n ===
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
                )),
          (e[3] = _))
        : (_ = e[3]);
      var f = _,
        g = p,
        h;
      e[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "span",
            children: s._(/*BTDS*/ "Manage AI chats"),
          })),
          (e[4] = h))
        : (h = e[4]);
      var y = h,
        C;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            children: s._(
              /*BTDS*/ "Learn how to download or delete Meta's copy of your AI chats. Click to learn more.",
            ),
          })),
          (e[5] = C))
        : (C = e[5]);
      var b = C,
        v;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = u.jsx(o("WAWebBotDataSharingIcon.react").BotDataSharingIcon, {
            iconXstyle: c.secondaryColor,
            height: 20,
            width: 20,
          })),
          (e[6] = v))
        : (v = e[6]);
      var S = v,
        R = m,
        L;
      return (
        e[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = u.jsxs(u.Fragment, {
              children: [
                u.jsx(
                  o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
                  {
                    icon: f,
                    onClick: g,
                    secondaryTitle: d,
                    testid: void 0,
                    title: i,
                  },
                ),
                u.jsx(
                  o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRowRefreshed,
                  {
                    icon: S,
                    onClick: R,
                    secondaryTitle: b,
                    testid: void 0,
                    title: y,
                  },
                ),
              ],
            })),
            (e[7] = L))
          : (L = e[7]),
        L
      );
    }
    function m() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getBizBot1pLearnMoreUrl(),
      );
    }
    function p() {
      o("WAWebModalManager").ModalManager.open(
        u.jsx(r("WAWebBizBot1pLearnMore.react"), {}),
      );
    }
    l.default = d;
  },
  226,
);
