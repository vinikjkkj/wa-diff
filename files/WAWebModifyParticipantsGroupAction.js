__d(
  "WAWebModifyParticipantsGroupAction",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebActionToast.react",
    "WAWebFbtIntlList",
    "WAWebFrontendContactGetters",
    "WAWebGroupAddResultDialogs.react",
    "WAWebGroupAgentConflictAddResult",
    "WAWebGroupAgentRemoveNotFoundJob",
    "WAWebGroupIncompatibleDeviceAddResult",
    "WAWebGroupModifyParticipantsJob",
    "WAWebGroupMutationParticipantUtils",
    "WAWebGroupStringsAction",
    "WAWebJidToWid",
    "WAWebMembershipApprovalRequestAction",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebModifyParticipantsRateLimitText",
    "WAWebNetworkStatus",
    "WAWebNoop",
    "WAWebOutContactInviteAction",
    "WAWebOutContactInviteUtils",
    "WAWebOutContactSmsInviteConfirmModal.react",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumCompanionInviteOriginType",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "countWhere",
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
      h,
      y,
      C = y || (y = o("react"));
    function b(e, t, n, r) {
      return (
        n === void 0 && (n = []),
        I({
          addMembersEntrypoint: r,
          chat: o("WAWebStateUtils").unproxy(e),
          contacts: t,
          outContacts: n,
        })
      );
    }
    function v(e, t) {
      return P(o("WAWebStateUtils").unproxy(e), t);
    }
    function S(e, t) {
      return w(o("WAWebStateUtils").unproxy(e), t);
    }
    function R(e, t) {
      return F(o("WAWebStateUtils").unproxy(e), t);
    }
    function L(e, t) {
      return B(o("WAWebStateUtils").unproxy(e), t);
    }
    function E(e, t) {
      return W(o("WAWebStateUtils").unproxy(e), t);
    }
    var k = [];
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i = e.addMembersEntrypoint,
            l = e.chat,
            u = e.contacts,
            c = e.outContacts,
            p = c === void 0 ? k : c,
            _ = e.toastId,
            f = _ === void 0 ? o("WAWebActionToast.react").genId() : _,
            g = (t = l.groupMetadata) == null ? void 0 : t.participants;
          if (g == null)
            return (h || (h = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          if (
            u.some(function (e) {
              return g.get(e.id);
            })
          )
            return (
              o("WALogger").WARN(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] addParticipants: already member",
                  ])),
              ),
              (h || (h = n("Promise"))).reject(
                new (o("WAWebMiscErrors").ActionError)(),
              )
            );
          if (!g.canAdd())
            return (h || (h = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          var y =
              ((a = l.groupMetadata) == null
                ? void 0
                : a.isLidAddressingMode) === !0,
            b = p.map(function (e) {
              return o("WAWebJidToWid").userJidToUserWid(e.id);
            }),
            v = o("WAWebGroupModifyParticipantsJob").addGroupParticipants(
              l.id,
              u.map(function (e) {
                return o(
                  "WAWebGroupMutationParticipantUtils",
                ).getGroupMutationParticipant(e, y, "addParticipants");
              }),
              b,
            ),
            S = r("WAWebFbtIntlList")(
              u.map(function (e) {
                return o("WAWebFrontendContactGetters").getFormattedShortName(
                  e,
                );
              }),
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            ).toString(),
            R = r("WAWebFbtIntlList")(
              p.map(function (e) {
                return e.getName();
              }),
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            ).toString(),
            L = u.length === 0 && p.length > 0,
            E = L ? R : S,
            T = L ? p.length : u.length,
            P = new (o("WAWebActionToast.react").ActionType)(
              o("WAWebGroupStringsAction").addingString(E, T),
            ),
            N = v
              .then(function (e) {
                var t,
                  n = $(e, i),
                  a = n.agentConflictWids,
                  c = n.hasIncompatibleDeviceRejection,
                  d = n.reportedResponse;
                D(l, e);
                var m = (t = e.invitedOutContacts) != null ? t : [],
                  _ = e.participants.some(function (e) {
                    return e.code === "403";
                  }),
                  f = new Set(
                    m
                      .filter(function (e) {
                        return e.code !== "200";
                      })
                      .map(function (e) {
                        return e.phoneNumberWid.toString();
                      }),
                  ),
                  h = p.filter(function (e) {
                    return f.has(
                      o("WAWebJidToWid").userJidToUserWid(e.id).toString(),
                    );
                  }),
                  y = r("countWhere")(m, function (e) {
                    return e.code !== "200";
                  }),
                  b =
                    p.length > 0
                      ? function () {
                          if (h.length > 0) {
                            o("WAWebModalManager").ModalManager.open(
                              C.jsx(
                                r("WAWebOutContactSmsInviteConfirmModal.react"),
                                {
                                  names: h.map(function (e) {
                                    return e.getName();
                                  }),
                                  onConfirm: function () {
                                    (o(
                                      "WAWebOutContactInviteAction",
                                    ).sendMultiGroupInvite(
                                      h.map(function (e) {
                                        return e.phoneNumber;
                                      }),
                                      o("WAWebWidToJid").widToGroupJid(l.id),
                                      o("WAWebWamEnumCompanionInviteOriginType")
                                        .COMPANION_INVITE_ORIGIN_TYPE
                                        .GROUPS_ADD_PARTICIPANT_SELECTOR,
                                    ),
                                      o(
                                        "WAWebModalManager",
                                      ).closeModalManager());
                                  },
                                  onCancel:
                                    o("WAWebModalManager").closeModalManager,
                                },
                              ),
                            );
                            return;
                          }
                          (L || x(y),
                            o("WAWebModalManager").closeModalManager());
                        }
                      : r("WAWebNoop");
                o("WAWebGroupAddResultDialogs.react").runAfterAddResultDialogs(
                  { agentConflictWids: a, hasIncompatibleDeviceRejection: c },
                  function () {
                    _
                      ? g.sendForNeededAddRequest(e.participants, b)
                      : b == null || b();
                  },
                );
                var v = e.participants.filter(function (e) {
                  return e.code === "417";
                });
                if (v.length > 0) {
                  var S = s._(
                      /*BTDS*/ '_j{"*":"{participant_count} participants can\'t be added to the community. You can invite them privately to join this group through its invite link.","_1":"1 participant can\'t be added to the community. You can invite them privately to join this group through its invite link."}',
                      [s._plural(v.length, "participant_count")],
                    ),
                    R = e.participants.some(function (e) {
                      return e.code === "200";
                    });
                  if (!R) throw new (o("WAWebActionToast.react").ActionType)(S);
                  return new (o("WAWebActionToast.react").ActionType)(S);
                }
                if (L) {
                  if (h.length > 0) {
                    var E = r("WAWebFbtIntlList")(
                      h.map(function (e) {
                        return e.getName();
                      }),
                      r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                      r("WAWebFbtIntlList").DELIMITERS.COMMA,
                    ).toString();
                    return new (o("WAWebActionToast.react").ActionType)(
                      o("WAWebGroupStringsAction").addSuccessString(
                        E,
                        h.length,
                      ),
                    );
                  }
                  throw new (o("WAWebActionToast.react").ActionType)(
                    o(
                      "WAWebOutContactInviteUtils",
                    ).getGroupInviteAddFailedToastText(y),
                  );
                }
                if ((c || a.length > 0) && d.participants.length === 0)
                  return null;
                var k = o("WAWebGroupStringsAction").formatResult(
                    d,
                    o("WAWebGroupStringsAction").addSuccessString,
                    function (e, t, n) {
                      return o("WAWebGroupStringsAction").addFailedString({
                        _status: n,
                        memberNames: e,
                        plural: t,
                      });
                    },
                    o("WAWebGroupStringsAction").addPartialFailedString,
                    u,
                  ),
                  I = d.participants.some(function (e) {
                    return e.code === "200";
                  });
                if (!I) throw new (o("WAWebActionToast.react").ActionType)(k);
                return new (o("WAWebActionToast.react").ActionType)(k);
              })
              .catch(function (e) {
                if (e instanceof o("WAWebActionToast.react").ActionType)
                  throw e;
                p.length > 0 && o("WAWebModalManager").closeModalManager();
                var t = new (o("WAWebActionToast.react").ActionType)(
                  L
                    ? o(
                        "WAWebOutContactInviteUtils",
                      ).getGroupInviteAddFailedToastText(p.length)
                    : s._(
                        /*BTDS*/ '_j{"*":"Couldn\'t add {participantNames}."}',
                        [s._plural(u.length), s._param("participantNames", S)],
                      ),
                  {
                    actionText: s._(/*BTDS*/ "Try again."),
                    actionHandler: function () {
                      return I({
                        addMembersEntrypoint: i,
                        chat: l,
                        contacts: u,
                        outContacts: p,
                        toastId: f,
                      });
                    },
                  },
                );
                switch (e.status) {
                  case 419:
                    throw new (o("WAWebActionToast.react").ActionType)(
                      s._(
                        /*BTDS*/ "This participant can't be added because the community is full.",
                      ),
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
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "[groupMeta] addParticipants dropped",
                          ])),
                      ),
                      t
                    );
                }
              });
          return (
            o("WAWebToastManager").ToastManager.open(
              C.jsx(o("WAWebActionToast.react").ActionToast, {
                id: f,
                initialAction: P,
                pendingAction: N,
              }),
            ),
            v
          );
        })),
        T.apply(this, arguments)
      );
    }
    function D(t, n) {
      var a = n.participants
        .filter(function (e) {
          return e.code === "200" && e.userWid.isFbidBot();
        })
        .map(function (e) {
          return e.userWid;
        });
      a.length !== 0 &&
        o("WAWebMembershipApprovalRequestAction")
          .rejectIncompatibleAgentRequests(t, a)
          .catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] incompatible agent request reject failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("membership-approval-agent-reject-failed");
          });
    }
    function x(e) {
      e !== 0 &&
        o("WAWebToastManager").ToastManager.open(
          C.jsx(o("WAWebToast.react").Toast, {
            msg: o(
              "WAWebOutContactInviteUtils",
            ).getGroupInviteAddFailedToastText(e),
          }),
        );
    }
    function $(e, t) {
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
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i;
          a === void 0 && (a = o("WAWebActionToast.react").genId());
          var l = (i = e.groupMetadata) == null ? void 0 : i.participants;
          if (l == null)
            return (h || (h = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          if (
            t.some(function (e) {
              return !l.canRemove(e);
            })
          )
            return (h || (h = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          var u = o("WAWebGroupModifyParticipantsJob").removeGroupParticipants(
              e.id,
              t.map(function (e) {
                return o("WAWebWidFactory").asUserWidOrThrow(e.id);
              }),
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
              o("WAWebGroupStringsAction").removingString(c, t.length),
            ),
            m = u
              .then(function (n) {
                return M(e, n, t);
              })
              .catch(function (n) {
                return (
                  o("WALogger").WARN(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "[groupMeta] removeParticipants dropped",
                      ])),
                  ),
                  new (o("WAWebActionToast.react").ActionType)(
                    s._(
                      /*BTDS*/ '_j{"*":"Couldn\'t remove {participantNames}."}',
                      [s._plural(t.length), s._param("participantNames", c)],
                    ),
                    {
                      actionText: s._(/*BTDS*/ "Try again."),
                      actionHandler: function () {
                        return P(e, t, a);
                      },
                    },
                  )
                );
              });
          (o("WAWebToastManager").ToastManager.open(
            C.jsx(o("WAWebActionToast.react").ActionToast, {
              id: a,
              initialAction: d,
              pendingAction: m,
            }),
          ),
            yield u);
        })),
        N.apply(this, arguments)
      );
    }
    function M(e, t, n) {
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
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
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
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i, l;
          a === void 0 && (a = o("WAWebActionToast.react").genId());
          var u = (i = e.groupMetadata) == null ? void 0 : i.participants;
          if (u == null)
            return (h || (h = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          if (
            t.some(function (e) {
              return !u.canPromote(e);
            })
          )
            return (h || (h = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          var c = o("WAWebGroupModifyParticipantsJob").promoteGroupParticipants(
              e.id,
              t.map(function (e) {
                return o("WAWebWidFactory").asUserWidOrThrow(e.id);
              }),
              ((l = e.groupMetadata) == null
                ? void 0
                : l.isLidAddressingMode) === !0,
            ),
            d = r("WAWebFbtIntlList")(
              t.map(function (e) {
                return o("WAWebFrontendContactGetters").getFormattedShortName(
                  e.contact,
                );
              }),
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            ).toString(),
            m = new (o("WAWebActionToast.react").ActionType)(
              s._(
                /*BTDS*/ '_j{"*":"Making {participantNames} group admins.","_1":"Making {participantNames} a group admin."}',
                [s._plural(t.length), s._param("participantNames", d)],
              ),
            ),
            p = c
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
              .catch(function (n) {
                return (
                  o("WALogger").WARN(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[groupMeta] promoteParticipants dropped",
                      ])),
                  ),
                  new (o("WAWebActionToast.react").ActionType)(
                    s._(
                      /*BTDS*/ '_j{"*":"Couldn\'t make {participantNames} admins.","_1":"Couldn\'t make {participantNames} an admin."}',
                      [s._plural(t.length), s._param("participantNames", d)],
                    ),
                    {
                      actionText: s._(/*BTDS*/ "Try again."),
                      actionHandler: function () {
                        return w(e, t, a);
                      },
                    },
                  )
                );
              });
          (o("WAWebToastManager").ToastManager.open(
            C.jsx(o("WAWebActionToast.react").ActionToast, {
              id: a,
              initialAction: m,
              pendingAction: p,
            }),
          ),
            yield c);
        })),
        A.apply(this, arguments)
      );
    }
    function F(e, t, n) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i, l;
          a === void 0 && (a = o("WAWebActionToast.react").genId());
          var u = (i = e.groupMetadata) == null ? void 0 : i.participants;
          if (u == null)
            return (h || (h = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          if (
            t.some(function (e) {
              return !u.canDemote(e);
            })
          )
            return (h || (h = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          var c = o("WAWebGroupModifyParticipantsJob").demoteGroupParticipants(
              e.id,
              t.map(function (e) {
                return o("WAWebWidFactory").asUserWidOrThrow(e.id);
              }),
              ((l = e.groupMetadata) == null
                ? void 0
                : l.isLidAddressingMode) === !0,
            ),
            d = r("WAWebFbtIntlList")(
              t.map(function (e) {
                return o("WAWebFrontendContactGetters").getFormattedShortName(
                  e.contact,
                );
              }),
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            ).toString(),
            m = new (o("WAWebActionToast.react").ActionType)(
              s._(
                /*BTDS*/ '_j{"*":"Removing {participantNames} as group admins.","_1":"Removing {participantNames} as a group admin."}',
                [s._plural(t.length), s._param("participantNames", d)],
              ),
            ),
            p = c
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
              .catch(function (n) {
                return (
                  o("WALogger").WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[groupMeta] demoteParticipants dropped",
                      ])),
                  ),
                  new (o("WAWebActionToast.react").ActionType)(
                    s._(
                      /*BTDS*/ '_j{"*":"Removing {participantNames} as admins failed.","_1":"Removing {participantNames} as an admin failed."}',
                      [s._plural(t.length), s._param("participantNames", d)],
                    ),
                    {
                      actionText: s._(/*BTDS*/ "Try again."),
                      actionHandler: function () {
                        return F(e, t, a);
                      },
                    },
                  )
                );
              });
          (o("WAWebToastManager").ToastManager.open(
            C.jsx(o("WAWebActionToast.react").ActionToast, {
              id: a,
              initialAction: m,
              pendingAction: p,
            }),
          ),
            yield c);
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t, a) {
      var i, l;
      a === void 0 && (a = o("WAWebActionToast.react").genId());
      var u = (i = e.groupMetadata) == null ? void 0 : i.participants;
      if (u == null)
        return (h || (h = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var d = o("WAWebGroupModifyParticipantsJob").promoteCommunityParticipants(
          e.id,
          t.map(function (e) {
            return o("WAWebWidFactory").asUserWidOrThrow(e.id);
          }),
          ((l = e.groupMetadata) == null ? void 0 : l.isLidAddressingMode) ===
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
          s._(
            /*BTDS*/ '_j{"*":"Making {userNames} community admins.","_1":"Making {userNames} community admin."}',
            [s._plural(t.length), s._param("userNames", m)],
          ),
        ),
        _ = d
          .then(function (e) {
            if (e.status === 207)
              return new (o("WAWebActionToast.react").ActionType)(
                s._(
                  /*BTDS*/ '_j{"*":"{userNames} are now community admins.","_1":"{userNames} is now a community admin."}',
                  [s._plural(t.length), s._param("userNames", m)],
                ),
              );
          })
          .catch(function (e) {
            return (
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] promoteCommunityParticipants dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(
                  /*BTDS*/ "Promotion to community admin of {userNames} failed.",
                  [s._param("userNames", m)],
                ),
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          C.jsx(o("WAWebActionToast.react").ActionToast, {
            id: a,
            initialAction: p,
            pendingAction: _,
          }),
        ),
        d
      );
    }
    function W(e, t, n) {
      return q.apply(this, arguments);
    }
    function q() {
      return (
        (q = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i, l;
          if (
            (a === void 0 && (a = o("WAWebActionToast.react").genId()),
            !r("WAWebNetworkStatus").online)
          ) {
            var u = r("WAWebFbtIntlList")(
                t.map(function (e) {
                  return o("WAWebFrontendContactGetters").getFormattedShortName(
                    e.contact,
                  );
                }),
                r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                r("WAWebFbtIntlList").DELIMITERS.COMMA,
              ).toString(),
              c =
                t.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t[0].id)
                  ? s._(
                      /*BTDS*/ "You were not dismissed as a community admin. Check your connection and try again.",
                    )
                  : s._(
                      /*BTDS*/ '_j{"*":"{userNames} were not dismissed as community admins. Check your connection and try again.","_1":"{userNames} was not dismissed as a community admin. Check your connection and try again."}',
                      [s._plural(t.length), s._param("userNames", u)],
                    );
            o("WAWebToastManager").ToastManager.open(
              C.jsx(o("WAWebToast.react").Toast, { msg: c }),
            );
            return;
          }
          var d = (i = e.groupMetadata) == null ? void 0 : i.participants;
          if (d == null)
            return (h || (h = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          var m = o(
              "WAWebGroupModifyParticipantsJob",
            ).demoteCommunityParticipants(
              e.id,
              t.map(function (e) {
                return o("WAWebWidFactory").asUserWidOrThrow(e.id);
              }),
              ((l = e.groupMetadata) == null
                ? void 0
                : l.isLidAddressingMode) === !0,
            ),
            p = r("WAWebFbtIntlList")(
              t.map(function (e) {
                return o("WAWebFrontendContactGetters").getFormattedShortName(
                  e.contact,
                );
              }),
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            ).toString(),
            _ = new (o("WAWebActionToast.react").ActionType)(
              t.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t[0].id)
                ? s._(/*BTDS*/ "Removing you as a community admin.")
                : s._(
                    /*BTDS*/ '_j{"*":"Dismissing {userNames} as community admins.","_1":"Dismissing {userNames} as a community admin."}',
                    [s._plural(t.length), s._param("userNames", p)],
                  ),
            ),
            f = m
              .then(function (e) {
                if (e.status === 207)
                  return new (o("WAWebActionToast.react").ActionType)(
                    t.length === 1 &&
                      o("WAWebUserPrefsMeUser").isMeAccount(t[0].id)
                      ? s._(/*BTDS*/ "You're no longer a community admin.")
                      : s._(
                          /*BTDS*/ '_j{"*":"{userNames} are no longer community admins.","_1":"{userNames} is no longer a community admin."}',
                          [s._plural(t.length), s._param("userNames", p)],
                        ),
                  );
              })
              .catch(function (e) {
                return (
                  o("WALogger").WARN(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[groupMeta] demoteCommunityParticipants dropped",
                      ])),
                  ),
                  new (o("WAWebActionToast.react").ActionType)(
                    t.length === 1 &&
                      o("WAWebUserPrefsMeUser").isMeAccount(t[0].id)
                      ? s._(
                          /*BTDS*/ "Removing you as a community admin failed.",
                        )
                      : s._(
                          /*BTDS*/ '_j{"*":"Removing {userNames} as community admins failed.","_1":"Removing {userNames} as a community admin failed."}',
                          [s._plural(t.length), s._param("userNames", p)],
                        ),
                  )
                );
              });
          (o("WAWebToastManager").ToastManager.open(
            C.jsx(o("WAWebActionToast.react").ActionToast, {
              id: a,
              initialAction: _,
              pendingAction: f,
            }),
          ),
            yield m);
        })),
        q.apply(this, arguments)
      );
    }
    ((l.addParticipants = b),
      (l.removeParticipants = v),
      (l.promoteParticipants = S),
      (l.demoteParticipants = R),
      (l.promoteCommunityParticipants = L),
      (l.demoteCommunityParticipants = E));
  },
  226,
);
