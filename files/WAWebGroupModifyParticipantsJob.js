__d(
  "WAWebGroupModifyParticipantsJob",
  [
    "Promise",
    "WALogger",
    "WASmaxGroupsAddParticipantsRPC",
    "WASmaxGroupsPromoteDemoteAdminRPC",
    "WASmaxGroupsPromoteDemoteRPC",
    "WASmaxGroupsRemoveParticipantsRPC",
    "WAWebABProps",
    "WAWebBackendErrors",
    "WAWebCoreActionsODS",
    "WAWebGroupsPrivacyTokenUtils",
    "WAWebJidToWid",
    "WAWebLidMigrationUtils",
    "WAWebSchemaChat",
    "WAWebSetUsernameJob",
    "WAWebUsernameGatingUtils",
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
                        username: a,
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
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "privacy_token_sending_on_group_participant_add",
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var r = t.map(function (e) {
              return e.lid ? e.lid : e.phoneNumber;
            }),
            a = yield o("WAWebSchemaChat")
              .getChatTable()
              .bulkGet(
                r.map(function (e) {
                  return e.toString();
                }),
              ),
            i;
          R() &&
            a.length > 0 &&
            (i = o("WAWebGroupsPrivacyTokenUtils").getPermissionTokenMap(a, r));
          var l = {
              participantArgs: r.map(function (e, n) {
                var r,
                  a = t[n];
                return {
                  participantJid: o("WAWebWidToJid").widToUserJid(e),
                  participantPhoneNumber:
                    e.isLid() && a.phoneNumber
                      ? o("WAWebWidToJid").widToUserJid(a.phoneNumber)
                      : void 0,
                  participantUsername: e.isLid() ? a.username : void 0,
                  permissionTokenMixinArgs: (r = i) == null ? void 0 : r.get(e),
                };
              }),
              iqTo: o("WAWebWidToJid").widToGroupJid(e),
            },
            s;
          try {
            s = yield o(
              "WASmaxGroupsAddParticipantsRPC",
            ).sendAddParticipantsRPC(l);
          } catch (e) {
            throw (o("WAWebCoreActionsODS").logGroupAddParticipantError(), e);
          }
          switch (s.name) {
            case "AddParticipantsResponseSuccess": {
              var u = s.value.addParticipant;
              if (
                (o("WAWebCoreActionsODS").logGroupAddParticipant(),
                o("WAWebUsernameGatingUtils").usernameDisplayedEnabled())
              ) {
                var m = u.reduce(function (e, t) {
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
                        username: a,
                      }),
                    e
                  );
                }, []);
                m.length > 0 &&
                  (yield o("WAWebSetUsernameJob").setUsernamesJob(m));
              }
              return {
                status: 207,
                participants: u.map(function (e) {
                  var t,
                    n,
                    r,
                    a,
                    i,
                    l,
                    s =
                      (t =
                        e.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup) ==
                        null ||
                      (t = t.value) == null ||
                      (t = t.addParticipantsParticipantMixins) == null
                        ? void 0
                        : t.value.error,
                    u =
                      (n =
                        e
                          .addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup
                          .value.addParticipantsParticipantMixins) == null ||
                      (n = n.value) == null
                        ? void 0
                        : n.membershipApprovalRequestError,
                    c,
                    d;
                  if (
                    ((r =
                      e.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup) ==
                      null ||
                    (r = r.value) == null ||
                    (r = r.addParticipantsParticipantMixins) == null
                      ? void 0
                      : r.name) === "ParticipantRequestCodeCanBeSent"
                  ) {
                    var m, p;
                    ((c =
                      (m =
                        e.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup) ==
                        null ||
                      (m = m.value) == null ||
                      (m = m.addParticipantsParticipantMixins) == null ||
                      (m = m.value) == null
                        ? void 0
                        : m.addRequestCode),
                      (d =
                        (p =
                          e.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup) ==
                          null ||
                        (p = p.value) == null ||
                        (p = p.addParticipantsParticipantMixins) == null ||
                        (p = p.value) == null
                          ? void 0
                          : p.addRequestExpiration));
                  }
                  var _ = { membershipApprovalRequestError: u };
                  return {
                    userWid:
                      e
                        .addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup
                        .value.jid != null
                        ? o("WAWebJidToWid").userJidToUserWid(
                            e
                              .addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup
                              .value.jid,
                          )
                        : null,
                    username:
                      (a =
                        (i =
                          e.addParticipantsParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup) ==
                          null || (i = i.value.usernameAttMixin) == null
                          ? void 0
                          : i.username) != null
                        ? a
                        : null,
                    code: s != null ? s : "200",
                    subCode: _,
                    invite_code: c,
                    invite_code_exp: (l = d) == null ? void 0 : l.toString(),
                  };
                }),
              };
            }
            case "AddParticipantsResponseClientError": {
              var p = s.value.errorAddParticipantsClientErrors.value,
                _ = p.code,
                f = p.text,
                g =
                  s.value.errorAddParticipantsClientErrors.value
                    .rateLimitAddParticipantTimeOrCountRateLimitMixinGroup;
              if (
                (o("WAWebCoreActionsODS").logGroupAddParticipantError(),
                o("WALogger").WARN(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "error sending add group participants iq: ",
                      "",
                    ])),
                  _,
                ),
                g != null)
              )
                switch (g.name) {
                  case "AddParticipantTimeRateLimit":
                    return (b || (b = n("Promise"))).reject(
                      new (o(
                        "WAWebBackendErrors",
                      ).GroupAddParticipantTimeRateLimitServerError)(
                        _,
                        g.value.backoff,
                        g.value.type,
                      ),
                    );
                  case "AddParticipantCountRateLimit":
                    return (b || (b = n("Promise"))).reject(
                      new (o(
                        "WAWebBackendErrors",
                      ).GroupAddParticipantCountRateLimitServerError)(
                        _,
                        g.value.participantLimit,
                      ),
                    );
                }
              return (b || (b = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(+_, f),
              );
            }
            case "AddParticipantsResponseServerError": {
              var h = s.value.errorServerErrors.value,
                y = h.code,
                C = h.text;
              return (
                o("WAWebCoreActionsODS").logGroupAddParticipantError(),
                o("WALogger").WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "error sending add group participants iq: ",
                      "",
                    ])),
                  y,
                ),
                (b || (b = n("Promise"))).reject(
                  new (o("WAWebBackendErrors").ServerStatusCodeError)(+y, C),
                )
              );
            }
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = M(t, r, "demote"),
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
                        username: a,
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
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = M(t, r, "promote"),
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
                        username: a,
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
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = M(t, r, "admin-promote"),
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
                        username: a,
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
        $.apply(this, arguments)
      );
    }
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          var a = M(t, r, "admin-demote"),
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
                        username: a,
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
        N.apply(this, arguments)
      );
    }
    function M(t, n, r) {
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
      (l.addGroupParticipants = L),
      (l.demoteGroupParticipants = k),
      (l.promoteGroupParticipants = T),
      (l.promoteCommunityParticipants = x),
      (l.demoteCommunityParticipants = P));
  },
  98,
);
