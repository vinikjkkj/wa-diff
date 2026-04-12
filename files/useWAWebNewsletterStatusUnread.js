__d(
  "useWAWebNewsletterStatusUnread",
  [
    "WAWebContactGetters",
    "WAWebNewsletterCollection",
    "WAWebNewsletterGatingUtils",
    "WAWebStatusCollection",
    "WAWebUserPrefsNewsletter",
    "react",
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
      var e = s(u),
        t = e[0],
        n = e[1],
        a = function () {
          var e = u();
          n(function (t) {
            return t !== e ? e : t;
          });
        };
      return (
        o("useWAWebListener").useListener(
          o("WAWebStatusCollection").StatusCollection,
          "add remove change:unreadCount change:t",
          a,
        ),
        o("useWAWebListener").useListener(
          r("WAWebNewsletterCollection"),
          "newsletter_tab_close",
          a,
        ),
        t
      );
    }
    l.useWAWebNewsletterStatusUnread = c;
  },
  98,
);
