__d(
  "WAWebSendHatchChatImport",
  [
    "fbt",
    "WALogger",
    "WAWebAttachMediaCollection",
    "WAWebBotUtils",
    "WAWebFileUtils",
    "WAWebFindChatAction",
    "WAWebHatchAccountSnapshot",
    "WAWebWamEnumMediaPickerOriginType",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = /\.zip$/i;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebHatchAccountSnapshot").readHatchAccountSnapshot();
          if (!c.test(e.name) || t == null) return { kind: "failed" };
          var n = yield o("WAWebFindChatAction").findOrCreateLatestChat(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID,
              "hatchImportMemoryDrawer",
            ),
            a = n.chat,
            i = { file: e, type: o("WAWebFileUtils").FILETYPE.DOCUMENT },
            l = new (r("WAWebAttachMediaCollection"))({
              chatParticipantCount: 1,
            });
          yield l.processAttachmentsForChat(
            [i],
            o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
              .DOCUMENT_PICKER,
            a,
            1,
          );
          var s = l.uiProcessMsgs(1, null),
            u = s.errorMsgs;
          if (u !== "") return (l.delete(), { kind: "rejected", message: u });
          var d = l.getValidMedias(),
            m = d[0];
          return m == null
            ? (l.delete(), { kind: "failed" })
            : {
                account: t,
                chat: a,
                discard: function () {
                  (m.delete(), l.delete());
                },
                kind: "ready",
                media: m,
              };
        })),
        m.apply(this, arguments)
      );
    }
    function p(t) {
      if (
        !o("WAWebHatchAccountSnapshot").isSameHatchAccount(
          t.account,
          o("WAWebHatchAccountSnapshot").readHatchAccountSnapshot(),
        )
      )
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-chat-import: not sent, unlinked or account or channel changed",
              ])),
          ),
          null
        );
      var n = t.chat,
        r = t.media;
      try {
        r.sendToChat({
          chat: n,
          options: { caption: _(), type: r.type },
        }).catch(f);
      } catch (e) {
        return (f(e), null);
      }
      return n;
    }
    function _() {
      return s
        ._(
          /*BTDS*/ "I just uploaded an export of my chats from another AI assistant as the attached file. Please read it, extract durable facts about me \u2014 interests, preferences, recurring topics, ongoing projects \u2014 and remember them via your memory tooling. Skip anything ephemeral or sensitive. Confirm what you stored.",
        )
        .toString();
    }
    function f(e) {
      o("WALogger")
        .WARN(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "hatch-chat-import/send-failed",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("hatch-chat-import-send-failed");
    }
    ((l.prepareHatchChatImport = d), (l.sendHatchChatImport = p));
  },
  226,
);
