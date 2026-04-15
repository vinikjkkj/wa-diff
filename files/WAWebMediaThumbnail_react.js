__d(
  "WAWebMediaThumbnail.react",
  [
    "WAWebClassnames",
    "WAWebMediaOpaqueData",
    "WAWebMsgType",
    "compactMap",
    "react",
    "react-compiler-runtime",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["msg", "thumbnailPlaceholder", "thumbnailRef"],
      s,
      u = s || (s = o("react")),
      c = s.useEffect;
    function d(t) {
      var n = o("react-compiler-runtime").c(7),
        r = t.msg,
        a = t.thumbnailPlaceholder,
        i = t.thumbnailRef,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        s;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = ["mediaData", "type"]), (n[0] = s))
        : (s = n[0]);
      var c = o("useWAWebModelValues").useModelValues(r, s),
        d = c.mediaData,
        _ = c.type;
      if (d == null) {
        var f =
          a != null
            ? u.jsx(p, {
                className: l.containerClassName,
                children: u.jsx("div", {
                  className: o(
                    "WAWebClassnames",
                  ).classnamesConvertMeToStylexPlease(
                    "x10l6tqk",
                    l.childClassName,
                  ),
                  children: a,
                }),
              })
            : null;
        return f;
      }
      var g;
      return (
        n[1] !== d || n[2] !== l || n[3] !== a || n[4] !== i || n[5] !== _
          ? ((g = u.jsx(
              m,
              babelHelpers.extends(
                {
                  mediaData: d,
                  thumbnailPlaceholder: a,
                  type: _,
                  thumbnailRef: i,
                },
                l,
              ),
            )),
            (n[1] = d),
            (n[2] = l),
            (n[3] = a),
            (n[4] = i),
            (n[5] = _),
            (n[6] = g))
          : (g = n[6]),
        g
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(25),
        n = e.childClassName,
        a = e.containerClassName,
        i = e.mediaData,
        l = e.thumbnailPlaceholder,
        s = e.thumbnailRef,
        c = e.type,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = ["preview", "fullPreviewData"]), (t[0] = d))
        : (d = t[0]);
      var m = o("useWAWebModelValues").useModelValues(i, d),
        f = m.fullPreviewData,
        g = m.preview,
        h,
        y,
        C,
        b;
      if (
        t[1] !== n ||
        t[2] !== a ||
        t[3] !== f ||
        t[4] !== g ||
        t[5] !== l ||
        t[6] !== s ||
        t[7] !== c
      ) {
        b = Symbol.for("react.early_return_sentinel");
        e: {
          var v = [];
          if (
            (g != null && v.push({ opaque: g, key: "preview" }),
            f != null && v.push({ opaque: f, key: "fullPreviewData" }),
            v.length === 0)
          ) {
            var S;
            t[12] !== n || t[13] !== a || t[14] !== l || t[15] !== c
              ? ((S =
                  l != null
                    ? u.jsx(p, {
                        className: a,
                        type: c,
                        children: u.jsx("div", {
                          className: o(
                            "WAWebClassnames",
                          ).classnamesConvertMeToStylexPlease("x10l6tqk", n),
                          children: l,
                        }),
                      })
                    : null),
                (t[12] = n),
                (t[13] = a),
                (t[14] = l),
                (t[15] = c),
                (t[16] = S))
              : (S = t[16]);
            var R = S;
            b = R;
            break e;
          }
          ((h = p), (y = a));
          var L;
          (t[17] !== n || t[18] !== s || t[19] !== c
            ? ((L = function (t, o) {
                var e = t.key,
                  a = t.opaque;
                return a instanceof r("WAWebMediaOpaqueData")
                  ? u.jsx(
                      _,
                      {
                        className: n,
                        opaque: a,
                        type: c,
                        ref: o === 0 ? s : void 0,
                      },
                      e,
                    )
                  : null;
              }),
              (t[17] = n),
              (t[18] = s),
              (t[19] = c),
              (t[20] = L))
            : (L = t[20]),
            (C = r("compactMap")(v, L)));
        }
        ((t[1] = n),
          (t[2] = a),
          (t[3] = f),
          (t[4] = g),
          (t[5] = l),
          (t[6] = s),
          (t[7] = c),
          (t[8] = h),
          (t[9] = y),
          (t[10] = C),
          (t[11] = b));
      } else ((h = t[8]), (y = t[9]), (C = t[10]), (b = t[11]));
      if (b !== Symbol.for("react.early_return_sentinel")) return b;
      var E;
      return (
        t[21] !== h || t[22] !== y || t[23] !== C
          ? ((E = u.jsx(h, { className: y, children: C })),
            (t[21] = h),
            (t[22] = y),
            (t[23] = C),
            (t[24] = E))
          : (E = t[24]),
        E
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        r = e.className,
        a = e.type,
        i;
      t[0] !== r || t[1] !== a
        ? ((i = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            a === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
              ? "x1n2onr6 x78zum5 xl56j7k x6s0dn4"
              : "x1n2onr6",
            r,
          )),
          (t[0] = r),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l;
      return (
        t[3] !== n || t[4] !== i
          ? ((l = u.jsx("div", { className: i, children: n })),
            (t[3] = n),
            (t[4] = i),
            (t[5] = l))
          : (l = t[5]),
        l
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.className,
        r = e.opaque,
        a = e.ref,
        i = e.type,
        l,
        s;
      (t[0] !== r
        ? ((l = function () {
            if (r != null)
              return (
                r.retain(),
                function () {
                  r.autorelease();
                }
              );
          }),
          (s = [r]),
          (t[0] = r),
          (t[1] = l),
          (t[2] = s))
        : ((l = t[1]), (s = t[2])),
        c(l, s));
      var d;
      t[3] !== n || t[4] !== i
        ? ((d = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "x10l6tqk",
            n,
            i === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
              ? "x5yr21d xh8yej3 x18d0r48"
              : null,
          )),
          (t[3] = n),
          (t[4] = i),
          (t[5] = d))
        : (d = t[5]);
      var m;
      t[6] !== r
        ? ((m = r ? { backgroundImage: 'url("' + r.url() + '")' } : null),
          (t[6] = r),
          (t[7] = m))
        : (m = t[7]);
      var p;
      return (
        t[8] !== a || t[9] !== d || t[10] !== m
          ? ((p = u.jsx("div", { ref: a, className: d, style: m })),
            (t[8] = a),
            (t[9] = d),
            (t[10] = m),
            (t[11] = p))
          : (p = t[11]),
        p
      );
    }
    l.default = d;
  },
  98,
);
