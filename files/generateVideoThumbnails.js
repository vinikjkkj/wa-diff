__d(
  "generateVideoThumbnails",
  [
    "invariant",
    "CPXComposerConstants",
    "CanvasVideoThumbnail",
    "HTMLMediaElementReadyStates",
    "Promise",
    "VideoFrameBuffer",
    "cr:909281",
    "gkx",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = 0.5625,
      c = 60;
    function d(t, o, a, i, l, u, d, h, y, C, b) {
      return (
        l === void 0 && (l = "contain"),
        u === void 0 && (u = 0),
        d === void 0 && (d = null),
        h === void 0 && (h = null),
        y === void 0 && (y = null),
        C === void 0 && (C = null),
        b === void 0 && (b = !0),
        new (e || (e = n("Promise")))(function (e, v) {
          var S = document.createElement("canvas"),
            R = [],
            L = 0,
            E = t.duration - u;
          C != null && (E = Math.min(E, C));
          var k = r("gkx")("3728");
          k && (E = Math.min(E, c));
          var I = E / i,
            T = null,
            D = null,
            x,
            $ = h != null ? h : m(d, o),
            P = y != null ? y : p(d, a),
            N = _(d, o),
            M = f(d, a);
          ((S.width = $ != null ? $ : o), (S.height = P != null ? P : a));
          var w = new (r("VideoFrameBuffer"))(S, t, l, $, P, N, M);
          w.updateFrameBuffer();
          var A = function () {
              w.updateFrameBuffer();
              var e = new (r("CanvasVideoThumbnail"))(
                S,
                t,
                u + (L - 1) * I,
                $,
                P,
                N,
                M,
              );
              (R.push(e),
                (!T || e.getURL().length > T.getURL().length) &&
                  ((T = e), (D = b ? g(d, t) : null)),
                O());
            },
            F = function () {
              if (
                t.readyState >=
                r("HTMLMediaElementReadyStates").HAVE_CURRENT_DATA
              )
                A();
              else if (n("cr:909281") !== null)
                var e = n("cr:909281").listen(t, "loadeddata", function () {
                  (e.remove(), A());
                });
              else t.addEventListener("loadeddata", A, { once: !0 });
            },
            O = function () {
              (L === 0 &&
                (n("cr:909281") !== null
                  ? (x = n("cr:909281").listen(t, "seeked", F))
                  : t.addEventListener("seeked", F)),
                L < i
                  ? ((t.currentTime = u + L * I), L++)
                  : (n("cr:909281") !== null
                      ? x && x.remove()
                      : t.removeEventListener("seeked", F),
                    T != null || s(0, 152521),
                    e({
                      thumbnails: R,
                      selectedThumbnail: T,
                      croppedThumbnailUri: D,
                    })));
            };
          if (t.videoWidth === 0 || t.videoHeight === 0) {
            v();
            return;
          }
          O();
        })
      );
    }
    function m(e, t) {
      if (e && e.spherical === !0) {
        if (e.stereoMode === "left-right") return t / 2;
        if (e.projectionType === "cubemap") return t / 3;
      }
      return null;
    }
    function p(e, t) {
      return e &&
        e.spherical === !0 &&
        (e.stereoMode === "top-bottom" || e.projectionType === "cubemap")
        ? t / 2
        : null;
    }
    function _(e, t) {
      return e && e.spherical === !0 && e.projectionType === "cubemap"
        ? t / 3
        : 0;
    }
    function f(e, t) {
      return e && e.spherical === !0 && e.projectionType === "cubemap"
        ? t / 2
        : 0;
    }
    function g(e, t) {
      var n =
          t.videoWidth != null && t.videoHeight != null
            ? t.videoWidth / t.videoHeight
            : u,
        r = n < 1;
      if (e == null && !r) {
        var a = document.createElement("canvas"),
          i = a.getContext("2d"),
          l = t.videoWidth,
          s = t.videoHeight;
        ((a.width = l), (a.height = s), i.drawImage(t, 0, 0, l, s));
        var c = document.createElement("canvas"),
          d,
          m;
        (n >= 1 && n < 1.2
          ? ((d =
              l *
              (o("CPXComposerConstants").REEL_THUMBNAIL_WIDTH /
                o("CPXComposerConstants").REEL_THUMBNAIL_HEIGHT)),
            (m = s))
          : ((d = s), (m = l)),
          (c.width = d),
          (c.height = m));
        var p = c.getContext("2d");
        return (
          p.drawImage(a, 0, 0, l, s, 0, 0, d, m),
          c.toDataURL("image/jpeg")
        );
      }
      return null;
    }
    l.default = d;
  },
  98,
);
