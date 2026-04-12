__d(
  "WAWebMediaThumbnail.react",
  [
    "WAWebClassnames",
    "WAWebMediaOpaqueData",
    "WAWebMsgType",
    "compactMap",
    "react",
    "useWAWebModelValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["msg", "thumbnailPlaceholder", "thumbnailRef"],
      s,
      u = s || (s = o("react")),
      c = s.useEffect;
    function d(t) {
      var n = t.msg,
        r = t.thumbnailPlaceholder,
        a = t.thumbnailRef,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = o("useWAWebModelValues").useModelValues(n, ["mediaData", "type"]),
        s = l.mediaData,
        c = l.type;
      if (s == null) {
        var d =
          r != null
            ? u.jsx(p, {
                className: i.containerClassName,
                children: u.jsx("div", {
                  className: o(
                    "WAWebClassnames",
                  ).classnamesConvertMeToStylexPlease(
                    "x10l6tqk",
                    i.childClassName,
                  ),
                  children: r,
                }),
              })
            : null;
        return d;
      }
      return u.jsx(
        m,
        babelHelpers.extends(
          { mediaData: s, thumbnailPlaceholder: r, type: c, thumbnailRef: a },
          i,
        ),
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.childClassName,
        n = e.containerClassName,
        a = e.mediaData,
        i = e.thumbnailPlaceholder,
        l = e.thumbnailRef,
        s = e.type,
        c = o("useWAWebModelValues").useModelValues(a, [
          "preview",
          "fullPreviewData",
        ]),
        d = c.fullPreviewData,
        m = c.preview,
        f = [];
      if (
        (m != null && f.push({ opaque: m, key: "preview" }),
        d != null && f.push({ opaque: d, key: "fullPreviewData" }),
        f.length === 0)
      ) {
        var g =
          i != null
            ? u.jsx(p, {
                className: n,
                type: s,
                children: u.jsx("div", {
                  className: o(
                    "WAWebClassnames",
                  ).classnamesConvertMeToStylexPlease("x10l6tqk", t),
                  children: i,
                }),
              })
            : null;
        return g;
      }
      return u.jsx(p, {
        className: n,
        children: r("compactMap")(f, function (e, n) {
          var o = e.key,
            a = e.opaque;
          return a instanceof r("WAWebMediaOpaqueData")
            ? u.jsx(
                _,
                { className: t, opaque: a, type: s, ref: n === 0 ? l : void 0 },
                o,
              )
            : null;
        }),
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.children,
        n = e.className,
        r = e.type;
      return u.jsx("div", {
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          r === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
            ? "x1n2onr6 x78zum5 xl56j7k x6s0dn4"
            : "x1n2onr6",
          n,
        ),
        children: t,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.className,
        n = e.opaque,
        r = e.ref,
        a = e.type;
      return (
        c(
          function () {
            if (n != null)
              return (
                n.retain(),
                function () {
                  n.autorelease();
                }
              );
          },
          [n],
        ),
        u.jsx("div", {
          ref: r,
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            "x10l6tqk",
            t,
            a === o("WAWebMsgType").MSG_TYPE.STICKER_PACK
              ? "x5yr21d xh8yej3 x18d0r48"
              : null,
          ),
          style: n ? { backgroundImage: 'url("' + n.url() + '")' } : null,
        })
      );
    }
    ((_.displayName = _.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
