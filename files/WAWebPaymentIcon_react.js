__d(
  "WAWebPaymentIcon.react",
  [
    "WAWebCurrencyUtils",
    "WAWebPaymentRequestIcon.react",
    "WAWebPaymentSendIcon.react",
    "WAWebProtobufsWeb.pb",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(24),
        a = t.ariaHidden,
        i = t.currency,
        l = t.isCompact,
        s = t.paymentStatus,
        d = t.paymentTxnStatus,
        _ = t.subtype,
        f = a === void 0 ? !1 : a,
        g = l === void 0 ? !1 : l,
        h;
      n[0] !== i
        ? ((h = o("WAWebCurrencyUtils").formatLocalSymbol(i)),
          (n[0] = i),
          (n[1] = h))
        : (h = n[1]);
      var y = h,
        C,
        b,
        v;
      if (n[2] !== f || n[3] !== g || n[4] !== s || n[5] !== d || n[6] !== _) {
        var S = d != null ? p(d) : m(s),
          R;
        (n[10] !== f || n[11] !== g || n[12] !== _
          ? ((R =
              _ === "send"
                ? u.jsx(o("WAWebPaymentSendIcon.react").PaymentSendIcon, {
                    iconXstyle: g && c.iconCompactSvg,
                    "aria-hidden": f,
                  })
                : u.jsx(o("WAWebPaymentRequestIcon.react").PaymentRequestIcon, {
                    iconXstyle: g && c.iconCompactSvg,
                    "aria-hidden": f,
                  })),
            (n[10] = f),
            (n[11] = g),
            (n[12] = _),
            (n[13] = R))
          : (R = n[13]),
          (C = R),
          (b = "payment-icon-container"),
          (v = (e || (e = r("stylex"))).props(c.icon, S, g && c.iconCompact)),
          (n[2] = f),
          (n[3] = g),
          (n[4] = s),
          (n[5] = d),
          (n[6] = _),
          (n[7] = C),
          (n[8] = b),
          (n[9] = v));
      } else ((C = n[7]), (b = n[8]), (v = n[9]));
      var L;
      n[14] !== g
        ? ((L = {
            0: {
              className:
                "x10l6tqk x13vifvy x1o0tod x42zw1d xh8yej3 x5yr21d x1f6kntn x19v9tvf x17t9dm2 x2b8uid",
            },
            1: {
              className:
                "x10l6tqk x13vifvy x1o0tod x42zw1d xh8yej3 x5yr21d x17t9dm2 x2b8uid x1pg5gke x1fc57z9",
            },
          }[!!g << 0]),
          (n[14] = g),
          (n[15] = L))
        : (L = n[15]);
      var E;
      n[16] !== y || n[17] !== L
        ? ((E = u.jsx(
            "div",
            babelHelpers.extends({ "data-testid": void 0 }, L, { children: y }),
          )),
          (n[16] = y),
          (n[17] = L),
          (n[18] = E))
        : (E = n[18]);
      var k;
      return (
        n[19] !== C || n[20] !== b || n[21] !== v || n[22] !== E
          ? ((k = u.jsxs(
              "div",
              babelHelpers.extends({ "data-testid": void 0 }, v, {
                children: [E, C],
              }),
            )),
            (n[19] = C),
            (n[20] = b),
            (n[21] = v),
            (n[22] = E),
            (n[23] = k))
          : (k = n[23]),
        k
      );
    }
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
