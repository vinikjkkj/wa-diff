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
    "WAWebMediaFileTooLargeError",
    "WAWebWamEnumMediaPickerOriginType",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = /\.zip$/i;
    async function d(e) {
      var t = o("WAWebHatchAccountSnapshot").readHatchAccountSnapshot();
      if (!c.test(e.name))
        return { kind: "failed", reason: "unsupported_file" };
      if (t == null) return { kind: "failed", reason: "send_failed" };
      var n = await o("WAWebFindChatAction").findOrCreateLatestChat(
          o("WAWebBotUtils").HATCH_BOT_FBID_WID,
          "hatchImportMemoryDrawer",
        ),
        a = n.chat,
        i = { file: e, type: o("WAWebFileUtils").FILETYPE.DOCUMENT },
        l = new (r("WAWebAttachMediaCollection"))({ chatParticipantCount: 1 });
      await l.processAttachmentsForChat(
        [i],
        o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
          .DOCUMENT_PICKER,
        a,
        1,
      );
      var s = l.uiProcessMsgs(1, null),
        u = s.errorMsgs;
      if (u !== "") {
        var d = p(l);
        return (l.delete(), { kind: "rejected", message: u, reason: d });
      }
      var m = l.getValidMedias(),
        _ = m[0];
      return _ == null
        ? (l.delete(), { kind: "failed", reason: "read_failed" })
        : {
            account: t,
            chat: a,
            discard: function () {
              (_.delete(), l.delete());
            },
            kind: "ready",
            media: _,
          };
    }
    function m(t) {
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
    function p(e) {
      return e.getModelsArray().some(function (e) {
        return e.exception instanceof r("WAWebMediaFileTooLargeError");
      })
        ? "too_large"
        : "read_failed";
    }
    function _() {
      return s._(/*BTDS*/ "").toString();
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
    ((l.prepareHatchChatImport = d), (l.sendHatchChatImport = m));
  },
  226,
);
