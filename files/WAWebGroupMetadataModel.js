__d(
  "WAWebGroupMetadataModel",
  [
    "fbt",
    "Promise",
    "WALogger",
    "WAShiftTimer",
    "WAWebBaseModel",
    "WAWebChatCollection",
    "WAWebCommunityGatingUtils",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebGroupMembershipApprovalRequestCollection",
    "WAWebGroupMetadataCollection",
    "WAWebGroupParticipantCollection",
    "WAWebGroupPendingParticipantCollection",
    "WAWebGroupType",
    "WAWebInviteV4QueryGroupAction",
    "WAWebMiscGatingUtils",
    "WAWebPastParticipantCollection",
    "WAWebSchemaGroupMetadata",
    "WAWebSubgroupSuggestionCollection",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebUnreadMentionMetadataModel",
    "WAWebUpdateSubgroupsCommunityAction",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = "https://chat.whatsapp.com/",
      d = (function (t) {
        function a() {
          for (var e, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(a)) || this),
            (e.participants = o("WAWebBaseModel").collection(
              r("WAWebGroupParticipantCollection"),
            )),
            (e.pendingParticipants = o("WAWebBaseModel").collection(
              r("WAWebGroupPendingParticipantCollection"),
            )),
            (e.pastParticipants = o("WAWebBaseModel").collection(
              r("WAWebPastParticipantCollection"),
            )),
            (e.membershipApprovalRequests = o("WAWebBaseModel").collection(
              r("WAWebGroupMembershipApprovalRequestCollection"),
            )),
            (e.subgroupSuggestions = o("WAWebBaseModel").collection(
              r("WAWebSubgroupSuggestionCollection"),
            )),
            (e.id = o("WAWebBaseModel").prop()),
            (e.creation = o("WAWebBaseModel").prop()),
            (e.owner = o("WAWebBaseModel").prop()),
            (e.subject = o("WAWebBaseModel").prop()),
            (e.subjectTime = o("WAWebBaseModel").prop()),
            (e.desc = o("WAWebBaseModel").prop()),
            (e.descId = o("WAWebBaseModel").prop()),
            (e.descTime = o("WAWebBaseModel").prop()),
            (e.descOwner = o("WAWebBaseModel").prop()),
            (e.restrict = o("WAWebBaseModel").prop()),
            (e.announce = o("WAWebBaseModel").prop()),
            (e.noFrequentlyForwarded = o("WAWebBaseModel").prop()),
            (e.ephemeralDuration = o("WAWebBaseModel").prop()),
            (e.disappearingModeTrigger = o("WAWebBaseModel").prop()),
            (e.disappearingModeInitiatedByMe = o("WAWebBaseModel").prop()),
            (e.afterReadDuration = o("WAWebBaseModel").prop()),
            (e.membershipApprovalMode = o("WAWebBaseModel").prop()),
            (e.memberAddMode = o("WAWebBaseModel").prop()),
            (e.memberLinkMode = o("WAWebBaseModel").prop()),
            (e.growthLockExpiration = o("WAWebBaseModel").prop()),
            (e.growthLockType = o("WAWebBaseModel").prop()),
            (e.reportToAdminMode = o("WAWebBaseModel").prop()),
            (e.size = o("WAWebBaseModel").prop()),
            (e.numSubgroups = o("WAWebBaseModel").prop()),
            (e.support = o("WAWebBaseModel").prop()),
            (e.suspended = o("WAWebBaseModel").prop(!1)),
            (e.terminated = o("WAWebBaseModel").prop(!1)),
            (e.suspendAppealStatus = o("WAWebBaseModel").prop(null)),
            (e.suspendAppealUpdateTime = o("WAWebBaseModel").prop(null)),
            (e.uniqueShortNameMap = o("WAWebBaseModel").prop()),
            (e.isLidAddressingMode = o("WAWebBaseModel").prop()),
            (e.isParentGroup = o("WAWebBaseModel").prop()),
            (e.isParentGroupClosed = o("WAWebBaseModel").prop()),
            (e.parentGroup = o("WAWebBaseModel").prop()),
            (e.defaultSubgroup = o("WAWebBaseModel").prop()),
            (e.generalSubgroup = o("WAWebBaseModel").prop()),
            (e.hiddenSubgroup = o("WAWebBaseModel").prop()),
            (e.groupSafetyCheck = o("WAWebBaseModel").prop()),
            (e.groupAdder = o("WAWebBaseModel").prop()),
            (e.generalChatAutoAddDisabled = o("WAWebBaseModel").prop()),
            (e.lastCommunityPollTimestamp = o("WAWebBaseModel").prop()),
            (e.unjoinedSubgroups = o("WAWebBaseModel").session(function () {
              return [];
            })),
            (e.joinedSubgroups = o("WAWebBaseModel").session(function () {
              return [];
            })),
            (e.allowNonAdminSubGroupCreation = o("WAWebBaseModel").prop()),
            (e.lastActivityTimestamp = o("WAWebBaseModel").prop()),
            (e.lastSeenActivityTimestamp = o("WAWebBaseModel").prop()),
            (e.lastReportToAdminTimestamp = o("WAWebBaseModel").prop()),
            (e.hasCapi = o("WAWebBaseModel").prop()),
            (e.isOpenBotGroup = o("WAWebBaseModel").prop()),
            (e.isTeeBotGroup = o("WAWebBaseModel").prop()),
            (e.isInternal = o("WAWebBaseModel").session()),
            (e.memberShareGroupHistoryMode = o("WAWebBaseModel").prop()),
            (e.stale = o("WAWebBaseModel").session(!0)),
            (e.deviceStale = o("WAWebBaseModel").session(!1)),
            (e.trusted = o("WAWebBaseModel").session(!0)),
            (e.inviteCode = o("WAWebBaseModel").session()),
            (e.groupInviteCodePromise = o("WAWebBaseModel").session()),
            (e.revokeGroupInvitePromise = o("WAWebBaseModel").session()),
            (e.participantQueryPromise = o("WAWebBaseModel").session()),
            (e.deviceQueryPromise = o("WAWebBaseModel").session()),
            (e.unjoinedSubgroupsQueryPromise = o("WAWebBaseModel").session()),
            (e.displayedDesc = o("WAWebBaseModel").session("")),
            (e.revokeGroupsV4AddInvitePromise = o("WAWebBaseModel").session()),
            (e.groupInviteLink = o("WAWebBaseModel").derived(
              function () {
                return this.inviteCode ? "" + c + this.inviteCode : null;
              },
              ["inviteCode"],
            )),
            (e.cachedDeviceCount = o("WAWebBaseModel").session()),
            (e.cachedDeviceSizeBucket = o("WAWebBaseModel").session()),
            (e.groupType = o("WAWebBaseModel").derived(
              function () {
                return this.defaultSubgroup === !0
                  ? o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
                  : this.generalSubgroup === !0
                    ? o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP
                    : this.parentGroup != null
                      ? o("WAWebGroupType").GroupType.LINKED_SUBGROUP
                      : this.isParentGroup === !0
                        ? o("WAWebGroupType").GroupType.COMMUNITY
                        : o("WAWebGroupType").GroupType.DEFAULT;
              },
              [
                "parentGroup",
                "isParentGroup",
                "defaultSubgroup",
                "generalSubgroup",
              ],
            )),
            (e.isCag = o("WAWebBaseModel").derived(
              function () {
                return (
                  this.groupType ===
                  o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
                );
              },
              ["groupType"],
            )),
            (e.isUnnamed = o("WAWebBaseModel").derived(
              function () {
                return this.subject === "";
              },
              ["subject"],
            )),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.isNonAdminAndACAGJREnabled = function () {
            var e,
              t = !this.participants.iAmAdmin(),
              n = this.participants.iAmMember(),
              r =
                this.memberAddMode ===
                o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD,
              a = (e = this.membershipApprovalMode) != null ? e : !1;
            return t && n && r && a;
          }),
          (i.hasUniqueShortNameMention = function (t) {
            var e;
            if (
              !this.uniqueShortNameMap ||
              !t.shortName ||
              !o("WAWebFrontendContactGetters").getIsMyContact(t)
            )
              return !1;
            var n = this.$GroupMetadata$p_2(t.shortName);
            return (e = this.uniqueShortNameMap.get(n)) != null ? e : !1;
          }),
          (i.$GroupMetadata$p_2 = function (t) {
            return t.toLowerCase().trim();
          }),
          (i.isSuspendedOrTerminated = function () {
            return this.suspended || this.terminated;
          }),
          (i.delete = function () {
            (t.prototype.delete.call(this),
              this.getCollection().remove(this.id),
              this.participants.delete());
          }),
          (i.canSetSubject = function () {
            return this.isSuspendedOrTerminated() ||
              this.groupType ===
                o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
              ? !1
              : this.groupType === o("WAWebGroupType").GroupType.COMMUNITY
                ? this.participants.iAmAdmin()
                : this.participants.iAmMember()
                  ? this.participants.iAmAdmin()
                    ? !this.support
                    : this.restrict === !0
                      ? !1
                      : !this.support
                  : !1;
          }),
          (i.canSetDescription = function () {
            return !this.participants.iAmMember() ||
              (!this.participants.iAmAdmin() && this.restrict) ||
              this.isSuspendedOrTerminated() ||
              ((this.groupType === o("WAWebGroupType").GroupType.COMMUNITY ||
                this.groupType ===
                  o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) &&
                !this.participants.iAmAdmin())
              ? !1
              : !this.support;
          }),
          (i.canSetGroupProperty = function () {
            return this.isSuspendedOrTerminated() ||
              this.groupType ===
                o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
              ? !1
              : this.participants.iAmAdmin()
                ? !this.support
                : !1;
          }),
          (i.userCanSetEphemeralSetting = function (t) {
            var e = !this.support;
            if (this.isSuspendedOrTerminated()) return !1;
            if (t.isUser()) {
              if (!this.participants.userIsMember(t)) return !1;
              if (this.participants.userIsAdmin(t)) return e;
            }
            return this.restrict ||
              this.groupType ===
                o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
              ? !1
              : e;
          }),
          (i.canSetEphemeralSetting = function () {
            var e = this;
            return o("WAWebUserPrefsMeUser")
              .getMePNandLIDWids()
              .some(function (t) {
                return e.userCanSetEphemeralSetting(
                  o("WAWebWidFactory").asUserWidOrThrow(t),
                );
              });
          }),
          (i.initialize = function () {
            var e = this;
            (o("WAWebBaseModel").BaseModel.prototype.initialize.call(this),
              this.listenTo(
                this.participants,
                "change:isAdmin change:isSuperAdmin change:contact.isMyContact sort remove reset",
                function () {
                  (e.isTrusted(), e.$GroupMetadata$p_3());
                },
              ),
              this.listenTo(
                this.participants,
                "bulk_add bulk_remove reset",
                this.triggerParticipantsChange,
              ),
              this.listenTo(this, "change:owner", this.isTrusted),
              this.listenTo(
                this,
                "change:isParentGroup",
                this.$GroupMetadata$p_4,
              ),
              this.listenTo(this, "change:desc", this.$GroupMetadata$p_3),
              this.listenTo(this, "change:groupType", this.$GroupMetadata$p_3),
              this.$GroupMetadata$p_3(),
              this.isTrusted(),
              (this.$GroupMetadata$p_1 = this.$GroupMetadata$p_5()),
              this.listenTo(
                this.participants,
                "change:contact.shortName",
                this.$GroupMetadata$p_6,
              ),
              (this.uniqueShortNameMap = new Map()),
              (this.unreadMentionMetadata = new (r(
                "WAWebUnreadMentionMetadataModel",
              ))()),
              this.groupType === o("WAWebGroupType").GroupType.COMMUNITY &&
                this.$GroupMetadata$p_4());
          }),
          (i.$GroupMetadata$p_6 = function () {
            var e;
            (e = this.$GroupMetadata$p_1) == null ||
              e.debounce(a.UPDATE_NAME_MAP_DEBOUNCE_TIME);
          }),
          (i.triggerParticipantsChange = function () {
            if (o("WAWebMiscGatingUtils").isDropLastNameEnabled()) {
              var e;
              (e = this.$GroupMetadata$p_1) == null ||
                e.debounce(a.UPDATE_NAME_MAP_DEBOUNCE_TIME);
            }
            this.trigger("change:participants");
          }),
          (i.$GroupMetadata$p_5 = function () {
            var e = this;
            return new (o("WAShiftTimer").ShiftTimer)(function () {
              if (o("WAWebMiscGatingUtils").isDropLastNameEnabled()) {
                var t = new Map();
                (e.participants &&
                  e.participants.forEach(function (n) {
                    if (
                      n.contact.shortName &&
                      o("WAWebFrontendContactGetters").getIsMyContact(n.contact)
                    ) {
                      var r = e.$GroupMetadata$p_2(n.contact.shortName);
                      t.has(r) ? t.set(r, !1) : t.set(r, !0);
                    }
                  }),
                  (e.uniqueShortNameMap = t));
              }
            });
          }),
          (i.$GroupMetadata$p_7 = function () {
            return this.participants.some(function (e) {
              return (
                e.isAdmin &&
                o("WAWebFrontendContactGetters").getIsMyContact(e.contact)
              );
            });
          }),
          (i.isTrusted = function () {
            if (this.stale) return this.trusted;
            if (this.support) return (this.trusted = !0);
            if (this.owner) {
              if (o("WAWebUserPrefsMeUser").isMeAccount(this.owner))
                return (this.trusted = !0);
              var e = o("WAWebContactCollection").ContactCollection.get(
                this.owner,
              );
              if (
                e != null &&
                o("WAWebFrontendContactGetters").getIsMyContact(e)
              )
                return (this.trusted = !0);
            }
            if (this.groupAdder != null) {
              var t = o("WAWebContactCollection").ContactCollection.get(
                this.groupAdder,
              );
              if (
                t != null &&
                o("WAWebFrontendContactGetters").getIsMyContact(t)
              )
                return (this.trusted = !0);
            }
            return this.$GroupMetadata$p_7()
              ? (this.trusted = !0)
              : (this.trusted = !1);
          }),
          (i.hasJoined = function () {
            var e = this.groupType,
              t = this.id,
              n = this.joinedSubgroups;
            if (e === o("WAWebGroupType").GroupType.COMMUNITY)
              return n.length > 0;
            var r = o("WAWebChatCollection").ChatCollection.get(t);
            return r ? r.isReadOnly === !1 : !1;
          }),
          (i.$GroupMetadata$p_3 = function () {
            this.groupType ===
              o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
            !this.canSetDescription() &&
            (this.desc == null || this.desc === "")
              ? (this.displayedDesc = s
                  ._(
                    /*BTDS*/ "Get the latest announcements from the admins of this community.",
                  )
                  .toString())
              : (this.displayedDesc = this.desc);
          }),
          (i.$GroupMetadata$p_4 = function () {
            (o("WAWebUpdateSubgroupsCommunityAction").updateJoinedSubgroups(
              this,
            ),
              o("WAWebUpdateSubgroupsCommunityAction").updateUnjoinedSubgroups(
                this,
              ));
          }),
          (i.revokeGroupsV4AddInvite = function (r) {
            var t = this;
            if (this.revokeGroupsV4AddInvitePromise)
              return this.revokeGroupsV4AddInvitePromise;
            var a = o("WAWebWidToJid").widToGroupJid(this.id),
              i = this.pendingParticipants,
              l = (u || (u = n("Promise"))).resolve();
            return (
              (l = o("WAWebInviteV4QueryGroupAction").revokeGroupInviteV4(
                r,
                a,
              )),
              (this.revokeGroupsV4AddInvitePromise = l
                .then(function (e) {
                  return (
                    e.status >= 200 && e.status < 300 && i.remove(r),
                    e.status
                  );
                })
                .catch(function (t) {
                  return (
                    o("WALogger").WARN(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[GroupMetadata] revokeGroupsV4AddInvite failed",
                        ])),
                    ),
                    500
                  );
                })
                .finally(function () {
                  t.revokeGroupsV4AddInvitePromise = null;
                }))
            );
          }),
          (i.queryGroupsV4PendingInvite = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = this,
                t = yield o(
                  "WAWebInviteV4QueryGroupAction",
                ).getPendingParticipants(
                  this.id,
                  this.isLidAddressingMode === !0,
                );
              t.forEach(function (t) {
                e.pendingParticipants.add({
                  id: o("WAWebWidFactory").createUserWidOrThrow(t),
                });
              });
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.getJoinedSubgroupsMetadata = function () {
            var e = this.getCollection();
            return r("compactMap")(this.joinedSubgroups, function (t) {
              return e.get(t.toString());
            });
          }),
          (i.getJoinedSubgroupsChat = function () {
            return r("compactMap")(this.joinedSubgroups, function (e) {
              return o("WAWebChatCollection").ChatCollection.get(e.toString());
            });
          }),
          (i.getUnjoinedSubgroupsMetadata = function () {
            var e = this.getUnjoinedCollection();
            return r("compactMap")(this.unjoinedSubgroups, function (t) {
              return e.get(t.toString());
            });
          }),
          (i.getSubgroupsMetadata = function () {
            return [].concat(
              this.getJoinedSubgroupsMetadata(),
              this.getUnjoinedSubgroupsMetadata(),
            );
          }),
          (i.getSubgroupSuggestions = function () {
            var e = new Set();
            return this.subgroupSuggestions.filter(function (t) {
              var n = t.groupId,
                r = t.isExistingGroup;
              return e.has(n.toString())
                ? !1
                : e.add(n.toString()) &&
                    !(
                      r &&
                      !o(
                        "WAWebCommunityGatingUtils",
                      ).memberSuggestedGroupsM3ReceiverEnabled()
                    );
            });
          }),
          (i.getParentGroupChat = function () {
            var e = this.parentGroup;
            if (e) return o("WAWebChatCollection").ChatCollection.get(e);
          }),
          (i.isParentGroupParticipant = function () {
            var e = this.parentGroup;
            if (!e) return !1;
            var t = this.getCollection().get(e);
            return !!(t != null && t.joinedSubgroups.length);
          }),
          (i.getUnjoinedCollection = function () {
            return r("WAWebUnjoinedSubgroupMetadataCollection");
          }),
          (i.getCollection = function () {
            return r("WAWebGroupMetadataCollection");
          }),
          a
        );
      })(o("WAWebBaseModel").BaseModel);
    ((d.Proxy = "groupMetadata"),
      (d.idClass = r("WAWebWid")),
      (d.UPDATE_NAME_MAP_DEBOUNCE_TIME = 200));
    var m = o("WAWebBaseModel").defineModel(d);
    l.default = m;
  },
  226,
);
