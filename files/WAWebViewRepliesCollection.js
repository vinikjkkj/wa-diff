__d(
  "WAWebViewRepliesCollection",
  [
    "WAWebCollection",
    "WAWebThreadId",
    "WAWebThreadMetadataJob",
    "WAWebThreadUtils",
    "WAWebViewRepliesModel",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.lastMessageTimestamp || 0,
        r = t.lastMessageTimestamp || 0;
      return n !== r ? (n > r ? -1 : 1) : 0;
    }
    var s = (function (e) {
      function t(t) {
        var n;
        return (
          (n = e.call(this) || this),
          (n.$ViewRepliesCollection$p_2 = null),
          (n.$ViewRepliesCollection$p_1 = t),
          n
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var a = t.prototype;
      return (
        (a.initializeViewRepliesThreads = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            return this.$ViewRepliesCollection$p_2 != null
              ? this.$ViewRepliesCollection$p_2
              : ((this.$ViewRepliesCollection$p_2 =
                  this.$ViewRepliesCollection$p_3()),
                this.$ViewRepliesCollection$p_2);
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$ViewRepliesCollection$p_3 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            try {
              var e = yield o(
                "WAWebThreadMetadataJob",
              ).getAllViewRepliesThreadsFromChatId(
                o("WAWebWidToJid").widToChatJid(
                  this.$ViewRepliesCollection$p_1,
                ),
              );
              if (e != null)
                for (var t of e) {
                  var n = new (r("WAWebViewRepliesModel"))({
                    id: t.threadId,
                    creationTimestamp: t.creationTimestamp,
                    lastMessageTimestamp: t.lastMessageTimestamp,
                  });
                  this.add(n);
                }
            } catch (e) {
              throw ((this.$ViewRepliesCollection$p_2 = null), e);
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.hasThreadForMsgKey = function (t) {
          var e = r("WAWebThreadId").fromMessage(
              t,
              o("WAWebThreadUtils").ThreadType.ViewAllReplies,
            ),
            n = this.get(e);
          return n != null ? e : null;
        }),
        t
      );
    })(r("WAWebCollection"));
    ((s.model = r("WAWebViewRepliesModel")),
      (s.comparator = e),
      (l.ViewRepliesCollection = s));
  },
  98,
);
