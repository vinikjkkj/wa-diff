__d(
  "WAWebModifyParticipantsGroupAction",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebActionToast.react",
    "WAWebCommunityGatingUtils",
    "WAWebCommunityRestrictedGroupActionModal.react",
    "WAWebFbtIntlList",
    "WAWebFrontendContactGetters",
    "WAWebGroupModifyParticipantsJob",
    "WAWebGroupMutationParticipantUtils",
    "WAWebGroupStringsAction",
    "WAWebMiscErrors",
    "WAWebModalManager",
    "WAWebModifyParticipantsRateLimitText",
    "WAWebNetworkStatus",
    "WAWebStateUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
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
      return L(o("WAWebStateUtils").unproxy(e), t, void 0, n);
    }
    function C(e, t) {
      return k(o("WAWebStateUtils").unproxy(e), t);
    }
    function b(e, t) {
      return T(o("WAWebStateUtils").unproxy(e), t);
    }
    function v(e, t) {
      return x(o("WAWebStateUtils").unproxy(e), t);
    }
    function S(e, t) {
      return P(o("WAWebStateUtils").unproxy(e), t);
    }
    function R(e, t) {
      return N(o("WAWebStateUtils").unproxy(e), t);
    }
    function L(e, t, n, r) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, a, i) {
            var l, d;
            a === void 0 && (a = o("WAWebActionToast.react").genId());
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
              _ = o("WAWebGroupModifyParticipantsJob").addGroupParticipants(
                e.id,
                t.map(function (e) {
                  return o(
                    "WAWebGroupMutationParticipantUtils",
                  ).getGroupMutationParticipant(e, p, "addParticipants");
                }),
              ),
              g = r("WAWebFbtIntlList")(
                t.map(function (e) {
                  return o("WAWebFrontendContactGetters").getFormattedShortName(
                    e,
                  );
                }),
                r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
                r("WAWebFbtIntlList").DELIMITERS.COMMA,
              ).toString(),
              y = new (o("WAWebActionToast.react").ActionType)(
                o("WAWebGroupStringsAction").addingString(g, t.length),
              ),
              C = _.then(function (e) {
                var n = e.participants.some(function (e) {
                  return e.code === "403";
                });
                (m.sendForNeededAddRequest(e.participants, i),
                  n || i == null || i());
                var r = e.participants.filter(function (e) {
                  return e.code === "417";
                });
                if (r.length > 0) {
                  var a = s._(
                      /*BTDS*/ '_j{"*":"{participant_count} participants can\'t be added to the community. You can invite them privately to join this group through its invite link.","_1":"1 participant can\'t be added to the community. You can invite them privately to join this group through its invite link."}',
                      [s._plural(r.length, "participant_count")],
                    ),
                    l = e.participants.some(function (e) {
                      return e.code === "200";
                    });
                  if (!l) throw new (o("WAWebActionToast.react").ActionType)(a);
                  return new (o("WAWebActionToast.react").ActionType)(a);
                }
                var u = o("WAWebGroupStringsAction").formatResult(
                    e,
                    o("WAWebGroupStringsAction").addSuccessString,
                    o("WAWebGroupStringsAction").addFailedString,
                    o("WAWebGroupStringsAction").addPartialFailedString,
                    t,
                  ),
                  c = e.participants.some(function (e) {
                    return e.code === "200";
                  });
                if (!c) throw new (o("WAWebActionToast.react").ActionType)(u);
                return new (o("WAWebActionToast.react").ActionType)(u);
              }).catch(function (n) {
                if (n instanceof o("WAWebActionToast.react").ActionType)
                  throw n;
                var l = new (o("WAWebActionToast.react").ActionType)(
                  s._(/*BTDS*/ '_j{"*":"Couldn\'t add {participantNames}."}', [
                    s._plural(t.length),
                    s._param("participantNames", g),
                  ]),
                  {
                    actionText: s._(/*BTDS*/ "Try again."),
                    actionHandler: function () {
                      return L(e, t, a, i);
                    },
                  },
                );
                switch (n.status) {
                  case 416:
                    if (
                      o(
                        "WAWebCommunityGatingUtils",
                      ).isCommunitySuspendAppealEnabled()
                    ) {
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
                    throw (i == null || i(), l);
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
                      i == null || i(),
                      l
                    );
                }
              });
            return (
              o("WAWebToastManager").ToastManager.open(
                h.jsx(o("WAWebActionToast.react").ActionToast, {
                  id: a,
                  initialAction: y,
                  pendingAction: C,
                }),
              ),
              yield _
            );
          },
        )),
        E.apply(this, arguments)
      );
    }
    function k(e, t, n) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
                        return k(e, t, a);
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
        I.apply(this, arguments)
      );
    }
    function T(e, t, n) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
                        return T(e, t, a);
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
                        return x(e, t, a);
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
        $.apply(this, arguments)
      );
    }
    function P(t, a, i) {
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
    function N(e, t, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
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
        M.apply(this, arguments)
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
