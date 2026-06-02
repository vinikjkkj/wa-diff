__d(
  "WAWebViewRepliesCollection",
  [
    "WAWebChatCollection",
    "WAWebCollection",
    "WAWebThreadId",
    "WAWebThreadMetadataJob",
    "WAWebThreadUtils",
    "WAWebThreadsGating",
    "WAWebViewRepliesModel",
    "WAWebWidToJid",
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
      var n = t.prototype;
      return (
        (n.initializeViewRepliesThreads = async function () {
          return this.$ViewRepliesCollection$p_2 != null
            ? this.$ViewRepliesCollection$p_2
            : ((this.$ViewRepliesCollection$p_2 =
                this.$ViewRepliesCollection$p_3()),
              this.$ViewRepliesCollection$p_2);
        }),
        (n.$ViewRepliesCollection$p_3 = async function () {
          try {
            var e = await o(
              "WAWebThreadMetadataJob",
            ).getAllViewRepliesThreadsFromChatId(
              o("WAWebWidToJid").widToChatJid(this.$ViewRepliesCollection$p_1),
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
            if (o("WAWebThreadsGating").isThreadLoadingInfraEnabled()) {
              var a = o("WAWebChatCollection").ChatCollection.get(
                this.$ViewRepliesCollection$p_1,
              );
              a &&
                this.forEach(function (e) {
                  e.seedFromChat(a);
                });
            }
          } catch (e) {
            throw ((this.$ViewRepliesCollection$p_2 = null), e);
          }
        }),
        (n.hasThreadForMsgKey = function (t) {
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
