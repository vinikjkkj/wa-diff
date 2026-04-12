__d(
  "WAWebNotificationsM1Butterbar.react",
  [
    "fbt",
    "WAWebTabOrder",
    "WDSBanner.react",
    "WDSIconIcNotificationsOff.react",
    "WDSIconIcUnread.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(/*BTDS*/ "Get message notifications");
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return s._(/*BTDS*/ "Turn on");
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return s._(/*BTDS*/ "Make sure you know when you have new messages.");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return s._(
        /*BTDS*/ "You\u2019ll only be notified if you\u2019re logged in and WhatsApp is open on a tab.",
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(/*BTDS*/ "Message notifications are off.");
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return s._(/*BTDS*/ "Notifications are off");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(/*BTDS*/ "Get notifications for messages or groups.");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.bannerVariant,
        n = e.onAction,
        a = e.onDismiss,
        i = e.ref,
        l,
        s,
        h;
      return (
        t === 1
          ? ((l = c()), (s = m()), (h = r("WDSIconIcUnread.react")))
          : t === 2
            ? ((l = c()), (s = p()), (h = r("WDSIconIcUnread.react")))
            : t === 3
              ? ((l = null),
                (s = _()),
                (h = r("WDSIconIcNotificationsOff.react")))
              : ((l = f()),
                (s = g()),
                (h = r("WDSIconIcNotificationsOff.react"))),
        u.jsx("div", {
          className: "x1380le5 x14mko6t xefnzgg x1uvdrpn",
          children: u.jsx(r("WDSBanner.react"), {
            ref: i,
            actionText: d(),
            onAction: n,
            title: l,
            body: s,
            type: "default",
            onDismiss: a,
            icon: h,
            tabOrder: o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR,
          }),
        })
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
