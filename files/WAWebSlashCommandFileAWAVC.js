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
    "asyncToGeneratorRuntime",
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
          return s._(/*BTDS*/ "Press Enter to add a WhatsApp call link");
        },
        getBusyLabel: function () {
          return s._(/*BTDS*/ "Creating a call link\u2026");
        },
        isAvailable: o("WAWebBoolFunc").returnTrue,
        run: (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = t.chat,
              a = t.editor;
            if (!m.has(a)) {
              m.add(a);
              var i = _(a);
              try {
                var l = yield o("WAPromiseDelays").withTimeout(
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
                    chat: n,
                  }));
              } catch (t) {
                (o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[slash_commands] #fileawavc failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("slash-command-fileawavc"),
                  o("WAWebSlashCommandsUsageLogger").logSlashCommandUsage({
                    action: "command_fail",
                    command: "fileawavc",
                    chat: n,
                    failureReason: "call_link_failed",
                  }),
                  f(a, i, ""),
                  o("WAWebToastManager").ToastManager.open(
                    c.jsx(o("WAWebToast.react").Toast, {
                      msg: s._(
                        /*BTDS*/ "Couldn't create a call link. Check your connection and try again.",
                      ),
                    }),
                  ));
              } finally {
                m.delete(a);
              }
            }
          });
          function a(e) {
            return t.apply(this, arguments);
          }
          return a;
        })(),
      };
    function _(e) {
      return e.getEditorState().read(o("WAWebLexicalUtils").$rootTextContent);
    }
    function f(e, t, n) {
      _(e) === t && o("WAWebSlashCommandsComposer").replaceComposerText(e, n);
    }
    function g() {
      return s._(/*BTDS*/ "Add a WhatsApp call link anyone can join");
    }
    l.WAWebSlashCommandFileAWAVC = p;
  },
  226,
);
