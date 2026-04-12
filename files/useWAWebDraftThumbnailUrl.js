__d(
  "useWAWebDraftThumbnailUrl",
  [
    "CometRelay",
    "FBLogger",
    "WAWebBizAdCreationResolveImageURL",
    "WAWebBizAdCreationResolveVideoThumbnailURL",
    "react",
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
        a = o("CometRelay").useRelayEnvironment(),
        i = e.firstChildPicture,
        l = e.legacyAdAccountId,
        s = e.linkImageHash,
        d = e.linkPicture,
        m = e.videoId,
        p = e.videoImageHash,
        _ = e.videoImageUrl,
        f = s != null ? s : p,
        g = (t = d != null ? d : i) != null ? t : m == null ? _ : null,
        h = g == null && f != null && l != null,
        y = g == null && !h && m != null,
        C = c(null),
        b = C[0],
        v = C[1],
        S = c(!1),
        R = S[0],
        L = S[1],
        E = (n = f != null ? f : m) != null ? n : "",
        k = c(E),
        I = k[0],
        T = k[1];
      I !== E && (T(E), v(null), L(!1));
      var D = (h || y) && b == null && !R;
      u(
        function () {
          var e = !1;
          return (
            g == null && f != null && l != null
              ? r("WAWebBizAdCreationResolveImageURL")(a, l, f).then(
                  function (t) {
                    e || v(t);
                  },
                  function () {
                    (e || L(!0),
                      r("FBLogger")("wa_ctwa_web").warn(
                        "Failed to resolve draft thumbnail from image_hash",
                      ));
                  },
                )
              : g == null &&
                m != null &&
                r("WAWebBizAdCreationResolveVideoThumbnailURL")(a, m).then(
                  function (t) {
                    e || v(t);
                  },
                  function () {
                    (e || L(!0),
                      r("FBLogger")("wa_ctwa_web").warn(
                        "Failed to resolve draft video thumbnail for video " +
                          m,
                      ));
                  },
                ),
            function () {
              e = !0;
            }
          );
        },
        [g, f, l, m, a],
      );
      var x = g != null ? g : b;
      return { thumbnailUrl: x, isLoadingThumbnail: D };
    }
    l.default = d;
  },
  98,
);
