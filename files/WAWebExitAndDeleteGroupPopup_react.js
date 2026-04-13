__d(
  "WAWebExitAndDeleteGroupPopup.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebDeleteChatAction",
    "WAWebExitGroupAction",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.chat,
        a = c(!1),
        i = a[0],
        l = a[1],
        d = m,
        p;
      t[0] !== n
        ? ((p = function () {
            if ((l(!0), !r("WAWebNetworkStatus").online)) {
              (o("WAWebToastManager").ToastManager.open(
                u.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(/*BTDS*/ "Couldn't leave group. Please try again."),
                }),
              ),
                l(!1));
              return;
            }
            o("WAWebExitGroupAction")
              .sendExitGroup(n)
              .then(function (e) {
                e && o("WAWebDeleteChatAction").sendDelete(n);
              })
              .finally(function () {
                (o("WAWebModalManager").ModalManager.close(), l(!1));
              });
          }),
          (t[0] = n),
          (t[1] = p))
        : (p = t[1]);
      var _ = p,
        f;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Delete group?")), (t[2] = f))
        : (f = t[2]);
      var g = f,
        h;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(
            /*BTDS*/ "Deleting this group will not delete any downloaded content from your device.",
          )),
          (t[3] = h))
        : (h = t[3]);
      var y = h,
        C;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Delete group for me")), (t[4] = C))
        : (C = t[4]);
      var b = C,
        v;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { surface: "unknown", viewName: "exit-delete-group" }),
          (t[5] = v))
        : (v = t[5]);
      var S;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: y })),
          (t[6] = S))
        : (S = t[6]);
      var R;
      return (
        t[7] !== i || t[8] !== _
          ? ((R = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: v,
              title: g,
              onOK: _,
              okButtonType: "solid-warning",
              okSpinner: i,
              okText: b,
              onCancel: d,
              children: S,
            })),
            (t[7] = i),
            (t[8] = _),
            (t[9] = R))
          : (R = t[9]),
        R
      );
    }
    function m() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = d;
  },
  226,
);
