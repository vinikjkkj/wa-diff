__d(
  "WAWebRegionReadinessSignals",
  [
    "Promise",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebCmd",
    "WAWebEventsWaitForBbEvent",
    "WAWebFrontendChatGetters",
    "WAWebSocketModel",
    "WAWebUserPrefsHistorySync",
    "cr:18403",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = n("Promise"))).resolve(),
      u = 1e3;
    function c(e, t) {
      var r = null,
        o = !1;
      return {
        getPromise: function () {
          var a =
            n("cr:18403") == null ? void 0 : n("cr:18403").getRegionHold();
          return a != null
            ? a
            : o
              ? r != null
                ? r
                : s
              : e()
                ? ((o = !0), (r = s), r)
                : (r == null &&
                    (r = t()
                      .catch(function () {})
                      .then(function (e) {
                        return ((o = !0), e);
                      })),
                  r);
        },
      };
    }
    function d() {
      return (
        (n("cr:18403") == null ? void 0 : n("cr:18403").getRegionHold()) != null
      );
    }
    function m(t) {
      var r = new AbortController();
      return (e || (e = n("Promise"))).race(t(r.signal)).finally(function () {
        r.abort();
      });
    }
    function p() {
      if (
        !o("WAWebUserPrefsHistorySync").getInitialHistorySyncComplete() &&
        o("WAWebSocketModel").Socket.hasSynced !== !0
      )
        return !1;
      if (o("WAWebCmd").Cmd.isOfflineDeliveryEnd) return !0;
      var e = o("WAWebChatCollection").ChatCollection.filter(
        o("WAWebFrontendChatGetters").getShouldAppearInList,
      );
      return (
        e.length > 0 && !e.some(o("WAWebChatGetters").getPendingInitialLoading)
      );
    }
    function _(t, o, a, i) {
      return new (e || (e = n("Promise")))(function (l) {
        var s = !1,
          u = function () {
            return (
              s ||
                ((s = !0),
                (e || (e = n("Promise"))).resolve().then(function () {
                  ((s = !1), !i.aborted && a() && l(void 0));
                })),
              !1
            );
          };
        r("WAWebEventsWaitForBbEvent")(t, o, u, i).catch(function () {});
      });
    }
    function f(e) {
      return _(
        o("WAWebChatCollection").ChatCollection,
        "add change:msgsLength change:msgsChanged change:pendingInitialLoading change:t sort reset",
        p,
        e,
      );
    }
    function g(e) {
      return o("WAWebCmd").Cmd.isOfflineDeliveryEnd
        ? s
        : r("WAWebEventsWaitForBbEvent")(
            o("WAWebCmd").Cmd,
            "offline_delivery_end_from_bridge",
            void 0,
            e,
          );
    }
    var h = c(p, function () {
      return m(function (e) {
        return [
          f(e),
          _(o("WAWebSocketModel").Socket, "change:hasSynced", p, e),
          _(o("WAWebCmd").Cmd, "offline_delivery_end_from_bridge", p, e),
        ];
      });
    });
    function y() {
      return d() ? !1 : C || p();
    }
    var C = !1,
      b = function () {},
      v = new e(function (e) {
        b = e;
      });
    function S(e) {
      e && ((C = !0), b());
    }
    function R() {
      return C && !p();
    }
    function L(t) {
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
    var E = c(y, function () {
      return (e || (e = n("Promise"))).race([v, h.getPromise()]);
    });
    ((l.createReadinessSignal = c),
      (l.isStartupRegionHeld = d),
      (l.raceReadinessSubscriptions = m),
      (l.isChatlistReady = p),
      (l.waitForReadyOncePerBurst = _),
      (l.waitForOfflineDeliveryEnd = g),
      (l.chatlistReadySignal = h),
      (l.isChatlistRowsReady = y),
      (l.markChatlistRowsReady = S),
      (l.isChatlistRowsLoading = R),
      (l.waitForChatlistRowsPaint = L),
      (l.chatlistRowsReadySignal = E));
  },
  98,
);
