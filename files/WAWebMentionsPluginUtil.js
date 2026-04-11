__d(
  "WAWebMentionsPluginUtil",
  [
    "WALogger",
    "WAWebBotGroupGatingUtils",
    "WAWebBotProfileCollection",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebL10N",
    "WAWebLidMigrationUtils",
    "WAWebUsernameGatingUtils",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = !1,
      c = !1;
    function d(e, t, n) {
      var r,
        a =
          (r =
            t == null
              ? void 0
              : t.participants.map(function (e) {
                  var t = e.contact;
                  return t;
                })) != null
            ? r
            : [];
      if (
        n &&
        (!o("WAWebBotGroupGatingUtils").isOpenGroupBotParticipantAddEnabled() ||
          (t == null ? void 0 : t.isOpenBotGroup) !== !0) &&
        (!o("WAWebBotGroupGatingUtils").isTEEGroupBotParticipantAddEnabled() ||
          (t == null ? void 0 : t.isTeeBotGroup) !== !0)
      ) {
        var i,
          l =
            (i = o(
              "WAWebBotProfileCollection",
            ).BotProfileCollection.getDefaultBot()) == null
              ? void 0
              : i.contact;
        l != null && a.unshift(l);
      }
      var s = (e || "").toLowerCase(),
        u = a.filter(function (e) {
          return p(s, e);
        });
      return u;
    }
    function m(t, n) {
      if (n.parentGroup == null)
        return (
          u ||
            ((u = !0),
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "parentGroup missing!",
                  ])),
              )
              .sendLogs(
                "parentGroup not defined while searching for @mention subgroup suggestions",
              )),
          []
        );
      var a = r("WAWebGroupMetadataCollection").get(n.parentGroup);
      if (a == null)
        return (
          c ||
            ((c = !0),
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "parentGroup missing!",
                  ])),
              )
              .sendLogs(
                "parentGroup not found in GroupMetadataCollection while searching for @mention subgroup suggestions",
              )),
          []
        );
      var i = a.getSubgroupsMetadata(),
        l = (t || "").toLowerCase(),
        d = i
          .filter(function (e) {
            return n.id.equals(e.id) || e.hiddenSubgroup === !0
              ? !1
              : _(l, e.subject.toLowerCase());
          })
          .sort(function (e, t) {
            return e.subject.localeCompare(
              t.subject,
              r("WAWebL10N").getNormalizedLocale(),
              { ignorePunctuation: !0 },
            );
          });
      return d;
    }
    function p(e, t) {
      if (o("WAWebContactGetters").getIsMe(t)) return !1;
      var n = [
          o("WAWebFrontendContactGetters").getSearchName(t) ||
            o("WAWebFrontendContactGetters").getFormattedName(t),
        ],
        a = o("WAWebContactGetters").getNotifyName(t);
      !o("WAWebFrontendContactGetters").getIsMyContact(t) &&
        !r("isStringNullOrEmpty")(a) &&
        n.push(a.toLowerCase());
      var i = o("WAWebFrontendContactGetters").getUsername(t),
        l = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
      return (
        !r("isStringNullOrEmpty")(i) && l && n.push(i.toLowerCase()),
        n.some(function (t) {
          return _(e, t);
        })
      );
    }
    function _(e, t) {
      var n = -1;
      do if (t.indexOf(e, n + 1) === n + 1) return !0;
      while ((n = t.indexOf(" ", n + 1)) !== -1);
      return !1;
    }
    function f(e) {
      var t = new Set();
      return (
        e.participants.forEach(function (e) {
          var n = e.contact.id;
          t.add(n.toString());
          var r = o("WAWebLidMigrationUtils").toLid(n),
            a = o("WAWebLidMigrationUtils").toPn(n);
          (r != null && t.add(r.toString()), a != null && t.add(a.toString()));
        }),
        o("WAWebContactCollection").ContactCollection.getFilteredContacts({
          filterFn: function (n) {
            var e = n.id;
            if (t.has(e.toString())) return !1;
            var r = o("WAWebLidMigrationUtils").toLid(e),
              a = o("WAWebLidMigrationUtils").toPn(e);
            return !(
              (r != null && t.has(r.toString())) ||
              (a != null && t.has(a.toString()))
            );
          },
        })
      );
    }
    function g(e, t) {
      var n = (e || "").toLowerCase();
      return t.filter(function (e) {
        return p(n, e);
      });
    }
    ((l.getUserResults = d),
      (l.getSubgroupResults = m),
      (l.getNonParticipantCandidates = f),
      (l.filterContactsByQuery = g));
  },
  98,
);
