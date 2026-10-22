__d(
  "WAWebMentionsPluginUtil",
  [
    "WALogger",
    "WAWebContactCollection",
    "WAWebContactCollectionUtils",
    "WAWebContactGetters",
    "WAWebFrontendContactGetters",
    "WAWebGroupMetadataCollection",
    "WAWebL10N",
    "WAWebLidMigrationUtils",
    "WAWebOrgMemberContactName",
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = !1,
      c = !1;
    function d(e, t, n) {
      var r;
      n === void 0 &&
        (n = o("WAWebOrgMemberContactName").getOrgMemberDisplayName);
      var a =
          (r =
            t == null
              ? void 0
              : t.participants.map(function (e) {
                  var t = e.contact;
                  return t;
                })) != null
            ? r
            : [],
        i = (e || "").toLowerCase(),
        l = a.filter(function (e) {
          return p(i, e, n);
        });
      return l;
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
              r("WAWebL10N").getFullLocale(),
              { ignorePunctuation: !0 },
            );
          });
      return d;
    }
    function p(e, t, n) {
      if (
        (n === void 0 &&
          (n = o("WAWebOrgMemberContactName").getOrgMemberDisplayName),
        o("WAWebContactGetters").getIsMe(t))
      )
        return !1;
      var a = [
          o("WAWebFrontendContactGetters").getSearchName(t) ||
            o("WAWebFrontendContactGetters").getFormattedName(t),
        ],
        i = o("WAWebContactGetters").getNotifyName(t);
      !o("WAWebFrontendContactGetters").getIsMyContact(t) &&
        !r("isStringNullOrEmpty")(i) &&
        a.push(i.toLowerCase());
      var l = n(t);
      l != null && a.push(l.toLowerCase());
      var s = o("WAWebUsernameTypes").serializeMaybeUsername(
          o("WAWebFrontendContactGetters").getUsername(t),
        ),
        u = o("WAWebUsernameGatingUtils").usernameDisplayedEnabled();
      return (
        !r("isStringNullOrEmpty")(s) && u && a.push(s.toLowerCase()),
        a.some(function (t) {
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
        o("WAWebContactCollectionUtils").getFilteredContacts(
          o("WAWebContactCollection").ContactCollection,
          {
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
          },
        )
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
