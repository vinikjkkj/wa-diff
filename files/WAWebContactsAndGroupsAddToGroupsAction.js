__d(
  "WAWebContactsAndGroupsAddToGroupsAction",
  [
    "fbt",
    "WAConcurrentIterate",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebBackendRuntime",
    "WAWebContactsAndGroupsContactName",
    "WAWebContactsAndGroupsGroupInteractions",
    "WAWebContactsAndGroupsSelectionActions",
    "WAWebGroupModifyParticipantsJob",
    "WAWebGroupMutationParticipantUtils",
    "WAWebGroupParticipantsService",
    "WAWebModalManager",
    "WAWebReachoutTimelockRestrictedModalLoadable",
    "WAWebReachoutTimelockUtils",
    "WAWebToast.react",
    "WAWebToastManager",
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
    async function g(e, t, n) {
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
      var r = await h(e, t);
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebToast.react").Toast, {
          action:
            r.inviteResults.length > 0
              ? {
                  actionText: s._(/*BTDS*/ ""),
                  onAction: function () {
                    return C(r.inviteResults, 0);
                  },
                }
              : null,
          msg: b(r, t),
        }),
      );
    }
    async function h(t, n) {
      var a = !1,
        i = [];
      await o("WAConcurrentIterate").concurrentIterate(
        t.length,
        async function (l) {
          var s = t[l];
          try {
            i.push(
              a
                ? { addedPeople: [], chat: s, failed: !0, needsInvite: [] }
                : await y(s, n),
            );
          } catch (t) {
            (a ||
              (a =
                t instanceof
                  o("WAWebBackendErrors")
                    .GroupAddParticipantTimeRateLimitServerError ||
                t instanceof
                  o("WAWebBackendErrors")
                    .GroupAddParticipantCountRateLimitServerError ||
                (t instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
                  t.status === m)),
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "addContactsToGroupsFromContactsAndGroups: a group failed",
                    ])),
                )
                .catching(r("getErrorSafe")(t)),
              i.push({
                addedPeople: [],
                chat: s,
                failed: !0,
                needsInvite: [],
              }));
          }
        },
        d,
      );
      var l = i.filter(function (e) {
        return e.needsInvite.length > 0;
      });
      return {
        addedGroupCount: i.filter(function (e) {
          return e.addedPeople.length > 0;
        }).length,
        addedPeopleCount: new Set(
          i.flatMap(function (e) {
            return e.addedPeople;
          }),
        ).size,
        failedGroupCount: i.filter(function (e) {
          return e.failed;
        }).length,
        inviteResults: l,
        privacyPeopleCount: new Set(
          l.flatMap(function (e) {
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
    }
    async function y(e, t) {
      var n,
        r = o("WAWebContactsAndGroupsSelectionActions").getContactsToAdd(e, t);
      if (r.length === 0)
        return { addedPeople: [], chat: e, failed: !1, needsInvite: [] };
      var a =
          ((n = e.groupMetadata) == null ? void 0 : n.isLidAddressingMode) ===
          !0,
        i = await (
          o("WAWebBackendRuntime").isWebDiBackendEnabled()
            ? o("WAWebBackendRuntime").runtime(
                o("WAWebGroupParticipantsService").GroupParticipantsService,
              ).addGroupParticipants
            : o("WAWebGroupModifyParticipantsJob").addGroupParticipants
        )(
          e.id,
          r.map(function (e) {
            return o(
              "WAWebGroupMutationParticipantUtils",
            ).getGroupAddParticipant(e, a, "addParticipants");
          }),
        ),
        l = i.participants,
        s = l
          .filter(function (e) {
            return e.code === p;
          })
          .map(function (e) {
            var t,
              n = e.userWid;
            return (t = o(
              "WAWebContactsAndGroupsGroupInteractions",
            ).getPersonKey(n)) != null
              ? t
              : n.toString();
          }),
        u = l.filter(function (e) {
          return e.code === _;
        }),
        c = l.some(function (e) {
          var t = e.code;
          return t !== f;
        });
      return {
        addedPeople: s,
        chat: e,
        failed: s.length === 0 && u.length === 0 && c,
        needsInvite: u,
      };
    }
    function C(e, t) {
      var n,
        r = e[t];
      if (r != null) {
        var o = (n = r.chat.groupMetadata) == null ? void 0 : n.participants;
        if (o == null) {
          C(e, t + 1);
          return;
        }
        o.sendForNeededAddRequest([].concat(r.needsInvite), function () {
          return C(e, t + 1);
        });
      }
    }
    function b(e, t) {
      if (e.failedGroupCount > 0 && e.inviteResults.length > 0)
        return s._(/*BTDS*/ "", [
          s._param("addedCount", e.addedGroupCount),
          s._param("totalCount", e.totalGroupCount),
        ]);
      if (e.failedGroupCount > 0)
        return s._(/*BTDS*/ "", [
          s._param("addedCount", e.addedGroupCount),
          s._param("totalCount", e.totalGroupCount),
        ]);
      if (e.inviteResults.length > 0) return v(e, t);
      var n = t[0];
      return t.length === 1 && n != null
        ? s._(/*BTDS*/ "", [
            s._plural(e.addedGroupCount, "number"),
            s._param(
              "name",
              o(
                "WAWebContactsAndGroupsContactName",
              ).getContactsAndGroupsShortName(n),
            ),
          ])
        : s._(/*BTDS*/ "", [
            s._plural(e.addedPeopleCount, "peopleCount"),
            s._plural(e.addedGroupCount, "groupCount"),
          ]);
    }
    function v(e, t) {
      var n = t[0];
      return t.length === 1 && n != null
        ? s._(/*BTDS*/ "", [
            s._plural(e.addedGroupCount, "addedGroupCount"),
            s._plural(e.inviteResults.length, "blockedGroupCount"),
            s._param(
              "name",
              o(
                "WAWebContactsAndGroupsContactName",
              ).getContactsAndGroupsShortName(n),
            ),
          ])
        : s._(/*BTDS*/ "", [
            s._plural(e.addedGroupCount, "addedGroupCount"),
            s._plural(e.privacyPeopleCount, "peopleCount"),
          ]);
    }
    l.addContactsToGroupsFromContactsAndGroups = g;
  },
  226,
);
