__d(
  "WAWebThreadWriteThroughAction",
  ["WAWebThreadModelResolver", "WAWebThreadMsgUtils", "WAWebThreadsGating"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.filter(o("WAWebThreadMsgUtils").isThreadMsg);
      if (
        !(
          n.length === 0 ||
          !o("WAWebThreadsGating").isThreadLoadingInfraEnabled()
        )
      )
        for (var r of n) {
          var a = r.threadIds;
          if (a != null)
            for (var i of a) {
              var l = o("WAWebThreadModelResolver").getThreadModel(e, i);
              l != null && r.getMsgChunk(i) == null && l.msgs.add(r);
            }
        }
    }
    l.writeThroughToLiveThreads = e;
  },
  98,
);
