__d(
  "WAWebTPReturnPdfHandler",
  [
    "WAKaleidoscopeClassify",
    "WALogger",
    "WAWebActions",
    "WAWebCmd",
    "WAWebDrawerManager",
    "WAWebKeyboardRun",
    "WAWebNavBarTypes",
    "WAWebTPLoggingUtils",
    "WAWebTPPdfViewerGatingUtils",
    "asyncToGeneratorRuntime",
    "cr:6711",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = t.buffer,
            i = t.fileName,
            l = yield o(
              "WAKaleidoscopeClassify",
            ).kaleidoscopeClassifyByMediaType(a, "document", "application/pdf");
          if (
            !l.success ||
            l.value.mimetype !== "application/pdf" ||
            l.value.score >= 90
          ) {
            var s = l.success ? "kaleidoscope_reject" : "kaleidoscope_fail";
            (o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[webtp] Desktop return PDF rejected by kaleidoscope",
                ])),
            ),
              o("WAWebTPLoggingUtils").logPdfReceiverErrorEvent(
                s,
                l.success
                  ? "Score " + l.value.score + " >= 90 or wrong mimetype"
                  : "Kaleidoscope classification failed",
                "",
              ));
            return;
          }
          var u = new File([a], i, { type: "application/pdf" });
          (n("cr:6711") == null || n("cr:6711").bringMainWindowToForeground(),
            o("WAWebCmd").Cmd.closeStatusViewer(),
            o("WAWebDrawerManager").DrawerManager.closeDrawerLeft(),
            r("WAWebKeyboardRun")(o("WAWebActions").Action.CLOSE_CHAT),
            o("WAWebCmd").Cmd.setActiveNavBarItem(
              o("WAWebNavBarTypes").NavBarItems.Chats,
            ),
            o("WAWebCmd").Cmd.scrollChatListToTop(),
            o("WAWebTPPdfViewerGatingUtils").isPdfPreviewBeforeSendEnabled()
              ? (o("WAWebTPLoggingUtils").logPdfReceiverPreviewOpenEvent(),
                o("WAWebCmd").Cmd.trigger(
                  "open_file_forward_modal_with_preview",
                  u,
                  {
                    showPreview: !0,
                    onSend: function () {
                      o("WAWebTPLoggingUtils").logPdfReceiverPreviewSendEvent();
                    },
                    onCancel: function () {
                      o(
                        "WAWebTPLoggingUtils",
                      ).logPdfReceiverPreviewCancelEvent();
                    },
                  },
                ))
              : o("WAWebCmd").Cmd.trigger("open_file_forward_modal", u));
        })),
        u.apply(this, arguments)
      );
    }
    l.default = s;
  },
  98,
);
