__d(
  "WAWebNuxCtwaSuggestionBanner.react",
  [
    "WAWebBizGatingUtils",
    "WAWebCoolOffNuxBanner.react",
    "WAWebNewCTWASuggestionAction",
    "WAWebNuxBanner",
    "WAWebNuxCoolOff",
    "WAWebNuxCtwaSuggestionHelpers",
    "WAWebWamEnumBannerTypes",
    "err",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.createRef,
      c = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.$CTWASuggestionBanner$p_1 = u()),
            (t.getElement = function () {
              return t.$CTWASuggestionBanner$p_1.current;
            }),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.render = function () {
            var e = this.props,
              t = e.onInteract,
              n = e.suggestion,
              a = n.body,
              i = n.display,
              l = n.heading,
              u = n.highlight,
              c = n.id,
              d = babelHelpers.extends(
                {},
                o("WAWebNuxCtwaSuggestionHelpers").BANNER_CONFIG,
                {
                  storageAccessors: o(
                    "WAWebNuxCtwaSuggestionHelpers",
                  ).getStorageAccessors(c),
                  bannerId: c,
                  logImpression: function () {
                    o("WAWebNewCTWASuggestionAction").ctwaSuggestionShown(n);
                  },
                },
              );
            o("WAWebBizGatingUtils").adsActionBannersLoggingEnabled() &&
              (d.metricField = o(
                "WAWebWamEnumBannerTypes",
              ).BANNER_TYPES.SMB_CTWA_AD_ACTION_BANNER);
            var m = new (o("WAWebNuxCoolOff").CoolOffNux)(
                o("WAWebNuxCtwaSuggestionHelpers").BANNER_TYPE,
                d,
              ),
              p;
            return (
              i === "info" ? (p = "adActionInfo") : (p = "adActionWarning"),
              s.jsx(r("WAWebCoolOffNuxBanner.react"), {
                title: l,
                subtitle: a,
                actionText: u,
                onDismiss: function () {
                  (t == null || t(),
                    o("WAWebNewCTWASuggestionAction").ctwaSuggestionInteracted(
                      n,
                    ));
                },
                onClick: function () {
                  (t == null || t(),
                    o("WAWebNewCTWASuggestionAction").ctwaSuggestionInteracted(
                      n,
                      !0,
                    ));
                },
                nuxManager: m,
                theme: p,
              })
            );
          }),
          (t.shouldShow = function () {
            throw r("err")(
              "CTWASuggestionBanner#shouldShow should not be called",
            );
          }),
          t
        );
      })(o("WAWebNuxBanner").ExtendableNuxBanner);
    l.CTWASuggestionBanner = c;
  },
  98,
);
