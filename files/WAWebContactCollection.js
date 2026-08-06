__d(
  "WAWebContactCollection",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBaseCollection",
    "WAWebContactCollectionUtils",
    "WAWebContactComparator",
    "WAWebContactModel",
    "WAWebContactSearchGatingUtils",
    "WAWebDebounce",
    "WAWebL10N",
    "WAWebSlicedMatcher",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameWorkerCompatibleGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["cancelAt"],
      s,
      u,
      c,
      d = (function (t) {
        function a() {
          var e;
          return (
            (e = t.call(this) || this),
            (e._sort = r("WAWebDebounce")(function () {
              return t.prototype.sort.call(e);
            }, 1e3)),
            (e._silentSort = r("WAWebDebounce")(function () {
              return t.prototype.sort.call(e, { silent: !0 });
            }, 1e3)),
            (e.findImpl = function (t) {
              var r = e.get(t);
              return r
                ? (c || (c = n("Promise"))).resolve({
                    id: r.id,
                    stale: r.stale,
                  })
                : (c || (c = n("Promise"))).resolve({ id: t });
            }),
            o("WAWebABProps").getABPropConfigValue(
              "web_contact_collection_locale_listener",
            ) &&
              e.listenTo(r("WAWebL10N"), "locale_change", function () {
                var t = r("WAWebL10N").getLocale();
                e.forEach(function (e) {
                  e.locale = t;
                });
              }),
            e.listenTo(
              o("WAWebSocketModel").Socket,
              "change:stream",
              function () {
                o("WAWebSocketModel").Socket.stream ===
                  o("WAWebSocketConstants").SOCKET_STREAM.RESUMING &&
                  e.forEach(function (e) {
                    (e.unset("verificationString"),
                      e.unset("verificationBinary"));
                  });
              },
            ),
            e
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.sort = function (t) {
            return this;
          }),
          (i.ensureSorted = function () {
            this._sort.flush();
          }),
          (i.initializeFromCache = function (t) {
            t &&
              (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Store:Contact init from cache",
                  ])),
              ),
              this.add(t, { silent: !0, merge: !0 }));
          }),
          (i.searchContactsExact = function (t) {
            var e = t.query,
              n = t.filter,
              r = n === void 0 ? {} : n,
              a = o("WAWebContactSearchGatingUtils").isPrefixSearchEnabled(),
              i = [];
            return (
              o("WAWebContactCollectionUtils").getFilteredContacts(
                this,
                babelHelpers.extends({}, r, {
                  filterFn: function (n) {
                    var t = a
                      ? n.searchMatchPrefix(e.text, e.number, e.label)
                      : n.searchMatchExact(e.text, e.number, e.label);
                    return t == null || (r.filterFn != null && !r.filterFn(n))
                      ? !1
                      : (i.push({ contact: n, searchMatch: t }), !0);
                  },
                }),
              ),
              i
            );
          }),
          (i._buildFuzzyMatcher = function (n, r) {
            if (
              !o("WAWebContactSearchGatingUtils").isFuzzySearchEnabled() ||
              !o(
                "WAWebContactSearchGatingUtils",
              ).canTermsMeetFuzzySearchThreshold(
                n.text.split(/\s+/).filter(Boolean),
              )
            )
              return null;
            var t = r.cancelAt,
              a = t === void 0 ? null : t,
              i = babelHelpers.objectWithoutPropertiesLoose(r, e),
              l = o(
                "WAWebUsernameWorkerCompatibleGatingUtils",
              ).onlyShowLidContacts(),
              s = this.getModelsArray(),
              c =
                o(
                  "WAWebContactSearchGatingUtils",
                ).getFuzzySearchTimeoutThreshold() * 1e3,
              d = new (o("WATimeUtils").MonotonicTimer)(),
              m = !1;
            return {
              candidates: s,
              limit: a,
              isTimedOut: function () {
                if (m) return !0;
                var e = d.elapsed();
                return e > c
                  ? (o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "Fuzzy search timeout ",
                          "ms (limit ",
                          "ms)",
                        ])),
                      e,
                      c,
                    ),
                    (m = !0),
                    !0)
                  : !1;
              },
              matchOne: function (t) {
                if (
                  !o("WAWebContactCollectionUtils").passesContactFilter(t, l, i)
                )
                  return null;
                var e = t.searchMatchFuzzy(n.text);
                return e == null ? null : { contact: t, searchMatch: e };
              },
            };
          }),
          (i.searchContactsFuzzy = function (t) {
            var e = this,
              n = t.query,
              r = t.filter,
              a = r === void 0 ? {} : r,
              i = t.signal;
            return o("WAWebSlicedMatcher").searchFuzzyAsync(function () {
              return e._buildFuzzyMatcher(n, a);
            }, i);
          }),
          (i.searchContacts = function (t) {
            var e = t.query,
              n = t.filter,
              r = n === void 0 ? {} : n,
              a = this.searchContactsExact({ query: e, filter: r });
            if (a.length > 0) return a;
            var i = this._buildFuzzyMatcher(e, r);
            return i == null ? [] : o("WAWebSlicedMatcher").drainMatcherSync(i);
          }),
          (i.getMeContact = function () {
            var e = o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).onlyShowLidContacts()
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMaybeMePnUser();
            return e == null ? null : this.get(e);
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    ((d.model = r("WAWebContactModel")),
      (d.comparator = o("WAWebContactComparator").ContactComparator));
    var m = new d();
    ((l.ContactCollectionImpl = d), (l.ContactCollection = m));
  },
  98,
);
