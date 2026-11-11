__d(
  "WAWebPaymentDetailsBubbleHeaderLoadable",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebClickable.react",
    "WAWebDisplayType",
    "WAWebFbtCommon",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebMsgCollection",
    "WAWebPaymentDetailsGating",
    "WDSText.react",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = u.useEffect,
      m = {
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
      p = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebPaymentDetailsBubbleHeader.react",
        )
          .__setRef("WAWebPaymentDetailsBubbleHeaderLoadable")
          .load();
      }, "WAWebPaymentDetailsBubbleHeader");
    function _(e, t) {
      var n = o("react-compiler-runtime").c(4),
        r = t === o("WAWebDisplayType").DISPLAY_TYPE.CONVERSATION,
        a,
        i;
      (n[0] !== r || n[1] !== e
        ? ((a = function () {
            var t = o("WAWebMsgCollection").MsgCollection.get(e);
            r &&
              t != null &&
              o("WAWebPaymentDetailsGating").canLogPaymentBubbleView(t) &&
              b(e);
          }),
          (i = [r, e]),
          (n[0] = r),
          (n[1] = e),
          (n[2] = a),
          (n[3] = i))
        : ((a = n[2]), (i = n[3])),
        d(a, i));
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.displayType,
        r = e.isPaymentDetailsEnabled,
        a = e.legacyHeader,
        i = e.msgKey;
      if ((_(i, n), !r)) return a;
      var l;
      return (
        t[0] !== i
          ? ((l = c.jsx(g, { msgKey: i })), (t[0] = i), (t[1] = l))
          : (l = t[1]),
        l
      );
    }
    var g = r("WAWebLoadable")({
        loader: p,
        loading: function (t) {
          return c.jsx(y, { hasFailed: t.error != null, onRetry: t.retry });
        },
        renderLoadingImmediately: !0,
      }),
      h = r("WAWebLoadable")({
        loader: p,
        loading: function (t) {
          return c.jsx(y, {
            hasFailed: t.error != null,
            isPixCode: !0,
            onRetry: t.retry,
          });
        },
        renderLoadingImmediately: !0,
      });
    function y(e) {
      var t = e.hasFailed,
        n = e.isPixCode,
        a = n === void 0 ? !1 : n,
        i = e.onRetry,
        l = a ? m.pixCodePlaceholder : null;
      return t
        ? c.jsx(o("WAWebClickable.react").Clickable, {
            dataTestId: "payment-details-bubble-header-retry",
            onClick: function (t) {
              (t.stopPropagation(), i());
            },
            xstyle: [m.placeholder, l, m.retry],
            children: c.jsx(r("WDSText.react"), {
              colorName: "contentDeemphasized",
              type: "Body2",
              children: r("WAWebFbtCommon")("Try again"),
            }),
          })
        : c.jsx(
            "div",
            babelHelpers.extends(
              {},
              (s || (s = r("stylex"))).props(m.placeholder, l),
              {
                "data-testid": a
                  ? "payment-details-pix-code-bubble-header-placeholder"
                  : "payment-details-bubble-header-placeholder",
              },
            ),
          );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    var C = r("WAWebLazyLoadedRetriable")(function () {
      return r("JSResourceForInteraction")("WAWebPaymentDetailsLogger")
        .__setRef("WAWebPaymentDetailsBubbleHeaderLoadable")
        .load();
    }, "WAWebPaymentDetailsLogger");
    function b(t) {
      C()
        .then(function (e) {
          return e.logPaymentBubbleViewOnce(t);
        })
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-details] could not load the payment bubble view logger",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("br-payment-bubble-view-logger-load-failed");
        });
    }
    ((l.usePaymentBubbleViewLogging = _),
      (l.WAWebPaymentInfoBubbleHeader = f),
      (l.WAWebPaymentDetailsBubbleHeaderLoadable = g),
      (l.WAWebPaymentDetailsPixCodeBubbleHeaderLoadable = h));
  },
  98,
);
