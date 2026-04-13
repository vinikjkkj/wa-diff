__d(
  "WAWebMessageButtons.react",
  [
    "cx",
    "WAWebClassnames",
    "WAWebFrontendMsgGetters",
    "WAWebKeyboardListHotKeys.react",
    "WAWebMiscGatingUtils",
    "WAWebMsgGetters",
    "WAWebSendButtonsMsgReplyChatAction",
    "WAWebSendMsgResultAction",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
    "useWAWebMsgValues",
    "useWAWebSetModelValue",
    "useWAWebStaticButtonA11y",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = 3,
      d = 10;
    function m(e) {
      var t = o("react-compiler-runtime").c(17),
        n = e.msg,
        a = e.replyButton,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [o("WAWebMsgGetters").getIsSentByMe]), (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebMsgValues").useMsgValues(n.id, i),
        s = l[0],
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = ["selected", "displayText", "id"]), (t[1] = c))
        : (c = t[1]);
      var d = o("useWAWebModelValues").useModelValues(a, c),
        m;
      t[2] !== n
        ? ((m = o("WAWebFrontendMsgGetters").getChat(n)),
          (t[2] = n),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _ = o("useWAWebSetModelValue").useSetModelValue(a, "selected"),
        f = a.displayText,
        g = a.selected,
        h;
      t[4] !== p || t[5] !== n || t[6] !== d || t[7] !== _
        ? ((h = function () {
            (_(!0),
              r("WAWebSendButtonsMsgReplyChatAction")(n, d, p)
                .then(function (e) {
                  e.messageSendResult !==
                    o("WAWebSendMsgResultAction").SendMsgResult.OK && _(!1);
                })
                .catch(function () {
                  _(!1);
                }));
          }),
          (t[4] = p),
          (t[5] = n),
          (t[6] = d),
          (t[7] = _),
          (t[8] = h))
        : (h = t[8]);
      var y = h,
        C;
      t[9] !== g
        ? ((C = { disabled: g }), (t[9] = g), (t[10] = C))
        : (C = t[10]);
      var b = r("useWAWebStaticButtonA11y")(y, C),
        v = b[0],
        S = b[1],
        R;
      if (
        t[11] !== S ||
        t[12] !== v ||
        t[13] !== f ||
        t[14] !== s ||
        t[15] !== g
      ) {
        var L, E;
        ((R = f
          ? u.jsx(
              "div",
              babelHelpers.extends(
                {
                  ref: v,
                  className: o(
                    "WAWebClassnames",
                  ).classnamesConvertMeToStylexPlease(
                    ((L = {}),
                    (L._aheg = g),
                    (L[
                      o(
                        "WAWebKeyboardListHotKeys.react",
                      ).LIST_FOCUSABLE_ITEM_CLASS_NAME
                    ] =
                      !g &&
                      !o(
                        "WAWebMiscGatingUtils",
                      ).messageListA11yRedesignEnabled()),
                    (L._ahef = !0),
                    L),
                  ),
                },
                S,
                {
                  children: u.jsx("div", {
                    className: o(
                      "WAWebClassnames",
                    ).classnamesConvertMeToStylexPlease(
                      ((E = {}), (E._ahej = s), (E._ahei = !0), E),
                    ),
                    children: u.jsx("span", { children: f }),
                  }),
                },
              ),
            )
          : null),
          (t[11] = S),
          (t[12] = v),
          (t[13] = f),
          (t[14] = s),
          (t[15] = g),
          (t[16] = R));
      } else R = t[16];
      return R;
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.msg,
        r = n.replyButtons;
      if (
        r == null ||
        r.length === 0 ||
        (n.id.fromMe && o("WAWebMsgGetters").getBizBotType(n) != null)
      )
        return null;
      var a;
      if (t[0] !== r) {
        var i,
          l = r.some(_);
        ((a = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((i = {}),
          (i._aheh = r.length >= c || l),
          (i._ahee = l),
          (i._ahed = !0),
          i),
        )),
          (t[0] = r),
          (t[1] = a));
      } else a = t[1];
      var s;
      if (t[2] !== n || t[3] !== r) {
        var d;
        (t[5] !== n
          ? ((d = function (t, r) {
              return u.jsx(m, { msg: n, replyButton: t }, r);
            }),
            (t[5] = n),
            (t[6] = d))
          : (d = t[6]),
          (s = r.map(d)),
          (t[2] = n),
          (t[3] = r),
          (t[4] = s));
      } else s = t[4];
      var p;
      return (
        t[7] !== a || t[8] !== s
          ? ((p = u.jsx("div", { className: a, children: s })),
            (t[7] = a),
            (t[8] = s),
            (t[9] = p))
          : (p = t[9]),
        p
      );
    }
    function _(e) {
      return e.displayText.length > d;
    }
    l.default = p;
  },
  98,
);
