__d(
  "WAWebSlashCommandFileAWAVC",
  [
    "fbt",
    "WALogger",
    "WAPromiseDelays",
    "WAWebBoolFunc",
    "WAWebLexicalUtils",
    "WAWebSlashCommandsComposer",
    "WAWebSlashCommandsUsageLogger",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebVoipCreateCallLink",
    "WDSIconIcVideocamFilled.react",
    "err",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = 5e3,
      m = new WeakSet(),
      p = {
        name: "fileawavc",
        group: "work_tools",
        Icon: r("WDSIconIcVideocamFilled.react"),
        color: "teal",
        text: "none",
        getDescription: g,
        getTextPrompt: g,
        getRunLabel: function () {
          return s._(/*BTDS*/ "");
        },
        getBusyLabel: function () {
          return s._(/*BTDS*/ "");
        },
        isAvailable: o("WAWebBoolFunc").returnTrue,
        run: async function (n) {
          var t = n.chat,
            a = n.editor;
          if (!m.has(a)) {
            m.add(a);
            var i = _(a);
            try {
              var l = await o("WAPromiseDelays").withTimeout(
                o("WAWebVoipCreateCallLink").createCallLink({
                  callType: "video",
                }),
                d,
                function () {
                  throw r("err")("Call link creation timed out");
                },
              );
              (f(a, i, l + " "),
                o("WAWebSlashCommandsUsageLogger").logSlashCommandUsage({
                  action: "command_done",
                  command: "fileawavc",
                  chat: t,
                }));
            } catch (n) {
              (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[slash_commands] #fileawavc failed",
                    ])),
                )
                .catching(r("getErrorSafe")(n))
                .sendLogs("slash-command-fileawavc"),
                o("WAWebSlashCommandsUsageLogger").logSlashCommandUsage({
                  action: "command_fail",
                  command: "fileawavc",
                  chat: t,
                  failureReason: "call_link_failed",
                }),
                f(a, i, ""),
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, { msg: s._(/*BTDS*/ "") }),
                ));
            } finally {
              m.delete(a);
            }
          }
        },
      };
    function _(e) {
      return e.getEditorState().read(o("WAWebLexicalUtils").$rootTextContent);
    }
    function f(e, t, n) {
      _(e) === t && o("WAWebSlashCommandsComposer").replaceComposerText(e, n);
    }
    function g() {
      return s._(/*BTDS*/ "");
    }
    l.WAWebSlashCommandFileAWAVC = p;
  },
  226,
);
