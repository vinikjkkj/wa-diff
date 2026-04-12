__d(
  "useWAWebComposeBoxActionListeners",
  ["WAWebComposeBoxActions", "useWAWebListener"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r,
        a = e.id.toString();
      ((n = o("useWAWebListener")).useListener(
        (r = o("WAWebComposeBoxActions")).ComposeBoxActions,
        "focus_" + a,
        t.onFocus,
      ),
        n.useListener(r.ComposeBoxActions, "focus", t.onFocus),
        n.useListener(r.ComposeBoxActions, "send_" + a, t.onSend),
        n.useListener(r.ComposeBoxActions, "paste_" + a, t.onPaste),
        n.useListener(r.ComposeBoxActions, "paste", t.onPaste),
        n.useListener(r.ComposeBoxActions, "paste_files_" + a, t.onPasteFiles),
        n.useListener(r.ComposeBoxActions, "send_paste_" + a, t.onRoutedPaste),
        n.useListener(
          r.ComposeBoxActions,
          "toggle_quick_replies",
          t.onToggleQuickReplies,
        ),
        n.useListener(
          r.ComposeBoxActions,
          "add_sending_log_attributes_" + a,
          t.onSendingLogAttributes,
        ),
        n.useListener(
          r.ComposeBoxActions,
          "set_ctwa_context_link_data_" + a,
          t.onCtwaContextLinkData,
        ),
        n.useListener(
          r.ComposeBoxActions,
          "set_text_content_" + a,
          t.onSetTextContent,
        ),
        n.useListener(
          r.ComposeBoxActions,
          "set_non_jid_mentions_" + a,
          t.onSetNonJidMentions,
        ));
    }
    l.default = e;
  },
  98,
);
