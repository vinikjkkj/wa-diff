__d(
  "WAWebContactCollection",
  [
    "Promise",
    "WALogger",
    "WATimeUtils",
    "WAWebBaseCollection",
    "WAWebContactComparator",
    "WAWebContactGetters",
    "WAWebContactModel",
    "WAWebContactSearchGatingUtils",
    "WAWebFrontendContactGetters",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebUserPrefsMeUser",
    "WAWebUsernameWorkerCompatibleGatingUtils",
    "WAWebWid",
    "lodash",
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
            (e._sort = r("lodash").debounce(function () {
              return t.prototype.sort.call(e);
            }, 1e3)),
            (e._silentSort = r("lodash").debounce(function () {
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
          (i.getFilteredContacts = function (t) {
            var e = t.cancelAt,
              n = e === void 0 ? null : e,
              a = t.filterFn,
              i = a === void 0 ? null : a,
              l = t.showMe,
              s = l === void 0 ? !1 : l,
              u = t.showWithoutName,
              c = u === void 0 ? !1 : u,
              d = o(
                "WAWebUsernameWorkerCompatibleGatingUtils",
              ).onlyShowLidContacts(),
              m = [];
            for (var p of this._models) {
              if (n != null && m.length >= n) {
                m = [];
                break;
              }
              if (!(d && !p.id.isLid())) {
                {
                  if (!d && p.id.isLid()) continue;
                  if (p.id.isBot()) continue;
                  if (r("WAWebWid").isPSA(p.id)) continue;
                  if (o("WAWebContactGetters").getIsMe(p)) {
                    if (s) {
                      if (i != null && i(p) !== !0) continue;
                      m.push(p);
                    }
                    continue;
                  }
                }
                ((!(p.name || c) ||
                  !o("WAWebContactGetters").getIsWAContact(p)) &&
                  !o("WAWebFrontendContactGetters").getIsUsernameContact(p)) ||
                  (p.isActive() && ((i != null && i(p) !== !0) || m.push(p)));
              }
            }
            return m.sort(o("WAWebContactComparator").ContactComparator);
          }),
          (i.searchContacts = function (t) {
            var e = t.query,
              n = t.filter,
              r = n === void 0 ? {} : n,
              a = o("WAWebContactSearchGatingUtils").isPrefixSearchEnabled(),
              i = [];
            if (
              (this.getFilteredContacts(
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
              this.getFilteredContacts(
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
          (i.getGroupContacts = function () {
            return this.filter(function (e) {
              return o("WAWebContactGetters").getIsGroup(e);
            });
          }),
          (i.getMeContact = function () {
            var e = o(
              "WAWebUsernameWorkerCompatibleGatingUtils",
            ).onlyShowLidContacts()
              ? o("WAWebUserPrefsMeUser").getMaybeMeLidUser()
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
