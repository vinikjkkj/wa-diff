__d(
  "WAWebUnreadMentionMetadataModel",
  ["WAWebBaseModel", "WAWebChatUnreadMentionCollection"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.unreadMentionCollection = o("WAWebBaseModel").prop()),
            (t.pendingUnreadMentionCount = o("WAWebBaseModel").prop()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.initialize = function () {
            ((this.unreadMentionCollection = new (r(
              "WAWebChatUnreadMentionCollection",
            ))()),
              (this.pendingUnreadMentionCount = 0));
          }),
          (n.hasMentionId = function (t) {
            return this.unreadMentionCollection.get(t) != null;
          }),
          (n.addUnreadMentions = function (t, n) {
            this.unreadMentionCollection.add(t);
          }),
          (n.removeUnreadMentions = function (t) {
            this.unreadMentionCollection.remove(t);
          }),
          (n.oldestUnreadMention = function () {
            return this.unreadMentionCollection.oldestUnreadMention();
          }),
          (n.reset = function () {
            ((this.pendingUnreadMentionCount = 0),
              this.unreadMentionCollection.reset());
          }),
          (n.getUnreadMentionCount = function () {
            return (
              this.pendingUnreadMentionCount +
              this.unreadMentionCollection.length
            );
          }),
          t
        );
      })(o("WAWebBaseModel").BaseModel),
      s = o("WAWebBaseModel").defineModel(e);
    l.default = s;
  },
  98,
);
