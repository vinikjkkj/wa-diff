__d(
  "WAWebGroupMembershipRequestsActionJob",
  [
    "$InternalEnum",
    "WALogger",
    "WASmaxGroupsMembershipRequestsActionRPC",
    "WAWebBackendErrors",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum").Mirrored(["Approve", "Reject"]);
    async function u(e, t, n) {
      var r = t.map(function (e) {
          return e.lid ? e.lid : e.phoneNumber;
        }),
        a = r.map(function (e, n) {
          var r = t[n];
          return {
            participantJid: o("WAWebWidToJid").widToUserJid(e),
            participantPhoneNumber:
              e.isLid() && r.phoneNumber
                ? o("WAWebWidToJid").widToUserJid(r.phoneNumber)
                : void 0,
            participantUsername: e.isLid() ? r.username : void 0,
          };
        }),
        i,
        l;
      n === s.Approve
        ? (i = { participantArgs: a })
        : (l = { participantArgs: a });
      var u = await o(
        "WASmaxGroupsMembershipRequestsActionRPC",
      ).sendMembershipRequestsActionRPC({
        iqTo: o("WAWebWidToJid").widToGroupJid(e),
        approveArgs: i,
        rejectArgs: l,
      });
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.name === "MembershipRequestsActionResponseSuccess" &&
          "value" in e
        ) {
          var t,
            r,
            a = e.value;
          return (t =
            (r =
              n === s.Approve
                ? a.membershipRequestsActionApprove
                : a.membershipRequestsActionReject) == null ||
            (r = r.participant) == null
              ? void 0
              : r.map(function (e) {
                  var t,
                    r =
                      n === s.Approve
                        ? e.membershipRequestsActionAcceptParticipantMixins
                        : e.membershipRequestsActionRejectParticipantMixins,
                    a = {
                      wid: o("WAWebWidFactory").createWid(e.jid),
                      username:
                        (t = e.identityMixin) == null ||
                        (t = t.identityTypes.value) == null
                          ? void 0
                          : t.username,
                      error: r,
                    },
                    i = o(
                      "WAWebUsernameGatingUtils",
                    ).lidGroupMigrationNonMemberIQEnabled();
                  if (i) {
                    var l,
                      u =
                        (l = e.identityMixin) == null
                          ? void 0
                          : l.identityTypes.value.phoneNumber;
                    a.phoneNumber =
                      u != null ? o("WAWebWidFactory").createWid(u) : void 0;
                  }
                  return a;
                })) != null
            ? t
            : [];
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.name === "MembershipRequestsActionResponseClientError" &&
          "value" in e
        ) {
          var i = e.value;
          return c(i.errorMembershipRequestsActionClientErrors.value);
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.name === "MembershipRequestsActionResponseServerError" &&
          "value" in e
        ) {
          var l = e.value;
          return c(l.errorServerErrors.value);
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(u);
    }
    function c(t) {
      var n = t.code,
        r = t.text;
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "membershipApprovalRequestAction failed: ",
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
    ((l.MembershipApprovalRequestAction = s),
      (l.membershipApprovalRequestAction = u));
  },
  98,
);
