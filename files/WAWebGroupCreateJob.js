__d(
  "WAWebGroupCreateJob",
  [
    "Promise",
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
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "compactMap",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (function (e) {
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
          if (y !== 0) {
            var I = yield o("WAWebApiContact").getContactRecord(
                o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              ),
              T = o("WAWebEphemeralityResolver").getEphemeralDurationForUser(I),
              D = o(
                "WAWebEphemeralityUtils",
              ).getEphemeralTriggerForGroupCreation(y, T);
            D != null &&
              (k = babelHelpers.extends({}, k, {
                ephemeralArgs: { ephemeralExpiration: y, ephemeralTrigger: D },
              }));
          } else
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
              new (o(
                "WAWebGroupCreateCWamEvent",
              ).GroupCreateCWamEvent)().commit();
              var O = r("compactMap")(A, function (e) {
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
                yield o(
                  "WAWebCreateOrReplaceDisplayNamesAndLidPnMappingsJob",
                ).createOrReplaceDisplayNamesAndLidPnMappings(O, !0);
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
                wid: F,
                subject: w != null ? w : "",
                creator: o("WAWebJidToWid").userJidToUserWid(N),
                ts: o("WATimeUtils").castToUnixTime(P),
                participants: r("compactMap")(A, function (e) {
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
                invitedOutContacts: r("compactMap")(A, function (e) {
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
                    return a == null || i == null
                      ? void 0
                      : {
                          phoneNumberWid:
                            o("WAWebJidToWid").userJidToUserWid(a),
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
                x.name,
              );
              var B = x.value.errorCreateClientErrors.value,
                W = B.code,
                q = B.text,
                U =
                  x.value.errorCreateClientErrors.value
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
                    return (m || (m = n("Promise"))).reject(
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
                    return (m || (m = n("Promise"))).reject(
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
              return (m || (m = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(W),
                  q,
                ),
              );
            }
            case "CreateResponseServerError": {
              o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "createGroup failed: ",
                    "",
                  ])),
                x.name,
              );
              var j = x.value.errorServerErrors.value,
                K = j.code,
                Q = j.text;
              return (m || (m = n("Promise"))).reject(
                new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  Number(K),
                  Q,
                ),
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
                  x.name,
                ),
                (m || (m = n("Promise"))).reject(new p())
              );
          }
        })),
        f.apply(this, arguments)
      );
    }
    ((l.GroupAlreadyExistsError = p), (l.createGroup = _));
  },
  98,
);
