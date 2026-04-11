__d(
  "WAWebNuxCollectionsBanner.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebCatalogCollection",
    "WAWebConnModel",
    "WAWebCoolOffNuxBanner.react",
    "WAWebNux",
    "WAWebNuxBanner",
    "WAWebNuxCoolOff",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumBannerTypes",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.createRef,
      d = {
        CLICKS_BEFORE_COOL_OFF: 1,
        COOL_OFF_DURATION_IN_DAYS: 2,
        COOL_OFF_START_STORAGE_KEY: o("WAWebNux").CoolOffPeriodKeys.CATALOG,
        MAX_VIEWS_IN_DAYS: 2,
        VIEWS_BEFORE_COOL_OFF_IN_DAYS: 1,
        metricField: o("WAWebWamEnumBannerTypes").BANNER_TYPES
          .SMB_COLLECTION_CREATION,
      };
    function m() {
      var e = o("WAWebCatalogCollection").CatalogCollection.get(
        o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
      );
      if (e == null || e.collections == null) return !1;
      var t = e.collections.getCollectionModels(!0),
        n = e.productCollection.getProductModels(!0).some(function (e) {
          return !e.isHidden && e.reviewStatus !== "REJECTED";
        });
      return n && t.length === 0;
    }
    var p = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.$CollectionsBanner$p_1 = c()),
          (t.getElement = function () {
            return t.$CollectionsBanner$p_1.current;
          }),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.render = function () {
          var e = this.props.onClick,
            t = new (o("WAWebNuxCoolOff").CoolOffNux)(
              o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX.COLLECTIONS,
              d,
            ),
            n = s._(/*BTDS*/ "Get started");
          return u.jsx(r("WAWebCoolOffNuxBanner.react"), {
            title: s._(/*BTDS*/ "Create new collection"),
            subtitle: s._(
              /*BTDS*/ "Group items into collections to stay organized.",
            ),
            actionText: n,
            onClick: e,
            nuxManager: t,
            theme: "nuxBlue",
          });
        }),
        (t.shouldShow = function () {
          return (
            o("WAWebABProps").getABPropConfigValue(
              "web_abprop_collections_nux_banner",
            ) &&
            o("WAWebConnModel").Conn.isSMB &&
            m() &&
            o("WAWebNuxCoolOff").shouldShowNUX(
              o("WAWebNux").NuxKeyTypes.COOL_OFF_NUX.COLLECTIONS,
              d,
            )
          );
        }),
        t
      );
    })(o("WAWebNuxBanner").NuxBanner);
    l.default = p;
  },
  226,
);
