__d(
  "WAWebModifyParticipantsGroupAction",
  [
    "fbt",
    "WALogger",
    "WAWebABProps",
    "WAWebActionToast.react",
    "WAWebCommunityRestrictedGroupActionModal.react",
    "WAWebFbtIntlList",
    "WAWebFrontendContactGetters",
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
    "countWhere",
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
      g = f || (f = o("react"));
    function h(e, t, n) {
      return (
        n === void 0 && (n = []),
        R(o("WAWebStateUtils").unproxy(e), t, void 0, n)
      );
    }
    function y(e, t) {
      return E(o("WAWebStateUtils").unproxy(e), t);
    }
    function C(e, t) {
      return k(o("WAWebStateUtils").unproxy(e), t);
    }
    function b(e, t) {
      return I(o("WAWebStateUtils").unproxy(e), t);
    }
    function v(e, t) {
      return T(o("WAWebStateUtils").unproxy(e), t);
    }
    function S(e, t) {
      return D(o("WAWebStateUtils").unproxy(e), t);
    }
    async function R(t, n, a, i) {
      var l, c;
      (a === void 0 && (a = o("WAWebActionToast.react").genId()),
        i === void 0 && (i = []));
      var d = (l = t.groupMetadata) == null ? void 0 : l.participants;
      if (d == null)
        return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      if (
        n.some(function (e) {
          return d.get(e.id);
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
      if (!d.canAdd())
        return Promise.reject(new (o("WAWebMiscErrors").ActionError)());
      var m =
          ((c = t.groupMetadata) == null ? void 0 : c.isLidAddressingMode) ===
          !0,
        p = i.map(function (e) {
          return o("WAWebJidToWid").userJidToUserWid(e.id);
        }),
        _ = o("WAWebGroupModifyParticipantsJob").addGroupParticipants(
          t.id,
          n.map(function (e) {
            return o(
              "WAWebGroupMutationParticipantUtils",
            ).getGroupMutationParticipant(e, m, "addParticipants");
          }),
          p,
        ),
        f = r("WAWebFbtIntlList")(
          n.map(function (e) {
            return o("WAWebFrontendContactGetters").getFormattedShortName(e);
          }),
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ).toString(),
        h = r("WAWebFbtIntlList")(
          i.map(function (e) {
            return e.getName();
          }),
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ).toString(),
        y = n.length === 0 && i.length > 0,
        C = y ? h : f,
        b = y ? i.length : n.length,
        v = new (o("WAWebActionToast.react").ActionType)(
          o("WAWebGroupStringsAction").addingString(C, b),
        ),
        S = _.then(function (e) {
          var a,
            l = (a = e.invitedOutContacts) != null ? a : [],
            u = e.participants.some(function (e) {
              return e.code === "403";
            }),
            c = new Set(
              l
                .filter(function (e) {
                  return e.invite_code != null;
                })
                .map(function (e) {
                  return e.phoneNumberWid.toString();
                }),
            ),
            m = i.filter(function (e) {
              return c.has(
                o("WAWebJidToWid").userJidToUserWid(e.id).toString(),
              );
            }),
            p = r("countWhere")(l, function (e) {
              return e.invite_code == null;
            }),
            _ =
              i.length > 0
                ? function () {
                    if (m.length > 0) {
                      o("WAWebModalManager").ModalManager.open(
                        g.jsx(r("WAWebOutContactSmsInviteConfirmModal.react"), {
                          names: m.map(function (e) {
                            return e.getName();
                          }),
                          onConfirm: function () {
                            (o(
                              "WAWebOutContactInviteAction",
                            ).sendMultiGroupInvite(
                              m.map(function (e) {
                                return e.phoneNumber;
                              }),
                              o("WAWebWidToJid").widToGroupJid(t.id),
                              o("WAWebWamEnumCompanionInviteOriginType")
                                .COMPANION_INVITE_ORIGIN_TYPE
                                .GROUPS_ADD_PARTICIPANT_SELECTOR,
                            ),
                              o("WAWebModalManager").closeModalManager());
                          },
                          onCancel: o("WAWebModalManager").closeModalManager,
                        }),
                      );
                      return;
                    }
                    (y || L(p), o("WAWebModalManager").closeModalManager());
                  }
                : r("WAWebNoop");
          u ? d.sendForNeededAddRequest(e.participants, _) : _ == null || _();
          var f = e.participants.filter(function (e) {
            return e.code === "417";
          });
          if (f.length > 0) {
            var h = s._(
                /*BTDS*/ '_j{"*":"{participant_count} participants can\'t be added to the community. You can invite them privately to join this group through its invite link.","_1":"1 participant can\'t be added to the community. You can invite them privately to join this group through its invite link."}',
                [s._plural(f.length, "participant_count")],
              ),
              C = e.participants.some(function (e) {
                return e.code === "200";
              });
            if (!C) throw new (o("WAWebActionToast.react").ActionType)(h);
            return new (o("WAWebActionToast.react").ActionType)(h);
          }
          if (y) {
            if (m.length > 0) {
              var b = r("WAWebFbtIntlList")(
                m.map(function (e) {
                  return e.getName();
                }),
                r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                r("WAWebFbtIntlList").DELIMITERS.COMMA,
              ).toString();
              return new (o("WAWebActionToast.react").ActionType)(
                o("WAWebGroupStringsAction").addSuccessString(b, m.length),
              );
            }
            throw new (o("WAWebActionToast.react").ActionType)(
              o("WAWebOutContactInviteUtils").getGroupInviteAddFailedToastText(
                p,
              ),
            );
          }
          var v = o("WAWebGroupStringsAction").formatResult(
              e,
              o("WAWebGroupStringsAction").addSuccessString,
              o("WAWebGroupStringsAction").addFailedString,
              o("WAWebGroupStringsAction").addPartialFailedString,
              n,
            ),
            S = e.participants.some(function (e) {
              return e.code === "200";
            });
          if (!S) throw new (o("WAWebActionToast.react").ActionType)(v);
          return new (o("WAWebActionToast.react").ActionType)(v);
        }).catch(function (e) {
          if (e instanceof o("WAWebActionToast.react").ActionType) throw e;
          i.length > 0 && o("WAWebModalManager").closeModalManager();
          var l = new (o("WAWebActionToast.react").ActionType)(
            y
              ? o(
                  "WAWebOutContactInviteUtils",
                ).getGroupInviteAddFailedToastText(i.length)
              : s._(/*BTDS*/ '_j{"*":"Couldn\'t add {participantNames}."}', [
                  s._plural(n.length),
                  s._param("participantNames", f),
                ]),
            {
              actionText: s._(/*BTDS*/ "Try again."),
              actionHandler: function () {
                return R(t, n, a, i);
              },
            },
          );
          switch (e.status) {
            case 416: {
              var c = s._(/*BTDS*/ "This action is not available");
              throw (
                o("WAWebModalManager").ModalManager.open(
                  g.jsx(r("WAWebCommunityRestrictedGroupActionModal.react"), {
                    chat: t,
                  }),
                ),
                new (o("WAWebActionToast.react").ActionType)(c)
              );
            }
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
              throw l;
            }
            default:
              throw (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[groupMeta] addParticipants dropped",
                    ])),
                ),
                l
              );
          }
        });
      return (
        o("WAWebToastManager").ToastManager.open(
          g.jsx(o("WAWebActionToast.react").ActionToast, {
            id: a,
            initialAction: v,
            pendingAction: S,
          }),
        ),
        _
      );
    }
    function L(e) {
      e !== 0 &&
        o("WAWebToastManager").ToastManager.open(
          g.jsx(o("WAWebToast.react").Toast, {
            msg: o(
              "WAWebOutContactInviteUtils",
            ).getGroupInviteAddFailedToastText(e),
          }),
        );
    }
    async function E(e, t, n) {
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
      var l = o("WAWebGroupModifyParticipantsJob").removeGroupParticipants(
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
          .then(function (e) {
            var n = o("WAWebGroupStringsAction").formatRemoveResult(
              e,
              t.map(function (e) {
                return e.contact;
              }),
            );
            return new (o("WAWebActionToast.react").ActionType)(n);
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
                s._(/*BTDS*/ '_j{"*":"Couldn\'t remove {participantNames}."}', [
                  s._plural(t.length),
                  s._param("participantNames", u),
                ]),
                {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: function () {
                    return E(e, t, n);
                  },
                },
              )
            );
          });
      (o("WAWebToastManager").ToastManager.open(
        g.jsx(o("WAWebActionToast.react").ActionToast, {
          id: n,
          initialAction: d,
          pendingAction: m,
        }),
      ),
        await l);
    }
    async function k(e, t, n) {
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
      var u = o("WAWebGroupModifyParticipantsJob").promoteGroupParticipants(
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
        m = new (o("WAWebActionToast.react").ActionType)(
          s._(
            /*BTDS*/ '_j{"*":"Making {participantNames} group admins.","_1":"Making {participantNames} a group admin."}',
            [s._plural(t.length), s._param("participantNames", c)],
          ),
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
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] promoteParticipants dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(
                  /*BTDS*/ '_j{"*":"Couldn\'t make {participantNames} admins.","_1":"Couldn\'t make {participantNames} an admin."}',
                  [s._plural(t.length), s._param("participantNames", c)],
                ),
                {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: function () {
                    return k(e, t, n);
                  },
                },
              )
            );
          });
      (o("WAWebToastManager").ToastManager.open(
        g.jsx(o("WAWebActionToast.react").ActionToast, {
          id: n,
          initialAction: m,
          pendingAction: p,
        }),
      ),
        await u);
    }
    async function I(e, t, n) {
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
      var u = o("WAWebGroupModifyParticipantsJob").demoteGroupParticipants(
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
          s._(
            /*BTDS*/ '_j{"*":"Removing {participantNames} as group admins.","_1":"Removing {participantNames} as a group admin."}',
            [s._plural(t.length), s._param("participantNames", c)],
          ),
        ),
        p = u
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
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] demoteParticipants dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(
                  /*BTDS*/ '_j{"*":"Removing {participantNames} as admins failed.","_1":"Removing {participantNames} as an admin failed."}',
                  [s._plural(t.length), s._param("participantNames", c)],
                ),
                {
                  actionText: s._(/*BTDS*/ "Try again."),
                  actionHandler: function () {
                    return I(e, t, n);
                  },
                },
              )
            );
          });
      (o("WAWebToastManager").ToastManager.open(
        g.jsx(o("WAWebActionToast.react").ActionToast, {
          id: n,
          initialAction: d,
          pendingAction: p,
        }),
      ),
        await u);
    }
    function T(e, t, n) {
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
          s._(
            /*BTDS*/ '_j{"*":"Making {userNames} community admins.","_1":"Making {userNames} community admin."}',
            [s._plural(t.length), s._param("userNames", c)],
          ),
        ),
        m = u
          .then(function (e) {
            if (e.status === 207)
              return new (o("WAWebActionToast.react").ActionType)(
                s._(
                  /*BTDS*/ '_j{"*":"{userNames} are now community admins.","_1":"{userNames} is now a community admin."}',
                  [s._plural(t.length), s._param("userNames", c)],
                ),
              );
          })
          .catch(function (e) {
            return (
              o("WALogger").WARN(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] promoteCommunityParticipants dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                s._(
                  /*BTDS*/ "Promotion to community admin of {userNames} failed.",
                  [s._param("userNames", c)],
                ),
              )
            );
          });
      return (
        o("WAWebToastManager").ToastManager.open(
          g.jsx(o("WAWebActionToast.react").ActionToast, {
            id: n,
            initialAction: d,
            pendingAction: m,
          }),
        ),
        u
      );
    }
    async function D(e, t, n) {
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
            t.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t[0].id)
              ? s._(
                  /*BTDS*/ "You were not dismissed as a community admin. Check your connection and try again.",
                )
              : s._(
                  /*BTDS*/ '_j{"*":"{userNames} were not dismissed as community admins. Check your connection and try again.","_1":"{userNames} was not dismissed as a community admin. Check your connection and try again."}',
                  [s._plural(t.length), s._param("userNames", l)],
                );
        o("WAWebToastManager").ToastManager.open(
          g.jsx(o("WAWebToast.react").Toast, { msg: u }),
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
          t.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t[0].id)
            ? s._(/*BTDS*/ "Removing you as a community admin.")
            : s._(
                /*BTDS*/ '_j{"*":"Dismissing {userNames} as community admins.","_1":"Dismissing {userNames} as a community admin."}',
                [s._plural(t.length), s._param("userNames", m)],
              ),
        ),
        f = d
          .then(function (e) {
            if (e.status === 207)
              return new (o("WAWebActionToast.react").ActionType)(
                t.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t[0].id)
                  ? s._(/*BTDS*/ "You're no longer a community admin.")
                  : s._(
                      /*BTDS*/ '_j{"*":"{userNames} are no longer community admins.","_1":"{userNames} is no longer a community admin."}',
                      [s._plural(t.length), s._param("userNames", m)],
                    ),
              );
          })
          .catch(function (e) {
            return (
              o("WALogger").WARN(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] demoteCommunityParticipants dropped",
                  ])),
              ),
              new (o("WAWebActionToast.react").ActionType)(
                t.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t[0].id)
                  ? s._(/*BTDS*/ "Removing you as a community admin failed.")
                  : s._(
                      /*BTDS*/ '_j{"*":"Removing {userNames} as community admins failed.","_1":"Removing {userNames} as a community admin failed."}',
                      [s._plural(t.length), s._param("userNames", m)],
                    ),
              )
            );
          });
      (o("WAWebToastManager").ToastManager.open(
        g.jsx(o("WAWebActionToast.react").ActionToast, {
          id: n,
          initialAction: p,
          pendingAction: f,
        }),
      ),
        await d);
    }
    ((l.addParticipants = h),
      (l.removeParticipants = y),
      (l.promoteParticipants = C),
      (l.demoteParticipants = b),
      (l.promoteCommunityParticipants = v),
      (l.demoteCommunityParticipants = S));
  },
  226,
);
