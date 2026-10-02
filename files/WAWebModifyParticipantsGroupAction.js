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
    "WAWebGroupAgentRemoveNotFoundJob",
    "WAWebGroupIncompatibleDeviceAddPopup.react",
    "WAWebGroupIncompatibleDeviceAddResult",
    "WAWebGroupModifyParticipantsJob",
    "WAWebGroupMutationParticipantUtils",
    "WAWebGroupStringsAction",
    "WAWebJidToWid",
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
      y = h || (h = o("react"));
    function C(e, t, n, r) {
      return (
        n === void 0 && (n = []),
        k({
          addMembersEntrypoint: r,
          chat: o("WAWebStateUtils").unproxy(e),
          contacts: t,
          outContacts: n,
        })
      );
    }
    function b(e, t) {
      return x(o("WAWebStateUtils").unproxy(e), t);
    }
    function v(e, t) {
      return N(o("WAWebStateUtils").unproxy(e), t);
    }
    function S(e, t) {
      return w(o("WAWebStateUtils").unproxy(e), t);
    }
    function R(e, t) {
      return F(o("WAWebStateUtils").unproxy(e), t);
    }
    function L(e, t) {
      return O(o("WAWebStateUtils").unproxy(e), t);
    }
    var E = [];
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i = e.addMembersEntrypoint,
            l = e.chat,
            u = e.contacts,
            m = e.outContacts,
            p = m === void 0 ? E : m,
            _ = e.toastId,
            f = _ === void 0 ? o("WAWebActionToast.react").genId() : _,
            h = (t = l.groupMetadata) == null ? void 0 : t.participants;
          if (h == null)
            return (g || (g = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          if (
            u.some(function (e) {
              return h.get(e.id);
            })
          )
            return (
              o("WALogger").WARN(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] addParticipants: already member",
                  ])),
              ),
              (g || (g = n("Promise"))).reject(
                new (o("WAWebMiscErrors").ActionError)(),
              )
            );
          if (!h.canAdd())
            return (g || (g = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          var C =
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
                ).getGroupMutationParticipant(e, C, "addParticipants");
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
            I = L ? R : S,
            x = L ? p.length : u.length,
            $ = new (o("WAWebActionToast.react").ActionType)(
              o("WAWebGroupStringsAction").addingString(I, x),
            ),
            P = v
              .then(function (e) {
                var t,
                  n = o(
                    "WAWebGroupIncompatibleDeviceAddResult",
                  ).splitIncompatibleDeviceRejections(e, i),
                  a = n.hasIncompatibleDeviceRejection,
                  c = n.reportedResponse,
                  d = (t = e.invitedOutContacts) != null ? t : [],
                  m = e.participants.some(function (e) {
                    return e.code === "403";
                  }),
                  _ = new Set(
                    d
                      .filter(function (e) {
                        return e.code !== "200";
                      })
                      .map(function (e) {
                        return e.phoneNumberWid.toString();
                      }),
                  ),
                  f = p.filter(function (e) {
                    return _.has(
                      o("WAWebJidToWid").userJidToUserWid(e.id).toString(),
                    );
                  }),
                  g = r("countWhere")(d, function (e) {
                    return e.code !== "200";
                  }),
                  C =
                    p.length > 0
                      ? function () {
                          if (f.length > 0) {
                            o("WAWebModalManager").ModalManager.open(
                              y.jsx(
                                r("WAWebOutContactSmsInviteConfirmModal.react"),
                                {
                                  names: f.map(function (e) {
                                    return e.getName();
                                  }),
                                  onConfirm: function () {
                                    (o(
                                      "WAWebOutContactInviteAction",
                                    ).sendMultiGroupInvite(
                                      f.map(function (e) {
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
                          (L || T(g),
                            o("WAWebModalManager").closeModalManager());
                        }
                      : r("WAWebNoop");
                D(a, function () {
                  m
                    ? h.sendForNeededAddRequest(e.participants, C)
                    : C == null || C();
                });
                var b = e.participants.filter(function (e) {
                  return e.code === "417";
                });
                if (b.length > 0) {
                  var v = s._(
                      /*BTDS*/ '_j{"*":"{participant_count} participants can\'t be added to the community. You can invite them privately to join this group through its invite link.","_1":"1 participant can\'t be added to the community. You can invite them privately to join this group through its invite link."}',
                      [s._plural(b.length, "participant_count")],
                    ),
                    S = e.participants.some(function (e) {
                      return e.code === "200";
                    });
                  if (!S) throw new (o("WAWebActionToast.react").ActionType)(v);
                  return new (o("WAWebActionToast.react").ActionType)(v);
                }
                if (L) {
                  if (f.length > 0) {
                    var R = r("WAWebFbtIntlList")(
                      f.map(function (e) {
                        return e.getName();
                      }),
                      r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                      r("WAWebFbtIntlList").DELIMITERS.COMMA,
                    ).toString();
                    return new (o("WAWebActionToast.react").ActionType)(
                      o("WAWebGroupStringsAction").addSuccessString(
                        R,
                        f.length,
                      ),
                    );
                  }
                  throw new (o("WAWebActionToast.react").ActionType)(
                    o(
                      "WAWebOutContactInviteUtils",
                    ).getGroupInviteAddFailedToastText(g),
                  );
                }
                if (a && c.participants.length === 0) return null;
                var E = o("WAWebGroupStringsAction").formatResult(
                    c,
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
                  k = c.participants.some(function (e) {
                    return e.code === "200";
                  });
                if (!k) throw new (o("WAWebActionToast.react").ActionType)(E);
                return new (o("WAWebActionToast.react").ActionType)(E);
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
                      return k({
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
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "[groupMeta] addParticipants dropped",
                          ])),
                      ),
                      t
                    );
                }
              });
          return (
            o("WAWebToastManager").ToastManager.open(
              y.jsx(o("WAWebActionToast.react").ActionToast, {
                id: f,
                initialAction: $,
                pendingAction: P,
              }),
            ),
            v
          );
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
      e !== 0 &&
        o("WAWebToastManager").ToastManager.open(
          y.jsx(o("WAWebToast.react").Toast, {
            msg: o(
              "WAWebOutContactInviteUtils",
            ).getGroupInviteAddFailedToastText(e),
          }),
        );
    }
    function D(e, t) {
      if (!e) {
        t();
        return;
      }
      o("WAWebModalManager").ModalManager.open(
        y.jsx(r("WAWebGroupIncompatibleDeviceAddPopup.react"), {}),
      );
      var n = {},
        a = function () {
          o("WAWebModalManager").ModalManager.off(null, null, n);
        };
      (o("WAWebModalManager").ModalManager.once(
        "close_modal",
        function () {
          (a(), t());
        },
        n,
      ),
        o("WAWebModalManager").ModalManager.once("open_modal", a, n));
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i;
          a === void 0 && (a = o("WAWebActionToast.react").genId());
          var l = (i = e.groupMetadata) == null ? void 0 : i.participants;
          if (l == null)
            return (g || (g = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          if (
            t.some(function (e) {
              return !l.canRemove(e);
            })
          )
            return (g || (g = n("Promise"))).reject(
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
            p = u
              .then(function (n) {
                return P(e, n, t);
              })
              .catch(function (n) {
                return (
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
                        return x(e, t, a);
                      },
                    },
                  )
                );
              });
          (o("WAWebToastManager").ToastManager.open(
            y.jsx(o("WAWebActionToast.react").ActionToast, {
              id: a,
              initialAction: d,
              pendingAction: p,
            }),
          ),
            yield u);
        })),
        $.apply(this, arguments)
      );
    }
    function P(t, n, a) {
      var i,
        l = o("WAWebGroupAgentRemoveNotFoundJob").getNotFoundGroupAgentWids(n);
      if (l.length === 0)
        return new (o("WAWebActionToast.react").ActionType)(
          o("WAWebGroupStringsAction").formatRemoveResult(
            n,
            a.map(function (e) {
              return e.contact;
            }),
          ),
        );
      o("WAWebGroupAgentRemoveNotFoundJob")
        .removeDepartedGroupAgents(
          t.id,
          l,
          ((i = t.groupMetadata) == null ? void 0 : i.isLidAddressingMode) ===
            !0,
        )
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[groupMeta] removeParticipants: departed agent sync failed",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("group-agent-remove-404-sync-failed");
        });
      var s = new Set(l.map(String)),
        u = n.participants.filter(function (e) {
          var t = e.userWid;
          return !s.has(t.toString());
        });
      return u.length === 0
        ? null
        : new (o("WAWebActionToast.react").ActionType)(
            o("WAWebGroupStringsAction").formatRemoveResult(
              babelHelpers.extends({}, n, { participants: u }),
              a
                .filter(function (e) {
                  return !s.has(e.id.toString());
                })
                .map(function (e) {
                  return e.contact;
                }),
            ),
          );
    }
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i, l;
          a === void 0 && (a = o("WAWebActionToast.react").genId());
          var u = (i = e.groupMetadata) == null ? void 0 : i.participants;
          if (u == null)
            return (g || (g = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          if (
            t.some(function (e) {
              return !u.canPromote(e);
            })
          )
            return (g || (g = n("Promise"))).reject(
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
            _ = c
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
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
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
                        return N(e, t, a);
                      },
                    },
                  )
                );
              });
          (o("WAWebToastManager").ToastManager.open(
            y.jsx(o("WAWebActionToast.react").ActionToast, {
              id: a,
              initialAction: m,
              pendingAction: _,
            }),
          ),
            yield c);
        })),
        M.apply(this, arguments)
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
            return (g || (g = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          if (
            t.some(function (e) {
              return !u.canDemote(e);
            })
          )
            return (g || (g = n("Promise"))).reject(
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
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
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
                        return w(e, t, a);
                      },
                    },
                  )
                );
              });
          (o("WAWebToastManager").ToastManager.open(
            y.jsx(o("WAWebActionToast.react").ActionToast, {
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
    function F(e, t, a) {
      var i, l;
      a === void 0 && (a = o("WAWebActionToast.react").genId());
      var c = (i = e.groupMetadata) == null ? void 0 : i.participants;
      if (c == null)
        return (g || (g = n("Promise"))).reject(
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
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
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
          y.jsx(o("WAWebActionToast.react").ActionToast, {
            id: a,
            initialAction: p,
            pendingAction: _,
          }),
        ),
        d
      );
    }
    function O(e, t, n) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
              y.jsx(o("WAWebToast.react").Toast, { msg: c }),
            );
            return;
          }
          var d = (i = e.groupMetadata) == null ? void 0 : i.participants;
          if (d == null)
            return (g || (g = n("Promise"))).reject(
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
            h = m
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
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
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
            y.jsx(o("WAWebActionToast.react").ActionToast, {
              id: a,
              initialAction: _,
              pendingAction: h,
            }),
          ),
            yield m);
        })),
        B.apply(this, arguments)
      );
    }
    ((l.addParticipants = C),
      (l.removeParticipants = b),
      (l.promoteParticipants = v),
      (l.demoteParticipants = S),
      (l.promoteCommunityParticipants = R),
      (l.demoteCommunityParticipants = L));
  },
  226,
);
