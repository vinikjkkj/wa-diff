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
    "WAWebUsernameGatingUtils",
    "WAWebUsernameTypes",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = !1,
      c = !1;
    function d(e, t) {
      var n,
        r =
          (n =
            t == null
              ? void 0
              : t.participants.map(function (e) {
                  var t = e.contact;
                  return t;
                })) != null
            ? n
            : [],
        o = (e || "").toLowerCase(),
        a = r.filter(function (e) {
          return p(o, e);
        });
      return a;
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
      var i = o("WAWebUsernameTypes").serializeMaybeUsername(
          o("WAWebFrontendContactGetters").getUsername(t),
        ),
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
