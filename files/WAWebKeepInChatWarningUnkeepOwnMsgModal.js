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
      var t = o("react-compiler-runtime").c(9),
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
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { surface: "unknown", viewName: "kic-unkeep-own-msg" }),
          (t[4] = d))
        : (d = t[4]);
      var m;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(
            /*BTDS*/ "This is your message. If you choose to unkeep it, no one else can keep it again in the chat.",
          )),
          (t[5] = m))
        : (m = t[5]);
      var p;
      return (
        t[6] !== c || t[7] !== i
          ? ((p = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: d,
              onOK: i,
              onCancel: c,
              children: m,
            })),
            (t[6] = c),
            (t[7] = i),
            (t[8] = p))
          : (p = t[8]),
        p
      );
    }
    l.default = c;
  },
  226,
);
