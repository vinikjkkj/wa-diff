__d(
  "WAWebKeepInChatWarningCannotKeepSenderSuperpower",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebEphemeralKeepInChatWamUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebProtobufsE2E.pb",
    "WAWebWamEnumKicErrorCodeType",
    "WDSIllustrationWdsPictoGenericWarning.react",
    "react",
    "react-compiler-runtime",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        header: { backgroundColor: "xjkh2o", textAlign: "x2b8uid", $$css: !0 },
        icon: {
          textAlign: "x2b8uid",
          marginTop: "x98l61r",
          marginInlineEnd: "xviac27",
          marginBottom: "x1ua1l7f",
          marginInlineStart: "xlese2p",
          $$css: !0,
        },
      },
      m = function () {
        (o("WAWebExternalLink.react").openExternalLink(
          o("WAWebFaqUrl").getEphemeralFaqUrl(),
        ),
          o("WAWebModalManager").ModalManager.closeSupportOrModal());
      },
      p = function () {
        o("WAWebModalManager").ModalManager.closeSupportOrModal();
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.message,
        a;
      t[0] !== n
        ? ((a = function () {
            var e = o("WAWebEphemeralKeepInChatWamUtils").getBaseErrorLog(
              n,
              o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL,
            );
            (e.set({
              kicErrorCode: o("WAWebWamEnumKicErrorCodeType")
                .KIC_ERROR_CODE_TYPE.SENDER_DISABLED,
            }),
              e.commit());
          }),
          (t[0] = n),
          (t[1] = a))
        : (a = t[1]);
      var i = r("useWAWebStableCallback")(a),
        l,
        _;
      (t[2] !== i
        ? ((l = function () {
            i();
          }),
          (_ = [i]),
          (t[2] = i),
          (t[3] = l),
          (t[4] = _))
        : ((l = t[3]), (_ = t[4])),
        c(l, _));
      var f;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = u.jsx(o("WAWebFlex.react").FlexRow, {
            align: "center",
            justify: "center",
            xstyle: d.header,
            children: u.jsx(r("WDSIllustrationWdsPictoGenericWarning.react"), {
              testid: "keep-warning",
              xstyle: d.icon,
            }),
          })),
          (t[5] = f))
        : (f = t[5]);
      var g = f,
        h;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsx("div", {
            className: "xk50ysn x1603h9y x1u7k74 xcytdqz",
            children: s._(/*BTDS*/ "Message cannot be kept"),
          })),
          (t[6] = h))
        : (h = t[6]);
      var y = h,
        C;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { surface: "unknown", viewName: "kic-cannot-keep-sender" }),
          (t[7] = C))
        : (C = t[7]);
      var b;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = s._(/*BTDS*/ "Learn more")), (t[8] = b))
        : (b = t[8]);
      var v;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { className: "x9f619 x1l2rt3b" }), (t[9] = v))
        : (v = t[9]);
      var S;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = { className: "x1sgpng xpwdb9g x10tge7n xefazk8" }), (t[10] = S))
        : (S = t[10]);
      var R;
      return (
        t[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: C,
              onOK: p,
              onCancel: m,
              cancelText: b,
              type: o("WAWebModal.react").ModalTheme.Flex,
              children: u.jsxs(
                "div",
                babelHelpers.extends({}, v, {
                  children: [
                    g,
                    u.jsxs(
                      "div",
                      babelHelpers.extends({}, S, {
                        children: [
                          y,
                          s._(
                            /*BTDS*/ "The author of this message has unkept it, so no one else can keep it again in the chat.",
                          ),
                        ],
                      }),
                    ),
                  ],
                }),
              ),
            })),
            (t[11] = R))
          : (R = t[11]),
        R
      );
    }
    l.default = _;
  },
  226,
);
