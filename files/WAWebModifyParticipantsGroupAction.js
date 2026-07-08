__d(
  "WAWebModifyParticipantsGroupAction",
  [
    "fbt",
    "Promise",
    "VultureJSDeadComponent.react",
    "WALogger",
    "WAWebABProps",
    "WAWebActionToast.react",
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
    "asyncToGeneratorRuntime",
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
      g,
      h = g || (g = o("react"));
    function y(e, t, n) {
      return (
        n === void 0 && (n = []),
        E({
          chat: o("WAWebStateUtils").unproxy(e),
          contacts: t,
          outContacts: n,
        })
      );
    }
    function C(e, t) {
      return T(o("WAWebStateUtils").unproxy(e), t);
    }
    function b(e, t) {
      return x(o("WAWebStateUtils").unproxy(e), t);
    }
    function v(e, t) {
      return P(o("WAWebStateUtils").unproxy(e), t);
    }
    function S(e, t) {
      return M(o("WAWebStateUtils").unproxy(e), t);
    }
    function R(e, t) {
      return w(o("WAWebStateUtils").unproxy(e), t);
    }
    var L = [];
    function E(e) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            a,
            i = e.chat,
            l = e.contacts,
            d = e.outContacts,
            m = d === void 0 ? L : d,
            p = e.toastId,
            _ = p === void 0 ? o("WAWebActionToast.react").genId() : p,
            g = (t = i.groupMetadata) == null ? void 0 : t.participants;
          if (g == null)
            return (f || (f = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          if (
            l.some(function (e) {
              return g.get(e.id);
            })
          )
            return (
              o("WALogger").WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[groupMeta] addParticipants: already member",
                  ])),
              ),
              (f || (f = n("Promise"))).reject(
                new (o("WAWebMiscErrors").ActionError)(),
              )
            );
          if (!g.canAdd())
            return (f || (f = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          var y =
              ((a = i.groupMetadata) == null
                ? void 0
                : a.isLidAddressingMode) === !0,
            C = m.map(function (e) {
              return o("WAWebJidToWid").userJidToUserWid(e.id);
            }),
            b = o("WAWebGroupModifyParticipantsJob").addGroupParticipants(
              i.id,
              l.map(function (e) {
                return o(
                  "WAWebGroupMutationParticipantUtils",
                ).getGroupMutationParticipant(e, y, "addParticipants");
              }),
              C,
            ),
            v = r("WAWebFbtIntlList")(
              l.map(function (e) {
                return o("WAWebFrontendContactGetters").getFormattedShortName(
                  e,
                );
              }),
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            ).toString(),
            S = r("WAWebFbtIntlList")(
              m.map(function (e) {
                return e.getName();
              }),
              r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
              r("WAWebFbtIntlList").DELIMITERS.COMMA,
            ).toString(),
            R = l.length === 0 && m.length > 0,
            k = R ? S : v,
            T = R ? m.length : l.length,
            D = new (o("WAWebActionToast.react").ActionType)(
              o("WAWebGroupStringsAction").addingString(k, T),
            ),
            x = b
              .then(function (e) {
                var t,
                  n = (t = e.invitedOutContacts) != null ? t : [],
                  a = e.participants.some(function (e) {
                    return e.code === "403";
                  }),
                  u = new Set(
                    n
                      .filter(function (e) {
                        return e.code !== "200";
                      })
                      .map(function (e) {
                        return e.phoneNumberWid.toString();
                      }),
                  ),
                  c = m.filter(function (e) {
                    return u.has(
                      o("WAWebJidToWid").userJidToUserWid(e.id).toString(),
                    );
                  }),
                  d = r("countWhere")(n, function (e) {
                    return e.code !== "200";
                  }),
                  p =
                    m.length > 0
                      ? function () {
                          if (c.length > 0) {
                            o("WAWebModalManager").ModalManager.open(
                              h.jsx(
                                r("WAWebOutContactSmsInviteConfirmModal.react"),
                                {
                                  names: c.map(function (e) {
                                    return e.getName();
                                  }),
                                  onConfirm: function () {
                                    (o(
                                      "WAWebOutContactInviteAction",
                                    ).sendMultiGroupInvite(
                                      c.map(function (e) {
                                        return e.phoneNumber;
                                      }),
                                      o("WAWebWidToJid").widToGroupJid(i.id),
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
                          (R || I(d),
                            o("WAWebModalManager").closeModalManager());
                        }
                      : r("WAWebNoop");
                a
                  ? g.sendForNeededAddRequest(e.participants, p)
                  : p == null || p();
                var _ = e.participants.filter(function (e) {
                  return e.code === "417";
                });
                if (_.length > 0) {
                  var f = s._(
                      /*BTDS*/ '_j{"*":"{participant_count} participants can\'t be added to the community. You can invite them privately to join this group through its invite link.","_1":"1 participant can\'t be added to the community. You can invite them privately to join this group through its invite link."}',
                      [s._plural(_.length, "participant_count")],
                    ),
                    y = e.participants.some(function (e) {
                      return e.code === "200";
                    });
                  if (!y) throw new (o("WAWebActionToast.react").ActionType)(f);
                  return new (o("WAWebActionToast.react").ActionType)(f);
                }
                if (R) {
                  if (c.length > 0) {
                    var C = r("WAWebFbtIntlList")(
                      c.map(function (e) {
                        return e.getName();
                      }),
                      r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                      r("WAWebFbtIntlList").DELIMITERS.COMMA,
                    ).toString();
                    return new (o("WAWebActionToast.react").ActionType)(
                      o("WAWebGroupStringsAction").addSuccessString(
                        C,
                        c.length,
                      ),
                    );
                  }
                  throw new (o("WAWebActionToast.react").ActionType)(
                    o(
                      "WAWebOutContactInviteUtils",
                    ).getGroupInviteAddFailedToastText(d),
                  );
                }
                var b = o("WAWebGroupStringsAction").formatResult(
                    e,
                    o("WAWebGroupStringsAction").addSuccessString,
                    function (e, t, n) {
                      return o("WAWebGroupStringsAction").addFailedString({
                        _status: n,
                        memberNames: e,
                        plural: t,
                      });
                    },
                    o("WAWebGroupStringsAction").addPartialFailedString,
                    l,
                  ),
                  v = e.participants.some(function (e) {
                    return e.code === "200";
                  });
                if (!v) throw new (o("WAWebActionToast.react").ActionType)(b);
                return new (o("WAWebActionToast.react").ActionType)(b);
              })
              .catch(function (e) {
                if (e instanceof o("WAWebActionToast.react").ActionType)
                  throw e;
                m.length > 0 && o("WAWebModalManager").closeModalManager();
                var t = new (o("WAWebActionToast.react").ActionType)(
                  R
                    ? o(
                        "WAWebOutContactInviteUtils",
                      ).getGroupInviteAddFailedToastText(m.length)
                    : s._(
                        /*BTDS*/ '_j{"*":"Couldn\'t add {participantNames}."}',
                        [s._plural(l.length), s._param("participantNames", v)],
                      ),
                  {
                    actionText: s._(/*BTDS*/ "Try again."),
                    actionHandler: function () {
                      return E({
                        chat: i,
                        contacts: l,
                        outContacts: m,
                        toastId: _,
                      });
                    },
                  },
                );
                switch (e.status) {
                  case 416: {
                    var n = s._(/*BTDS*/ "This action is not available");
                    throw (
                      o("WAWebModalManager").ModalManager.open(
                        h.jsx(r("VultureJSDeadComponent.react"), {
                          name: "WAWebCommunityRestrictedGroupActionModal",
                        }),
                      ),
                      new (o("WAWebActionToast.react").ActionType)(n)
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
                    throw t;
                  }
                  default:
                    throw (
                      o("WALogger").WARN(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
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
                initialAction: D,
                pendingAction: x,
              }),
            ),
            b
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      e !== 0 &&
        o("WAWebToastManager").ToastManager.open(
          h.jsx(o("WAWebToast.react").Toast, {
            msg: o(
              "WAWebOutContactInviteUtils",
            ).getGroupInviteAddFailedToastText(e),
          }),
        );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i;
          a === void 0 && (a = o("WAWebActionToast.react").genId());
          var l = (i = e.groupMetadata) == null ? void 0 : i.participants;
          if (l == null)
            return (f || (f = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          if (
            t.some(function (e) {
              return !l.canRemove(e);
            })
          )
            return (f || (f = n("Promise"))).reject(
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
            m = new (o("WAWebActionToast.react").ActionType)(
              o("WAWebGroupStringsAction").removingString(c, t.length),
            ),
            p = u
              .then(function (e) {
                var n = o("WAWebGroupStringsAction").formatRemoveResult(
                  e,
                  t.map(function (e) {
                    return e.contact;
                  }),
                );
                return new (o("WAWebActionToast.react").ActionType)(n);
              })
              .catch(function (n) {
                return (
                  o("WALogger").WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
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
                        return T(e, t, a);
                      },
                    },
                  )
                );
              });
          (o("WAWebToastManager").ToastManager.open(
            h.jsx(o("WAWebActionToast.react").ActionToast, {
              id: a,
              initialAction: m,
              pendingAction: p,
            }),
          ),
            yield u);
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i, l;
          a === void 0 && (a = o("WAWebActionToast.react").genId());
          var u = (i = e.groupMetadata) == null ? void 0 : i.participants;
          if (u == null)
            return (f || (f = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          if (
            t.some(function (e) {
              return !u.canPromote(e);
            })
          )
            return (f || (f = n("Promise"))).reject(
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
            p = new (o("WAWebActionToast.react").ActionType)(
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
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
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
                        return x(e, t, a);
                      },
                    },
                  )
                );
              });
          (o("WAWebToastManager").ToastManager.open(
            h.jsx(o("WAWebActionToast.react").ActionToast, {
              id: a,
              initialAction: p,
              pendingAction: _,
            }),
          ),
            yield c);
        })),
        $.apply(this, arguments)
      );
    }
    function P(e, t, n) {
      return N.apply(this, arguments);
    }
    function N() {
      return (
        (N = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          var i, l;
          a === void 0 && (a = o("WAWebActionToast.react").genId());
          var u = (i = e.groupMetadata) == null ? void 0 : i.participants;
          if (u == null)
            return (f || (f = n("Promise"))).reject(
              new (o("WAWebMiscErrors").ActionError)(),
            );
          if (
            t.some(function (e) {
              return !u.canDemote(e);
            })
          )
            return (f || (f = n("Promise"))).reject(
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
            _ = c
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
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
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
                        return P(e, t, a);
                      },
                    },
                  )
                );
              });
          (o("WAWebToastManager").ToastManager.open(
            h.jsx(o("WAWebActionToast.react").ActionToast, {
              id: a,
              initialAction: m,
              pendingAction: _,
            }),
          ),
            yield c);
        })),
        N.apply(this, arguments)
      );
    }
    function M(t, a, i) {
      var l, u;
      i === void 0 && (i = o("WAWebActionToast.react").genId());
      var c = (l = t.groupMetadata) == null ? void 0 : l.participants;
      if (c == null)
        return (f || (f = n("Promise"))).reject(
          new (o("WAWebMiscErrors").ActionError)(),
        );
      var d = o("WAWebGroupModifyParticipantsJob").promoteCommunityParticipants(
          t.id,
          a.map(function (e) {
            return o("WAWebWidFactory").asUserWidOrThrow(e.id);
          }),
          ((u = t.groupMetadata) == null ? void 0 : u.isLidAddressingMode) ===
            !0,
        ),
        m = r("WAWebFbtIntlList")(
          a.map(function (e) {
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
            [s._plural(a.length), s._param("userNames", m)],
          ),
        ),
        _ = d
          .then(function (e) {
            if (e.status === 207)
              return new (o("WAWebActionToast.react").ActionType)(
                s._(
                  /*BTDS*/ '_j{"*":"{userNames} are now community admins.","_1":"{userNames} is now a community admin."}',
                  [s._plural(a.length), s._param("userNames", m)],
                ),
              );
          })
          .catch(function (t) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
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
          h.jsx(o("WAWebActionToast.react").ActionToast, {
            id: i,
            initialAction: p,
            pendingAction: _,
          }),
        ),
        d
      );
    }
    function w(e, t, n) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
              h.jsx(o("WAWebToast.react").Toast, { msg: c }),
            );
            return;
          }
          var d = (i = e.groupMetadata) == null ? void 0 : i.participants;
          if (d == null)
            return (f || (f = n("Promise"))).reject(
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
            g = new (o("WAWebActionToast.react").ActionType)(
              t.length === 1 && o("WAWebUserPrefsMeUser").isMeAccount(t[0].id)
                ? s._(/*BTDS*/ "Removing you as a community admin.")
                : s._(
                    /*BTDS*/ '_j{"*":"Dismissing {userNames} as community admins.","_1":"Dismissing {userNames} as a community admin."}',
                    [s._plural(t.length), s._param("userNames", p)],
                  ),
            ),
            y = m
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
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
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
            h.jsx(o("WAWebActionToast.react").ActionToast, {
              id: a,
              initialAction: g,
              pendingAction: y,
            }),
          ),
            yield m);
        })),
        A.apply(this, arguments)
      );
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
