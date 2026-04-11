__d(
  "useWAWebDraftThumbnailUrl",
  [
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCreationResolveImageURL",
    "WAWebBizAdCreationResolveVideoThumbnailURL",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t,
        n,
        a = o("react-compiler-runtime").c(10),
        i = o("CometRelay").useRelayEnvironment(),
        l = e.firstChildPicture,
        s = e.legacyAdAccountId,
        d = e.linkImageHash,
        m = e.linkPicture,
        p = e.videoId,
        _ = e.videoImageHash,
        f = e.videoImageUrl,
        g = d != null ? d : _,
        h = (t = m != null ? m : l) != null ? t : p == null ? f : null,
        y = h == null && g != null && s != null,
        C = h == null && !y && p != null,
        b = c(null),
        v = b[0],
        S = b[1],
        R = c(!1),
        L = R[0],
        E = R[1],
        k = (n = g != null ? g : p) != null ? n : "",
        I = c(k),
        T = I[0],
        D = I[1];
      T !== k && (D(k), S(null), E(!1));
      var x = (y || C) && v == null && !L,
        $,
        P;
      (a[0] !== i || a[1] !== g || a[2] !== s || a[3] !== h || a[4] !== p
        ? (($ = function () {
            var e = !1;
            return (
              h == null && g != null && s != null
                ? r("WAWebBizAdCreationResolveImageURL")(i, s, g).then(
                    function (t) {
                      e || S(t);
                    },
                    function () {
                      (e || E(!0),
                        r("FBLogger")("wa_ctwa_web").warn(
                          "Failed to resolve draft thumbnail from image_hash",
                        ));
                    },
                  )
                : h == null &&
                  p != null &&
                  r("WAWebBizAdCreationResolveVideoThumbnailURL")(i, p).then(
                    function (t) {
                      e || S(t);
                    },
                    function () {
                      (e || E(!0),
                        r("FBLogger")("wa_ctwa_web").warn(
                          "Failed to resolve draft video thumbnail for video " +
                            p,
                        ));
                    },
                  ),
              function () {
                e = !0;
              }
            );
          }),
          (P = [h, g, s, p, i]),
          (a[0] = i),
          (a[1] = g),
          (a[2] = s),
          (a[3] = h),
          (a[4] = p),
          (a[5] = $),
          (a[6] = P))
        : (($ = a[5]), (P = a[6])),
        u($, P));
      var N = h != null ? h : v,
        M;
      return (
        a[7] !== x || a[8] !== N
          ? ((M = { thumbnailUrl: N, isLoadingThumbnail: x }),
            (a[7] = x),
            (a[8] = N),
            (a[9] = M))
          : (M = a[9]),
        M
      );
    }
    l.default = d;
  },
  98,
);
