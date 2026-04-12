__d(
  "useWAWebStatusActivityIndicator",
  [
    "WAWebCollectionConstants",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebStatusCollection",
    "react",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useRef,
      c = s.useState;
    function d() {
      var e = c(function () {
          return o("WAWebStatusCollection")
            .StatusCollection.getUnexpired({ containsAnyUnreadStatus: !0 })
            .some(function (e) {
              return (
                e.unreadCount > 0 &&
                !o("WAWebContactGetters").getCalculatedStatusMute(e.contact)
              );
            });
        }),
        t = e[0],
        n = e[1],
        r = u({}),
        a = function () {
          var e = o("WAWebStatusCollection")
            .StatusCollection.getUnexpired({ containsAnyUnreadStatus: !0 })
            .some(function (e) {
              var t = r.current[e.id.toString()],
                n = !t || e.t > t;
              return !e.contact.statusMute && e.unreadCount > 0 && n;
            });
          e !== t && n(e);
        };
      (o("useWAWebListener").useListener(
        o("WAWebContactCollection").ContactCollection,
        o("WAWebCollectionConstants").COLLECTION_HAS_SYNCED,
        a,
      ),
        o("useWAWebListener").useListener(
          o("WAWebStatusCollection").StatusCollection,
          "add remove change:unreadCount change:t",
          a,
        ));
      var i = function () {
          o("WAWebStatusCollection")
            .StatusCollection.getUnexpired({ containsAnyUnreadStatus: !0 })
            .forEach(function (e) {
              r.current[e.id.toString()] = e.t;
            });
        },
        l = function () {
          (i(), n(!1));
        };
      return { hasUnread: t, clearUnreadActivity: l };
    }
    l.useWAWebStatusActivityIndicator = d;
  },
  98,
);
