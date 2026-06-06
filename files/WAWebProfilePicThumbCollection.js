__d(
  "WAWebProfilePicThumbCollection",
  [
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBackendErrors",
    "WAWebBaseCachePolicy",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebContactProfilePicThumbBridge",
    "WAWebGroupType",
    "WAWebNewsletterCollection",
    "WAWebNewsletterMetadataCollection",
    "WAWebProfilePicThumbModel",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebStaleBaseCollection",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebUserPrefsKeys",
    "WAWebVcardParsingUtils",
    "WAWebWid",
    "cr:17219",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = (function (t) {
        function a() {
          var e, a;
          ((a = t.call(this) || this),
            (a.findImpl = function (e) {
              var t,
                n,
                a,
                i,
                l = e.isNewsletter()
                  ? r("WAWebNewsletterCollection")
                  : o("WAWebChatCollection").ChatCollection,
                s = l.get(e),
                u =
                  (s == null || (t = s.groupMetadata) == null
                    ? void 0
                    : t.groupType) === o("WAWebGroupType").GroupType.COMMUNITY,
                c = r("WAWebUnjoinedSubgroupMetadataCollection").get(
                  e.toString(),
                );
              if (
                (s != null &&
                  s.isReadOnly &&
                  !u &&
                  !(s != null && o("WAWebChatGetters").getIsNewsletter(s)) &&
                  c == null) ||
                (s != null && (n = s.groupMetadata) != null && n.terminated) ||
                (s != null &&
                  (a = s.newsletterMetadata) != null &&
                  a.terminated) ||
                (s != null && (i = s.newsletterMetadata) != null && i.isPreview)
              )
                return Promise.resolve({ id: e, stale: !0 });
              if (
                o("WAWebBotUtils").isBotChannelFBID(e) ||
                o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e)
              )
                return Promise.resolve({ id: e });
              if (
                (r("WAWebWid").isUser(e) ||
                  r("WAWebWid").isGroup(e) ||
                  r("WAWebWid").isNewsletter(e)) &&
                !r("WAWebWid").isPSA(e)
              ) {
                var d,
                  m = u
                    ? e
                    : s == null || (d = s.groupMetadata) == null
                      ? void 0
                      : d.parentGroup;
                if (
                  (c != null && (m = c.parentGroupId),
                  o("WAWebSocketModel").Socket.stream !==
                    o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED)
                ) {
                  var p;
                  if (r("WAWebWid").isUser(e)) {
                    var _,
                      f = o("WAWebContactCollection").ContactCollection.get(e),
                      g = o("WAWebChatCollection").ChatCollection.get(e);
                    return o(
                      "WAWebContactProfilePicThumbBridge",
                    ).requestProfilePicFromServer({
                      id: e,
                      parentGroupId: m,
                      tcToken: g == null ? void 0 : g.tcToken,
                      commonGid:
                        (g == null ? void 0 : g.tcToken) == null
                          ? f == null ||
                            (_ = f.maybeCommonGroupChatModel) == null
                            ? void 0
                            : _.id
                          : null,
                    });
                  }
                  return o(
                    "WAWebContactProfilePicThumbBridge",
                  ).requestProfilePicFromServer({
                    id: e,
                    parentGroupId: m,
                    newsletterRole: e.isNewsletter()
                      ? (p = r("WAWebNewsletterMetadataCollection").get(e)) ==
                        null
                        ? void 0
                        : p.membershipType
                      : void 0,
                  });
                }
                return Promise.resolve({ id: e, stale: !0 });
              }
              return Promise.resolve({ id: e, tag: null });
            }),
            (a._getUpdatedProfilePicModel = function (e) {
              return {
                tag: e.tag,
                raw: void 0,
                stale: !1,
                eurl: e.eurl,
                eurlStale: !1,
                previewEurl: e.previewEurl,
                previewDirectPath: e.previewDirectPath,
                fullDirectPath: e.fullDirectPath,
                filehash: e.filehash,
                timestamp: Date.now(),
              };
            }));
          var i = (e = n("cr:17219")) == null ? void 0 : e.getWindowsBridge();
          if (i) {
            var l = o("WAWebABProps").getABPropConfigValue(
              "web_anr_batch_profile_picture_bridge_operations",
            )
              ? "add remove change:eurl"
              : "add remove change:timestamp";
            a.listenTo(a, l, function (e, t, n) {
              var r;
              (r = i.pictures) == null || r.notifyUpdate(e);
            });
          }
          return a;
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.get = function (n) {
            var e = t.prototype.get.call(this, n);
            return (
              this.isProfilePicRefreshNeeded(
                e == null ? void 0 : e.timestamp,
                e == null ? void 0 : e.eurlStale,
              ) &&
                (e == null || e.markStale({ eurl: !0 })),
              this.modelClass.prototype.isIdType(n),
              e
            );
          }),
          (i.resyncPicturesByWid = async function (n) {
            var t = this;
            try {
              var r = await o(
                "WAWebContactProfilePicThumbBridge",
              ).profilePicResync(
                n.map(function (e) {
                  if (e.isRegularUser()) {
                    var t,
                      n = o("WAWebContactCollection").ContactCollection.get(e),
                      r = o("WAWebChatCollection").ChatCollection.get(e);
                    return {
                      id: e,
                      tcToken: r == null ? void 0 : r.tcToken,
                      commonGid:
                        (r == null ? void 0 : r.tcToken) == null
                          ? n == null ||
                            (t = n.maybeCommonGroupChatModel) == null
                            ? void 0
                            : t.id
                          : null,
                    };
                  }
                  return { id: e };
                }),
              );
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "ProfilePicThumbStore:resyncPictures success",
                  ])),
              ),
                r.forEach(function (e) {
                  var n = t._getUpdatedProfilePicModel(e),
                    r = t.get(e.id);
                  r ? r.set(n) : t.add(babelHelpers.extends({ id: e.id }, n));
                }));
            } catch (e) {
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "ProfilePicThumbStore:resyncMyProfilePicture failed: ",
                    "",
                  ])),
                e,
              );
            }
          }),
          (i.resyncPictures = function (t) {
            var e = this;
            return t.length === 0
              ? Promise.resolve()
              : o("WAWebContactProfilePicThumbBridge")
                  .profilePicResync(
                    t.map(function (e) {
                      if (e.id.isRegularUser()) {
                        var t,
                          n = o("WAWebContactCollection").ContactCollection.get(
                            e.id,
                          ),
                          r = o("WAWebChatCollection").ChatCollection.get(e.id);
                        return {
                          id: e.id,
                          tag: e.tag,
                          tcToken: r == null ? void 0 : r.tcToken,
                          commonGid:
                            (r == null ? void 0 : r.tcToken) == null
                              ? n == null ||
                                (t = n.maybeCommonGroupChatModel) == null
                                ? void 0
                                : t.id
                              : null,
                        };
                      }
                      return { id: e.id, tag: e.tag };
                    }),
                  )
                  .then(function (n) {
                    (o("WALogger").LOG(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "ProfilePicThumbStore:resyncPictures success",
                        ])),
                    ),
                      n.forEach(function (t) {
                        var n = e.get(t.id);
                        n && n.set(e._getUpdatedProfilePicModel(t));
                      }),
                      t.forEach(function (t) {
                        (t.eurlStale && e.update(t.id), (t.stale = !1));
                      }));
                  })
                  .catch(
                    o("WAFilteredCatch").filteredCatch(
                      o("WAWebBackendErrors").ServerStatusCodeError,
                      function (e) {
                        e.status === 423 || e.status === 429
                          ? o("WALogger").WARN(
                              c ||
                                (c = babelHelpers.taggedTemplateLiteralLoose([
                                  "ProfilePicThumbStore:resyncPictures blocked ",
                                  "",
                                ])),
                              e.status,
                            )
                          : e.status >= 400 &&
                            o("WALogger").WARN(
                              d ||
                                (d = babelHelpers.taggedTemplateLiteralLoose([
                                  "ProfilePicThumbStore:resyncPictures dropped: ",
                                  "",
                                ])),
                              String(e),
                            );
                      },
                    ),
                  )
                  .catch(function (e) {
                    o("WALogger")
                      .WARN(
                        m ||
                          (m = babelHelpers.taggedTemplateLiteralLoose([
                            "ProfilePicThumbStore:resyncPictures dropped",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e));
                  });
          }),
          (i.findThumbnailWid = function (t) {
            var e = this;
            return t.find(function (t) {
              var n;
              return (n = e.get(t)) == null ? void 0 : n.img;
            });
          }),
          (i.getThumbnailWidFromVcard = function (t) {
            if (!t) return null;
            var e = o("WAWebVcardParsingUtils")
              .vcardPhoneNumberWids(t)
              .map(function (e) {
                return e;
              });
            if (e.length > 0) {
              var n;
              return (n = this.findThumbnailWid(e)) != null ? n : e[0];
            }
            var r = o("WAWebVcardParsingUtils").vcardLidWid(t);
            return r != null ? r : null;
          }),
          (i.isProfilePicRefreshNeeded = function (t, n) {
            if ((n === void 0 && (n = !1), t == null || n)) return !0;
            var e = Date.now() - t;
            return e > o("WATimeUtils").WEEK_MILLISECONDS;
          }),
          a
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    ((p.model = o("WAWebProfilePicThumbModel").ProfilePicThumb),
      (p.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS
          .PROFILE_PIC_THUMB_COLLECTION,
        trigger: "change:tag",
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.NONE,
        delay: 5e3,
      }));
    var _ = new p();
    l.ProfilePicThumbCollection = _;
  },
  98,
);
