__d(
  "WAWebPreProcessOrderEphemeralExemption",
  [
    "WAWebBizGatingUtils",
    "WAWebDBChatEphemeralExemptionData",
    "WAWebDBEphemeralDisplayedExemptions",
    "WAWebOrderEphemeralExemptionUtil",
    "WAWebOrderSystemMsg",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t, n;
          if (
            !o("WAWebBizGatingUtils").inOrderMessagesEphemeralExceptionEnabled()
          )
            return e;
          var r = e.findIndex(function (e) {
            var t = e.interactiveType,
              n = e.nativeFlowName,
              r = e.type;
            return o(
              "WAWebOrderEphemeralExemptionUtil",
            ).isMessageTypeExemptedFromDisappearing(r, t, n);
          });
          if (
            r === -1 ||
            ((t = e.at(r)) == null || (t = t.id) == null ? void 0 : t.remote) ==
              null
          )
            return e;
          var a =
            (n = e.at(r)) == null || (n = n.id) == null ? void 0 : n.remote;
          if (a == null) return e;
          var i = yield o(
            "WAWebDBChatEphemeralExemptionData",
          ).getChatEphemeralExemptionDataFromChat(a);
          if (
            i != null &&
            o(
              "WAWebOrderEphemeralExemptionUtil",
            ).shouldShowOrderExemptionSystemMessage(i)
          ) {
            var l;
            o(
              "WAWebDBChatEphemeralExemptionData",
            ).persistsEphemeralDisplayedExemptions(
              a,
              (l = i.ephemeralDuration) != null ? l : 0,
              o("WAWebDBEphemeralDisplayedExemptions").EphemeralExemptionType
                .ORDERS_AND_PAYMENTS,
            );
            var s = e.slice(0, r),
              u = o("WAWebOrderSystemMsg").getOrderEphemeralExemptionSystemMsg(
                a,
              ),
              c = e.slice(r, e.length);
            return [].concat(s, [u], c);
          } else if (
            i != null &&
            o(
              "WAWebOrderEphemeralExemptionUtil",
            ).shouldUnsetChatEphemeralDisplayedExemption(i)
          ) {
            var d;
            o(
              "WAWebDBChatEphemeralExemptionData",
            ).persistsEphemeralDisplayedExemptions(
              a,
              (d = i.ephemeralDuration) != null ? d : 0,
              o("WAWebDBEphemeralDisplayedExemptions").EphemeralExemptionType
                .UNSET,
            );
          }
          return e;
        })),
        s.apply(this, arguments)
      );
    }
    l.preProcessOrderEphemeralExemption = e;
  },
  98,
);
