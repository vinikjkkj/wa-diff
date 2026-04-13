__d(
  "useWAWebStatusActivityIndicator",
  [
    "WAWebCollectionConstants",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebStatusCollection",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useRef,
      c = s.useState;
    function d() {
      var e = o("react-compiler-runtime").c(6),
        t = c(m),
        n = t[0],
        r = t[1],
        a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = {}), (e[0] = a))
        : (a = e[0]);
      var i = u(a),
        l;
      e[1] !== n
        ? ((l = function () {
            var e = o("WAWebStatusCollection")
              .StatusCollection.getUnexpired({ containsAnyUnreadStatus: !0 })
              .some(function (e) {
                var t = i.current[e.id.toString()],
                  n = !t || e.t > t;
                return !e.contact.statusMute && e.unreadCount > 0 && n;
              });
            e !== n && r(e);
          }),
          (e[1] = n),
          (e[2] = l))
        : (l = e[2]);
      var s = l;
      (o("useWAWebListener").useListener(
        o("WAWebContactCollection").ContactCollection,
        o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED,
        s,
      ),
        o("useWAWebListener").useListener(
          o("WAWebStatusCollection").StatusCollection,
          "add remove change:unreadCount change:t",
          s,
        ));
      var d;
      if (e[3] === Symbol.for("react.memo_cache_sentinel")) {
        var p = function () {
          o("WAWebStatusCollection")
            .StatusCollection.getUnexpired({ containsAnyUnreadStatus: !0 })
            .forEach(function (e) {
              i.current[e.id.toString()] = e.t;
            });
        };
        ((d = function () {
          (p(), r(!1));
        }),
          (e[3] = d));
      } else d = e[3];
      var _ = d,
        f;
      return (
        e[4] !== n
          ? ((f = { hasUnread: n, clearUnreadActivity: _ }),
            (e[4] = n),
            (e[5] = f))
          : (f = e[5]),
        f
      );
    }
    function m() {
      return o("WAWebStatusCollection")
        .StatusCollection.getUnexpired({ containsAnyUnreadStatus: !0 })
        .some(p);
    }
    function p(e) {
      return (
        e.unreadCount > 0 &&
        !o("WAWebContactGetters").getCalculatedStatusMute(e.contact)
      );
    }
    l.useWAWebStatusActivityIndicator = d;
  },
  98,
);
