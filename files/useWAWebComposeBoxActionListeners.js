__d(
  "useWAWebComposeBoxActionListeners",
  ["WAWebComposeBoxActions", "react-compiler-runtime", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("react-compiler-runtime").c(2),
        r;
      n[0] !== e.id
        ? ((r = e.id.toString()), (n[0] = e.id), (n[1] = r))
        : (r = n[1]);
      var a = r;
      (o("useWAWebListener").useListener(
        o("WAWebComposeBoxActions").ComposeBoxActions,
        "focus_" + a,
        t.onFocus,
      ),
        o("useWAWebListener").useListener(
          o("WAWebComposeBoxActions").ComposeBoxActions,
          "focus",
          t.onFocus,
        ),
        o("useWAWebListener").useListener(
          o("WAWebComposeBoxActions").ComposeBoxActions,
          "send_" + a,
          t.onSend,
        ),
        o("useWAWebListener").useListener(
          o("WAWebComposeBoxActions").ComposeBoxActions,
          "paste_" + a,
          t.onPaste,
        ),
        o("useWAWebListener").useListener(
          o("WAWebComposeBoxActions").ComposeBoxActions,
          "paste",
          t.onPaste,
        ),
        o("useWAWebListener").useListener(
          o("WAWebComposeBoxActions").ComposeBoxActions,
          "paste_files_" + a,
          t.onPasteFiles,
        ),
        o("useWAWebListener").useListener(
          o("WAWebComposeBoxActions").ComposeBoxActions,
          "send_paste_" + a,
          t.onRoutedPaste,
        ),
        o("useWAWebListener").useListener(
          o("WAWebComposeBoxActions").ComposeBoxActions,
          "toggle_quick_replies",
          t.onToggleQuickReplies,
        ),
        o("useWAWebListener").useListener(
          o("WAWebComposeBoxActions").ComposeBoxActions,
          "add_sending_log_attributes_" + a,
          t.onSendingLogAttributes,
        ),
        o("useWAWebListener").useListener(
          o("WAWebComposeBoxActions").ComposeBoxActions,
          "set_ctwa_context_link_data_" + a,
          t.onCtwaContextLinkData,
        ),
        o("useWAWebListener").useListener(
          o("WAWebComposeBoxActions").ComposeBoxActions,
          "set_text_content_" + a,
          t.onSetTextContent,
        ),
        o("useWAWebListener").useListener(
          o("WAWebComposeBoxActions").ComposeBoxActions,
          "set_non_jid_mentions_" + a,
          t.onSetNonJidMentions,
        ));
    }
    l.default = e;
  },
  98,
);
