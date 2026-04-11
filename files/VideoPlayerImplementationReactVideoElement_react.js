__d(
  "VideoPlayerImplementationReactVideoElement.react",
  ["gkx", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useRef;
    function p(e, t) {
      var n = o("react-compiler-runtime").c(5),
        r = m(null),
        a;
      n[0] !== t
        ? ((a = function (n) {
            ((r.current = n), t == null || t(n));
          }),
          (n[0] = t),
          (n[1] = a))
        : (a = n[1]);
      var i = a,
        l,
        s;
      return (
        n[2] !== e
          ? ((l = function () {
              e != null &&
                e !== "none" &&
                r.current != null &&
                r.current.load();
            }),
            (s = [e]),
            (n[2] = e),
            (n[3] = l),
            (n[4] = s))
          : ((l = n[3]), (s = n[4])),
        d(l, s),
        i
      );
    }
    function _(e, t) {
      return null;
    }
    var f = r("gkx")("22428") ? p : _;
    function g(e) {
      var t = e != null ? e : [],
        n = t[0],
        r = t[1];
      if (n == null && r == null) return null;
      var o = "";
      if (typeof n == "string") o = n;
      else if (Array.isArray(n)) {
        var a = n[0],
          i = n[1];
        o = a + " " + i;
      }
      var l = "";
      if (typeof r == "string") l = r;
      else if (Array.isArray(r)) {
        var s = r[0],
          u = r[1];
        l = s + " " + u;
      }
      return o + " " + l;
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.alt,
        r = e.audioOnly,
        a = e.isSpatial,
        i = e.poster,
        l = e.seoSrc,
        u = e.seoWebCrawlerVideoTracks,
        c = e.videoElementCallbacks,
        d = e.videoElementHDRPatchEnabled_EXPERIMENTAL,
        m = e.videoElementMountMode_EXPERIMENTAL,
        p = e.videoElementPreloadDisabled,
        _ = e.videoElementPreloadHint,
        h = e.videoElementRefCallback,
        y = e.videoPixelsFit,
        C = a === void 0 ? !1 : a,
        b = f(_, h),
        v = _ != null ? _ : p === !0 ? "none" : void 0;
      if (m === "unmounted") return null;
      var S;
      t[0] !== l || t[1] !== c
        ? ((S = l != null ? babelHelpers.extends({}, c, { src: l }) : c),
          (t[0] = l),
          (t[1] = c),
          (t[2] = S))
        : (S = t[2]);
      var R = S,
        L = y == null ? void 0 : y.objectPosition,
        E;
      t[3] !== L ? ((E = g(L)), (t[3] = L), (t[4] = E)) : (E = t[4]);
      var k = E,
        I = n != null ? n : void 0,
        T;
      t[5] !== r || t[6] !== d
        ? ((T = {
            0: "x1lliihq x5yr21d xh8yej3",
            2: "x1lliihq x5yr21d xh8yej3 x1ihime0",
            1: "x5yr21d xh8yej3 x1s85apg",
            3: "x5yr21d xh8yej3 x1ihime0 x1s85apg",
          }[((d === !0) << 1) | ((r === !0) << 0)]),
          (t[5] = r),
          (t[6] = d),
          (t[7] = T))
        : (T = t[7]);
      var D = b != null ? b : h,
        x;
      t[8] !== C || t[9] !== k || t[10] !== y
        ? ((x = C
            ? { width: "200%" }
            : y
              ? { objectFit: y.objectFit, objectPosition: k }
              : void 0),
          (t[8] = C),
          (t[9] = k),
          (t[10] = y),
          (t[11] = x))
        : (x = t[11]);
      var $;
      return (
        t[12] !== i ||
        t[13] !== v ||
        t[14] !== R ||
        t[15] !== u ||
        t[16] !== I ||
        t[17] !== T ||
        t[18] !== D ||
        t[19] !== x
          ? (($ = s.jsx(
              "video",
              babelHelpers.extends(
                {
                  "aria-label": I,
                  className: T,
                  controls: !1,
                  "data-testid": void 0,
                  muted: !0,
                  playsInline: !0,
                  preload: v,
                },
                R,
                { poster: i, ref: D, style: x, children: u },
              ),
            )),
            (t[12] = i),
            (t[13] = v),
            (t[14] = R),
            (t[15] = u),
            (t[16] = I),
            (t[17] = T),
            (t[18] = D),
            (t[19] = x),
            (t[20] = $))
          : ($ = t[20]),
        $
      );
    }
    l.default = h;
  },
  98,
);
