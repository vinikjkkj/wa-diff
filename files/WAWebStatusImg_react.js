__d(
  "WAWebStatusImg.react",
  [
    "WAWebAnnotation.react",
    "WAWebImg.react",
    "WAWebMediaDataUtils",
    "WAWebMediaTypes",
    "WAWebMediaUrlProvider",
    "WAWebObjectFit.react",
    "WAWebStatusButton.react",
    "WAWebWamEnumWebcRmrReasonCode",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e) {
      var t = o("react-compiler-runtime").c(28),
        n = e.mediaData,
        a = e.msg,
        i = e.onMouseDown,
        l = e.onMouseUp,
        u = e.src,
        c;
      t[0] !== a.actionLink
        ? ((c = a.actionLink || {}), (t[0] = a.actionLink), (t[1] = c))
        : (c = t[1]);
      var d = c,
        m = d.buttonTitle,
        p = d.url,
        _;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d" }),
          (t[2] = _))
        : (_ = t[2]);
      var f;
      t[3] !== n.fullHeight || t[4] !== n.fullWidth
        ? ((f = { width: n.fullWidth, height: n.fullHeight }),
          (t[3] = n.fullHeight),
          (t[4] = n.fullWidth),
          (t[5] = f))
        : (f = t[5]);
      var g;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = {
            className:
              "x1n2onr6 xh8yej3 x5yr21d x6ikm8r x10wlt62 xyi3aci xwf5gio x1p453bz x1suzm8a",
          }),
          (t[6] = g))
        : (g = t[6]);
      var h;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h =
            "x1n2onr6 x1lliihq x5yr21d x11t971q xvc5jky xyi3aci xwf5gio x1p453bz x1suzm8a"),
          (t[7] = h))
        : (h = t[7]);
      var y;
      t[8] !== u
        ? ((y = s.jsx(r("WAWebImg.react"), {
            className: h,
            src: u,
            disableContextMenu: !0,
          })),
          (t[8] = u),
          (t[9] = y))
        : (y = t[9]);
      var C;
      t[10] !== a.interactiveAnnotations || t[11] !== i || t[12] !== l
        ? ((C =
            a.interactiveAnnotations &&
            a.interactiveAnnotations.length > 0 &&
            s.jsx(r("WAWebAnnotation.react"), {
              annotations: a.interactiveAnnotations,
              onTooltipDisplay: i,
              onTooltipDismiss: l,
            })),
          (t[10] = a.interactiveAnnotations),
          (t[11] = i),
          (t[12] = l),
          (t[13] = C))
        : (C = t[13]);
      var b;
      t[14] !== m || t[15] !== p
        ? ((b =
            m &&
            p &&
            s.jsx("div", {
              className: "x10l6tqk x1kiq0my x78zum5 x6s0dn4 xl56j7k xh8yej3",
              children: s.jsx(r("WAWebStatusButton.react"), {
                text: m,
                url: p,
              }),
            })),
          (t[14] = m),
          (t[15] = p),
          (t[16] = b))
        : (b = t[16]);
      var v;
      t[17] !== y || t[18] !== C || t[19] !== b
        ? ((v = s.jsxs(
            "div",
            babelHelpers.extends({}, g, { children: [y, C, b] }),
          )),
          (t[17] = y),
          (t[18] = C),
          (t[19] = b),
          (t[20] = v))
        : (v = t[20]);
      var S;
      t[21] !== f || t[22] !== v
        ? ((S = s.jsx(r("WAWebObjectFit.react"), {
            type: "contain",
            size: f,
            children: v,
          })),
          (t[21] = f),
          (t[22] = v),
          (t[23] = S))
        : (S = t[23]);
      var R;
      return (
        t[24] !== i || t[25] !== l || t[26] !== S
          ? ((R = s.jsx(
              "div",
              babelHelpers.extends({}, _, {
                onMouseDown: i,
                onMouseUp: l,
                onDragEnd: l,
                "data-testid": void 0,
                children: S,
              }),
            )),
            (t[24] = i),
            (t[25] = l),
            (t[26] = S),
            (t[27] = R))
          : (R = t[27]),
        R
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.mediaData,
        a = e.onMouseDown,
        i = e.onMouseUp,
        l;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = { className: "x10l6tqk x13vifvy x1o0tod xh8yej3 x5yr21d" }),
          (t[0] = l))
        : (l = t[0]);
      var u;
      t[1] !== n.aspectRatio
        ? ((u = { width: n.aspectRatio, height: 1 }),
          (t[1] = n.aspectRatio),
          (t[2] = u))
        : (u = t[2]);
      var c;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((c =
            "x1n2onr6 x1lliihq x5yr21d x11t971q xvc5jky xyi3aci xwf5gio x1p453bz x1suzm8a"),
          (t[3] = c))
        : (c = t[3]);
      var d;
      if (t[4] !== n) {
        var m;
        ((d =
          (m = o("WAWebMediaDataUtils").getHighestQualityThumbnailUrl(n)) !=
          null
            ? m
            : ""),
          (t[4] = n),
          (t[5] = d));
      } else d = t[5];
      var p;
      t[6] !== d
        ? ((p = s.jsx(r("WAWebImg.react"), { className: c, src: d })),
          (t[6] = d),
          (t[7] = p))
        : (p = t[7]);
      var _;
      t[8] !== u || t[9] !== p
        ? ((_ = s.jsx(r("WAWebObjectFit.react"), {
            type: "contain",
            size: u,
            children: p,
          })),
          (t[8] = u),
          (t[9] = p),
          (t[10] = _))
        : (_ = t[10]);
      var f;
      return (
        t[11] !== a || t[12] !== i || t[13] !== _
          ? ((f = s.jsx(
              "div",
              babelHelpers.extends({}, l, {
                onMouseDown: a,
                onMouseUp: i,
                children: _,
              }),
            )),
            (t[11] = a),
            (t[12] = i),
            (t[13] = _),
            (t[14] = f))
          : (f = t[14]),
        f
      );
    }
    function m(e) {
      var t = e.markRead,
        n = e.msg,
        a = e.onMouseDown,
        i = e.onMouseUp,
        l = e.pause,
        m = e.play,
        p = e.status,
        _ = o("useWAWebModelValues").useModelValues(e.mediaData, [
          "mediaStage",
          "renderableUrl",
          "preview",
          "fullWidth",
          "fullHeight",
          "aspectRatio",
          "fullPreviewData",
        ]);
      u(function () {
        return (
          _.mediaStage !== o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
            n.downloadMedia({
              downloadEvenIfExpensive: !0,
              rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .STATUS_V3,
              isUserInitiated: !0,
            }),
          function () {
            l();
          }
        );
      }, []);
      var f = function () {
        return n.downloadMedia({
          downloadEvenIfExpensive: !0,
          rmrReason: o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
            .STATUS_V3,
          isUserInitiated: !0,
        });
      };
      return (
        u(
          function () {
            (m(),
              _.mediaStage === o("WAWebMediaTypes").MediaDataStage.RESOLVED &&
                t(p, n));
          },
          [t, _.mediaStage, n, m, p],
        ),
        s.jsx(r("WAWebMediaUrlProvider"), {
          mediaData: _,
          placeholderRenderer: function () {
            return s.jsx(d, { mediaData: _, onMouseDown: a, onMouseUp: i });
          },
          downloadMedia: f,
          renderProgressively: !0,
          children: function (t) {
            return s.jsx(c, {
              src: t,
              msg: n,
              mediaData: _,
              onMouseUp: i,
              onMouseDown: a,
            });
          },
        })
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
