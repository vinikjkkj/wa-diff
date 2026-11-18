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
        m = function () {
          ((u = !0),
            o("WAWebStatusCollection").StatusCollection.off("add", g),
            o("WAWebStatusCollection").StatusCollection.off(
              "change:msgsChanged",
              g,
            ),
            document.removeEventListener("visibilitychange", g),
            window.removeEventListener("online", g));
        },
        f = null,
        g = function () {
          if (_()) {
            var r = t().filter(
              o("WAWebStatusVisibilityUtils")
                .isUserOrTrustedGroupOrNewsletterStatus,
            );
            if (f == null) {
              if (
                !r.some(function (e) {
                  return p(e) != null;
                })
              )
                return;
              f = n();
            }
            var a = r.slice(0, f).map(p).filter(Boolean);
            a.length !== 0 && (m(), e() && (c = d(a)));
          }
        };
      return (
        o("WAWebEventsWaitForOfflineDeliveryEnd")
          .waitForOfflineDeliveryEnd({ ignoreInit: !0 })
          .then(function () {
            u ||
              (o("WAWebStatusCollection").StatusCollection.on("add", g),
              o("WAWebStatusCollection").StatusCollection.on(
                "change:msgsChanged",
                g,
              ),
              document.addEventListener("visibilitychange", g),
              window.addEventListener("online", g),
              g());
          }),
        function () {
          (m(), s && c());
        }
      );
    }
    function d(t) {
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
          var e = m(t);
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
    function m(e) {
      return e == null ||
        typeof e != "object" ||
        e.props == null ||
        typeof e.props != "object"
        ? null
        : e.props.initialStatus;
    }
    function p(e) {
      var t = e.msgs.getModelsArray().find(function (e) {
        return e.ack !== o("WAWebAck").ACK.READ;
      });
      if (t == null || !o("WAWebVideoUtils").isMsgStreamable(t)) return null;
      var n = t.mediaData;
      return n != null && o("WAWebMediaDataGetters").getMediaBlob(n) == null
        ? t
        : null;
    }
    function _() {
      return (
        document.visibilityState === "visible" &&
        navigator.onLine &&
        !f() &&
        !u.has(o("WAWebNetworkType").getEffectiveNetworkType())
      );
    }
    function f() {
      var e = Reflect.get(navigator, "connection");
      return typeof e == "object" && (e == null ? void 0 : e.saveData) === !0;
    }
    l.prefetchUnreadDotVideoWhenReady = c;
  },
  98,
);
