__d(
  "WAWebProfilePicThumbCollection",
  [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebApiContact",
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
    "WAWebUserPrefsMeUser",
    "WAWebVcardParsingUtils",
    "WAWebWid",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f = new Set(),
      g = (function (t) {
        function a() {
          var a, i;
          ((i = t.call(this) || this),
            (i.findImpl = function (t) {
              var a, i, l, s;
              if (!(t instanceof r("WAWebWid")))
                return (
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "ProfilePicThumbCollection.findImpl non-WAWebWid id",
                        ])),
                    )
                    .sendLogs("profile-pic-find-invalid-id"),
                  (_ || (_ = n("Promise"))).reject(
                    r("err")(
                      "ProfilePicThumbCollection.findImpl called with a non-WAWebWid id",
                    ),
                  )
                );
              var u = t.isNewsletter()
                  ? r("WAWebNewsletterCollection")
                  : o("WAWebChatCollection").ChatCollection,
                c = u.get(t),
                d =
                  (c == null || (a = c.groupMetadata) == null
                    ? void 0
                    : a.groupType) === o("WAWebGroupType").GroupType.COMMUNITY,
                m = r("WAWebUnjoinedSubgroupMetadataCollection").get(
                  t.toString(),
                );
              if (
                (c != null &&
                  c.isReadOnly &&
                  !d &&
                  !(c != null && o("WAWebChatGetters").getIsNewsletter(c)) &&
                  m == null) ||
                (c != null && (i = c.groupMetadata) != null && i.terminated) ||
                (c != null &&
                  (l = c.newsletterMetadata) != null &&
                  l.terminated) ||
                (c != null && (s = c.newsletterMetadata) != null && s.isPreview)
              )
                return (_ || (_ = n("Promise"))).resolve({ id: t, stale: !0 });
              if (
                o("WAWebBotUtils").isBotChannelFBID(t) ||
                o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(t)
              )
                return (_ || (_ = n("Promise"))).resolve({ id: t });
              if (
                (r("WAWebWid").isUser(t) ||
                  r("WAWebWid").isGroup(t) ||
                  r("WAWebWid").isNewsletter(t)) &&
                !r("WAWebWid").isPSA(t)
              ) {
                var p,
                  f = d
                    ? t
                    : c == null || (p = c.groupMetadata) == null
                      ? void 0
                      : p.parentGroup;
                if (
                  (m != null && (f = m.parentGroupId),
                  o("WAWebSocketModel").Socket.stream !==
                    o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED)
                ) {
                  var g;
                  if (r("WAWebWid").isUser(t)) {
                    var h,
                      y = o("WAWebContactCollection").ContactCollection.get(t),
                      C = o("WAWebChatCollection").ChatCollection.get(t);
                    return o(
                      "WAWebContactProfilePicThumbBridge",
                    ).requestProfilePicFromServer({
                      id: t,
                      parentGroupId: f,
                      tcToken: C == null ? void 0 : C.tcToken,
                      commonGid:
                        (C == null ? void 0 : C.tcToken) == null
                          ? y == null ||
                            (h = y.maybeCommonGroupChatModel) == null
                            ? void 0
                            : h.id
                          : null,
                    });
                  }
                  return o(
                    "WAWebContactProfilePicThumbBridge",
                  ).requestProfilePicFromServer({
                    id: t,
                    parentGroupId: f,
                    newsletterRole: t.isNewsletter()
                      ? (g = r("WAWebNewsletterMetadataCollection").get(t)) ==
                        null
                        ? void 0
                        : g.membershipType
                      : void 0,
                  });
                }
                return (_ || (_ = n("Promise"))).resolve({ id: t, stale: !0 });
              }
              return (_ || (_ = n("Promise"))).resolve({ id: t, tag: null });
            }),
            (i._getUpdatedProfilePicModel = function (e) {
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
          var l = (a = n("cr:17219")) == null ? void 0 : a.getWindowsBridge();
          if (l) {
            var s = o("WAWebABProps").getABPropConfigValue(
              "web_anr_batch_profile_picture_bridge_operations",
            )
              ? "add remove change:eurl"
              : "add remove change:timestamp";
            i.listenTo(i, s, function (e, t, n) {
              var r;
              (r = l.pictures) == null || r.notifyUpdate(e);
            });
          }
          return (
            i.listenTo(i, "add change", function (e) {
              i._mirrorMeRow(e);
            }),
            i
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i._mirrorMeRow = function (t) {
            if (o("WAWebUserPrefsMeUser").isMeAccount(t.id)) {
              var e = t.id.toString();
              if (!f.has(e)) {
                var n = o("WAWebApiContact").getMeUserWids();
                if (!(n.length < 2)) {
                  var r = {
                    tag: t.tag,
                    eurl: t.eurl,
                    previewEurl: t.previewEurl,
                    fullDirectPath: t.fullDirectPath,
                    previewDirectPath: t.previewDirectPath,
                    filehash: t.filehash,
                    timestamp: t.timestamp,
                    stale: t.stale,
                    eurlStale: t.eurlStale,
                  };
                  for (var a of n)
                    if (!a.equals(t.id)) {
                      var i = a.toString();
                      f.add(i);
                      try {
                        var l = this.gadd(a);
                        l.set(r);
                      } finally {
                        f.delete(i);
                      }
                    }
                }
              }
            }
          }),
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
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                try {
                  var n = yield o(
                    "WAWebContactProfilePicThumbBridge",
                  ).profilePicResync(
                    e.map(function (e) {
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
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "ProfilePicThumbStore:resyncPictures success",
                      ])),
                  ),
                    n.forEach(function (e) {
                      var n = t._getUpdatedProfilePicModel(e),
                        r = t.get(e.id);
                      r
                        ? r.set(n)
                        : t.add(babelHelpers.extends({ id: e.id }, n));
                    }));
                } catch (e) {
                  o("WALogger").WARN(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "ProfilePicThumbStore:resyncMyProfilePicture failed: ",
                        "",
                      ])),
                    e,
                  );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (i.resyncPictures = function (t) {
            var e = this;
            return t.length === 0
              ? (_ || (_ = n("Promise"))).resolve()
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
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
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
                              d ||
                                (d = babelHelpers.taggedTemplateLiteralLoose([
                                  "ProfilePicThumbStore:resyncPictures blocked ",
                                  "",
                                ])),
                              e.status,
                            )
                          : e.status >= 400 &&
                            o("WALogger").WARN(
                              m ||
                                (m = babelHelpers.taggedTemplateLiteralLoose([
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
                        p ||
                          (p = babelHelpers.taggedTemplateLiteralLoose([
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
    ((g.model = o("WAWebProfilePicThumbModel").ProfilePicThumb),
      (g.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS
          .PROFILE_PIC_THUMB_COLLECTION,
        trigger: "change:tag",
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.NONE,
        delay: 5e3,
      }));
    var h = new g();
    l.ProfilePicThumbCollection = h;
  },
  98,
);
