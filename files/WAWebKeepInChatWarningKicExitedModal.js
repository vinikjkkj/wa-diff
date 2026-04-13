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
      var t = e.action,
        n = e.message,
        r = e.onClose;
      c(function () {
        var e =
            t === "keep"
              ? o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL
              : o("WAWebProtobufsE2E.pb").KeepType.UNDO_KEEP_FOR_ALL,
          r = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(n, e);
        (r.set({
          kicErrorCode: o("WAWebWamEnumKicErrorCodeType").KIC_ERROR_CODE_TYPE
            .MESSAGE_FROM_EX_MEMBER,
        }),
          r.commit());
      }, []);
      var a = null;
      return (
        t === "keep"
          ? (a = s._(
              /*BTDS*/ "This message can't be kept because the message author left the chat.",
            ))
          : (a = s._(
              /*BTDS*/ "This message can't be unkept because the message author left the chat.",
            )),
        u.jsx(d, { content: a, onClose: r })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WarningKICSenderExitedModal = m));
  },
  226,
);
