__d(
  "WAWebModifyParticipantsGroupAction",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebActionToast.react",
    "WAWebBackendErrors",
    "WAWebBackendRuntime",
    "WAWebFbtIntlList",
    "WAWebFrontendContactGetters",
    "WAWebGroupAddResultDialogs.react",
    "WAWebGroupAgentConflictAddResult",
    "WAWebGroupAgentRemoveNotFoundJob",
    "WAWebGroupIncompatibleDeviceAddResult",
    "WAWebGroupModifyParticipantsJob",
    "WAWebGroupMutationParticipantUtils",
    "WAWebGroupOutContactInvite",
    "WAWebGroupParticipantsService",
    "WAWebGroupStringsAction",
    "WAWebIncompatibleAgentRequestsRejectTriggers",
    "WAWebJidToWid",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebModifyParticipantsRateLimitText",
    "WAWebNetworkStatus",
    "WAWebNoop",
    "WAWebOutContactInviteGating",
    "WAWebOutContactInviteUtils",
    "WAWebSentGroupAgentRequests",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserUtils",
    "WAWebWamEnumCompanionInviteOriginType",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "WAWebWorkFeature",
    "countWhere",
    "cr:22529",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h = g || (g = o("react"));
    function y(e, t, n, r) {
      return (
        n === void 0 && (n = []),
        E({
          addMembersEntrypoint: r,
          chat: o("WAWebStateUtils").unproxy(e),
          contacts: t,
          outContacts: n,
        })
      );
    }
    function C(e, t) {
      return x(o("WAWebStateUtils").unproxy(e), t);
    }
    function b(e, t) {
      return P(o("WAWebStateUtils").unproxy(e), t);
    }
    function v(e, t) {
      return N(o("WAWebStateUtils").unproxy(e), t);
    }
    function S(e, t) {
      return M(o("WAWebStateUtils").unproxy(e), t);
    }
    function R(e, t) {
      return w(o("WAWebStateUtils").unproxy(e), t);
    }
    var L = [];
    async function E(t) {
      var n,
        a,
        i = t.addMembersEntrypoint,
        l = t.chat,
        c = t.contacts,
        d = t.outContacts,
        m = d === void 0 ? L : d,
        p = t.toastId,
        _ = p === void 0 ? o("WAWebActionToast.react").genId() : p,
        f = (n = l.groupMetadata) == null ? void 0 : n.participants;
      if (f == null)
        return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      if (
        c.some(function (e) {
          return f.get(e.id);
        })
      )
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[groupMeta] addParticipants: already member",
              ])),
          ),
          Promise.reject(new (o("WAWebMiscErrors").ActionError)())
        );
      if (!f.canAdd())
        return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      var g =
          ((a = l.groupMetadata) == null ? void 0 : a.isLidAddressingMode) ===
          !0,
        y = m.map(function (e) {
          return o("WAWebJidToWid").userJidToUserWid(e.id);
        }),
        C = k(l.id, c, g, y),
        b = r("WAWebFbtIntlList")(
          c.map(function (e) {
            return o("WAWebFrontendContactGetters").getFormattedShortName(e);
          }),
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ).toString(),
        v = r("WAWebFbtIntlList")(
          m.map(function (e) {
            return e.getName();
          }),
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ).toString(),
        S = c.length === 0 && m.length > 0,
        R = S ? v : b,
        I = S ? m.length : c.length,
        x = new (o("WAWebActionToast.react").ActionType)(
          o("WAWebGroupStringsAction").addingString(R, I),
        ),
        $ = C.then(function (e) {
          var t,
            n,
            a,
            u,
            d,
            p = D(e, i),
            _ = p.agentConflictWids,
            g = p.hasIncompatibleDeviceRejection,
            h = p.reportedResponse,
            y = (t = e.invitedOutContacts) != null ? t : [],
            C = e.participants.some(function (e) {
              return e.code === "403";
            }),
            b = new Set(
              y
                .filter(function (e) {
                  return e.code !== "200";
                })
                .map(function (e) {
                  return e.phoneNumberWid.toString();
                }),
            ),
            v = m.filter(function (e) {
              return b.has(
                o("WAWebJidToWid").userJidToUserWid(e.id).toString(),
              );
            }),
            R = r("countWhere")(y, function (e) {
              return e.code !== "200";
            }),
            L = {
              entryPoint: o("WAWebWamEnumCompanionInviteOriginType")
                .COMPANION_INVITE_ORIGIN_TYPE.GROUPS_ADD_PARTICIPANT_SELECTOR,
              groupJid: o("WAWebWidToJid").widToGroupJid(l.id),
              groupName:
                (n = (a = l.groupMetadata) == null ? void 0 : a.subject) != null
                  ? n
                  : "",
              invitedOutContacts: y,
              isStandaloneGroup:
                ((u = l.groupMetadata) == null ? void 0 : u.parentGroup) ==
                  null &&
                ((d = l.groupMetadata) == null ? void 0 : d.isParentGroup) !==
                  !0,
              outContacts: m,
            },
            E =
              m.length > 0
                ? function () {
                    var e = o(
                        "WAWebGroupOutContactInvite",
                      ).inviteGroupOutContacts(L),
                      t = e.offeredInvite,
                      n = e.uninvitedCount;
                    ((!S || t) && T(n),
                      t || o("WAWebModalManager").closeModalManager());
                  }
                : r("WAWebNoop");
          o("WAWebGroupAddResultDialogs.react").runAfterAddResultDialogs(
            { agentConflictWids: _, hasIncompatibleDeviceRejection: g },
            function () {
              C
                ? f.sendForNeededAddRequest(e.participants, E)
                : E == null || E();
            },
          );
          var k = e.participants.filter(function (e) {
            return e.code === "417";
          });
          if (k.length > 0) {
            var I = s._(/*BTDS*/ "", [
                s._plural(k.length, "participant_count"),
              ]),
              x = e.participants.some(function (e) {
                return e.code === "200";
              });
            if (!x) throw new (o("WAWebActionToast.react").ActionType)(I);
            return new (o("WAWebActionToast.react").ActionType)(I);
          }
          if (S) {
            if (
              o("WAWebGroupOutContactInvite").getServerSentInviteOutContacts(
                L,
              ) != null
            )
              return null;
            if (
              v.length > 0 &&
              o("WAWebOutContactInviteGating").isOutContactInviteEnabled()
            ) {
              var $ = r("WAWebFbtIntlList")(
                v.map(function (e) {
                  return e.getName();
                }),
                r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                r("WAWebFbtIntlList").DELIMITERS.COMMA,
              ).toString();
              return new (o("WAWebActionToast.react").ActionType)(
                o("WAWebGroupStringsAction").addSuccessString($, v.length),
              );
            }
            throw new (o("WAWebActionToast.react").ActionType)(
              o("WAWebOutContactInviteUtils").getGroupInviteAddFailedToastText(
                R,
              ),
            );
          }
          if ((g || _.length > 0) && h.participants.length === 0) return null;
          var P = o("WAWebGroupStringsAction").formatResult(
              h,
              o("WAWebGroupStringsAction").addSuccessString,
              function (e, t, n) {
                return o("WAWebGroupStringsAction").addFailedString({
                  _status: n,
                  memberNames: e,
                  plural: t,
                });
              },
              o("WAWebGroupStringsAction").addPartialFailedString,
              c,
            ),
            N = h.participants.some(function (e) {
              return e.code === "200";
            });
          if (!N) throw new (o("WAWebActionToast.react").ActionType)(P);
          return new (o("WAWebActionToast.react").ActionType)(P);
        }).catch(function (e) {
          if (e instanceof o("WAWebActionToast.react").ActionType) throw e;
          m.length > 0 && o("WAWebModalManager").closeModalManager();
          var t = new (o("WAWebActionToast.react").ActionType)(
            S
              ? o(
                  "WAWebOutContactInviteUtils",
                ).getGroupInviteAddFailedToastText(m.length)
              : s._(/*BTDS*/ "", [
                  s._plural(c.length),
                  s._param("participantNames", b),
                ]),
            {
              actionText: s._(/*BTDS*/ ""),
              actionHandler: function () {
                return E({
                  addMembersEntrypoint: i,
                  chat: l,
                  contacts: c,
                  outContacts: m,
                  toastId: _,
                });
              },
            },
          );
          switch (e.status) {
            case 419:
              throw new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ ""),
              );
            case 429: {
              if (
                o("WAWebABProps").getABPropConfigValue(
                  "enable_group_create_or_add_rate_limiting_error_ux",
                )
              )
                switch (e.name) {
                  case "GroupAddParticipantTimeRateLimitServerError":
                    throw new (o("WAWebActionToast.react").ActionType)(
                      o(
                        "WAWebModifyParticipantsRateLimitText",
                      ).WAWebModifyParticipantsTimeRateLimitText(e),
                    );
                  case "GroupAddParticipantCountRateLimitServerError":
                    throw new (o("WAWebActionToast.react").ActionType)(
                      o(
                        "WAWebModifyParticipantsRateLimitText",
                      ).WAWebModifyParticipantsCountRateLimitText(e),
                    );
                }
              throw t;
            }
            default:
              throw (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[groupMeta] addParticipants dropped",
                    ])),
                ),
                t
              );
          }
        });
      return (
        o("WAWebToastManager").ToastManager.open(
          h.jsx(o("WAWebActionToast.react").ActionToast, {
            id: _,
            initialAction: x,
            pendingAction: $,
          }),
        ),
        C
      );
    }
    async function k(e, t, r, a) {
      o("WAWebWorkFeature").isWork() &&
        (await (n("cr:22529") == null
          ? void 0
          : n("cr:22529").resolveWorkGroupMutationIdentifiers(t, r)));
      var i = t.map(function (e) {
          var t = e.id;
          return t;
        }),
        l = t.map(function (e) {
          return o("WAWebGroupMutationParticipantUtils").getGroupAddParticipant(
            e,
            r,
            "addParticipants",
          );
        }),
        s = await o("WAWebSentGroupAgentRequests").recordSentGroupAgentRequests(
          e,
          i,
          "add",
        ),
        u;
      try {
        u = await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupParticipantsService").GroupParticipantsService,
              ).addGroupParticipants
            : o("WAWebGroupModifyParticipantsJob").addGroupParticipants
        )(e, l, a);
      } catch (t) {
        throw (
          I(t) &&
            o(
              "WAWebIncompatibleAgentRequestsRejectTriggers",
            ).startIncompatibleAgentRequestRejectsAfterAnswer(e, s, i, []),
          t
        );
      }
      return (
        o(
          "WAWebIncompatibleAgentRequestsRejectTriggers",
        ).startIncompatibleAgentRequestRejectsAfterAnswer(
          e,
          s,
          i,
          u.participants
            .filter(function (e) {
              var t = e.code;
              return t === "200";
            })
            .map(function (e) {
              var t = e.userWid;
              return t;
            }),
        ),
        u
      );
    }
    function I(e) {
      return (
        e instanceof o("WAWebBackendErrors").ServerStatusCodeError ||
        e instanceof
          o("WAWebBackendErrors").GroupAddParticipantTimeRateLimitServerError ||
        e instanceof
          o("WAWebBackendErrors").GroupAddParticipantCountRateLimitServerError
      );
    }
    function T(e) {
      e !== 0 &&
        o("WAWebToastManager").ToastManager.open(
          h.jsx(o("WAWebToast.react").Toast, {
            msg: o(
              "WAWebOutContactInviteUtils",
            ).getGroupInviteAddFailedToastText(e),
          }),
        );
    }
    function D(e, t) {
      var n = o(
          "WAWebGroupIncompatibleDeviceAddResult",
        ).splitIncompatibleDeviceRejections(e, t),
        r = n.hasIncompatibleDeviceRejection,
        a = n.reportedResponse,
        i = o("WAWebGroupAgentConflictAddResult").getAgentConflictRejectedWids(
          a.participants,
        );
      return i.length === 0
        ? {
            agentConflictWids: i,
            hasIncompatibleDeviceRejection: r,
            reportedResponse: a,
          }
        : {
            agentConflictWids: i,
            hasIncompatibleDeviceRejection: r,
            reportedResponse: babelHelpers.extends({}, a, {
              participants: a.participants.filter(function (e) {
                var t = e.code,
                  n = e.userWid;
                return !o(
                  "WAWebGroupAgentConflictAddResult",
                ).isAgentConflictRejection(t, n);
              }),
            }),
          };
    }
    async function x(e, t, n) {
      var a;
      n === void 0 && (n = o("WAWebActionToast.react").genId());
      var i = (a = e.groupMetadata) == null ? void 0 : a.participants;
      if (i == null)
        return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      if (
        t.some(function (e) {
          return !i.canRemove(e);
        })
      )
        return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      var l = (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupParticipantsService").GroupParticipantsService,
              ).removeGroupParticipants
            : o("WAWebGroupModifyParticipantsJob").removeGroupParticipants
        )(
          e.id,
          t.map(function (e) {
            return o("WAWebWidFactory").asUserWidOrThrow(e.id);
          }),
        ),
        u = r("WAWebFbtIntlList")(
          t.map(function (e) {
            return o("WAWebFrontendContactGetters").getFormattedShortName(
              e.contact,
            );
          }),
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ).toString(),
        d = new (o("WAWebActionToast.react").ActionType)(
          o("WAWebGroupStringsAction").removingString(u, t.length),
        ),
        m = l
          .then(function (n) {
            return $(e, n, t);
          })
          .catch(function (r) {
            return (
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] removeParticipants dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "", [
                  s._plural(t.length),
                  s._param("participantNames", u),
                ]),
                {
                  actionText: s._(/*BTDS*/ ""),
                  actionHandler: function () {
                    return x(e, t, n);
                  },
                },
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          h.jsx(o("WAWebActionToast.react").ActionToast, {
            id: n,
            initialAction: d,
            pendingAction: m,
          }),
        ),
        l
      );
    }
    function $(e, t, n) {
      var a,
        i = o("WAWebGroupAgentRemoveNotFoundJob").getNotFoundGroupAgentWids(t);
      if (i.length === 0)
        return new (o("WAWebActionToast.react").ActionType)(
          o("WAWebGroupStringsAction").formatRemoveResult(
            t,
            n.map(function (e) {
              return e.contact;
            }),
          ),
        );
      o("WAWebGroupAgentRemoveNotFoundJob")
        .removeDepartedGroupAgents(
          e.id,
          i,
          ((a = e.groupMetadata) == null ? void 0 : a.isLidAddressingMode) ===
            !0,
        )
        .catch(function (e) {
          o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[groupMeta] removeParticipants: departed agent sync failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("group-agent-remove-404-sync-failed");
        });
      var l = new Set(i.map(String)),
        s = t.participants.filter(function (e) {
          var t = e.userWid;
          return !l.has(t.toString());
        });
      return s.length === 0
        ? null
        : new (o("WAWebActionToast.react").ActionType)(
            o("WAWebGroupStringsAction").formatRemoveResult(
              babelHelpers.extends({}, t, { participants: s }),
              n
                .filter(function (e) {
                  return !l.has(e.id.toString());
                })
                .map(function (e) {
                  return e.contact;
                }),
            ),
          );
    }
    async function P(e, t, n) {
      var a, i;
      n === void 0 && (n = o("WAWebActionToast.react").genId());
      var l = (a = e.groupMetadata) == null ? void 0 : a.participants;
      if (l == null)
        return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      if (
        t.some(function (e) {
          return !l.canPromote(e);
        })
      )
        return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      var u = (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupParticipantsService").GroupParticipantsService,
              ).promoteGroupParticipants
            : o("WAWebGroupModifyParticipantsJob").promoteGroupParticipants
        )(
          e.id,
          t.map(function (e) {
            return o("WAWebWidFactory").asUserWidOrThrow(e.id);
          }),
          ((i = e.groupMetadata) == null ? void 0 : i.isLidAddressingMode) ===
            !0,
        ),
        c = r("WAWebFbtIntlList")(
          t.map(function (e) {
            return o("WAWebFrontendContactGetters").getFormattedShortName(
              e.contact,
            );
          }),
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ).toString(),
        d = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "", [
            s._plural(t.length),
            s._param("participantNames", c),
          ]),
        ),
        p = u
          .then(function (e) {
            var n,
              r = (n = o("WAWebGroupStringsAction")).formatResult(
                e,
                n.promoteSuccessString,
                n.promoteFailedString,
                n.promotePartialFailedString,
                t.map(function (e) {
                  return e.contact;
                }),
              );
            return new (o("WAWebActionToast.react").ActionType)(r);
          })
          .catch(function (r) {
            return (
              o("WALogger").WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] promoteParticipants dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "", [
                  s._plural(t.length),
                  s._param("participantNames", c),
                ]),
                {
                  actionText: s._(/*BTDS*/ ""),
                  actionHandler: function () {
                    return P(e, t, n);
                  },
                },
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          h.jsx(o("WAWebActionToast.react").ActionToast, {
            id: n,
            initialAction: d,
            pendingAction: p,
          }),
        ),
        u
      );
    }
    async function N(e, t, n) {
      var a, i;
      n === void 0 && (n = o("WAWebActionToast.react").genId());
      var l = (a = e.groupMetadata) == null ? void 0 : a.participants;
      if (l == null)
        return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      if (
        t.some(function (e) {
          return !l.canDemote(e);
        })
      )
        return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      var u = (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupParticipantsService").GroupParticipantsService,
              ).demoteGroupParticipants
            : o("WAWebGroupModifyParticipantsJob").demoteGroupParticipants
        )(
          e.id,
          t.map(function (e) {
            return o("WAWebWidFactory").asUserWidOrThrow(e.id);
          }),
          ((i = e.groupMetadata) == null ? void 0 : i.isLidAddressingMode) ===
            !0,
        ),
        c = r("WAWebFbtIntlList")(
          t.map(function (e) {
            return o("WAWebFrontendContactGetters").getFormattedShortName(
              e.contact,
            );
          }),
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ).toString(),
        d = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "", [
            s._plural(t.length),
            s._param("participantNames", c),
          ]),
        ),
        m = u
          .then(function (e) {
            var n,
              r = (n = o("WAWebGroupStringsAction")).formatResult(
                e,
                n.demoteSuccessString,
                n.demoteFailedString,
                n.demotePartialFailedString,
                t.map(function (e) {
                  return e.contact;
                }),
              );
            return new (o("WAWebActionToast.react").ActionType)(r);
          })
          .catch(function (r) {
            return (
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] demoteParticipants dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "", [
                  s._plural(t.length),
                  s._param("participantNames", c),
                ]),
                {
                  actionText: s._(/*BTDS*/ ""),
                  actionHandler: function () {
                    return N(e, t, n);
                  },
                },
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          h.jsx(o("WAWebActionToast.react").ActionToast, {
            id: n,
            initialAction: d,
            pendingAction: m,
          }),
        ),
        u
      );
    }
    function M(e, t, n) {
      var a, i;
      n === void 0 && (n = o("WAWebActionToast.react").genId());
      var l = (a = e.groupMetadata) == null ? void 0 : a.participants;
      if (l == null)
        return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      var u = o("WAWebGroupModifyParticipantsJob").promoteCommunityParticipants(
          e.id,
          t.map(function (e) {
            return o("WAWebWidFactory").asUserWidOrThrow(e.id);
          }),
          ((i = e.groupMetadata) == null ? void 0 : i.isLidAddressingMode) ===
            !0,
        ),
        c = r("WAWebFbtIntlList")(
          t.map(function (e) {
            return o("WAWebFrontendContactGetters").getFormattedShortName(
              e.contact,
            );
          }),
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ).toString(),
        d = new (o("WAWebActionToast.react").ActionType)(
          s._(/*BTDS*/ "", [s._plural(t.length), s._param("userNames", c)]),
        ),
        m = u
          .then(function (e) {
            if (e.status === 207)
              return new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "", [
                  s._plural(t.length),
                  s._param("userNames", c),
                ]),
              );
          })
          .catch(function (e) {
            return (
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] promoteCommunityParticipants dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(/*BTDS*/ "", [s._param("userNames", c)]),
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          h.jsx(o("WAWebActionToast.react").ActionToast, {
            id: n,
            initialAction: d,
            pendingAction: m,
          }),
        ),
        u
      );
    }
    async function w(e, t, n) {
      var a, i;
      if (
        (n === void 0 && (n = o("WAWebActionToast.react").genId()),
        !r("WAWebNetworkStatus").online)
      ) {
        var l = r("WAWebFbtIntlList")(
            t.map(function (e) {
              return o("WAWebFrontendContactGetters").getFormattedShortName(
                e.contact,
              );
            }),
            r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
            r("WAWebFbtIntlList").DELIMITERS.COMMA,
          ).toString(),
          u =
            t.length === 1 && o("WAWebUserUtils").isMeAccount(t[0].id)
              ? s._(/*BTDS*/ "")
              : s._(/*BTDS*/ "", [
                  s._plural(t.length),
                  s._param("userNames", l),
                ]);
        o("WAWebToastManager").ToastManager.open(
          h.jsx(o("WAWebToast.react").Toast, { msg: u }),
        );
        return;
      }
      var c = (a = e.groupMetadata) == null ? void 0 : a.participants;
      if (c == null)
        return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      var d = o("WAWebGroupModifyParticipantsJob").demoteCommunityParticipants(
          e.id,
          t.map(function (e) {
            return o("WAWebWidFactory").asUserWidOrThrow(e.id);
          }),
          ((i = e.groupMetadata) == null ? void 0 : i.isLidAddressingMode) ===
            !0,
        ),
        m = r("WAWebFbtIntlList")(
          t.map(function (e) {
            return o("WAWebFrontendContactGetters").getFormattedShortName(
              e.contact,
            );
          }),
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ).toString(),
        p = new (o("WAWebActionToast.react").ActionType)(
          t.length === 1 && o("WAWebUserUtils").isMeAccount(t[0].id)
            ? s._(/*BTDS*/ "")
            : s._(/*BTDS*/ "", [s._plural(t.length), s._param("userNames", m)]),
        ),
        _ = d
          .then(function (e) {
            if (e.status === 207)
              return new (o("WAWebActionToast.react").ActionType)(
                t.length === 1 && o("WAWebUserUtils").isMeAccount(t[0].id)
                  ? s._(/*BTDS*/ "")
                  : s._(/*BTDS*/ "", [
                      s._plural(t.length),
                      s._param("userNames", m),
                    ]),
              );
          })
          .catch(function (e) {
            return (
              o("WALogger").WARN(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] demoteCommunityParticipants dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                t.length === 1 && o("WAWebUserUtils").isMeAccount(t[0].id)
                  ? s._(/*BTDS*/ "")
                  : s._(/*BTDS*/ "", [
                      s._plural(t.length),
                      s._param("userNames", m),
                    ]),
              )
            );
          });
      (o("WAWebToastManager").ToastManager.open(
        h.jsx(o("WAWebActionToast.react").ActionToast, {
          id: n,
          initialAction: p,
          pendingAction: _,
        }),
      ),
        await d);
    }
    ((l.addParticipants = y),
      (l.removeParticipants = C),
      (l.promoteParticipants = b),
      (l.demoteParticipants = v),
      (l.promoteCommunityParticipants = S),
      (l.demoteCommunityParticipants = R));
  },
  226,
);
