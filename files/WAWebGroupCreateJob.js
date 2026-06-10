__d(
  "WAWebGroupCreateJob",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WASmaxGroupsCreateRPC",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiContact",
    "WAWebBackendErrors",
    "WAWebEphemeralityResolver",
    "WAWebEphemeralityUtils",
    "WAWebGroupApiConst",
    "WAWebGroupCreateCWamEvent",
    "WAWebGroupsPrivacyTokenUtils",
    "WAWebJidToWid",
    "WAWebSchemaChat",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = (function (e) {
        function t() {
          var t;
          return (
            (t = e.call(this, "CreateResponseGroupAlreadyExists") || this),
            (t.name = "GroupAlreadyExistsError"),
            t
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError);
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "privacy_token_sending_on_group_create",
      );
    }
    function _(e, t, n) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          (i === void 0 && (i = []),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose(["createGroup"])),
            ));
          var l = a.map(function (e) {
              return e.lid ? e.lid : e.phoneNumber;
            }),
            _ = yield o("WAWebSchemaChat")
              .getChatTable()
              .bulkGet(
                l.map(function (e) {
                  return e.toString();
                }),
              ),
            f;
          p() &&
            _.length > 0 &&
            (f = o("WAWebGroupsPrivacyTokenUtils").getPermissionTokenMap(_, l));
          var g = t.announce,
            h = t.ephemeralDuration,
            y = h === void 0 ? 0 : h,
            C = t.memberAddMode,
            b = t.memberLinkMode,
            v = t.memberShareGroupHistoryMode,
            S = t.membershipApprovalMode,
            R = t.parentGroupId,
            L = t.restrict,
            E = t.title,
            k = babelHelpers.extends(
              {
                participantArgs: [].concat(
                  l.map(function (e, t) {
                    var n,
                      r = a[t];
                    return {
                      participantJid: o("WAWebWidToJid").widToUserJid(e),
                      participantPhoneNumber:
                        e.isLid() && r.phoneNumber
                          ? o("WAWebWidToJid").widToUserJid(r.phoneNumber)
                          : void 0,
                      participantUsername: e.isLid() ? r.username : void 0,
                      permissionTokenMixinArgs:
                        (n = f) == null ? void 0 : n.get(e),
                    };
                  }),
                  i.map(function (e) {
                    var t;
                    return {
                      participantJid: o("WAWebWidToJid").widToUserJid(e),
                      permissionTokenMixinArgs:
                        (t = f) == null ? void 0 : t.get(e),
                    };
                  }),
                ),
                namedSubjectOrUnnamedSubjectFallbackMixinGroupArgs:
                  E === ""
                    ? { unnamedSubjectFallback: {} }
                    : { namedSubject: { anySubject: E } },
                hasAnnouncement: !g,
                hasCapi: !1,
                hasNoFrequentlyForwarded: !1,
                hasHiddenGroup: !1,
                hasLocked: !L,
                hasBreakout: !1,
                hasAllowNonAdminSubGroupCreation: !1,
                hasCreateGeneralChat: !1,
                hasCreatedAsLid: !1,
                membershipApprovalModeArgs: {
                  membershipApprovalModesArgs:
                    S === !1
                      ? { isGroupJoinMembershipApprovalModeDisabled: !0 }
                      : { isGroupJoinMembershipApprovalModeEnabled: !0 },
                },
                groupMemberAddModeMixinArgs: {
                  memberAddModesArgs:
                    C === !1
                      ? { isAdminAddMode: !0 }
                      : { isAllMembersAddMode: !0 },
                },
              },
              b != null
                ? {
                    groupMemberLinkModeMixinArgs: {
                      memberLinkModesArgs:
                        b === !0
                          ? { isAllMembersLinkMode: !0 }
                          : { isAdminLinkMode: !0 },
                    },
                  }
                : void 0,
              {
                groupMemberShareGroupHistoryModeMixinArgs: {
                  memberShareGroupHistoryModesArgs:
                    v === !0
                      ? { isAllMembersShareMode: !0 }
                      : { isAdminShareMode: !0 },
                },
              },
            );
          if (y !== 0)
            if (
              o("WAWebABProps").getABPropConfigValue(
                "dm_initiator_trigger_groups",
              )
            ) {
              var I = yield o("WAWebApiContact").getContactRecord(
                  o("WAWebUserPrefsMeUser").getMeUser(),
                ),
                T = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
                  I,
                ),
                D = o(
                  "WAWebEphemeralityUtils",
                ).getEphemeralTriggerForGroupCreation(y, T);
              D != null &&
                (k = babelHelpers.extends({}, k, {
                  ephemeralArgs: {
                    ephemeralExpiration: y,
                    ephemeralTrigger: D,
                  },
                }));
            } else
              k = babelHelpers.extends({}, k, {
                ephemeralArgs: { ephemeralExpiration: y },
              });
          else
            k = babelHelpers.extends({}, k, {
              ephemeralArgs: { ephemeralExpiration: y },
            });
          R != null &&
            (k = babelHelpers.extends({}, k, {
              linkedParentArgs: {
                linkedParentJid: o("WAWebWidToJid").widToGroupJid(R),
              },
            }));
          var x = yield o("WASmaxGroupsCreateRPC").sendCreateRPC(k, {
            timeoutSeconds: 10,
          });
          switch (x.name) {
            case "CreateResponseSuccess": {
              var $ = x.value,
                P = $.groupCreation,
                N = $.groupCreator,
                M = $.groupId,
                w =
                  $.groupNamedSubjectOrUnnamedSubjectFallbackMixinGroup.value
                    .subject,
                A = $.groupParticipant,
                F = o("WAWebWidFactory").createWid(M + "@g.us");
              return (
                new (o(
                  "WAWebGroupCreateCWamEvent",
                ).GroupCreateCWamEvent)().commit(),
                {
                  wid: F,
                  subject: w != null ? w : "",
                  creator: o("WAWebJidToWid").userJidToUserWid(N),
                  ts: o("WATimeUtils").castToUnixTime(P),
                  participants: r("compactMap")(A, function (e) {
                    var t,
                      n =
                        e.createParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup;
                    if (n.name === "CreateParticipantAddedResponse") {
                      var r = n.value.jid,
                        a = n.value.createParticipantMixins,
                        i =
                          (t = n.value.usernameAttMixin) == null
                            ? void 0
                            : t.username;
                      if (
                        !(
                          r == null ||
                          a == null ||
                          (a.name === "ParticipantRequestCodeCanBeSent" &&
                            a.value.participantNotAddressableMixin != null)
                        )
                      ) {
                        var l = a.value,
                          s = l.addRequestCode,
                          u = l.addRequestExpiration,
                          c = l.error,
                          d = l.type;
                        return {
                          wid: o("WAWebJidToWid").userJidToUserWid(r),
                          username: i,
                          error: c != null ? Number(c) : null,
                          type: o("WAWebGroupApiConst").GROUP_PARTICIPANT_TYPES[
                            d != null ? d : "participant"
                          ],
                          invite_code: s,
                          invite_code_exp: u != null ? String(u) : void 0,
                        };
                      }
                    }
                  }),
                  invitedOutContacts: r("compactMap")(A, function (e) {
                    var t,
                      n =
                        e.createParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup;
                    if (
                      n.name ===
                      "NonRegisteredWaUserParticipantErrorLidResponse"
                    ) {
                      var r,
                        a = n.value.phoneNumber,
                        i =
                          n.value
                            .participantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup;
                      return a == null || i == null
                        ? void 0
                        : {
                            phoneNumberWid:
                              o("WAWebJidToWid").userJidToUserWid(a),
                            code: String(
                              (r = i.value.error) != null ? r : "200",
                            ),
                          };
                    }
                    if (n.name === "CreateParticipantAddedResponse") {
                      var l = n.value.jid,
                        s = n.value.createParticipantMixins;
                      if (
                        !(
                          l == null ||
                          s == null ||
                          s.name !== "ParticipantRequestCodeCanBeSent" ||
                          s.value.participantNotAddressableMixin == null
                        )
                      )
                        return {
                          phoneNumberWid:
                            o("WAWebJidToWid").userJidToUserWid(l),
                          code: String((t = s.value.error) != null ? t : "200"),
                        };
                    }
                  }),
                }
              );
            }
            case "CreateResponseClientError": {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "createGroup failed: ",
                    "",
                  ])),
                x.name,
              );
              var O = x.value.errorCreateClientErrors.value,
                B = O.code,
                W = O.text,
                q =
                  x.value.errorCreateClientErrors.value
                    .rateLimitAddParticipantTimeOrCountRateLimitMixinGroup;
              if (q != null)
                e: {
                  var U = q;
                  if (
                    ((typeof U == "object" && U !== null) ||
                      typeof U == "function") &&
                    U.name === "AddParticipantTimeRateLimit" &&
                    ((typeof U.value == "object" && U.value !== null) ||
                      typeof U.value == "function") &&
                    "backoff" in U.value &&
                    "type" in U.value
                  ) {
                    var V = U.value.backoff,
                      H = U.value.type;
                    return (d || (d = n("Promise"))).reject(
                      new (o(
                        "WAWebBackendErrors",
                      ).GroupAddParticipantTimeRateLimitServerError)(
                        Number(B),
                        V,
                        H,
                      ),
                    );
                  }
                  if (
                    ((typeof U == "object" && U !== null) ||
                      typeof U == "function") &&
                    U.name === "AddParticipantCountRateLimit" &&
                    ((typeof U.value == "object" && U.value !== null) ||
                      typeof U.value == "function") &&
                    "participantLimit" in U.value
                  ) {
                    var G = U.value.participantLimit;
                    return (d || (d = n("Promise"))).reject(
                      new (o(
                        "WAWebBackendErrors",
                      ).GroupAddParticipantCountRateLimitServerError)(
                        Number(B),
                        G,
                      ),
                    );
                  }
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      U,
                  );
                }
              return (d || (d = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(B),
                  W,
                ),
              );
            }
            case "CreateResponseServerError": {
              o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "createGroup failed: ",
                    "",
                  ])),
                x.name,
              );
              var z = x.value.errorServerErrors.value,
                j = z.code,
                K = z.text;
              return (d || (d = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(j),
                  K,
                ),
              );
            }
            case "CreateResponseGroupAlreadyExists":
              return (
                o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "createGroup failed: ",
                      "",
                    ])),
                  x.name,
                ),
                (d || (d = n("Promise"))).reject(new m())
              );
          }
        })),
        f.apply(this, arguments)
      );
    }
    ((l.GroupAlreadyExistsError = m), (l.createGroup = _));
  },
  98,
);
