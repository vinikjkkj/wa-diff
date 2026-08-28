__d(
  "GeoPrivateSelectorMediaUtils",
  [
    "GeoMediaItem.react",
    "GeoMediaItemGroup.react",
    "GeoPrivateMediaUtils",
    "Image.react",
    "isTruthy",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e, t, n) {
      return (
        t === void 0 && (t = "square"),
        c(e && new Map([[e.value, e]]), t, n)
      );
    }
    function c(e, t, n) {
      var r = [];
      if (e != null) {
        var o = 0;
        for (var a of e) {
          var i = a[0],
            l = a[1],
            s = _(l);
          s != null && r.push([o++, s]);
        }
      }
      return p(r, t, n);
    }
    function d(e, t, n) {
      return (t === void 0 && (t = "square"), m(e && [e], t, n));
    }
    function m(e, t, n) {
      t === void 0 && (t = "square");
      var r = [];
      if (e != null)
        for (var o of e) {
          var a = f(o);
          a != null && r.push([o.getUniqueID(), a]);
        }
      return p(r, t, n);
    }
    function p(e, t, n) {
      return n !== void 0 || e == null || e.length === 0
        ? n
        : e.length === 1
          ? e[0][1]
          : s.jsx(r("GeoMediaItemGroup.react"), {
              ratio: t,
              children: e
                .slice(0, o("GeoPrivateMediaUtils").MAX_STACKED_MEDIA_ITEMS)
                .map(function (e) {
                  var t = e[0],
                    n = e[1];
                  return s.jsx(
                    r("GeoMediaItem.react"),
                    { fit: "contain", media: n },
                    t,
                  );
                }),
            });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return e == null ? void 0 : e.media;
    }
    function f(e) {
      var t = e == null ? void 0 : e.getPhoto();
      return r("isTruthy")(t) ? s.jsx(r("Image.react"), { src: t }) : null;
    }
    ((l.getSelectorItemMedia = u),
      (l.getSearchableEntryMedia = d),
      (l.getSearchableEntriesMedia = m));
  },
  98,
);
