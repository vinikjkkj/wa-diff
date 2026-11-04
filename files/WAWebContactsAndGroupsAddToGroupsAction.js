__d(
  "WAWebContactsAndGroupsAddToGroupsAction",
  [
    "fbt",
    "WAConcurrentIterate",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebContactsAndGroupsGroupInteractions",
    "WAWebContactsAndGroupsSelectionActions",
    "WAWebFrontendContactGetters",
    "WAWebGroupModifyParticipantsJob",
    "WAWebGroupMutationParticipantUtils",
    "WAWebModalManager",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = 2,
      m = 429,
      p = "200",
      _ = "403",
      f = "409";
    function g(e, t, n) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          if (o("WAWebReachoutTimelockUtils").isUserReachoutTimelocked()) {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(
                o("WAWebReachoutTimelockRestrictedModalLoadable")
                  .ReachoutTimelockRestrictedModalLoadable,
                {},
              ),
            );
            return;
          }
          n();
          var r = yield y(e, t);
          o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebToast.react").Toast, {
              action:
                r.inviteResults.length > 0
                  ? {
                      actionText: s._(/*BTDS*/ "Send invite"),
                      onAction: function () {
                        return S(r.inviteResults, 0);
                      },
                    }
                  : null,
              msg: R(r, t),
            }),
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = !1,
            l = [];
          yield o("WAConcurrentIterate").concurrentIterate(
            t.length,
            (function () {
              var s = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (n) {
                  var s = t[n];
                  try {
                    l.push(
                      i
                        ? {
                            addedCount: 0,
                            chat: s,
                            failed: !0,
                            needsInvite: [],
                          }
                        : yield b(s, a),
                    );
                  } catch (t) {
                    (i ||
                      (i =
                        t instanceof
                          o("WAWebBackendErrors")
                            .GroupAddParticipantTimeRateLimitServerError ||
                        t instanceof
                          o("WAWebBackendErrors")
                            .GroupAddParticipantCountRateLimitServerError ||
                        (t instanceof
                          o("WAWebBackendErrors").ServerStatusCodeError &&
                          t.status === m)),
                      o("WALogger")
                        .WARN(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "addContactsToGroupsFromContactsAndGroups: a group failed",
                            ])),
                        )
                        .catching(r("getErrorSafe")(t)),
                      l.push({
                        addedCount: 0,
                        chat: s,
                        failed: !0,
                        needsInvite: [],
                      }));
                  }
                },
              );
              return function (e) {
                return s.apply(this, arguments);
              };
            })(),
            d,
          );
          var s = l.filter(function (e) {
            return e.needsInvite.length > 0;
          });
          return {
            addedGroupCount: l.filter(function (e) {
              return e.addedCount > 0;
            }).length,
            failedGroupCount: l.filter(function (e) {
              return e.failed;
            }).length,
            inviteResults: s,
            privacyPeopleCount: new Set(
              s.flatMap(function (e) {
                return e.needsInvite.map(function (e) {
                  var t,
                    n = e.userWid;
                  return (t = o(
                    "WAWebContactsAndGroupsGroupInteractions",
                  ).getPersonKey(n)) != null
                    ? t
                    : n.toString();
                });
              }),
            ).size,
            totalGroupCount: t.length,
          };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = o("WAWebContactsAndGroupsSelectionActions").getContactsToAdd(
              e,
              t,
            );
          if (r.length === 0)
            return { addedCount: 0, chat: e, failed: !1, needsInvite: [] };
          var a =
              ((n = e.groupMetadata) == null
                ? void 0
                : n.isLidAddressingMode) === !0,
            i = yield o("WAWebGroupModifyParticipantsJob").addGroupParticipants(
              e.id,
              r.map(function (e) {
                return o(
                  "WAWebGroupMutationParticipantUtils",
                ).getGroupAddParticipant(e, a, "addParticipants");
              }),
            ),
            l = i.participants,
            s = l.filter(function (e) {
              return e.code === p;
            }).length,
            u = l.filter(function (e) {
              return e.code === _;
            }),
            c = l.some(function (e) {
              var t = e.code;
              return t !== f;
            });
          return {
            addedCount: s,
            chat: e,
            failed: s === 0 && u.length === 0 && c,
            needsInvite: u,
          };
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      var n,
        r = e[t];
      if (r != null) {
        var o = (n = r.chat.groupMetadata) == null ? void 0 : n.participants;
        if (o == null) {
          S(e, t + 1);
          return;
        }
        o.sendForNeededAddRequest([].concat(r.needsInvite), function () {
          return S(e, t + 1);
        });
      }
    }
    function R(e, t) {
      if (e.failedGroupCount > 0 && e.inviteResults.length > 0)
        return s._(
          /*BTDS*/ "Added to {addedCount} of {totalCount} groups. Some people couldn't be added because of their privacy settings.",
          [
            s._param("addedCount", e.addedGroupCount),
            s._param("totalCount", e.totalGroupCount),
          ],
        );
      if (e.failedGroupCount > 0)
        return s._(
          /*BTDS*/ "Added to {addedCount} of {totalCount} groups. Try again later for the rest.",
          [
            s._param("addedCount", e.addedGroupCount),
            s._param("totalCount", e.totalGroupCount),
          ],
        );
      if (e.inviteResults.length > 0) return L(e, t);
      var n = t[0];
      return t.length === 1 && n != null
        ? s._(
            /*BTDS*/ '_j{"*":"Added {name} to {number} groups","_1":"Added {name} to 1 group"}',
            [
              s._plural(e.addedGroupCount, "number"),
              s._param(
                "name",
                o("WAWebFrontendContactGetters").getFormattedShortName(n),
              ),
            ],
          )
        : s._(
            /*BTDS*/ '_j{"*":{"*":"Added {peopleCount} people to {groupCount} groups","_1":"Added {peopleCount} people to 1 group"},"_1":{"*":"Added 1 person to {groupCount} groups","_1":"Added 1 person to 1 group"}}',
            [
              s._plural(t.length, "peopleCount"),
              s._plural(e.addedGroupCount, "groupCount"),
            ],
          );
    }
    function L(e, t) {
      var n = t[0];
      return t.length === 1 && n != null
        ? s._(
            /*BTDS*/ '_j{"*":{"*":"Added to {addedGroupCount} groups. Couldn\'t add {name} to {blockedGroupCount} groups because of their privacy settings.","_1":"Added to {addedGroupCount} groups. Couldn\'t add {name} to 1 group because of their privacy settings."},"_1":{"*":"Added to 1 group. Couldn\'t add {name} to {blockedGroupCount} groups because of their privacy settings.","_1":"Added to 1 group. Couldn\'t add {name} to 1 group because of their privacy settings."}}',
            [
              s._plural(e.addedGroupCount, "addedGroupCount"),
              s._plural(e.inviteResults.length, "blockedGroupCount"),
              s._param(
                "name",
                o("WAWebFrontendContactGetters").getFormattedShortName(n),
              ),
            ],
          )
        : s._(
            /*BTDS*/ '_j{"*":{"*":"Added to {addedGroupCount} groups. Couldn\'t add {peopleCount} people because of their privacy settings.","_1":"Added to {addedGroupCount} groups. Couldn\'t add 1 person because of their privacy settings."},"_1":{"*":"Added to 1 group. Couldn\'t add {peopleCount} people because of their privacy settings.","_1":"Added to 1 group. Couldn\'t add 1 person because of their privacy settings."}}',
            [
              s._plural(e.addedGroupCount, "addedGroupCount"),
              s._plural(e.privacyPeopleCount, "peopleCount"),
            ],
          );
    }
    l.addContactsToGroupsFromContactsAndGroups = g;
  },
  226,
);
