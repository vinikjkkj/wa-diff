__d(
  "WAWebStatusUnreadDotPrefetcher",
  [
    "Promise",
    "WAWebAck",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebMediaDataGetters",
    "WAWebModalManager",
    "WAWebNetworkType",
    "WAWebNoop",
    "WAWebStatusCollection",
    "WAWebStatusGatingUtils",
    "WAWebStatusModel",
    "WAWebStatusVideoPrefetch",
    "WAWebStatusVisibilityUtils",
    "WAWebVideoUtils",
    "useWAWebStatusActivityIndicator",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Map(),
      u = new Set(["slow-2g", "2g"]);
    function c(e, t, n, a) {
      (t === void 0 &&
        (t = o("useWAWebStatusActivityIndicator").getStatusesBehindUnreadDot),
        n === void 0 &&
          (n = o("WAWebStatusGatingUtils").getStatusListPrefetchDepth));
      var i = a === void 0 ? {} : a,
        l = i.cancelDownloadOnStop,
        s = l === void 0 ? !1 : l,
        u = !1,
        c = r("WAWebNoop"),
        d = function () {
          ((u = !0),
            o("WAWebStatusCollection").StatusCollection.off("add", f),
            o("WAWebStatusCollection").StatusCollection.off(
              "change:msgsChanged",
              f,
            ),
            document.removeEventListener("visibilitychange", f),
            window.removeEventListener("online", f));
        },
        m = null,
        p = !1,
        f = function () {
          if (h()) {
            if (
              !o("WAWebEventsWaitForOfflineDeliveryEnd").isOfflineDeliveryEnd()
            ) {
              p ||
                ((p = !0),
                o("WAWebEventsWaitForOfflineDeliveryEnd")
                  .waitForOfflineDeliveryEnd({ ignoreInit: !0 })
                  .then(function () {
                    ((p = !1),
                      !u &&
                        o(
                          "WAWebEventsWaitForOfflineDeliveryEnd",
                        ).isOfflineDeliveryEnd() &&
                        f());
                  }));
              return;
            }
            var r = t().filter(
              o("WAWebStatusVisibilityUtils")
                .isUserOrTrustedGroupOrNewsletterStatus,
            );
            if (m == null) {
              if (
                !r.some(function (e) {
                  return g(e) != null;
                })
              )
                return;
              m = n();
            }
            var a = r.slice(0, m).map(g).filter(Boolean);
            a.length !== 0 && (d(), e() && (c = _(a)));
          }
        };
      return (
        o("WAWebEventsWaitForOfflineDeliveryEnd")
          .waitForOfflineDeliveryEnd({ ignoreInit: !0 })
          .then(function () {
            u ||
              (o("WAWebStatusCollection").StatusCollection.on("add", f),
              o("WAWebStatusCollection").StatusCollection.on(
                "change:msgsChanged",
                f,
              ),
              document.addEventListener("visibilitychange", f),
              window.addEventListener("online", f),
              f());
          }),
        function () {
          (d(), s && c());
        }
      );
    }
    var d = null,
      m = r("WAWebNoop");
    function p(e) {
      var t = g(e);
      if (!(t == null || !h())) {
        var n = t.id.toString();
        (n === d && s.has(n)) || (m(), (d = n), (m = _([t])));
      }
    }
    function _(t) {
      var a = null,
        i = !1,
        l = !1,
        u = function () {
          ((i = !0),
            a != null &&
              l &&
              o("WAWebStatusVideoPrefetch").cancelStatusVideoPrefetch(a));
        },
        c = function (t) {
          var e = f(t);
          a != null &&
            e instanceof r("WAWebStatusModel") &&
            e.msgs.get(a.id) == null &&
            u();
        };
      return (
        o("WAWebModalManager").ModalManager.on("open_media", c),
        t
          .reduce(
            function (e, t) {
              return e.then(function () {
                var e = t.id.toString();
                if (!i) {
                  a = t;
                  var n = s.get(e);
                  if (((l = n == null), n != null)) return n;
                  var r = o("WAWebStatusVideoPrefetch")
                    .prefetchStatusVideo(t)
                    .finally(function () {
                      (s.delete(e), (a = null));
                    });
                  return (s.set(e, r), r);
                }
              });
            },
            (e || (e = n("Promise"))).resolve(),
          )
          .finally(function () {
            return o("WAWebModalManager").ModalManager.off("open_media", c);
          }),
        u
      );
    }
    function f(e) {
      return e == null ||
        typeof e != "object" ||
        e.props == null ||
        typeof e.props != "object"
        ? null
        : e.props.initialStatus;
    }
    function g(e) {
      var t = e.msgs.getModelsArray().find(function (e) {
        return e.ack !== o("WAWebAck").ACK.READ;
      });
      if (t == null || !o("WAWebVideoUtils").isMsgStreamable(t)) return null;
      var n = t.mediaData;
      return n != null && o("WAWebMediaDataGetters").getMediaBlob(n) == null
        ? t
        : null;
    }
    function h() {
      return (
        document.visibilityState === "visible" &&
        navigator.onLine &&
        !y() &&
        !u.has(o("WAWebNetworkType").getEffectiveNetworkType())
      );
    }
    function y() {
      var e = Reflect.get(navigator, "connection");
      return typeof e == "object" && (e == null ? void 0 : e.saveData) === !0;
    }
    ((l.prefetchUnreadDotVideoWhenReady = c),
      (l.prefetchHoveredStatus = p),
      (l.getVideoToPrefetch = g));
  },
  98,
);
