__d(
  "WAWebGroupCancelMembershipRequestJob",
  [
    "WALogger",
    "WASmaxGroupsCancelGroupMembershipRequestsRPC",
    "WAWebBackendErrors",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(e, t) {
      var n = await o(
        "WASmaxGroupsCancelGroupMembershipRequestsRPC",
      ).sendCancelGroupMembershipRequestsRPC({
        participantArgs: t.map(function (e) {
          return { participantJid: o("WAWebWidToJid").widToUserJid(e) };
        }),
        iqTo: o("WAWebWidToJid").widToGroupJid(e),
      });
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
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
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.name === "CancelGroupMembershipRequestsResponseClientError" &&
          "value" in e
        ) {
          var a = e.value;
          return u(a.errorMembershipRequestsCancellationClientErrors.value);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.name === "CancelGroupMembershipRequestsResponseServerError" &&
          "value" in e
        ) {
          var i = e.value;
          return u(i.errorServerErrors.value);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(n);
    }
    function u(t) {
      var n = t.code,
        r = t.text;
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "cancelMembershipApprovalRequest failed: ",
              ":",
              "",
            ])),
          n,
          r,
        ),
        Promise.reject(
          new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(n), r),
        )
      );
    }
    l.cancelMembershipApprovalRequestJob = s;
  },
  98,
);
