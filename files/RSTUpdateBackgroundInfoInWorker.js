__d(
  "RSTUpdateBackgroundInfoInWorker",
  [
    "RSTEvents",
    "RSTEventsMessageQueue",
    "RSTMainThreadDataInWorker",
    "RSTUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
      var e = t.mainToWorkerMessage,
        n = e != null ? e : {},
        o = n.DOMData;
      if (o != null) {
        var a = e == null ? void 0 : e.sessionID;
        if (a != null) {
          var i = r("RSTMainThreadDataInWorker").getDataEntry(a);
          if (i != null) {
            var l = i.backgroundInfoManager,
              s = o.hidden;
            ((i.isBackgrounded = s),
              s
                ? (l.background(), (i.heartBeatCheckOn = !1))
                : (l.foreground(), (i.heartBeatCheckOn = !0)));
          }
        }
      }
    };
    function s() {
      var t, n;
      ((t = o("RSTEventsMessageQueue")).subscribe(
        (n = o("RSTEvents")).RSTEvent.HEART_BEAT,
        e,
      ),
        t.subscribe(n.RSTEvent.TRACE_START, e),
        t.subscribe(n.RSTEvent.TRACE_END, e),
        t.subscribe(n.RSTEvent.TRACE_POLICY_SET, e),
        t.subscribe(n.RSTEvent.BROWSER_TAB_CLOSED, function (e) {
          var t,
            n = (t = e.mainToWorkerMessage) == null ? void 0 : t.sessionID;
          if (n != null) {
            var a = r("RSTMainThreadDataInWorker").getDataEntry(n);
            a != null &&
              ((a.isClosed = !0),
              r("RSTMainThreadDataInWorker").deleteDataEntry(n),
              o("RSTUtils").debugLogImportant("session " + n + " closed"));
          }
        }),
        t.subscribe(n.RSTEvent.BROWSER_TAB_FOREGROUND, function (e) {
          var t,
            n = (t = e.mainToWorkerMessage) == null ? void 0 : t.sessionID;
          if (n != null) {
            var a = r("RSTMainThreadDataInWorker").getDataEntry(n);
            if (a != null) {
              var i = a.backgroundInfoManager;
              (i.foreground(),
                (a.isBackgrounded = !1),
                (a.heartBeatCheckOn = !0),
                o("RSTUtils").debugLogImportant(
                  "session " + n + " foregrounded",
                ));
            }
          }
        }),
        t.subscribe(n.RSTEvent.BROWSER_TAB_BACKGROUND, function (e) {
          var t,
            n = (t = e.mainToWorkerMessage) == null ? void 0 : t.sessionID;
          if (n != null) {
            var a = r("RSTMainThreadDataInWorker").getDataEntry(n);
            if (a != null) {
              var i = a.backgroundInfoManager;
              (i.background(),
                (a.isBackgrounded = !0),
                (a.heartBeatCheckOn = !1),
                o("RSTUtils").debugLogImportant(
                  "session " + n + " backgrounded",
                ));
            }
          }
        }));
    }
    l.registerUpdateBackgroundInfo = s;
  },
  98,
);
