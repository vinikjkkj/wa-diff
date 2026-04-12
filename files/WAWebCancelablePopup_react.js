__d(
  "WAWebCancelablePopup.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebNoop",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.Children;
    function d(e) {
      var t;
      r("vulture")("tUTYcONim6H06fht9ntd57FbxwQ=");
      function n(t) {
        (t.stopPropagation(), t.preventDefault(), e.onCancel && e.onCancel());
      }
      var a = c.count(e.actions) > 0,
        i = (t = e.cancelButtonType) != null ? t : a ? "secondary" : "primary",
        l = e.onCancel
          ? u.jsx(o("WAWebButton.react").Button, {
              testid: void 0,
              type: i,
              onClick: n,
              children: s._(/*BTDS*/ "Cancel"),
            })
          : null,
        d = { escape: e.onCancel ? n : r("WAWebNoop") },
        m =
          e.actions != null || l != null
            ? u.jsxs(u.Fragment, { children: [e.actions, l] })
            : null;
      return u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
        handlers: d,
        children: u.jsx(o("WAWebModal.react").Modal, {
          actions: m,
          controlsStyle: e.controlsStyle,
          children: e.children,
          cover: e.cover,
          onDragChange: e.onDragChange,
          onDrop: e.onDrop,
          tsNavigationData: e.tsNavigationData,
          type: e.type,
          title: e.title,
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
