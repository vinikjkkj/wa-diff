__d(
  "WAWebGroupMetadataModel",
  [
    "fbt",
    "WAShiftTimer",
    "WAWebBaseModel",
    "WAWebChatCollection",
    "WAWebCommunityGatingUtils",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebFrontendGroupMetadataGetters",
    "WAWebGroupMembershipApprovalRequestCollection",
    "WAWebGroupMetadataCollection",
    "WAWebGroupMetadataGetters",
    "WAWebGroupParticipantCollection",
    "WAWebGroupPendingParticipantCollection",
    "WAWebGroupType",
    "WAWebMiscGatingUtils",
    "WAWebOrgMemberContactName",
    "WAWebPastParticipantCollection",
    "WAWebSchemaGroupMetadata",
    "WAWebSubgroupSuggestionCollection",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebUpdateSubgroupsCommunityAction",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
          a[i] = arguments[i];
        return (
          (t = e.call.apply(e, [this].concat(a)) || this),
          (t.participants = o("WAWebBaseModel").collection(
            r("WAWebGroupParticipantCollection"),
          )),
          (t.pendingParticipants = o("WAWebBaseModel").collection(
            r("WAWebGroupPendingParticipantCollection"),
          )),
          (t.pastParticipants = o("WAWebBaseModel").collection(
            r("WAWebPastParticipantCollection"),
          )),
          (t.membershipApprovalRequests = o("WAWebBaseModel").collection(
            r("WAWebGroupMembershipApprovalRequestCollection"),
          )),
          (t.subgroupSuggestions = o("WAWebBaseModel").collection(
            r("WAWebSubgroupSuggestionCollection"),
          )),
          (t.id = o("WAWebBaseModel").prop()),
          (t.creation = o("WAWebBaseModel").prop()),
          (t.owner = o("WAWebBaseModel").prop()),
          (t.subject = o("WAWebBaseModel").prop()),
          (t.subjectTime = o("WAWebBaseModel").prop()),
          (t.desc = o("WAWebBaseModel").prop()),
          (t.descId = o("WAWebBaseModel").prop()),
          (t.descTime = o("WAWebBaseModel").prop()),
          (t.descOwner = o("WAWebBaseModel").prop()),
          (t.restrict = o("WAWebBaseModel").prop()),
          (t.announce = o("WAWebBaseModel").prop()),
          (t.noFrequentlyForwarded = o("WAWebBaseModel").prop()),
          (t.ephemeralDuration = o("WAWebBaseModel").prop()),
          (t.disappearingModeTrigger = o("WAWebBaseModel").prop()),
          (t.disappearingModeInitiatedByMe = o("WAWebBaseModel").prop()),
          (t.afterReadDuration = o("WAWebBaseModel").prop()),
          (t.membershipApprovalMode = o("WAWebBaseModel").prop()),
          (t.memberAddMode = o("WAWebBaseModel").prop()),
          (t.memberLinkMode = o("WAWebBaseModel").prop()),
          (t.growthLockExpiration = o("WAWebBaseModel").prop()),
          (t.growthLockType = o("WAWebBaseModel").prop()),
          (t.reportToAdminMode = o("WAWebBaseModel").prop()),
          (t.size = o("WAWebBaseModel").prop()),
          (t.numSubgroups = o("WAWebBaseModel").prop()),
          (t.support = o("WAWebBaseModel").prop()),
          (t.suspended = o("WAWebBaseModel").prop(!1)),
          (t.terminated = o("WAWebBaseModel").prop(!1)),
          (t.suspendAppealStatus = o("WAWebBaseModel").prop(null)),
          (t.suspendAppealUpdateTime = o("WAWebBaseModel").prop(null)),
          (t.suspendAppealApprovedSeen = o("WAWebBaseModel").prop(!1)),
          (t.uniqueShortNameMap = o("WAWebBaseModel").prop()),
          (t.isLidAddressingMode = o("WAWebBaseModel").prop()),
          (t.isParentGroup = o("WAWebBaseModel").prop()),
          (t.isParentGroupClosed = o("WAWebBaseModel").prop()),
          (t.parentGroup = o("WAWebBaseModel").prop()),
          (t.defaultSubgroup = o("WAWebBaseModel").prop()),
          (t.generalSubgroup = o("WAWebBaseModel").prop()),
          (t.hiddenSubgroup = o("WAWebBaseModel").prop()),
          (t.groupSafetyCheck = o("WAWebBaseModel").prop()),
          (t.groupAdder = o("WAWebBaseModel").prop()),
          (t.generalChatAutoAddDisabled = o("WAWebBaseModel").prop()),
          (t.lastCommunityPollTimestamp = o("WAWebBaseModel").prop()),
          (t.unjoinedSubgroups = o("WAWebBaseModel").session(function () {
            return [];
          })),
          (t.joinedSubgroups = o("WAWebBaseModel").session(function () {
            return [];
          })),
          (t.allowNonAdminSubGroupCreation = o("WAWebBaseModel").prop()),
          (t.lastActivityTimestamp = o("WAWebBaseModel").prop()),
          (t.lastSeenActivityTimestamp = o("WAWebBaseModel").prop()),
          (t.lastReportToAdminTimestamp = o("WAWebBaseModel").prop()),
          (t.hasCapi = o("WAWebBaseModel").prop()),
          (t.isOpenBotGroup = o("WAWebBaseModel").prop()),
          (t.isTeeBotGroup = o("WAWebBaseModel").prop()),
          (t.isInternal = o("WAWebBaseModel").session()),
          (t.memberShareGroupHistoryMode = o("WAWebBaseModel").prop()),
          (t.shouldDefaultGroupHistoryShareOn = o("WAWebBaseModel").prop()),
          (t.stale = o("WAWebBaseModel").session(!0)),
          (t.deviceStale = o("WAWebBaseModel").session(!1)),
          (t.trusted = o("WAWebBaseModel").session(!0)),
          (t.inviteCode = o("WAWebBaseModel").session()),
          (t.groupInviteCodePromise = o("WAWebBaseModel").session()),
          (t.revokeGroupInvitePromise = o("WAWebBaseModel").session()),
          (t.participantQueryPromise = o("WAWebBaseModel").session()),
          (t.deviceQueryPromise = o("WAWebBaseModel").session()),
          (t.unjoinedSubgroupsQueryPromise = o("WAWebBaseModel").session()),
          (t.displayedDesc = o("WAWebBaseModel").session("")),
          (t.revokeGroupsV4AddInvitePromise = o("WAWebBaseModel").session()),
          (t.cachedDeviceCount = o("WAWebBaseModel").session()),
          (t.cachedDeviceSizeBucket = o("WAWebBaseModel").session()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.isNonAdminAndACAGJREnabled = function () {
          var e,
            t = !this.participants.iAmAdmin(),
            n = this.participants.iAmMember(),
            r =
              this.memberAddMode ===
              o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD,
            a = (e = this.membershipApprovalMode) != null ? e : !1;
          return t && n && r && a;
        }),
        (n.hasUniqueShortNameMention = function (t) {
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
        (n.$GroupMetadata$p_2 = function (t) {
          return t.toLowerCase().trim();
        }),
        (n.isSuspendedOrTerminated = function () {
          return this.suspended || this.terminated;
        }),
        (n.delete = function () {
          (e.prototype.delete.call(this),
            this.getCollection().remove(this.id),
            this.participants.delete(),
            o("WAWebGroupMetadataGetters").clearGroupMetadataGetterCacheFor(
              this,
            ),
            o(
              "WAWebFrontendGroupMetadataGetters",
            ).clearFrontendGroupMetadataGetterCacheFor(this));
        }),
        (n.canSetSubject = function () {
          return this.isSuspendedOrTerminated() ||
            o("WAWebGroupMetadataGetters").getGroupType(this) ===
              o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            ? !1
            : o("WAWebGroupMetadataGetters").getGroupType(this) ===
                o("WAWebGroupType").GroupType.COMMUNITY
              ? this.participants.iAmAdmin()
              : this.participants.iAmMember()
                ? this.participants.iAmAdmin()
                  ? !this.support
                  : this.restrict === !0
                    ? !1
                    : !this.support
                : !1;
        }),
        (n.canSetDescription = function () {
          return !this.participants.iAmMember() ||
            (!this.participants.iAmAdmin() && this.restrict) ||
            this.isSuspendedOrTerminated() ||
            ((o("WAWebGroupMetadataGetters").getGroupType(this) ===
              o("WAWebGroupType").GroupType.COMMUNITY ||
              o("WAWebGroupMetadataGetters").getGroupType(this) ===
                o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP) &&
              !this.participants.iAmAdmin())
            ? !1
            : !this.support;
        }),
        (n.canSetGroupProperty = function () {
          return this.isSuspendedOrTerminated() ||
            o("WAWebGroupMetadataGetters").getGroupType(this) ===
              o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            ? !1
            : this.participants.iAmAdmin()
              ? !this.support
              : !1;
        }),
        (n.userCanSetEphemeralSetting = function (t) {
          var e = !this.support;
          if (this.isSuspendedOrTerminated()) return !1;
          if (t.isUser()) {
            if (!this.participants.userIsMember(t)) return !1;
            if (this.participants.userIsAdmin(t)) return e;
          }
          return this.restrict ||
            o("WAWebGroupMetadataGetters").getGroupType(this) ===
              o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
            ? !1
            : e;
        }),
        (n.canSetEphemeralSetting = function () {
          var e = this;
          return o("WAWebUserPrefsMeUser")
            .getMeDeviceWids()
            .some(function (t) {
              return e.userCanSetEphemeralSetting(
                o("WAWebWidFactory").asUserWidOrThrow(t),
              );
            });
        }),
        (n.initialize = function () {
          var e = this;
          o("WAWebBaseModel").BaseModel.prototype.initialize.call(this);
          var t = function () {
            (e.isTrusted(), e.$GroupMetadata$p_3());
          };
          (this.listenTo(this.participants, "change:isAdmin", t),
            this.listenTo(this.participants, "change:isSuperAdmin", t),
            this.listenTo(this.participants, "change:contact.isMyContact", t),
            this.listenTo(this.participants, "sort", t),
            this.listenTo(this.participants, "remove", t),
            this.listenTo(this.participants, "reset", t));
          for (var n of ["bulk_add", "bulk_remove", "reset"])
            this.listenTo(this.participants, n, this.triggerParticipantsChange);
          (this.listenTo(this, "change:owner", this.isTrusted),
            this.listenTo(
              this,
              "change:isParentGroup",
              this.$GroupMetadata$p_4,
            ),
            this.listenTo(this, "change:desc", this.$GroupMetadata$p_3),
            this.listenTo(this, "change:parentGroup", this.$GroupMetadata$p_3),
            this.listenTo(
              this,
              "change:isParentGroup",
              this.$GroupMetadata$p_3,
            ),
            this.listenTo(
              this,
              "change:defaultSubgroup",
              this.$GroupMetadata$p_3,
            ),
            this.listenTo(
              this,
              "change:generalSubgroup",
              this.$GroupMetadata$p_3,
            ),
            this.$GroupMetadata$p_3(),
            this.isTrusted(),
            (this.$GroupMetadata$p_1 = this.$GroupMetadata$p_5()),
            this.listenTo(
              this.participants,
              "change:contact.shortName",
              this.$GroupMetadata$p_6,
            ),
            (this.uniqueShortNameMap = new Map()),
            o("WAWebGroupMetadataGetters").getGroupType(this) ===
              o("WAWebGroupType").GroupType.COMMUNITY &&
              this.$GroupMetadata$p_4());
        }),
        (n.$GroupMetadata$p_6 = function () {
          var e;
          (e = this.$GroupMetadata$p_1) == null ||
            e.debounce(t.UPDATE_NAME_MAP_DEBOUNCE_TIME);
        }),
        (n.triggerParticipantsChange = function () {
          if (o("WAWebMiscGatingUtils").isDropLastNameEnabled()) {
            var e;
            (e = this.$GroupMetadata$p_1) == null ||
              e.debounce(t.UPDATE_NAME_MAP_DEBOUNCE_TIME);
          }
          this.trigger("change:participants");
        }),
        (n.$GroupMetadata$p_5 = function () {
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
        (n.$GroupMetadata$p_7 = function () {
          return this.participants.some(function (e) {
            return (
              e.isAdmin &&
              o("WAWebFrontendContactGetters").getIsMyContact(e.contact)
            );
          });
        }),
        (n.$GroupMetadata$p_8 = function () {
          return (
            o("WAWebOrgMemberContactName").getKnownOrgMember(this.owner) !=
              null ||
            o("WAWebOrgMemberContactName").getKnownOrgMember(this.groupAdder) !=
              null ||
            this.participants.some(function (e) {
              return (
                e.isAdmin &&
                o("WAWebOrgMemberContactName").getKnownOrgMember(e.id) != null
              );
            })
          );
        }),
        (n.isTrusted = function () {
          if (this.stale) return this.trusted;
          if (this.support) return (this.trusted = !0);
          if (this.owner) {
            if (o("WAWebUserPrefsMeUser").isMeAccount(this.owner))
              return (this.trusted = !0);
            var e = o("WAWebContactCollection").ContactCollection.get(
              this.owner,
            );
            if (e != null && o("WAWebFrontendContactGetters").getIsMyContact(e))
              return (this.trusted = !0);
          }
          if (this.groupAdder != null) {
            var t = o("WAWebContactCollection").ContactCollection.get(
              this.groupAdder,
            );
            if (t != null && o("WAWebFrontendContactGetters").getIsMyContact(t))
              return (this.trusted = !0);
          }
          return (this.trusted =
            this.$GroupMetadata$p_7() || this.$GroupMetadata$p_8());
        }),
        (n.hasJoined = function () {
          var e = this.id,
            t = this.joinedSubgroups,
            n = o("WAWebGroupMetadataGetters").getGroupType(this);
          if (n === o("WAWebGroupType").GroupType.COMMUNITY)
            return t.length > 0;
          var r = o("WAWebChatCollection").ChatCollection.get(e);
          return r ? r.isReadOnly === !1 : !1;
        }),
        (n.$GroupMetadata$p_3 = function () {
          o("WAWebGroupMetadataGetters").getGroupType(this) ===
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
        (n.$GroupMetadata$p_4 = function () {
          (o("WAWebUpdateSubgroupsCommunityAction").updateJoinedSubgroups(this),
            o("WAWebUpdateSubgroupsCommunityAction").updateUnjoinedSubgroups(
              this,
            ));
        }),
        (n.getJoinedSubgroupsMetadata = function () {
          var e = this.getCollection();
          return r("compactMap")(this.joinedSubgroups, function (t) {
            return e.get(t.toString());
          });
        }),
        (n.getJoinedSubgroupsChat = function () {
          return r("compactMap")(this.joinedSubgroups, function (e) {
            return o("WAWebChatCollection").ChatCollection.get(e.toString());
          });
        }),
        (n.getUnjoinedSubgroupsMetadata = function () {
          return r("compactMap")(this.unjoinedSubgroups, function (e) {
            return r("WAWebUnjoinedSubgroupMetadataCollection").get(
              e.toString(),
            );
          });
        }),
        (n.getSubgroupsMetadata = function () {
          return [].concat(
            this.getJoinedSubgroupsMetadata(),
            this.getUnjoinedSubgroupsMetadata(),
          );
        }),
        (n.getSubgroupSuggestions = function () {
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
        (n.getParentGroupChat = function () {
          var e = this.parentGroup;
          if (e) return o("WAWebChatCollection").ChatCollection.get(e);
        }),
        (n.isParentGroupParticipant = function () {
          var e = this.parentGroup;
          if (!e) return !1;
          var t = this.getCollection().get(e);
          return !!(t != null && t.joinedSubgroups.length);
        }),
        (n.getCollection = function () {
          return r("WAWebGroupMetadataCollection");
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "groupMetadata"),
      (e.idClass = r("WAWebWid")),
      (e.UPDATE_NAME_MAP_DEBOUNCE_TIME = 200));
    var u = o("WAWebBaseModel").defineModel(e);
    l.default = u;
  },
  226,
);
