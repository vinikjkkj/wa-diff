__d(
  "WAWebContactInfoBizBot3pSection.react",
  [
    "fbt",
    "WAWebBotDataSharingIcon.react",
    "WAWebChatInfoDrawerRow.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebText.react",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d() {
      r("vulture")("SfWebLP1tzy03l4lDLgRjOzio9k=");
      var e = u.jsx(o("WAWebText.react").WAWebTextTitle, {
          as: "span",
          children: s._(/*BTDS*/ "About managing AI chats"),
        }),
        t = u.jsx(o("WAWebText.react").WAWebTextMuted, {
          children: s._(
            /*BTDS*/ "Learn about how to download and delete chats received by Meta and the developer",
          ),
        }),
        n = u.jsx(o("WAWebBotDataSharingIcon.react").BotDataSharingIcon, {
          iconXstyle: c.secondaryColor,
          height: 18,
          width: 18,
        }),
        a = function () {
          o("WAWebExternalLink.react").openExternalLink(
            o("WAWebFaqUrl").getBizBot3pDataSharingUrl(),
          );
        };
      return u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
        icon: n,
        onClick: a,
        secondaryTitle: t,
        title: e,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
