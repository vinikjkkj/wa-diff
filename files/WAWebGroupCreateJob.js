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
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          (i === void 0 && (i = []),
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose(["createGroup"])),
            ));
          var l = a.map(function (e) {
              return e.lid ? e.lid : e.phoneNumber;
            }),
            p = yield o("WAWebSchemaChat")
              .getChatTable()
              .bulkGet(
                l.map(function (e) {
                  return e.toString();
                }),
              ),
            _;
          p.length > 0 &&
            (_ = o("WAWebGroupsPrivacyTokenUtils").getPermissionTokenMap(p, l));
          var f = t.announce,
            g = t.ephemeralDuration,
            h = g === void 0 ? 0 : g,
            y = t.memberAddMode,
            C = t.memberLinkMode,
            b = t.memberShareGroupHistoryMode,
            v = t.membershipApprovalMode,
            S = t.parentGroupId,
            R = t.restrict,
            L = t.title,
            E = babelHelpers.extends(
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
                        (n = _) == null ? void 0 : n.get(e),
                    };
                  }),
                  i.map(function (e) {
                    var t;
                    return {
                      participantJid: o("WAWebWidToJid").widToUserJid(e),
                      permissionTokenMixinArgs:
                        (t = _) == null ? void 0 : t.get(e),
                    };
                  }),
                ),
                namedSubjectOrUnnamedSubjectFallbackMixinGroupArgs:
                  L === ""
                    ? { unnamedSubjectFallback: {} }
                    : { namedSubject: { anySubject: L } },
                hasAnnouncement: !f,
                hasCapi: !1,
                hasNoFrequentlyForwarded: !1,
                hasHiddenGroup: !1,
                hasLocked: !R,
                hasBreakout: !1,
                hasAllowNonAdminSubGroupCreation: !1,
                hasCreateGeneralChat: !1,
                hasCreatedAsLid: !1,
                membershipApprovalModeArgs: {
                  membershipApprovalModesArgs:
                    v === !1
                      ? { isGroupJoinMembershipApprovalModeDisabled: !0 }
                      : { isGroupJoinMembershipApprovalModeEnabled: !0 },
                },
                groupMemberAddModeMixinArgs: {
                  memberAddModesArgs:
                    y === !1
                      ? { isAdminAddMode: !0 }
                      : { isAllMembersAddMode: !0 },
                },
              },
              C != null
                ? {
                    groupMemberLinkModeMixinArgs: {
                      memberLinkModesArgs:
                        C === !0
                          ? { isAllMembersLinkMode: !0 }
                          : { isAdminLinkMode: !0 },
                    },
                  }
                : void 0,
              {
                groupMemberShareGroupHistoryModeMixinArgs: {
                  memberShareGroupHistoryModesArgs:
                    b === !0
                      ? { isAllMembersShareMode: !0 }
                      : { isAdminShareMode: !0 },
                },
              },
            );
          if (h !== 0)
            if (
              o("WAWebABProps").getABPropConfigValue(
                "dm_initiator_trigger_groups",
              )
            ) {
              var k = yield o("WAWebApiContact").getContactRecord(
                  o("WAWebUserPrefsMeUser").getMeUser(),
                ),
                I = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
                  k,
                ),
                T = o(
                  "WAWebEphemeralityUtils",
                ).getEphemeralTriggerForGroupCreation(h, I);
              T != null &&
                (E = babelHelpers.extends({}, E, {
                  ephemeralArgs: {
                    ephemeralExpiration: h,
                    ephemeralTrigger: T,
                  },
                }));
            } else
              E = babelHelpers.extends({}, E, {
                ephemeralArgs: { ephemeralExpiration: h },
              });
          else
            E = babelHelpers.extends({}, E, {
              ephemeralArgs: { ephemeralExpiration: h },
            });
          S != null &&
            (E = babelHelpers.extends({}, E, {
              linkedParentArgs: {
                linkedParentJid: o("WAWebWidToJid").widToGroupJid(S),
              },
            }));
          var D = yield o("WASmaxGroupsCreateRPC").sendCreateRPC(E, {
            timeoutSeconds: 10,
          });
          switch (D.name) {
            case "CreateResponseSuccess": {
              var x = D.value,
                $ = x.groupCreation,
                P = x.groupCreator,
                N = x.groupId,
                M =
                  x.groupNamedSubjectOrUnnamedSubjectFallbackMixinGroup.value
                    .subject,
                w = x.groupParticipant,
                A = o("WAWebWidFactory").createWid(N + "@g.us");
              return (
                new (o(
                  "WAWebGroupCreateCWamEvent",
                ).GroupCreateCWamEvent)().commit(),
                {
                  wid: A,
                  subject: M != null ? M : "",
                  creator: o("WAWebJidToWid").userJidToUserWid(P),
                  ts: o("WATimeUtils").castToUnixTime($),
                  participants: r("compactMap")(w, function (e) {
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
                  invitedOutContacts: r("compactMap")(w, function (e) {
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
                D.name,
              );
              var F = D.value.errorCreateClientErrors.value,
                O = F.code,
                B = F.text,
                W =
                  D.value.errorCreateClientErrors.value
                    .rateLimitAddParticipantTimeOrCountRateLimitMixinGroup;
              if (W != null)
                e: {
                  var q = W;
                  if (
                    ((typeof q == "object" && q !== null) ||
                      typeof q == "function") &&
                    q.name === "AddParticipantTimeRateLimit" &&
                    ((typeof q.value == "object" && q.value !== null) ||
                      typeof q.value == "function") &&
                    "backoff" in q.value &&
                    "type" in q.value
                  ) {
                    var U = q.value.backoff,
                      V = q.value.type;
                    return (d || (d = n("Promise"))).reject(
                      new (o(
                        "WAWebBackendErrors",
                      ).GroupAddParticipantTimeRateLimitServerError)(
                        Number(O),
                        U,
                        V,
                      ),
                    );
                  }
                  if (
                    ((typeof q == "object" && q !== null) ||
                      typeof q == "function") &&
                    q.name === "AddParticipantCountRateLimit" &&
                    ((typeof q.value == "object" && q.value !== null) ||
                      typeof q.value == "function") &&
                    "participantLimit" in q.value
                  ) {
                    var H = q.value.participantLimit;
                    return (d || (d = n("Promise"))).reject(
                      new (o(
                        "WAWebBackendErrors",
                      ).GroupAddParticipantCountRateLimitServerError)(
                        Number(O),
                        H,
                      ),
                    );
                  }
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      q,
                  );
                }
              return (d || (d = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(O),
                  B,
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
                D.name,
              );
              var G = D.value.errorServerErrors.value,
                z = G.code,
                j = G.text;
              return (d || (d = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(z),
                  j,
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
                  D.name,
                ),
                (d || (d = n("Promise"))).reject(new m())
              );
          }
        })),
        _.apply(this, arguments)
      );
    }
    ((l.GroupAlreadyExistsError = m), (l.createGroup = p));
  },
  98,
);
