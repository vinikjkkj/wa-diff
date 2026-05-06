__d(
  "WAWebModifyParticipantsGroupAction",
  [
    "fbt",
    "Promise",
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
    "WAWebOutContactConsts",
    "WAWebOutContactInviteAction",
    "WAWebOutContactInviteUtils",
    "WAWebOutContactSmsInviteConfirmModal.react",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
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
        L(o("WAWebStateUtils").unproxy(e), t, void 0, n)
      );
    }
    function C(e, t) {
      return I(o("WAWebStateUtils").unproxy(e), t);
    }
    function b(e, t) {
      return D(o("WAWebStateUtils").unproxy(e), t);
    }
    function v(e, t) {
      return $(o("WAWebStateUtils").unproxy(e), t);
    }
    function S(e, t) {
      return N(o("WAWebStateUtils").unproxy(e), t);
    }
    function R(e, t) {
      return M(o("WAWebStateUtils").unproxy(e), t);
    }
    function L(e, t, n, r) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            var l, d;
            (a === void 0 && (a = o("WAWebActionToast.react").genId()),
              i === void 0 && (i = []));
            var m = (l = e.groupMetadata) == null ? void 0 : l.participants;
            if (m == null)
              return (f || (f = n("Promise"))).reject(
                new (o("WAWebMiscErrors").ActionError)(),
              );
            if (
              t.some(function (e) {
                return m.get(e.id);
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
            if (!m.canAdd())
              return (f || (f = n("Promise"))).reject(
                new (o("WAWebMiscErrors").ActionError)(),
              );
            var p =
                ((d = e.groupMetadata) == null
                  ? void 0
                  : d.isLidAddressingMode) === !0,
              _ = i.map(function (e) {
                return o("WAWebJidToWid").userJidToUserWid(e.id);
              }),
              g = o("WAWebGroupModifyParticipantsJob").addGroupParticipants(
                e.id,
                t.map(function (e) {
                  return o(
                    "WAWebGroupMutationParticipantUtils",
                  ).getGroupMutationParticipant(e, p, "addParticipants");
                }),
                _,
              ),
              y = r("WAWebFbtIntlList")(
                t.map(function (e) {
                  return o("WAWebFrontendContactGetters").getFormattedShortName(
                    e,
                  );
                }),
                r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                r("WAWebFbtIntlList").DELIMITERS.COMMA,
              ).toString(),
              C = r("WAWebFbtIntlList")(
                i.map(function (e) {
                  return e.getName();
                }),
                r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                r("WAWebFbtIntlList").DELIMITERS.COMMA,
              ).toString(),
              b = t.length === 0 && i.length > 0,
              v = b ? C : y,
              S = b ? i.length : t.length,
              R = new (o("WAWebActionToast.react").ActionType)(
                o("WAWebGroupStringsAction").addingString(v, S),
              ),
              E = g
                .then(function (n) {
                  var a,
                    l = (a = n.invitedOutContacts) != null ? a : [],
                    u = n.participants.some(function (e) {
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
                    d = i.filter(function (e) {
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
                            if (d.length > 0) {
                              o("WAWebModalManager").ModalManager.open(
                                h.jsx(
                                  r(
                                    "WAWebOutContactSmsInviteConfirmModal.react",
                                  ),
                                  {
                                    names: d.map(function (e) {
                                      return e.getName();
                                    }),
                                    onConfirm: function () {
                                      (o(
                                        "WAWebOutContactInviteAction",
                                      ).sendMultiGroupInvite(
                                        d.map(function (e) {
                                          return e.phoneNumber;
                                        }),
                                        o("WAWebWidToJid").widToGroupJid(e.id),
                                        o("WAWebOutContactConsts")
                                          .WAWebOutContactInviteEntryPoint
                                          .GROUP_INVITE_ADD_PARTICIPANT,
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
                            (b || k(p),
                              o("WAWebModalManager").closeModalManager());
                          }
                        : r("WAWebNoop");
                  u
                    ? m.sendForNeededAddRequest(n.participants, _)
                    : _ == null || _();
                  var f = n.participants.filter(function (e) {
                    return e.code === "417";
                  });
                  if (f.length > 0) {
                    var g = s._(
                        /*BTDS*/ '_j{"*":"{participant_count} participants can\'t be added to the community. You can invite them privately to join this group through its invite link.","_1":"1 participant can\'t be added to the community. You can invite them privately to join this group through its invite link."}',
                        [s._plural(f.length, "participant_count")],
                      ),
                      y = n.participants.some(function (e) {
                        return e.code === "200";
                      });
                    if (!y)
                      throw new (o("WAWebActionToast.react").ActionType)(g);
                    return new (o("WAWebActionToast.react").ActionType)(g);
                  }
                  if (b) {
                    if (d.length > 0) {
                      var C = r("WAWebFbtIntlList")(
                        d.map(function (e) {
                          return e.getName();
                        }),
                        r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                        r("WAWebFbtIntlList").DELIMITERS.COMMA,
                      ).toString();
                      return new (o("WAWebActionToast.react").ActionType)(
                        o("WAWebGroupStringsAction").addSuccessString(
                          C,
                          d.length,
                        ),
                      );
                    }
                    throw new (o("WAWebActionToast.react").ActionType)(
                      o(
                        "WAWebOutContactInviteUtils",
                      ).getGroupInviteAddFailedToastText(p),
                    );
                  }
                  var v = o("WAWebGroupStringsAction").formatResult(
                      n,
                      o("WAWebGroupStringsAction").addSuccessString,
                      o("WAWebGroupStringsAction").addFailedString,
                      o("WAWebGroupStringsAction").addPartialFailedString,
                      t,
                    ),
                    S = n.participants.some(function (e) {
                      return e.code === "200";
                    });
                  if (!S) throw new (o("WAWebActionToast.react").ActionType)(v);
                  return new (o("WAWebActionToast.react").ActionType)(v);
                })
                .catch(function (n) {
                  if (n instanceof o("WAWebActionToast.react").ActionType)
                    throw n;
                  i.length > 0 && o("WAWebModalManager").closeModalManager();
                  var l = new (o("WAWebActionToast.react").ActionType)(
                    b
                      ? o(
                          "WAWebOutContactInviteUtils",
                        ).getGroupInviteAddFailedToastText(i.length)
                      : s._(
                          /*BTDS*/ '_j{"*":"Couldn\'t add {participantNames}."}',
                          [
                            s._plural(t.length),
                            s._param("participantNames", y),
                          ],
                        ),
                    {
                      actionText: s._(/*BTDS*/ "Try again."),
                      actionHandler: function () {
                        return L(e, t, a, i);
                      },
                    },
                  );
                  switch (n.status) {
                    case 416: {
                      var u = s._(/*BTDS*/ "This action is not available");
                      throw (
                        o("WAWebModalManager").ModalManager.open(
                          h.jsx(
                            r("WAWebCommunityRestrictedGroupActionModal.react"),
                            { chat: e },
                          ),
                        ),
                        new (o("WAWebActionToast.react").ActionType)(u)
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
                        switch (n.name) {
                          case "GroupAddParticipantTimeRateLimitServerError":
                            throw new (o("WAWebActionToast.react").ActionType)(
                              o(
                                "WAWebModifyParticipantsRateLimitText",
                              ).WAWebModifyParticipantsTimeRateLimitText(n),
                            );
                          case "GroupAddParticipantCountRateLimitServerError":
                            throw new (o("WAWebActionToast.react").ActionType)(
                              o(
                                "WAWebModifyParticipantsRateLimitText",
                              ).WAWebModifyParticipantsCountRateLimitText(n),
                            );
                        }
                      throw l;
                    }
                    default:
                      throw (
                        o("WALogger").WARN(
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[groupMeta] addParticipants dropped",
                            ])),
                        ),
                        l
                      );
                  }
                });
            return (
              o("WAWebToastManager").ToastManager.open(
                h.jsx(o("WAWebActionToast.react").ActionToast, {
                  id: a,
                  initialAction: R,
                  pendingAction: E,
                }),
              ),
              g
            );
          },
        )),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      e !== 0 &&
        o("WAWebToastManager").ToastManager.open(
          h.jsx(o("WAWebToast.react").Toast, {
            msg: o(
              "WAWebOutContactInviteUtils",
            ).getGroupInviteAddFailedToastText(e),
          }),
        );
    }
    function I(e, t, n) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
                        return I(e, t, a);
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
        T.apply(this, arguments)
      );
    }
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
                        return D(e, t, a);
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
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
                        return $(e, t, a);
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
        P.apply(this, arguments)
      );
    }
    function N(t, a, i) {
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
    function M(e, t, n) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
        w.apply(this, arguments)
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
