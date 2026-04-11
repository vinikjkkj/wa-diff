__d(
  "BlobFactory",
  ["emptyFunction"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      try {
        (new t.Blob(), (e = !0));
      } catch (t) {
        e = !1;
      }
    }
    var u =
        t.BlobBuilder ||
        t.WebKitBlobBuilder ||
        t.MozBlobBuilder ||
        t.MSBlobBuilder,
      c = t.Blob
        ? {
            getBlob: function (r, o) {
              if (((r = r || []), (o = o || {}), e === void 0 && s(), e))
                return new t.Blob(r, o);
              for (var n = new u(), a = 0; a < r.length; a++) n.append(r[a]);
              return n.getBlob(o.type);
            },
            isSupported: r("emptyFunction").thatReturnsTrue,
          }
        : {
            getBlob: function (t, n) {},
            isSupported: r("emptyFunction").thatReturnsFalse,
          },
      d = c;
    l.default = d;
  },
  98,
);
