__d(
  "WAWebRegionReadinessSignals",
  [
    "Promise",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebEventsWaitForBbEvent",
    "WAWebFrontendChatGetters",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = n("Promise"))).resolve(),
      u = 1e3;
    function c(e, t) {
      var n = null;
      return {
        getPromise: function () {
          return e() ? s : (n == null && (n = t().catch(function () {})), n);
        },
      };
    }
    function d(t) {
      var r = new AbortController();
      return (e || (e = n("Promise"))).race(t(r.signal)).finally(function () {
        r.abort();
      });
    }
    function m() {
      if (o("WAWebCmd").Cmd.isOfflineDeliveryEnd) return !0;
      var e = o("WAWebChatCollection").ChatCollection.filter(
        o("WAWebFrontendChatGetters").getShouldAppearInList,
      );
      return (
        e.length > 0 && !e.some(o("WAWebChatGetters").getPendingInitialLoading)
      );
    }
    var p = c(m, function () {
      return d(function (e) {
        return [
          r("WAWebEventsWaitForBbEvent")(
            o("WAWebChatCollection").ChatCollection,
            "add change:msgsLength change:msgsChanged change:pendingInitialLoading change:t sort reset",
            m,
            e,
          ),
          r("WAWebEventsWaitForBbEvent")(
            o("WAWebCmd").Cmd,
            "on_initial_chat_synced_from_bridge",
            void 0,
            e,
          ),
          r("WAWebEventsWaitForBbEvent")(
            o("WAWebCmd").Cmd,
            "offline_delivery_end_from_bridge",
            void 0,
            e,
          ),
        ];
      });
    });
    function _() {
      return f || m();
    }
    var f = !1,
      g = function () {},
      h = new e(function (e) {
        g = e;
      });
    function y(e) {
      e && ((f = !0), g());
    }
    function C() {
      return f && !m();
    }
    function b(t) {
      return !t || document.visibilityState === "hidden"
        ? s
        : new (e || (e = n("Promise")))(function (e) {
            var t = null,
              n = null,
              r = !1,
              o = function () {
                r ||
                  ((r = !0),
                  t != null && globalThis.cancelAnimationFrame(t),
                  n != null && window.clearTimeout(n),
                  document.removeEventListener("visibilitychange", a),
                  e());
              },
              a = function () {
                document.visibilityState === "hidden" && o();
              };
            (document.addEventListener("visibilitychange", a),
              (n = window.setTimeout(o, u)),
              (t = globalThis.requestAnimationFrame(function () {
                t = globalThis.requestAnimationFrame(o);
              })));
          });
    }
    var v = c(_, function () {
      return (e || (e = n("Promise"))).race([h, p.getPromise()]);
    });
    ((l.createReadinessSignal = c),
      (l.raceReadinessSubscriptions = d),
      (l.isChatlistReady = m),
      (l.chatlistReadySignal = p),
      (l.isChatlistRowsReady = _),
      (l.markChatlistRowsReady = y),
      (l.isChatlistRowsLoading = C),
      (l.waitForChatlistRowsPaint = b),
      (l.chatlistRowsReadySignal = v));
  },
  98,
);
