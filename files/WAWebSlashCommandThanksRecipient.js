__d(
  "WAWebSlashCommandThanksRecipient",
  [
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebEmployeeCommandLimits",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebMsgGetters",
    "WAWebNoop",
    "WAWebOrgCollection",
    "WAWebOrgGatingUtils",
    "WAWebOrgLazyActions",
    "WAWebOrgMemberContactName",
    "WAWebPhoneNumberSearch",
    "WAWebUserUtils",
    "WAWebWamEnumOppositeVisibleIdentificationType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
        (e = o("WAWebWamEnumOppositeVisibleIdentificationType"))
          .OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.SAVED_CONTACT_NAME,
        e.OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.VERIFIED_BUSINESS_NAME,
        e.OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.USERNAME,
        e.OPPOSITE_VISIBLE_IDENTIFICATION_TYPE.PUSHNAME,
      ]),
      u = "90000000000001";
    function c(e) {
      var t,
        n = R((t = e.mentions) != null ? t : []);
      if (n.length > 0) return n;
      var r = g(e);
      return r != null ? [r] : [];
    }
    function d(e) {
      return R(e)
        .filter(function (e) {
          return C(e) != null;
        })
        .slice(0, o("WAWebEmployeeCommandLimits").HANDOFF_LIMITS.thanksPeople);
    }
    function m(e) {
      return c(e)
        .flatMap(function (e) {
          var t = C(e);
          return t != null ? [t] : [];
        })
        .slice(0, o("WAWebEmployeeCommandLimits").HANDOFF_LIMITS.thanksPeople);
    }
    function p(e) {
      var t = c(e);
      return t.length === 1 ? C(t[0]) : null;
    }
    function _(e) {
      var t = c(e);
      return t.length === 1 && C(t[0]) != null ? h(t[0]) : null;
    }
    function f(e, t) {
      var n = b(e);
      if (n == null) return r("WAWebNoop");
      var a = !0;
      return (
        o("WAWebOrgCollection").OrgCollection.on(
          o("WAWebOrgCollection").ORG_MEMBERS_APPLIED,
          t,
        ),
        o("WAWebOrgLazyActions")
          .loadOrgRequestContactAction()
          .then(
            function (e) {
              a && e.requestOrgContact(n.user);
            },
            function () {},
          ),
        function () {
          ((a = !1),
            o("WAWebOrgCollection").OrgCollection.off(
              o("WAWebOrgCollection").ORG_MEMBERS_APPLIED,
              t,
            ));
        }
      );
    }
    function g(e) {
      var t = e.chat,
        n = e.quotedMsg,
        r = y(n);
      return S(r)
        ? r
        : !o("WAWebChatGetters").getIsGroup(t) && S(t.id)
          ? t.id
          : null;
    }
    function h(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e);
      if (t == null) return null;
      var n = o("WAWebFrontendContactGetters").getFormattedNameAndType(t),
        r = n.displayName,
        a = n.type;
      return a != null &&
        s.has(a) &&
        !o("WAWebPhoneNumberSearch").isPhoneNumberLike(r)
        ? r
        : null;
    }
    function y(e) {
      return e != null ? o("WAWebMsgGetters").getSender(e) : null;
    }
    function C(e) {
      return v(e) ? E(o("WAWebLidMigrationUtils").toPn(e)) : null;
    }
    function b(e) {
      var t = c(e);
      return !o("WAWebOrgGatingUtils").isOrgsEnabled() ||
        t.length !== 1 ||
        C(t[0]) != null ||
        E(o("WAWebLidMigrationUtils").toPn(t[0])) == null
        ? null
        : o("WAWebLidMigrationUtils").toUserLid(t[0]);
    }
    function v(e) {
      var t;
      return (
        ((t = o("WAWebOrgMemberContactName").getKnownOrgMember(
          o("WAWebLidMigrationUtils").toUserLid(e),
        )) == null
          ? void 0
          : t.orgIds.includes(u)) === !0
      );
    }
    function S(e) {
      return (
        e != null && e.isRegularUser() && !o("WAWebUserUtils").isMeAccount(e)
      );
    }
    function R(e) {
      return L(
        e
          .map(function (e) {
            var t = e.wid;
            return t;
          })
          .filter(S),
      );
    }
    function L(e) {
      var t = new Set();
      return e.filter(function (e) {
        var n = e.toString();
        return t.has(n) ? !1 : (t.add(n), !0);
      });
    }
    function E(e) {
      return e != null && !e.isLid() ? "+" + e.user : null;
    }
    ((l.getThanksRecipients = c),
      (l.getThankedMentions = d),
      (l.getThanksRecipientPhones = m),
      (l.getSoleThanksRecipientPhone = p),
      (l.getThanksRecipientName = _),
      (l.watchSoleThanksRecipient = f),
      (l.getThanksRecipient = g),
      (l.getContactName = h));
  },
  98,
);
