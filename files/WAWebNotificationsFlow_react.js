__d(
  "WAWebNotificationsFlow.react",
  [
    "$InternalEnum",
    "WAWebCallsNotificationsDrawer.react",
    "WAWebDirectMessagesNotificationsDrawer.react",
    "WAWebGroupMessagesNotificationsDrawer.react",
    "WAWebNotificationsDrawer.react",
    "WAWebStatusUpdatesNotificationsDrawer.react",
    "react",
    "react-compiler-runtime",
    "useWAWebFlow",
    "useWAWebFocusOnMount",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = n("$InternalEnum").Mirrored([
        "Notifications",
        "DirectMessages",
        "GroupMessages",
        "StatusUpdates",
        "Calls",
      ]);
    function c(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.onEnd,
        a;
      t[0] !== n
        ? ((a = {
            transitions: o("useWAWebFlow").FlowTransitions.DrawerRight,
            onEnd: n,
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = o("useWAWebFlow").useFlow(u.Notifications, a),
        l = i[0],
        c = i[1],
        d = r("useWAWebFocusOnMount")();
      if (!c.step) return null;
      var m;
      t[2] !== c
        ? ((m = function () {
            c.pop();
          }),
          (t[2] = c),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _;
      e: switch (c.step) {
        case u.Notifications: {
          var f, g, h, y;
          t[4] !== c
            ? ((f = function () {
                return c.push(u.DirectMessages);
              }),
              (g = function () {
                return c.push(u.GroupMessages);
              }),
              (h = function () {
                return c.push(u.StatusUpdates);
              }),
              (y = function () {
                return c.push(u.Calls);
              }),
              (t[4] = c),
              (t[5] = f),
              (t[6] = g),
              (t[7] = h),
              (t[8] = y))
            : ((f = t[5]), (g = t[6]), (h = t[7]), (y = t[8]));
          var C;
          (t[9] !== p ||
          t[10] !== f ||
          t[11] !== g ||
          t[12] !== h ||
          t[13] !== y
            ? ((C = s.jsx(r("WAWebNotificationsDrawer.react"), {
                onClose: p,
                onCancel: p,
                onOpenDirectMessages: f,
                onOpenGroupMessages: g,
                onOpenStatusUpdates: h,
                onOpenCalls: y,
              })),
              (t[9] = p),
              (t[10] = f),
              (t[11] = g),
              (t[12] = h),
              (t[13] = y),
              (t[14] = C))
            : (C = t[14]),
            (_ = C));
          break e;
        }
        case u.DirectMessages: {
          var b;
          (t[15] !== p
            ? ((b = s.jsx(r("WAWebDirectMessagesNotificationsDrawer.react"), {
                onClose: p,
              })),
              (t[15] = p),
              (t[16] = b))
            : (b = t[16]),
            (_ = b));
          break e;
        }
        case u.GroupMessages: {
          var v;
          (t[17] !== p
            ? ((v = s.jsx(r("WAWebGroupMessagesNotificationsDrawer.react"), {
                onClose: p,
              })),
              (t[17] = p),
              (t[18] = v))
            : (v = t[18]),
            (_ = v));
          break e;
        }
        case u.StatusUpdates: {
          var S;
          (t[19] !== p
            ? ((S = s.jsx(r("WAWebStatusUpdatesNotificationsDrawer.react"), {
                onClose: p,
              })),
              (t[19] = p),
              (t[20] = S))
            : (S = t[20]),
            (_ = S));
          break e;
        }
        case u.Calls: {
          var R;
          (t[21] !== p
            ? ((R = s.jsx(r("WAWebCallsNotificationsDrawer.react"), {
                onClose: p,
              })),
              (t[21] = p),
              (t[22] = R))
            : (R = t[22]),
            (_ = R));
        }
      }
      var L;
      return (
        t[23] !== l || t[24] !== _ || t[25] !== c || t[26] !== d
          ? ((L = s.jsx(l, { ref: d, flow: c, children: _ })),
            (t[23] = l),
            (t[24] = _),
            (t[25] = c),
            (t[26] = d),
            (t[27] = L))
          : (L = t[27]),
        L
      );
    }
    l.NotificationsFlow = c;
  },
  98,
);
