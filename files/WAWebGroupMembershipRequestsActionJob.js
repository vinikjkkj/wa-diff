__d(
  "WAWebGroupMembershipRequestsActionJob",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WASmaxGroupsMembershipRequestsActionRPC",
    "WAWebBackendErrors",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = n("$InternalEnum").Mirrored(["Approve", "Reject"]);
    function c(e, t, n) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
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
          n === u.Approve
            ? (i = { participantArgs: a })
            : (l = { participantArgs: a });
          var s = yield o(
            "WASmaxGroupsMembershipRequestsActionRPC",
          ).sendMembershipRequestsActionRPC({
            iqTo: o("WAWebWidToJid").widToGroupJid(e),
            approveArgs: i,
            rejectArgs: l,
          });
          return (function (e) {
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.name === "MembershipRequestsActionResponseSuccess" &&
              "value" in e
            ) {
              var t,
                r,
                a = e.value;
              return (t =
                (r =
                  n === u.Approve
                    ? a.membershipRequestsActionApprove
                    : a.membershipRequestsActionReject) == null ||
                (r = r.participant) == null
                  ? void 0
                  : r.map(function (e) {
                      var t,
                        r =
                          n === u.Approve
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
                          s =
                            (l = e.identityMixin) == null
                              ? void 0
                              : l.identityTypes.value.phoneNumber;
                        a.phoneNumber =
                          s != null
                            ? o("WAWebWidFactory").createWid(s)
                            : void 0;
                      }
                      return a;
                    })) != null
                ? t
                : [];
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.name === "MembershipRequestsActionResponseClientError" &&
              "value" in e
            ) {
              var i = e.value;
              return m(i.errorMembershipRequestsActionClientErrors.value);
            }
            if (
              ((typeof e == "object" && e !== null) ||
                typeof e == "function") &&
              e.name === "MembershipRequestsActionResponseServerError" &&
              "value" in e
            ) {
              var l = e.value;
              return m(l.errorServerErrors.value);
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                e,
            );
          })(s);
        })),
        d.apply(this, arguments)
      );
    }
    function m(t) {
      var r = t.code,
        a = t.text;
      return (
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "membershipApprovalRequestAction failed: ",
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
    ((l.MembershipApprovalRequestAction = u),
      (l.membershipApprovalRequestAction = c));
  },
  98,
);
