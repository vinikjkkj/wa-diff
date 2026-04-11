__d(
  "WAWebNewsletterDirectoryFunnelLogging",
  [
    "WALogger",
    "WAWebChannelDirectoryWamEvent",
    "WAWebNewsletterAttributionLogging",
    "WAWebNewsletterDirectoryFilterUtils",
    "WAWebNewsletterGatingUtils",
    "WAWebWamEnumChannelDirectoryAction",
    "WAWebWamEnumChannelDirectoryImpReason",
    "WAWebWamEnumChannelDirectorySurface",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(e) {
      return e === "" ? "Global" : e;
    }
    var d = (function () {
      function t() {
        ((this.$1 = !1),
          (this.sessionId = Math.round(Math.random() * 1e9)),
          (this.eventSequence = 0),
          (this.searchMode = !1),
          o(
            "WAWebNewsletterAttributionLogging",
          ).NewsletterCoreEventLogger.setDirectorySessionId(this.sessionId));
      }
      var n = t.prototype;
      return (
        (n.$2 = function () {
          this.eventSequence += 1;
        }),
        (n.setSearchMode = function (t) {
          this.searchMode = t;
        }),
        (n.logDirectoryOpen = function (n) {
          var t = n.channelDirectorySurface,
            r = n.countryCode,
            a = n.entryPointToLog,
            i = n.listView;
          if (!this.$1) {
            if (
              ((this.entryPoint = a),
              this.entryPoint == null &&
                (o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[NewsletterDirectoryFunnelLogging] entrypoint is null",
                    ])),
                ),
                (this.entryPoint = void 0)),
              (this.countrySelector = c(r)),
              (this.channelDirectorySurface = t),
              this.channelDirectorySurface === void 0 &&
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[NewsletterDirectoryFunnelLogging] surface undefined",
                    ])),
                ),
              i != null &&
                o(
                  "WAWebNewsletterAttributionLogging",
                ).NewsletterCoreEventLogger.setDirectoryFilter(
                  o(
                    "WAWebNewsletterDirectoryFilterUtils",
                  ).getNewsletterDirectoryFilterFromListView(i),
                ),
              o(
                "WAWebNewsletterGatingUtils",
              ).isDirectoryCategoriesLoggingEnabled())
            )
              this.logV3Event({
                action: o("WAWebWamEnumChannelDirectoryAction")
                  .CHANNEL_DIRECTORY_ACTION.DIRECTORY_OPEN_TAP,
              });
            else {
              var l, u;
              (this.logEvent({
                action: o("WAWebWamEnumChannelDirectoryAction")
                  .CHANNEL_DIRECTORY_ACTION.DIRECTORY_OPEN_TAP,
                entryPoint: (l = this.entryPoint) != null ? l : void 0,
              }),
                this.logV2Event({
                  action: o("WAWebWamEnumChannelDirectoryAction")
                    .CHANNEL_DIRECTORY_ACTION.DIRECTORY_IMP,
                  pillSelected: o(
                    "WAWebNewsletterDirectoryFilterUtils",
                  ).getNewsletterSelectedPill(i),
                  countrySelector: r,
                  entryPoint: (u = this.entryPoint) != null ? u : void 0,
                  impReason: o("WAWebWamEnumChannelDirectoryImpReason")
                    .CHANNEL_DIRECTORY_IMP_REASON.NOT_APPLICABLE,
                }));
            }
            this.$1 = !0;
          }
        }),
        (n.setPillSelected = function (t) {
          this.pillSelected = o(
            "WAWebNewsletterDirectoryFilterUtils",
          ).getNewsletterSelectedPill(t);
        }),
        (n.setDirectorySurface = function (t) {
          this.channelDirectorySurface = t;
        }),
        (n.logCategoryExploreClick = function (t) {
          var e = t.sectionIndex,
            n = t.sectionName;
          (this.$3(n, e),
            o(
              "WAWebNewsletterGatingUtils",
            ).isDirectoryCategoriesLoggingEnabled() &&
              this.logV3Event({
                action: o("WAWebWamEnumChannelDirectoryAction")
                  .CHANNEL_DIRECTORY_ACTION.DIRECTORY_CATEGORY_SEE_ALL,
              }));
        }),
        (n.logDirectoryClose = function () {
          (o(
            "WAWebNewsletterAttributionLogging",
          ).NewsletterCoreEventLogger.setDirectorySessionId(null),
            o(
              "WAWebNewsletterAttributionLogging",
            ).NewsletterCoreEventLogger.setDirectoryFilter(null),
            this.logEvent({
              action: o("WAWebWamEnumChannelDirectoryAction")
                .CHANNEL_DIRECTORY_ACTION.DIRECTORY_CLOSED_TAP,
            }));
        }),
        (n.resetValuesForDirectoryCategoriesPage = function () {
          o(
            "WAWebNewsletterGatingUtils",
          ).isDirectoryCategoriesLoggingEnabled() &&
            (this.clearSelectedCategory(),
            (this.pillSelected = void 0),
            (this.channelDirectorySurface = o(
              "WAWebWamEnumChannelDirectorySurface",
            ).CHANNEL_DIRECTORY_SURFACE.CHANNEL_DIRECTORY_CATEGORIES));
        }),
        (n.logCategorySelection = function (t) {
          var e = t.categoryIndex,
            n = t.categoryName;
          (this.$3(n, e),
            o(
              "WAWebNewsletterGatingUtils",
            ).isDirectoryCategoriesLoggingEnabled() &&
              this.logV3Event({
                action: o("WAWebWamEnumChannelDirectoryAction")
                  .CHANNEL_DIRECTORY_ACTION.DIRECTORY_SEARCH_TAP,
                channelCategoryName: n,
                channelCategoryIndex: e,
              }));
        }),
        (n.logSearchTap = function () {
          this.searchMode ||
            (o(
              "WAWebNewsletterGatingUtils",
            ).isDirectoryCategoriesLoggingEnabled()
              ? this.logV3Event({
                  action: o("WAWebWamEnumChannelDirectoryAction")
                    .CHANNEL_DIRECTORY_ACTION.DIRECTORY_SEARCH_TAP,
                })
              : (this.logEvent({
                  action: o("WAWebWamEnumChannelDirectoryAction")
                    .CHANNEL_DIRECTORY_ACTION.DIRECTORY_SEARCH_TAP,
                }),
                this.logV2Event({
                  action: o("WAWebWamEnumChannelDirectoryAction")
                    .CHANNEL_DIRECTORY_ACTION.DIRECTORY_SEARCH_IMP,
                })));
        }),
        (n.logServerError = function () {
          this.logEvent({
            action: o("WAWebWamEnumChannelDirectoryAction")
              .CHANNEL_DIRECTORY_ACTION.DIRECTORY_SERVER_ERROR,
          });
        }),
        (n.logViewChange = function (t, n) {
          (o(
            "WAWebNewsletterAttributionLogging",
          ).NewsletterCoreEventLogger.setDirectoryFilter(
            o(
              "WAWebNewsletterDirectoryFilterUtils",
            ).getNewsletterDirectoryFilterFromListView(t),
          ),
            o(
              "WAWebNewsletterGatingUtils",
            ).isDirectoryCategoriesLoggingEnabled()
              ? ((this.pillSelected = o(
                  "WAWebNewsletterDirectoryFilterUtils",
                ).getNewsletterSelectedPill(t)),
                this.logV3Event({
                  action: o("WAWebWamEnumChannelDirectoryAction")
                    .CHANNEL_DIRECTORY_ACTION.DIRECTORY_PILL_SELECTION,
                }))
              : this.$4({
                  view: t,
                  countryCode: n,
                  impReason: o("WAWebWamEnumChannelDirectoryImpReason")
                    .CHANNEL_DIRECTORY_IMP_REASON.PILL_SELECTION,
                }));
        }),
        (n.logRegionChange = function (t, n) {
          ((this.countrySelector = c(t)),
            o(
              "WAWebNewsletterGatingUtils",
            ).isDirectoryCategoriesLoggingEnabled()
              ? this.logV3Event({
                  action: o("WAWebWamEnumChannelDirectoryAction")
                    .CHANNEL_DIRECTORY_ACTION.DIRECTORY_COUNTRY_SELECTION,
                })
              : this.$4({
                  view: n,
                  countryCode: t,
                  impReason: o("WAWebWamEnumChannelDirectoryImpReason")
                    .CHANNEL_DIRECTORY_IMP_REASON.COUNTRY_SELECTION,
                }));
        }),
        (n.$4 = function (t) {
          var e = t.countryCode,
            n = t.impReason,
            r = t.view;
          this.searchMode ||
            this.logV2Event({
              action: o("WAWebWamEnumChannelDirectoryAction")
                .CHANNEL_DIRECTORY_ACTION.DIRECTORY_IMP,
              pillSelected: o(
                "WAWebNewsletterDirectoryFilterUtils",
              ).getNewsletterSelectedPill(r),
              countrySelector: e,
              impReason: n,
            });
        }),
        (n.$5 = function (t, n, r) {
          try {
            this.logEvent({
              action: t,
              channelIndex: r,
              cid: o("WAWebWidFactory").asNewsletterWidOrThrow(n).user,
            });
          } catch (e) {
            o("WALogger").WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[NewsletterDirectoryFunnelLogging] row action log failed: ",
                  "",
                ])),
              e,
            );
          }
        }),
        (n.logNavigateToNewsletterFromRow = function (t, n) {
          o(
            "WAWebNewsletterGatingUtils",
          ).isDirectoryCategoriesLoggingEnabled() ||
            this.$5(
              o("WAWebWamEnumChannelDirectoryAction").CHANNEL_DIRECTORY_ACTION
                .DIRECTORY_NAVIGATE_TO_CHANNEL,
              t,
              n,
            );
        }),
        (n.logNewsletterFollow = function (t, n) {
          o(
            "WAWebNewsletterGatingUtils",
          ).isDirectoryCategoriesLoggingEnabled() ||
            this.$5(
              o("WAWebWamEnumChannelDirectoryAction").CHANNEL_DIRECTORY_ACTION
                .DIRECTORY_FOLLOW_TAP,
              t,
              n,
            );
        }),
        (n.logNewsletterUnfollow = function (t, n) {
          o(
            "WAWebNewsletterGatingUtils",
          ).isDirectoryCategoriesLoggingEnabled() ||
            this.$5(
              o("WAWebWamEnumChannelDirectoryAction").CHANNEL_DIRECTORY_ACTION
                .DIRECTORY_UNFOLLOW_TAP,
              t,
              n,
            );
        }),
        (n.logEvent = function (t) {
          (this.$6(
            babelHelpers.extends(
              {
                sessionId: this.sessionId,
                eventSequence: this.eventSequence,
                searchMode: this.searchMode,
              },
              t,
            ),
          ),
            this.$2());
        }),
        (n.logV2Event = function (t) {
          (this.$6(
            babelHelpers.extends(
              {
                sessionId: this.sessionId,
                eventSequence: this.eventSequence,
                searchMode: this.searchMode,
                countrySelector:
                  t.countrySelector == null ? void 0 : c(t.countrySelector),
              },
              t,
            ),
          ),
            this.$2());
        }),
        (n.logV3Event = function (t) {
          var e, n, r, o, a, i;
          (this.$6(
            babelHelpers.extends(
              {
                sessionId: this.sessionId,
                eventSequence: this.eventSequence,
                countrySelector:
                  (e = this.countrySelector) != null ? e : void 0,
                entryPoint: (n = this.entryPoint) != null ? n : void 0,
                channelDirectorySurface:
                  (r = this.channelDirectorySurface) != null ? r : void 0,
                channelCategoryName:
                  (o = this.categoryName) != null ? o : void 0,
                channelCategoryIndex:
                  (a = this.categoryIndex) != null ? a : void 0,
                pillSelected: (i = this.pillSelected) != null ? i : void 0,
              },
              t,
            ),
          ),
            this.$2());
        }),
        (n.$6 = function (t) {
          var e = t.action,
            n = t.channelCategoryIndex,
            r = t.channelCategoryName,
            a = t.channelDirectorySurface,
            i = t.channelIndex,
            l = t.cid,
            s = t.countrySelector,
            u = t.entryPoint,
            c = t.eventSequence,
            d = t.impReason,
            m = t.pillSelected,
            p = t.searchMode,
            _ = t.sessionId,
            f = new (o(
              "WAWebChannelDirectoryWamEvent",
            ).ChannelDirectoryWamEvent)({
              channelDirectorySessionId: _,
              channelDirectoryActionSequenceNumber: c,
              channelDirectoryAction: e,
              channelDirectoryEntryPoint: u,
              cid: l,
              searchMode: p,
              channelIndex: i,
              pillSelected: m,
              countrySelector: s,
              impReason: d,
              channelDirectorySurface: a,
              channelCategoryName: r,
              channelCategoryIndex: n,
            });
          f.commit();
        }),
        (n.clearSelectedCategory = function () {
          ((this.categoryName = void 0), (this.categoryIndex = void 0));
        }),
        (n.$3 = function (t, n) {
          ((this.categoryName = m(t)), (this.categoryIndex = p(n, t)));
        }),
        t
      );
    })();
    function m(e) {
      if (!(e === "EXPLORE" || e === "EXPLORE_MORE")) return e;
    }
    function p(e, t) {
      if (!(t === "EXPLORE" || t === "EXPLORE_MORE")) return e;
    }
    l.NewsletterDirectoryFunnelLogger = d;
  },
  98,
);
