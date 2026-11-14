__d(
  "WAWebStatusUnreadDotPrefetcher",
  [
    "Promise",
    "WAWebAck",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebMediaDataGetters",
    "WAWebModalManager",
    "WAWebNetworkType",
    "WAWebStatusCollection",
    "WAWebStatusGatingUtils",
    "WAWebStatusModel",
    "WAWebStatusVideoPrefetch",
    "WAWebStatusVisibilityUtils",
    "WAWebVideoUtils",
    "asyncToGeneratorRuntime",
    "useWAWebStatusActivityIndicator",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set(["slow-2g", "2g"]);
    function u() {
      var e = !1,
        t = function () {
          ((e = !0),
            o("WAWebStatusCollection").StatusCollection.off("add", r),
            o("WAWebStatusCollection").StatusCollection.off(
              "change:msgsChanged",
              r,
            ),
            document.removeEventListener("visibilitychange", r),
            window.removeEventListener("online", r));
        },
        n = null,
        r = function () {
          if (f()) {
            var e = p();
            if (n == null) {
              if (
                !e.some(function (e) {
                  return _(e) != null;
                })
              )
                return;
              n = o("WAWebStatusGatingUtils").getStatusListPrefetchDepth();
            }
            var r = e.slice(0, n).map(_).filter(Boolean);
            r.length !== 0 &&
              (t(),
              o("WAWebStatusGatingUtils").isStatusUnreadDotPrefetchEnabled() &&
                c(r));
          }
        };
      return (
        o("WAWebEventsWaitForOfflineDeliveryEnd")
          .waitForOfflineDeliveryEnd({ ignoreInit: !0 })
          .then(function () {
            e ||
              (o("WAWebStatusCollection").StatusCollection.on("add", r),
              o("WAWebStatusCollection").StatusCollection.on(
                "change:msgsChanged",
                r,
              ),
              document.addEventListener("visibilitychange", r),
              window.addEventListener("online", r),
              r());
          }),
        t
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a = null,
            i = !1,
            l = function (t) {
              var e = a,
                n = m(t);
              e != null &&
                n instanceof r("WAWebStatusModel") &&
                n.msgs.get(e.id) == null &&
                ((i = !0),
                o("WAWebStatusVideoPrefetch").cancelStatusVideoPrefetch(e));
            };
          (o("WAWebModalManager").ModalManager.on("open_media", l),
            yield t.reduce(
              function (e, t) {
                return e.then(function () {
                  if (!i)
                    return (
                      (a = t),
                      o("WAWebStatusVideoPrefetch").prefetchStatusVideo(t)
                    );
                });
              },
              (e || (e = n("Promise"))).resolve(),
            ),
            o("WAWebModalManager").ModalManager.off("open_media", l));
        })),
        d.apply(this, arguments)
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
    function p() {
      return o("useWAWebStatusActivityIndicator")
        .getStatusesBehindUnreadDot()
        .filter(
          o("WAWebStatusVisibilityUtils")
            .isUserOrTrustedGroupOrNewsletterStatus,
        );
    }
    function _(e) {
      var t = e.msgs.getModelsArray().find(function (e) {
        return e.ack !== o("WAWebAck").ACK.READ;
      });
      if (t == null || !o("WAWebVideoUtils").isMsgStreamable(t)) return null;
      var n = t.mediaData;
      return n != null && o("WAWebMediaDataGetters").getMediaBlob(n) == null
        ? t
        : null;
    }
    function f() {
      return (
        document.visibilityState === "visible" &&
        navigator.onLine &&
        !g() &&
        !s.has(o("WAWebNetworkType").getEffectiveNetworkType())
      );
    }
    function g() {
      var e = Reflect.get(navigator, "connection");
      return typeof e == "object" && (e == null ? void 0 : e.saveData) === !0;
    }
    l.prefetchUnreadDotVideoWhenReady = u;
  },
  98,
);
