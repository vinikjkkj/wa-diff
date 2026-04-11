__d(
  "WAWebChatSearchModel",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebContactSearchGatingUtils",
    "WAWebFrontendChatGetters",
    "WAWebPhoneNumberSearch",
    "WAWebSearchModel",
    "WAWebSearchUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = "ChatSearch"),
            (e.type = "chat"),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.queryFn = function (n, r) {
            var t = this,
              a,
              i,
              l = o("WAWebSearchUtils").normalizeString(n),
              s = o("WAWebPhoneNumberSearch").numberSearch(l),
              u = o("WAWebSearchUtils").filterPaginate(
                o("WAWebChatCollection").ChatCollection.getModelsArray(),
                function (e) {
                  return !o("WAWebFrontendChatGetters").getShouldAppearInList(
                    e,
                  ) ||
                    (t.type === "group" &&
                      !o("WAWebChatGetters").getIsGroup(e)) ||
                    (t.type === "1-1" && o("WAWebChatGetters").getIsGroup(e))
                    ? !1
                    : n === "" || e.contact.searchMatchExact(l, s);
                },
                r == null ? void 0 : r.pagination,
              ),
              c = u.pagination,
              d = u.results,
              m =
                (a =
                  r == null || (i = r.pagination) == null ? void 0 : i.page) !=
                null
                  ? a
                  : 0;
            if (
              d.length > 0 ||
              n === "" ||
              m !== 0 ||
              !o("WAWebContactSearchGatingUtils").isFuzzySearchEnabled() ||
              !o(
                "WAWebContactSearchGatingUtils",
              ).canTermsMeetFuzzySearchThreshold(l.split(/\s+/).filter(Boolean))
            )
              return {
                type: this.type,
                pagination: c,
                results: d.map(function (e) {
                  return { id: e.id.toString(), type: t.type, data: e };
                }),
              };
            var p =
                o(
                  "WAWebContactSearchGatingUtils",
                ).getFuzzySearchTimeoutThreshold() * 1e3,
              _ = new (o("WATimeUtils").MonotonicTimer)(),
              f = !1,
              g = o("WAWebSearchUtils").filterPaginate(
                o("WAWebChatCollection").ChatCollection.getModelsArray(),
                function (n) {
                  var r = _.elapsed();
                  return f || r > p
                    ? (f ||
                        o("WALogger").LOG(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "Chat fuzzy search timeout ",
                              "ms (limit ",
                              "ms)",
                            ])),
                          r,
                          p,
                        ),
                      (f = !0),
                      !1)
                    : !o("WAWebFrontendChatGetters").getShouldAppearInList(n) ||
                        (t.type === "group" &&
                          !o("WAWebChatGetters").getIsGroup(n)) ||
                        (t.type === "1-1" &&
                          o("WAWebChatGetters").getIsGroup(n))
                      ? !1
                      : n.contact.searchMatchFuzzy(l) != null;
                },
                r == null ? void 0 : r.pagination,
              ),
              h = g.pagination,
              y = g.results;
            return {
              type: this.type,
              pagination: h,
              results: y.map(function (e) {
                return { id: e.id.toString(), type: t.type, data: e };
              }),
            };
          }),
          n
        );
      })(o("WAWebSearchModel").Search),
      u = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.id = "LockedChatSearch"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.queryFn = function (t, n) {
            var e = o("WAWebSearchUtils").normalizeString(t),
              r = o("WAWebPhoneNumberSearch").numberSearch(e),
              a = o("WAWebSearchUtils").filterPaginate(
                o("WAWebChatCollection").ChatCollection.getModelsArray(),
                function (n) {
                  return n.isLocked
                    ? t === "" || n.contact.searchMatchExact(e, r)
                    : !1;
                },
                n == null ? void 0 : n.pagination,
              ),
              i = a.pagination,
              l = a.results;
            return {
              type: "locked-chat",
              pagination: i,
              results: l.map(function (e) {
                return { id: e.id.toString(), type: "locked-chat", data: e };
              }),
            };
          }),
          t
        );
      })(o("WAWebSearchModel").Search);
    ((l.ChatSearch = s), (l.LockedChatSearch = u));
  },
  98,
);
