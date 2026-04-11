__d(
  "WAWebDBGroupsGroupMetadata",
  [
    "Promise",
    "WABatcher",
    "WAWebABProps",
    "WAWebModelStorageUtils",
    "WAWebSchemaGroupMetadata",
    "WAWebUsernameGatingUtils",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.groupInfos,
            r = [];
          yield o("WAWebModelStorageUtils")
            .getStorage()
            .lock(
              ["group-metadata"],
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    var n = e[0],
                      a = yield n.bulkGet(
                        t.map(function (e) {
                          return e.id.toString();
                        }),
                      );
                    return (
                      (r = t.map(function (e, t) {
                        var n,
                          r,
                          i,
                          l,
                          s,
                          u,
                          c,
                          d,
                          m,
                          p,
                          _,
                          f,
                          g = a[t],
                          h = {
                            subject: e.subject,
                            subjectTime: e.subjectTime || 0,
                          },
                          y = { announce: e.announce, a_v_id: e.a_v_id || 0 },
                          C = {
                            desc: e.desc,
                            descId: e.descId,
                            descOwner:
                              (n = e.descOwner) == null ? void 0 : n.toString(),
                            descTime: e.descTime || 0,
                          };
                        if (g) {
                          var b = g.subjectTime || 0,
                            v = g.a_v_id || 0,
                            S = g.descTime || 0;
                          (b > h.subjectTime &&
                            (h = { subject: g.subject, subjectTime: b }),
                            v > y.a_v_id &&
                              (y = { announce: g.announce, a_v_id: v }),
                            S > C.descTime &&
                              (C = {
                                desc: g.desc,
                                descId: g.descId,
                                descOwner: g.descOwner,
                                descTime: S,
                              }));
                        }
                        var R;
                        o("WAWebABProps").getABPropConfigValue(
                          "dm_initiator_trigger_groups",
                        )
                          ? (R = {
                              ephemeralDuration: e.ephemeralDuration || 0,
                              disappearingModeTrigger:
                                e.disappearingModeTrigger,
                              disappearingModeInitiatedByMe:
                                e.disappearingModeInitiatedByMe,
                              afterReadDuration: e.afterReadDuration,
                            })
                          : (R = {
                              ephemeralDuration: e.ephemeralDuration || 0,
                              afterReadDuration: e.afterReadDuration,
                            });
                        var L = babelHelpers.extends(
                          {
                            id: e.id.toString(),
                            creation: e.creation,
                            owner:
                              (r = e.owner) == null ? void 0 : r.toString(),
                            restrict: e.restrict,
                            noFrequentlyForwarded: e.noFrequentlyForwarded,
                            membershipApprovalMode: e.membershipApprovalMode,
                            memberAddMode: e.memberAddMode,
                            memberLinkMode: e.memberLinkMode,
                            memberShareGroupHistoryMode:
                              e.memberShareGroupHistoryMode,
                            growthLockExpiration: e.growthLockExpiration,
                            growthLockType: e.growthLockType,
                            size: e.size || 0,
                            support: (i = e.support) != null ? i : !1,
                            suspended: (l = e.suspended) != null ? l : !1,
                            terminated: (s = e.terminated) != null ? s : !1,
                            parentGroup:
                              (u = e.parentGroup) == null
                                ? void 0
                                : u.toString(),
                            isParentGroup: e.isParentGroup,
                            isParentGroupClosed: e.isParentGroupClosed,
                            defaultSubgroup: e.defaultSubgroup,
                            generalSubgroup: e.generalSubgroup,
                            lastActivityTimestamp:
                              (c =
                                g == null ? void 0 : g.lastActivityTimestamp) !=
                              null
                                ? c
                                : 0,
                            lastSeenActivityTimestamp:
                              (d =
                                g == null
                                  ? void 0
                                  : g.lastSeenActivityTimestamp) != null
                                ? d
                                : 0,
                            isLidAddressingMode: e.isLidAddressingMode,
                            reportToAdminMode:
                              (m = e.reportToAdminMode) != null ? m : !1,
                            lastReportToAdminTimestamp:
                              g == null ? void 0 : g.lastReportToAdminTimestamp,
                            allowNonAdminSubGroupCreation:
                              e.allowNonAdminSubGroupCreation,
                            generalChatAutoAddDisabled:
                              e.generalChatAutoAddDisabled,
                            hasCapi: e.hasCapi === !0,
                            hiddenSubgroup: e.hiddenSubgroup,
                            groupSafetyCheck: e.groupSafetyCheck,
                            lastCommunityPollTimestamp:
                              g == null ? void 0 : g.lastCommunityPollTimestamp,
                            isOpenBotGroup:
                              (p = e == null ? void 0 : e.isOpenBotGroup) !=
                              null
                                ? p
                                : g == null
                                  ? void 0
                                  : g.isOpenBotGroup,
                            isTeeBotGroup:
                              (_ = e == null ? void 0 : e.isTeeBotGroup) != null
                                ? _
                                : g == null
                                  ? void 0
                                  : g.isTeeBotGroup,
                          },
                          h,
                          C,
                          y,
                          R,
                        );
                        return (
                          e.hasIncompleteParticipantInformation != null &&
                            o(
                              "WAWebUsernameGatingUtils",
                            ).usernameDisplayedEnabled() &&
                            (L.hasIncompleteParticipantInformation =
                              e.hasIncompleteParticipantInformation),
                          e.groupAdder != null
                            ? babelHelpers.extends({}, L, {
                                groupAdder:
                                  (f = e.groupAdder) == null
                                    ? void 0
                                    : f.toString(),
                              })
                            : L
                        );
                      })),
                      n.bulkCreateOrMerge(r)
                    );
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            );
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n,
            r,
            a,
            i,
            l,
            s,
            u,
            c,
            d,
            m,
            p,
            _ = e.groupWid,
            f = yield o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .get(String(_));
          return f
            ? {
                id: _,
                owner:
                  f.owner == null
                    ? null
                    : o("WAWebWidFactory").createWid(f.owner),
                creation: f.creation,
                desc: (t = f.desc) != null ? t : void 0,
                descId: (n = f.descId) != null ? n : void 0,
                descOwner:
                  f.descOwner == null
                    ? null
                    : o("WAWebWidFactory").createWid(f.descOwner),
                descTime: (r = f.descTime) != null ? r : void 0,
                restrict: f.restrict || !1,
                announce: f.announce || !1,
                noFrequentlyForwarded: f.noFrequentlyForwarded || !1,
                ephemeralDuration: f.ephemeralDuration || 0,
                membershipApprovalMode:
                  (a = f.membershipApprovalMode) != null ? a : !1,
                memberAddMode: f.memberAddMode,
                memberLinkMode: f.memberLinkMode,
                subject: f.subject,
                support: f.support === !0,
                lastActivityTimestamp:
                  (i = f.lastActivityTimestamp) != null ? i : 0,
                lastSeenActivityTimestamp:
                  (l = f.lastSeenActivityTimestamp) != null ? l : 0,
                lastReportToAdminTimestamp:
                  (s = f.lastReportToAdminTimestamp) != null ? s : null,
                isLidAddressingMode: f.isLidAddressingMode,
                allowNonAdminSubGroupCreation:
                  (u = f.allowNonAdminSubGroupCreation) != null ? u : !1,
                generalChatAutoAddDisabled:
                  (c = f.generalChatAutoAddDisabled) != null ? c : !1,
                hasCapi: f.hasCapi === !0,
                lastCommunityPollTimestamp:
                  (d = f.lastCommunityPollTimestamp) != null ? d : 0,
                isOpenBotGroup: (m = f.isOpenBotGroup) != null ? m : !1,
                isTeeBotGroup: (p = f.isTeeBotGroup) != null ? p : !1,
              }
            : null;
        })),
        d.apply(this, arguments)
      );
    }
    var m = (function () {
      var e = 3e3;
      return o("WABatcher").batch(
        { delayMs: e },
        (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = n();
            return (
              yield o("WAWebSchemaGroupMetadata")
                .getGroupMetadataTable()
                .bulkCreateOrMerge(t),
              e.map(function (e) {})
            );
            function n() {
              return Array.from(
                e
                  .reduce(function (e, t) {
                    var n;
                    return (
                      e.set(
                        t.id,
                        babelHelpers.extends(
                          {},
                          (n = e.get(t.id)) != null ? n : {},
                          t,
                        ),
                      ),
                      e
                    );
                  }, new Map())
                  .values(),
              );
            }
          });
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      );
    })();
    function p(e, t, n) {
      return (
        n === void 0 && (n = !1),
        n
          ? m(babelHelpers.extends({ id: e.toString() }, t))
          : o("WAWebSchemaGroupMetadata")
              .getGroupMetadataTable()
              .createOrMerge(
                e.toString(),
                babelHelpers.extends({ id: e.toString() }, t),
              )
      );
    }
    function _(e) {
      return o("WAWebSchemaGroupMetadata")
        .getGroupMetadataTable()
        .get(e.toString());
    }
    function f(t) {
      return t.length === 0
        ? (e || (e = n("Promise"))).resolve([])
        : o("WAWebSchemaGroupMetadata")
            .getGroupMetadataTable()
            .bulkGet(
              t.map(function (e) {
                return e == null ? "" : e.toString();
              }),
            );
    }
    ((l.updateGroupMetadataTable = s),
      (l.getGroupMetadataUNSAFE = c),
      (l.persistGroupMetadata = p),
      (l.getGroupMetadata = _),
      (l.bulkGetGroupMetadata = f));
  },
  98,
);
