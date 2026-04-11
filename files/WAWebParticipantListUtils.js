__d(
  "WAWebParticipantListUtils",
  [
    "fbt",
    "WAWebABProps",
    "WAWebAlphaRegex",
    "WAWebApiContact",
    "WAWebBotGroupGatingUtils",
    "WAWebBotUtils",
    "WAWebCompactMapString",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFbtIntlList",
    "WAWebFrontendContactGetters",
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
          return s._(/*BTDS*/ "You").toString();
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
          return s._(/*BTDS*/ "You").toString();
      }
      var l = c(e, t);
      if (l.length === 1) return l.pop();
      var u = r("WAWebFbtIntlList")(
        l,
        r("WAWebFbtIntlList").CONJUNCTIONS.AND,
        r("WAWebFbtIntlList").DELIMITERS.COMMA,
      );
      return u.toString();
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
        s = a.filter(function (e) {
          return !o("WAWebFrontendContactGetters").getIsMyContact(e.contact);
        }),
        u = [];
      o("WAWebABProps").getABPropConfigValue(
        "elevated_push_names_v2_m2_enabled",
      ) &&
        i >= 3 &&
        (u = s.filter(function (e) {
          return o("WAWebContactGetters").getNotifyName(e.contact) != null;
        }));
      var c = s.filter(function (e) {
          return !u.includes(e);
        }),
        d = c,
        m = [];
      o("WAWebMiscGatingUtils").isDropLastNameEnabled()
        ? (m = l.map(function (t) {
            var n = t.contact;
            return e.hasUniqueShortNameMention(n)
              ? o(
                  "WAWebFrontendContactGetters",
                ).getFormattedShortNameWithNonBreakingSpaces(n)
              : o("WAWebFrontendContactGetters")
                  .getFormattedName(n)
                  .replace(/\s/g, " ");
          }))
        : (m = l.map(function (e) {
            var t = n
              ? o(
                  "WAWebFrontendContactGetters",
                ).getFormattedShortNameWithNonBreakingSpaces(e.contact)
              : o("WAWebFrontendContactGetters").getFormattedName(e.contact);
            return t === "" && e.contact.name ? e.contact.name : t;
          }));
      var p = [];
      o("WAWebMiscGatingUtils").isDropLastNameEnabled()
        ? (p = u.map(function (e) {
            var t = e.contact,
              n = o("WAWebContactGetters").getNotifyName(t),
              r =
                n != null
                  ? n
                  : o("WAWebFrontendContactGetters").getFormattedName(t);
            return "~" + r.replace(/\s/g, " ");
          }))
        : (p = u.map(function (e) {
            var t = o("WAWebContactGetters").getNotifyName(e.contact),
              a;
            t != null
              ? (a = t)
              : n
                ? (a = o(
                    "WAWebFrontendContactGetters",
                  ).getFormattedShortNameWithNonBreakingSpaces(e.contact))
                : (a = o("WAWebFrontendContactGetters").getFormattedName(
                    e.contact,
                  ));
            var i = a.split(/\s/),
              l = i[0];
            return "~" + (r("WAWebAlphaRegex").exec(l) ? l : a);
          }));
      var _ = d.map(function (e) {
        return o("WAWebFrontendContactGetters").getFormattedName(e.contact);
      });
      return m.sort().concat(p.sort().concat(_.sort()));
    }
    function d(e) {
      var t = o(
        "WAWebFrontendContactGetters",
      ).getFormattedShortNameWithNonBreakingSpaces(e);
      if (
        o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() &&
        e.id.isBot()
      )
        return t;
      var n = t.split(/\s/),
        a = n[0];
      return r("WAWebAlphaRegex").exec(a) ? a : t;
    }
    function m(e, t) {
      var n = e,
        a = r("partitionArray")(n, function (e) {
          return o("WAWebContactGetters").getIsMe(e.contact);
        }),
        i = a[0],
        l = a[1];
      if (
        ((n = l.concat(i)),
        o("WAWebMiscGatingUtils").isDropLastNameEnabled() &&
          t.isOpenBotGroup !== !0)
      )
        return r("compactMap")(n, function (e) {
          var n = e.contact;
          return t.hasUniqueShortNameMention(n)
            ? o(
                "WAWebFrontendContactGetters",
              ).getFormattedShortNameWithNonBreakingSpaces(n)
            : o("WAWebFrontendContactGetters")
                .getFormattedName(n)
                .replace(/\s/g, " ");
        });
      if (t.hasCapi === !0) {
        var s = r("partitionArray")(n, function (e) {
            return e.id.equals(t.owner);
          }),
          u = s[0],
          c = s[1];
        n = u.concat(c);
      }
      if (
        o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() &&
        t.isOpenBotGroup === !0
      ) {
        var m = r("partitionArray")(n, function (e) {
            return e.id.equals(o("WAWebBotUtils").META_BOT_FBID_WID);
          }),
          p = m[0],
          _ = m[1];
        n = p.concat(_);
      }
      return r("WAWebCompactMapString")(n, function (e) {
        var t = e.contact,
          n = d(t);
        if (!r("isStringNullOrEmpty")(n)) return n;
        var a = o("WAWebContactGetters").getNotifyName(t);
        if (!r("isStringNullOrEmpty")(a)) return a;
        var i = o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(t);
        return r("isStringNullOrEmpty")(i) ? "" : i;
      });
    }
    function p(e) {
      return m(e.participants.toArray(), e);
    }
    function _(e) {
      return m(e.participants.getAdmins(), e);
    }
    function f(e, t) {
      t === void 0 && (t = !0);
      var n = e.participants.length;
      if (n === 0) return s._(/*BTDS*/ "Group call").toString();
      var o = c(e, !1, t);
      if (n === 1) return o[0];
      if (n === 2)
        return r("WAWebFbtIntlList")(
          o.slice(0, 2),
          r("WAWebFbtIntlList").CONJUNCTIONS.AND,
        ).toString();
      var a = o[0],
        i = n - 1,
        l = s
          ._(/*BTDS*/ '_j{"*":"{other_participants} others","_1":"1 other"}', [
            s._plural(i, "other_participants"),
          ])
          .toString();
      return r("WAWebFbtIntlList")(
        [a, l],
        r("WAWebFbtIntlList").CONJUNCTIONS.AND,
      ).toString();
    }
    function g(e, t) {
      t === void 0 && (t = !0);
      var n = e.length;
      if (n === 0) return s._(/*BTDS*/ "Group call").toString();
      var r = e.map(function (e) {
        var n =
            e.isUser() && e.device != null && e.device !== 0
              ? o("WAWebWidFactory").asUserWidOrThrow(e)
              : e,
          r = o("WAWebContactCollection").ContactCollection.get(n),
          a = null;
        if ((r == null || !r.name) && e.isUser()) {
          if (
            ((a = o("WAWebApiContact").getAlternateUserWid(
              o("WAWebWidFactory").asUserWidOrThrow(e),
            )),
            a != null)
          ) {
            var i = o("WAWebContactCollection").ContactCollection.get(a);
            i != null && (r == null || i.name) && (r = i);
          }
          if (r != null && !r.name && r.phoneNumber) {
            var l = o("WAWebContactCollection").ContactCollection.get(
              r.phoneNumber,
            );
            l != null && l.name && (r = l);
          }
        }
        if (r == null)
          return e.isLid() && a != null
            ? o("WAWebWidFormat").widToFormattedUser(a)
            : o("WAWebWidFormat").widToFormattedUser(e);
        if (o("WAWebContactGetters").getIsMe(r))
          return s._(/*BTDS*/ "You").toString();
        var u = t
          ? o(
              "WAWebFrontendContactGetters",
            ).getFormattedShortNameWithNonBreakingSpaces(r)
          : o("WAWebFrontendContactGetters").getFormattedName(r);
        return (
          u ||
          o("WAWebContactGetters").getNotifyName(r) ||
          o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(r) ||
          o("WAWebWidFormat").widToFormattedUser(e)
        );
      });
      if (n === 1) return r[0];
      if (n === 2)
        return s
          ._(/*BTDS*/ "{first_name} & {second_name}", [
            s._param("first_name", r[0]),
            s._param("second_name", r[1]),
          ])
          .toString();
      if (n === 3)
        return s
          ._(/*BTDS*/ "{first_name}, {second_name} & {third_name}", [
            s._param("first_name", r[0]),
            s._param("second_name", r[1]),
            s._param("third_name", r[2]),
          ])
          .toString();
      var a = r[0],
        i = n - 1,
        l = s
          ._(/*BTDS*/ '_j{"*":"{other_participants} others","_1":"1 other"}', [
            s._plural(i, "other_participants"),
          ])
          .toString();
      return s
        ._(/*BTDS*/ "{first_name} & {others}", [
          s._param("first_name", a),
          s._param("others", l),
        ])
        .toString();
    }
    ((l.calculateUnnamedGroupParticipantsList = e),
      (l.calculateUnnamedGroupFullParticipantsList = u),
      (l.getFirstNameForContact = d),
      (l.calculateParticipantsList = p),
      (l.calculateAdminsList = _),
      (l.formatParticipantNames = f),
      (l.formatParticipantWidsPreserveOrder = g));
  },
  226,
);
