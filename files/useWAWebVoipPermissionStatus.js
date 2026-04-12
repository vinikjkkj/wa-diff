__d(
  "useWAWebVoipPermissionStatus",
  [
    "WALogger",
    "WAWebNoop",
    "WAWebVoipAcquireMediaStream",
    "asyncToGeneratorRuntime",
    "react",
    "useWAWebAsync",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = s || (s = o("react")),
      c = u.useEffect,
      d = u.useRef,
      m = u.useState;
    function p(t, a) {
      var i,
        l,
        s,
        u,
        p = m(0),
        _ = p[0],
        f = p[1],
        g = d(null),
        h = d(null);
      c(
        function () {
          var n,
            a = !0,
            i = function () {
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [PermissionStatus] permission changed, triggering re-query",
                  ])),
              ),
                f(function (e) {
                  return e + 1;
                }));
            };
          if (
            ((n = navigator.permissions) == null ||
              n
                .query({ name: "microphone" })
                .then(function (e) {
                  a && ((g.current = e), e.addEventListener("change", i));
                })
                .catch(r("WAWebNoop")),
            t)
          ) {
            var l;
            (l = navigator.permissions) == null ||
              l
                .query({ name: "camera" })
                .then(function (e) {
                  a && ((h.current = e), e.addEventListener("change", i));
                })
                .catch(r("WAWebNoop"));
          }
          return function () {
            ((a = !1),
              g.current &&
                (g.current.removeEventListener("change", i),
                (g.current = null)),
              h.current &&
                (h.current.removeEventListener("change", i),
                (h.current = null)));
          };
        },
        [t],
      );
      var y = r("useWAWebAsync")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return o("WAWebVoipAcquireMediaStream").queryPermissionStatus(t);
        }),
        [t, a, _],
      );
      return {
        micPermission:
          (i = (l = y.value) == null ? void 0 : l.micPermission) != null
            ? i
            : "prompt",
        cameraPermission:
          (s = (u = y.value) == null ? void 0 : u.cameraPermission) != null
            ? s
            : "prompt",
        isLoading: y.loading,
      };
    }
    l.default = p;
  },
  98,
);
