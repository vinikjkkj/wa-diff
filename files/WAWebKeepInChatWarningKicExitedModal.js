__d(
  "WAWebKeepInChatWarningKicExitedModal",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
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
      var t = o("react-compiler-runtime").c(10),
        n = e.content,
        r = e.onClose,
        a;
      t[0] !== r
        ? ((a = function () {
            (o("WAWebExternalLink.react").openExternalLink(
              o("WAWebFaqUrl").getEphemeralFaqUrl(),
            ),
              r != null && r(),
              o("WAWebModalManager").ModalManager.closeSupportOrModal());
          }),
          (t[0] = r),
          (t[1] = a))
        : (a = t[1]);
      var i = a,
        l;
      t[2] !== r
        ? ((l = function () {
            (r != null && r(),
              o("WAWebModalManager").ModalManager.closeSupportOrModal());
          }),
          (t[2] = r),
          (t[3] = l))
        : (l = t[3]);
      var c = l,
        d;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = { surface: "unknown", viewName: "kic-exited-warning" }),
          (t[4] = d))
        : (d = t[4]);
      var m;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = s._(/*BTDS*/ "Learn more")), (t[5] = m))
        : (m = t[5]);
      var p;
      return (
        t[6] !== n || t[7] !== i || t[8] !== c
          ? ((p = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: d,
              onOK: c,
              cancelText: m,
              onCancel: i,
              children: n,
            })),
            (t[6] = n),
            (t[7] = i),
            (t[8] = c),
            (t[9] = p))
          : (p = t[9]),
        p
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.action,
        a = e.message,
        i = e.onClose,
        l;
      t[0] !== n || t[1] !== a
        ? ((l = function () {
            var e =
                n === "keep"
                  ? o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL
                  : o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL,
              t = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(a, e);
            (t.set({
              kicErrorCode: o("WAWebWamEnumKicErrorCodeType")
                .KIC_ERROR_CODE_TYPE.MESSAGE_FROM_EX_MEMBER,
            }),
              t.commit());
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var m = r("useWAWebStableCallback")(l),
        p,
        _;
      (t[3] !== m
        ? ((p = function () {
            m();
          }),
          (_ = [m]),
          (t[3] = m),
          (t[4] = p),
          (t[5] = _))
        : ((p = t[4]), (_ = t[5])),
        c(p, _));
      var f;
      if (n === "keep") {
        var g;
        (t[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = s._(
              /*BTDS*/ "This message can't be kept because the message author left the chat.",
            )),
            (t[6] = g))
          : (g = t[6]),
          (f = g));
      } else {
        var h;
        (t[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = s._(
              /*BTDS*/ "This message can't be unkept because the message author left the chat.",
            )),
            (t[7] = h))
          : (h = t[7]),
          (f = h));
      }
      var y;
      return (
        t[8] !== f || t[9] !== i
          ? ((y = u.jsx(d, { content: f, onClose: i })),
            (t[8] = f),
            (t[9] = i),
            (t[10] = y))
          : (y = t[10]),
        y
      );
    }
    l.WarningKICSenderExitedModal = m;
  },
  226,
);
