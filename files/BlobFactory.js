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
              var n = r || [],
                a = o || {};
              if ((e === void 0 && s(), e)) return new t.Blob(n, a);
              for (var i = new u(), l = 0; l < n.length; l++) i.append(n[l]);
              return i.getBlob(a.type);
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
