__d(
  "WAWebProfilePicThumbModel",
  [
    "WAWebBaseModel",
    "WAWebBizAiAssetResolver",
    "WAWebChatCollection",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebProfilePicThumbHostUtils",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.tag = o("WAWebBaseModel").prop()),
          (t.raw = o("WAWebBaseModel").prop()),
          (t.eurl = o("WAWebBaseModel").prop()),
          (t.previewEurl = o("WAWebBaseModel").prop()),
          (t.fullDirectPath = o("WAWebBaseModel").prop()),
          (t.previewDirectPath = o("WAWebBaseModel").prop()),
          (t.filehash = o("WAWebBaseModel").prop()),
          (t.stale = o("WAWebBaseModel").session(!0)),
          (t.eurlStale = o("WAWebBaseModel").session(!1)),
          (t.pendingPic = o("WAWebBaseModel").session()),
          (t.timestamp = o("WAWebBaseModel").session()),
          (t.hostRetryCount = o("WAWebBaseModel").session(0)),
          (t.lastHostUsed = o("WAWebBaseModel").session()),
          (t.aiHubProfileIsDarkTheme = o("WAWebBaseModel").session(
            o("WAWebBizAiAssetResolver").getAiHubProfileIsDarkTheme,
          )),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.markStale = function (t) {
          ((this.stale = !0),
            (t == null ? void 0 : t.eurl) === !0 && (this.eurlStale = !0));
        }),
        (n.markMms4HostSuccess = function () {
          this.hostRetryCount = 0;
        }),
        (n.markMms4HostFailure = function () {
          var e;
          (this.hostRetryCount++,
            (this.lastHostUsed =
              (e = o("WAWebProfilePicThumbHostUtils").selectMms4Host(
                this.filehash,
                this.hostRetryCount,
                this.lastHostUsed,
              )) != null
                ? e
                : this.lastHostUsed));
        }),
        (n.validate = function () {
          if (!(!this.stale && !this.eurlStale))
            return this.getCollection().update(this.id);
        }),
        (n.canSet = function () {
          if (r("WAWebWid").isGroup(this.id)) {
            var e,
              t = o("WAWebChatCollection").ChatCollection.get(this.id),
              n =
                t == null || (e = t.groupMetadata) == null
                  ? void 0
                  : e.participants.iAmRestrictedMember();
            return !n;
          }
          return !!o("WAWebUserPrefsMeUser").isMeAccount(this.id);
        }),
        (n.canDelete = function () {
          var e = !r("isStringNullOrEmpty")(this.tag);
          if (r("WAWebWid").isGroup(this.id) && e) {
            var t,
              n = o("WAWebChatCollection").ChatCollection.get(this.id),
              a =
                n == null || (t = n.groupMetadata) == null
                  ? void 0
                  : t.participants.iAmRestrictedMember();
            return !a;
          }
          return !!(o("WAWebUserPrefsMeUser").isMeAccount(this.id) && e);
        }),
        (n.getCollection = function () {
          return o("WAWebProfilePicThumbCollection").ProfilePicThumbCollection;
        }),
        (n.delete = function () {
          (e.prototype.delete.call(this),
            o("WAWebProfilePicThumbGetters").clearProfilePicThumbGetterCacheFor(
              this,
            ));
        }),
        t
      );
    })(o("WAWebBaseModel").BaseModel);
    ((e.Proxy = "profilePicThumb"), (e.idClass = r("WAWebWid")));
    var s = o("WAWebBaseModel").defineModel(e);
    ((l.ProfilePicThumbImpl = e), (l.ProfilePicThumb = s));
  },
  98,
);
