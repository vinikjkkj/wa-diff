__d(
  "WAWebUnnamedNewGroupAlreadyExistsModal.react",
  [
    "fbt",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebConfirmPopup.react",
    "WAWebFindChatAction",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(16),
        n = e.existingUnnamedGroup,
        r = e.onCancel,
        a = e.onCreateNewGroupClick,
        i = e.onEnd,
        l = e.ref,
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Create new group")), (t[0] = c))
        : (c = t[0]);
      var m;
      t[1] !== a
        ? ((m = { text: c, onClick: a }), (t[1] = a), (t[2] = m))
        : (m = t[2]);
      var p = m,
        _;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { surface: "unknown", viewName: "unnamed-group-exists" }),
          (t[3] = _))
        : (_ = t[3]);
      var f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Group already exists")), (t[4] = f))
        : (f = t[4]);
      var g;
      t[5] !== n || t[6] !== i
        ? ((g = function () {
            (i(),
              o("WAWebFindChatAction")
                .findOrCreateLatestChat(n, "existingUnnamedGroup")
                .then(d));
          }),
          (t[5] = n),
          (t[6] = i),
          (t[7] = g))
        : (g = t[7]);
      var h, y;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "View group")),
          (y = s._(/*BTDS*/ "Cancel")),
          (t[8] = h),
          (t[9] = y))
        : ((h = t[8]), (y = t[9]));
      var C;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(
            /*BTDS*/ "You already have this group without a name. To create a new group, give it a name.",
          )),
          (t[10] = C))
        : (C = t[10]);
      var b;
      return (
        t[11] !== p || t[12] !== r || t[13] !== l || t[14] !== g
          ? ((b = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: _,
              ref: l,
              title: f,
              onOK: g,
              onCancel: r,
              okText: h,
              cancelText: y,
              extraButtonProps: p,
              children: C,
            })),
            (t[11] = p),
            (t[12] = r),
            (t[13] = l),
            (t[14] = g),
            (t[15] = b))
          : (b = t[15]),
        b
      );
    }
    function d(e) {
      var t = e.chat;
      o("WAWebCmd")
        .Cmd.openChatBottom({ chat: t })
        .then(function (e) {
          e &&
            (o("WAWebComposeBoxActions").ComposeBoxActions.focus(t),
            o("WAWebCmd").Cmd.endFlow());
        });
    }
    l.default = c;
  },
  226,
);
