__d(
  "WAWebGroupAdminMemberActions",
  [
    "WAConcurrentIterate",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendErrors",
    "WAWebGroupModifyParticipantsJob",
    "WAWebGroupMutationParticipantUtils",
    "WAWebLidMigrationUtils",
    "WAWebStateUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 2,
      u = 429,
      c = "200",
      d = "403",
      m = "409",
      p = "406";
    function _(e) {
      return h(
        e,
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t,
              n = e.chat,
              r = e.participant,
              a = (t = n.groupMetadata) == null ? void 0 : t.participants;
            if (a == null || !a.canRemove(r)) return "failed";
            if (r.isSuperAdmin) return "creator";
            var i = yield o(
              "WAWebGroupModifyParticipantsJob",
            ).removeGroupParticipants(o("WAWebStateUtils").unproxy(n).id, [
              o("WAWebWidFactory").asUserWidOrThrow(r.id),
            ]);
            return (function (e) {
              return e === c ? "done" : e === p ? "creator" : "failed";
            })(S(i));
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      );
    }
    function f(e, t) {
      return h(
        t,
        (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = t.groupMetadata;
            if (n == null || !n.participants.canAdd()) return "failed";
            if (
              n.participants.userIsMember(
                o("WAWebWidFactory").asUserWidOrThrow(e.id),
              )
            )
              return "already";
            if (
              n.isLidAddressingMode === !0 &&
              o("WAWebABProps").getABPropConfigValue(
                "username_group_mutation_enabled",
              ) &&
              !C(e)
            )
              return "unavailable";
            var r = yield o(
              "WAWebGroupModifyParticipantsJob",
            ).addGroupParticipants(o("WAWebStateUtils").unproxy(t).id, [
              o(
                "WAWebGroupMutationParticipantUtils",
              ).getGroupMutationParticipant(
                e,
                n.isLidAddressingMode === !0,
                "groupAdminConsoleAdd",
              ),
            ]);
            return (function (e) {
              return e === c
                ? "done"
                : e === m
                  ? "already"
                  : e === d
                    ? "privacy"
                    : "failed";
            })(S(r));
          });
          return function (e) {
            return t.apply(this, arguments);
          };
        })(),
      );
    }
    function g(e) {
      return h(
        e,
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.chat,
              n = e.participant,
              r = t.groupMetadata;
            if (r == null || !r.participants.canPromote(n)) return "failed";
            var a = yield o(
              "WAWebGroupModifyParticipantsJob",
            ).promoteGroupParticipants(
              o("WAWebStateUtils").unproxy(t).id,
              [o("WAWebWidFactory").asUserWidOrThrow(n.id)],
              r.isLidAddressingMode === !0,
            );
            return S(a) === c ? "done" : "failed";
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = [],
            l = !1,
            u = null;
          return (
            yield o("WAConcurrentIterate").concurrentIterate(
              t.length,
              (function () {
                var s = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (n) {
                    if (l) {
                      i.push("failed");
                      return;
                    }
                    try {
                      i.push(yield a(t[n]));
                    } catch (t) {
                      (b(t) && (u != null || (u = t)),
                        (b(t) || v(t)) && (l = !0),
                        o("WALogger")
                          .WARN(
                            e ||
                              (e = babelHelpers.taggedTemplateLiteralLoose([
                                "groupAdminMemberActions: a group failed",
                              ])),
                          )
                          .catching(r("getErrorSafe")(t)),
                        i.push("failed"));
                    }
                  },
                );
                return function (e) {
                  return s.apply(this, arguments);
                };
              })(),
              s,
            ),
            {
              addRateLimitError: u,
              alreadyCount: R(i, "already"),
              creatorCount: R(i, "creator"),
              doneCount: R(i, "done"),
              failedCount: R(i, "failed"),
              privacyBlockedCount: R(i, "privacy"),
              rateLimited: l,
              totalCount: t.length,
              unavailableCount: R(i, "unavailable"),
            }
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t = o("WAWebWidFactory").asUserWidOrThrow(e.id);
      return t.isLid() || o("WAWebLidMigrationUtils").toUserLid(t) != null;
    }
    function b(e) {
      return (
        e instanceof
          o("WAWebBackendErrors").GroupAddParticipantTimeRateLimitServerError ||
        e instanceof
          o("WAWebBackendErrors").GroupAddParticipantCountRateLimitServerError
      );
    }
    function v(e) {
      return (
        e instanceof o("WAWebBackendErrors").ServerStatusCodeError &&
        e.status === u
      );
    }
    function S(e) {
      var t;
      return (t = e.participants[0]) == null ? void 0 : t.code;
    }
    function R(e, t) {
      return e.filter(function (e) {
        return e === t;
      }).length;
    }
    ((l.removeMemberFromGroups = _),
      (l.addMemberToGroups = f),
      (l.promoteMemberInGroups = g));
  },
  98,
);
