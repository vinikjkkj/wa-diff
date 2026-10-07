__d(
  "WAWebRegionReadinessSignals",
  [
    "Promise",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebEventsWaitForBbEvent",
    "WAWebFrontendChatGetters",
    "cr:4145",
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
    function p(t) {
      return new (e || (e = n("Promise")))(function (a) {
        var i = !1,
          l = function () {
            return (
              i ||
                ((i = !0),
                (e || (e = n("Promise"))).resolve().then(function () {
                  ((i = !1), !t.aborted && m() && a(void 0));
                })),
              !1
            );
          };
        r("WAWebEventsWaitForBbEvent")(
          o("WAWebChatCollection").ChatCollection,
          "add change:msgsLength change:msgsChanged change:pendingInitialLoading change:t sort reset",
          l,
          t,
        ).catch(function () {});
      });
    }
    var _ = c(m, function () {
      return d(function (e) {
        return [
          p(e),
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
    function f() {
      return (n("cr:4145") == null
        ? void 0
        : n("cr:4145").getChatlistRowsHold()) != null
        ? !1
        : g || m();
    }
    var g = !1,
      h = function () {},
      y = new e(function (e) {
        h = e;
      });
    function C(e) {
      e && ((g = !0), h());
    }
    function b() {
      return g && !m();
    }
    function v(t) {
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
    var S = c(f, function () {
        return (e || (e = n("Promise"))).race([y, _.getPromise()]);
      }),
      R = {
        getPromise: function () {
          var e;
          return (e =
            n("cr:4145") == null
              ? void 0
              : n("cr:4145").getChatlistRowsHold()) != null
            ? e
            : S.getPromise();
        },
      };
    ((l.createReadinessSignal = c),
      (l.raceReadinessSubscriptions = d),
      (l.isChatlistReady = m),
      (l.chatlistReadySignal = _),
      (l.isChatlistRowsReady = f),
      (l.markChatlistRowsReady = C),
      (l.isChatlistRowsLoading = b),
      (l.waitForChatlistRowsPaint = v),
      (l.chatlistRowsReadySignal = R));
  },
  98,
);
