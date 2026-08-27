__d(
  "WAWebProfilePicThumbModel",
  [
    "WALogger",
    "WAWebBaseModel",
    "WAWebBizAiAssetResolver",
    "WAWebChatCollection",
    "WAWebMediaHosts",
    "WAWebMediaHostsRouteSelection",
    "WAWebMmsClientSelectHost",
    "WAWebMmsMediaTypes",
    "WAWebProfilePicConstants",
    "WAWebProfilePicThumbCollection",
    "WAWebProfilePicThumbGetters",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = (function (t) {
        function n() {
          for (var e, n = arguments.length, a = new Array(n), i = 0; i < n; i++)
            a[i] = arguments[i];
          return (
            (e = t.call.apply(t, [this].concat(a)) || this),
            (e.id = o("WAWebBaseModel").prop()),
            (e.tag = o("WAWebBaseModel").prop()),
            (e.raw = o("WAWebBaseModel").prop()),
            (e.eurl = o("WAWebBaseModel").prop()),
            (e.previewEurl = o("WAWebBaseModel").prop()),
            (e.fullDirectPath = o("WAWebBaseModel").prop()),
            (e.previewDirectPath = o("WAWebBaseModel").prop()),
            (e.filehash = o("WAWebBaseModel").prop()),
            (e.stale = o("WAWebBaseModel").session(!0)),
            (e.eurlStale = o("WAWebBaseModel").session(!1)),
            (e.pendingPic = o("WAWebBaseModel").session()),
            (e.timestamp = o("WAWebBaseModel").session()),
            (e.hostRetryCount = o("WAWebBaseModel").session(0)),
            (e.lastHostUsed = o("WAWebBaseModel").session()),
            (e.aiHubProfileIsDarkTheme = o("WAWebBaseModel").session(
              o("WAWebBizAiAssetResolver").getAiHubProfileIsDarkTheme,
            )),
            (e.img = o("WAWebBaseModel").derived(
              function () {
                if (r("WAWebWid").isAiHub(this.id))
                  return o("WAWebBizAiAssetResolver").getAiHubProfileURL(
                    this.aiHubProfileIsDarkTheme,
                  );
                if (this.raw) return "data:image/jpeg;base64," + this.raw;
                if (!this.tag && this.stale) return null;
                if (this.tag)
                  return this.previewDirectPath != null
                    ? this.$ProfilePicThumbImpl$p_1(this.previewDirectPath)
                    : this.previewEurl;
              },
              [
                "id",
                "tag",
                "raw",
                "stale",
                "eurl",
                "eurlStale",
                "previewEurl",
                "previewDirectPath",
                "lastHostUsed",
                "aiHubProfileIsDarkTheme",
              ],
            )),
            (e.imgFull = o("WAWebBaseModel").derived(
              function () {
                if (r("WAWebWid").isAiHub(this.id))
                  return o("WAWebBizAiAssetResolver").getAiHubProfileURL(
                    this.aiHubProfileIsDarkTheme,
                  );
                if ((this.raw || !this.tag) && this.stale) return null;
                if (!this.raw && this.tag)
                  return this.fullDirectPath != null
                    ? this.$ProfilePicThumbImpl$p_1(this.fullDirectPath)
                    : this.eurl;
              },
              [
                "id",
                "tag",
                "raw",
                "stale",
                "eurl",
                "eurlStale",
                "fullDirectPath",
                "lastHostUsed",
                "aiHubProfileIsDarkTheme",
              ],
            )),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.markStale = function (t) {
            ((this.stale = !0),
              (t == null ? void 0 : t.eurl) === !0 && (this.eurlStale = !0));
          }),
          (a.markMms4HostSuccess = function () {
            this.hostRetryCount = 0;
          }),
          (a.markMms4HostFailure = function () {
            var e;
            (this.hostRetryCount++,
              (this.lastHostUsed =
                (e = this.$ProfilePicThumbImpl$p_2()) != null
                  ? e
                  : this.lastHostUsed));
          }),
          (a.validate = function () {
            if (!(!this.stale && !this.eurlStale))
              return this.getCollection().update(this.id);
          }),
          (a.canSet = function () {
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
          (a.canDelete = function () {
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
          (a.getCollection = function () {
            return o("WAWebProfilePicThumbCollection")
              .ProfilePicThumbCollection;
          }),
          (a.$ProfilePicThumbImpl$p_1 = function (t) {
            var e,
              n,
              r =
                (e = (n = this.lastHostUsed) == null ? void 0 : n.hostname) !=
                null
                  ? e
                  : this.$ProfilePicThumbImpl$p_3();
            return "https://" + r + t;
          }),
          (a.$ProfilePicThumbImpl$p_3 = function () {
            try {
              return this.$ProfilePicThumbImpl$p_4().selectedHost.hostname;
            } catch (t) {
              return (
                o("WALogger")
                  .WARN(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "profile-pic host resolve failed, using fallback: ",
                        "",
                      ])),
                    t,
                  )
                  .tags("mms4"),
                o("WAWebProfilePicConstants").DEFAULT_HOSTNAME
              );
            }
          }),
          (a.$ProfilePicThumbImpl$p_2 = function () {
            try {
              var e = this.$ProfilePicThumbImpl$p_4(),
                t = e.fallbackHost,
                n = e.selectedHost;
              return r("WAWebMmsClientSelectHost")({
                selectedHost: n,
                fallbackHost: t,
                attemptCount: this.hostRetryCount,
                lastHostUsed: this.lastHostUsed,
                lastFetchMadeProgress: this.hostRetryCount === 0,
              });
            } catch (e) {
              return (
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "profile-pic host resolve failed, using fallback: ",
                        "",
                      ])),
                    e,
                  )
                  .tags("mms4"),
                null
              );
            }
          }),
          (a.$ProfilePicThumbImpl$p_4 = function () {
            return o("WAWebMediaHosts").mediaHosts.getCachedHostsInfo({
              encFilehash: this.filehash,
              operation: o("WAWebMediaHostsRouteSelection").OPERATIONS.DOWNLOAD,
              type: o("WAWebMmsMediaTypes").MEDIA_TYPES.PPIC,
            });
          }),
          (a.delete = function () {
            (t.prototype.delete.call(this),
              o(
                "WAWebProfilePicThumbGetters",
              ).clearProfilePicThumbGetterCacheFor(this));
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    ((u.Proxy = "profilePicThumb"), (u.idClass = r("WAWebWid")));
    var c = o("WAWebBaseModel").defineModel(u);
    ((l.ProfilePicThumbImpl = u), (l.ProfilePicThumb = c));
  },
  98,
);
