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
    "WAWebRecalledIcon.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(18),
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
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = ["add", "remove", "change:name"]), (t[1] = h))
        : (h = t[1]);
      var y, C;
      t[2] !== p || t[3] !== _ || t[4] !== f || t[5] !== g || t[6] !== m
        ? ((y = function () {
            return o("WAWebFormatRevokedMsg").formatRevokedMsgFor({
              isNewsletterMsg: p,
              isRevokedByMe: _,
              isSentByMe: f,
              revokeSender: g,
              subtype: m,
            });
          }),
          (C = [p, _, f, g, m]),
          (t[2] = p),
          (t[3] = _),
          (t[4] = f),
          (t[5] = g),
          (t[6] = m),
          (t[7] = y),
          (t[8] = C))
        : ((y = t[7]), (C = t[8]));
      var b = r("useWAWebEventTargetValue")(
          o("WAWebContactCollection").ContactCollection,
          h,
          y,
          C,
        ),
        v;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s.jsx(r("WAWebFlexItem.react"), {
            xstyle: u.icon,
            children: s.jsx(o("WAWebRecalledIcon.react").RecalledIcon, {}),
          })),
          (t[9] = v))
        : (v = t[9]);
      var S;
      t[10] !== i || t[11] !== b
        ? ((S = s.jsxs(o("WAWebFlex.react").FlexRow, {
            children: [
              v,
              s.jsx(r("WAWebFlexItem.react"), {
                xstyle: u.text,
                children: s.jsx(r("WAWebMessageSpacerText.react"), {
                  msgKey: i,
                  theme: "placeholder",
                  children: b,
                }),
              }),
            ],
          })),
          (t[10] = i),
          (t[11] = b),
          (t[12] = S))
        : (S = t[12]);
      var R;
      return (
        t[13] !== n || t[14] !== a || t[15] !== i || t[16] !== S
          ? ((R = s.jsx(r("WAWebMessageTextBubble.react"), {
              msgKey: i,
              displayType: a,
              displayAuthor: n,
              children: S,
            })),
            (t[13] = n),
            (t[14] = a),
            (t[15] = i),
            (t[16] = S),
            (t[17] = R))
          : (R = t[17]),
        R
      );
    }
    l.default = c;
  },
  98,
);
