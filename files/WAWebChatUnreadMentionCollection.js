__d(
  "WAWebChatUnreadMentionCollection",
  ["WAWebCollection", "WAWebUnreadMentionModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.oldestUnreadMention = function () {
          var e,
            t = (e = this.last()) != null ? e : null;
          return (t && this.remove(t), t);
        }),
        t
      );
    })(r("WAWebCollection"));
    ((e.model = r("WAWebUnreadMentionModel")),
      (e.comparator = function (e, t) {
        return t.timestamp - e.timestamp;
      }),
      (l.default = e));
  },
  98,
);
