__d(
  "AdsLazyContainer",
  [
    "AdsErrorBoundary.react",
    "AdsProgressDialog.react",
    "CometPlaceholder.react",
    "FluxContainer",
    "LoadingMarkerArea.react",
    "lazyLoadComponent",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.loader,
        n = e.placeholderComponent,
        o = e.shouldPreload,
        a = e.shouldShow,
        l = e.stores,
        u = r("lazyLoadComponent")(t),
        c = (function (e) {
          function c() {
            for (
              var t, n = arguments.length, r = new Array(n), o = 0;
              o < n;
              o++
            )
              r[o] = arguments[o];
            return (
              (t = e.call.apply(e, [this].concat(r)) || this),
              (t.state = c.calculateState()),
              babelHelpers.assertThisInitialized(t) ||
                babelHelpers.assertThisInitialized(t)
            );
          }
          (babelHelpers.inheritsLoose(c, e),
            (c.calculateState = function () {
              var e = a();
              return { shouldLoad: e || !!(o && o()), shouldShow: e };
            }),
            (c.getStores = function () {
              return l;
            }));
          var d = c.prototype;
          return (
            (d.render = function () {
              if (!this.state.shouldLoad) return null;
              var e = n;
              return s.jsx(r("AdsErrorBoundary.react"), {
                moduleName: t.getModuleId(),
                children: s.jsx(r("LoadingMarkerArea.react"), {
                  name: "AdsLazyContainer:" + t.getModuleId(),
                  owner: "ads_front_end_infra",
                  children: s.jsx(r("CometPlaceholder.react"), {
                    fallback:
                      this.state.shouldShow && e != null ? s.jsx(e, {}) : null,
                    name: i.id,
                    children: s.jsx(u, babelHelpers.extends({}, this.props)),
                  }),
                }),
              });
            }),
            c
          );
        })(s.PureComponent),
        d = r("FluxContainer").create(c);
      return ((d.displayName = "LazyContainer(" + t.getModuleId() + ")"), d);
    }
    function c(e) {
      return u({
        loader: e.loader,
        shouldPreload: e.shouldPreload,
        shouldShow: e.shouldShow,
        stores: e.stores,
        placeholderComponent:
          e.disablePlaceholder === !0
            ? null
            : function () {
                return s.jsx(r("AdsProgressDialog.react"), { shown: !0 });
              },
      });
    }
    ((l.create = u), (l.createForDialog = c));
  },
  98,
);
