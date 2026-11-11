__d(
  "WAWebKeepInChatWarningUnkeepLimitExpiredModal",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebModalManager",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumKicErrorCodeType",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.expiredMessage,
        a = e.onConfirm,
        i = e.onDeleteForMe,
        l;
      t[0] !== n
        ? ((l = function () {
            var e = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(
              n,
              o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL,
            );
            (e.set({
              kicErrorCode: o("WAWebWamEnumKicErrorCodeType")
                .KIC_ERROR_CODE_TYPE.KEPT_BEYOND_EXPIRY,
            }),
              e.commit());
          }),
          (t[0] = n),
          (t[1] = l))
        : (l = t[1]);
      var d = r("useWAWebStableCallback")(l),
        m,
        p;
      (t[2] !== d
        ? ((m = function () {
            d();
          }),
          (p = [d]),
          (t[2] = d),
          (t[3] = m),
          (t[4] = p))
        : ((m = t[3]), (p = t[4])),
        c(m, p));
      var _;
      t[5] !== a
        ? ((_ = function () {
            (a == null || a(),
              o("WAWebModalManager").ModalManager.closeSupportOrModal());
          }),
          (t[5] = a),
          (t[6] = _))
        : (_ = t[6]);
      var f = _,
        g;
      t[7] !== i
        ? ((g = function () {
            (i(), o("WAWebModalManager").ModalManager.closeSupportOrModal());
          }),
          (t[7] = i),
          (t[8] = g))
        : (g = t[8]);
      var h = g,
        y;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = { surface: "unknown", viewName: "kic-unkeep-limit-expired" }),
          (t[9] = y))
        : (y = t[9]);
      var C, b;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Delete for me")),
          (b = s._(
            /*BTDS*/ "This message can't be removed from this chat because the timer has expired.",
          )),
          (t[10] = C),
          (t[11] = b))
        : ((C = t[10]), (b = t[11]));
      var v;
      return (
        t[12] !== h || t[13] !== f
          ? ((v = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: y,
              onOK: f,
              onCancel: h,
              cancelText: C,
              children: b,
            })),
            (t[12] = h),
            (t[13] = f),
            (t[14] = v))
          : (v = t[14]),
        v
      );
    }
    l.default = d;
  },
  226,
);
