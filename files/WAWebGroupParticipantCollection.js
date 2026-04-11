__d(
  "WAWebGroupParticipantCollection",
  [
    "WAWebApiContact",
    "WAWebBotGroupGatingUtils",
    "WAWebChatCollection",
    "WAWebCollection",
    "WAWebContactCollection",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebGroupParticipantComparator",
    "WAWebGroupParticipantModel",
    "WAWebGroupType",
    "WAWebL10N",
    "WAWebProfilePicPrivacyTokenGating",
    "WAWebSchemaGroupMetadata",
    "WAWebSendForNeededAddRequest",
    "WAWebUpdateSubgroupsCommunityAction",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t(t, n) {
        var a;
        return (
          n === void 0 && (n = {}),
          (a = e.call(this, t, n) || this),
          (a.$ParticipantCollection$p_2 = function (e, t, n) {
            (a.$ParticipantCollection$p_3(e),
              o(
                "WAWebProfilePicPrivacyTokenGating",
              ).isProfilePicIQPrivacyTokenEnabled() &&
                n.add === !0 &&
                a.$ParticipantCollection$p_4(e));
          }),
          (a.$ParticipantCollection$p_4 = function (e) {
            if (
              o(
                "WAWebProfilePicPrivacyTokenGating",
              ).isProfilePicIQPrivacyTokenEnabled() &&
              a.iAmMember()
            ) {
              var t = o("WAWebChatCollection").ChatCollection.get(a.parent.id);
              t &&
                (t == null ? void 0 : t.tcToken) == null &&
                (e == null ||
                  e.contact.set(
                    { maybeCommonGroupChatModel: t },
                    { isSilent: !0 },
                  ));
            }
          }),
          (a.$ParticipantCollection$p_3 = function (e) {
            var t, n;
            if (!(!e || !o("WAWebUserPrefsMeUser").isMeAccount(e.id))) {
              var r = a.parent.id,
                i = r
                  ? (t = o("WAWebChatCollection").ChatCollection.get(
                      r.toString(),
                    )) == null
                    ? void 0
                    : t.groupMetadata
                  : null,
                l =
                  i == null || (n = i.getParentGroupChat()) == null
                    ? void 0
                    : n.groupMetadata;
              l != null &&
                (a.iAmMember()
                  ? o(
                      "WAWebUpdateSubgroupsCommunityAction",
                    ).subgroupUnjoinedToJoined(l, r)
                  : o(
                      "WAWebUpdateSubgroupsCommunityAction",
                    ).subgroupJoinedToUnjoined(l, r));
            }
          }),
          (a.$ParticipantCollection$p_1 = r("lodash").debounce(function () {
            return a.sort();
          }, 1e3)),
          (a.sendForNeededAddRequest = function (e, t) {
            var n,
              r,
              i,
              l = a.getChat(),
              s = a.getGroupMetadata(),
              u = (n = s == null ? void 0 : s.desc) != null ? n : "",
              c =
                (r =
                  (i = l == null ? void 0 : l.formattedTitle) != null
                    ? i
                    : l == null
                      ? void 0
                      : l.name) != null
                  ? r
                  : "";
            o("WAWebSendForNeededAddRequest").sendForNeededAddRequest(
              {
                participants: e,
                gid: o("WAWebWidFactory").asGroupWidOrThrow(a.parent.id),
              },
              c,
              u,
              t,
            );
          }),
          a.listenTo(a, "change:contact.name", a.$ParticipantCollection$p_1),
          a.listenTo(
            r("WAWebL10N"),
            "locale_change",
            a.$ParticipantCollection$p_1,
          ),
          a.listenTo(a, "add remove", a.$ParticipantCollection$p_2),
          a
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.delete = function () {
          (this.forEach(function (e) {
            e.delete();
          }),
            this.stopListening(),
            this.reset());
        }),
        (n.ensureSorted = function () {
          this.$ParticipantCollection$p_1.flush();
        }),
        (n.set = function (n, r) {
          var t = r || {};
          t.isParticipantCollectionAdd !== !0 &&
            (t = babelHelpers.extends({}, t, { remove: !0 }));
          var o = e.prototype.set.call(this, n, t);
          return (
            this.trigger("bulk_add", o),
            t.remove === !0 && this.trigger("bulk_remove", o),
            o
          );
        }),
        (n.add = function (n, r) {
          var t = r || {};
          t = babelHelpers.extends({}, t, { isParticipantCollectionAdd: !0 });
          var o = e.prototype.add.call(this, n, t);
          return (this.trigger("bulk_add", o), o);
        }),
        (n.remove = function (n, r) {
          var t = r || {},
            o = e.prototype.remove.call(this, n, t);
          return (this.trigger("bulk_remove", o), o);
        }),
        (n.canAdd = function () {
          var e = this.getGroupMetadata();
          return (e == null ? void 0 : e.isSuspendedOrTerminated()) === !0
            ? !1
            : this.iAmAdmin()
              ? !0
              : this.iAmMember() &&
                (e == null ? void 0 : e.memberAddMode) ===
                  o("WAWebSchemaGroupMetadata").MemberAddMode.ALL_MEMBER_ADD;
        }),
        (n.canTransferOwnership = function (t) {
          var e = this.getGroupMetadata();
          return !(
            (e == null ? void 0 : e.isSuspendedOrTerminated()) === !0 ||
            o("WAWebUserPrefsMeUser").isMeAccount(t.id) ||
            !this.iAmSuperAdmin() ||
            !t.isAdmin ||
            (e == null ? void 0 : e.groupType) !==
              o("WAWebGroupType").GroupType.COMMUNITY
          );
        }),
        (n.canPromote = function (t) {
          var e,
            n = this.getGroupMetadata();
          return !(
            (n == null ? void 0 : n.isSuspendedOrTerminated()) === !0 ||
            !t ||
            o("WAWebUserPrefsMeUser").isMeAccount(t.id) ||
            !this.iAmAdmin() ||
            t.isAdmin ||
            (n != null && n.isCag) ||
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() &&
              (e = t.id) != null &&
              e.isBot())
          );
        }),
        (n.canDemote = function (t) {
          var e = this.getGroupMetadata();
          if (
            (e == null ? void 0 : e.isSuspendedOrTerminated()) === !0 ||
            !t ||
            !this.iAmAdmin() ||
            ((e == null ? void 0 : e.groupType) !==
              o("WAWebGroupType").GroupType.COMMUNITY &&
              (e == null ? void 0 : e.groupType) !==
                o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP &&
              o("WAWebUserPrefsMeUser").isMeAccount(t.id))
          )
            return !1;
          var n = t.isSuperAdmin;
          return n
            ? (e == null ? void 0 : e.groupType) ===
                o("WAWebGroupType").GroupType.COMMUNITY ||
              (e == null ? void 0 : e.groupType) ===
                o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
              ? o("WAWebUserPrefsMeUser").isMeAccount(t.id)
              : !1
            : !(
                !t.isAdmin ||
                (e == null ? void 0 : e.groupType) ===
                  o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP
              );
        }),
        (n.canRemove = function (t) {
          var e = this.getGroupMetadata();
          return !(
            (e == null ? void 0 : e.isSuspendedOrTerminated()) === !0 ||
            !t ||
            o("WAWebUserPrefsMeUser").isMeAccount(t.id) ||
            !this.iAmAdmin() ||
            (e != null && e.isCag && (t.isAdmin || t.isSuperAdmin))
          );
        }),
        (n.canVerifyIdentity = function (t) {
          var e, n;
          if (!t || o("WAWebUserPrefsMeUser").isMeAccount(t.id)) return !1;
          var r = this.getGroupMetadata();
          return !(
            ((r == null ? void 0 : r.hasCapi) === !0 &&
              t.id.toString() ===
                (r == null || (e = r.owner) == null ? void 0 : e.toString())) ||
            (o(
              "WAWebBotGroupGatingUtils",
            ).isOpenGroupBotParticipantAddEnabled() &&
              (n = t.id) != null &&
              n.isBot())
          );
        }),
        (n.userIsMember = function (t) {
          return this.isParticipantWidOrAlternateWidValid(t, function (e) {
            return e != null;
          });
        }),
        (n.userIsAdmin = function (t) {
          return this.isParticipantWidOrAlternateWidValid(t, function (e) {
            return (e == null ? void 0 : e.isAdmin) === !0;
          });
        }),
        (n.userIsSuperAdmin = function (t) {
          return this.isParticipantWidOrAlternateWidValid(t, function (e) {
            return (e == null ? void 0 : e.isSuperAdmin) === !0;
          });
        }),
        (n.isParticipantWidOrAlternateWidValid = function (t, n) {
          var e = this.get(t);
          if (n(e)) return !0;
          var r = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(t),
            ),
            a = r ? this.get(r) : null;
          return n(a);
        }),
        (n.iAmMember = function () {
          var e = this.getMeParticipant();
          return !!e;
        }),
        (n.iAmRestrictedMember = function () {
          var e = this.getGroupMetadata(),
            t = (e == null ? void 0 : e.restrict) === !0;
          return t && !this.iAmAdmin();
        }),
        (n.iAmAdmin = function () {
          var e = this.getMeParticipant();
          return (e == null ? void 0 : e.isAdmin) === !0;
        }),
        (n.iAmSuperAdmin = function () {
          var e = this.getMeParticipant();
          return (e == null ? void 0 : e.isSuperAdmin) === !0;
        }),
        (n.getAdmins = function () {
          return this.where({ isAdmin: !0 });
        }),
        (n.getSuperAdmin = function () {
          return this.findFirst(function (e) {
            return e.isSuperAdmin;
          });
        }),
        (n.getMyContacts = function () {
          return this.filter(function (e) {
            var t = o("WAWebContactCollection").ContactCollection.get(e.id);
            return (
              t != null && o("WAWebFrontendContactGetters").getIsMyContact(t)
            );
          });
        }),
        (n.getMeParticipant = function () {
          var e;
          return (e = this.get(o("WAWebUserPrefsMeUser").getMeUser())) != null
            ? e
            : this.get(o("WAWebUserPrefsMeUser").getMeLidUserOrThrow());
        }),
        (n.getChat = function () {
          var e = this.parent.id;
          return o("WAWebChatCollection").ChatCollection.get(e);
        }),
        (n.getGroupMetadata = function () {
          var e = this.parent.id;
          return r("WAWebGroupMetadataCollection").get(e);
        }),
        t
      );
    })(r("WAWebCollection"));
    ((e.model = r("WAWebGroupParticipantModel")),
      (e.comparator = r("WAWebGroupParticipantComparator")),
      (l.default = e));
  },
  98,
);
