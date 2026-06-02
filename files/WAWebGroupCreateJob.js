__d(
  "WAWebGroupCreateJob",
  [
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
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d = (function (e) {
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
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "privacy_token_sending_on_group_create",
      );
    }
    async function p(t, n, a) {
      (a === void 0 && (a = []),
        o("WALogger").LOG(
          e || (e = babelHelpers.taggedTemplateLiteralLoose(["createGroup"])),
        ));
      var i = n.map(function (e) {
          return e.lid ? e.lid : e.phoneNumber;
        }),
        l = await o("WAWebSchemaChat")
          .getChatTable()
          .bulkGet(
            i.map(function (e) {
              return e.toString();
            }),
          ),
        p;
      m() &&
        l.length > 0 &&
        (p = o("WAWebGroupsPrivacyTokenUtils").getPermissionTokenMap(l, i));
      var _ = t.announce,
        f = t.ephemeralDuration,
        g = f === void 0 ? 0 : f,
        h = t.memberAddMode,
        y = t.memberLinkMode,
        C = t.memberShareGroupHistoryMode,
        b = t.membershipApprovalMode,
        v = t.parentGroupId,
        S = t.restrict,
        R = t.title,
        L = babelHelpers.extends(
          {
            participantArgs: [].concat(
              i.map(function (e, t) {
                var r,
                  a = n[t];
                return {
                  participantJid: o("WAWebWidToJid").widToUserJid(e),
                  participantPhoneNumber:
                    e.isLid() && a.phoneNumber
                      ? o("WAWebWidToJid").widToUserJid(a.phoneNumber)
                      : void 0,
                  participantUsername: e.isLid() ? a.username : void 0,
                  permissionTokenMixinArgs: (r = p) == null ? void 0 : r.get(e),
                };
              }),
              a.map(function (e) {
                var t;
                return {
                  participantJid: o("WAWebWidToJid").widToUserJid(e),
                  permissionTokenMixinArgs: (t = p) == null ? void 0 : t.get(e),
                };
              }),
            ),
            namedSubjectOrUnnamedSubjectFallbackMixinGroupArgs:
              R === ""
                ? { unnamedSubjectFallback: {} }
                : { namedSubject: { anySubject: R } },
            hasAnnouncement: !_,
            hasCapi: !1,
            hasNoFrequentlyForwarded: !1,
            hasHiddenGroup: !1,
            hasLocked: !S,
            hasBreakout: !1,
            hasAllowNonAdminSubGroupCreation: !1,
            hasCreateGeneralChat: !1,
            hasCreatedAsLid: !1,
            membershipApprovalModeArgs: {
              membershipApprovalModesArgs:
                b === !1
                  ? { isGroupJoinMembershipApprovalModeDisabled: !0 }
                  : { isGroupJoinMembershipApprovalModeEnabled: !0 },
            },
            groupMemberAddModeMixinArgs: {
              memberAddModesArgs:
                h === !1 ? { isAdminAddMode: !0 } : { isAllMembersAddMode: !0 },
            },
          },
          y != null
            ? {
                groupMemberLinkModeMixinArgs: {
                  memberLinkModesArgs:
                    y === !0
                      ? { isAllMembersLinkMode: !0 }
                      : { isAdminLinkMode: !0 },
                },
              }
            : void 0,
          {
            groupMemberShareGroupHistoryModeMixinArgs: {
              memberShareGroupHistoryModesArgs:
                C === !0
                  ? { isAllMembersShareMode: !0 }
                  : { isAdminShareMode: !0 },
            },
          },
        );
      if (g !== 0)
        if (
          o("WAWebABProps").getABPropConfigValue("dm_initiator_trigger_groups")
        ) {
          var E = await o("WAWebApiContact").getContactRecord(
              o("WAWebUserPrefsMeUser").getMeUser(),
            ),
            k = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(E),
            I = o("WAWebEphemeralityUtils").getEphemeralTriggerForGroupCreation(
              g,
              k,
            );
          I != null &&
            (L = babelHelpers.extends({}, L, {
              ephemeralArgs: { ephemeralExpiration: g, ephemeralTrigger: I },
            }));
        } else
          L = babelHelpers.extends({}, L, {
            ephemeralArgs: { ephemeralExpiration: g },
          });
      else
        L = babelHelpers.extends({}, L, {
          ephemeralArgs: { ephemeralExpiration: g },
        });
      v != null &&
        (L = babelHelpers.extends({}, L, {
          linkedParentArgs: {
            linkedParentJid: o("WAWebWidToJid").widToGroupJid(v),
          },
        }));
      var T = await o("WASmaxGroupsCreateRPC").sendCreateRPC(L, {
        timeoutSeconds: 10,
      });
      switch (T.name) {
        case "CreateResponseSuccess": {
          var D = T.value,
            x = D.groupCreation,
            $ = D.groupCreator,
            P = D.groupId,
            N =
              D.groupNamedSubjectOrUnnamedSubjectFallbackMixinGroup.value
                .subject,
            M = D.groupParticipant,
            w = o("WAWebWidFactory").createWid(P + "@g.us");
          return (
            new (o(
              "WAWebGroupCreateCWamEvent",
            ).GroupCreateCWamEvent)().commit(),
            {
              wid: w,
              subject: N != null ? N : "",
              creator: o("WAWebJidToWid").userJidToUserWid($),
              ts: o("WATimeUtils").castToUnixTime(x),
              participants: r("compactMap")(M, function (e) {
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
              invitedOutContacts: r("compactMap")(M, function (e) {
                var t,
                  n =
                    e.createParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup;
                if (
                  n.name === "NonRegisteredWaUserParticipantErrorLidResponse"
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
                      phoneNumberWid: o("WAWebJidToWid").userJidToUserWid(c),
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
            T.name,
          );
          var A = T.value.errorCreateClientErrors.value,
            F = A.code,
            O = A.text,
            B =
              T.value.errorCreateClientErrors.value
                .rateLimitAddParticipantTimeOrCountRateLimitMixinGroup;
          if (B != null)
            e: {
              var W = B;
              if (
                ((typeof W == "object" && W !== null) ||
                  typeof W == "function") &&
                W.name === "AddParticipantTimeRateLimit" &&
                ((typeof W.value == "object" && W.value !== null) ||
                  typeof W.value == "function") &&
                "backoff" in W.value &&
                "type" in W.value
              ) {
                var q = W.value.backoff,
                  U = W.value.type;
                return Promise.reject(
                  new (o(
                    "WAWebBackendErrors",
                  ).GroupAddParticipantTimeRateLimitServerError)(
                    Number(F),
                    q,
                    U,
                  ),
                );
              }
              if (
                ((typeof W == "object" && W !== null) ||
                  typeof W == "function") &&
                W.name === "AddParticipantCountRateLimit" &&
                ((typeof W.value == "object" && W.value !== null) ||
                  typeof W.value == "function") &&
                "participantLimit" in W.value
              ) {
                var V = W.value.participantLimit;
                return Promise.reject(
                  new (o(
                    "WAWebBackendErrors",
                  ).GroupAddParticipantCountRateLimitServerError)(Number(F), V),
                );
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  W,
              );
            }
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(F), O),
          );
        }
        case "CreateResponseServerError": {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "createGroup failed: ",
                "",
              ])),
            T.name,
          );
          var H = T.value.errorServerErrors.value,
            G = H.code,
            z = H.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(G), z),
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
              T.name,
            ),
            Promise.reject(new d())
          );
      }
    }
    ((l.GroupAlreadyExistsError = d), (l.createGroup = p));
  },
  98,
);
