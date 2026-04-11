__d(
  "WAWebStickerAnimationCanvas.react",
  [
    "WALogger",
    "WAWebFileUtils",
    "WAWebStickerControlledAnimationCanvas.react",
    "WAWebWebpToAnimationFrames",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s,
      d = c.useEffect,
      m = c.useState;
    function p(t) {
      var n = t.blob,
        a = m(null),
        i = a[0],
        l = a[1];
      if (
        (d(function () {
          o("WAWebFileUtils")
            .blobToArrayBuffer(n)
            .then(r("WAWebWebpToAnimationFrames"))
            .then(function (e) {
              l(e);
            })
            .catch(function (t) {
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "AnimationCanvas error: ",
                    "",
                  ])),
                t,
              );
            });
        }, []),
        !i)
      )
        return t.renderPreview();
      var s = i.frames,
        c = i.height,
        p = i.width;
      return u.jsx(r("WAWebStickerControlledAnimationCanvas.react"), {
        className: t.className,
        width: p,
        height: c,
        animationFrames: s,
        startAnimation: !!(t.loopAnimation || t.startAnimation),
        maxLoops: t.maxLoops,
        onClick: t.onClick,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
