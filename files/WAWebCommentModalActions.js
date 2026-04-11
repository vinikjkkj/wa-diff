__d(
  "WAWebCommentModalActions",
  ["WAWebEventEmitter"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.scrollReplyModalToBottom = function () {
            this.trigger("scroll_reply_modal_to_bottom");
          }),
          t
        );
      })(r("WAWebEventEmitter")),
      s = new e();
    l.CommentModalActions = s;
  },
  98,
);
