__d(
  "WAWebSendPaymentRequestFlow.react",
  [
    "$InternalEnum",
    "PixPaymentRequestFeature",
    "WANullthrows",
    "WAWebBizPaymentsBrazilAddPixModalRefreshed.react",
    "WAWebSendPixPaymentRequestHybridModal.react",
    "WAWebSendPixPaymentRequestModal.react",
    "WAWebSendPixPaymentRequestOptionalModal.react",
    "WAWebUserPrefsCustomPaymentMethods",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = n("$InternalEnum").Mirrored([
        "AddEditCredential",
        "EditCredentialFromPaymentRequest",
        "SendPaymentRequest",
      ]);
    function d(e, t, n, a, i, l, u) {
      return e ===
        o("PixPaymentRequestFeature").PixPaymentRequestVariant
          .PAYMENT_REQUEST_STANDARD_WITH_MANDATORY_AMOUNT ||
        e ===
          o("PixPaymentRequestFeature").PixPaymentRequestVariant
            .PAYMENT_REQUEST_STANDARD_WITH_EDUCATION
        ? s.jsx(r("WAWebSendPixPaymentRequestModal.react"), {
            chat: t,
            headerButton: a,
            onEditCredential: u,
            pixData: n,
            previousScreenName: i,
            referral: l,
          })
        : e ===
            o("PixPaymentRequestFeature").PixPaymentRequestVariant
              .PAYMENT_REQUEST_HYBRID_OPTIONAL_AMOUNT
          ? s.jsx(
              o("WAWebSendPixPaymentRequestHybridModal.react")
                .WAWebSendPixPaymentRequestHybridModal,
              {
                chat: t,
                headerButton: a,
                onEditCredential: u,
                pixData: n,
                previousScreenName: i,
                referral: l,
              },
            )
          : e ===
              o("PixPaymentRequestFeature").PixPaymentRequestVariant
                .PAYMENT_REQUEST_STANDARD_WITH_OPTIONAL_AMOUNT
            ? s.jsx(
                o("WAWebSendPixPaymentRequestOptionalModal.react")
                  .WAWebSendPixPaymentRequestOptionalModal,
                {
                  chat: t,
                  headerButton: a,
                  onEditCredential: u,
                  pixData: n,
                  previousScreenName: i,
                  referral: l,
                },
              )
            : null;
    }
    function m(e) {
      var t = e.chat,
        n = e.previousScreen,
        a = e.referral,
        i = o("WAWebUserPrefsCustomPaymentMethods").getPIX(),
        l = u(i != null),
        m = l[0],
        p = o("useWAWebFlow").useFlow(
          m ? c.SendPaymentRequest : c.AddEditCredential,
        ),
        _ = p[0],
        f = p[1],
        g = m
          ? {
              type: "cancel",
              onClick: function () {
                return f.end();
              },
            }
          : {
              type: "cancel",
              onClick: function () {
                return f.pop();
              },
            };
      if (f.step == null) return null;
      var h;
      switch (f.step) {
        case c.AddEditCredential: {
          h = s.jsx(r("WAWebBizPaymentsBrazilAddPixModalRefreshed.react"), {
            chat: t,
            onClose: function () {
              f.end();
            },
            pixData: i,
            previousScreen: n,
            referral: a,
            onSuccess: function () {
              return f.push(c.SendPaymentRequest);
            },
          });
          break;
        }
        case c.EditCredentialFromPaymentRequest: {
          h = s.jsx(r("WAWebBizPaymentsBrazilAddPixModalRefreshed.react"), {
            chat: t,
            onClose: function () {
              f.pop();
            },
            pixData: i,
            previousScreen: n,
            referral: a,
            onSuccess: function () {
              return f.pop();
            },
          });
          break;
        }
        case c.SendPaymentRequest: {
          var y = o("PixPaymentRequestFeature").getPixPaymentRequestVariant();
          h = d(y, t, r("WANullthrows")(i), g, n, a, function () {
            return f.push(c.EditCredentialFromPaymentRequest);
          });
          break;
        }
      }
      return s.jsx(_, { flow: f, children: h });
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
