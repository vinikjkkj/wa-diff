__d(
  "useWAWebNewsletterStatusUnread",
  [
    "WAWebContactGetters",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebStatusCollection",
    "WAWebUserPrefsNewsletter",
    "react",
    "react-compiler-runtime",
    "useWAWebListener",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u() {
      if (!o("WAWebNewsletterGatingUtils").isNewsletterStatusReceiverEnabled())
        return !1;
      var e = o("WAWebUserPrefsNewsletter").getNewsletterTabLastSeenTimestamp();
      return o("WAWebStatusCollection")
        .StatusCollection.getUnexpired({ containsAnyUnreadStatus: !0 })
        .some(function (t) {
          return o("WAWebContactGetters").getIsNewsletter(t.contact) && t.t > e;
        });
    }
    function c() {
      var e = o("react-compiler-runtime").c(1),
        t = s(u),
        n = t[0],
        a = t[1],
        i;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            var e = u();
            a(function (t) {
              return t !== e ? e : t;
            });
          }),
          (e[0] = i))
        : (i = e[0]);
      var l = i;
      return (
        o("useWAWebListener").useListener(
          o("WAWebStatusCollection").StatusCollection,
          "add remove change:unreadCount change:t",
          l,
        ),
        o("useWAWebListener").useListener(
          r("WAWebNewsletterCollection"),
          "newsletter_tab_close",
          l,
        ),
        n
      );
    }
    l.useWAWebNewsletterStatusUnread = c;
  },
  98,
);
