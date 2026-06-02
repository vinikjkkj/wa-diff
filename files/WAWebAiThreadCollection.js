__d(
  "WAWebAiThreadCollection",
  [
    "WAWebAiThreadComparator",
    "WAWebAiThreadModel",
    "WAWebChatCollection",
    "WAWebCollection",
    "WAWebMsgKey",
    "WAWebThreadMetadataJob",
    "WAWebThreadsGating",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.isInitialized = !1),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.initializeAiThreads = async function (t) {
          if (!this.isInitialized) {
            var e = await o("WAWebThreadMetadataJob").getAllAiThreadsFromChatId(
              o("WAWebWidToJid").widToChatJid(t),
            );
            if (e != null)
              for (var n of e) {
                var a,
                  i = new (r("WAWebAiThreadModel"))({
                    id: n.threadId,
                    title: n.aiThreadInfo.title,
                    aiThreadType: n.aiThreadInfo.aiThreadType,
                    creationTimestamp: n.creationTimestamp,
                    lastMessageTimestamp: n.lastMessageTimestamp,
                    unreadCount: (a = n.unreadCount) != null ? a : 0,
                    botModeSelection: n.botModeSelection,
                    botModeOverride: n.botModeOverride,
                    lastReceivedKey:
                      n.lastReceivedKey != null
                        ? r("WAWebMsgKey").fromString(n.lastReceivedKey)
                        : null,
                    unreadEditTimestampMs: n.unreadEditTimestampMs,
                    pinThreadTimestamp: n.pinThreadTimestamp,
                  });
                this.add(i);
              }
            if (o("WAWebThreadsGating").isThreadLoadingInfraEnabled()) {
              var l = o("WAWebChatCollection").ChatCollection.get(t);
              l &&
                this.forEach(function (e) {
                  e.seedFromChat(l);
                });
            }
            this.isInitialized = !0;
          }
        }),
        (n.getFirstActivated = function () {
          return this.findFirst(function (e) {
            return e.isPending !== !0;
          });
        }),
        (n.removeThreads = function (t) {
          for (var e of t) {
            var n = this.get(e);
            n && (this.remove(n), n.delete());
          }
        }),
        (n.clear = function () {
          var e = this.map(function (e) {
            return e.id;
          });
          this.removeThreads(e);
        }),
        t
      );
    })(r("WAWebCollection"));
    ((e.model = r("WAWebAiThreadModel")),
      (e.comparator = r("WAWebAiThreadComparator")),
      (l.AiThreadCollection = e));
  },
  98,
);
