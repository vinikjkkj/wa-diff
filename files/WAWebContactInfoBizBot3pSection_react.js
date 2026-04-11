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
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = { secondaryColor: { color: "xhslqc4", $$css: !0 } };
    function d() {
      var e = o("react-compiler-runtime").c(3);
      r("vulture")("SfWebLP1tzy03l4lDLgRjOzio9k=");
      var t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "span",
            children: s._(/*BTDS*/ "About managing AI chats"),
          })),
          (e[0] = t))
        : (t = e[0]);
      var n = t,
        a;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            children: s._(
              /*BTDS*/ "Learn about how to download and delete chats received by Meta and the developer",
            ),
          })),
          (e[1] = a))
        : (a = e[1]);
      var i = a,
        l;
      if (e[2] === Symbol.for("react.memo_cache_sentinel")) {
        var d = u.jsx(o("WAWebBotDataSharingIcon.react").BotDataSharingIcon, {
            iconXstyle: c.secondaryColor,
            height: 18,
            width: 18,
          }),
          p = m;
        ((l = u.jsx(o("WAWebChatInfoDrawerRow.react").ChatInfoDrawerRow, {
          icon: d,
          onClick: p,
          secondaryTitle: i,
          title: n,
        })),
          (e[2] = l));
      } else l = e[2];
      return l;
    }
    function m() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebFaqUrl").getBizBot3pDataSharingUrl(),
      );
    }
    l.default = d;
  },
  226,
);
