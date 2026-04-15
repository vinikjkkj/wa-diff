__d(
  "WAWebUseRecentlySearchedChats",
  [
    "WALogger",
    "WAWebBlocklistCollection",
    "WAWebChatCollection",
    "WAWebGroupSafetyCheckUtils",
    "WAWebLocalStorage",
    "WAWebUserPrefsKeys",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = u || (u = o("react")),
      d = c.useCallback,
      m = c.useSyncExternalStore,
      p = 8,
      _ = 50,
      f = (function () {
        function t() {
          var e = this;
          ((this.$1 = null),
            (this.$2 = []),
            (this.$3 = !1),
            (this.subscribe = function (t) {
              return (
                e.$10(),
                e.$2.push(t),
                function () {
                  var n = e.$2.indexOf(t);
                  n !== -1 && e.$2.splice(n, 1);
                }
              );
            }),
            (this.getSnapshot = function () {
              return (e.$10(), e.$1 == null && (e.$1 = e.$8()), e.$1);
            }));
        }
        var n = t.prototype;
        return (
          (n.resetForTesting = function () {
            ((this.$1 = null), (this.$2 = []), (this.$3 = !1));
          }),
          (n.$4 = function () {
            try {
              var t =
                r("WAWebLocalStorage") == null
                  ? void 0
                  : r("WAWebLocalStorage").getItem(
                      o("WAWebUserPrefsKeys").UserPrefs.RecentSearches,
                    );
              if (t != null) return JSON.parse(t);
            } catch (t) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "RecentChatsStore: Failed to parse recent search entry with ",
                    "",
                  ])),
                t,
              );
            }
            return [];
          }),
          (n.$5 = function (t) {
            try {
              r("WAWebLocalStorage") == null ||
                r("WAWebLocalStorage").setItem(
                  o("WAWebUserPrefsKeys").UserPrefs.RecentSearches,
                  JSON.stringify(t),
                );
            } catch (e) {
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "RecentChatsStore: Failed to store recent search entry with ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (n.$6 = function () {
            this.$2.forEach(function (e) {
              return e();
            });
          }),
          (n.$7 = function () {
            ((this.$1 = null), this.$6());
          }),
          (n.$8 = function () {
            var e = this.$4(),
              t = [];
            for (var n of e) {
              if (t.length >= p) break;
              var r = o("WAWebChatCollection").ChatCollection.get(n.chatId);
              if (r != null && r.isLocked !== !0 && r.archive !== !0) {
                var a;
                ((a = r.contact) == null ? void 0 : a.isContactBlocked) !==
                  !0 &&
                  !r.isSuspendedOrTerminated() &&
                  !o("WAWebGroupSafetyCheckUtils").shouldShowGroupSafetyCheckUI(
                    r,
                  ) &&
                  t.push(r);
              }
            }
            return t;
          }),
          (n.$9 = function (t) {
            var e = this.$1;
            if (e != null) {
              var n = e.findIndex(function (e) {
                return e.id.toString() === t;
              });
              n !== -1 && this.$7();
            }
          }),
          (n.$10 = function () {
            var e = this;
            this.$3 ||
              ((this.$3 = !0),
              o("WAWebChatCollection").ChatCollection.on(
                "remove",
                function (t) {
                  e.$9(t.id.toString());
                },
              ),
              o("WAWebChatCollection").ChatCollection.on(
                "change:isLocked change:archive change:groupSafetyChecked",
                function (t) {
                  e.$7();
                },
              ),
              o("WAWebBlocklistCollection").BlocklistCollection.on(
                "add remove reset",
                function () {
                  e.$7();
                },
              ),
              o("WAWebChatCollection").ChatCollection.on(
                "change:name",
                function (t) {
                  var n;
                  (n = e.$1) != null &&
                    n.some(function (e) {
                      return e.id.toString() === t.id.toString();
                    }) &&
                    e.$6();
                },
              ));
          }),
          (n.addEntry = function (t) {
            var e = this.$4(),
              n = e.filter(function (e) {
                return e.chatId !== t;
              }),
              r = { chatId: t, timestamp: Date.now() },
              o = [r].concat(n).slice(0, _);
            (this.$5(o), this.$7());
          }),
          (n.removeEntry = function (t) {
            var e = this.$4(),
              n = e.filter(function (e) {
                return e.chatId !== t;
              });
            (this.$5(n), this.$7());
          }),
          (n.clearAll = function () {
            (this.$5([]), this.$7());
          }),
          t
        );
      })(),
      g = new f();
    function h(e) {
      g.addEntry(e);
    }
    function y() {
      g.resetForTesting();
    }
    function C() {
      var e = o("react-compiler-runtime").c(2),
        t = m(g.subscribe, g.getSnapshot),
        n = S,
        r = v,
        a = b,
        i;
      return (
        e[0] !== t
          ? ((i = {
              recentChats: t,
              addRecentSearch: n,
              removeRecentSearch: r,
              clearAllRecentSearches: a,
            }),
            (e[0] = t),
            (e[1] = i))
          : (i = e[1]),
        i
      );
    }
    function b() {
      g.clearAll();
    }
    function v(e) {
      g.removeEntry(e);
    }
    function S(e) {
      g.addEntry(e);
    }
    ((l.addChatToRecentSearches = h),
      (l.resetStoreForTesting = y),
      (l.useRecentlySearchedChats = C));
  },
  98,
);
