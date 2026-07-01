__d(
  "WAWebNonContactPushNameSearchModel",
  [
    "fbt",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebContactGetters",
    "WAWebContactSearchGatingUtils",
    "WAWebFrontendContactGetters",
    "WAWebLidMigrationUtils",
    "WAWebSearchModel",
    "WAWebSearchUtils",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = 750,
      u = 3,
      c = 3,
      d = [];
    function m() {
      return s._(/*BTDS*/ "In a group with you");
    }
    function p(e) {
      var t;
      return (
        (t = o("WAWebLidMigrationUtils").toPn(e)) != null ? t : e
      ).toString();
    }
    function _(e) {
      if (e.length === 0) return d;
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      var o = new Set(
          n.flat().map(function (e) {
            return p(e.id);
          }),
        ),
        a = [];
      for (var i of e) {
        if (a.length >= u) break;
        var l = p(i.id);
        o.has(l) || (o.add(l), a.push(i));
      }
      return a.length === 0 ? d : a;
    }
    var f = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = "WAWebNonContactPushNameSearchModel"),
          (t.$WAWebNonContactPushNameSearchModel$p_1 = []),
          (t.$WAWebNonContactPushNameSearchModel$p_2 = new Date(0)),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.$WAWebNonContactPushNameSearchModel$p_3 = function () {
          var e = this;
          return this.$WAWebNonContactPushNameSearchModel$p_4()
            ? ((this.$WAWebNonContactPushNameSearchModel$p_1 = Array.from(
                o("WAWebChatCollection")
                  .ChatCollection.filter(function (t) {
                    return e.$WAWebNonContactPushNameSearchModel$p_5(t);
                  })
                  .flatMap(function (e) {
                    var t, n;
                    return (t =
                      (n = e.groupMetadata) == null ||
                      (n = n.participants) == null
                        ? void 0
                        : n.getModelsArray()) != null
                      ? t
                      : [];
                  })
                  .reduce(function (e, t) {
                    var n = t.id.toString();
                    if (!e.has(n)) {
                      var r = t.contact;
                      r != null &&
                        !o("WAWebContactGetters").getIsMe(r) &&
                        !o("WAWebFrontendContactGetters").getIsMyContact(r) &&
                        r.pushname != null &&
                        r.pushname.trim() !== "" &&
                        e.set(n, r);
                    }
                    return e;
                  }, new Map())
                  .values(),
              )),
              (this.$WAWebNonContactPushNameSearchModel$p_2 = new Date()),
              this.$WAWebNonContactPushNameSearchModel$p_1)
            : this.$WAWebNonContactPushNameSearchModel$p_1;
        }),
        (n.$WAWebNonContactPushNameSearchModel$p_5 = function (t) {
          var e;
          if (!o("WAWebChatGetters").getIsGroup(t)) return !1;
          var n = (e = t.groupMetadata) == null ? void 0 : e.participants;
          return n != null && n.iAmMember();
        }),
        (n.$WAWebNonContactPushNameSearchModel$p_4 = function () {
          return (
            Date.now() -
              this.$WAWebNonContactPushNameSearchModel$p_2.getTime() >=
            t.CACHE_TTL_MS
          );
        }),
        (n.$WAWebNonContactPushNameSearchModel$p_6 = function (t, n) {
          var e = t.pushname;
          return e == null
            ? !1
            : o("WAWebSearchUtils").normalizeString(e).includes(n);
        }),
        (n.queryFn = function (t, n) {
          var e = this,
            r = o("WAWebSearchUtils").normalizeString(t);
          if (r.replace(/\s/g, "").length < c)
            return {
              type: "non-contact-pushname",
              results: [],
              pagination: { page: 0, pageLength: 0, hasMoreResults: !1 },
            };
          var a = o("WAWebSearchUtils").filterPaginate(
              this.$WAWebNonContactPushNameSearchModel$p_3(),
              function (t) {
                return e.$WAWebNonContactPushNameSearchModel$p_6(t, r);
              },
              n == null ? void 0 : n.pagination,
            ),
            i = a.pagination,
            l = a.results;
          return {
            type: "non-contact-pushname",
            results: l.map(function (e) {
              return {
                id: e.id.toString(),
                type: "non-contact-pushname",
                data: e,
              };
            }),
            pagination: i,
          };
        }),
        (n.invalidateCache = function () {
          ((this.$WAWebNonContactPushNameSearchModel$p_1 = []),
            (this.$WAWebNonContactPushNameSearchModel$p_2 = new Date(0)));
        }),
        t
      );
    })(o("WAWebSearchModel").Search);
    f.CACHE_TTL_MS = o("WATimeUtils").MINUTE_MILLISECONDS;
    var g;
    function h() {
      return (g == null && (g = new f()), g);
    }
    function y(e) {
      if (
        !e ||
        !o("WAWebContactSearchGatingUtils").isNonContactPushNameSearchEnabled()
      )
        return [];
      try {
        return h()
          .queryFn(e)
          .results.map(function (e) {
            return e.data;
          });
      } catch (e) {
        return [];
      }
    }
    ((l.NON_CONTACT_PUSHNAME_SEARCH_DEBOUNCE_MS = e),
      (l.getNonContactPushNameHeader = m),
      (l.dedupeNonContactPushnames = _),
      (l.WAWebNonContactPushNameSearchModel = f),
      (l.getNonContactPushNameSearch = h),
      (l.searchNonContactPushnames = y));
  },
  226,
);
