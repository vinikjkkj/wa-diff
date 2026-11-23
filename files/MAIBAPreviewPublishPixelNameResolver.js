__d(
  "MAIBAPreviewPublishPixelNameResolver",
  [
    "MAIBAPreviewPublishPixelNameResolverQuery.graphql",
    "MAIBAPreviewPublishTrackingSpecFormatter",
    "RelayHooks",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useMemo,
      m = u.useState,
      p = new Map(),
      _ =
        e !== void 0
          ? e
          : (e = n("MAIBAPreviewPublishPixelNameResolverQuery.graphql"));
    function f(e) {
      var t = e.startsWith("fb_pixel:") ? "fb_pixel" : "offsite_pixel";
      return { field: t, id: e.slice(t.length + 1) };
    }
    function g(e, t) {
      var n = d(
          function () {
            return Array.from(
              new Set(
                e.map(function (e) {
                  return o(
                    "MAIBAPreviewPublishTrackingSpecFormatter",
                  ).trackingSpecPixelNameKey(e.field, e.id);
                }),
              ),
            )
              .sort()
              .join(",");
          },
          [e],
        ),
        r = o("RelayHooks").useRelayEnvironment(),
        a = m({ hasError: !1, key: "", names: p }),
        i = a[0],
        l = a[1];
      if (
        (c(
          function () {
            if (n !== "") {
              var e = !0,
                t = n.split(",").map(f),
                a = Array.from(
                  new Set(
                    t.map(function (e) {
                      return e.id;
                    }),
                  ),
                ).sort(),
                i = new Map();
              for (var s of t) {
                var u,
                  c = (u = i.get(s.id)) != null ? u : new Set();
                (c.add(s.field), i.set(s.id, c));
              }
              return (
                o("RelayHooks")
                  .fetchQuery(r, _, { ids: a })
                  .toPromise()
                  .then(function (t) {
                    if (e) {
                      if (t == null) {
                        l({ hasError: !0, key: n, names: p });
                        return;
                      }
                      var r = new Map();
                      for (var a of t.nodes)
                        if (a != null) {
                          var s = i.get(a.id);
                          if (a.__typename === "AdsPixel") {
                            var u = a.name;
                            (s == null ? void 0 : s.has("fb_pixel")) === !0 &&
                              u != null &&
                              u !== "" &&
                              r.set(
                                o(
                                  "MAIBAPreviewPublishTrackingSpecFormatter",
                                ).trackingSpecPixelNameKey("fb_pixel", a.id),
                                u,
                              );
                          } else if (a.__typename === "AdConversionPixel") {
                            var c = a.name;
                            (s == null ? void 0 : s.has("offsite_pixel")) ===
                              !0 &&
                              c != null &&
                              c !== "" &&
                              r.set(
                                o(
                                  "MAIBAPreviewPublishTrackingSpecFormatter",
                                ).trackingSpecPixelNameKey(
                                  "offsite_pixel",
                                  a.id,
                                ),
                                c,
                              );
                          }
                        }
                      l({ hasError: !1, key: n, names: r });
                    }
                  })
                  .catch(function () {
                    e && l({ hasError: !0, key: n, names: p });
                  }),
                function () {
                  e = !1;
                }
              );
            }
          },
          [r, n],
        ),
        n === "")
      )
        return { hasError: !1, isLoading: !1, slice: p };
      var s = i.key === n;
      return {
        hasError: s && i.hasError,
        isLoading: !s,
        slice: s ? i.names : p,
      };
    }
    var h = {
        blocksTable: !0,
        collect: o("MAIBAPreviewPublishTrackingSpecFormatter")
          .collectTrackingSpecPixelReferences,
        key: "pixel_names",
        useResolve: g,
      },
      y = h;
    l.default = y;
  },
  98,
);
