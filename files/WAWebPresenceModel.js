__d(
  "WAWebPresenceModel",
  [
    "fbt",
    "WAArraysShallowEqual",
    "WALogger",
    "WAWebBaseCollection",
    "WAWebBaseModel",
    "WAWebChatAssignmentCollection",
    "WAWebChatAssignmentUtils",
    "WAWebChatCollection",
    "WAWebChatContactUtils",
    "WAWebChatGetters",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupGatingUtils",
    "WAWebGroupType",
    "WAWebPresenceCollection",
    "WAWebPresenceEnum",
    "WAWebPresenceOrder",
    "WAWebPrivacyGatingUtils",
    "WAWebTextStatusGatingUtils",
    "WAWebWid",
    "WAWebWidFormat",
    "lodash",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d = 3e3,
      m = 5e3,
      p = 2e3,
      _ = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.id = o("WAWebBaseModel").prop()),
            (t.type = o("WAWebBaseModel").prop()),
            (t.t = o("WAWebBaseModel").prop()),
            (t.deny = o("WAWebBaseModel").prop()),
            (t.updateTime = o("WAWebBaseModel").session()),
            (t.expireTimerId = o("WAWebBaseModel").session()),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })((c = o("WAWebBaseModel")).BaseModel);
    ((_.Proxy = "chatstate"), (_.idClass = r("WAWebWid")));
    var f = c.defineModel(_),
      g = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebBaseCollection").BaseCollection);
    g.model = f;
    var h = (function (t) {
      function n() {
        for (var e, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
          a[i] = arguments[i];
        return (
          (e = t.call.apply(t, [this].concat(a)) || this),
          (e.id = o("WAWebBaseModel").prop()),
          (e.isOnline = o("WAWebBaseModel").session(!1)),
          (e.stale = o("WAWebBaseModel").session(!0)),
          (e.hasData = o("WAWebBaseModel").session(!1)),
          (e.isSubscribed = o("WAWebBaseModel").session(!1)),
          (e.withholdDisplayStage = o("WAWebBaseModel").session(
            o("WAWebPresenceEnum").WithholdDisplayStage.None,
          )),
          (e.forceDisplay = o("WAWebBaseModel").session(!1)),
          (e.chatActive = o("WAWebBaseModel").session(!1)),
          (e.withholdDisplayTimer = o("WAWebBaseModel").session()),
          (e.forceDisplayTimer = o("WAWebBaseModel").session()),
          (e.chatstate = o("WAWebBaseModel").session()),
          (e.typingUserIds = o("WAWebBaseModel").session(function () {
            return [];
          })),
          (e.recordingUserIds = o("WAWebBaseModel").session(function () {
            return [];
          })),
          (e.chatstates = o("WAWebBaseModel").collection(g)),
          (e.isGroup = o("WAWebBaseModel").derived(function () {
            return r("WAWebWid").isGroup(this.id);
          })),
          (e.isUser = o("WAWebBaseModel").derived(function () {
            return r("WAWebWid").isUser(this.id);
          })),
          babelHelpers.assertThisInitialized(e) ||
            babelHelpers.assertThisInitialized(e)
        );
      }
      babelHelpers.inheritsLoose(n, t);
      var a = n.prototype;
      return (
        (a.initialize = function () {
          var e = this;
          t.prototype.initialize.call(this);
          var n = this.isGroup
            ? { id: "", type: "unavailable" }
            : { id: this.id };
          (this.addChild("chatstate", new f(n)),
            this.isGroup
              ? this.listenTo(
                  this.chatstates,
                  "add change",
                  r("lodash").debounce(function () {
                    var t,
                      n = !1,
                      a = [],
                      i = [];
                    e.chatstates.forEach(function (e) {
                      ((e.type === "typing" || e.type === "recording_audio") &&
                        (e.type === "typing"
                          ? a.push({ id: e.id, updateTime: e.updateTime })
                          : i.push({ id: e.id, updateTime: e.updateTime }),
                        (!t || t.updateTime < e.updateTime) && (t = e)),
                        (n = n || e.type === "available"));
                    });
                    var l = a
                        .sort(function (e, t) {
                          return e.updateTime - t.updateTime;
                        })
                        .map(function (e) {
                          return e.id;
                        }),
                      s = i
                        .sort(function (e, t) {
                          return e.updateTime - t.updateTime;
                        })
                        .map(function (e) {
                          return e.id;
                        }),
                      u = o(
                        "WAWebGroupGatingUtils",
                      ).isGroupTypingIndicatorEnabled()
                        ? o("WAWebPresenceOrder").preserveUserOrder(
                            e.typingUserIds,
                            l,
                          )
                        : l,
                      c = o(
                        "WAWebGroupGatingUtils",
                      ).isGroupTypingIndicatorEnabled()
                        ? o("WAWebPresenceOrder").preserveUserOrder(
                            e.recordingUserIds,
                            s,
                          )
                        : s,
                      d = !r("WAArraysShallowEqual")(u, e.typingUserIds),
                      m = !r("WAArraysShallowEqual")(c, e.recordingUserIds);
                    ((d || m || e.isOnline !== n) &&
                      e.set({
                        isOnline: n,
                        typingUserIds: u,
                        recordingUserIds: c,
                      }),
                      e.chatstate.set({
                        id: t ? t.id : "",
                        type: t ? t.type : "unavailable",
                      }));
                  }),
                )
              : this.listenTo(this.chatstate, "change:type", function () {
                  e.chatstate.type === "available"
                    ? (e.isOnline = !0)
                    : e.chatstate.type === "unavailable" && (e.isOnline = !1);
                }),
            this.listenTo(this, "change:chatActive", this.$PresenceImpl$p_1));
        }),
        (a.delete = function () {
          (t.prototype.delete.call(this),
            this.getCollection().remove(this.id),
            this.chatstate.delete(),
            this.chatstates.forEach(function (e) {
              return e.delete();
            }));
        }),
        (a.reset = function () {
          ((this.hasData = !1),
            this.isGroup
              ? this.chatstates.forEach(function (e) {
                  e.type = "unavailable";
                })
              : this.isUser &&
                (this.chatstate.unset("t"), this.chatstate.unset("deny")),
            this.chatstate.set({
              id: this.isGroup ? "" : this.id,
              type: "unavailable",
              t: void 0,
              deny: void 0,
            }));
        }),
        (a.isActive = function () {
          var e = this.chatstate.type;
          return this.hasData && (e === "typing" || e === "recording_audio");
        }),
        (a.getGroupSubtitleText = function (n) {
          var t;
          if (!this.hasData) return null;
          if (!this.isGroup)
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "getGroupSubtitleText: presence not a group",
                    ])),
                )
                .sendLogs("getGroupSubtitleText-not-group"),
              null
            );
          var r =
            (t = n == null ? void 0 : n.elevatedPushNamesEnabled) != null
              ? t
              : !1;
          return b(
            this.chatstate.type,
            this.typingUserIds,
            this.recordingUserIds,
            r,
          );
        }),
        (a.$PresenceImpl$p_2 = function () {
          var e = this.chatstate.id;
          return e
            ? o("WAWebContactCollection").ContactCollection.get(e)
            : null;
        }),
        (a.getUserSubtitleText = function (t) {
          if ((t === void 0 && (t = !1), !this.hasData)) return null;
          if (!this.isUser)
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "getUserSubtitleText is used when presence is not for a user",
                    ])),
                )
                .sendLogs("getUserSubtitleText-not-user"),
              null
            );
          var e = this.chatstate;
          switch (e.type) {
            case "available":
              return s._(/*BTDS*/ "online");
            case "typing":
              return t ? s._(/*BTDS*/ "online") : s._(/*BTDS*/ "typing\u2026");
            case "recording_audio":
              return t
                ? s._(/*BTDS*/ "online")
                : s._(/*BTDS*/ "recording audio\u2026");
            case "unavailable":
              return e.deny || e.t == null
                ? null
                : o("WAWebClock").Clock.lastSeenStr(e.t);
          }
        }),
        (a.getFormattedString = function (t) {
          if (this.hasData) {
            if (this.isGroup) {
              var e = this.getGroupSubtitleText(t);
              if (e != null) return { text: e.text, ariaLabel: e.ariaLabel };
            } else if (this.isUser) return { text: this.getUserSubtitleText() };
          } else return null;
          return null;
        }),
        (a.getGroupStages = function (t) {
          var e,
            n,
            r,
            a,
            i = [];
          return (
            ((e = t.groupMetadata) == null ? void 0 : e.groupType) ===
              o("WAWebGroupType").GroupType.LINKED_SUBGROUP &&
              (n = t.groupMetadata) != null &&
              n.participants.iAmMember() &&
              i.push(o("WAWebPresenceEnum").WithholdDisplayStage.CommunityName),
            t != null &&
            (r = t.groupMetadata) != null &&
            r.participants.iAmAdmin() &&
            (a = t.groupMetadata) != null &&
            a.announce
              ? (i.push(
                  o("WAWebPresenceEnum").WithholdDisplayStage.OnlyAdminsCanSend,
                ),
                o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2Enabled() &&
                  t != null &&
                  o("WAWebFrontendChatGetters").getIsE2ee(t) &&
                  i.push(o("WAWebPresenceEnum").WithholdDisplayStage.E2EE))
              : o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2Enabled() &&
                  t != null &&
                  o("WAWebFrontendChatGetters").getIsE2ee(t)
                ? i.push(o("WAWebPresenceEnum").WithholdDisplayStage.E2EE)
                : i.push(o("WAWebPresenceEnum").WithholdDisplayStage.Info),
            o(
              "WAWebTextStatusGatingUtils",
            ).receiveTextStatusForNewSurfacesEnabled() &&
              i.push(o("WAWebPresenceEnum").WithholdDisplayStage.LastSeen),
            i.push(o("WAWebPresenceEnum").WithholdDisplayStage.None),
            i
          );
        }),
        (a.$PresenceImpl$p_1 = function () {
          var e = this,
            t = this.chatActive;
          if (t) {
            var n =
                o(
                  "WAWebChatAssignmentCollection",
                ).ChatAssignmentCollection.getAgentCollectionForChatId(this.id)
                  .length > 0,
              r = this.$PresenceImpl$p_2(),
              a = r && o("WAWebContactGetters").getIsMe(r),
              i = [],
              l = o("WAWebChatCollection").ChatCollection.get(this.id);
            (l != null && o("WAWebChatGetters").getIsGroup(l)
              ? (i = this.getGroupStages(l))
              : a === !0
                ? (o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2Enabled() &&
                    l != null &&
                    o("WAWebFrontendChatGetters").getIsE2ee(l) &&
                    i.push(o("WAWebPresenceEnum").WithholdDisplayStage.E2EE),
                  i.push(o("WAWebPresenceEnum").WithholdDisplayStage.Self),
                  y(this, i))
                : this.hasData
                  ? (o("WAWebChatAssignmentUtils").canAssignChat(l) &&
                      n &&
                      i.push(
                        o("WAWebPresenceEnum").WithholdDisplayStage
                          .ChatAssignment,
                      ),
                    (r == null ? void 0 : r.isBusiness) === !0 &&
                      i.push(
                        o("WAWebPresenceEnum").WithholdDisplayStage.Business,
                      ),
                    o(
                      "WAWebTextStatusGatingUtils",
                    ).receiveTextStatusForNewSurfacesEnabled() &&
                      i.push(
                        o("WAWebPresenceEnum").WithholdDisplayStage.LastSeen,
                      ),
                    i.length > 0 ||
                      (o(
                        "WAWebTextStatusGatingUtils",
                      ).receiveTextStatusForNewSurfacesEnabled() &&
                        i.push(
                          o("WAWebPresenceEnum").WithholdDisplayStage.LastSeen,
                        )),
                    i.push(o("WAWebPresenceEnum").WithholdDisplayStage.None))
                  : (o("WAWebChatAssignmentUtils").canAssignChat(l) &&
                      n &&
                      i.push(
                        o("WAWebPresenceEnum").WithholdDisplayStage
                          .ChatAssignment,
                      ),
                    (r == null ? void 0 : r.isBusiness) === !0 &&
                      i.push(
                        o("WAWebPresenceEnum").WithholdDisplayStage.Business,
                      ),
                    o("WAWebPrivacyGatingUtils").isDataPrivacyPhase2Enabled() &&
                    l != null &&
                    o("WAWebFrontendChatGetters").getIsE2ee(l)
                      ? i.push(o("WAWebPresenceEnum").WithholdDisplayStage.E2EE)
                      : i.push(
                          o("WAWebPresenceEnum").WithholdDisplayStage.Info,
                        ),
                    o(
                      "WAWebTextStatusGatingUtils",
                    ).receiveTextStatusForNewSurfacesEnabled() &&
                      i.push(
                        o("WAWebPresenceEnum").WithholdDisplayStage.LastSeen,
                      ),
                    i.push(o("WAWebPresenceEnum").WithholdDisplayStage.None)),
              y(this, i),
              (this.forceDisplayTimer = self.setTimeout(function () {
                e.set({ forceDisplay: !0, forceDisplayTimer: void 0 });
              }, p)));
          } else
            (this.withholdDisplayTimer &&
              (self.clearTimeout(this.withholdDisplayTimer),
              (this.withholdDisplayTimer = void 0)),
              this.forceDisplayTimer &&
                (self.clearTimeout(this.forceDisplayTimer),
                (this.forceDisplayTimer = void 0)));
        }),
        (a.subscribe = function () {
          return this.getCollection().find(this.id);
        }),
        (a.getCollection = function () {
          return o("WAWebPresenceCollection").PresenceCollection;
        }),
        n
      );
    })(c.BaseModel);
    ((h.Proxy = "presence"), (h.idClass = r("WAWebWid")));
    function y(e, t) {
      if (t.length !== 0) {
        var n = t[0],
          r = babelHelpers.arrayLikeToArray(t).slice(1);
        e.set({
          withholdDisplayStage: n,
          withholdDisplayTimer:
            n === o("WAWebPresenceEnum").WithholdDisplayStage.None
              ? null
              : self.setTimeout(
                  function () {
                    y(e, r);
                  },
                  n === o("WAWebPresenceEnum").WithholdDisplayStage.Business
                    ? m
                    : d,
                ),
        });
      }
    }
    var C = c.defineModel(h);
    function b(e, t, n, r) {
      if (e === "typing" && t.length > 0) return v(t, r);
      if (e === "recording_audio" && n.length > 0) {
        var o = S(n[n.length - 1], r),
          a = o.accessibleName,
          i = o.name;
        return {
          text: s._(/*BTDS*/ "{member} is recording audio\u2026", [
            s._param("member", i),
          ]),
          ariaLabel: s._(/*BTDS*/ "{member} is recording audio\u2026", [
            s._param("member", a),
          ]),
        };
      }
      return null;
    }
    function v(e, t) {
      var n = S(e[e.length - 1], t),
        r = n.accessibleName,
        a = n.name,
        i = e.length;
      if (
        i === 1 ||
        !o("WAWebGroupGatingUtils").isGroupTypingIndicatorEnabled()
      )
        return {
          text: s._(/*BTDS*/ "{member} is typing\u2026", [
            s._param("member", a),
          ]),
          ariaLabel: s._(/*BTDS*/ "{member} is typing\u2026", [
            s._param("member", r),
          ]),
        };
      var l = o("WAWebGroupGatingUtils").getGroupTypingIndicatorVariant();
      if (l === o("WAWebGroupGatingUtils").GROUP_TYPING_VARIANT.SHOW_COUNT_ONLY)
        return {
          text: s._(/*BTDS*/ "{count} people typing\u2026", [
            s._param("count", i),
          ]),
          ariaLabel: s._(/*BTDS*/ "{count} people are typing", [
            s._param("count", i),
          ]),
        };
      var u = i - 1;
      return u === 1
        ? {
            text: s._(/*BTDS*/ "{name} & 1 other typing\u2026", [
              s._param("name", a),
            ]),
            ariaLabel: s._(/*BTDS*/ "{name} and 1 other are typing", [
              s._param("name", r),
            ]),
          }
        : {
            text: s._(/*BTDS*/ "{name} & {count} others typing\u2026", [
              s._param("name", a),
              s._param("count", u),
            ]),
            ariaLabel: s._(/*BTDS*/ "{name} and {count} others are typing", [
              s._param("name", r),
              s._param("count", u),
            ]),
          };
    }
    function S(e, t) {
      var n = o("WAWebContactCollection").ContactCollection.get(e);
      if (n == null) {
        var r = o("WAWebWidFormat").widToFormattedUser(e);
        return { name: r, accessibleName: r };
      }
      if (o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(n) && t) {
        var a = o("WAWebContactGetters").getNotifyName(n);
        return {
          name: o("WAWebChatContactUtils").getFormattedNotifyName(a),
          accessibleName: o("WAWebChatContactUtils").getAccessibleNotifyName(a),
        };
      }
      var i = o("WAWebFrontendContactGetters").getFormattedShortName(n);
      return { name: i, accessibleName: i };
    }
    ((l.processStagesRecursively = y),
      (l.Presence = C),
      (l.Chatstate = f),
      (l.ChatstateCollection = g));
  },
  226,
);
