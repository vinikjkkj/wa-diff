__d(
  "WAWebMessageRevoked",
  [
    "WAWebContactCollection",
    "WAWebFlex.react",
    "WAWebFlexItem.react",
    "WAWebFormatRevokedMsg",
    "WAWebMessageSpacerText.react",
    "WAWebMessageTextBubble.react",
    "WAWebMsgGetters",
    "WDSIconIcBlock.react",
    "react",
    "react-compiler-runtime",
    "useWAWebChatOrgMemberNames",
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
      var t = o("react-compiler-runtime").c(19),
        n = e.displayAuthor,
        a = e.displayType,
        i = e.msgKey,
        l;
      if (t[0] === Symbol.for("react.memo_cache_sentinel")) {
        var c;
        ((l = [
          (c = o("WAWebMsgGetters")).getSubtype,
          c.getIsNewsletterMsg,
          c.getIsRevokedByMe,
          c.getIsSentByMe,
          c.getRevokeSender,
        ]),
          (t[0] = l));
      } else l = t[0];
      var d = o("useWAWebMsgValues").useMsgValues(i, l),
        m = d[0],
        p = d[1],
        _ = d[2],
        f = d[3],
        g = d[4],
        h = r("useWAWebChatOrgMemberNames")(i.remote),
        y;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = ["add", "remove", "change:name"]), (t[1] = y))
        : (y = t[1]);
      var C, b;
      t[2] !== h ||
      t[3] !== p ||
      t[4] !== _ ||
      t[5] !== f ||
      t[6] !== g ||
      t[7] !== m
        ? ((C = function () {
            return o("WAWebFormatRevokedMsg").formatRevokedMsgFor({
              getOrgName: h,
              isNewsletterMsg: p,
              isRevokedByMe: _,
              isSentByMe: f,
              revokeSender: g,
              subtype: m,
            });
          }),
          (b = [h, p, _, f, g, m]),
          (t[2] = h),
          (t[3] = p),
          (t[4] = _),
          (t[5] = f),
          (t[6] = g),
          (t[7] = m),
          (t[8] = C),
          (t[9] = b))
        : ((C = t[8]), (b = t[9]));
      var v = r("useWAWebEventTargetValue")(
          o("WAWebContactCollection").ContactCollection,
          y,
          C,
          b,
        ),
        S;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = s.jsx(r("WAWebFlexItem.react"), {
            xstyle: u.icon,
            children: s.jsx(r("WDSIconIcBlock.react"), {
              height: 22,
              testid: "recalled",
              width: 22,
            }),
          })),
          (t[10] = S))
        : (S = t[10]);
      var R;
      t[11] !== i || t[12] !== v
        ? ((R = s.jsxs(o("WAWebFlex.react").FlexRow, {
            children: [
              S,
              s.jsx(r("WAWebFlexItem.react"), {
                xstyle: u.text,
                children: s.jsx(r("WAWebMessageSpacerText.react"), {
                  msgKey: i,
                  theme: "placeholder",
                  children: v,
                }),
              }),
            ],
          })),
          (t[11] = i),
          (t[12] = v),
          (t[13] = R))
        : (R = t[13]);
      var L;
      return (
        t[14] !== n || t[15] !== a || t[16] !== i || t[17] !== R
          ? ((L = s.jsx(r("WAWebMessageTextBubble.react"), {
              msgKey: i,
              displayType: a,
              displayAuthor: n,
              children: R,
            })),
            (t[14] = n),
            (t[15] = a),
            (t[16] = i),
            (t[17] = R),
            (t[18] = L))
          : (L = t[18]),
        L
      );
    }
    l.default = c;
  },
  98,
);
