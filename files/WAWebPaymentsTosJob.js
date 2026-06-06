__d(
  "WAWebPaymentsTosJob",
  [
    "WALogger",
    "WASmaxAccountSetPaymentsTOSv3RPC",
    "WAWebPaymentTosSync",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdCoreApi",
    "WAWebUserPrefsPaymentTos",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = "br_pay_privacy_policy";
    async function m(t, n) {
      var r = {
        acceptPayTosVersion: n != null ? n : 1,
        setPaymentsTOSv3BRConsumerOrSetPaymentsTOSv3UPIConsumerPaymentsTOSv3MixinGroupArgs:
          {
            setPaymentsTOSv3BRConsumerPaymentsTOSv3: {
              additionalNoticeArgs: [{ additionalNoticeNotice: t }],
            },
          },
      };
      o("WALogger")
        .LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Accepting BR Payments TOS",
            ])),
        )
        .sendLogs("payment-tos");
      var a = await o(
        "WASmaxAccountSetPaymentsTOSv3RPC",
      ).sendSetPaymentsTOSv3RPC(r);
      e: {
        if (a.name === "SetPaymentsTOSv3ResponseSuccess") {
          var i = p(t);
          if (i == null)
            return (
              o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[payments] Invalid payment notice",
                    ])),
                )
                .sendLogs("payment-tos-errors"),
              a
            );
          return (await _({ paymentNotice: i, accepted: !0 }), a);
          break e;
        }
        if (a.name === "SetPaymentsTOSv3ResponseError") {
          return (
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to accept BR Payments TOS",
                  ])),
              )
              .sendLogs("payment-tos"),
            a
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            a.name,
        );
      }
    }
    function p(e) {
      switch (e) {
        case d:
          return o("WAWebProtobufSyncAction.pb")
            .SyncActionValue$PaymentTosAction$PaymentNotice
            .BR_PAY_PRIVACY_POLICY;
        default:
          return null;
      }
    }
    async function _(e) {
      var t = await r("WAWebPaymentTosSync").getPaymentTosSetMutation(e);
      return o("WAWebSyncdCoreApi")
        .lockForSync([], [t], function () {
          return Promise.resolve();
        })
        .then(function () {
          (o("WALogger")
            .LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "Synced payment TOS",
                ])),
            )
            .sendLogs("payment-tos"),
            o("WAWebUserPrefsPaymentTos").setPaymentTos({
              paymentNotice: e.paymentNotice,
              accepted: !0,
            }));
        });
    }
    l.acceptBRPayTos = m;
  },
  98,
);
