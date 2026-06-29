__d(
  "WAWebGroupModifyParticipantsJob",
  [
    "Promise",
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
    "WAWebSchemaChat",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g, h, y, C, b;
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = yield o(
            "WASmaxGroupsRemoveParticipantsRPC",
          ).sendRemoveParticipantsRPC({
            participantArgs: t.map(function (e) {
              return { participantJid: o("WAWebWidToJid").widToUserJid(e) };
            }),
            iqTo: o("WAWebWidToJid").widToGroupJid(e),
            hasRemoveLinkedGroupsTrue: !1,
          });
          e: {
            var a = r;
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.name === "RemoveParticipantsResponseSuccess" &&
              ((typeof a.value == "object" && a.value !== null) ||
                typeof a.value == "function") &&
              "removeParticipant" in a.value
            ) {
              var i = a.value.removeParticipant,
                l = i;
              if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                var c = l.reduce(function (e, t) {
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
                c.length > 0 &&
                  (yield o("WAWebSetUsernameJob").setUsernamesJob(c));
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
                        (r = e.usernameAttMixin) == null
                          ? void 0
                          : r.username) != null
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
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.name === "RemoveParticipantsResponseClientError" &&
              ((typeof a.value == "object" && a.value !== null) ||
                typeof a.value == "function") &&
              ((typeof a.value.errorRemoveParticipantsClientErrors ==
                "object" &&
                a.value.errorRemoveParticipantsClientErrors !== null) ||
                typeof a.value.errorRemoveParticipantsClientErrors ==
                  "function") &&
              ((typeof a.value.errorRemoveParticipantsClientErrors.value ==
                "object" &&
                a.value.errorRemoveParticipantsClientErrors.value !== null) ||
                typeof a.value.errorRemoveParticipantsClientErrors.value ==
                  "function") &&
              "code" in a.value.errorRemoveParticipantsClientErrors.value &&
              "text" in a.value.errorRemoveParticipantsClientErrors.value
            ) {
              var d = a.value.errorRemoveParticipantsClientErrors.value.code,
                m = a.value.errorRemoveParticipantsClientErrors.value.text;
              return (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "error sending remove group participants iq: ",
                      "",
                    ])),
                  d,
                ),
                (b || (b = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(+d, m),
                )
              );
              break e;
            }
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
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
              var p = a.value.errorServerErrors.value.code,
                _ = a.value.errorServerErrors.value.text;
              return (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "error sending remove group participants iq: ",
                      "",
                    ])),
                  p,
                ),
                (b || (b = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(+p, _),
                )
              );
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                a,
            );
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          r === void 0 && (r = []);
          var a = t.map(function (e) {
              return e.lid ? e.lid : e.phoneNumber;
            }),
            i = yield o("WAWebSchemaChat")
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
                    permissionTokenMixinArgs:
                      (r = l) == null ? void 0 : r.get(e),
                  };
                }),
                r.map(function (e) {
                  var t;
                  return {
                    participantJid: o("WAWebWidToJid").widToUserJid(e),
                    permissionTokenMixinArgs:
                      (t = l) == null ? void 0 : t.get(e),
                  };
                }),
              ),
              iqTo: o("WAWebWidToJid").widToGroupJid(e),
            },
            u;
          try {
            u = yield o(
              "WASmaxGroupsAddParticipantsRPC",
            ).sendAddParticipantsRPC(s);
          } catch (e) {
            throw (o("WAWebCoreActionsODS").logGroupAddParticipantError(), e);
          }
          switch (u.name) {
            case "AddParticipantsResponseSuccess": {
              var m = u.value.addParticipant;
              if (
                (o("WAWebCoreActionsODS").logGroupAddParticipant(),
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
                p.length > 0 &&
                  (yield o("WAWebSetUsernameJob").setUsernamesJob(p));
              }
              return {
                status: 207,
                participants: m.flatMap(function (e) {
                  return E(e);
                }),
                invitedOutContacts: m.flatMap(function (e) {
                  return k(e);
                }),
              };
            }
            case "AddParticipantsResponseClientError": {
              var _ = u.value.errorAddParticipantsClientErrors.value,
                f = _.code,
                g = _.text,
                h =
                  u.value.errorAddParticipantsClientErrors.value
                    .rateLimitAddParticipantTimeOrCountRateLimitMixinGroup;
              if (
                (o("WAWebCoreActionsODS").logGroupAddParticipantError(),
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "error sending add group participants iq: ",
                      "",
                    ])),
                  f,
                ),
                h != null)
              )
                switch (h.name) {
                  case "AddParticipantTimeRateLimit":
                    return (b || (b = n("Promise"))).reject(
                      new (o(
                        "WAWebBackendErrors",
                      ).GroupAddParticipantTimeRateLimitServerError)(
                        f,
                        h.value.backoff,
                        h.value.type,
                      ),
                    );
                  case "AddParticipantCountRateLimit":
                    return (b || (b = n("Promise"))).reject(
                      new (o(
                        "WAWebBackendErrors",
                      ).GroupAddParticipantCountRateLimitServerError)(
                        f,
                        h.value.participantLimit,
                      ),
                    );
                }
              return (b || (b = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(+f, g),
              );
            }
            case "AddParticipantsResponseServerError": {
              var y = u.value.errorServerErrors.value,
                C = y.code,
                v = y.text;
              return (
                o("WAWebCoreActionsODS").logGroupAddParticipantError(),
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "error sending add group participants iq: ",
                      "",
                    ])),
                  C,
                ),
                (b || (b = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(+C, v),
                )
              );
            }
          }
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      var t,
        n =
          e.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup;
      if (n.name === "NonRegisteredWaUserParticipantErrorLidResponse")
        return [];
      var r = n.value.jid,
        a = n.value.addParticipantsParticipantMixins,
        i = (t = n.value.usernameAttMixin) == null ? void 0 : t.username;
      if (
        r == null ||
        ((a == null ? void 0 : a.name) === "ParticipantRequestCodeCanBeSent" &&
          a.value.participantNotAddressableMixin != null)
      )
        return [];
      var l = a == null ? void 0 : a.value.addRequestCode,
        s = a == null ? void 0 : a.value.addRequestExpiration,
        u = a == null ? void 0 : a.value.error;
      return [
        {
          userWid: o("WAWebJidToWid").userJidToUserWid(r),
          username: i != null ? i : null,
          code: u != null ? u : "200",
          subCode: {
            membershipApprovalRequestError:
              a == null ? void 0 : a.value.membershipApprovalRequestError,
          },
          invite_code: l,
          invite_code_exp: s != null ? String(s) : void 0,
        },
      ];
    }
    function k(e) {
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
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = w(t, r, "demote"),
            i = yield o("WASmaxGroupsPromoteDemoteRPC").sendPromoteDemoteRPC({
              demoteArgs: {
                participantArgs: a.map(function (e) {
                  return { participantJid: o("WAWebWidToJid").widToUserJid(e) };
                }),
              },
              iqTo: o("WAWebWidToJid").widToGroupJid(e),
            });
          switch (i.name) {
            case "PromoteDemoteResponseSuccessDemote": {
              var l = i.value.demoteParticipant;
              if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                var s = l.reduce(function (e, t) {
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
                s.length > 0 &&
                  (yield o("WAWebSetUsernameJob").setUsernamesJob(s));
              }
              return {
                status: 207,
                participants: l.map(function (e) {
                  var t,
                    n,
                    r = e.error;
                  return {
                    userWid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                    username:
                      (t =
                        (n = e.usernameAttMixin) == null
                          ? void 0
                          : n.username) != null
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
              var u = i.value.errorPromoteDemoteClientErrors.value,
                c = u.code,
                d = u.text;
              return (
                o("WALogger").WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "error sending demote group participants iq: ",
                      "",
                    ])),
                  c,
                ),
                (b || (b = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(+c, d),
                )
              );
            }
            case "PromoteDemoteResponseServerError": {
              var _ = i.value.errorServerErrors.value,
                f = _.code,
                g = _.text;
              return (
                o("WALogger").WARN(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "error sending demote group participants iq: ",
                      "",
                    ])),
                  f,
                ),
                (b || (b = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(+f, g),
                )
              );
            }
            case "PromoteDemoteResponseSuccessPromote":
              return;
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = w(t, r, "promote"),
            i = yield o("WASmaxGroupsPromoteDemoteRPC").sendPromoteDemoteRPC({
              promoteArgs: {
                participantArgs: a.map(function (e) {
                  return { participantJid: o("WAWebWidToJid").widToUserJid(e) };
                }),
              },
              iqTo: o("WAWebWidToJid").widToGroupJid(e),
            });
          switch (i.name) {
            case "PromoteDemoteResponseSuccessPromote": {
              var l = i.value.promoteParticipant;
              if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                var s = l.reduce(function (e, t) {
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
                s.length > 0 &&
                  (yield o("WAWebSetUsernameJob").setUsernamesJob(s));
              }
              return {
                status: 207,
                participants: l.map(function (e) {
                  var t,
                    n,
                    r = e.error;
                  return {
                    userWid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                    username:
                      (t =
                        (n = e.usernameAttMixin) == null
                          ? void 0
                          : n.username) != null
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
              var u = i.value.errorPromoteDemoteClientErrors.value,
                c = u.code,
                d = u.text;
              return (
                o("WALogger").WARN(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "error sending promote group participants iq: ",
                      "",
                    ])),
                  c,
                ),
                (b || (b = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(+c, d),
                )
              );
            }
            case "PromoteDemoteResponseServerError": {
              var m = i.value.errorServerErrors.value,
                p = m.code,
                g = m.text;
              return (
                o("WALogger").WARN(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "error sending promote group participants iq: ",
                      "",
                    ])),
                  p,
                ),
                (b || (b = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(+p, g),
                )
              );
            }
            case "PromoteDemoteResponseSuccessDemote":
              return;
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = w(t, r, "admin-promote"),
            i = yield o(
              "WASmaxGroupsPromoteDemoteAdminRPC",
            ).sendPromoteDemoteAdminRPC({
              promoteArgs: {
                participantArgs: a.map(function (e) {
                  return { participantJid: o("WAWebWidToJid").widToUserJid(e) };
                }),
              },
              iqTo: o("WAWebWidToJid").widToGroupJid(e),
            });
          switch (i.name) {
            case "PromoteDemoteAdminResponseSuccessMultiAdmin": {
              var l = i.value.adminParticipant;
              if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                var s = l.reduce(function (e, t) {
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
                s.length > 0 &&
                  (yield o("WAWebSetUsernameJob").setUsernamesJob(s));
              }
              return {
                status: 207,
                participants: l.map(function (e) {
                  var t,
                    n,
                    r = e.error;
                  return {
                    userWid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                    username:
                      (t =
                        (n = e.usernameAttMixin) == null
                          ? void 0
                          : n.username) != null
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
              var u = i.value.errorPromoteDemoteAdminClientErrors.value,
                c = u.code,
                d = u.text;
              return (
                o("WALogger").WARN(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "error sending promoting group participants iq: ",
                      "",
                    ])),
                  c,
                ),
                (b || (b = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(+c, d),
                )
              );
            }
            case "PromoteDemoteAdminResponseServerError": {
              var m = i.value.errorServerErrors.value,
                p = m.code,
                _ = m.text;
              return (
                o("WALogger").WARN(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "error sending promoting group participants iq: ",
                      "",
                    ])),
                  p,
                ),
                (b || (b = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(+p, _),
                )
              );
            }
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = w(t, r, "admin-demote"),
            i = yield o(
              "WASmaxGroupsPromoteDemoteAdminRPC",
            ).sendPromoteDemoteAdminRPC({
              demoteArgs: {
                participantArgs: a.map(function (e) {
                  return { participantJid: o("WAWebWidToJid").widToUserJid(e) };
                }),
              },
              iqTo: o("WAWebWidToJid").widToGroupJid(e),
            });
          switch (i.name) {
            case "PromoteDemoteAdminResponseSuccessMultiAdmin": {
              var l = i.value.adminParticipant;
              if (o("WAWebUsernameGatingUtils").usernameDisplayedEnabled()) {
                var s = l.reduce(function (e, t) {
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
                s.length > 0 &&
                  (yield o("WAWebSetUsernameJob").setUsernamesJob(s));
              }
              return {
                status: 207,
                participants: l.map(function (e) {
                  var t,
                    n,
                    r = e.error;
                  return {
                    userWid: o("WAWebJidToWid").userJidToUserWid(e.jid),
                    username:
                      (t =
                        (n = e.usernameAttMixin) == null
                          ? void 0
                          : n.username) != null
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
              var u = i.value.errorPromoteDemoteAdminClientErrors.value,
                c = u.code,
                d = u.text;
              return (
                o("WALogger").WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "error sending demoting group participants iq: ",
                      "",
                    ])),
                  c,
                ),
                (b || (b = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(+c, d),
                )
              );
            }
            case "PromoteDemoteAdminResponseServerError": {
              var m = i.value.errorServerErrors.value,
                p = m.code,
                _ = m.text;
              return (
                o("WALogger").WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "error sending demoting group participants iq: ",
                      "",
                    ])),
                  p,
                ),
                (b || (b = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(+p, _),
                )
              );
            }
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(t, n, r) {
      var a = o("WAWebLidMigrationUtils").toAddressingModeFactory(n);
      return t.map(function (t, i) {
        var l = a(t);
        return l
          ? o("WAWebWidFactory").asUserWidOrThrow(l)
          : (o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[",
                    "] Failed to normalise participant #",
                    " wid to ",
                    "",
                  ])),
                r,
                i + 1,
                n ? "LID" : "PN",
              )
              .sendLogs(r + "-participant-failed-to-normalise-wids"),
            t);
      });
    }
    ((l.removeGroupParticipants = v),
      (l.addGroupParticipants = R),
      (l.demoteGroupParticipants = I),
      (l.promoteGroupParticipants = D),
      (l.promoteCommunityParticipants = $),
      (l.demoteCommunityParticipants = N));
  },
  98,
);
