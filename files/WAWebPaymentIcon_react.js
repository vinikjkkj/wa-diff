__d(
  "WAWebPaymentIcon.react",
  [
    "WAWebCurrencyUtils",
    "WAWebPaymentRequestIcon.react",
    "WAWebPaymentSendIcon.react",
    "WAWebProtobufsWeb.pb",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        icon: {
          position: "x1n2onr6",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xvy4d1p",
          height: "x17rw0jw",
          $$css: !0,
        },
        iconCompact: { width: "x17z2i9w", height: "x1qx5ct2", $$css: !0 },
        iconCompactSvg: { width: "x17z2i9w", height: "x1qx5ct2", $$css: !0 },
        iconSuccess: { color: "xqn6mkg", $$css: !0 },
        iconFailed: { color: "xcfled2", $$css: !0 },
        iconPending: { color: "x1bjprs3", $$css: !0 },
      };
    function d(t) {
      var n = t.ariaHidden,
        a = n === void 0 ? !1 : n,
        i = t.currency,
        l = t.isCompact,
        s = l === void 0 ? !1 : l,
        d = t.paymentStatus,
        _ = t.paymentTxnStatus,
        f = t.subtype,
        g = o("WAWebCurrencyUtils").formatLocalSymbol(i),
        h = _ != null ? p(_) : m(d),
        y =
          f === "send"
            ? u.jsx(o("WAWebPaymentSendIcon.react").PaymentSendIcon, {
                iconXstyle: s && c.iconCompactSvg,
                "aria-hidden": a,
              })
            : u.jsx(o("WAWebPaymentRequestIcon.react").PaymentRequestIcon, {
                iconXstyle: s && c.iconCompactSvg,
                "aria-hidden": a,
              });
      return u.jsxs(
        "div",
        babelHelpers.extends(
          { "data-testid": void 0 },
          (e || (e = r("stylex"))).props(c.icon, h, s && c.iconCompact),
          {
            children: [
              u.jsx(
                "div",
                babelHelpers.extends(
                  { "data-testid": void 0 },
                  {
                    0: {
                      className:
                        "x10l6tqk x13vifvy x1o0tod x42zw1d xh8yej3 x5yr21d x1f6kntn x19v9tvf x17t9dm2 x2b8uid",
                    },
                    1: {
                      className:
                        "x10l6tqk x13vifvy x1o0tod x42zw1d xh8yej3 x5yr21d x17t9dm2 x2b8uid x1pg5gke x1fc57z9",
                    },
                  }[!!s << 0],
                  { children: g },
                ),
              ),
              y,
            ],
          },
        ),
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      switch (
        e != null
          ? e
          : o("WAWebProtobufsWeb.pb").PaymentInfo$Status.UNKNOWN_STATUS
      ) {
        case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COMPLETE:
          return c.iconSuccess;
        case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.CANCELLED:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.COULD_NOT_COMPLETE:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REFUNDED:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.EXPIRED:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$Status.REJECTED:
          return c.iconFailed;
        default:
          return c.iconPending;
      }
    }
    function p(e) {
      switch (
        e != null ? e : o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.UNKNOWN
      ) {
        case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.SUCCESS:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COMPLETED:
          return c.iconSuccess;
        case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED_RISK:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.FAILED_DA_FINAL:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUNDED_TXN:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUND_FAILED:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
          .REFUND_FAILED_PROCESSING:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.REFUND_FAILED_DA:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.AUTH_CANCELED:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
          .AUTH_CANCEL_FAILED_PROCESSING:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.AUTH_CANCEL_FAILED:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus.COLLECT_FAILED:
        case o("WAWebProtobufsWeb.pb").PaymentInfo$TxnStatus
          .COLLECT_FAILED_RISK:
          return c.iconFailed;
        default:
          return c.iconPending;
      }
    }
    l.default = d;
  },
  98,
);
