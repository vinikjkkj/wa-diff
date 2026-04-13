__d(
  "WAWebChatInfoClearChatSection.react",
  [
    "fbt",
    "WAWebChatInfoDrawerSection.react",
    "WAWebClearRefreshedIcon.react",
    "WAWebCmd",
    "WAWebCommonMsgUtils",
    "WAWebDrawerButtonRefreshed.react",
    "react",
    "react-compiler-runtime",
    "useWAWebABPropConfigValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.chat,
        a = o("useWAWebABPropConfigValue").useABPropConfigValue(
          "ai_learning_clear_chat_disable_empty_chats",
        ),
        i;
      t[0] !== n
        ? ((i = function () {
            o("WAWebCmd").Cmd.clearChat(n);
          }),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Clear chat")), (t[2] = c))
        : (c = t[2]);
      var m = c,
        p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = u.jsx(
            o("WAWebClearRefreshedIcon.react").ClearRefreshedIcon,
            {},
          )),
          (t[3] = p))
        : (p = t[3]);
      var _;
      t[4] !== n || t[5] !== a
        ? ((_ = a && !n.msgs.getModelsArray().some(d)),
          (t[4] = n),
          (t[5] = a),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      return (
        t[7] !== l || t[8] !== _
          ? ((f = u.jsx(
              o("WAWebChatInfoDrawerSection.react")
                .ChatInfoDrawerButtonsSection,
              {
                children: u.jsx(r("WAWebDrawerButtonRefreshed.react"), {
                  icon: p,
                  onClick: l,
                  testid: void 0,
                  danger: !0,
                  disabled: _,
                  children: m,
                }),
              },
            )),
            (t[7] = l),
            (t[8] = _),
            (t[9] = f))
          : (f = t[9]),
        f
      );
    }
    function d(e) {
      return !o("WAWebCommonMsgUtils").isNotificationType(e.type, e.subtype);
    }
    l.default = c;
  },
  226,
);
