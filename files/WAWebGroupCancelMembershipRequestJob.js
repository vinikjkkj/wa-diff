__d(
  "WAWebGroupCancelMembershipRequestJob",
  [
    "Promise",
    "WALogger",
    "WASmaxGroupsCancelGroupMembershipRequestsRPC",
    "WAWebBackendErrors",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield o(
            "WASmaxGroupsCancelGroupMembershipRequestsRPC",
          ).sendCancelGroupMembershipRequestsRPC({
            participantArgs: t.map(function (e) {
              return { participantJid: o("WAWebWidToJid").widToUserJid(e) };
            }),
            iqTo: o("WAWebWidToJid").widToGroupJid(e),
          });
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.name === "CancelGroupMembershipRequestsResponseSuccess" &&
              "value" in e
            ) {
              var t,
                n,
                r = e.value;
              return (t =
                (n = r.cancelMembershipRequestsParticipant) == null
                  ? void 0
                  : n.map(function (e) {
                      var t = e.membershipRequestsCancellationParticipantMixins;
                      return {
                        wid: o("WAWebWidFactory").createWid(e.jid),
                        error: t,
                      };
                    })) != null
                ? t
                : [];
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.name === "CancelGroupMembershipRequestsResponseClientError" &&
              "value" in e
            ) {
              var a = e.value;
              return c(a.errorMembershipRequestsCancellationClientErrors.value);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.name === "CancelGroupMembershipRequestsResponseServerError" &&
              "value" in e
            ) {
              var i = e.value;
              return c(i.errorServerErrors.value);
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(n);
        });
        return function (n, r) {
          return e.apply(this, arguments);
        };
      })();
    function c(t) {
      var r = t.code,
        a = t.text;
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "cancelMembershipApprovalRequest failed: ",
              ":",
              "",
            ])),
          r,
          a,
        ),
        (s || (s = n("Promise"))).reject(
          new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(r), a),
        )
      );
    }
    l.cancelMembershipApprovalRequestJob = u;
  },
  98,
);
