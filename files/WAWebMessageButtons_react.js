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
      var t,
        n,
        a = e.msg,
        i = e.replyButton,
        l = o("useWAWebMsgValues").useMsgValues(a.id, [
          o("WAWebMsgGetters").getIsSentByMe,
        ]),
        s = l[0],
        c = o("useWAWebModelValues").useModelValues(i, [
          "selected",
          "displayText",
          "id",
        ]),
        d = o("WAWebFrontendMsgGetters").getChat(a),
        m = o("useWAWebSetModelValue").useSetModelValue(i, "selected"),
        p = i.displayText,
        _ = i.selected,
        f = function () {
          (m(!0),
            r("WAWebSendButtonsMsgReplyChatAction")(a, c, d)
              .then(function (e) {
                e.messageSendResult !==
                  o("WAWebSendMsgResultAction").SendMsgResult.OK && m(!1);
              })
              .catch(function () {
                m(!1);
              }));
        },
        g = r("useWAWebStaticButtonA11y")(f, { disabled: _ }),
        h = g[0],
        y = g[1];
      return p
        ? u.jsx(
            "div",
            babelHelpers.extends(
              {
                ref: h,
                className: o(
                  "WAWebClassnames",
                ).classnamesConvertMeToStylexPlease(
                  ((t = {}),
                  (t._aheg = _),
                  (t[
                    o(
                      "WAWebKeyboardListHotKeys.react",
                    ).LIST_FOCUSABLE_ITEM_CLASS_NAME
                  ] =
                    !_ &&
                    !o(
                      "WAWebMiscGatingUtils",
                    ).messageListA11yRedesignEnabled()),
                  (t._ahef = !0),
                  t),
                ),
              },
              y,
              {
                children: u.jsx("div", {
                  className: o(
                    "WAWebClassnames",
                  ).classnamesConvertMeToStylexPlease(
                    ((n = {}), (n._ahej = s), (n._ahei = !0), n),
                  ),
                  children: u.jsx("span", { children: p }),
                }),
              },
            ),
          )
        : null;
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t,
        n = e.msg,
        r = n.replyButtons;
      if (
        r == null ||
        r.length === 0 ||
        (n.id.fromMe && o("WAWebMsgGetters").getBizBotType(n) != null)
      )
        return null;
      var a = r.some(function (e) {
        return e.displayText.length > d;
      });
      return u.jsx("div", {
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          ((t = {}),
          (t._aheh = r.length >= c || a),
          (t._ahee = a),
          (t._ahed = !0),
          t),
        ),
        children: r.map(function (e, t) {
          return u.jsx(m, { msg: n, replyButton: e }, t);
        }),
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
