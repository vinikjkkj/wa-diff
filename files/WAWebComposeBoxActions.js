__d(
  "WAWebComposeBoxActions",
  ["WAWebEventEmitter", "WAWebStateUtils"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$ComposeBoxActionsImpl$p_1 = !1),
            (t.$ComposeBoxActionsImpl$p_2 = !1),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.focus = function (t) {
            var e = o("WAWebStateUtils").unproxy(t);
            e
              ? this.trigger("focus_" + e.id.toString())
              : this.trigger("focus");
          }),
          (n.send = function (t) {
            var e = o("WAWebStateUtils").unproxy(t);
            this.trigger("send_" + e.id.toString());
          }),
          (n.paste = function (t, n, r) {
            if (t) {
              var e = o("WAWebStateUtils").unproxy(t);
              this.trigger("paste_" + e.id.toString(), n, r);
            } else this.trigger("paste", n, r);
          }),
          (n.sendPaste = function (t, n) {
            var e = o("WAWebStateUtils").unproxy(t);
            this.trigger("send_paste_" + e.id.toString(), n);
          }),
          (n.pasteFiles = function (t, n) {
            var e = o("WAWebStateUtils").unproxy(t);
            this.trigger("paste_files_" + e.id.toString(), n);
          }),
          (n.toggleQuickReplies = function () {
            this.trigger("toggle_quick_replies");
          }),
          (n.addMsgSendingLogAttributes = function (t, n) {
            this.trigger("add_sending_log_attributes_" + t.id.toString(), n);
          }),
          (n.setCtwaContextLinkData = function (t, n) {
            this.trigger("set_ctwa_context_link_data_" + t.id.toString(), n);
          }),
          (n.setTextContent = function (t, n) {
            this.trigger("set_text_content_" + t.id.toString(), n);
          }),
          (n.setIsFocus = function (t) {
            this.$ComposeBoxActionsImpl$p_1 = t;
          }),
          (n.setHasText = function (t) {
            this.$ComposeBoxActionsImpl$p_2 = t;
          }),
          (n.setNonJidMentions = function (t, n) {
            this.trigger("set_non_jid_mentions_" + t.id.toString(), n);
          }),
          (n.isFocused = function () {
            return this.$ComposeBoxActionsImpl$p_1;
          }),
          (n.hasText = function () {
            return this.$ComposeBoxActionsImpl$p_2;
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      s = new e();
    l.ComposeBoxActions = s;
  },
  98,
);
