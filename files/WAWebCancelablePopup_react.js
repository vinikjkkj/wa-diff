__d(
  "WAWebCancelablePopup.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebKeyboardHotKeys.react",
    "WAWebModal.react",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.Children;
    function d(e) {
      var t,
        n = o("react-compiler-runtime").c(24);
      r("vulture")("tUTYcONim6H06fht9ntd57FbxwQ=");
      var a;
      n[0] !== e
        ? ((a = function (n) {
            (n.stopPropagation(),
              n.preventDefault(),
              e.onCancel && e.onCancel());
          }),
          (n[0] = e),
          (n[1] = a))
        : (a = n[1]);
      var i = a,
        l = c.count(e.actions) > 0,
        d = (t = e.cancelButtonType) != null ? t : l ? "secondary" : "primary",
        m;
      n[2] !== d || n[3] !== i || n[4] !== e.onCancel
        ? ((m = e.onCancel
            ? u.jsx(o("WAWebButton.react").Button, {
                testid: void 0,
                type: d,
                onClick: i,
                children: s._(/*BTDS*/ "Cancel"),
              })
            : null),
          (n[2] = d),
          (n[3] = i),
          (n[4] = e.onCancel),
          (n[5] = m))
        : (m = n[5]);
      var p = m,
        _ = e.onCancel ? i : r("WAWebNoop"),
        f;
      n[6] !== _ ? ((f = { escape: _ }), (n[6] = _), (n[7] = f)) : (f = n[7]);
      var g = f,
        h;
      n[8] !== p || n[9] !== e.actions
        ? ((h =
            e.actions != null || p != null
              ? u.jsxs(u.Fragment, { children: [e.actions, p] })
              : null),
          (n[8] = p),
          (n[9] = e.actions),
          (n[10] = h))
        : (h = n[10]);
      var y = h,
        C;
      n[11] !== y ||
      n[12] !== e.children ||
      n[13] !== e.controlsStyle ||
      n[14] !== e.cover ||
      n[15] !== e.onDragChange ||
      n[16] !== e.onDrop ||
      n[17] !== e.title ||
      n[18] !== e.tsNavigationData ||
      n[19] !== e.type
        ? ((C = u.jsx(o("WAWebModal.react").Modal, {
            actions: y,
            controlsStyle: e.controlsStyle,
            children: e.children,
            cover: e.cover,
            onDragChange: e.onDragChange,
            onDrop: e.onDrop,
            tsNavigationData: e.tsNavigationData,
            type: e.type,
            title: e.title,
          })),
          (n[11] = y),
          (n[12] = e.children),
          (n[13] = e.controlsStyle),
          (n[14] = e.cover),
          (n[15] = e.onDragChange),
          (n[16] = e.onDrop),
          (n[17] = e.title),
          (n[18] = e.tsNavigationData),
          (n[19] = e.type),
          (n[20] = C))
        : (C = n[20]);
      var b;
      return (
        n[21] !== g || n[22] !== C
          ? ((b = u.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              handlers: g,
              children: C,
            })),
            (n[21] = g),
            (n[22] = C),
            (n[23] = b))
          : (b = n[23]),
        b
      );
    }
    l.default = d;
  },
  226,
);
