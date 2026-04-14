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
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var a = t.latestLid,
        i = s._(
          /*BTDS*/ "This phone number is connected to a new WhatsApp account.",
        ),
        l = s._(/*BTDS*/ "Message the new account"),
        u = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            o("WAWebFindChatAction")
              .findOrCreateLatestChat(a, "deprecatedLidOrPnChat")
              .then(
                (function () {
                  var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* (e) {
                      var t = e.chat,
                        n = yield o("WAWebCmd").Cmd.openChatFromUnread({
                          chat: t,
                        });
                      n &&
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(t);
                    },
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              )
              .catch(function () {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[deprecated lid chat] find/create latest chat failed",
                      ])),
                  )
                  .sendLogs(
                    "failed-to-find-or-create-latest-chat-from-deprecated-chat",
                  );
              });
          });
          return function () {
            return t.apply(this, arguments);
          };
        })(),
        d = c.jsx(
          o("WAWebButton.react").WAWebButtonSecondary,
          {
            onClick: u,
            icon: o("WAWebRoundSendInvIcon.react").RoundSendInvIcon,
            children: l,
          },
          "go_to_latest_lid_chat",
        );
      return c.jsx(r("WAWebConversationNewBanner.react"), {
        primaryText: i,
        buttons: [d],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
