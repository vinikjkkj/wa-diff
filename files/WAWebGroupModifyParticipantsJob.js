__d(
  "WAWebGroupModifyParticipantsJob",
  [
    "WALogger",
    "WASmaxGroupsAddParticipantsRPC",
    "WASmaxGroupsPromoteDemoteAdminRPC",
    "WASmaxGroupsPromoteDemoteRPC",
    "WASmaxGroupsRemoveParticipantsRPC",
    "WAWebBackendErrors",
    "WAWebCoreActionsODS",
    "WAWebGroupsPrivacyTokenUtils",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebODS",
    "WAWebSchemaChat",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C;
    async function b(t, n) {
      var r = await o(
        "WASmaxGroupsRemoveParticipantsRPC",
      ).sendRemoveParticipantsRPC({
        participantArgs: n.map(function (e) {
          return { participantJid: o("WAWebWidToJid").widToUserJid(e) };
        }),
        iqTo: o("WAWebWidToJid").widToGroupJid(t),
        hasRemoveLinkedGroupsTrue: !1,
      });
      e: {
        var a = r;
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.name === "RemoveParticipantsResponseSuccess" &&
          ((typeof a.value == "object" && a.value !== null) ||
            typeof a.value == "function") &&
          "removeParticipant" in a.value
        ) {
          var i = a.value.removeParticipant,
            l = i;
          if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            var u = l.reduce(function (e, t) {
              var n,
                r = t.jid,
                a = (n = t.usernameAttMixin) == null ? void 0 : n.username;
              return (
                a != null &&
                  e.push({
                    userId: o("WAWebJidToWid").userJidToUserWid(r),
                    username: o("WAWebUsernameTypes").asUsername(a),
                  }),
                e
              );
            }, []);
            u.length > 0 && (await o("WAWebSetUsernameJob").setUsernamesJob(u));
          }
          return {
            status: 207,
            participants: l.map(function (e) {
              var t,
                n,
                r,
                a =
                  (t =
                    e.participantNotInGroupOrParticipantNotAllowedOrParticipantNotAcceptableOrRemoveParticipantsLinkedGroupsServerErrorMixinGroup) ==
                  null
                    ? void 0
                    : t.value.error;
              return {
                userWid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                username:
                  (n =
                    (r = e.usernameAttMixin) == null ? void 0 : r.username) !=
                  null
                    ? n
                    : null,
                code: a != null ? a : "200",
                invite_code: null,
                invite_code_exp: null,
              };
            }),
          };
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.name === "RemoveParticipantsResponseClientError" &&
          ((typeof a.value == "object" && a.value !== null) ||
            typeof a.value == "function") &&
          ((typeof a.value.errorRemoveParticipantsClientErrors == "object" &&
            a.value.errorRemoveParticipantsClientErrors !== null) ||
            typeof a.value.errorRemoveParticipantsClientErrors == "function") &&
          ((typeof a.value.errorRemoveParticipantsClientErrors.value ==
            "object" &&
            a.value.errorRemoveParticipantsClientErrors.value !== null) ||
            typeof a.value.errorRemoveParticipantsClientErrors.value ==
              "function") &&
          "code" in a.value.errorRemoveParticipantsClientErrors.value &&
          "text" in a.value.errorRemoveParticipantsClientErrors.value
        ) {
          var c = a.value.errorRemoveParticipantsClientErrors.value.code,
            d = a.value.errorRemoveParticipantsClientErrors.value.text;
          return (
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "error sending remove group participants iq: ",
                  "",
                ])),
              c,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(+c, d),
            )
          );
          break e;
        }
        if (
          ((typeof a == "object" && a !== null) || typeof a == "function") &&
          a.name === "RemoveParticipantsResponseServerError" &&
          ((typeof a.value == "object" && a.value !== null) ||
            typeof a.value == "function") &&
          ((typeof a.value.errorServerErrors == "object" &&
            a.value.errorServerErrors !== null) ||
            typeof a.value.errorServerErrors == "function") &&
          ((typeof a.value.errorServerErrors.value == "object" &&
            a.value.errorServerErrors.value !== null) ||
            typeof a.value.errorServerErrors.value == "function") &&
          "code" in a.value.errorServerErrors.value &&
          "text" in a.value.errorServerErrors.value
        ) {
          var m = a.value.errorServerErrors.value.code,
            p = a.value.errorServerErrors.value.text;
          return (
            o("WALogger").WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "error sending remove group participants iq: ",
                  "",
                ])),
              m,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(+m, p),
            )
          );
          break e;
        }
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            a,
        );
      }
    }
    async function v(e, t, n) {
      n === void 0 && (n = []);
      var a = t.map(function (e) {
          return e.lid ? e.lid : e.phoneNumber;
        }),
        i = await o("WAWebSchemaChat")
          .getChatTable()
          .bulkGet(
            a.map(function (e) {
              return e.toString();
            }),
          ),
        l;
      i.length > 0 &&
        (l = o("WAWebGroupsPrivacyTokenUtils").getPermissionTokenMap(i, a));
      var s = {
          participantArgs: [].concat(
            a.map(function (e, n) {
              var r,
                a = t[n];
              return {
                participantJid: o("WAWebWidToJid").widToUserJid(e),
                participantPhoneNumber:
                  e.isLid() && a.phoneNumber
                    ? o("WAWebWidToJid").widToUserJid(a.phoneNumber)
                    : void 0,
                participantUsername: e.isLid() ? a.username : void 0,
                permissionTokenMixinArgs: (r = l) == null ? void 0 : r.get(e),
              };
            }),
            n.map(function (e) {
              var t;
              return {
                participantJid: o("WAWebWidToJid").widToUserJid(e),
                permissionTokenMixinArgs: (t = l) == null ? void 0 : t.get(e),
              };
            }),
          ),
          iqTo: o("WAWebWidToJid").widToGroupJid(e),
        },
        d;
      try {
        d = await o("WASmaxGroupsAddParticipantsRPC").sendAddParticipantsRPC(s);
      } catch (e) {
        throw (o("WAWebCoreActionsODS").logGroupAddParticipantError(), e);
      }
      switch (d.name) {
        case "AddParticipantsResponseSuccess": {
          var m = d.value.addParticipant;
          if (
            (r("WAWebODS").incr("web.group.add_participant"),
            o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
          ) {
            var p = m.reduce(function (e, t) {
              var n,
                r =
                  t
                    .addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup
                    .value.jid,
                a =
                  (n =
                    t.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup) ==
                    null || (n = n.value.usernameAttMixin) == null
                    ? void 0
                    : n.username;
              return (
                r != null &&
                  a != null &&
                  e.push({
                    userId: o("WAWebJidToWid").userJidToUserWid(r),
                    username: o("WAWebUsernameTypes").asUsername(a),
                  }),
                e
              );
            }, []);
            p.length > 0 && (await o("WAWebSetUsernameJob").setUsernamesJob(p));
          }
          return {
            status: 207,
            participants: m.flatMap(function (e) {
              return S(e);
            }),
            invitedOutContacts: m.flatMap(function (e) {
              return R(e);
            }),
          };
        }
        case "AddParticipantsResponseClientError": {
          var _ = d.value.errorAddParticipantsClientErrors.value,
            f = _.code,
            g = _.text,
            h =
              d.value.errorAddParticipantsClientErrors.value
                .rateLimitAddParticipantTimeOrCountRateLimitMixinGroup;
          if (
            (o("WAWebCoreActionsODS").logGroupAddParticipantError(),
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "error sending add group participants iq: ",
                  "",
                ])),
              f,
            ),
            h != null)
          )
            switch (h.name) {
              case "AddParticipantTimeRateLimit":
                return Promise.reject(
                  new (o(
                    "WAWebBackendErrors",
                  ).GroupAddParticipantTimeRateLimitServerError)(
                    f,
                    h.value.backoff,
                    h.value.type,
                  ),
                );
              case "AddParticipantCountRateLimit":
                return Promise.reject(
                  new (o(
                    "WAWebBackendErrors",
                  ).GroupAddParticipantCountRateLimitServerError)(
                    f,
                    h.value.participantLimit,
                  ),
                );
            }
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(+f, g),
          );
        }
        case "AddParticipantsResponseServerError": {
          var y = d.value.errorServerErrors.value,
            C = y.code,
            b = y.text;
          return (
            o("WAWebCoreActionsODS").logGroupAddParticipantError(),
            o("WALogger").WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "error sending add group participants iq: ",
                  "",
                ])),
              C,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(+C, b),
            )
          );
        }
      }
    }
    function S(e) {
      var t,
        n =
          e.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup;
      if (n.name === "NonRegisteredWaUserParticipantErrorLidResponse")
        return [];
      var r = n.value.jid,
        a = n.value.addParticipantsParticipantMixins,
        i = (t = n.value.usernameAttMixin) == null ? void 0 : t.username,
        l = n.value.joinTime;
      if (
        r == null ||
        ((a == null ? void 0 : a.name) === "ParticipantRequestCodeCanBeSent" &&
          a.value.participantNotAddressableMixin != null)
      )
        return [];
      var s = a == null ? void 0 : a.value.addRequestCode,
        u = a == null ? void 0 : a.value.addRequestExpiration,
        c = a == null ? void 0 : a.value.error;
      return [
        {
          userWid: o("WAWebJidToWid").userJidToUserWid(r),
          username: i != null ? i : null,
          code: c != null ? c : "200",
          subCode: {
            membershipApprovalRequestError:
              a == null ? void 0 : a.value.membershipApprovalRequestError,
          },
          invite_code: s,
          invite_code_exp: u != null ? String(u) : void 0,
          joinTime: l,
        },
      ];
    }
    function R(e) {
      var t,
        n =
          e.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup;
      if (n.name === "NonRegisteredWaUserParticipantErrorLidResponse") {
        var r,
          a = n.value.phoneNumber,
          i =
            n.value
              .participantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup;
        return a == null || i == null
          ? []
          : [
              {
                phoneNumberWid: o("WAWebJidToWid").userJidToUserWid(a),
                code: String((r = i.value.error) != null ? r : "200"),
              },
            ];
      }
      var l = n.value.jid,
        s = n.value.addParticipantsParticipantMixins;
      return l == null ||
        (s == null ? void 0 : s.name) !== "ParticipantRequestCodeCanBeSent" ||
        s.value.participantNotAddressableMixin == null
        ? []
        : [
            {
              phoneNumberWid: o("WAWebJidToWid").userJidToUserWid(l),
              code: String((t = s.value.error) != null ? t : "200"),
            },
          ];
    }
    async function L(e, t, n) {
      var r = T(t, n, "demote"),
        a = await o("WASmaxGroupsPromoteDemoteRPC").sendPromoteDemoteRPC({
          demoteArgs: {
            participantArgs: r.map(function (e) {
              return { participantJid: o("WAWebWidToJid").widToUserJid(e) };
            }),
          },
          iqTo: o("WAWebWidToJid").widToGroupJid(e),
        });
      switch (a.name) {
        case "PromoteDemoteResponseSuccessDemote": {
          var i = a.value.demoteParticipant;
          if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            var l = i.reduce(function (e, t) {
              var n,
                r = t.jid,
                a = (n = t.usernameAttMixin) == null ? void 0 : n.username;
              return (
                a != null &&
                  e.push({
                    userId: o("WAWebJidToWid").userJidToUserWid(r),
                    username: o("WAWebUsernameTypes").asUsername(a),
                  }),
                e
              );
            }, []);
            l.length > 0 && (await o("WAWebSetUsernameJob").setUsernamesJob(l));
          }
          return {
            status: 207,
            participants: i.map(function (e) {
              var t,
                n,
                r = e.error;
              return {
                userWid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                username:
                  (t =
                    (n = e.usernameAttMixin) == null ? void 0 : n.username) !=
                  null
                    ? t
                    : null,
                code: r != null ? r : "200",
                invite_code: null,
                invite_code_exp: null,
              };
            }),
          };
        }
        case "PromoteDemoteResponseClientError": {
          var s = a.value.errorPromoteDemoteClientErrors.value,
            u = s.code,
            c = s.text;
          return (
            o("WALogger").WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "error sending demote group participants iq: ",
                  "",
                ])),
              u,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(+u, c),
            )
          );
        }
        case "PromoteDemoteResponseServerError": {
          var p = a.value.errorServerErrors.value,
            _ = p.code,
            f = p.text;
          return (
            o("WALogger").WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "error sending demote group participants iq: ",
                  "",
                ])),
              _,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(+_, f),
            )
          );
        }
        case "PromoteDemoteResponseSuccessPromote":
          return;
      }
    }
    async function E(e, t, n) {
      var r = T(t, n, "promote"),
        a = await o("WASmaxGroupsPromoteDemoteRPC").sendPromoteDemoteRPC({
          promoteArgs: {
            participantArgs: r.map(function (e) {
              return { participantJid: o("WAWebWidToJid").widToUserJid(e) };
            }),
          },
          iqTo: o("WAWebWidToJid").widToGroupJid(e),
        });
      switch (a.name) {
        case "PromoteDemoteResponseSuccessPromote": {
          var i = a.value.promoteParticipant;
          if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            var l = i.reduce(function (e, t) {
              var n,
                r = t.jid,
                a = (n = t.usernameAttMixin) == null ? void 0 : n.username;
              return (
                a != null &&
                  e.push({
                    userId: o("WAWebJidToWid").userJidToUserWid(r),
                    username: o("WAWebUsernameTypes").asUsername(a),
                  }),
                e
              );
            }, []);
            l.length > 0 && (await o("WAWebSetUsernameJob").setUsernamesJob(l));
          }
          return {
            status: 207,
            participants: i.map(function (e) {
              var t,
                n,
                r = e.error;
              return {
                userWid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                username:
                  (t =
                    (n = e.usernameAttMixin) == null ? void 0 : n.username) !=
                  null
                    ? t
                    : null,
                code: r != null ? r : "200",
                invite_code: null,
                invite_code_exp: null,
              };
            }),
          };
        }
        case "PromoteDemoteResponseClientError": {
          var s = a.value.errorPromoteDemoteClientErrors.value,
            u = s.code,
            c = s.text;
          return (
            o("WALogger").WARN(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "error sending promote group participants iq: ",
                  "",
                ])),
              u,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(+u, c),
            )
          );
        }
        case "PromoteDemoteResponseServerError": {
          var d = a.value.errorServerErrors.value,
            m = d.code,
            f = d.text;
          return (
            o("WALogger").WARN(
              _ ||
                (_ = babelHelpers.taggedTemplateLiteralLoose([
                  "error sending promote group participants iq: ",
                  "",
                ])),
              m,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(+m, f),
            )
          );
        }
        case "PromoteDemoteResponseSuccessDemote":
          return;
      }
    }
    async function k(e, t, n) {
      var r = T(t, n, "admin-promote"),
        a = await o(
          "WASmaxGroupsPromoteDemoteAdminRPC",
        ).sendPromoteDemoteAdminRPC({
          promoteArgs: {
            participantArgs: r.map(function (e) {
              return { participantJid: o("WAWebWidToJid").widToUserJid(e) };
            }),
          },
          iqTo: o("WAWebWidToJid").widToGroupJid(e),
        });
      switch (a.name) {
        case "PromoteDemoteAdminResponseSuccessMultiAdmin": {
          var i = a.value.adminParticipant;
          if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            var l = i.reduce(function (e, t) {
              var n,
                r = t.jid,
                a = (n = t.usernameAttMixin) == null ? void 0 : n.username;
              return (
                a != null &&
                  e.push({
                    userId: o("WAWebJidToWid").userJidToUserWid(r),
                    username: o("WAWebUsernameTypes").asUsername(a),
                  }),
                e
              );
            }, []);
            l.length > 0 && (await o("WAWebSetUsernameJob").setUsernamesJob(l));
          }
          return {
            status: 207,
            participants: i.map(function (e) {
              var t,
                n,
                r = e.error;
              return {
                userWid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                username:
                  (t =
                    (n = e.usernameAttMixin) == null ? void 0 : n.username) !=
                  null
                    ? t
                    : null,
                code: r != null ? r : "200",
                invite_code: null,
                invite_code_exp: null,
              };
            }),
          };
        }
        case "PromoteDemoteAdminResponseClientError": {
          var s = a.value.errorPromoteDemoteAdminClientErrors.value,
            u = s.code,
            c = s.text;
          return (
            o("WALogger").WARN(
              f ||
                (f = babelHelpers.taggedTemplateLiteralLoose([
                  "error sending promoting group participants iq: ",
                  "",
                ])),
              u,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(+u, c),
            )
          );
        }
        case "PromoteDemoteAdminResponseServerError": {
          var d = a.value.errorServerErrors.value,
            m = d.code,
            p = d.text;
          return (
            o("WALogger").WARN(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "error sending promoting group participants iq: ",
                  "",
                ])),
              m,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(+m, p),
            )
          );
        }
      }
    }
    async function I(e, t, n) {
      var r = T(t, n, "admin-demote"),
        a = await o(
          "WASmaxGroupsPromoteDemoteAdminRPC",
        ).sendPromoteDemoteAdminRPC({
          demoteArgs: {
            participantArgs: r.map(function (e) {
              return { participantJid: o("WAWebWidToJid").widToUserJid(e) };
            }),
          },
          iqTo: o("WAWebWidToJid").widToGroupJid(e),
        });
      switch (a.name) {
        case "PromoteDemoteAdminResponseSuccessMultiAdmin": {
          var i = a.value.adminParticipant;
          if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
            var l = i.reduce(function (e, t) {
              var n,
                r = t.jid,
                a = (n = t.usernameAttMixin) == null ? void 0 : n.username;
              return (
                a != null &&
                  e.push({
                    userId: o("WAWebJidToWid").userJidToUserWid(r),
                    username: o("WAWebUsernameTypes").asUsername(a),
                  }),
                e
              );
            }, []);
            l.length > 0 && (await o("WAWebSetUsernameJob").setUsernamesJob(l));
          }
          return {
            status: 207,
            participants: i.map(function (e) {
              var t,
                n,
                r = e.error;
              return {
                userWid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                username:
                  (t =
                    (n = e.usernameAttMixin) == null ? void 0 : n.username) !=
                  null
                    ? t
                    : null,
                code: r != null ? r : "200",
                invite_code: null,
                invite_code_exp: null,
              };
            }),
          };
        }
        case "PromoteDemoteAdminResponseClientError": {
          var s = a.value.errorPromoteDemoteAdminClientErrors.value,
            u = s.code,
            c = s.text;
          return (
            o("WALogger").WARN(
              h ||
                (h = babelHelpers.taggedTemplateLiteralLoose([
                  "error sending demoting group participants iq: ",
                  "",
                ])),
              u,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(+u, c),
            )
          );
        }
        case "PromoteDemoteAdminResponseServerError": {
          var d = a.value.errorServerErrors.value,
            m = d.code,
            p = d.text;
          return (
            o("WALogger").WARN(
              y ||
                (y = babelHelpers.taggedTemplateLiteralLoose([
                  "error sending demoting group participants iq: ",
                  "",
                ])),
              m,
            ),
            Promise.reject(
              new (o("WAWebBackendErrors").ServerStatusCodeError)(+m, p),
            )
          );
        }
      }
    }
    function T(e, t, n) {
      var r = o("WAWebLidMigrationUtils").toAddressingModeFactory(t);
      return e.map(function (e, a) {
        var i = r(e);
        return i
          ? o("WAWebWidFactory").asUserWidOrThrow(i)
          : (o("WALogger")
              .ERROR(
                C ||
                  (C = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] Failed to normalise participant #",
                    " wid to ",
                    "",
                  ])),
                n,
                a + 1,
                t ? "LID" : "PN",
              )
              .sendLogs(n + "-participant-failed-to-normalise-wids"),
            e);
      });
    }
    ((l.removeGroupParticipants = b),
      (l.addGroupParticipants = v),
      (l.demoteGroupParticipants = L),
      (l.promoteGroupParticipants = E),
      (l.promoteCommunityParticipants = k),
      (l.demoteCommunityParticipants = I));
  },
  98,
);
