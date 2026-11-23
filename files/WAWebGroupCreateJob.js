__d(
  "WAWebGroupCreateJob",
  [
    "WACustomError",
    "WALogger",
    "WASmaxGroupsCreateRPC",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendErrors",
    "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
    "WAWebEphemeralityResolver",
    "WAWebEphemeralityUtils",
    "WAWebGroupApiConst",
    "WAWebGroupCreateCWamEvent",
    "WAWebGroupsPrivacyTokenUtils",
    "WAWebJidToWid",
    "WAWebSchemaChat",
    "WAWebUserUtils",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "compactMap",
    "getErrorSafe",
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
            hasWork: !1,
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
      if (g !== 0) {
        var E = await o("WAWebApiContact").getContactRecord(
            o("WAWebUserUtils").getMeUserOrThrow(),
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
          new (o("WAWebGroupCreateCWamEvent").GroupCreateCWamEvent)().commit();
          var A = r("compactMap")(M, function (e) {
            var t =
              e.createParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup;
            if (t.name === "CreateParticipantAddedResponse") {
              var n = t.value,
                r = n.jid,
                a = n.phoneNumberMixin,
                i = a == null ? void 0 : a.phoneNumber;
              if (!(r == null || i == null)) {
                var l = o("WAWebJidToWid").userJidToUserWid(r);
                if (l.isLid())
                  return {
                    id: l,
                    phoneNumber: o("WAWebJidToWid").userJidToUserWid(i),
                  };
              }
            }
          });
          try {
            await o(
              "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
            ).createOrReplaceDisplayNamesAndLidPnMappings(A, !0);
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "WAWebGroupCreateJob: failed to learn lid/pn mappings from create response",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("group-create-lid-pn-mapping-learn-failed");
          }
          return {
            wid: w,
            subject: N != null ? N : "",
            creator: o("WAWebJidToWid").userJidToUserWid($),
            ts: o("WATimeUtils").castToUnixTime(x),
            participants: r("compactMap")(M, function (e) {
              var t,
                n,
                r =
                  e.createParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup;
              if (r.name === "CreateParticipantAddedResponse") {
                var a = r.value.jid,
                  i = r.value.createParticipantMixins,
                  l =
                    (t = r.value.usernameAttMixin) == null
                      ? void 0
                      : t.username;
                if (
                  !(
                    a == null ||
                    i == null ||
                    (i.name === "ParticipantRequestCodeCanBeSent" &&
                      i.value.participantNotAddressableMixin != null)
                  )
                ) {
                  var s = i.value,
                    u = s.addRequestCode,
                    c = s.addRequestExpiration,
                    d = s.error,
                    m = s.type,
                    p =
                      i.name === "CreateParticipantAdded" &&
                      (n = i.value.joinTime) != null
                        ? n
                        : null;
                  return {
                    wid: o("WAWebJidToWid").userJidToUserWid(a),
                    username: l,
                    error: d != null ? Number(d) : null,
                    type: o("WAWebGroupApiConst").GROUP_PARTICIPANT_TYPES[
                      m != null ? m : "participant"
                    ],
                    invite_code: u,
                    invite_code_exp: c != null ? String(c) : void 0,
                    joinTime: p,
                  };
                }
              }
            }),
            invitedOutContacts: r("compactMap")(M, function (e) {
              var t,
                n =
                  e.createParticipantAddedOrNonRegisteredWaUserParticipantErrorLidResponseMixinGroup;
              if (n.name === "NonRegisteredWaUserParticipantErrorLidResponse") {
                var r,
                  a = n.value.phoneNumber,
                  i =
                    n.value
                      .participantRequestCodeCanBeSentOrRequestCodeCannotBeCreatedForLegalConcernsOrHasInvalidPNMixinGroup;
                return a == null || i == null
                  ? void 0
                  : {
                      phoneNumberWid: o("WAWebJidToWid").userJidToUserWid(a),
                      code: String((r = i.value.error) != null ? r : "200"),
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
                    phoneNumberWid: o("WAWebJidToWid").userJidToUserWid(l),
                    code: String((t = s.value.error) != null ? t : "200"),
                  };
              }
            }),
          };
        }
        case "CreateResponseClientError": {
          o("WALogger").LOG(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "createGroup failed: ",
                "",
              ])),
            T.name,
          );
          var F = T.value.errorCreateClientErrors.value,
            O = F.code,
            B = F.text,
            W =
              T.value.errorCreateClientErrors.value
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
                return Promise.reject(
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
                return Promise.reject(
                  new (o(
                    "WAWebBackendErrors",
                  ).GroupAddParticipantCountRateLimitServerError)(Number(O), H),
                );
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  q,
              );
            }
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(O), B),
          );
        }
        case "CreateResponseServerError": {
          o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "createGroup failed: ",
                "",
              ])),
            T.name,
          );
          var G = T.value.errorServerErrors.value,
            z = G.code,
            j = G.text;
          return Promise.reject(
            new (o("WAWebBackendErrors").ServerStatusCodeError)(Number(z), j),
          );
        }
        case "CreateResponseGroupAlreadyExists":
          return (
            o("WALogger").LOG(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "createGroup failed: ",
                  "",
                ])),
              T.name,
            ),
            Promise.reject(new m())
          );
      }
    }
    ((l.GroupAlreadyExistsError = m), (l.createGroup = p));
  },
  98,
);
