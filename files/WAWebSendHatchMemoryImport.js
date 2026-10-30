__d(
  "WAWebSendHatchMemoryImport",
  [
    "fbt",
    "WALogger",
    "WAWebBotUtils",
    "WAWebFindChatAction",
    "WAWebHatchAccountSnapshot",
    "WAWebSendTextMsgChatAction",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = 40960;
    function m(e) {
      var t = e.trim();
      if (t === "") return null;
      var n = s
          ._(
            /*BTDS*/ "I am importing memory from another AI assistant. The block below is a structured snapshot of what that assistant knew about me. Please read it, internalize it, and remember it via your memory tooling. Skip anything that looks sensitive or wasn't clearly meant to be remembered. Confirm what you stored.",
          )
          .toString(),
        r = n + "\n\n---\n" + t + "\n---";
      return new TextEncoder().encode(r).length > d ? null : r;
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = m(t);
          if (a == null) return null;
          var i = o("WAWebHatchAccountSnapshot").readHatchAccountSnapshot();
          if (i == null)
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-memory-import: not sent, Muse is unlinked",
                  ])),
              ),
              null
            );
          var l = yield o("WAWebFindChatAction").findOrCreateLatestChat(
              o("WAWebBotUtils").HATCH_BOT_FBID_WID,
              "hatchImportMemoryDrawer",
            ),
            s = l.chat;
          return (n == null ? void 0 : n.aborted) === !0
            ? null
            : o("WAWebHatchAccountSnapshot").isSameHatchAccount(
                  i,
                  o("WAWebHatchAccountSnapshot").readHatchAccountSnapshot(),
                )
              ? (o("WAWebSendTextMsgChatAction")
                  .sendTextMsgToChat(s, a)
                  .catch(function (e) {
                    o("WALogger")
                      .WARN(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "hatch-memory-import/send-threw",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("hatch-memory-import-send-threw");
                  }),
                s)
              : (o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-memory-import: not sent, account or channel changed",
                    ])),
                ),
                null);
        })),
        _.apply(this, arguments)
      );
    }
    ((l.buildHatchMemoryImportMessage = m), (l.sendHatchMemoryImport = p));
  },
  226,
);
