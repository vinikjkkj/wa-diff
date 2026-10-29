__d(
  "WAWebKeepInChatWarningKeepExpiredModal",
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
      var t = o("react-compiler-runtime").c(7),
        n = e.expiredMessage,
        a;
      t[0] !== n
        ? ((a = function () {
            var e = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(
              n,
              o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL,
            );
            (e.set({
              kicErrorCode: o("WAWebWamEnumKicErrorCodeType")
                .KIC_ERROR_CODE_TYPE.MESSAGE_EXPIRED,
            }),
              e.commit());
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = r("useWAWebStableCallback")(a),
        l,
        d;
      (t[2] !== i
        ? ((l = function () {
            i();
          }),
          (d = [i]),
          (t[2] = i),
          (t[3] = l),
          (t[4] = d))
        : ((l = t[3]), (d = t[4])),
        c(l, d));
      var m;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = { surface: "unknown", viewName: "kic-keep-expired" }),
          (t[5] = m))
        : (m = t[5]);
      var p;
      return (
        t[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: m,
              onCancel: o("WAWebModalManager").closeSupportOrModal,
              children: s._(
                /*BTDS*/ "This message can't be kept because the message timer has expired.",
              ),
            })),
            (t[6] = p))
          : (p = t[6]),
        p
      );
    }
    l.default = d;
  },
  226,
);
