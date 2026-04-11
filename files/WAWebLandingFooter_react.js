__d(
  "WAWebLandingFooter.react",
  [
    "fbt",
    "WAWebAppRootInteractionContext.react",
    "WAWebFlex.react",
    "WAWebInteractionTracePolicy",
    "WAWebLinkDeviceCommonInstructions.react",
    "WAWebLockOutlineIcon.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        landingFooterWrapper: { paddingTop: "x1y1aw1k", $$css: !0 },
        noWaAccountText: {
          fontSize: "x1c3i2sq",
          lineHeight: "x1a6qonq",
          $$css: !0,
        },
        externalHelpLinkText: {
          fontSize: "x1jchvi3",
          fontWeight: "xk50ysn",
          lineHeight: "x1ud3kw6",
          $$css: !0,
        },
        e2ee: {
          color: "x9tdjrj",
          lineHeight: "x9d7mpn",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(11),
        a = e.isWebReg,
        i = e.onClick,
        l = o(
          "WAWebAppRootInteractionContext.react",
        ).useInteractionWithAppRootContext(
          r("WAWebInteractionTracePolicy").NAVIGATION_LOGIN_GET_STARTED,
          !1,
          !0,
        ),
        d = l.startInteraction,
        p;
      t[0] !== i || t[1] !== d
        ? ((p = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              (d(), yield i());
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (t[0] = i),
          (t[1] = d),
          (t[2] = p))
        : (p = t[2]);
      var _ = p,
        f;
      t[3] !== _ || t[4] !== a
        ? ((f = u.jsx(m, { isWebReg: a, onClick: _ })),
          (t[3] = _),
          (t[4] = a),
          (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = u.jsx(o("WAWebFlex.react").FlexItem, {
            children: u.jsx(o("WAWebLockOutlineIcon.react").LockOutlineIcon, {
              width: 20,
              iconXstyle: c.e2ee,
            }),
          })),
          (t[6] = g))
        : (g = t[6]);
      var h, y;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = u.jsxs(o("WAWebFlex.react").FlexRow, {
            columnGap: 4,
            align: "center",
            children: [
              g,
              u.jsx(o("WAWebFlex.react").FlexItem, {
                xstyle: c.e2ee,
                children: s._(
                  /*BTDS*/ "Your personal messages are end-to-end encrypted",
                ),
              }),
            ],
          })),
          (y = u.jsx(o("WAWebLinkDeviceCommonInstructions.react").TCLink, {})),
          (t[7] = h),
          (t[8] = y))
        : ((h = t[7]), (y = t[8]));
      var C;
      return (
        t[9] !== f
          ? ((C = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: c.landingFooterWrapper,
              rowGap: 24,
              children: [f, h, y],
            })),
            (t[9] = f),
            (t[10] = C))
          : (C = t[10]),
        C
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.isWebReg,
        r = e.onClick;
      if (n) return null;
      var a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(o("WAWebFlex.react").FlexColumn, {
            paddingTop: 8,
            xstyle: c.noWaAccountText,
            children: s._(/*BTDS*/ "Don't have a WhatsApp account?"),
          })),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "Get started")), (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== r
          ? ((l = u.jsxs(o("WAWebFlex.react").FlexRow, {
              columnGap: 8,
              children: [
                a,
                u.jsx(o("WAWebFlex.react").FlexColumn, {
                  paddingTop: 12,
                  xstyle: c.externalHelpLinkText,
                  children: u.jsx(
                    o("WAWebLinkDeviceCommonInstructions.react")
                      .ExternalHelpLink,
                    { text: i, onClick: r },
                  ),
                }),
              ],
            })),
            (t[2] = r),
            (t[3] = l))
          : (l = t[3]),
        l
      );
    }
    l.default = d;
  },
  226,
);
