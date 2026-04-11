__d(
  "WAWebGroupInviteLockModal.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebFbtCommon",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebNoop",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = e.children,
        n = e.onLearnMoreClicked,
        a = e.onOkClicked,
        i = e.title,
        l = function (t) {
          (t.stopPropagation(), t.preventDefault(), n == null || n());
        },
        c = function (t) {
          (t.stopPropagation(), t.preventDefault(), a == null || a());
        },
        d = u.jsx(o("WAWebButton.react").Button, {
          testid: void 0,
          type: "secondary",
          onClick: l,
          children: s._(/*BTDS*/ "Learn more"),
        }),
        m = u.jsx(o("WAWebButton.react").Button, {
          testid: void 0,
          type: "primary",
          onClick: c,
          children: r("WAWebFbtCommon")("OK"),
        }),
        p = { escape: n ? l : r("WAWebNoop") },
        _ = u.jsxs(u.Fragment, { children: [d, m] });
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: p,
        children: u.jsx(o("WAWebModal.react").Modal, {
          actions: _,
          children: t,
          title: i,
        }),
      });
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  226,
);
