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
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameWorkerCompatibleGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = (function (t) {
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
                ? (u || (u = n("Promise"))).resolve({
                    id: r.id,
                    stale: r.stale,
                  })
                : (u || (u = n("Promise"))).resolve({ id: t });
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
          (i.initializeFromCache = function (n) {
            n &&
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Store:Contact init from cache",
                  ])),
              ),
              this.add(n, { silent: !0, merge: !0 }));
          }),
          (i.searchContacts = function (t) {
            var e = t.query,
              n = t.filter,
              r = n === void 0 ? {} : n,
              a = o("WAWebContactSearchGatingUtils").isPrefixSearchEnabled(),
              i = [];
            if (
              (o("WAWebContactCollectionUtils").getFilteredContacts(
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
              i.length > 0 ||
                !o("WAWebContactSearchGatingUtils").isFuzzySearchEnabled() ||
                !o(
                  "WAWebContactSearchGatingUtils",
                ).canTermsMeetFuzzySearchThreshold(
                  e.text.split(/\s+/).filter(Boolean),
                ))
            )
              return i;
            var l =
                o(
                  "WAWebContactSearchGatingUtils",
                ).getFuzzySearchTimeoutThreshold() * 1e3,
              u = new (o("WATimeUtils").MonotonicTimer)(),
              c = !1,
              d = [];
            return (
              o("WAWebContactCollectionUtils").getFilteredContacts(
                this,
                babelHelpers.extends({}, r, {
                  filterFn: function (n) {
                    var t = u.elapsed();
                    if (c || t > l)
                      return (
                        c ||
                          o("WALogger").LOG(
                            s ||
                              (s = babelHelpers.taggedTemplateLiteralLoose([
                                "Fuzzy search timeout ",
                                "ms (limit ",
                                "ms)",
                              ])),
                            t,
                            l,
                          ),
                        (c = !0),
                        !1
                      );
                    var a = n.searchMatchFuzzy(e.text);
                    return a == null || (r.filterFn != null && !r.filterFn(n))
                      ? !1
                      : (d.push({ contact: n, searchMatch: a }), !0);
                  },
                }),
              ),
              d
            );
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
    ((c.model = r("WAWebContactModel")),
      (c.comparator = o("WAWebContactComparator").ContactComparator));
    var d = new c();
    ((l.ContactCollectionImpl = c), (l.ContactCollection = d));
  },
  98,
);
