__d(
  "WAWebParticipantListUtils",
  [
    "fbt",
    "WAWebAlphaRegex",
    "WAWebApiContact",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProduct",
    "WAWebBotProfileCollection",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatContactUtils",
    "WAWebCompactMapString",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebElevatedPushNamesFlag",
    "WAWebFbtCommon",
    "WAWebFbtIntlList",
    "WAWebFrontendContactGetters",
    "WAWebGroupAgentProfileRouting",
    "WAWebMiscGatingUtils",
    "WAWebWidFactory",
    "WAWebWidFormat",
    "compactMap",
    "fbs",
    "isStringNullOrEmpty",
    "partitionArray",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      if (e.participants.length === 0) return s._(/*BTDS*/ "Group").toString();
      if (e.participants.length === 1) {
        var t,
          n = (t = e.participants.head()) == null ? void 0 : t.contact;
        if (n != null && o("WAWebContactGetters").getIsMe(n))
          return r("WAWebFbtCommon")("You").toString();
      }
      var a = c(e, !0);
      if (a.length === 1) return a[0];
      if (a.length <= 3)
        return r("WAWebFbtIntlList")(
          a,
          r("WAWebFbtIntlList").CONJUNCTIONS.AND,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ).toString();
      if (a.length >= 4) {
        var i = a[0],
          l = s
            ._(
              /*BTDS*/ '_j{"*":"{other_participants} others","_1":"1 other"}',
              [s._plural(a.length - 1, "other_participants")],
            )
            .toString();
        return r("WAWebFbtIntlList")(
          [i, l],
          r("WAWebFbtIntlList").CONJUNCTIONS.AND,
        ).toString();
      }
      return a.join();
    }
    function u(e, t, n) {
      if (
        (t === void 0 && (t = !1),
        n === void 0 && (n = !1),
        e.participants.length === 0)
      )
        return n
          ? r("fbs")._(/*BTDS*/ "Waiting for others to join").toString()
          : r("fbs")._(/*BTDS*/ "Group").toString();
      if (e.participants.length === 1) {
        var a,
          i = (a = e.participants.head()) == null ? void 0 : a.contact;
        if (i != null && o("WAWebContactGetters").getIsMe(i))
          return r("WAWebFbtCommon")("You").toString();
      }
      var l = c(e, t);
      if (l.length === 1) return l[0];
      var s = r("WAWebFbtIntlList")(
        l,
        r("WAWebFbtIntlList").CONJUNCTIONS.AND,
        r("WAWebFbtIntlList").DELIMITERS.COMMA,
      );
      return s.toString();
    }
    function c(e, t, n) {
      (t === void 0 && (t = !1), n === void 0 && (n = !0));
      var a,
        i = e.participants.length;
      t
        ? (a = e.participants.filter(function (e) {
            return !o("WAWebContactGetters").getIsMe(e.contact);
          }))
        : (a = e.participants);
      var l = a.filter(function (e) {
          return o("WAWebFrontendContactGetters").getIsMyContact(e.contact);
        }),
        s = r("partitionArray")(
          a.filter(function (e) {
            return !o("WAWebFrontendContactGetters").getIsMyContact(e.contact);
          }),
          function (e) {
            return (
              o("WAWebFrontendContactGetters").getShownOrgMemberName(
                e.contact,
              ) != null
            );
          },
        ),
        u = s[0],
        c = s[1],
        m = [];
      o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabledFor({
        isGroup: !0,
        isCAG: !1,
        participantCount: i,
      }) &&
        (m = c.filter(function (e) {
          return o("WAWebContactGetters").getNotifyName(e.contact) != null;
        }));
      var _ = c.filter(function (e) {
          return !m.includes(e);
        }),
        f = _,
        g = [];
      o("WAWebMiscGatingUtils").isDropLastNameEnabled()
        ? (g = l.map(function (t) {
            var n = t.contact;
            return e.hasUniqueShortNameMention(n)
              ? o(
                  "WAWebFrontendContactGetters",
                ).getFormattedShortNameWithNonBreakingSpaces(n)
              : o("WAWebFrontendContactGetters")
                  .getFormattedName(n)
                  .replace(/\s/g, " ");
          }))
        : (g = l.map(function (e) {
            var t = n
              ? o(
                  "WAWebFrontendContactGetters",
                ).getFormattedShortNameWithNonBreakingSpaces(e.contact)
              : o("WAWebFrontendContactGetters").getFormattedName(e.contact);
            return t === "" && e.contact.name ? e.contact.name : t;
          }));
      var h = o("WAWebMiscGatingUtils").isDropLastNameEnabled(),
        y = m.map(function (e) {
          return d(e.contact, h, n);
        }),
        C = r("WAWebCompactMapString")(u, function (e) {
          var t;
          return o("WAWebMiscGatingUtils").isDropLastNameEnabled()
            ? (t = o("WAWebFrontendContactGetters").getShownOrgMemberName(
                e.contact,
              )) == null
              ? void 0
              : t.replace(/\s/g, " ")
            : p(e.contact);
        }),
        b = f.map(function (e) {
          return o("WAWebFrontendContactGetters").getFormattedName(e.contact);
        });
      return g.concat(C).sort().concat(y.sort().concat(b.sort()));
    }
    function d(e, t, n) {
      var r = o("WAWebContactGetters").getNotifyName(e);
      if (t) {
        var a = (
          r != null ? r : o("WAWebFrontendContactGetters").getFormattedName(e)
        ).replace(/\s/g, " ");
        return o("WAWebChatContactUtils").getFormattedNotifyName(a, !1) || "~";
      }
      var i =
        r != null
          ? r
          : n
            ? o(
                "WAWebFrontendContactGetters",
              ).getFormattedShortNameWithNonBreakingSpaces(e)
            : o("WAWebFrontendContactGetters").getFormattedName(e);
      return o("WAWebChatContactUtils").getFormattedNotifyName(_(i), !1) || "~";
    }
    function m(e) {
      var t = o(
        "WAWebFrontendContactGetters",
      ).getFormattedShortNameWithNonBreakingSpaces(e);
      return e.id.isBot() ? t : _(t);
    }
    function p(e) {
      var t = o("WAWebFrontendContactGetters").getShownOrgMemberName(e);
      if (t == null) return null;
      if (r("isStringNullOrEmpty")(e.orgMemberName)) return _(t);
      var n = e.orgMemberFirstName;
      return r("isStringNullOrEmpty")(n) ? t : n;
    }
    function _(e) {
      var t = e.split(/\s/),
        n = t[0];
      return r("WAWebAlphaRegex").exec(n) ? n : e;
    }
    function f(e) {
      var t = y(e);
      return t == null
        ? null
        : t.museAgentIds.length > 0
          ? t.otherAgentIds.length === 0
            ? "muse"
            : "aiAgents"
          : t.hasThirdPartyAgent
            ? "aiAgents"
            : null;
    }
    function g(e, t) {
      var n = h(
        e.map(function (e) {
          return e.id;
        }),
      );
      return n == null
        ? C(e, t)
        : [n.label].concat(
            C(
              e.filter(function (e) {
                return !n.replacedAgentIds.has(e.id);
              }),
              t,
            ),
          );
    }
    function h(e) {
      var t = y(e);
      if (t == null) return null;
      var n = t.museAgentIds,
        r = t.otherAgentIds;
      return n.length === 0
        ? null
        : r.length === 0
          ? {
              label: s._(/*BTDS*/ "Muse").toString(),
              replacedAgentIds: new Set(n),
            }
          : {
              label: s._(/*BTDS*/ "AI agents").toString(),
              replacedAgentIds: new Set([].concat(n, r)),
            };
    }
    function y(e) {
      if (
        !o("WAWebBotGroupGatingUtils").isStandardBotProfileGroupEnabled() ||
        !o("WAWebBotGroupGatingUtils").isMuseGroupAgentRenderingEnabled()
      )
        return null;
      var t = [],
        n = [],
        r = !1;
      return (
        e.forEach(function (e) {
          if (o("WAWebBotUtils").isWidOpenGroupMetaBotFbidWid(e)) {
            n.push(e);
            return;
          }
          if (o("WAWebBotUtils").isWidStandardGroupAgentFbidWid(e)) {
            var a = o("WAWebBotProfileCollection").BotProfileCollection.get(e);
            if (
              !(
                (a == null ? void 0 : a.lastFetchedTimeMs) == null ||
                a.isDeleted === !0 ||
                a.isDeprecated === !0
              )
            ) {
              var i = o("WAWebBotProduct").botProductFromServerValue(a.product);
              o("WAWebGroupAgentProfileRouting").isMuseGroupAgentProfileProduct(
                e,
                i,
              )
                ? t.push(e)
                : i === o("WAWebBotProduct").BotProduct.THIRD_PARTY &&
                  (n.push(e), (r = !0));
            }
          }
        }),
        { hasThirdPartyAgent: r, museAgentIds: t, otherAgentIds: n }
      );
    }
    function C(e, t) {
      var n = e,
        a = r("partitionArray")(n, function (e) {
          return o("WAWebContactGetters").getIsMe(e.contact);
        }),
        i = a[0],
        l = a[1];
      n = l.concat(i);
      var s = o("WAWebChatCollection").ChatCollection.get(t.id),
        u =
          s != null &&
          o("WAWebElevatedPushNamesFlag").elevatedPushNamesEnabled(s);
      if (
        o("WAWebMiscGatingUtils").isDropLastNameEnabled() &&
        t.isOpenBotGroup !== !0 &&
        t.isTeeBotGroup !== !0
      )
        return r("compactMap")(n, function (e) {
          var n = e.contact,
            r = o("WAWebFrontendContactGetters").getShownOrgMemberName(n);
          if (r != null) return r.replace(/\s/g, " ");
          if (t.hasUniqueShortNameMention(n))
            return o(
              "WAWebFrontendContactGetters",
            ).getFormattedShortNameWithNonBreakingSpaces(n);
          var a = b(n, u);
          return a != null
            ? a
            : o("WAWebFrontendContactGetters")
                .getFormattedName(n)
                .replace(/\s/g, " ");
        });
      if (t.hasCapi === !0) {
        var c = r("partitionArray")(n, function (e) {
            return e.id.equals(t.owner);
          }),
          d = c[0],
          _ = c[1];
        n = d.concat(_);
      }
      var f = null;
      if (
        (o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() &&
        t.isOpenBotGroup === !0
          ? (f = o("WAWebBotUtils").META_BOT_FBID_WID)
          : t.isTeeBotGroup === !0 &&
            (f = o("WAWebBotUtils").META_BOT_TEE_FBID_WID),
        f != null)
      ) {
        var g = r("partitionArray")(n, function (e) {
            return e.id.equals(f);
          }),
          h = g[0],
          y = g[1];
        n = h.concat(y);
      }
      return r("WAWebCompactMapString")(n, function (e) {
        var t,
          n = e.contact,
          a = b(n, u);
        if (a != null) return a;
        var i = (t = p(n)) != null ? t : m(n);
        if (!r("isStringNullOrEmpty")(i)) return i;
        var l = o("WAWebContactGetters").getNotifyName(n);
        if (!r("isStringNullOrEmpty")(l)) return l;
        var s = o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(n);
        return r("isStringNullOrEmpty")(s) ? "" : s;
      });
    }
    function b(e, t) {
      if (
        !t ||
        !o("WAWebElevatedPushNamesFlag").pushNameCanBeUsed(e) ||
        o("WAWebFrontendContactGetters").getShownOrgMemberName(e) != null
      )
        return null;
      var n = o("WAWebContactGetters").getNotifyName(e);
      return r("isStringNullOrEmpty")(n)
        ? null
        : o("WAWebChatContactUtils").getFormattedNotifyName(n);
    }
    function v(e) {
      return g(e.participants.toArray(), e);
    }
    function S(e) {
      return C(e.participants.getAdmins(), e);
    }
    function R(e, t) {
      t === void 0 && (t = !0);
      var n = e.length;
      if (n === 0) return s._(/*BTDS*/ "Group call").toString();
      var a = e.map(function (e) {
        var n =
            e.isUser() && e.device != null && e.device !== 0
              ? o("WAWebWidFactory").asUserWidOrThrow(e)
              : e,
          a = o("WAWebContactCollection").ContactCollection.get(n),
          i = null;
        if ((a == null || !a.name) && e.isUser()) {
          if (
            ((i = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(e),
            )),
            i != null)
          ) {
            var l = o("WAWebContactCollection").ContactCollection.get(i);
            l != null && (a == null || l.name) && (a = l);
          }
          if (a != null && !a.name && a.phoneNumber) {
            var s = o("WAWebContactCollection").ContactCollection.get(
              a.phoneNumber,
            );
            s != null && s.name && (a = s);
          }
        }
        if (a == null)
          return e.isLid() && i != null
            ? o("WAWebWidFormat").widToFormattedUser(i)
            : o("WAWebWidFormat").widToFormattedUser(e);
        if (o("WAWebContactGetters").getIsMe(a))
          return r("WAWebFbtCommon")("You").toString();
        var u = t
          ? o(
              "WAWebFrontendContactGetters",
            ).getFormattedShortNameWithNonBreakingSpaces(a)
          : o("WAWebFrontendContactGetters").getFormattedName(a);
        return (
          u ||
          o("WAWebContactGetters").getNotifyName(a) ||
          o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(a) ||
          o("WAWebWidFormat").widToFormattedUser(e)
        );
      });
      if (n === 1) return a[0];
      if (n === 2)
        return s
          ._(/*BTDS*/ "{first_name} & {second_name}", [
            s._param("first_name", a[0]),
            s._param("second_name", a[1]),
          ])
          .toString();
      if (n === 3)
        return s
          ._(/*BTDS*/ "{first_name}, {second_name} & {third_name}", [
            s._param("first_name", a[0]),
            s._param("second_name", a[1]),
            s._param("third_name", a[2]),
          ])
          .toString();
      var i = a[0],
        l = n - 1,
        u = s
          ._(/*BTDS*/ '_j{"*":"{other_participants} others","_1":"1 other"}', [
            s._plural(l, "other_participants"),
          ])
          .toString();
      return s
        ._(/*BTDS*/ "{first_name} & {others}", [
          s._param("first_name", i),
          s._param("others", u),
        ])
        .toString();
    }
    ((l.calculateUnnamedGroupParticipantsList = e),
      (l.calculateUnnamedGroupFullParticipantsList = u),
      (l.getUnnamedGroupParticipantNames = c),
      (l.getFirstNameForContact = m),
      (l.getOrgMemberFirstName = p),
      (l.getGroupAgentIndicator = f),
      (l.calculateParticipantsList = v),
      (l.calculateAdminsList = S),
      (l.formatParticipantWidsPreserveOrder = R));
  },
  226,
);
