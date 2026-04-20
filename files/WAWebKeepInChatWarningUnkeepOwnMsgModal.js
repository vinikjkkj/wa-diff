__d(
  "WAWebKeepInChatWarningUnkeepOwnMsgModal",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebModalManager",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.onCancel,
        r = e.onConfirm,
        a;
      t[0] !== r
        ? ((a = function () {
            (r(), o("WAWebModalManager").ModalManager.closeSupportOrModal());
          }),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== n
        ? ((l = function () {
            (n == null || n(),
              o("WAWebModalManager").ModalManager.closeSupportOrModal());
          }),
          (t[2] = n),
          (t[3] = l))
        : (l = t[3]);
      var c = l,
        d;
      t[4] !== c
        ? ((d = function () {
            c();
          }),
          (t[4] = c),
          (t[5] = d))
        : (d = t[5]);
      var m = d,
        p;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { surface: "unknown", viewName: "kic-unkeep-own-msg" }),
          (t[6] = p))
        : (p = t[6]);
      var _;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(
            /*BTDS*/ "This is your message. If you choose to unkeep it, no one else can keep it again in the chat.",
          )),
          (t[7] = _))
        : (_ = t[7]);
      var f;
      return (
        t[8] !== c || t[9] !== i || t[10] !== m
          ? ((f = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: p,
              onOK: i,
              onCancel: c,
              onOverlayClick: m,
              children: _,
            })),
            (t[8] = c),
            (t[9] = i),
            (t[10] = m),
            (t[11] = f))
          : (f = t[11]),
        f
      );
    }
    l.default = c;
  },
  226,
);
