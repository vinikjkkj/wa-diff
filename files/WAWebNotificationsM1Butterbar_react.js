__d(
  "WAWebNotificationsM1Butterbar.react",
  [
    "fbt",
    "WAWebTabOrder",
    "WDSBanner.react",
    "WDSIconIcNotificationsOff.react",
    "WDSIconIcUnread.react",
    "react",
    "react-compiler-runtime",
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
      var t = o("react-compiler-runtime").c(16),
        n = e.bannerVariant,
        a = e.onAction,
        i = e.onDismiss,
        l = e.ref,
        s,
        h,
        y;
      if (n === 1) {
        var C;
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = c()), (t[0] = C))
          : (C = t[0]),
          (s = C));
        var b;
        (t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = m()), (t[1] = b))
          : (b = t[1]),
          (h = b),
          (y = r("WDSIconIcUnread.react")));
      } else if (n === 2) {
        var v;
        (t[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = c()), (t[2] = v))
          : (v = t[2]),
          (s = v));
        var S;
        (t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = p()), (t[3] = S))
          : (S = t[3]),
          (h = S),
          (y = r("WDSIconIcUnread.react")));
      } else if (n === 3) {
        s = null;
        var R;
        (t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = _()), (t[4] = R))
          : (R = t[4]),
          (h = R),
          (y = r("WDSIconIcNotificationsOff.react")));
      } else {
        var L;
        (t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((L = f()), (t[5] = L))
          : (L = t[5]),
          (s = L));
        var E;
        (t[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = g()), (t[6] = E))
          : (E = t[6]),
          (h = E),
          (y = r("WDSIconIcNotificationsOff.react")));
      }
      var k;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = { className: "x1380le5 x14mko6t xefnzgg x1uvdrpn" }),
          (t[7] = k))
        : (k = t[7]);
      var I;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = d()), (t[8] = I))
        : (I = t[8]);
      var T;
      return (
        t[9] !== y ||
        t[10] !== a ||
        t[11] !== i ||
        t[12] !== l ||
        t[13] !== h ||
        t[14] !== s
          ? ((T = u.jsx(
              "div",
              babelHelpers.extends({}, k, {
                children: u.jsx(r("WDSBanner.react"), {
                  ref: l,
                  actionText: I,
                  onAction: a,
                  title: s,
                  body: h,
                  type: "default",
                  onDismiss: i,
                  icon: y,
                  tabOrder: o("WAWebTabOrder").TAB_ORDER.BUTTER_BAR,
                }),
              }),
            )),
            (t[9] = y),
            (t[10] = a),
            (t[11] = i),
            (t[12] = l),
            (t[13] = h),
            (t[14] = s),
            (t[15] = T))
          : (T = t[15]),
        T
      );
    }
    l.default = h;
  },
  226,
);
