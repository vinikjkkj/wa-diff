__d(
  "WAWebSavePopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebDrawerHeader.react",
    "WAWebEditFormTypes",
    "WAWebModal.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(22),
        n = e.afterSave,
        r = e.children,
        a = e.doSave,
        i = e.isValid,
        l = e.modalConfig,
        d = e.onCancel,
        m = e.onError,
        p = e.title,
        _ = e.tsNavigationData,
        f = c(o("WAWebEditFormTypes").EditType.EDITING),
        g = f[0],
        h = f[1],
        y;
      t[0] !== d
        ? ((y = function () {
            (o("WAWebModalManager").ModalManager.close(), d == null || d());
          }),
          (t[0] = d),
          (t[1] = y))
        : (y = t[1]);
      var C;
      t[2] !== y || t[3] !== p
        ? ((C = u.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: p,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
            onCancel: y,
          })),
          (t[2] = y),
          (t[3] = p),
          (t[4] = C))
        : (C = t[4]);
      var b = C,
        v,
        S;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "Save")),
          (S = s._(/*BTDS*/ "Cancel")),
          (t[5] = v),
          (t[6] = S))
        : ((v = t[5]), (S = t[6]));
      var R;
      t[7] !== n || t[8] !== a || t[9] !== m
        ? ((R = function () {
            (h(o("WAWebEditFormTypes").EditType.PENDING),
              a().then(
                function () {
                  (h(o("WAWebEditFormTypes").EditType.DONE),
                    n && n(),
                    o("WAWebModalManager").ModalManager.close());
                },
                function (e) {
                  (h(o("WAWebEditFormTypes").EditType.ERROR), m && m(e));
                },
              ));
          }),
          (t[7] = n),
          (t[8] = a),
          (t[9] = m),
          (t[10] = R))
        : (R = t[10]);
      var L;
      t[11] !== d
        ? ((L = function () {
            (o("WAWebModalManager").ModalManager.close(), d == null || d());
          }),
          (t[11] = d),
          (t[12] = L))
        : (L = t[12]);
      var E = g === o("WAWebEditFormTypes").EditType.PENDING,
        k = g === o("WAWebEditFormTypes").EditType.PENDING || !i,
        I;
      return (
        t[13] !== r ||
        t[14] !== l ||
        t[15] !== R ||
        t[16] !== L ||
        t[17] !== E ||
        t[18] !== k ||
        t[19] !== b ||
        t[20] !== _
          ? ((I = u.jsx(
              o("WAWebConfirmPopup.react").ConfirmPopup,
              babelHelpers.extends(
                {
                  children: r,
                  okText: v,
                  cancelText: S,
                  type: o("WAWebModal.react").ModalTheme.Auto,
                  onOK: R,
                  onCancel: L,
                  okSpinner: E,
                  okDisabled: k,
                  title: b,
                  tsNavigationData: _,
                },
                l,
              ),
            )),
            (t[13] = r),
            (t[14] = l),
            (t[15] = R),
            (t[16] = L),
            (t[17] = E),
            (t[18] = k),
            (t[19] = b),
            (t[20] = _),
            (t[21] = I))
          : (I = t[21]),
        I
      );
    }
    l.default = d;
  },
  226,
);
