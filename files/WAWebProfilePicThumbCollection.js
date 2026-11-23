__d(
  "WAWebProfilePicThumbCollection",
  [
    "WAComms",
    "WAFilteredCatch",
    "WALogger",
    "WATimeUtils",
    "WAWebApiContact",
    "WAWebBackendErrors",
    "WAWebBackendRuntime",
    "WAWebBaseCachePolicy",
    "WAWebBotUtils",
    "WAWebChatCollection",
    "WAWebChatGetters",
    "WAWebContactCollection",
    "WAWebContactProfilePicThumbBridge",
    "WAWebGroupMetadataTypeUtils",
    "WAWebGroupType",
    "WAWebNewsletterCollection",
    "WAWebNewsletterMetadataCollection",
    "WAWebNewsletterMetadataGetters",
    "WAWebNoop",
    "WAWebProfilePicThumbGetters",
    "WAWebProfilePicThumbModel",
    "WAWebProfilePictureService",
    "WAWebSocketConstants",
    "WAWebSocketModel",
    "WAWebStaleBaseCollection",
    "WAWebThemeSession",
    "WAWebUnjoinedSubgroupMetadataCollection",
    "WAWebUserPrefsKeys",
    "WAWebUserUtils",
    "WAWebVcardParsingUtils",
    "WAWebVoipGatingUtils",
    "WAWebWid",
    "WAWebWindowsHybridBridgeInitiator",
    "cr:17219",
    "err",
    "getErrorSafe",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = new Set(),
      f = (function (t) {
        function a() {
          var a, i;
          ((i = t.call(this) || this),
            (i.$ProfilePicThumbCollectionImpl$p_1 = new Set()),
            (i.findImpl = function (t) {
              var n;
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
                  Promise.reject(
                    r("err")(
                      "ProfilePicThumbCollection.findImpl called with a non-WAWebWid id",
                    ),
                  )
                );
              var a = t.isNewsletter()
                  ? r("WAWebNewsletterCollection")
                  : o("WAWebChatCollection").ChatCollection,
                l = a.get(t),
                s =
                  o("WAWebGroupMetadataTypeUtils").getMaybeGroupType(
                    l == null ? void 0 : l.groupMetadata,
                  ) === o("WAWebGroupType").GroupType.COMMUNITY,
                u = r("WAWebUnjoinedSubgroupMetadataCollection").get(
                  t.toString(),
                ),
                c = l == null ? void 0 : l.newsletterMetadata;
              if (
                (l != null &&
                  l.isReadOnly &&
                  !s &&
                  !(l != null && o("WAWebChatGetters").getIsNewsletter(l)) &&
                  u == null) ||
                (l != null && (n = l.groupMetadata) != null && n.terminated) ||
                (c != null && c.terminated) ||
                (c != null &&
                  o("WAWebNewsletterMetadataGetters").getIsPreview(c))
              )
                return Promise.resolve({ id: t, stale: !0 });
              if (g(t)) return Promise.resolve({ id: t });
              if (
                (r("WAWebWid").isUser(t) ||
                  r("WAWebWid").isGroup(t) ||
                  r("WAWebWid").isNewsletter(t)) &&
                !r("WAWebWid").isPSA(t)
              ) {
                var d,
                  m = s
                    ? t
                    : l == null || (d = l.groupMetadata) == null
                      ? void 0
                      : d.parentGroup;
                u != null && (m = u.parentGroupId);
                var p =
                  o("WAWebSocketModel").Socket.stream !==
                    o("WAWebSocketConstants").SOCKET_STREAM.DISCONNECTED ||
                  (o("WAWebVoipGatingUtils").isGuestViewer() &&
                    o("WAComms").isSocketConnected());
                if (p) {
                  var _;
                  if (r("WAWebWid").isUser(t)) {
                    var f,
                      h = o("WAWebContactCollection").ContactCollection.get(t),
                      y = o("WAWebChatCollection").ChatCollection.get(t);
                    return (
                      o("WAWebBackendRuntime").isWebDiBackendEnabled()
                        ? o("WAWebBackendRuntime").runtime(
                            o("WAWebProfilePictureService")
                              .ProfilePictureService,
                          ).requestProfilePicFromServer
                        : o("WAWebContactProfilePicThumbBridge")
                            .requestProfilePicFromServer
                    )({
                      id: t,
                      parentGroupId: m,
                      tcToken: y == null ? void 0 : y.tcToken,
                      commonGid:
                        (y == null ? void 0 : y.tcToken) == null
                          ? h == null ||
                            (f = h.maybeCommonGroupChatModel) == null
                            ? void 0
                            : f.id
                          : null,
                    });
                  }
                  return (
                    o("WAWebBackendRuntime").isWebDiBackendEnabled()
                      ? o("WAWebBackendRuntime").runtime(
                          o("WAWebProfilePictureService").ProfilePictureService,
                        ).requestProfilePicFromServer
                      : o("WAWebContactProfilePicThumbBridge")
                          .requestProfilePicFromServer
                  )({
                    id: t,
                    parentGroupId: m,
                    newsletterRole: t.isNewsletter()
                      ? (_ = r("WAWebNewsletterMetadataCollection").get(t)) ==
                        null
                        ? void 0
                        : _.membershipType
                      : void 0,
                  });
                }
                return (
                  i.$ProfilePicThumbCollectionImpl$p_1.add(t),
                  Promise.resolve({ id: t, stale: !0 })
                );
              }
              return Promise.resolve({ id: t, tag: null });
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
          var l =
            (a = n("cr:17219")) == null
              ? void 0
              : a.getWindowsBridge(
                  r("WAWebWindowsHybridBridgeInitiator")
                    .WAWebProfilePicThumbCollection,
                );
          return (
            l &&
              i.listenTo(
                i,
                ["add", "remove", "change:timestamp"],
                function (e, t, n) {
                  var r;
                  (r = l.pictures) == null || r.notifyUpdate(e);
                },
              ),
            i.listenTo(i, ["add", "change"], function (e) {
              i._mirrorMeRow(e);
            }),
            i
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.fetchPicsSkippedWhileDisconnected = function () {
            var e = Array.from(this.$ProfilePicThumbCollectionImpl$p_1);
            this.$ProfilePicThumbCollectionImpl$p_1.clear();
            for (var t of e) {
              var n = this.get(t);
              (n == null ? void 0 : n.stale) === !0 &&
                n.hasObservers() &&
                this.find(t).catch(r("WAWebNoop"));
            }
          }),
          (i.clearPicsSkippedWhileDisconnected = function () {
            this.$ProfilePicThumbCollectionImpl$p_1.clear();
          }),
          (i._mirrorMeRow = function (t) {
            if (o("WAWebUserUtils").isMeAccount(t.id)) {
              var e = t.id.toString();
              if (!_.has(e)) {
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
                      _.add(i);
                      try {
                        var l = this.gadd(a);
                        l.set(r);
                      } finally {
                        _.delete(i);
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
          (i.resyncPicturesByWid = async function (t) {
            var e = this,
              n = t.filter(function (e) {
                return !g(e);
              });
            if (n.length !== 0)
              try {
                var r = await o(
                  "WAWebContactProfilePicThumbBridge",
                ).profilePicResync(
                  n.map(function (e) {
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
                  r.forEach(function (t) {
                    var n = e._getUpdatedProfilePicModel(t),
                      r = e.get(t.id);
                    r ? r.set(n) : e.add(babelHelpers.extends({ id: t.id }, n));
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
              return o("WAWebProfilePicThumbGetters").getMaybeImg(e.get(t));
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
          (i.remove = function (n, r) {
            var e = t.prototype.remove.call(this, n, r);
            return (
              e.forEach(function (e) {
                e != null &&
                  o(
                    "WAWebProfilePicThumbGetters",
                  ).clearProfilePicThumbGetterCacheFor(e);
              }),
              e
            );
          }),
          (i.reset = function () {
            (this.forEach(
              o("WAWebProfilePicThumbGetters")
                .clearProfilePicThumbGetterCacheFor,
            ),
              t.prototype.reset.call(this));
          }),
          a
        );
      })(o("WAWebStaleBaseCollection").StaleBaseCollection);
    ((f.model = o("WAWebProfilePicThumbModel").ProfilePicThumb),
      (f.cachePolicy = {
        id: o("WAWebUserPrefsKeys").COLLECTIONS_KEYS
          .PROFILE_PIC_THUMB_COLLECTION,
        trigger: "change:tag",
        policy: o("WAWebBaseCachePolicy").CACHE_POLICY.NONE,
        delay: 5e3,
      }));
    function g(e) {
      return (
        e.isAiHub() ||
        o("WAWebBotUtils").isBotChannelFBID(e) ||
        o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(e) ||
        e.isFbidBot()
      );
    }
    function h() {
      var e = new f();
      return (
        o("WAWebThemeSession").subscribeToThemeChanges(function (t) {
          e.getModelsArray().forEach(function (e) {
            e.id.isAiHub() && e.set({ isDarkTheme: t });
          });
        }),
        e.listenTo(o("WAWebSocketModel").Socket, "change:stream", function () {
          o("WAWebSocketModel").Socket.stream ===
            o("WAWebSocketConstants").SOCKET_STREAM.CONNECTED &&
            (r("gkx")("15714")
              ? e.fetchPicsSkippedWhileDisconnected()
              : e.clearPicsSkippedWhileDisconnected());
        }),
        e
      );
    }
    var y = h();
    l.ProfilePicThumbCollection = y;
  },
  98,
);
