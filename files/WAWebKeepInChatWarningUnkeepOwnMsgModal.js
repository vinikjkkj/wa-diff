__d(
  "WAWebKeepInChatWarningUnkeepOwnMsgModal",
  [
    "fbt",
    "WAWebTimeSpentLoggingNavigation",
    "WDSConfirmDialog.react",
    "WDSDialogBridge",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.onCancel,
        a = e.onConfirm,
        i;
      (t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = { surface: "unknown", viewName: "kic-unkeep-own-msg" }),
          (t[0] = i))
        : (i = t[0]),
        o("WAWebTimeSpentLoggingNavigation").useTsNavigation(i));
      var l, c, d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = s._(/*BTDS*/ "Unkeep message?")),
          (c = s._(
            /*BTDS*/ "This is your message. If you choose to unkeep it, no one else can keep it again in the chat.",
          )),
          (d = s._(/*BTDS*/ "Unkeep")),
          (t[1] = l),
          (t[2] = c),
          (t[3] = d))
        : ((l = t[1]), (c = t[2]), (d = t[3]));
      var m;
      t[4] !== a
        ? ((m = function () {
            (o("WDSDialogBridge").closeWDSDialog(), a());
          }),
          (t[4] = a),
          (t[5] = m))
        : (m = t[5]);
      var p;
      t[6] !== n
        ? ((p = function () {
            (o("WDSDialogBridge").closeWDSDialog(), n == null || n());
          }),
          (t[6] = n),
          (t[7] = p))
        : (p = t[7]);
      var _;
      return (
        t[8] !== m || t[9] !== p
          ? ((_ = u.jsx(r("WDSConfirmDialog.react"), {
              title: l,
              description: c,
              confirmLabel: d,
              onConfirm: m,
              onDismiss: p,
              open: !0,
            })),
            (t[8] = m),
            (t[9] = p),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    l.default = c;
  },
  226,
);
