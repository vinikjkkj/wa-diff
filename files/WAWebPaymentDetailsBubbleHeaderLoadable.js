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
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
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
        retry: {
          alignItems: "x6s0dn4",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      },
      c = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebPaymentDetailsBubbleHeader.react",
        )
          .__setRef("WAWebPaymentDetailsBubbleHeaderLoadable")
          .load();
      }, "WAWebPaymentDetailsBubbleHeader"),
      d = r("WAWebLoadable")({
        loader: c,
        loading: function (t) {
          return s.jsx(m, { hasFailed: t.error != null, onRetry: t.retry });
        },
        renderLoadingImmediately: !0,
      });
    function m(e) {
      var t = e.hasFailed,
        n = e.onRetry;
      return t
        ? s.jsx(o("WAWebClickable.react").Clickable, {
            dataTestId: "payment-details-bubble-header-retry",
            onClick: function (t) {
              (t.stopPropagation(), n());
            },
            xstyle: [u.placeholder, u.retry],
            children: s.jsx(r("WDSText.react"), {
              colorName: "contentDeemphasized",
              type: "Body2",
              children: r("WAWebFbtCommon")("Try again"),
            }),
          })
        : s.jsx("div", {
            className:
              "x1bu39yj x1i282gy xx9ypkp xd15eu0 x11ecxm0 xnxb3zj xcytdqz xh8yej3",
            "data-testid": "payment-details-bubble-header-placeholder",
          });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WAWebPaymentDetailsBubbleHeaderLoadable = d));
  },
  98,
);
