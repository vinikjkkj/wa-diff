__d(
  "WAWebKeepInChatWarningUnkeepExpiredModal",
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
      var t = o("react-compiler-runtime").c(16),
        n = e.expiredMessage,
        a = e.onCancel,
        i = e.onConfirm,
        l;
      t[0] !== i
        ? ((l = function () {
            (i(), o("WAWebModalManager").ModalManager.closeSupportOrModal());
          }),
          (t[0] = i),
          (t[1] = l))
        : (l = t[1]);
      var d = l,
        m;
      t[2] !== a
        ? ((m = function () {
            (a(), o("WAWebModalManager").ModalManager.closeSupportOrModal());
          }),
          (t[2] = a),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        _;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = u.jsx("div", {
            className: "x1603h9y x1u7k74 x14ug900",
            children: s._(/*BTDS*/ "This message will disappear from the chat"),
          })),
          (t[4] = _))
        : (_ = t[4]);
      var f = _,
        g;
      t[5] !== n
        ? ((g = function () {
            var e = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(
              n,
              o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL,
            );
            (e.set({
              kicErrorCode: o("WAWebWamEnumKicErrorCodeType")
                .KIC_ERROR_CODE_TYPE.MESSAGE_EXPIRED,
            }),
              e.commit());
          }),
          (t[5] = n),
          (t[6] = g))
        : (g = t[6]);
      var h = r("useWAWebStableCallback")(g),
        y,
        C;
      (t[7] !== h
        ? ((y = function () {
            h();
          }),
          (C = [h]),
          (t[7] = h),
          (t[8] = y),
          (t[9] = C))
        : ((y = t[8]), (C = t[9])),
        c(y, C));
      var b;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = { surface: "unknown", viewName: "kic-unkeep-expired" }),
          (t[10] = b))
        : (b = t[10]);
      var v;
      t[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "Let it disappear")), (t[11] = v))
        : (v = t[11]);
      var S;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = u.jsx("div", {
            className: "x1jchvi3 x1xet1wb x14ug900",
            children: s._(
              /*BTDS*/ "The timer for this message has expired so it will disappear from the chat.",
            ),
          })),
          (t[12] = S))
        : (S = t[12]);
      var R;
      return (
        t[13] !== p || t[14] !== d
          ? ((R = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: b,
              title: f,
              onOK: d,
              onCancel: p,
              okText: v,
              okButtonType: "secondary",
              children: S,
            })),
            (t[13] = p),
            (t[14] = d),
            (t[15] = R))
          : (R = t[15]),
        R
      );
    }
    l.default = d;
  },
  226,
);
