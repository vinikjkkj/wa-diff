__d(
  "WAWebBizAddPixKeyPromo.react",
  [
    "fbt",
    "WAWebBannerEventWamEvent",
    "WAWebBizAddPixKeyButton.react",
    "WAWebFlex.react",
    "WAWebWamEnumBannerOperations",
    "WAWebWamEnumBannerTypes",
    "WAWebWdsIllSmbGetPaidPixIcon.react",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect,
      d = {
        container: {
          paddingTop: "x1p57kb1",
          paddingBottom: "xvpt6g3",
          paddingInlineStart: "xdx6fka",
          paddingInlineEnd: "xvtqlqk",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
        icon: {
          marginBottom: "xdqhqc9",
          marginInlineStart: "xlese2p",
          $$css: !0,
        },
        text: { textAlign: "x2b8uid", $$css: !0 },
        title: { marginBottom: "x1ua1l7f", $$css: !0 },
      };
    function m() {
      var e = o("react-compiler-runtime").c(5),
        t;
      (e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = []), (e[0] = t))
        : (t = e[0]),
        c(p, t));
      var n;
      e[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = u.jsx(
            o("WAWebWdsIllSmbGetPaidPixIcon.react").WdsIllSmbGetPaidPixIcon,
            { iconXstyle: d.icon },
          )),
          (e[1] = n))
        : (n = e[1]);
      var a, i;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = u.jsx(r("WDSText.react"), {
            type: "Headline2",
            colorName: "contentDefault",
            xstyle: [d.text, d.title],
            children: s._(/*BTDS*/ "Get paid with Pix"),
          })),
          (i = { className: "xv6tirj" }),
          (e[2] = a),
          (e[3] = i))
        : ((a = e[2]), (i = e[3]));
      var l;
      return (
        e[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              align: "center",
              xstyle: d.container,
              children: [
                n,
                a,
                u.jsx(
                  "div",
                  babelHelpers.extends({}, i, {
                    children: u.jsx(r("WDSText.react"), {
                      type: "Body2",
                      colorName: "contentDeemphasized",
                      xstyle: d.text,
                      children: s._(
                        /*BTDS*/ "Make it easy for customers to pay you by quickly sending your Pix key in chat.",
                      ),
                    }),
                  }),
                ),
                u.jsx(r("WAWebBizAddPixKeyButton.react"), {}),
              ],
            })),
            (e[4] = l))
          : (l = e[4]),
        l
      );
    }
    function p() {
      var e = new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
        bannerOperation: o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS
          .SHOWN,
        bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
          .PAYMENTS_HOME_NUX_BANNER,
      });
      e.commit();
    }
    l.default = m;
  },
  226,
);
