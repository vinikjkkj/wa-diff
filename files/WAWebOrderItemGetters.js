__d(
  "WAWebOrderItemGetters",
  ["WAWebGetters", "WAWebGettersCaches", "WAWebMediaData", "WAWebMediaTypes"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createOrderItemCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = s,
      m = c("thumbnailUrl"),
      p = u(
        function (e) {
          var t = e[0];
          return new (r("WAWebMediaData"))({
            mediaStage:
              t != null
                ? o("WAWebMediaTypes").MediaDataStage.RESOLVED
                : o("WAWebMediaTypes").MediaDataStage.PREPARING,
            renderableUrl: t != null ? "" + t : null,
          });
        },
        [m],
      );
    ((l.clearOrderItemGetterCacheFor = d), (l.getMediaData = p));
  },
  98,
);
