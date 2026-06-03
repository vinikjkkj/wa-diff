__d(
  "WAWebPaymentsTosJob",
  [
    "Promise",
    "WALogger",
    "WASmaxAccountSetPaymentsTOSv3RPC",
    "WAWebPaymentTosSync",
    "WAWebProtobufSyncAction.pb",
    "WAWebSyncdCoreApi",
    "WAWebUserPrefsPaymentTos",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = "br_pay_privacy_policy";
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
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
          var a = yield o(
            "WASmaxAccountSetPaymentsTOSv3RPC",
          ).sendSetPaymentsTOSv3RPC(r);
          e: {
            if (a.name === "SetPaymentsTOSv3ResponseSuccess") {
              var i = f(t);
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
              return (yield g({ paymentNotice: i, accepted: !0 }), a);
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      switch (e) {
        case m:
          return o("WAWebProtobufSyncAction.pb")
            .SyncActionValue$PaymentTosAction$PaymentNotice
            .BR_PAY_PRIVACY_POLICY;
        default:
          return null;
      }
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield r("WAWebPaymentTosSync").getPaymentTosSetMutation(e);
          return o("WAWebSyncdCoreApi")
            .lockForSync([], [t], function () {
              return (d || (d = n("Promise"))).resolve();
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
        })),
        h.apply(this, arguments)
      );
    }
    l.acceptBRPayTos = p;
  },
  98,
);
