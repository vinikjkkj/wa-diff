__d(
  "WAWebMessageBizContentPlaceholder",
  [
    "WAWebBizContentPlaceholderGatingUtils",
    "WAWebBizContentPlaceholderMsgData.flow",
    "WAWebClickableLink.react",
    "WAWebExternalLink.react",
    "WAWebFbtCommon",
    "WAWebFormatMsgText",
    "WAWebMessagePlaceholder.react",
    "WAWebMessageTextBubble.react",
    "WAWebUnsupportedMessage",
    "WDSIconIcKey.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u() {
      o("WAWebExternalLink.react").openExternalLink(
        o("WAWebBizContentPlaceholderGatingUtils").getLearnMoreLink(),
      );
    }
    var c = s.jsx(r("WAWebClickableLink.react"), {
      testid: "biz-content-placeholder-learn-more",
      onClick: u,
      children: r("WAWebFbtCommon")("Learn more"),
    });
    function d(e) {
      var t = e.displayAuthor,
        n = e.msg,
        a = s.jsx(r("WAWebUnsupportedMessage"), {
          msg: n,
          displayAuthor: t,
          hideUpdateButton: !0,
        }),
        i = n.unsafe();
      if (i.bizContentPlaceholderType == null) return a;
      switch (i.bizContentPlaceholderType) {
        case o("WAWebBizContentPlaceholderMsgData.flow")
          .BizContentPlaceholderType.MASK_LINKED_DEVICES:
          return s.jsx(r("WAWebMessageTextBubble.react"), {
            msg: n,
            displayAuthor: t,
            children: s.jsxs(r("WAWebMessagePlaceholder.react"), {
              Icon: s.jsx(r("WDSIconIcKey.react"), {}),
              msg: n.unsafe(),
              children: [r("WAWebFormatMsgText")({ msg: n.unsafe() }), " ", c],
            }),
          });
      }
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
