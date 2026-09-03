__d(
  "WAWebMuteMentionAllUtils",
  [
    "Promise",
    "WALogger",
    "WATypeUtils",
    "WAWeb-moment",
    "WAWebChatMuteBridge",
    "WAWebNoop",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = -1;
    function f(t, a) {
      var i;
      if (!r("WAWebWid").isGroup(t.id))
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "models:Mute:muteMentionAll called on non-group chat ",
                "",
              ])),
            t.id.toString(),
          ),
          (p || (p = n("Promise"))).reject()
        );
      var l = a;
      if (!o("WATypeUtils").isNumber(l))
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "models:Mute:muteMentionAll called with invalid expiration ",
                "",
              ])),
            l,
          ),
          (p || (p = n("Promise"))).reject()
        );
      if (
        ((l = Math.round(l)),
        l > 2e9 &&
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "models:Mute:muteMentionAll called with wrong units?",
                " exp:",
                "",
              ])),
            t.id.toString(),
            l,
          ),
        l === _)
      )
        o("WALogger").LOG(
          c ||
            (c = babelHelpers.taggedTemplateLiteralLoose([
              "models:Mute:muteMentionAll ",
              " muted, no expiration",
            ])),
          t.id.toString(),
        );
      else {
        var m = l - r("WAWeb-moment")().unix();
        o("WALogger").LOG(
          d ||
            (d = babelHelpers.taggedTemplateLiteralLoose([
              "models:Mute:muteMentionAll ",
              " duration:",
              "",
            ])),
          t.id.toString(),
          m,
        );
      }
      return t.promises.muteMentionAll
        ? t.promises.muteMentionAll.then(r("WAWebNoop"))
        : ((t.promises.muteMentionAll = o(
            "WAWebChatMuteBridge",
          ).sendConversationMute({
            _expirationNew: t.expiration,
            chatId: t.id,
            expiration: (i = t.expiration) != null ? i : 0,
            mentionAllMuteExpiration: l,
          })),
          t.promises.muteMentionAll
            .then(function (e) {
              e.status === 200 && t.set({ mentionAllMuteExpiration: l });
            })
            .finally(function () {
              t.promises.muteMentionAll = null;
            }));
    }
    function g(e) {
      var t;
      return (
        o("WALogger").LOG(
          m ||
            (m = babelHelpers.taggedTemplateLiteralLoose([
              "models:Mute:unmuteMentionAll ",
              "",
            ])),
          e.id.toString(),
        ),
        e.promises.unmuteMentionAll
          ? e.promises.unmuteMentionAll.then(r("WAWebNoop"))
          : ((e.promises.unmuteMentionAll = o(
              "WAWebChatMuteBridge",
            ).sendConversationMute({
              _expirationNew: e.expiration,
              chatId: e.id,
              expiration: (t = e.expiration) != null ? t : 0,
              mentionAllMuteExpiration: 0,
            })),
            e.promises.unmuteMentionAll
              .then(function (t) {
                t.status === 200 && e.set({ mentionAllMuteExpiration: 0 });
              })
              .finally(function () {
                e.promises.unmuteMentionAll = null;
              }))
      );
    }
    ((l.muteMentionAll = f), (l.unmuteMentionAll = g));
  },
  98,
);
