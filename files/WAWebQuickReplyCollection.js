__d(
  "WAWebQuickReplyCollection",
  [
    "Promise",
    "WALogger",
    "WAWebBaseCollection",
    "WAWebBusinessProfileCollection",
    "WAWebFrontendQuickReplyGetters",
    "WAWebQuickReplyBusinessProfileUtils",
    "WAWebQuickReplyModel",
    "WAWebQuickReplySmartDefaults",
    "WAWebUserPrefsMeUser",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function a() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.smartDefaultsAdded = !1),
            (e.$QuickReplyCollectionImpl$p_1 = null),
            (e.sortQuickReply = function (e, t) {
              var n = o("WAWebFrontendQuickReplyGetters").getTotalCount(e),
                r = o("WAWebFrontendQuickReplyGetters").getTotalCount(t);
              return n === r ? (e.id < t.id ? -1 : 1) : n > r ? -1 : 1;
            }),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.addSmartDefaultsIfNeeded = function () {
            var t,
              a = this;
            if (this.smartDefaultsAdded)
              return (s || (s = n("Promise"))).resolve();
            if (this.$QuickReplyCollectionImpl$p_1 != null)
              return this.$QuickReplyCollectionImpl$p_1;
            if (
              (o("WAWebQuickReplySmartDefaults").addSmartDefaults(),
              !o("WAWebUserPrefsMeUser").hasLoggedIn())
            )
              return (s || (s = n("Promise"))).resolve();
            if (
              ((t = o(
                "WAWebQuickReplyBusinessProfileUtils",
              ).getOwnQuickReplyBusinessProfile()) == null
                ? void 0
                : t.dataSource) === "server"
            )
              return (
                (this.smartDefaultsAdded = !0),
                (s || (s = n("Promise"))).resolve()
              );
            var i = o("WAWebBusinessProfileCollection")
              .BusinessProfileCollection.fetchBizProfile(
                o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              )
              .then(function () {
                var e;
                ((e = o(
                  "WAWebQuickReplyBusinessProfileUtils",
                ).getOwnQuickReplyBusinessProfile()) == null
                  ? void 0
                  : e.dataSource) === "server" &&
                  (o("WAWebQuickReplySmartDefaults").addSmartDefaults(),
                  (a.smartDefaultsAdded = !0));
              })
              .catch(function (t) {
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "QuickReply: failed to hydrate own business profile",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("quick-reply-smart-defaults-hydration-failed");
              })
              .finally(function () {
                a.$QuickReplyCollectionImpl$p_1 = null;
              });
            return ((this.$QuickReplyCollectionImpl$p_1 = i), i);
          }),
          (i.filterShortcuts = function (t, n) {
            n === void 0 && (n = this.toArray());
            var e = n.filter(function (e) {
              var n = e.shortcut;
              return n.toLowerCase().startsWith(t.toLowerCase());
            });
            return e.sort(this.sortQuickReply);
          }),
          a
        );
      })(o("WAWebBaseCollection").BaseCollection);
    u.model = r("WAWebQuickReplyModel");
    var c = new u();
    l.QuickReplyCollection = c;
  },
  98,
);
