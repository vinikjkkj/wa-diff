__d(
  "WAWebConversationDeprecatedLidChatBanner.react",
  [
    "fbt",
    "WALogger",
    "WAWebButton.react",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebConversationNewBanner.react",
    "WAWebFindChatAction",
    "WAWebRoundSendInvIcon.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        a = e.latestLid,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(
            /*BTDS*/ "This phone number is connected to a new WhatsApp account.",
          )),
          (t[0] = i))
        : (i = t[0]);
      var l = i,
        u;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = s._(/*BTDS*/ "Message the new account")), (t[1] = u))
        : (u = t[1]);
      var d = u,
        _;
      if (t[2] !== a) {
        var f = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(a, "deprecatedLidOrPnChat")
              .then(p)
              .catch(m);
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
        ((_ = c.jsx(
          o("WAWebButton.react").WAWebButtonSecondary,
          {
            onClick: f,
            icon: o("WAWebRoundSendInvIcon.react").RoundSendInvIcon,
            children: d,
          },
          "go_to_latest_lid_chat",
        )),
          (t[2] = a),
          (t[3] = _));
      } else _ = t[3];
      var g = _,
        h;
      return (
        t[4] !== g
          ? ((h = c.jsx(r("WAWebConversationNewBanner.react"), {
              primaryText: l,
              buttons: [g],
            })),
            (t[4] = g),
            (t[5] = h))
          : (h = t[5]),
        h
      );
    }
    function m() {
      o("WALogger")
        .ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[deprecated lid chat] find/create latest chat failed",
            ])),
        )
        .sendLogs("failed-to-find-or-create-latest-chat-from-deprecated-chat");
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = yield o("WAWebCmd").Cmd.openChatFromUnread({ chat: t });
          n && o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
        })),
        _.apply(this, arguments)
      );
    }
    l.default = d;
  },
  226,
);
