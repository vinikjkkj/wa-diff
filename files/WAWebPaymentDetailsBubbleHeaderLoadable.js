__d(
  "WAWebPaymentDetailsBubbleHeaderLoadable",
  [
    "JSResourceForInteraction",
    "WAWebClickable.react",
    "WAWebFbtCommon",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WDSText.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        placeholder: {
          backgroundColor: "x1bu39yj",
          borderStartStartRadius: "x1i282gy",
          borderStartEndRadius: "xx9ypkp",
          borderEndEndRadius: "xd15eu0",
          borderEndStartRadius: "x11ecxm0",
          height: "xnxb3zj",
          marginBottom: "xcytdqz",
          width: "xh8yej3",
          $$css: !0,
        },
        pixCodePlaceholder: { height: "x185x1x2", $$css: !0 },
        retry: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      },
      d = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebPaymentDetailsBubbleHeader.react",
        )
          .__setRef("WAWebPaymentDetailsBubbleHeaderLoadable")
          .load();
      }, "WAWebPaymentDetailsBubbleHeader"),
      m = r("WAWebLoadable")({
        loader: d,
        loading: function (t) {
          return u.jsx(_, { hasFailed: t.error != null, onRetry: t.retry });
        },
        renderLoadingImmediately: !0,
      }),
      p = r("WAWebLoadable")({
        loader: d,
        loading: function (t) {
          return u.jsx(_, {
            hasFailed: t.error != null,
            isPixCode: !0,
            onRetry: t.retry,
          });
        },
        renderLoadingImmediately: !0,
      });
    function _(t) {
      var n = t.hasFailed,
        a = t.isPixCode,
        i = a === void 0 ? !1 : a,
        l = t.onRetry,
        s = i ? c.pixCodePlaceholder : null;
      return n
        ? u.jsx(o("WAWebClickable.react").Clickable, {
            dataTestId: "payment-details-bubble-header-retry",
            onClick: function (t) {
              (t.stopPropagation(), l());
            },
            xstyle: [c.placeholder, s, c.retry],
            children: u.jsx(r("WDSText.react"), {
              colorName: "contentDeemphasized",
              type: "Body2",
              children: r("WAWebFbtCommon")("Try again"),
            }),
          })
        : u.jsx(
            "div",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(c.placeholder, s),
              {
                "data-testid": i
                  ? "payment-details-pix-code-bubble-header-placeholder"
                  : "payment-details-bubble-header-placeholder",
              },
            ),
          );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.WAWebPaymentDetailsBubbleHeaderLoadable = m),
      (l.WAWebPaymentDetailsPixCodeBubbleHeaderLoadable = p));
  },
  98,
);
