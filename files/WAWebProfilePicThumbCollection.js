__d(
  "WAWebProfilePicThumbCollection",
  [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
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
    "WAWebProfilePicPrivacyTokenGating",
    "WAWebProfilePicThumbModel",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebStaleBaseCollection",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebUserPrefsKeys",
    "WAWebVcardParsingUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "cr:17219",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = (function (t) {
        function a() {
          var e, a;
          ((a = t.call(this) || this),
            (a.findImpl = function (e) {
              var t,
                a,
                i,
                l,
                s = e.isNewsletter()
                  ? r("WAWebNewsletterCollection")
                  : o("WAWebChatCollection").ChatCollection,
                u = s.get(e),
                c =
                  (u == null || (t = u.groupMetadata) == null
                    ? void 0
                    : t.groupType) === o("WAWebGroupType").GroupType.COMMUNITY,
                d = r("WAWebUnjoinedSubgroupMetadataCollection").get(
                  e.toString(),
                );
              if (
                (u != null &&
                  u.isReadOnly &&
                  !c &&
                  !(u != null && o("WAWebChatGetters").getIsNewsletter(u)) &&
                  d == null) ||
                (u != null && (a = u.groupMetadata) != null && a.terminated) ||
                (u != null &&
                  (i = u.newsletterMetadata) != null &&
                  i.terminated) ||
                (u != null && (l = u.newsletterMetadata) != null && l.isPreview)
              )
                return (p || (p = n("Promise"))).resolve({ id: e, stale: !0 });
              if (o("WAWebBotUtils").isBotChannelFBID(e))
                return (p || (p = n("Promise"))).resolve({ id: e });
              if (
                (r("WAWebWid").isUser(e) ||
                  r("WAWebWid").isGroup(e) ||
                  r("WAWebWid").isNewsletter(e)) &&
                !r("WAWebWid").isPSA(e)
              ) {
                var m,
                  _ = c
                    ? e
                    : u == null || (m = u.groupMetadata) == null
                      ? void 0
                      : m.parentGroup;
                if (
                  (d != null && (_ = d.parentGroupId),
                  o("WAWebSocketModel").Socket.stream !==
                    o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED)
                ) {
                  var f;
                  if (
                    o(
                      "WAWebProfilePicPrivacyTokenGating",
                    ).isProfilePicIQPrivacyTokenEnabled() &&
                    r("WAWebWid").isUser(e)
                  ) {
                    var g,
                      h = o("WAWebContactCollection").ContactCollection.get(e),
                      y = o("WAWebChatCollection").ChatCollection.get(e);
                    return o(
                      "WAWebContactProfilePicThumbBridge",
                    ).requestProfilePicFromServer({
                      id: e,
                      parentGroupId: _,
                      tcToken: y == null ? void 0 : y.tcToken,
                      commonGid:
                        (y == null ? void 0 : y.tcToken) == null
                          ? h == null ||
                            (g = h.maybeCommonGroupChatModel) == null
                            ? void 0
                            : g.id
                          : null,
                    });
                  }
                  return o(
                    "WAWebContactProfilePicThumbBridge",
                  ).requestProfilePicFromServer({
                    id: e,
                    parentGroupId: _,
                    newsletterRole: e.isNewsletter()
                      ? (f = r("WAWebNewsletterMetadataCollection").get(e)) ==
                        null
                        ? void 0
                        : f.membershipType
                      : void 0,
                  });
                }
                return (p || (p = n("Promise"))).resolve({ id: e, stale: !0 });
              }
              return (p || (p = n("Promise"))).resolve({ id: e, tag: null });
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
          return (
            i &&
              a.listenTo(a, "add remove change:timestamp", function (e, t, n) {
                var r;
                (r = i.pictures) == null || r.notifyUpdate(e);
              }),
            a
          );
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
          (i.resyncPicturesByWid = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var n = this;
                try {
                  var r = yield o(
                    "WAWebContactProfilePicThumbBridge",
                  ).profilePicResync(
                    t.map(function (e) {
                      if (e.isRegularUser()) {
                        var t,
                          n = o("WAWebContactCollection").ContactCollection.get(
                            e,
                          ),
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
                      var t = n._getUpdatedProfilePicModel(e),
                        r = n.get(e.id);
                      r
                        ? r.set(t)
                        : n.add(babelHelpers.extends({ id: e.id }, t));
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
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (i.resyncPictures = function (t) {
            var e = this;
            return t.length === 0
              ? (p || (p = n("Promise"))).resolve()
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
                    o("WALogger").WARN(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "ProfilePicThumbStore:resyncPictures dropped: ",
                          "",
                        ])),
                      String(e),
                    );
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
    ((_.model = o("WAWebProfilePicThumbModel").ProfilePicThumb),
      (_.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS
          .PROFILE_PIC_THUMB_COLLECTION,
        trigger: "change:tag",
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.NONE,
        delay: 5e3,
      }));
    var f = new _();
    l.ProfilePicThumbCollection = f;
  },
  98,
);
