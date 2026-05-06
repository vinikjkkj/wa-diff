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
    "gkx",
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
          var g = t.addressingModeOverride,
            h = t.announce,
            y = t.ephemeralDuration,
            C = y === void 0 ? 0 : y,
            b = t.memberAddMode,
            v = t.memberLinkMode,
            S = t.memberShareGroupHistoryMode,
            R = t.membershipApprovalMode,
            L = t.parentGroupId,
            E = t.restrict,
            k = t.title,
            I = babelHelpers.extends(
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
                  k === ""
                    ? { unnamedSubjectFallback: {} }
                    : { namedSubject: { anySubject: k } },
                hasAnnouncement: !h,
                hasCapi: !1,
                hasNoFrequentlyForwarded: !1,
                hasHiddenGroup: !1,
                hasLocked: !E,
                hasBreakout: !1,
                hasAllowNonAdminSubGroupCreation: !1,
                hasCreateGeneralChat: !1,
                hasCreatedAsLid: !1,
                membershipApprovalModeArgs: {
                  membershipApprovalModesArgs:
                    R === !1
                      ? { isGroupJoinMembershipApprovalModeDisabled: !0 }
                      : { isGroupJoinMembershipApprovalModeEnabled: !0 },
                },
                groupMemberAddModeMixinArgs: {
                  memberAddModesArgs:
                    b === !1
                      ? { isAdminAddMode: !0 }
                      : { isAllMembersAddMode: !0 },
                },
              },
              v != null
                ? {
                    groupMemberLinkModeMixinArgs: {
                      memberLinkModesArgs:
                        v === !0
                          ? { isAllMembersLinkMode: !0 }
                          : { isAdminLinkMode: !0 },
                    },
                  }
                : void 0,
              {
                groupMemberShareGroupHistoryModeMixinArgs: {
                  memberShareGroupHistoryModesArgs:
                    S === !0
                      ? { isAllMembersShareMode: !0 }
                      : { isAdminShareMode: !0 },
                },
              },
            );
          if (C !== 0)
            if (
              o("WAWebABProps").getABPropConfigValue(
                "dm_initiator_trigger_groups",
              )
            ) {
              var T = yield o("WAWebApiContact").getContactRecord(
                  o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                ),
                D = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(
                  T,
                ),
                x = o(
                  "WAWebEphemeralityUtils",
                ).getEphemeralTriggerForGroupCreation(C, D);
              x != null &&
                (I = babelHelpers.extends({}, I, {
                  ephemeralArgs: {
                    ephemeralExpiration: C,
                    ephemeralTrigger: x,
                  },
                }));
            } else
              I = babelHelpers.extends({}, I, {
                ephemeralArgs: { ephemeralExpiration: C },
              });
          else
            I = babelHelpers.extends({}, I, {
              ephemeralArgs: { ephemeralExpiration: C },
            });
          (L != null &&
            (I = babelHelpers.extends({}, I, {
              linkedParentArgs: {
                linkedParentJid: o("WAWebWidToJid").widToGroupJid(L),
              },
            })),
            (!r("gkx")("26258") || r("gkx")("26256")) &&
              g != null &&
              L == null &&
              o("WAWebABProps").getABPropConfigValue(
                "lid_group_creation_addressing_mode_override",
              ) &&
              (I = babelHelpers.extends({}, I, {
                addressingModeOverrideArgs: { addressingModeOverrideMode: g },
              })));
          var $ = yield o("WASmaxGroupsCreateRPC").sendCreateRPC(I, {
            timeoutSeconds: 10,
          });
          switch ($.name) {
            case "CreateResponseSuccess": {
              var P = $.value,
                N = P.groupCreation,
                M = P.groupCreator,
                w = P.groupId,
                A =
                  P.groupNamedSubjectOrUnnamedSubjectFallbackMixinGroup.value
                    .subject,
                F = P.groupParticipant,
                O = o("WAWebWidFactory").createWid(w + "@g.us");
              return (
                new (o(
                  "WAWebGroupCreateCWamEvent",
                ).GroupCreateCWamEvent)().commit(),
                {
                  wid: O,
                  subject: A != null ? A : "",
                  creator: o("WAWebJidToWid").userJidToUserWid(M),
                  ts: o("WATimeUtils").castToUnixTime(N),
                  participants: r("compactMap")(F, function (e) {
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
                  invitedOutContacts: r("compactMap")(F, function (e) {
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
                      if (a == null || i == null) return;
                      var l =
                          i.name === "ParticipantRequestCodeCanBeSent"
                            ? i.value.addRequestCode
                            : null,
                        s =
                          i.name === "ParticipantRequestCodeCanBeSent" &&
                          i.value.addRequestExpiration != null
                            ? String(i.value.addRequestExpiration)
                            : null,
                        u =
                          l != null
                            ? "200"
                            : String((r = i.value.error) != null ? r : "200");
                      return {
                        phoneNumberWid: o("WAWebJidToWid").userJidToUserWid(a),
                        code: u,
                        invite_code: l,
                        invite_code_exp: s,
                      };
                    }
                    if (n.name === "CreateParticipantAddedResponse") {
                      var c = n.value.jid,
                        d = n.value.createParticipantMixins;
                      if (
                        !(
                          c == null ||
                          d == null ||
                          d.name !== "ParticipantRequestCodeCanBeSent" ||
                          d.value.participantNotAddressableMixin == null
                        )
                      )
                        return {
                          phoneNumberWid:
                            o("WAWebJidToWid").userJidToUserWid(c),
                          code: String((t = d.value.error) != null ? t : "200"),
                          invite_code: d.value.addRequestCode,
                          invite_code_exp:
                            d.value.addRequestExpiration != null
                              ? String(d.value.addRequestExpiration)
                              : null,
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
                $.name,
              );
              var B = $.value.errorCreateClientErrors.value,
                W = B.code,
                q = B.text,
                U =
                  $.value.errorCreateClientErrors.value
                    .rateLimitAddParticipantTimeOrCountRateLimitMixinGroup;
              if (U != null)
                e: {
                  var V = U;
                  if (
                    ((typeof V == "object" && V !== null) ||
                      typeof V == "function") &&
                    V.name === "AddParticipantTimeRateLimit" &&
                    ((typeof V.value == "object" && V.value !== null) ||
                      typeof V.value == "function") &&
                    "backoff" in V.value &&
                    "type" in V.value
                  ) {
                    var H = V.value.backoff,
                      G = V.value.type;
                    return (d || (d = n("Promise"))).reject(
                      new (o(
                        "WAWebBackendErrors",
                      ).GroupAddParticipantTimeRateLimitServerError)(
                        Number(W),
                        H,
                        G,
                      ),
                    );
                  }
                  if (
                    ((typeof V == "object" && V !== null) ||
                      typeof V == "function") &&
                    V.name === "AddParticipantCountRateLimit" &&
                    ((typeof V.value == "object" && V.value !== null) ||
                      typeof V.value == "function") &&
                    "participantLimit" in V.value
                  ) {
                    var z = V.value.participantLimit;
                    return (d || (d = n("Promise"))).reject(
                      new (o(
                        "WAWebBackendErrors",
                      ).GroupAddParticipantCountRateLimitServerError)(
                        Number(W),
                        z,
                      ),
                    );
                  }
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      V,
                  );
                }
              return (d || (d = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(W),
                  q,
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
                $.name,
              );
              var j = $.value.errorServerErrors.value,
                K = j.code,
                Q = j.text;
              return (d || (d = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(K),
                  Q,
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
                  $.name,
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
