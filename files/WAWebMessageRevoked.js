__d(
  "WAWebMessageRevoked",
  [
    "WAWebContactCollection",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFormatRevokedMsg",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgCasts",
    "WAWebMsgGetters",
    "WDSIconIcBlock.react",
    "react",
    "useWAWebChatOrgIdentityRefresh",
    "useWAWebEventTargetValue",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        icon: {
          display: "x1rg5ohu",
          color: "xhslqc4",
          minWidth: "xnei2rj",
          marginInlineStart: "xe9ewy2",
          marginInlineEnd: "xcknrev",
          $$css: !0,
        },
        text: { marginTop: "xr9ek0c", marginBottom: "xjpr12u", $$css: !0 },
      };
    function c(e) {
      var t,
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msgKey,
        l = o("useWAWebMsgValues").useMsgValues(
          i,
          o("WAWebMsgCasts").castToRevokedMsg,
          [
            (t = o("WAWebMsgGetters")).getSubtype,
            t.getIsNewsletterMsg,
            t.getIsRevokedByMe,
            t.getIsSentByMe,
            t.getRevokeSender,
          ],
        ),
        c = l[0],
        d = l[1],
        m = l[2],
        p = l[3],
        _ = l[4];
      r("useWAWebChatOrgIdentityRefresh")(i.remote);
      var f = r("useWAWebEventTargetValue")(
        o("WAWebContactCollection").ContactCollection,
        ["add", "remove", "change:name", "change:orgMemberName"],
        function () {
          return o("WAWebFormatRevokedMsg").formatRevokedMsgFor({
            isNewsletterMsg: d,
            isRevokedByMe: m,
            isSentByMe: p,
            revokeSender: _,
            subtype: c,
          });
        },
        [d, m, p, _, c],
      );
      return s.jsx(r("WAWebMessageTextBubble.react"), {
        msgKey: i,
        displayType: a,
        displayAuthor: n,
        children: s.jsxs(o("WAWebFlex.react").FlexRow, {
          children: [
            s.jsx(r("WAWebFlexItem.react"), {
              xstyle: u.icon,
              children: s.jsx(r("WDSIconIcBlock.react"), {
                height: 22,
                testid: "recalled",
                width: 22,
              }),
            }),
            s.jsx(r("WAWebFlexItem.react"), {
              xstyle: u.text,
              children: s.jsx(r("WAWebMessageSpacerText.react"), {
                msgKey: i,
                theme: "placeholder",
                children: f,
              }),
            }),
          ],
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
