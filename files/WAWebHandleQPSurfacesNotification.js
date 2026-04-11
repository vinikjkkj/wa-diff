__d(
  "WAWebHandleQPSurfacesNotification",
  [
    "WAWebBizGatingUtils",
    "WAWebCTWAConstants",
    "WAWebJobUpdateQPSurfaces",
    "WAWebParseQPSurfacesNotification",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
              "WAWebParseQPSurfacesNotification",
            ).parseQPSurfacesNotification(e),
            n = t.makeAck,
            r = t.surfaces,
            a = t.ts,
            i = n(),
            l;
          if (o("WAWebBizGatingUtils").qpGraphQLEnabled()) {
            var s = [],
              u = [];
            l = r.filter(function (e) {
              var t = o("WAWebCTWAConstants").KNOWN_QP_SURFACES.get(e.id);
              if (t == null) return !1;
              var n = !o("WAWebBizGatingUtils")
                .qpSurfaceIdsUsingGraphQL()
                .has(t);
              return n;
            });
          } else l = r;
          return (
            yield o(
              "WAWebJobUpdateQPSurfaces",
            ).updateQPSurfacesFromNotification(l, a),
            i
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {}
    l.handleQPSurfacesNotification = e;
  },
  98,
);
