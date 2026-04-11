__d(
  "WAWebProfilePicThumbModel",
  [
    "WALogger",
    "WAWebBaseModel",
    "WAWebChatCollection",
    "WAWebMediaHosts",
    "WAWebMediaHostsRouteSelection",
    "WAWebMmsClientSelectHost",
    "WAWebMmsMediaTypes",
    "WAWebProfilePicConstants",
    "WAWebProfilePicThumbCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { SINGLE: "SINGLE", GROUP: "GROUP" },
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
            (e.img = o("WAWebBaseModel").derived(
              function () {
                if (this.raw) return "data:image/jpeg;base64," + this.raw;
                if (!this.tag && this.stale) return null;
                if (this.tag)
                  return this.previewDirectPath != null
                    ? this.$ProfilePicThumbImpl$p_1(
                        this.previewDirectPath,
                        this.filehash,
                      )
                    : this.previewEurl;
              },
              [
                "tag",
                "raw",
                "stale",
                "eurl",
                "eurlStale",
                "previewEurl",
                "previewDirectPath",
                "hostRetryCount",
              ],
            )),
            (e.imgFull = o("WAWebBaseModel").derived(
              function () {
                if ((this.raw || !this.tag) && this.stale) return null;
                if (!this.raw && this.tag)
                  return this.fullDirectPath != null
                    ? this.$ProfilePicThumbImpl$p_1(
                        this.fullDirectPath,
                        this.filehash,
                      )
                    : this.eurl;
              },
              [
                "tag",
                "raw",
                "stale",
                "eurl",
                "eurlStale",
                "fullDirectPath",
                "hostRetryCount",
              ],
            )),
            (e.fallbackType = o("WAWebBaseModel").derived(
              function () {
                return r("WAWebWid").isUser(this.id)
                  ? s.SINGLE
                  : (r("WAWebWid").isGroup(this.id), s.GROUP);
              },
              ["id"],
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
            this.hostRetryCount++;
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
          (a.$ProfilePicThumbImpl$p_1 = function (n, r) {
            var t = o("WAWebProfilePicConstants").DEFAULT_HOSTNAME;
            try {
              t = this.$ProfilePicThumbImpl$p_2(n, r).hostname;
            } catch (t) {
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "profile-pic host resolve failed, using fallback: ",
                      "",
                    ])),
                  t,
                )
                .tags("mms4");
            }
            return "https://" + t + n;
          }),
          (a.$ProfilePicThumbImpl$p_2 = function (t, n) {
            var e = o("WAWebMediaHosts").mediaHosts.getCachedHostsInfo({
                directPath: t,
                encFilehash: n,
                operation: o("WAWebMediaHostsRouteSelection").OPERATIONS
                  .DOWNLOAD,
                type: o("WAWebMmsMediaTypes").MEDIA_TYPES.PPIC,
              }),
              a = e.fallbackHost,
              i = e.selectedHost,
              l = r("WAWebMmsClientSelectHost")({
                selectedHost: i,
                fallbackHost: a,
                attemptCount: this.hostRetryCount,
                lastHostUsed: this.lastHostUsed,
                lastFetchMadeProgress: this.hostRetryCount === 0,
              });
            return ((this.lastHostUsed = l), l);
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
