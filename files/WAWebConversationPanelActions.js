__d(
  "WAWebConversationPanelActions",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.focus = function () {
            this.trigger("conversation_panel_focus");
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      s = new e();
    l.ConversationPanelActions = s;
  },
  98,
);
