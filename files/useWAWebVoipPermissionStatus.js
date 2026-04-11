__d(
  "useWAWebVoipPermissionStatus",
  [
    "WALogger",
    "WAWebNoop",
    "WAWebVoipAcquireMediaStream",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
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
        p = o("react-compiler-runtime").c(13),
        f = m(0),
        g = f[0],
        h = f[1],
        y = d(null),
        C = d(null),
        b,
        v;
      (p[0] !== t
        ? ((b = function () {
            var n,
              a = !0,
              i = function () {
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "voip: [PermissionStatus] permission changed, triggering re-query",
                    ])),
                ),
                  h(_));
              };
            if (
              ((n = navigator.permissions) == null ||
                n
                  .query({ name: "microphone" })
                  .then(function (e) {
                    a && ((y.current = e), e.addEventListener("change", i));
                  })
                  .catch(r("WAWebNoop")),
              t)
            ) {
              var l;
              (l = navigator.permissions) == null ||
                l
                  .query({ name: "camera" })
                  .then(function (e) {
                    a && ((C.current = e), e.addEventListener("change", i));
                  })
                  .catch(r("WAWebNoop"));
            }
            return function () {
              ((a = !1),
                y.current &&
                  (y.current.removeEventListener("change", i),
                  (y.current = null)),
                C.current &&
                  (C.current.removeEventListener("change", i),
                  (C.current = null)));
            };
          }),
          (v = [t]),
          (p[0] = t),
          (p[1] = b),
          (p[2] = v))
        : ((b = p[1]), (v = p[2])),
        c(b, v));
      var S;
      p[3] !== t
        ? ((S = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return o("WAWebVoipAcquireMediaStream").queryPermissionStatus(t);
            });
            return function () {
              return e.apply(this, arguments);
            };
          })()),
          (p[3] = t),
          (p[4] = S))
        : (S = p[4]);
      var R;
      p[5] !== t || p[6] !== a || p[7] !== g
        ? ((R = [t, a, g]), (p[5] = t), (p[6] = a), (p[7] = g), (p[8] = R))
        : (R = p[8]);
      var L = r("useWAWebAsync")(S, R),
        E =
          (i = (l = L.value) == null ? void 0 : l.micPermission) != null
            ? i
            : "prompt",
        k =
          (s = (u = L.value) == null ? void 0 : u.cameraPermission) != null
            ? s
            : "prompt",
        I;
      return (
        p[9] !== L.loading || p[10] !== E || p[11] !== k
          ? ((I = {
              micPermission: E,
              cameraPermission: k,
              isLoading: L.loading,
            }),
            (p[9] = L.loading),
            (p[10] = E),
            (p[11] = k),
            (p[12] = I))
          : (I = p[12]),
        I
      );
    }
    function _(e) {
      return e + 1;
    }
    l.default = p;
  },
  98,
);
