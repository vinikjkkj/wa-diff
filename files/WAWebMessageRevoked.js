__d(
  "WAWebMessageRevoked",
  [
    "WAWebChatCollection",
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
      var t = o("react-compiler-runtime").c(21),
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
        h;
      t[1] !== i.remote
        ? ((h = o("WAWebChatCollection").ChatCollection.get(i.remote)),
          (t[1] = i.remote),
          (t[2] = h))
        : (h = t[2]);
      var y = r("useWAWebChatOrgMemberNames")(h),
        C;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = ["add", "remove", "change:name"]), (t[3] = C))
        : (C = t[3]);
      var b, v;
      t[4] !== y ||
      t[5] !== p ||
      t[6] !== _ ||
      t[7] !== f ||
      t[8] !== g ||
      t[9] !== m
        ? ((b = function () {
            return o("WAWebFormatRevokedMsg").formatRevokedMsgFor({
              getOrgName: y,
              isNewsletterMsg: p,
              isRevokedByMe: _,
              isSentByMe: f,
              revokeSender: g,
              subtype: m,
            });
          }),
          (v = [y, p, _, f, g, m]),
          (t[4] = y),
          (t[5] = p),
          (t[6] = _),
          (t[7] = f),
          (t[8] = g),
          (t[9] = m),
          (t[10] = b),
          (t[11] = v))
        : ((b = t[10]), (v = t[11]));
      var S = r("useWAWebEventTargetValue")(
          o("WAWebContactCollection").ContactCollection,
          C,
          b,
          v,
        ),
        R;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s.jsx(r("WAWebFlexItem.react"), {
            xstyle: u.icon,
            children: s.jsx(r("WDSIconIcBlock.react"), {
              height: 22,
              testid: "recalled",
              width: 22,
            }),
          })),
          (t[12] = R))
        : (R = t[12]);
      var L;
      t[13] !== i || t[14] !== S
        ? ((L = s.jsxs(o("WAWebFlex.react").FlexRow, {
            children: [
              R,
              s.jsx(r("WAWebFlexItem.react"), {
                xstyle: u.text,
                children: s.jsx(r("WAWebMessageSpacerText.react"), {
                  msgKey: i,
                  theme: "placeholder",
                  children: S,
                }),
              }),
            ],
          })),
          (t[13] = i),
          (t[14] = S),
          (t[15] = L))
        : (L = t[15]);
      var E;
      return (
        t[16] !== n || t[17] !== a || t[18] !== i || t[19] !== L
          ? ((E = s.jsx(r("WAWebMessageTextBubble.react"), {
              msgKey: i,
              displayType: a,
              displayAuthor: n,
              children: L,
            })),
            (t[16] = n),
            (t[17] = a),
            (t[18] = i),
            (t[19] = L),
            (t[20] = E))
          : (E = t[20]),
        E
      );
    }
    l.default = c;
  },
  98,
);
